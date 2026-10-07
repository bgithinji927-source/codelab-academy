const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/User");
const Video = require("../models/Video");
const ensureAuth = require("../middleware/ensureAuth");
const { serializeVideo } = require("../lib/videoCatalog");
const { getCatalogCourses, getCatalogLessons } = require("../lib/catalog");
const {
  buildLearnerCourseAccess,
  findCourseAccess,
  isComplete,
} = require("../lib/progression");
const { getPlatformSettings } = require("../lib/challenges");
const { getKaiBackgroundFile, streamKaiBackground } = require("../lib/videoStorage");
const { retrieveTeachingContext } = require("../lib/teachingMaterials");
const { isAdministrator } = require("../lib/admin");

const router = express.Router();

// Ensure fetch is available in Node
const fetch =
  globalThis.fetch ||
  ((...args) => import("node-fetch").then((m) => m.default(...args)));

const GROQ_API_URL =
  "https://api.groq.com/openai/v1/chat/completions";

// Groq retired llama-3.3-70b-versatile. Keep this configurable while using
// a current production model by default.
const GROQ_MODEL =
  process.env.GROQ_MODEL || "openai/gpt-oss-120b";

function extractAssistantText(data) {
  const choice = data?.choices?.[0] || {};
  const message = choice.message || {};
  const content = message.content ?? choice.text ?? "";
  if (Array.isArray(content)) {
    return content
      .map((part) => typeof part === "string"
        ? part
        : part?.text || part?.content || (part && typeof part === "object" ? JSON.stringify(part) : ""))
      .join(" ");
  }
  if (content && typeof content === "object") return JSON.stringify(content);
  return String(content || "");
}

async function generateActivityNarration({ course, lesson, learnerMessage }) {
  const response = await fetch(GROQ_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages: [
        {
          role: "system",
          content: "You are Kai, an AI instructor. Write one short learner-facing status sentence describing the educational work you are about to do. Do not reveal chain-of-thought, hidden reasoning, tools, policies, or internal steps. Use present continuous tense, keep it under 12 words, and return only JSON in the form {\"activity\":\"...\"}.",
        },
        {
          role: "user",
          content: JSON.stringify({
            course: course?.title || course?.id || "the course",
            lesson: lesson?.title || lesson?.id || "the lesson",
            learnerMessage: String(learnerMessage || "").slice(0, 500),
          }),
        },
      ],
      max_completion_tokens: 80,
      response_format: { type: "json_object" },
      ...(/gpt-oss/i.test(GROQ_MODEL)
        ? { reasoning_effort: "low", include_reasoning: false }
        : {}),
    }),
  });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload?.error?.message || "Activity narration unavailable");
  const text = extractAssistantText(payload);
  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch {
    parsed = { activity: text };
  }
  const activity = String(parsed?.activity || "")
    .replace(/[\r\n]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 120);
  if (!activity) throw new Error("Activity narration was empty");
  return activity;
}

async function reviewAndCorrectReply({ reply, systemPrompt, learnerMessage, conversationHistory }) {
  const reviewMessages = [
    {
      role: "system",
      content: `You are Kai's private answer checker. Review the drafted learner-facing answer for factual accuracy, alignment with the lesson, and whether it directly answers the learner's question.

Do not rewrite an answer merely for preference. Mark needs_correction true when there is a clear factual error, unsafe or misleading instruction, contradiction with the lesson, a missed direct answer, or a learner-facing formatting problem. A serialized provider payload shown as raw JSON, Markdown fence around the response object, duplicated transport fields, or content that would not be human-readable when displayed in the lesson UI is a formatting problem that must be corrected.

If the draft is correct and will render as human-readable lesson content, return exactly: {"needs_correction":false,"corrected_reply":""}
If it is wrong or not human-readable, return a corrected learner-facing answer in corrected_reply. For a structured lesson response, corrected_reply must be one valid JSON object with a non-empty content array of renderable blocks; never return the JSON object as quoted text, a Markdown code fence, or an explanation of the correction. Preserve any required control markers such as [LESSON_COMPLETE: ...], [COURSE_READY: ...], [UI_ACTION: CONTINUE_LESSON], [UI_ACTION: REVIEW_PREVIOUS_LESSON], or [VIDEO_RECOMMEND_ID: ...]. Do not include analysis or hidden reasoning.

The teaching instructions and lesson context are:
${systemPrompt}`,
    },
    ...conversationHistory.slice(-6),
    {
      role: "user",
      content: JSON.stringify({
        learnerQuestion: String(learnerMessage || "").slice(0, 4000),
        draftedAnswer: String(reply || "").slice(0, 12000),
      }),
    },
  ];

  const response = await fetch(GROQ_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages: reviewMessages,
      temperature: 0,
      max_completion_tokens: 4096,
      response_format: { type: "json_object" },
      ...(/gpt-oss/i.test(GROQ_MODEL)
        ? { reasoning_effort: "low", include_reasoning: false }
        : {}),
    }),
  });

  if (!response.ok) throw new Error("Kai answer review unavailable");
  const payload = await response.json();
  const reviewText = extractAssistantText(payload);
  let review;
  try {
    review = JSON.parse(reviewText);
  } catch {
    throw new Error("Kai answer review returned invalid JSON");
  }

  if (!review?.needs_correction || typeof review.corrected_reply !== "string") {
    return { reply, corrected: false };
  }

  const correctedReply = review.corrected_reply.trim();
  if (!correctedReply) return { reply, corrected: false };
  return { reply: correctedReply, corrected: true };
}

function parseStructuredReply(value) {
  if (Array.isArray(value)) return value;
  if (value && typeof value === "object") {
    if (Array.isArray(value.content)) return value.content;
    if (value.content && typeof value.content === "object") return [value.content];
  }
  const text = String(value || "")
    .replace(/```json\s*/gi, "")
    .replace(/```/g, "")
    .trim();
  const candidates = [text];
  const firstBrace = text.indexOf("{");
  const lastBrace = text.lastIndexOf("}");
  if (firstBrace >= 0 && lastBrace > firstBrace) {
    candidates.push(text.slice(firstBrace, lastBrace + 1));
  }

  for (const candidate of candidates) {
    try {
      let parsed = JSON.parse(candidate);
      if (typeof parsed === "string") parsed = JSON.parse(parsed);
      if (Array.isArray(parsed)) return parsed;
      if (Array.isArray(parsed?.content)) return parsed.content;
      if (parsed?.content && typeof parsed.content === "object") return [parsed.content];
    } catch {
      // Keep the original text when the model response is not valid JSON.
    }
  }
  return null;
}

function readableBlockValue(value) {
  if (value === null || value === undefined) return "";
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") return String(value);
  if (Array.isArray(value)) return value.map(readableBlockValue).filter(Boolean).join("\n");
  if (typeof value === "object") {
    const preferred = value.text ?? value.content ?? value.label ?? value.title ?? value.description ?? value.code ?? value.name;
    if (preferred !== undefined) return readableBlockValue(preferred);
    return "";
  }
  return "";
}

function structuredReplyToMarkdown(blocks) {
  if (!Array.isArray(blocks)) return "";
  return blocks.map((block) => {
    if (!block || typeof block !== "object") return "";
    if (block.type === "heading" || block.type === "subheading") return `## ${readableBlockValue(block.text ?? block.content)}`;
    if (block.type === "text" || block.type === "quote" || block.type === "callout") return readableBlockValue(block.text ?? block.content ?? block.description);
    if (block.type === "bullets") return (block.items || []).map((item) => `- ${readableBlockValue(item)}`).filter((item) => item !== "- ").join("\n");
    if (block.type === "numbered") return (block.items || []).map((item, index) => `${index + 1}. ${readableBlockValue(item)}`).join("\n");
    if (["code", "terminal", "json", "xml"].includes(block.type)) return `\n\`\`\`${readableBlockValue(block.language) || (block.type === "terminal" ? "sh" : block.type)}\n${readableBlockValue(block.code ?? block.content)}\n\`\`\``;
    if (block.type === "quiz" || block.type === "choice") return `${readableBlockValue(block.question)}\n${(block.options || []).map((option, index) => `${index + 1}. ${readableBlockValue(option)}`).join("\n")}`;
    if (block.type === "suggestions" || ["quick_replies", "quickReplies"].includes(block.type)) return (block.items || []).map((item) => `- ${readableBlockValue(item)}`).filter((item) => item !== "- ").join("\n");
    return readableBlockValue(block.content ?? block.text ?? block.title);
  }).filter(Boolean).join("\n\n").trim();
}

