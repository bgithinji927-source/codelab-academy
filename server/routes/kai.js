const express = require("express");
const User = require("../models/User");

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
    console.error(
      "Error getting/creating lesson session:",
      error
    );
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
    console.error(
      "Error saving conversation:",
      error
    );
  }
}

// ============================================
// HELPER: MARK LESSON COMPLETE
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
    const user = await User.findById(userId);
    if (!user) return null;

    // Update lesson session
    const session = user.lessonSessions.find(
      (s) =>
        s.courseId === courseId &&
        s.lessonId === lessonId
    );

    if (session) {
      session.completed = true;
      session.completedAt = new Date();
      session.summary = summary;
    }

    // Update course progress
    let courseProgress =
      user.courseProgress.find(
        (cp) => String(cp.courseId) === String(courseId)
      );

    if (!courseProgress) {
      courseProgress = {
        courseId,
        lessonsCompleted: 0,
        totalLessons: 0,
        completedLessonIds: [],
        lastLessonIndex: 0,
        lastAccessedAt: new Date(),
      };

      user.courseProgress.push(courseProgress);
    }

    // Add to completed if not already there
    if (
      !courseProgress.completedLessonIds.includes(
        lessonId
      )
    ) {
      courseProgress.completedLessonIds.push(
        lessonId
      );
      courseProgress.lessonsCompleted += 1;
      user.completedLessons += 1;
      user.xp += xpAward; // Award configurable XP
    }

    courseProgress.lastAccessedAt = new Date();
    await user.save();

    return user;
  } catch (error) {
    console.error(
      "Error marking lesson complete:",
      error
    );
    return null;
  }
}

// ============================================
// START A COURSE FOR A USER
// POST /api/kai/courses/:courseId/start
// Body: { userId, courseTitle, totalLessons }
// ============================================

