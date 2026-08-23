const fs = require("fs");
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const Challenge = require("../models/Challenge");
const User = require("../models/User");
const CourseOverride = require("../models/CourseOverride");
const LessonOverride = require("../models/LessonOverride");
const PlatformSettings = require("../models/PlatformSettings");
const Video = require("../models/Video");
const ensureAuth = require("../middleware/ensureAuth");
const ensureAdmin = require("../middleware/ensureAdmin");
const { ensureChallengeBank, getPlatformSettings } = require("../lib/challenges");
const { getCatalogCourses, getCatalogLessons } = require("../lib/catalog");
const { uploadVideoFile, deleteVideoFile } = require("../lib/videoStorage");
const { serializeVideo, parseTopics } = require("../lib/videoCatalog");

const router = express.Router();
router.use(ensureAuth, ensureAdmin);

const videoUploadDirectory = "/tmp/codelab-academy-video-uploads";
fs.mkdirSync(videoUploadDirectory, { recursive: true });

const videoUpload = multer({
  storage: multer.diskStorage({
    destination: videoUploadDirectory,
    filename: (req, file, callback) => {
      const safeName = path.basename(file.originalname).replace(/[^a-zA-Z0-9._-]/g, "-");
      callback(null, `${Date.now()}-${safeName}`);
    },
  }),
  limits: { fileSize: 500 * 1024 * 1024 },
  fileFilter: (req, file, callback) => {
    if (String(file.mimetype || "").startsWith("video/")) return callback(null, true);
    return callback(new Error("Only video files can be uploaded"));
  },
});

function parseVideoUpload(req, res, next) {
  videoUpload.single("videoFile")(req, res, (error) => {
    if (error) {
      return res.status(400).json({ success: false, message: error.message || "Video upload failed" });
    }
    return next();
  });
}

function safeUser(user) {
  return {
    id: String(user._id),
    name: user.name,
    email: user.email,
    role: user.role || "user",
    isActive: user.isActive !== false,
    xp: user.xp || 0,
    level: user.level || 1,
    dayStreak: user.dayStreak || 0,
    badges: user.badges || 0,
    completedLessons: user.completedLessons || 0,
    coursesStarted: user.coursesStarted || 0,
    courseProgress: user.courseProgress || [],
    dailyChallenge: user.dailyChallenge
      ? {
          attempts: user.dailyChallenge.attempts || 0,
          completed: Boolean(user.dailyChallenge.completed),
          closed: Boolean(user.dailyChallenge.closed),
          expiresAt: user.dailyChallenge.expiresAt,
        }
      : null,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
}

function safeChallenge(challenge) {
  const plain = typeof challenge.toObject === "function" ? challenge.toObject() : challenge;
  return {
    ...plain,
    id: String(plain._id || plain.id),
    xp: plain.xpReward || plain.xp || 0,
  };
}

function pickFields(source, allowed) {
  return allowed.reduce((result, field) => {
    if (source[field] !== undefined) result[field] = source[field];
    return result;
  }, {});
}

router.get("/summary", async (req, res) => {
  try {
    const databaseReadyState = mongoose.connection.readyState;
    const database = {
      connected: databaseReadyState === 1,
      state: databaseReadyState === 1 ? "connected" : databaseReadyState === 2 ? "connecting" : "unavailable",
    };
    if (!database.connected) {
      return res.json({
        success: true,
        database,
        message: "MongoDB is not connected; database metrics are unavailable.",
        summary: { users: null, activeUsers: null, challenges: null, activeChallenges: null, courses: null, activeCourses: null },
      });
    }

    const [users, activeUsers, challengeCount, activeChallenges, courses] = await Promise.all([
      User.countDocuments({}).maxTimeMS(5000),
      User.countDocuments({ isActive: { $ne: false } }).maxTimeMS(5000),
      Challenge.countDocuments({}).maxTimeMS(5000),
      Challenge.countDocuments({ active: true }).maxTimeMS(5000),
      getCatalogCourses({ includeInactive: true }),
    ]);

    return res.json({
      success: true,
        database,
        summary: {
        users,
        activeUsers,
        challenges: challengeCount,
        activeChallenges,
        courses: courses.length,
        activeCourses: courses.filter((course) => course.active !== false).length,
      },
    });
  } catch (error) {
    console.error("Admin summary error:", error);
    return res.status(500).json({ success: false, message: "Could not load admin summary" });
  }
});

router.get("/users", async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ success: false, databaseUnavailable: true, message: "MongoDB is not connected; user records are unavailable." });
    }
    const users = await User.find({})
      .maxTimeMS(5000)
      .select("name email role isActive xp level dayStreak badges completedLessons coursesStarted courseProgress dailyChallenge createdAt updatedAt")
      .sort({ createdAt: -1 })
      .lean();
    return res.json({
      success: true,
      database: { connected: true, state: "connected", source: "mongodb" },
      count: users.length,
      users: users.map(safeUser),
    });
  } catch (error) {
    console.error("Admin users error:", error);
    return res.status(500).json({ success: false, message: "Could not load users" });
  }
});

