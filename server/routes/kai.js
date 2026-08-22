const express = require("express");
const User = require("../models/User");
const ensureAuth = require("../middleware/ensureAuth");

const router = express.Router();

// Ensure fetch is available in Node
const fetch =
  globalThis.fetch ||
  ((...args) => import("node-fetch").then((m) => m.default(...args)));

const GROQ_API_URL =
  "https://api.groq.com/openai/v1/chat/completions";

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
      // Update last accessed
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
  content
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
  xpAward = Number(process.env.LESSON_XP_DEFAULT) || 5
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
            lastLessonIndex: 0,
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
    const { courseTitle, totalLessons = 0 } = req.body;

    const userId = req.user?.id || req.body.userId;

    if (!userId) {
      return res.status(401).json({ success: false, message: "Authentication required" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    let cp = user.courseProgress.find((p) => String(p.courseId) === String(courseId));
    if (!cp) {
      cp = {
        courseId,
        courseTitle: courseTitle || "",
        lessonsCompleted: 0,
        totalLessons: totalLessons,
        lastLessonIndex: 0,
        completedLessonIds: [],
        lastAccessedAt: new Date(),
      };

      user.courseProgress.push(cp);
    }

    user.currentCourse = { id: courseId, title: courseTitle || "" };
    user.currentLesson = { id: null, title: null, index: 0, completed: false };

    await user.save();

    return res.json({ success: true, courseProgress: cp, user: { id: user._id, xp: user.xp, level: user.level } });
  } catch (err) {
    console.error("Error starting course:", err);
    return res.status(500).json({ success: false, message: "Failed to start course" });
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

    const userId = req.user?.id || req.body.userId;

    if (!userId || !courseId || !lessonId) {
      return res.status(400).json({ success: false, message: "userId, courseId and lessonId are required" });
    }

    const awardedXP = typeof xpAward === "number" ? xpAward : Number(process.env.LESSON_XP_DEFAULT) || 5;

    const updatedUser = await markLessonComplete(userId, courseId, lessonId, summary, awardedXP);

    if (!updatedUser) {
      return res.status(500).json({ success: false, message: "Could not mark lesson complete" });
    }

    const cp = updatedUser.courseProgress.find((p) => String(p.courseId) === String(courseId)) || null;

    return res.json({ success: true, user: { id: updatedUser._id, xp: updatedUser.xp, level: updatedUser.level, completedLessons: updatedUser.completedLessons }, courseProgress: cp });
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
        currentCourse: user.currentCourse,
        currentLesson: user.currentLesson,
        courseProgress: user.courseProgress,
      },
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
        session: {
          conversationHistory: session.conversationHistory || [],
          completed: session.completed,
          summary: session.summary,
          lastAccessedAt: session.lastAccessedAt,
        },
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
// KAI TEACHING (UPDATED WITH SESSION PERSISTENCE)
// POST /api/kai
// ============================================

router.post("/", async (req, res) => {
  try {
    const {
      course,
      lesson,
      messages = [],
      learnerMessage,
      userId,
    } = req.body;

    // Check GROQ API Key
    if (!process.env.GROQ_API_KEY) {
      console.error("GROQ_API_KEY is missing from environment variables.");

      return res.status(500).json({
        success: false,
        message: "GROQ_API_KEY is not configured on the server.",
      });
    }

    // ========================================
    // LOAD OR CREATE LESSON SESSION
    // ========================================

    if (userId && lesson?.id) {
      await getOrCreateLessonSession(userId, course?.id, lesson?.id, 0);
    }

    const courseTitle = course?.title || "Programming";
    const lessonTitle = lesson?.title || "Introduction";
    const lessonDescription = lesson?.description || "";
    const lessonLevel = lesson?.level || course?.level || "Beginner";
    const objectives = Array.isArray(lesson?.objectives) ? lesson.objectives : [];

    // ========================================
    // LESSON CONTEXT
    // ========================================

    const lessonContext = `\nCOURSE:\n${courseTitle}\n\nLESSON:\n${lessonTitle}\n\nLEVEL:\n${lessonLevel}\n\nDESCRIPTION:\n${lessonDescription}\n\nLEARNING OBJECTIVES:\n${
      objectives.length > 0
        ? objectives.map((objective, index) => `${index + 1}. ${objective}`).join("\n")
        : "Teach the fundamental concepts of this lesson."
    }\n`;

    // ========================================
    // KAI SYSTEM PROMPT (ENHANCED FOR COMPLETION)
    // ========================================

    const systemPrompt = `\nYou are Kai, the AI instructor for CodeLab Academy.\n\nYou are NOT a generic chatbot.\n\nYou are a friendly, patient and practical programming instructor.\n\nYour main goal is to make sure the learner actually understands what they are learning.\n\n${lessonContext}\n\nYOUR PERSONALITY:\n\n- Friendly\n- Patient\n- Encouraging\n- Clear\n- Practical\n- Conversational\n- Developer-focused\n\nTEACHING RULES:\n\n1. Teach concepts instead of only giving answers.\n2. Explain WHY something works, not only WHAT to type.\n3. Start with the basics.\n4. Use simple language when introducing difficult concepts.\n5. Use practical coding examples.\n6. Explain important code carefully.\n7. Ask the learner questions during the lesson.\n8. Give the learner opportunities to practice.\n9. Do not immediately reveal challenge answers.\n10. If the learner makes a mistake, explain why it is wrong and guide them toward the solution.\n11. Gradually increase difficulty.\n12. Do not overwhelm beginners with unnecessary advanced information.\n13. If the learner is confused, explain the concept again using a simpler example.\n14. Connect new concepts to things the learner already understands.\n15. Explain what is happening behind the scenes when useful.\n16. Teach one important concept at a time.\n17. Do not dump the entire lesson into one response.\n18. Use the lesson information provided to guide what you teach.\n19. Continue naturally from the conversation history.\n\nLESSON COMPLETION:\n\n- Track progress through the conversation naturally\n- After 6-8 meaningful exchanges where the learner demonstrates understanding, they are ready to complete\n- When you believe the learner has mastered the key concepts, END your response with this EXACT format:\n  [LESSON_COMPLETE: Brief 1-2 sentence summary of what they learned]\n- Do NOT include [LESSON_COMPLETE:] unless you are genuinely confident they understand\n- When a lesson is complete, offer encouragement to continue to the next lesson\n\nCODE:\n\nWhen showing code:\n- Use Markdown fenced code blocks\n- Keep examples practical\n- Explain important lines\n- Explain why the code works\n- Mention common beginner mistakes when useful\n\nRESPONSE LENGTH:\n\nKeep responses conversational and reasonably sized.\nDo not create huge walls of text.\nUse headings, bullets and code blocks when they improve readability.\n\nAlways behave as Kai.\n\nThe learner is currently using the CodeLab Academy interactive learning interface.\n`;

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

    const response = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: groqMessages,
        temperature: 0.7,
        max_tokens: 1200,
      }),
    });

    // ========================================
    // READ RESPONSE
    // ========================================

    const data = await response.json();

    if (!response.ok) {
      console.error("Groq API error:", response.status, data);

      return res.status(response.status).json({
        success: false,
        message: data?.error?.message || "Groq request failed.",
      });
    }

    const reply = data?.choices?.[0]?.message?.content;

    if (!reply) {
      console.error("Groq returned no message:", data);

      return res.status(500).json({ success: false, message: "Groq returned an empty response." });
    }

    // ========================================
    // CHECK FOR LESSON COMPLETION
    // ========================================

    const isLessonComplete = reply.includes("[LESSON_COMPLETE:");
    const summaryMatch = reply.match(/\[LESSON_COMPLETE:\s*(.*?)\]/);
    const lessonSummary = summaryMatch ? summaryMatch[1].trim() : "";

    // Clean reply for display
    const cleanReply = reply.replace(/\[LESSON_COMPLETE:.*?\]/g, "").trim();

    // ========================================
    // SAVE CONVERSATION TO DATABASE
    // ========================================

    if (userId && lesson?.id) {
      if (learnerMessage) {
        await saveConversation(userId, course?.id, lesson?.id, "user", learnerMessage);
      }

      await saveConversation(userId, course?.id, lesson?.id, "assistant", cleanReply);

      // Mark lesson complete if Kai indicates it
      if (isLessonComplete) {
        const updatedUser = await markLessonComplete(userId, course?.id, lesson?.id, lessonSummary);

        if (updatedUser) {
          return res.json({
            success: true,
            reply: cleanReply,
            instructor: "Kai",
            course: courseTitle,
            lesson: lessonTitle,
            lessonComplete: true,
            lessonSummary,
            userProgress: {
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
      instructor: "Kai",
      course: courseTitle,
      lesson: lessonTitle,
      lessonComplete: isLessonComplete,
      lessonSummary,
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
