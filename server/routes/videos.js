const express = require("express");
const Video = require("../models/Video");
const ensureAuth = require("../middleware/ensureAuth");
const { getVideoFile, streamVideo } = require("../lib/videoStorage");

const router = express.Router();

router.get("/:videoId/stream", ensureAuth, async (req, res) => {
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