router.patch("/users/:userId", async (req, res) => {
  try {
    const updates = pickFields(req.body || {}, ["role", "isActive", "xp", "level", "dayStreak", "badges"]);
    if (String(req.params.userId) === String(req.admin._id) && (updates.role === "user" || updates.isActive === false)) {
      return res.status(400).json({ success: false, message: "You cannot remove administrator access from your active session" });
    }
    if (updates.role && !["user", "admin"].includes(updates.role)) {
      return res.status(400).json({ success: false, message: "Invalid role" });
    }
    for (const field of ["xp", "level", "dayStreak", "badges"]) {
      if (updates[field] !== undefined) {
        updates[field] = Math.max(0, Number(updates[field]) || 0);
      }
    }

    if (req.body.resetProgress === true) {
      Object.assign(updates, {
        xp: 0,
        level: 1,
        dayStreak: 0,
        badges: 0,
        completedLessons: 0,
        coursesStarted: 0,
        courseProgress: [],
        lessonSessions: [],
        currentCourse: undefined,
        currentLesson: undefined,
      });
    }

    const user = await User.findByIdAndUpdate(req.params.userId, { $set: updates }, { new: true, runValidators: true })
      .select("name email role isActive xp level dayStreak badges completedLessons coursesStarted courseProgress dailyChallenge createdAt updatedAt")
      .lean();
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    return res.json({ success: true, user: safeUser(user) });
  } catch (error) {
    console.error("Admin update user error:", error);
    return res.status(500).json({ success: false, message: "Could not update user" });
  }
});

router.get("/courses", async (req, res) => {
  try {
    const courses = await getCatalogCourses({ includeInactive: true });
    const withLessons = await Promise.all(courses.map(async (course) => ({
      ...course,
      lessons: await getCatalogLessons(course.id, { includeInactive: true }),
    })));
    return res.json({ success: true, courses: withLessons });
  } catch (error) {
    console.error("Admin courses error:", error);
    return res.status(500).json({ success: false, message: "Could not load course content" });
  }
});

router.patch("/courses/:courseId", async (req, res) => {
  try {
    const updates = pickFields(req.body || {}, ["title", "description", "category", "level", "active"]);
    if (updates.title !== undefined && !String(updates.title).trim()) {
      return res.status(400).json({ success: false, message: "Course title cannot be empty" });
    }

    const override = await CourseOverride.findOneAndUpdate(
      { courseId: req.params.courseId },
      { $set: { ...updates, updatedBy: String(req.admin._id) } },
      { upsert: true, new: true, setDefaultsOnInsert: true, runValidators: true }
    ).lean();
    return res.json({ success: true, override });
  } catch (error) {
    console.error("Admin update course error:", error);
    return res.status(500).json({ success: false, message: "Could not update course" });
  }
});

router.patch("/courses/:courseId/lessons/:lessonId", async (req, res) => {
  try {
    const updates = pickFields(req.body || {}, ["title", "description", "level", "estimatedTime", "objectives", "exampleCode", "challengeInstructions", "starterCode", "quizQuestion", "quizOptions", "quizAnswer", "sections", "active"]);
    if (updates.title !== undefined && !String(updates.title).trim()) {
      return res.status(400).json({ success: false, message: "Lesson title cannot be empty" });
    }

    const override = await LessonOverride.findOneAndUpdate(
      { courseId: req.params.courseId, lessonId: req.params.lessonId },
      { $set: { ...updates, updatedBy: String(req.admin._id) } },
      { upsert: true, new: true, setDefaultsOnInsert: true, runValidators: true }
    ).lean();
    return res.json({ success: true, override });
  } catch (error) {
    console.error("Admin update lesson error:", error);
    return res.status(500).json({ success: false, message: "Could not update lesson" });
  }
});