function sessionPayload(session) {
  if (!session) return null;
  return {
    conversationHistory: session.conversationHistory || [],
    completed: Boolean(session.completed),
    summary: session.summary || "",
    lastAccessedAt: session.lastAccessedAt,
  };
}

async function findRelevantVideo({ course, lesson, learnerMessage }) {
  try {
    const query = String(learnerMessage || "").toLowerCase();
    const tokens = [...new Set(query.match(/[a-z0-9+#.-]{3,}/g) || [])]
      .filter((token) => !["the", "and", "with", "this", "that", "how", "what", "can", "does", "help", "want", "show"].includes(token));
    if (!tokens.length) return null;

    const videos = await Video.find({ active: true }).lean();
    const ranked = videos
      .map((video) => {
        const title = String(video.title || "").toLowerCase();
        const description = String(video.description || "").toLowerCase();
        const topics = (video.topics || []).join(" ").toLowerCase();
        const courseText = `${video.courseId || ""} ${video.courseTitle || ""}`.toLowerCase();
        const lessonText = `${video.lessonId || ""} ${video.lessonTitle || ""}`.toLowerCase();
        const score = tokens.reduce((total, token) => total
          + (title.includes(token) ? 7 : 0)
          + (topics.includes(token) ? 5 : 0)
          + (lessonText.includes(token) ? 4 : 0)
          + (courseText.includes(token) ? 3 : 0)
          + (description.includes(token) ? 2 : 0), 0);
        const sameCourse = course && (String(video.courseId) === String(course.id) || courseText.includes(String(course.title || "").toLowerCase()));
        const sameLesson = lesson && (String(video.lessonId) === String(lesson.id) || lessonText.includes(String(lesson.title || "").toLowerCase()));
        return { video, score: score + (sameCourse ? 6 : 0) + (sameLesson ? 8 : 0) };
      })
      .filter((item) => item.score > 0)
      .sort((left, right) => right.score - left.score);

    return ranked[0] ? serializeVideo(ranked[0].video) : null;
  } catch (error) {
    console.error("Kai video search error:", error);
    return null;
  }
}

async function findVerifiedVideoById({ course, lesson, videoId }) {
  try {
    if (!mongoose.Types.ObjectId.isValid(videoId)) return null;
    const video = await Video.findOne({ _id: videoId, active: true }).lean();
    if (!video) return null;
    const sameCourse = !course || String(video.courseId) === String(course.id);
    const sameLesson = !lesson || String(video.lessonId) === String(lesson.id);
    if (!sameCourse && !sameLesson) return null;
    return serializeVideo(video);
  } catch (error) {
    console.error("Kai verified video ID lookup error:", error);
    return null;
  }
}

async function markCurrentLessonComplete(userId, courseId, lessonId) {
  return User.findOneAndUpdate(
    {
      _id: userId,
      "currentCourse.id": courseId,
      "currentLesson.id": lessonId,
    },
    { $set: { "currentLesson.completed": true } },
    { new: true }
  );
}

async function markCourseReadyForNext(userId, courseId, readinessSummary) {
  return User.findOneAndUpdate(
    {
      _id: userId,
      "courseProgress.courseId": courseId,
    },
    {
      $set: {
        "courseProgress.$.readyForNextCourse": true,
        "courseProgress.$.readinessStatus": "ready",
        "courseProgress.$.readinessSummary": readinessSummary || "Kai confirmed that you are ready for the next course.",
        "courseProgress.$.readyAt": new Date(),
        "courseProgress.$.unlockedBy": "kai",
      },
    },
    { new: true }
  );
}

// ============================================
// PLATFORM KAI BACKGROUND
// ============================================

// This endpoint intentionally returns only the learner-safe platform default.
// Individual learner preferences remain handled by /api/auth/preferences.
router.get("/background", async (req, res) => {
  try {
    const settings = await getPlatformSettings();
    const imageId = settings?.kaiBackgroundImageFileId ? String(settings.kaiBackgroundImageFileId) : "";
    const imageVersion = settings?.kaiBackgroundImageUpdatedAt || settings?.updatedAt || "";
    return res.json({
      success: true,
      kaiBackground: settings?.kaiBackground || "neon-orbit",
      imageUrl: imageId
        ? `/api/kai/background/image?v=${encodeURIComponent(new Date(imageVersion).getTime() || imageId)}`
        : "",
      imageFilename: settings?.kaiBackgroundImageFilename || "",
    });
  } catch (error) {
    console.error("Kai background settings error:", error);
    return res.status(200).json({ success: true, kaiBackground: "neon-orbit", imageUrl: "", imageFilename: "" });
  }
});

router.get("/background/image", async (req, res) => {
  try {
    const settings = await getPlatformSettings();
    const imageId = settings?.kaiBackgroundImageFileId ? String(settings.kaiBackgroundImageFileId) : "";
    if (!imageId) return res.status(404).json({ success: false, message: "No custom Kai background image has been uploaded" });

    const file = await getKaiBackgroundFile(imageId);
    if (!file) return res.status(404).json({ success: false, message: "Kai background image not found" });
    await streamKaiBackground(imageId, res, file);
  } catch (error) {
    console.error("Kai background image stream error:", error);
    if (!res.headersSent) return res.status(404).json({ success: false, message: "Kai background image is unavailable" });
    return res.end();
  }
});

router.post("/activity", ensureAuth, async (req, res) => {
  try {
    const activity = await generateActivityNarration(req.body || {});
    return res.json({ success: true, activity });
  } catch (error) {
    console.warn("Kai activity narration unavailable:", error.message);
    return res.status(502).json({ success: false, message: "Kai activity narration unavailable" });
  }
});

// ============================================
// HELPER: LOAD OR CREATE SESSION
// ============================================

async function getOrCreateLessonSession(
  userId,
  courseId,
  lessonId,
  lessonIndex
) {
  try {
    const user = await User.findById(userId);
    if (!user) return null;

    // Find existing session
    let session = user.lessonSessions.find(
      (s) =>
        s.courseId === courseId &&
        s.lessonId === lessonId
    );

    // Create new session if doesn't exist
    if (!session) {
      session = {
        courseId,
        lessonId,
        lessonIndex,
        conversationHistory: [],
        startedAt: new Date(),
        lastAccessedAt: new Date(),
        completed: false,
        summary: "",
      };

      user.lessonSessions.push(session);
      await user.save();
    } else {
      // Update last accessed and repair the index for sessions created by the
      // earlier persistence implementation, which defaulted every lesson to 0.
      session.lessonIndex = Number(lessonIndex) || 0;
      session.lastAccessedAt = new Date();
      await user.save();
    }

    return session;
  } catch (error) {
    console.error("Error getting/creating lesson session:", error);
    return null;
  }
}

// ============================================
// HELPER: SAVE CONVERSATION
// ============================================

async function saveConversation(
  userId,
  courseId,
  lessonId,
  role,
  content,
  video = null,
  contentBlocks = null
) {
  try {
    const user = await User.findById(userId);
    if (!user) return;

    const session = user.lessonSessions.find(
      (s) =>
        s.courseId === courseId &&
        s.lessonId === lessonId
    );

    if (session) {
      session.conversationHistory.push({
        role,
        content,
        ...(Array.isArray(contentBlocks) ? { contentBlocks } : {}),
        ...(video ? { video } : {}),
        timestamp: new Date(),
      });

      session.lastAccessedAt = new Date();
      await user.save();
    }
  } catch (error) {
    console.error("Error saving conversation:", error);
  }
}

// ============================================
// HELPER: MARK LESSON COMPLETE (ATOMIC)
// ============================================

// xpAward defaults to environment LESSON_XP_DEFAULT or 5
async function markLessonComplete(
  userId,
  courseId,
  lessonId,
  summary,
  xpAward = Number(process.env.LESSON_XP_DEFAULT) || 5,
  lessonIndex = 0
) {
  try {
    // First: try an atomic update where the courseProgress element exists
    const updated = await User.findOneAndUpdate(
      {
        _id: userId,
        "courseProgress.courseId": courseId,
        "courseProgress.completedLessonIds": { $ne: lessonId },
      },
      {
        $inc: {
          xp: xpAward,
          completedLessons: 1,
          "courseProgress.$.lessonsCompleted": 1,
        },
        $addToSet: {
          "courseProgress.$.completedLessonIds": lessonId,
        },
        $set: {
          "courseProgress.$.lastLessonIndex": Number(lessonIndex) || 0,
          "courseProgress.$.lastAccessedAt": new Date(),
        },
      },
      { new: true }
    );

    if (updated) {
      // Mark the lessonSession as completed as well (best-effort)
      await User.findOneAndUpdate(
        { _id: userId, "lessonSessions.courseId": courseId, "lessonSessions.lessonId": lessonId },
        {
          $set: {
            "lessonSessions.$.completed": true,
            "lessonSessions.$.completedAt": new Date(),
            "lessonSessions.$.summary": summary || "",
          },
        }
      );

      return updated;
    }

    // If we reach here, either the courseProgress doesn't exist or the lesson was already completed.
    // Try to add a new courseProgress element (only if it doesn't already exist).
    const added = await User.findOneAndUpdate(
      { _id: userId, "courseProgress.courseId": { $ne: courseId } },
      {
        $push: {
          courseProgress: {
            courseId,
            lessonsCompleted: 1,
            totalLessons: 0,
            completedLessonIds: [lessonId],
            lastLessonIndex: Number(lessonIndex) || 0,
            lastAccessedAt: new Date(),
          },
        },
        $inc: { xp: xpAward, completedLessons: 1 },
      },
      { new: true }
    );

    if (added) {
      // ensure lesson session updated too
      await User.findOneAndUpdate(
        { _id: userId, "lessonSessions.courseId": courseId, "lessonSessions.lessonId": lessonId },
        {
          $set: {
            "lessonSessions.$.completed": true,
            "lessonSessions.$.completedAt": new Date(),
            "lessonSessions.$.summary": summary || "",
          },
        }
      );

      return added;
    }

    // If nothing was updated, the lesson was already marked complete.
    // Return the current user state.
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    console.error("Error marking lesson complete:", error);
    return null;
  }
}

// ============================================
// START A COURSE FOR A USER
// POST /api/kai/courses/:courseId/start
// Body: { courseTitle, totalLessons }
// Protected: requires auth (req.user.id)
// ============================================

router.post("/courses/:courseId/start", ensureAuth, async (req, res) => {
  try {
    const { courseId } = req.params;
    const {
      courseTitle,
      totalLessons = 0,
      firstLessonId,
      firstLessonTitle,
      initialLessonId,
    } = req.body;

    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ success: false, message: "Authentication required" });
    }

    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        code: "DATABASE_UNAVAILABLE",
        message: "Progress storage is unavailable. Configure MONGODB_URI and reconnect the database before starting a course.",
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    const isAdmin = isAdministrator(user);

    // Normalize records created before progress/session fields were added.
    // Mongoose normally applies array defaults, but older documents can still
    // contain null values that make .find(), .filter(), or .push() fail.
    if (!Array.isArray(user.courseProgress)) user.courseProgress = [];
    if (!Array.isArray(user.lessonSessions)) user.lessonSessions = [];

    const catalogCourses = await getCatalogCourses();
    const learnerAccess = buildLearnerCourseAccess(user, catalogCourses);
    const requestedCourseAccess = findCourseAccess(learnerAccess, courseId);

    if (!requestedCourseAccess) {
      return res.status(404).json({ success: false, message: "This course is not available in the learner catalog" });
    }

    if (requestedCourseAccess.locked) {
      return res.status(403).json({
        success: false,
        message: requestedCourseAccess.unlockReason,
        courseLocked: true,
        courseAccess: requestedCourseAccess,
      });
    }

    const catalogLessons = await getCatalogLessons(courseId);
    const catalogTotal = catalogLessons.length;
    const actualTotalLessons = catalogTotal || Number(totalLessons) || 0;
    const firstCatalogLesson = catalogLessons[0] || null;

    let cp = user.courseProgress.find((p) => String(p.courseId) === String(courseId));
    const isNewCourseEnrollment = !cp;
    if (!cp) {
      cp = {
        courseId,
        courseTitle: courseTitle || "",
        lessonsCompleted: 0,
        totalLessons: actualTotalLessons,
        lastLessonIndex: 0,
        completedLessonIds: [],
        startedAt: new Date(),
        lastAccessedAt: new Date(),
        unlockedAt: requestedCourseAccess.isEntry ? new Date() : requestedCourseAccess.unlockedAt || new Date(),
        unlockedBy: requestedCourseAccess.isEntry ? "system-entry" : "kai",
      };
      user.courseProgress.push(cp);
      user.coursesStarted = (Number(user.coursesStarted) || 0) + 1;
    } else {
      cp.courseTitle = courseTitle || cp.courseTitle || "";
      if (actualTotalLessons > 0) cp.totalLessons = actualTotalLessons;
      if (!cp.startedAt) cp.startedAt = cp.lastAccessedAt || new Date();
      if (!cp.unlockedAt) cp.unlockedAt = requestedCourseAccess.isEntry ? new Date() : requestedCourseAccess.unlockedAt || new Date();
      if (!cp.unlockedBy) cp.unlockedBy = requestedCourseAccess.isEntry ? "system-entry" : "kai";
      cp.lastAccessedAt = new Date();
    }

    const sameCourseIsActive = String(user.currentCourse?.id || "") === String(courseId);
    const storedIndex = Number.isInteger(Number(user.currentLesson?.index))
      ? Number(user.currentLesson.index)
      : Number(cp.lastLessonIndex) || 0;
    const progressIndex = Math.min(Math.max(Number(cp.lastLessonIndex) || 0, 0), Math.max(actualTotalLessons - 1, 0));
    const requestedLessonIndex = isAdmin && initialLessonId
      ? catalogLessons.findIndex((item) => String(item.id) === String(initialLessonId))
      : -1;
    const activeIndex = requestedLessonIndex >= 0
      ? requestedLessonIndex
      : sameCourseIsActive && user.currentLesson?.id
        ? Math.min(Math.max(storedIndex, 0), Math.max(actualTotalLessons - 1, 0))
        : progressIndex;
    const activeCatalogLesson = catalogLessons[activeIndex] || firstCatalogLesson;
    const storedLessonIsValid = activeCatalogLesson
      && String(user.currentLesson?.id || "") === String(activeCatalogLesson.id)
      && activeIndex === storedIndex;

    user.currentCourse = { id: courseId, title: courseTitle || cp.courseTitle || "" };
    user.currentLesson = {
      id: storedLessonIsValid ? user.currentLesson.id : activeCatalogLesson?.id || firstLessonId || null,
      title: storedLessonIsValid ? user.currentLesson.title : activeCatalogLesson?.title || firstLessonTitle || null,
      index: storedLessonIsValid ? activeIndex : progressIndex,
      completed: storedLessonIsValid
        ? Boolean(user.currentLesson.completed)
        : Boolean(activeCatalogLesson && cp.completedLessonIds?.includes(activeCatalogLesson.id)),
    };

    const catalogIndexById = new Map(catalogLessons.map((item, index) => [String(item.id), index]));
    user.lessonSessions
      .filter((item) => item.courseId === courseId)
      .forEach((item) => {
        const catalogIndex = catalogIndexById.get(String(item.lessonId));
        if (catalogIndex !== undefined) item.lessonIndex = catalogIndex;
      });

    await user.save();

    const currentLessonId = user.currentLesson?.id;
    const session = currentLessonId
      ? user.lessonSessions.find((item) => item.courseId === courseId && item.lessonId === currentLessonId)
      : null;
    const sessions = user.lessonSessions
      .filter((item) => item.courseId === courseId)
      .sort((left, right) => Number(left.lessonIndex || 0) - Number(right.lessonIndex || 0))
      .map((item) => ({
        lessonId: item.lessonId,
        lessonIndex: Number(item.lessonIndex || 0),
        ...sessionPayload(item),
      }));

    return res.json({
      success: true,
      courseProgress: cp,
      currentLesson: user.currentLesson,
      session: sessionPayload(session),
      sessions,
      courseAccess: buildLearnerCourseAccess(user, catalogCourses),
      adminAccess: isAdmin,
      user: { id: user._id, xp: user.xp, level: user.level, coursesStarted: user.coursesStarted },
      courseStarted: isNewCourseEnrollment,
    });
  } catch (err) {
    console.error("Error starting course:", err);
    return res.status(500).json({
      success: false,
      message: "Failed to start course",
      error: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
  }
});

// ============================================
// EXPLICIT LESSON COMPLETE ENDPOINT
// POST /api/kai/lesson/complete
// Body: { courseId, lessonId, summary, xpAward }
// Protected: requires auth
// ============================================

router.post("/lesson/complete", ensureAuth, async (req, res) => {
  try {
    const { courseId, lessonId, summary = "", xpAward } = req.body;

    const userId = req.user?.id;

    if (!userId || !courseId || !lessonId) {
      return res.status(400).json({ success: false, message: "courseId and lessonId are required" });
    }

    const learner = await User.findById(userId);
    const catalogLessons = await getCatalogLessons(courseId);
    const isCatalogCourse = catalogLessons.length > 0;
    const isActiveLesson = learner
      && String(learner.currentCourse?.id || "") === String(courseId)
      && String(learner.currentLesson?.id || "") === String(lessonId);
    const isAdmin = isAdministrator(learner);
    if (isCatalogCourse && !isActiveLesson && !isAdmin) {
      return res.status(409).json({ success: false, message: "Only the server-owned active lesson can be completed" });
    }

    const awardedXP = typeof xpAward === "number" ? xpAward : Number(process.env.LESSON_XP_DEFAULT) || 5;

    const updatedUser = await markLessonComplete(
      userId,
      courseId,
      lessonId,
      summary,
      awardedXP,
      Number(learner.currentLesson?.index) || 0
    );

    if (!updatedUser) {
      return res.status(500).json({ success: false, message: "Could not mark lesson complete" });
    }

    const stateUpdatedUser = await markCurrentLessonComplete(userId, courseId, lessonId);
    const cp = updatedUser.courseProgress.find((p) => String(p.courseId) === String(courseId)) || null;

    return res.json({ success: true, user: { id: updatedUser._id, xp: updatedUser.xp, level: updatedUser.level, completedLessons: updatedUser.completedLessons }, courseProgress: cp, lessonComplete: true, readyForNextLesson: Boolean(stateUpdatedUser || updatedUser) });
  } catch (err) {
    console.error("Error in lesson complete endpoint:", err);
    return res.status(500).json({ success: false, message: "Failed to complete lesson" });
  }
});

// ============================================
// GET USER PROGRESS
// GET /api/kai/progress/:userId
// Protected: only the authenticated user may fetch their own progress
// ============================================

router.get("/progress/:userId", ensureAuth, async (req, res) => {
  try {
    const { userId } = req.params;

    // allow admin fetch or match param with authenticated user
    const callerId = req.user?.id;

    if (callerId && String(callerId) !== String(userId)) {
      // For now disallow fetching other users' progress
      return res.status(403).json({ success: false, message: "Forbidden" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const catalogCourses = await getCatalogCourses();
    const courseAccess = buildLearnerCourseAccess(user, catalogCourses);

    return res.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        xp: user.xp,
        level: user.level,
        completedLessons: user.completedLessons,
        dayStreak: user.dayStreak,
        coursesStarted: user.coursesStarted,
        badges: user.badges,
        dailyChallengesCompleted: user.dailyChallengesCompleted,
        learningAssessments: user.learningAssessments || [],
        kaiFeedback: user.kaiFeedback || [],
        currentCourse: user.currentCourse,
        currentLesson: user.currentLesson,
        courseProgress: user.courseProgress,
        courseAccess,
      },
      courseAccess,
    });
  } catch (error) {
    console.error("Error getting progress:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to get user progress",
    });
  }
});

// ============================================
// GET LESSON SESSION
// GET /api/kai/session/:userId/:courseId/:lessonId
// Protected: requires auth and matching user
// ============================================

router.get(
  "/session/:userId/:courseId/:lessonId",
  ensureAuth,
  async (req, res) => {
    try {
      const { userId, courseId, lessonId } = req.params;

      const callerId = req.user?.id;

      if (callerId && String(callerId) !== String(userId)) {
        return res.status(403).json({ success: false, message: "Forbidden" });
      }

      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      const session = user.lessonSessions.find(
        (s) =>
          s.courseId === courseId &&
          s.lessonId === lessonId
      );

      if (!session) {
        return res.json({
          success: true,
          session: null,
          message: "No session found",
        });
      }

      return res.json({
        success: true,
        session: sessionPayload(session),
      });
    } catch (error) {
      console.error("Error getting lesson session:", error);

      return res.status(500).json({
        success: false,
        message: "Failed to get lesson session",
      });
    }
  }
);

// ============================================
// KAI MESSAGE FEEDBACK
// POST /api/kai/feedback
// Protected: saves one like/dislike per user and message
// ============================================
router.post("/feedback", ensureAuth, async (req, res) => {
  try {
    const { courseId, lessonId, messageId, rating, messagePreview = "" } = req.body || {};
    const normalizedCourseId = String(courseId || "").trim();
    const normalizedLessonId = String(lessonId || "").trim();
    const normalizedMessageId = String(messageId || "").trim();
    const normalizedRating = rating === null || rating === undefined || rating === ""
      ? null
      : String(rating).trim().toLowerCase();

    if (!normalizedCourseId || !normalizedLessonId || !normalizedMessageId) {
      return res.status(400).json({ success: false, message: "courseId, lessonId, and messageId are required" });
    }
    if (normalizedRating && !["like", "dislike"].includes(normalizedRating)) {
      return res.status(400).json({ success: false, message: "Feedback must be like or dislike" });
    }

    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });
    if (!Array.isArray(user.kaiFeedback)) user.kaiFeedback = [];

    const existingIndex = user.kaiFeedback.findIndex((item) => (
      String(item.courseId) === normalizedCourseId
      && String(item.lessonId) === normalizedLessonId
      && String(item.messageId) === normalizedMessageId
    ));

    if (!normalizedRating) {
      if (existingIndex >= 0) user.kaiFeedback.splice(existingIndex, 1);
    } else {
      const feedback = {
        courseId: normalizedCourseId,
        lessonId: normalizedLessonId,
        messageId: normalizedMessageId,
        rating: normalizedRating,
        messagePreview: String(messagePreview || "").slice(0, 500),
        updatedAt: new Date(),
      };
      if (existingIndex >= 0) user.kaiFeedback[existingIndex] = feedback;
      else user.kaiFeedback.push(feedback);
    }

    // Keep the profile compact while retaining enough recent signal for Kai.
    if (user.kaiFeedback.length > 200) {
      user.kaiFeedback = user.kaiFeedback.slice(-200);
    }
    await user.save();
    return res.json({ success: true, rating: normalizedRating, feedback: user.kaiFeedback });
  } catch (error) {
    console.error("Kai feedback error:", error);
    return res.status(500).json({ success: false, message: "Could not save Kai feedback" });
  }
});

