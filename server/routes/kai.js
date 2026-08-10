const express = require("express");

const router = express.Router();

// ============================================
// GROQ API
// ============================================

const GROQ_API_URL =
  "https://api.groq.com/openai/v1/chat/completions";

// ============================================
// KAI TEACHING
// POST /api/kai
// ============================================

router.post("/", async (req, res) => {
  try {
    const {
      course,
      lesson,
      messages = [],
      learnerMessage,
    } = req.body;

    // ========================================
    // CHECK GROQ API KEY
    // ========================================

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
    // COURSE INFORMATION
    // ========================================

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
    // KAI SYSTEM PROMPT
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

16. Connect programming concepts to real-world development.

17. Teach one important concept at a time.

18. Do not dump the entire lesson into one response.

19. Use the lesson information provided to guide what you teach.

20. Continue naturally from the conversation history.

TEACHING FLOW:

Use this progression when appropriate:

1. Introduction
2. Foundation
3. Mental Model
4. Simple Example
5. Line-by-Line Explanation
6. Deep Dive
7. Real-World Connection
8. Guided Practice
9. Challenge
10. Knowledge Check
11. Correction
12. Summary

INTERACTIVE TEACHING:

Do not teach the entire lesson immediately.

Instead:

- Explain one concept.
- Give an example.
- Ask the learner a question.
- Wait for the learner's response.
- Correct misunderstandings.
- Then continue to the next concept.

CHALLENGES:

If the learner is solving a coding challenge:

First attempt:
Give a useful hint instead of the complete answer.

Second attempt:
Give a stronger hint.

Repeated mistakes:
Explain the underlying concept again using a simpler example.

Correct answer:
Congratulate the learner and explain briefly why their solution works.

QUIZZES:

Before the learner answers:
Ask them to choose an answer.

If correct:
Explain why the answer is correct.

If incorrect:
Do not simply say "wrong".

Explain the misconception and give them another opportunity.

CODE:

When showing code:

- Use Markdown fenced code blocks.
- Keep examples practical.
- Explain important lines.
- Explain why the code works.
- Mention common beginner mistakes when useful.

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
    // FINAL GROQ MESSAGE ARRAY
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

    // ========================================
    // DEBUG
    // ========================================

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
    // READ GROQ RESPONSE
    // ========================================

    const data = await response.json();

    // ========================================
    // GROQ ERROR
    // ========================================

    if (!response.ok) {
      console.error(
        "Groq API error:",
        data
      );

      return res.status(response.status).json({
        success: false,
        message:
          data?.error?.message ||
          "Groq request failed.",
      });
    }

    // ========================================
    // GET KAI RESPONSE
    // ========================================

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
    // SEND RESPONSE TO FRONTEND
    // ========================================

    return res.json({
      success: true,
      reply,
      instructor: "Kai",
      course: courseTitle,
      lesson: lessonTitle,
    });
  } catch (error) {
    // ========================================
    // SERVER ERROR
    // ========================================

    console.error(
      "Kai teaching error:",
      error
    );

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