router.get("/videos", async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ success: false, databaseUnavailable: true, message: "MongoDB is not connected; video records are unavailable." });
    }
    const videos = await Video.find({}).sort({ createdAt: -1 }).lean();
    return res.json({ success: true, count: videos.length, videos: videos.map(serializeVideo) });
  } catch (error) {
    console.error("Admin videos error:", error);
    return res.status(500).json({ success: false, message: "Could not load videos" });
  }
});

router.post("/videos", parseVideoUpload, async (req, res) => {
  let storageFileId = null;
  let temporaryFilePath = null;
  try {
    temporaryFilePath = req.file?.path || null;
    const {
      title,
      description,
      topics,
      courseId,
      courseTitle,
      lessonId,
      lessonTitle,
      videoUrl,
    } = req.body || {};

    if (!String(title || "").trim() || !String(description || "").trim() || !String(courseId || "").trim() || !String(lessonId || "").trim()) {
      return res.status(400).json({ success: false, message: "Title, description, course, and lesson are required" });
    }
    if (req.file && videoUrl) {
      return res.status(400).json({ success: false, message: "Choose either an uploaded file or a video URL, not both" });
    }
    if (!req.file && !String(videoUrl || "").trim()) {
      return res.status(400).json({ success: false, message: "Upload a video file or provide a video URL" });
    }

    let normalizedUrl = "";
    if (!req.file) {
      try {
        const parsedUrl = new URL(String(videoUrl).trim());
        if (!["http:", "https:"].includes(parsedUrl.protocol)) throw new Error("Unsupported protocol");
        normalizedUrl = parsedUrl.toString();
      } catch {
        return res.status(400).json({ success: false, message: "Video URL must be a valid http or https URL" });
      }
    }

    if (req.file) {
      storageFileId = await uploadVideoFile(
        req.file.path,
        req.file.originalname,
        req.file.mimetype,
        { uploadedBy: String(req.admin._id), courseId: String(courseId), lessonId: String(lessonId) }
      );
    }

    const video = await Video.create({
      title: String(title).trim(),
      description: String(description).trim(),
      topics: parseTopics(topics),
      courseId: String(courseId).trim(),
      courseTitle: String(courseTitle || "").trim(),
      lessonId: String(lessonId).trim(),
      lessonTitle: String(lessonTitle || "").trim(),
      sourceType: req.file ? "upload" : "url",
      videoUrl: normalizedUrl,
      storageFileId,
      originalFilename: req.file?.originalname || "",
      mimeType: req.file?.mimetype || "",
      fileSize: req.file?.size || 0,
      active: true,
      createdBy: String(req.admin._id),
      updatedBy: String(req.admin._id),
    });

    return res.status(201).json({ success: true, video: serializeVideo(video) });
  } catch (error) {
    if (storageFileId) {
      try { await deleteVideoFile(storageFileId); } catch (cleanupError) { console.error("Video cleanup error:", cleanupError); }
    }
    console.error("Admin create video error:", error);
    return res.status(500).json({ success: false, message: error.message || "Could not create video" });
  } finally {
    if (temporaryFilePath) {
      try { await fs.promises.unlink(temporaryFilePath); } catch (cleanupError) { console.error("Temporary video cleanup error:", cleanupError); }
    }
  }
});

router.patch("/videos/:videoId", async (req, res) => {
  try {
    const updates = pickFields(req.body || {}, ["title", "description", "topics", "courseId", "courseTitle", "lessonId", "lessonTitle", "active"]);
    if (updates.title !== undefined && !String(updates.title).trim()) {
      return res.status(400).json({ success: false, message: "Video title cannot be empty" });
    }
    if (updates.description !== undefined && !String(updates.description).trim()) {
      return res.status(400).json({ success: false, message: "Video description cannot be empty" });
    }
    if (updates.topics !== undefined) updates.topics = parseTopics(updates.topics);
    updates.updatedBy = String(req.admin._id);
    const video = await Video.findByIdAndUpdate(req.params.videoId, { $set: updates }, { new: true, runValidators: true });
    if (!video) return res.status(404).json({ success: false, message: "Video not found" });
    return res.json({ success: true, video: serializeVideo(video) });
  } catch (error) {
    console.error("Admin update video error:", error);
    return res.status(500).json({ success: false, message: "Could not update video" });
  }
});

router.delete("/videos/:videoId", async (req, res) => {
  try {
    const video = await Video.findByIdAndDelete(req.params.videoId);
    if (!video) return res.status(404).json({ success: false, message: "Video not found" });
    if (video.storageFileId) {
      try { await deleteVideoFile(video.storageFileId); } catch (cleanupError) { console.error("Video file cleanup error:", cleanupError); }
    }
    return res.json({ success: true, id: String(video._id) });
  } catch (error) {
    console.error("Admin delete video error:", error);
    return res.status(500).json({ success: false, message: "Could not delete video" });
  }
});