// ============================================
// KAI TEACHING (UPDATED WITH SESSION PERSISTENCE)
// POST /api/kai
// ============================================

router.post("/", ensureAuth, async (req, res) => {
  try {
    const {
      course,
      lesson,
      messages = [],
      learnerMessage,
      currentLessonIndex = 0,
      totalLessons = 0,
      nextLesson = false,
      nextLessonIndex,
      nextLessonId,
      nextLessonTitle,
      isIntro = false,
      previousLessons = [],
    } = req.body;

    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ success: false, message: "Authentication required" });
    }

    // Lesson progression is server-authoritative. Kai may unlock the next
    // lesson only after the current lesson is already marked complete.
    if (nextLesson) {
      if (!course?.id || !lesson?.id || !Number.isInteger(Number(nextLessonIndex))) {
        return res.status(400).json({ success: false, message: "Current and next lesson details are required" });
      }

      const learner = await User.findById(userId);
      if (!learner) {
        return res.status(404).json({ success: false, message: "User not found" });
      }

      const progress = learner.courseProgress.find((item) => String(item.courseId) === String(course.id));
      const currentSession = learner.lessonSessions.find((item) => item.courseId === course.id && item.lessonId === lesson.id);
      const serverCurrentIndex = Number(learner.currentLesson?.index ?? progress?.lastLessonIndex ?? 0);
      const currentLessonIsActive = String(learner.currentCourse?.id || "") === String(course.id)
        && String(learner.currentLesson?.id || "") === String(lesson.id)
        && serverCurrentIndex === Number(currentLessonIndex);
      const currentLessonComplete = Boolean(currentSession?.completed || progress?.completedLessonIds?.includes(lesson.id));

      const isAdmin = isAdministrator(learner);
      if (!currentLessonIsActive && !isAdmin) {
        return res.status(409).json({ success: false, message: "This is not the learner's active lesson", readyForNextLesson: false });
      }

      if (!currentLessonComplete && !isAdmin) {
        return res.status(409).json({ success: false, message: "Kai has not completed this lesson yet", readyForNextLesson: false });
      }

      // Backfill the currentLesson flag for sessions completed before this
      // server-authoritative progression flow was deployed.
      if (!learner.currentLesson?.completed) {
        learner.currentLesson.completed = true;
        await learner.save();
      }

      const requestedNextIndex = Number(nextLessonIndex);
      const expectedNextIndex = serverCurrentIndex + 1;
      if (!isAdmin && requestedNextIndex !== expectedNextIndex) {
        return res.status(409).json({ success: false, message: "Lessons must be completed in order", readyForNextLesson: false });
      }

      const catalogLessons = await getCatalogLessons(course.id);
      const serverTotalLessons = catalogLessons.length || Number(progress?.totalLessons || totalLessons || 0);
      const serverNextLesson = catalogLessons[requestedNextIndex];
      if (serverNextLesson && (String(nextLessonId) !== String(serverNextLesson.id) || String(nextLessonTitle) !== String(serverNextLesson.title))) {
        return res.status(409).json({ success: false, message: "The requested lesson is not the next lesson in the course", readyForNextLesson: false });
      }
      if (!serverNextLesson && requestedNextIndex < serverTotalLessons) {
        return res.status(409).json({ success: false, message: "The next lesson is not available", readyForNextLesson: false });
      }

      if (requestedNextIndex >= serverTotalLessons) {
        if (progress) {
          progress.lastLessonIndex = Math.max(Number(progress.lastLessonIndex || 0), Number(currentLessonIndex));
        }
        learner.currentLesson = { id: lesson.id, title: lesson.title || "", index: Number(currentLessonIndex), completed: true };
        await learner.save();
        return res.json({
          success: true,
          lessonAdvanced: false,
          courseComplete: true,
          lessonComplete: true,
          lessonSummary: currentSession?.summary || "Course completed",
          courseProgress: progress,
        });
      }

      if (!serverNextLesson || !nextLessonId || !nextLessonTitle) {
        return res.status(400).json({ success: false, message: "Next lesson details are required" });
      }

      if (progress) {
        progress.lastLessonIndex = requestedNextIndex;
        progress.lastAccessedAt = new Date();
      }
      learner.currentCourse = { id: course.id, title: course.title || "" };
      learner.currentLesson = { id: nextLessonId, title: nextLessonTitle, index: requestedNextIndex, completed: false };
      await learner.save();

      const nextSession = await getOrCreateLessonSession(
        userId,
        course.id,
        nextLessonId,
        requestedNextIndex
      );
      const catalogCourses = await getCatalogCourses();
      const courseAccess = buildLearnerCourseAccess(learner, catalogCourses);

      return res.json({
        success: true,
        lessonAdvanced: true,
        nextLessonIndex: requestedNextIndex,
        nextLessonId,
        nextLessonTitle,
        previousLessonSummary: currentSession?.summary || "",
        session: sessionPayload(nextSession),
        lessonComplete: true,
        courseProgress: progress,
        courseAccess,

      });
    }

    // Check GROQ API Key
    if (!process.env.GROQ_API_KEY) {
      console.error("GROQ_API_KEY is missing from environment variables.");

      return res.status(500).json({
        success: false,
        message: "GROQ_API_KEY is not configured on the server.",
      });
    }

    if (!course?.id || !lesson?.id) {
      return res.status(400).json({ success: false, message: "Course and lesson details are required" });
    }

    const learner = await User.findById(userId);
    if (!learner) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const courseLessons = course.id === "general" ? [] : await getCatalogLessons(course.id);
    const isFinalCourseLesson = course.id !== "general"
      && courseLessons.length > 0
      && Number(currentLessonIndex) >= courseLessons.length - 1;

    // Sequenced course requests must match the server-owned active lesson.
    // The general Ask Kai page remains a free-form chat and has no course state.
    if (course.id !== "general") {
      const activeIndex = Number(learner.currentLesson?.index ?? 0);
      if (!isAdministrator(learner)
        && (String(learner.currentCourse?.id || "") !== String(course.id)
        || String(learner.currentLesson?.id || "") !== String(lesson.id)
        || activeIndex !== Number(currentLessonIndex))) {
        return res.status(409).json({ success: false, message: "This lesson is not the learner's active lesson" });
      }
      if (!isAdministrator(learner) && learner.currentLesson?.completed && !(isFinalCourseLesson && !learner.courseProgress.find((item) => String(item.courseId) === String(course.id))?.readyForNextCourse)) {
        return res.status(409).json({ success: false, message: "Kai has completed this lesson. Use the available progression action." });
      }
    }

    // ========================================
    // LOAD OR CREATE LESSON SESSION
    // ========================================

    await getOrCreateLessonSession(userId, course.id, lesson.id, Number(currentLessonIndex) || 0);

    const courseTitle = course?.title || "Programming";
    const lessonTitle = lesson?.title || "Introduction";
    const lessonDescription = lesson?.description || "";
    const lessonLevel = lesson?.level || course?.level || "Beginner";
    const objectives = Array.isArray(lesson?.objectives) ? lesson.objectives : [];
    const learningAssessment = (learner.learningAssessments || []).find(
      (assessment) => String(assessment.courseId) === String(course.id)
    );
    const previousLessonContext = Array.isArray(previousLessons) && previousLessons.length
      ? previousLessons
          .filter((item) => Number.isInteger(Number(item?.index)) && Number(item.index) < Number(currentLessonIndex))
          .slice(-8)
          .map((item) => `Lesson ${Number(item.index) + 1}: ${String(item.title || "Untitled lesson")}\nSummary: ${String(item.summary || "No summary recorded yet.").slice(0, 600)}`)
          .join("\n\n")
      : "No previous lesson summaries are available.";
    const feedbackContext = Array.isArray(learner.kaiFeedback) && learner.kaiFeedback.length
      ? learner.kaiFeedback
          .filter((item) => String(item.courseId) === String(course.id))
          .slice(-12)
          .map((item) => `${item.rating === "like" ? "LIKED" : "DISLIKED"}: ${String(item.messagePreview || "Kai response").slice(0, 240)}`)
          .join("\n")
      : "No response feedback recorded yet.";
    const teachingSections = Array.isArray(lesson?.sections)
      ? lesson.sections.map((section) => {
          if (section?.type === "quiz") {
            return {
              type: section.type,
              title: section.title,
              question: section.question,
              options: section.options,
            };
          }
          return {
            type: section?.type,
            title: section?.title,
            content: section?.content,
            code: section?.code,
            explanation: section?.explanation,
            instructions: section?.instructions,
            starterCode: section?.starterCode,
          };
        })
      : [];

    const teachingMaterialContext = await retrieveTeachingContext({
      courseId: course.id,
      lessonId: lesson.id,
      query: `${lessonTitle}\n${learnerMessage || "Start teaching this lesson"}`,
      limit: 6,
    });

    let verifiedVideoLibrary = [];
    try {
      verifiedVideoLibrary = (await Video.find({
        active: true,
        $or: [{ courseId: String(course.id) }, { lessonId: String(lesson.id) }],
      }).limit(30).lean()).map((video) => ({
        id: String(video._id),
        title: video.title,
        description: video.description,
        lesson: video.lessonTitle || video.lessonId,
      }));
    } catch (error) {
      console.error("Kai video library context error:", error);
    }

    // ========================================
    // LESSON CONTEXT
    // ========================================

    const lessonContext = `\nCOURSE:\n${courseTitle}\n\nLESSON:\n${lessonTitle}\n\nLEVEL:\n${lessonLevel}\n\nDESCRIPTION:\n${lessonDescription}\n\nPREVIOUS LESSONS IN THIS COURSE:\n${previousLessonContext}\n\nRECENT LEARNER FEEDBACK ON KAI RESPONSES:\n${feedbackContext}\n\nLEARNER ASSESSMENT:\n${
      learningAssessment
        ? JSON.stringify({
            experience: learningAssessment.experience,
            programmingExperience: learningAssessment.programmingExperience,
            goal: learningAssessment.goal,
            learningPreference: learningAssessment.learningPreference,
            studyTime: learningAssessment.studyTime,
          }, null, 2)
        : "No assessment completed yet. Start gently and ask clarifying questions."
    }\n\nLEARNING OBJECTIVES:\n${
      objectives.length > 0
        ? objectives.map((objective, index) => `${index + 1}. ${objective}`).join("\n")
        : "Teach the fundamental concepts of this lesson."
    }\n\nLESSON MATERIALS:\n${
      teachingSections.length > 0
        ? JSON.stringify(teachingSections, null, 2)
        : "Use your own practical examples that match the lesson objectives."
    }
\n\nUPLOADED TEACHING MATERIALS (supporting reference; combine with your own knowledge, but do not contradict these materials):\n${teachingMaterialContext.text || "No uploaded teaching materials were found for this course or lesson."}\nVERIFIED VIDEO LIBRARY (select by ID only; never invent IDs or URLs):\n${verifiedVideoLibrary.length ? JSON.stringify(verifiedVideoLibrary, null, 2) : "No verified videos are available for this lesson."}\n`;

    // ========================================
    // KAI SYSTEM PROMPT (ENHANCED FOR COMPLETION)
    // ========================================

    const systemPrompt = `\nYou are Kai, the AI instructor for CodeLab Academy.\n\nYou are NOT a generic chatbot.\n\nYou are a friendly, patient and practical programming instructor.\n\nYour main goal is to make sure the learner actually understands what they are learning.\n\n${lessonContext}\n\nYOUR PERSONALITY:\n\n- Friendly\n- Patient\n- Encouraging\n- Clear\n- Practical\n- Conversational\n- Developer-focused\n\nTEACHING RULES:\n\n1. Teach concepts instead of only giving answers.\n2. Explain WHY something works, not only WHAT to type.\n3. Start with the basics.\n4. Use simple language when introducing difficult concepts.\n5. Use practical coding examples.\n6. Explain important code carefully.\n7. Ask the learner questions during the lesson.\n8. Give the learner opportunities to practice.\n9. Do not immediately reveal challenge answers.\n10. If the learner makes a mistake, explain why it is wrong and guide them toward the solution.\n11. Gradually increase difficulty.\n12. Do not overwhelm beginners with unnecessary advanced information.\n13. If the learner is confused, explain the concept again using a simpler example.\n14. Connect new concepts to things the learner already understands.\n15. Explain what is happening behind the scenes when useful.\n16. Teach one important concept at a time.\n17. Do not dump the entire lesson into one response.\n18. Use the lesson information provided to guide what you teach.\n19. Continue naturally from the conversation history.\n20. Treat your previous assistant messages as drafts that can be wrong. Before answering, review the most recent relevant answer against the lesson and the learner\'s question. If it was incorrect, acknowledge the correction briefly and provide the accurate replacement instead of repeating it.\n21. Use LEARNER ASSESSMENT to adjust starting difficulty, pacing, examples, practice style, and study-sized tasks. Do not repeat the assessment as a questionnaire unless an answer is missing or the learner asks to update it.\n23. Use RECENT LEARNER FEEDBACK as a style signal. Favor patterns in responses the learner liked and avoid repeating patterns they disliked. Do not mention internal feedback records or claim that a rating changed your answer.\n22. Use PREVIOUS LESSONS IN THIS COURSE as context. If the current concept depends on a previous lesson and the learner would benefit from reviewing it, recommend that review and end with [UI_ACTION: REVIEW_PREVIOUS_LESSON]. Use this only when a previous lesson exists and is genuinely related.

COURSE PROGRESSION AND READINESS:
- The learner follows the course order chosen by CodeLab Academy.
- Complete the current lesson only when the learner has demonstrated understanding.
- When this is the final lesson of a course, review the learner's explanations and practice answers before deciding readiness.
- If the final course lesson is complete and the learner is capable of moving on, end your response with:
  [COURSE_READY: Brief 1-2 sentence readiness summary]
- Do not use [COURSE_READY:] for a non-final lesson or when the learner needs more practice.
- A course is not unlocked merely because the learner opened it; only your explicit COURSE_READY decision unlocks the next course.

IN-APP CONTROLS:
- Kai may request a CodeLab Academy interface action only when it is safe and clearly requested by the learner.
- If the current lesson is complete, the learner explicitly asks to continue, and the next lesson is available, end your response with [UI_ACTION: CONTINUE_LESSON].
- If the learner would benefit from a related earlier lesson, end your response with [UI_ACTION: REVIEW_PREVIOUS_LESSON]. Do not use this for unrelated or optional review.
- Never emit UI_ACTION for an incomplete lesson, an unavailable lesson, or a request that is only informational.
- The interface validates this action and will not execute arbitrary clicks or computer controls.

VIDEO RECOMMENDATIONS:\n\n- Never invent, guess, or write a YouTube, Vimeo, or other external video URL in your learner-visible answer.\n- Never claim an external video belongs to CodeLab Academy unless it is returned by the verified database video library.\n- If a verified matching video exists, explain the concept first and end with [VIDEO_RECOMMEND_ID: exact_id] using an ID from VERIFIED VIDEO LIBRARY so the interface renders that database video as an embedded player. Do not render a Markdown link yourself.\n- If no verified matching video exists, do not include a video title, URL, or watch link.\n\n

- Always explain the concept in text before recommending anything.
- Decide whether a visual demonstration would genuinely help this learner.
- Do not recommend a video for every question. If the explanation and example are enough, explain only.
- If a visual would help, recommend one only after your explanation and only when it matches the learner's course, lesson, or concept.
- When a visual would help, end your response with this control marker:
  [VIDEO_RECOMMEND]
- Never emit a video URL, Markdown video link, or an ID that is not in VERIFIED VIDEO LIBRARY.
- If no relevant library video exists, do not emit the marker.
- Do not mention or display the control marker itself to the learner.

LESSON COMPLETION:\n\n- Track progress through the conversation naturally\n- After 6-8 meaningful exchanges where the learner demonstrates understanding, they are ready to complete\n- When you believe the learner has mastered the key concepts, END your response with this EXACT format:\n  [LESSON_COMPLETE: Brief 1-2 sentence summary of what they learned]\n- Do NOT include [LESSON_COMPLETE:] unless you are genuinely confident they understand\n- When a lesson is complete, do not ask the learner to repeat the same lesson or generate another completion recap. Offer a next-lesson suggestion whose action is exactly "next_lesson" and whose text names the next lesson when one is available. The first progression suggestion must open the next lesson; do not label it "prompt" and do not make the learner ask Kai again.\n\nCODE:\n\nWhen showing code:\n- Use Markdown fenced code blocks, with the opening and closing \`\`\` markers on their own lines.\n- Never place prose, headings, list markers, or code on the same line as a \`\`\` marker.\n- Keep examples practical\n- Explain important lines\n- Explain why the code works\n- Mention common beginner mistakes when useful\n\nRICH RESPONSE FORMAT:\n\n- Use plain Markdown only for a genuinely brief acknowledgement or error. For every substantive teaching explanation, return one valid JSON object with this shape (including the AI-generated suggestions block): {"type":"lesson_response","content":[...]}. Do not wrap this JSON in a Markdown fence.\n- Available block types are heading, subheading, text, bullets, numbered, quote, code, terminal, copyable, table, diagram, checklist, comparison, timeline, equation, progress, filetree, quiz, callout, image, preview, video, exercise, action, suggestions, and quick_replies.\n- Use code for code, terminal for commands, tables for comparisons, diagrams for flows, checklists for procedures, quizzes for understanding checks, and progress for measurable status.\n- Use a diagram only when a visual genuinely improves understanding; do not generate one for simple questions. For flowcharts, architecture, API flows, OOP relationships, ER relationships, networks, data flows, processes, trees, or concept hierarchies, emit a native diagram block.\n- A diagram block MUST use this exact JSON shape: {"type":"diagram","diagramType":"flowchart|architecture|class|er|network|dataflow|process|tree|concept","title":"...","nodes":[{"id":"unique_id","label":"Readable label","shape":"start|end|process|decision|input|output|circle"}],"edges":[{"from":"node_id","to":"node_id","label":"optional relationship or branch label"}]}.\n- Keep diagrams focused and ordered. Every edge must reference existing node IDs. Use shapes to communicate meaning: start/end for entry and exit, process for work, decision for branching, input/output for data, circle for connectors. The frontend draws the diagram; never display the JSON, SVG, HTML, or a static-image substitute to the learner.\n- Never include secrets, tokens, executable event handlers, unsafe HTML, javascript: URLs, or unsafe embeds. Use https URLs only for images and previews.\n- Keep structured responses concise and teach one concept at a time. Use either the existing suggestions block OR a quick_replies block, never both in the same response. Choose quick_replies when 2-4 short icon-friendly actions are useful; otherwise use the existing contextual suggestions block. Never merge the two formats.\n- For substantive teaching responses, generate either one dynamic contextual suggestions block or one quick_replies block at the end. Omit both only for a genuinely brief acknowledgement or error. Never use frontend-generated, fixed, copied, or task-list suggestions. Each suggestion must be written by you from the exact concept explained in THIS response and must help the learner study, practice, review, quiz, or apply that lesson concept. Do not derive suggestions from the surrounding platform conversation, repository work, developer instructions, UI changes, debugging, deployment, Git/GitHub, authentication, commits, or unrelated user requests. Never suggest those topics unless they are explicitly the subject of the current course lesson. The suggestion text must read like a natural learner-facing next step, not an internal task. Use 2-5 options and place the block at the end: {"type":"suggestions","items":[{"text":"display text","action":"practice|example|review|quiz|challenge|run_example|next_lesson|prompt","prompt":"optional learner request"}]}.\n- Use practice for a practice question, example for another example, review for a concise review, quiz for a short test, challenge for hands-on work, run_example for a runnable example, next_lesson only when progression is available, and prompt for a contextual question. Keep the options relevant to what you just taught and provide 2-5 options. Render them as inline clickable text links; do not describe the JSON or fixed UI controls.\n\nRESPONSE LENGTH:\n\nKeep responses conversational and reasonably sized.\nDo not create huge walls of text.\nUse headings, bullets and code blocks when they improve readability.\n\nAlways behave as Kai.\n\nThe learner is currently using the CodeLab Academy interactive learning interface.\n`;

    // ========================================
    // CLEAN CONVERSATION HISTORY
    // ========================================

    const conversationHistory = Array.isArray(messages)
      ? messages
          .filter(
            (message) =>
              message &&
              (message.role === "user" || message.role === "assistant") &&
              typeof message.content === "string" &&
              message.content.trim()
          )
          .slice(-12)
          .map((message) => ({ role: message.role, content: message.content }))
      : [];

    // ========================================
    // CURRENT LEARNER MESSAGE
    // ========================================

    const currentMessage =
      learnerMessage?.trim() ||
      `\nStart teaching me this lesson.\n\nIntroduce yourself as Kai.\n\nCourse:\n${courseTitle}\n\nLesson:\n${lessonTitle}\n\nStart with the first important concept.\n\nDo not teach the entire lesson at once.\n\nTeach conversationally and finish by asking me a simple question.\n      `;

    // ========================================
    // GROQ MESSAGES
    // ========================================

    const groqMessages = [
      { role: "system", content: systemPrompt },
      ...conversationHistory,
      { role: "user", content: currentMessage },
    ];

    console.log("Kai teaching:", courseTitle, "->", lessonTitle);
    console.log("Conversation messages:", groqMessages.length);

    // ========================================
    // CALL GROQ
    // ========================================

    const groqRequestBody = {
      model: GROQ_MODEL,
      messages: groqMessages,
      temperature: 0.7,
      // Groq now prefers max_completion_tokens. A larger budget is important
      // for reasoning models because it includes their hidden reasoning tokens.
      max_completion_tokens: 4096,
      // JSON mode prevents the model from leaking prose, Markdown fences, or
      // partially serialized objects into the learner-facing response.
      response_format: { type: "json_object" },
    };
    if (/gpt-oss/i.test(GROQ_MODEL)) {
      groqRequestBody.reasoning_effort = "low";
      groqRequestBody.include_reasoning = false;
    }

    const requestGroq = (messages, { structured = true } = {}) => {
      const requestBody = { ...groqRequestBody, messages };
      // Some Groq/model combinations reject a generation even though the
      // request itself is valid. A plain response is still renderable by the
      // learner UI, so fall back instead of exposing the provider error.
      if (!structured) delete requestBody.response_format;

      return fetch(GROQ_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify(requestBody),
      });
    };

    const isJsonGenerationFailure = (payload) => {
      const message = String(payload?.error?.message || "").toLowerCase();
      return payload?.error?.code === "failed_generation"
        || message.includes("failed to generate json")
        || message.includes("failed_generation");
    };

    let response = await requestGroq(groqMessages);

    // ========================================
    // READ RESPONSE
    // ========================================

    let data = await response.json();
    let structuredMode = true;

    if (!response.ok && isJsonGenerationFailure(data)) {
      console.warn("Groq JSON generation failed; retrying Kai in plain response mode.");
      structuredMode = false;
      response = await requestGroq(groqMessages, { structured: false });
      data = await response.json();
    }

    if (!response.ok) {
      console.error("Groq API error:", response.status, data);

      return res.status(response.status).json({
        success: false,
        message: data?.error?.message || "Groq request failed.",
      });
    }

    let reply = extractAssistantText(data)
      .replace(/<think>[\s\S]*?<\/think>/gi, "")
      .trim();

    // JSON mode guarantees syntax, while this validation guarantees the
    // application contract. Retry once if the model returns a valid but
    // unusable JSON value (for example, an empty object or a plain string).
    if (structuredMode && response.ok && !parseStructuredReply(reply)?.length) {
      const correctionMessages = [
        ...groqMessages,
        { role: "assistant", content: reply },
        {
          role: "user",
          content: "Your previous response did not contain a usable lesson_response JSON object. Return only valid JSON with a non-empty content array of learner-facing blocks. Do not include Markdown fences or any text outside the JSON object.",
        },
      ];
      response = await requestGroq(correctionMessages);
      data = await response.json();
      if (!response.ok && isJsonGenerationFailure(data)) {
        console.warn("Groq JSON correction failed; retrying Kai in plain response mode.");
        structuredMode = false;
        response = await requestGroq(correctionMessages, { structured: false });
        data = await response.json();
      }
      if (!response.ok) {
        console.error("Groq correction request error:", response.status, data);
        return res.status(response.status).json({
          success: false,
          message: data?.error?.message || "Kai could not format a valid teaching response.",
        });
      }
      reply = extractAssistantText(data)
        .replace(/<think>[\s\S]*?<\/think>/gi, "")
        .trim();
    }

    if (!reply) {
      console.error("Groq returned no visible message:", {
        model: GROQ_MODEL,
        finishReason: data?.choices?.[0]?.finish_reason || null,
        hasChoices: Array.isArray(data?.choices) && data.choices.length > 0,
      });

      return res.status(502).json({ success: false, message: "Kai did not return a visible teaching reply. Please try again." });
    }

    // Review the draft before it is shown to the learner or saved. If the
    // checker finds a clear factual or instructional error, discard the draft
    // and use the corrected replacement. A checker outage never blocks Kai's
    // normal teaching response.
    let answerWasCorrected = false;
    try {
      const reviewed = await reviewAndCorrectReply({
        reply,
        systemPrompt,
        learnerMessage: currentMessage,
        conversationHistory,
      });
      reply = reviewed.reply;
      answerWasCorrected = reviewed.corrected;
      if (answerWasCorrected) console.info("Kai draft corrected before delivery");
    } catch (reviewError) {
      console.warn("Kai draft review skipped:", reviewError.message);
    }

    // ========================================
    // CHECK FOR LESSON COMPLETION
    // ========================================

    const structuredContent = parseStructuredReply(reply);
    let friendlyReply = structuredContent
      ? structuredReplyToMarkdown(structuredContent)
      : reply;
    // Never send provider JSON directly to the learner. If both structured
    // formatting attempts fail, return a safe retry message instead.
    if (!structuredContent && /^\s*[\[{]/.test(reply)) {
      console.warn("Kai returned unparseable structured JSON; hiding raw payload");
      friendlyReply = "Kai could not format that lesson response. Please ask the question again.";
    }
    // Structured lesson responses can carry control markers inside text blocks.
    // Inspect both the provider JSON and the learner-facing Markdown projection.
    const controlText = `${reply}\n${friendlyReply}`;

    const isLessonComplete = /\[LESSON_COMPLETE:/i.test(controlText);
    const summaryMatch = controlText.match(/\[LESSON_COMPLETE:\s*(.*?)\]/i);
    const lessonSummary = summaryMatch ? summaryMatch[1].trim() : "";
    const courseReadyMatch = controlText.match(/\[COURSE_READY:\s*(.*?)\]/i);
    const courseReadinessSummary = courseReadyMatch ? courseReadyMatch[1].trim() : "";
    const isCourseReady = Boolean(courseReadyMatch && isFinalCourseLesson && isLessonComplete);
    const shouldCompleteLesson = Boolean(isLessonComplete && (!isFinalCourseLesson || isCourseReady));
    const uiActionMatch = controlText.match(/\[UI_ACTION:\s*(CONTINUE_LESSON)\]/i);
    const reviewPreviousLessonMatch = controlText.match(/\[UI_ACTION:\s*(REVIEW_PREVIOUS_LESSON)\]/i);
    const previousLesson = Array.isArray(previousLessons)
      ? previousLessons
          .filter((item) => Number(item?.index) < Number(currentLessonIndex))
          .sort((left, right) => Number(right.index) - Number(left.index))[0]
      : null;
    const uiAction = uiActionMatch && shouldCompleteLesson && !isFinalCourseLesson
      ? { type: "continue_lesson" }
      : reviewPreviousLessonMatch && previousLesson
        ? {
            type: "review_previous_lesson",
            lessonIndex: Number(previousLesson.index),
            lessonTitle: previousLesson.title || "Previous lesson",
            reason: "This lesson builds on an earlier concept that Kai thinks is useful to revisit.",
          }
        : null;
    const videoIdMatch = controlText.match(/\[VIDEO_RECOMMEND_ID\s*:\s*([a-f0-9]{24})\]/i);
    const videoRecommendation = videoIdMatch
      ? await findVerifiedVideoById({ course, lesson, videoId: videoIdMatch[1] })
      : null;

    // Clean control markers from the learner-visible reply.
    const cleanReply = friendlyReply
      .replace(/\[LESSON_COMPLETE:.*?\]/gi, "")
      .replace(/\[COURSE_READY:.*?\]/gi, "")
      .replace(/\[UI_ACTION:\s*CONTINUE_LESSON\]/gi, "")
      .replace(/\[UI_ACTION:\s*REVIEW_PREVIOUS_LESSON\]/gi, "")
      .replace(/\[VIDEO_RECOMMEND(?:_ID)?(?:\s*:\s*.*?)?\]/gi, "")
      .trim();

    // ========================================
    // SAVE CONVERSATION TO DATABASE
    // ========================================

    if (userId && lesson?.id) {
      if (learnerMessage && !isIntro) {
        await saveConversation(userId, course.id, lesson.id, "user", learnerMessage);
      }

      await saveConversation(
        userId,
        course.id,
        lesson.id,
        "assistant",
        cleanReply,
        videoRecommendation,
        structuredContent
      );

      // Mark lesson complete if Kai indicates it
      if (shouldCompleteLesson) {
        let updatedUser = await markLessonComplete(
          userId,
          course.id,
          lesson.id,
          lessonSummary,
          Number(process.env.LESSON_XP_DEFAULT) || 5,
          Number(currentLessonIndex) || 0
        );
        const stateUpdatedUser = updatedUser
          ? await markCurrentLessonComplete(userId, course.id, lesson.id)
          : null;
        const readinessUpdatedUser = isCourseReady
          ? await markCourseReadyForNext(userId, course.id, courseReadinessSummary)
          : null;
        if (readinessUpdatedUser) updatedUser = readinessUpdatedUser;

        if (updatedUser) {
          const courseProgress = updatedUser.courseProgress.find((item) => String(item.courseId) === String(course.id)) || null;
          const catalogCourses = await getCatalogCourses();
          const courseAccess = buildLearnerCourseAccess(updatedUser, catalogCourses);
          return res.json({
            success: true,
            reply: cleanReply,
            content: structuredContent,
            instructor: "Kai",
            course: courseTitle,
            lesson: lessonTitle,
            lessonComplete: true,
            readyForNextLesson: Boolean(stateUpdatedUser || updatedUser),
            courseReady: Boolean(isCourseReady || courseProgress?.readyForNextCourse),
            readinessSummary: courseProgress?.readinessSummary || courseReadinessSummary,
            lessonSummary,
            answerWasCorrected,
            uiAction,
            videoRecommendation,
            sources: teachingMaterialContext.sources,
            courseProgress,
            courseAccess,
            userProgress: {
              coursesStarted: updatedUser.coursesStarted,
              xp: updatedUser.xp,
              level: updatedUser.level,
              completedLessons: updatedUser.completedLessons,
            },
          });
        }
      }
    }

    // ========================================
    // SEND RESPONSE
    // ========================================

    return res.json({
      success: true,
      reply: cleanReply,
      content: structuredContent,
      instructor: "Kai",
      course: courseTitle,
      lesson: lessonTitle,
      lessonComplete: shouldCompleteLesson,
      readyForNextLesson: false,
      courseReady: false,
      readinessSummary: "",
      lessonSummary,
      answerWasCorrected,
      uiAction,
      videoRecommendation,
      sources: teachingMaterialContext.sources,
    });
  } catch (error) {
    console.error("Kai teaching error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to connect to Kai's teaching engine.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

// ============================================
// EXPORT ROUTER
// ============================================

module.exports = router;