router.post("/courses/:courseId/start", async (req, res) => {
  try {
    const { courseId } = req.params;
    const { userId, courseTitle, totalLessons = 0 } = req.body;

    if (!userId) {
      return res.status(400).json({ success: false, message: "userId required" });
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
// Body: { userId, courseId, lessonId, summary, xpAward }
// ============================================

router.post("/lesson/complete", async (req, res) => {
  try {
    const { userId, courseId, lessonId, summary = "", xpAward } = req.body;

    if (!userId || !courseId || !lessonId) {
      return res.status(400).json({ success: false, message: "userId, courseId and lessonId are required" });
    }

    const awardedXP = typeof xpAward === 'number' ? xpAward : Number(process.env.LESSON_XP_DEFAULT) || 5;

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
// ============================================

router.get("/progress/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

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
// ============================================

router.get(
  "/session/:userId/:courseId/:lessonId",
  async (req, res) => {
    try {
      const { userId, courseId, lessonId } =
        req.params;

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
          conversationHistory:
            session.conversationHistory || [],
          completed: session.completed,
          summary: session.summary,
          lastAccessedAt: session.lastAccessedAt,
        },
      });
    } catch (error) {
      console.error(
        "Error getting lesson session:",
        error
      );

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
      console.error(
        "GROQ_API_KEY is missing from environment variables."
      );

      return res.status(500).json({
        success: false,
        message:
          "GROQ_API_KEY is not configured on the server.",
      });
    }

    // ========================================
    // LOAD OR CREATE LESSON SESSION
    // ========================================

    if (userId && lesson?.id) {
      await getOrCreateLessonSession(
        userId,
        course?.id,
        lesson?.id,
        0
      );
    }

    const courseTitle =
      course?.title || "Programming";
    const lessonTitle =
      lesson?.title || "Introduction";
    const lessonDescription =
      lesson?.description || "";
    const lessonLevel =
      lesson?.level ||
      course?.level ||
      "Beginner";
    const objectives =
      Array.isArray(lesson?.objectives)
        ? lesson.objectives
        : [];

    // ========================================
    // LESSON CONTEXT
    // ========================================

    const lessonContext = `
COURSE:
${courseTitle}

LESSON:
${lessonTitle}

LEVEL:
${lessonLevel}

DESCRIPTION:
${lessonDescription}

LEARNING OBJECTIVES:
${
  objectives.length > 0
    ? objectives
        .map(
          (objective, index) =>
            `${index + 1}. ${objective}`
        )
        .join("\n")
    : "Teach the fundamental concepts of this lesson."
}
`;

    // ========================================
    // KAI SYSTEM PROMPT (ENHANCED FOR COMPLETION)
    // ========================================

    const systemPrompt = `
You are Kai, the AI instructor for CodeLab Academy.

You are NOT a generic chatbot.

You are a friendly, patient and practical programming instructor.

Your main goal is to make sure the learner actually understands what they are learning.

${lessonContext}

YOUR PERSONALITY:

- Friendly
- Patient
- Encouraging
- Clear
- Practical
- Conversational
- Developer-focused

TEACHING RULES:

1. Teach concepts instead of only giving answers.
2. Explain WHY something works, not only WHAT to type.
3. Start with the basics.
4. Use simple language when introducing difficult concepts.
5. Use practical coding examples.
6. Explain important code carefully.
7. Ask the learner questions during the lesson.
8. Give the learner opportunities to practice.
9. Do not immediately reveal challenge answers.
10. If the learner makes a mistake, explain why it is wrong and guide them toward the solution.
11. Gradually increase difficulty.
12. Do not overwhelm beginners with unnecessary advanced information.
13. If the learner is confused, explain the concept again using a simpler example.
14. Connect new concepts to things the learner already understands.
15. Explain what is happening behind the scenes when useful.
16. Teach one important concept at a time.
17. Do not dump the entire lesson into one response.
18. Use the lesson information provided to guide what you teach.
19. Continue naturally from the conversation history.

LESSON COMPLETION:

- Track progress through the conversation naturally
- After 6-8 meaningful exchanges where the learner demonstrates understanding, they are ready to complete
- When you believe the learner has mastered the key concepts, END your response with this EXACT format:
  [LESSON_COMPLETE: Brief 1-2 sentence summary of what they learned]
- Do NOT include [LESSON_COMPLETE:] unless you are genuinely confident they understand
- When a lesson is complete, offer encouragement to continue to the next lesson

CODE:

When showing code:
- Use Markdown fenced code blocks
- Keep examples practical
- Explain important lines
- Explain why the code works
- Mention common beginner mistakes when useful

RESPONSE LENGTH:

Keep responses conversational and reasonably sized.
Do not create huge walls of text.
Use headings, bullets and code blocks when they improve readability.

Always behave as Kai.

The learner is currently using the CodeLab Academy interactive learning interface.
`;

    // ========================================
    // CLEAN CONVERSATION HISTORY
    // ========================================

    const conversationHistory =
      Array.isArray(messages)
        ? messages
            .filter(
              (message) =>
                message &&
                (message.role === "user" ||
                  message.role === "assistant") &&
                typeof message.content === "string" &&
                message.content.trim()
            )
            .slice(-12)
            .map((message) => ({
              role: message.role,
              content: message.content,
            }))
        : [];

    // ========================================
    // CURRENT LEARNER MESSAGE
    // ========================================

    const currentMessage =
      learnerMessage?.trim() ||
      `
Start teaching me this lesson.

Introduce yourself as Kai.

Course:
${courseTitle}

Lesson:
${lessonTitle}

Start with the first important concept.

Do not teach the entire lesson at once.

Teach conversationally and finish by asking me a simple question.
      `;

    // ========================================
    // GROQ MESSAGES
    // ========================================

    const groqMessages = [
      {
        role: "system",
        content: systemPrompt,
      },

      ...conversationHistory,

      {
        role: "user",
        content: currentMessage,
      },
    ];

    console.log(
      "Kai teaching:",
      courseTitle,
      "->",
      lessonTitle
    );
    console.log(
      "Conversation messages:",
      groqMessages.length
    );

    // ========================================
    // CALL GROQ
    // ========================================

    const response = await fetch(GROQ_API_URL, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",

        Authorization:
          `Bearer ${process.env.GROQ_API_KEY}`,
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
      console.error(
        "Groq API error:",
        response.status,
        data
      );

      return res.status(response.status).json({
        success: false,
        message:
          data?.error?.message ||
          "Groq request failed.",
      });
    }

    const reply =
      data?.choices?.[0]?.message?.content;

    if (!reply) {
      console.error(
        "Groq returned no message:",
        data
      );

      return res.status(500).json({
        success: false,
        message:
          "Groq returned an empty response.",
      });
    }

    // ========================================
    // CHECK FOR LESSON COMPLETION
    // ========================================

    const isLessonComplete =
      reply.includes("[LESSON_COMPLETE:");
    
    const summaryMatch = reply.match(
      /\[LESSON_COMPLETE:\s*(.*?)\]/
    );
    const lessonSummary = summaryMatch
      ? summaryMatch[1].trim()
      : "";

    // Clean reply for display
    const cleanReply = reply
      .replace(/\[LESSON_COMPLETE:.*?\]/g, "")
      .trim();

    // ========================================
    // SAVE CONVERSATION TO DATABASE
    // ========================================

    if (userId && lesson?.id) {
      if (learnerMessage) {
        await saveConversation(
          userId,
          course?.id,
          lesson?.id,
          "user",
          learnerMessage
        );
      }

      await saveConversation(
        userId,
        course?.id,
        lesson?.id,
        "assistant",
        cleanReply
      );

      // Mark lesson complete if Kai indicates it
      if (isLessonComplete) {
        const updatedUser = await markLessonComplete(
          userId,
          course?.id,
          lesson?.id,
          lessonSummary
        );

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
              completedLessons:
                updatedUser.completedLessons,
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
      message:
        "Failed to connect to Kai's teaching engine.",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : undefined,
    });
  }
});

// ============================================
// EXPORT ROUTER
// ============================================

module.exports = router;
