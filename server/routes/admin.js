const express = require("express");
const Challenge = require("../models/Challenge");
const User = require("../models/User");
const CourseOverride = require("../models/CourseOverride");
const LessonOverride = require("../models/LessonOverride");
const PlatformSettings = require("../models/PlatformSettings");
const ensureAuth = require("../middleware/ensureAuth");
const ensureAdmin = require("../middleware/ensureAdmin");
const { ensureChallengeBank, getPlatformSettings } = require("../lib/challenges");
const { getCatalogCourses, getCatalogLessons } = require("../lib/catalog");

const router = express.Router();
router.use(ensureAuth, ensureAdmin);

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
    const [users, activeUsers, challengeCount, activeChallenges, courses] = await Promise.all([
      User.countDocuments({}),
      User.countDocuments({ isActive: { $ne: false } }),
      Challenge.countDocuments({}),
      Challenge.countDocuments({ active: true }),
      getCatalogCourses({ includeInactive: true }),
    ]);

    return res.json({
      success: true,
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
    const users = await User.find({})
      .select("name email role isActive xp level dayStreak badges completedLessons coursesStarted courseProgress dailyChallenge createdAt updatedAt")
      .sort({ createdAt: -1 })
      .lean();
    return res.json({ success: true, users: users.map(safeUser) });
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
