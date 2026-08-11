import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  BookOpen,
  Code2,
  UserRound,
  Send,
} from "lucide-react";

import "./CourseLearn.css";

function CourseLearn({ course, onBack }) {
  const [messages, setMessages] = useState([]);
  const [answer, setAnswer] = useState("");
  const [isKaiTyping, setIsKaiTyping] = useState(false);
  const [displayedKaiText, setDisplayedKaiText] = useState("");
  const [lesson, setLesson] = useState(null);

  const courseTitle = course?.title || "Programming";

  // ============================================
  // LOAD FIRST LESSON
  // ============================================

  useEffect(() => {
    let cancelled = false;

    async function loadLesson() {
      try {
        const lessonModule = await import("../data/lessons.js");

        const lessonData =
          lessonModule.default || lessonModule.lessons;

        const courseLessons =
          lessonData?.[course?.id] || [];

        const firstLesson =
          courseLessons[0] || null;

        if (!cancelled) {
          setLesson(firstLesson);
        }
      } catch (error) {
        console.error(
          "Could not load lesson data:",
          error
        );

        if (!cancelled) {
          setLesson(null);
        }
      }
    }

    loadLesson();

    return () => {
      cancelled = true;
    };
  }, [course?.id]);

  // ============================================
  // TYPE KAI RESPONSE
  // ============================================

  const typeKaiMessage = (text) => {
    setDisplayedKaiText("");
    setIsKaiTyping(true);

    let index = 0;

    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedKaiText((previous) => {
          return previous + text[index];
        });

        index += 1;
      } else {
        clearInterval(timer);
        setIsKaiTyping(false);
      }
    }, 18);

    return () => clearInterval(timer);
  };

  // ============================================
  // ASK KAI
  // ============================================

  const askKai = async ({
    learnerMessage = "",
    conversation = [],
  } = {}) => {
    try {
      setIsKaiTyping(true);
      setDisplayedKaiText("");

      const response = await fetch(
        "/api/kai",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            course: {
              ...course,
              title: courseTitle,
            },

            lesson,

            learnerMessage,

            messages: conversation,
          }),
        }
      );

      const data = await response.json();

      console.log("Kai response:", data);

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Kai could not respond."
        );
      }

      // The backend returns the assistant text as "reply".
      const kaiReply = data.reply || "";

      if (!kaiReply) {
        throw new Error(
          "Kai returned an empty response."
        );
      }

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content: kaiReply,
        },
      ]);

      typeKaiMessage(kaiReply);
    } catch (error) {
      console.error(
        "Kai teaching error:",
        error
      );

      const errorMessage =
        "Hi! I'm Kai, your AI instructor. 👋 Something went wrong while connecting to my teaching engine. Please try again.";

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content: errorMessage,
        },
      ]);

      setDisplayedKaiText(errorMessage);
      setIsKaiTyping(false);
    }
  };

  // ============================================
  // START KAI
  // ============================================

  useEffect(() => {
    if (!lesson) return;

    let cancelled = false;

    async function startKai() {
      setMessages([]);
      setDisplayedKaiText("");

      if (cancelled) return;

      await askKai({
        learnerMessage: `
Start teaching me this lesson.

Introduce yourself as Kai.

Start with the first important concept.

Do not teach the entire lesson at once.

Teach conversationally.

Explain the concept simply.

Finish by asking me a simple question so I can participate.
        `.trim(),

        conversation: [],
      });
    }

    startKai();

    return () => {
      cancelled = true;
    };

    // We intentionally only start when the lesson changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lesson]);

  // ============================================
  // SEND LEARNER MESSAGE
  // ============================================

  const handleSend = async () => {
    const trimmedAnswer = answer.trim();

    if (!trimmedAnswer || isKaiTyping) {
      return;
    }

    const learnerMessage = {
      role: "user",
      content: trimmedAnswer,
    };

    const conversation = [
      ...messages,
      learnerMessage,
    ];

    // Show learner message immediately
    setMessages((previous) => [
      ...previous,
      learnerMessage,
    ]);

    setAnswer("");

    await askKai({
      learnerMessage: trimmedAnswer,
      conversation,
    });
  };

  // ============================================
  // RENDER KAI MESSAGE
  // ============================================

  const renderKaiMessage = (
    content,
    messageIndex
  ) => {
    const assistantMessages =
      messages.filter(
        (message) =>
          message.role === "assistant"
      );

    const latestAssistant =
      assistantMessages[
        assistantMessages.length - 1
      ];

    const isLatest =
      latestAssistant?.content === content;

    const text =
      isLatest &&
      displayedKaiText.length > 0
        ? displayedKaiText
        : content;

    return (
      <div
        className="chat-row kai-row"
        key={`kai-${messageIndex}`}
      >
        <div className="chat-content">

          <div className="chat-bubble kai-bubble">

            {/* KAI ICON AT TOP */}
            <div className="kai-message-header">

              <div className="chat-avatar kai-avatar-small">
                <Bot size={19} />
              </div>

              <div className="chat-name">
                Kai
                <span>AI Instructor</span>
              </div>

            </div>

            {/* KAI MESSAGE */}
            <div className="kai-message-text">

              {text
                .split("\n")
                .map((line, index) => (
                  <p key={index}>
                    {line}

                    {isLatest &&
                      isKaiTyping &&
                      index ===
                        text.split("\n")
                          .length -
                          1 && (
                        <span className="typing-cursor">
                          |
                        </span>
                      )}
                  </p>
                ))}

            </div>

          </div>

        </div>
      </div>
    );
  };

  // ============================================
  // RENDER LEARNER MESSAGE
  // ============================================

  const renderLearnerMessage = (
    content,
    messageIndex
  ) => {
    return (
      <div
        className="chat-row learner-row"
        key={`learner-${messageIndex}`}
      >

        <div className="chat-content">

          <div className="chat-bubble learner-bubble">

            {/* LEARNER ICON AT TOP */}
            <div className="learner-message-header">

              <div className="chat-name learner-name">
                You
                <span>Learner</span>
              </div>

              <div className="chat-avatar learner-avatar">
                <UserRound size={19} />
              </div>

            </div>

            <div className="learner-message-text">

              {content
                .split("\n")
                .map((line, index) => (
                  <p key={index}>
                    {line}
                  </p>
                ))}

            </div>

          </div>

        </div>

      </div>
    );
  };

  // ============================================
  // MAIN UI
  // ============================================

  return (
    <div className="learn-page">

      {/* ========================================
          NAVBAR
      ======================================== */}

      <header className="learn-navbar">

        <button
          type="button"
          className="learn-back"
          onClick={onBack}
        >
          <ArrowLeft size={17} />
          Courses
        </button>

        <div className="learn-course-title">
          <BookOpen size={18} />
          {courseTitle}
        </div>

        <div className="learn-progress">
          Lesson 1
        </div>

      </header>

      {/* ========================================
          CONVERSATION
      ======================================== */}

      <main className="conversation-container">

        {/* INTRO */}

        <div className="conversation-intro">

          <span className="lesson-label">
            <Code2 size={15} />
            LESSON 1
          </span>

          <h1>
            {lesson?.title ||
              `Introduction to ${courseTitle}`}
          </h1>

          <p>
            Learn through an interactive
            conversation with Kai.
          </p>

        </div>

        {/* ======================================
            CHAT
        ====================================== */}

        <div className="conversation-messages">

          {messages.map(
            (message, index) => {

              if (
                message.role ===
                "assistant"
              ) {
                return renderKaiMessage(
                  message.content,
                  index
                );
              }

              if (
                message.role === "user"
              ) {
                return renderLearnerMessage(
                  message.content,
                  index
                );
              }

              return null;
            }
          )}

          {/* KAI THINKING */}

          {isKaiTyping &&
            displayedKaiText.length ===
              0 && (
              <div className="chat-row kai-row">

                <div className="chat-content">

                  <div className="chat-bubble kai-bubble">

                    <div className="kai-message-header">

                      <div className="chat-avatar kai-avatar-small">
                        <Bot size={19} />
                      </div>

                      <div className="chat-name">
                        Kai
                        <span>
                          AI Instructor
                        </span>
                      </div>

                    </div>

                    <div className="kai-thinking">
                      <span />
                      <span />
                      <span />
                    </div>

                  </div>

                </div>

              </div>
            )}

        </div>

        {/* ======================================
            INPUT
        ====================================== */}

        <div className="learner-input-area">

          <div className="input-avatar">
            <UserRound size={19} />
          </div>

          <input
            type="text"
            value={answer}
            onChange={(event) =>
              setAnswer(
                event.target.value
              )
            }
            onKeyDown={(event) => {
              if (
                event.key === "Enter" &&
                !event.shiftKey
              ) {
                event.preventDefault();
                handleSend();
              }
            }}
            placeholder={
              isKaiTyping
                ? "Kai is teaching..."
                : "Ask Kai something..."
            }
            disabled={isKaiTyping}
          />

          <button
            type="button"
            onClick={handleSend}
            disabled={
              isKaiTyping ||
              !answer.trim()
            }
          >
            <Send size={18} />
          </button>

        </div>

        {/* ======================================
            ACTIONS
        ====================================== */}

        <div className="lesson-actions">

          <button
            type="button"
            className="back-lesson"
            onClick={onBack}
          >
            <ArrowLeft size={17} />
            Back to Courses
          </button>

          <button
            type="button"
            className="next-lesson"
            onClick={() => {
              alert(
                "Next lesson will be added next."
              );
            }}
          >
            Continue to Next Lesson
            <ArrowRight size={17} />
          </button>

        </div>

      </main>

    </div>
  );
}

export default CourseLearn;