const express = require("express");
const jwt = require("jsonwebtoken");
const Video = require("../models/Video");
const ensureAuth = require("../middleware/ensureAuth");
const { getVideoFile, streamVideo } = require("../lib/videoStorage");
const { serializeVideo } = require("../lib/videoCatalog");

const router = express.Router();

router.get("/", ensureAuth, async (req, res) => {
  try {
    const videos = await Video.find({ active: true })
      .sort({ createdAt: -1 })
      .lean();
    return res.json({
      success: true,
      count: videos.length,
      videos: videos.map(serializeVideo),
    });
  } catch (error) {
    console.error("Learner video library error:", error);
    return res.status(503).json({
      success: false,
      message: "Video tutorials are temporarily unavailable",
    });
  }
});

function ensureVideoStreamAuth(req, res, next) {
  if (req.headers.authorization || req.cookies?.token) {
    return ensureAuth(req, res, next);
  }

  const ticket = String(req.query.ticket || "");
  if (!ticket) return res.status(401).json({ success: false, message: "Video playback authorization required" });

  try {
    const payload = jwt.verify(ticket, process.env.JWT_SECRET || "devsecret");
    if (payload.purpose !== "video-stream" || String(payload.videoId) !== String(req.params.videoId)) {
      return res.status(401).json({ success: false, message: "Invalid video playback authorization" });
    }
    req.user = { id: payload.userId };
    return next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Expired video playback authorization" });
  }
}

router.get("/:videoId/playback-ticket", ensureAuth, async (req, res) => {
  try {
    const video = await Video.findOne({ _id: req.params.videoId, sourceType: "upload", active: true }).select("_id").lean();
    if (!video) return res.status(404).json({ success: false, message: "Uploaded video not found" });

    const ticket = jwt.sign(
      { purpose: "video-stream", videoId: String(video._id), userId: String(req.user.id) },
      process.env.JWT_SECRET || "devsecret",
      { expiresIn: "15m" }
    );
    res.set("Cache-Control", "no-store");
    return res.json({ success: true, ticket, expiresIn: 900 });
  } catch (error) {
    console.error("Video playback ticket error:", error);
    return res.status(500).json({ success: false, message: "Could not authorize video playback" });
  }
});

router.get("/:videoId/stream", ensureVideoStreamAuth, async (req, res) => {
  try {
    const video = await Video.findOne({ _id: req.params.videoId, sourceType: "upload", active: true }).lean();
    if (!video || !video.storageFileId) {
      return res.status(404).json({ success: false, message: "Uploaded video not found" });
    }

    const file = await getVideoFile(video.storageFileId);
    if (!file) {
      return res.status(404).json({ success: false, message: "Uploaded video file not found" });
    }

    await streamVideo(video.storageFileId, res, req, file);
  } catch (error) {
    console.error("Video stream error:", error);
    if (!res.headersSent) {
      return res.status(500).json({ success: false, message: "Could not stream video" });
    }
    res.end();
  }
});

module.exports = router;