router.get("/challenges", async (req, res) => {
  try {
    const challenges = await Challenge.find({}).sort({ createdAt: -1 }).lean();
    return res.json({ success: true, challenges: challenges.map(safeChallenge) });
  } catch (error) {
    console.error("Admin challenges error:", error);
    return res.status(500).json({ success: false, message: "Could not load challenges" });
  }
});

router.post("/challenges", async (req, res) => {
  try {
    const payload = pickFields(req.body || {}, ["title", "type", "prompt", "choices", "canonicalAnswer", "requirements", "starter", "xpReward", "active", "difficulty"]);
    if (!payload.title || !payload.prompt || payload.canonicalAnswer === undefined) {
      return res.status(400).json({ success: false, message: "Title, prompt, and canonical answer are required" });
    }
    if (payload.xpReward === undefined) {
      const settings = await getPlatformSettings();
      payload.xpReward = settings.defaultChallengeXP;
    }
    const challenge = await Challenge.create(payload);
    return res.status(201).json({ success: true, challenge: safeChallenge(challenge) });
  } catch (error) {
    console.error("Admin create challenge error:", error);
    return res.status(500).json({ success: false, message: "Could not create challenge" });
  }
});

router.patch("/challenges/:challengeId", async (req, res) => {
  try {
    const updates = pickFields(req.body || {}, ["title", "type", "prompt", "choices", "canonicalAnswer", "requirements", "starter", "xpReward", "active", "difficulty"]);
    const challenge = await Challenge.findByIdAndUpdate(req.params.challengeId, { $set: updates }, { new: true, runValidators: true });
    if (!challenge) return res.status(404).json({ success: false, message: "Challenge not found" });
    return res.json({ success: true, challenge: safeChallenge(challenge) });
  } catch (error) {
    console.error("Admin update challenge error:", error);
    return res.status(500).json({ success: false, message: "Could not update challenge" });
  }
});

router.delete("/challenges/:challengeId", async (req, res) => {
  try {
    const challenge = await Challenge.findByIdAndDelete(req.params.challengeId);
    if (!challenge) return res.status(404).json({ success: false, message: "Challenge not found" });
    return res.json({ success: true });
  } catch (error) {
    console.error("Admin delete challenge error:", error);
    return res.status(500).json({ success: false, message: "Could not delete challenge" });
  }
});

router.post("/challenges/seed", async (req, res) => {
  try {
    await ensureChallengeBank();
    const challenges = await Challenge.find({}).sort({ createdAt: -1 }).lean();
    return res.json({ success: true, challenges: challenges.map(safeChallenge) });
  } catch (error) {
    console.error("Admin seed challenges error:", error);
    return res.status(500).json({ success: false, message: "Could not seed challenges" });
  }
});

router.get("/settings", async (req, res) => {
  try {
    const settings = await getPlatformSettings();
    return res.json({ success: true, settings });
  } catch (error) {
    console.error("Admin settings error:", error);
    return res.status(500).json({ success: false, message: "Could not load settings" });
  }
});

router.patch("/settings", async (req, res) => {
  try {
    const updates = pickFields(req.body || {}, ["academyName", "challengeWindowHours", "defaultChallengeXP", "dailyChallengesEnabled"]);
    if (updates.academyName !== undefined) {
      updates.academyName = String(updates.academyName).trim();
      if (!updates.academyName) return res.status(400).json({ success: false, message: "Academy name cannot be empty" });
    }
    if (updates.challengeWindowHours !== undefined) {
      updates.challengeWindowHours = Math.max(1, Math.min(168, Number(updates.challengeWindowHours) || 24));
    }
    if (updates.defaultChallengeXP !== undefined) {
      updates.defaultChallengeXP = Math.max(0, Math.min(10000, Number(updates.defaultChallengeXP) || 0));
    }

    const settings = await PlatformSettings.findOneAndUpdate(
      { _id: "platform" },
      { $set: { ...updates, updatedBy: String(req.admin._id) } },
      { upsert: true, new: true, setDefaultsOnInsert: true, runValidators: true }
    ).lean();
    return res.json({ success: true, settings });
  } catch (error) {
    console.error("Admin update settings error:", error);
    return res.status(500).json({ success: false, message: "Could not update settings" });
  }
});

module.exports = router;
