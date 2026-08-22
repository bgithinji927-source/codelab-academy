import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  BookOpen,
  Code2,
  UserRound,
  Send,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import fetchWithAuth from "../utils/fetchWithAuth";
import "./CourseLearn.css";

function CourseLearn({ user, course, onBack }) {
  const [messages, setMessages] = useState([]);
  const [answer, setAnswer] = useState("");
  const [isKaiTyping, setIsKaiTyping] = useState(false);
  const [displayedKaiText, setDisplayedKaiText] = useState("");
  const [lesson, setLesson] = useState(null);
  
  // ============================================
  // LESSON PROGRESSION STATE
  // ============================================
  
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [allLessons, setAllLessons] = useState([]);
  const [previousLessonSummary, setPreviousLessonSummary] = useState("");
  const [lessonCompletionReady, setLessonCompletionReady] = useState(false);

  const typingTimerRef = useRef(null);
  const conversationEndRef = useRef(null);
  const scrollFrameRef = useRef(null);

  const courseTitle = course?.title || "Programming";

  // Keep the latest Kai text visible while the response is being typed.
  // requestAnimationFrame coalesces the 15ms typing updates into one scroll
  // per rendered frame instead of creating a queue of smooth scrolls.
  useEffect(() => {
    if (scrollFrameRef.current) {
      cancelAnimationFrame(scrollFrameRef.current);
    }

    scrollFrameRef.current = requestAnimationFrame(() => {
      conversationEndRef.current?.scrollIntoView({
        behavior: isKaiTyping ? "auto" : "smooth",
        block: "end",
      });
      scrollFrameRef.current = null;
    });

    return () => {
      if (scrollFrameRef.current) {
        cancelAnimationFrame(scrollFrameRef.current);
        scrollFrameRef.current = null;
      }
    };
  }, [displayedKaiText, isKaiTyping, messages.length]);

  // ============================================
  // CLEAN KAI RESPONSE
  // ============================================

  const cleanKaiResponse = (value) => {
    if (value === null || value === undefined) {
      return "";
    }

    let text = String(value);

    // Prevent the UI from displaying accidental
    // "undefined" or "null" from the API.
    text = text.replace(/\s*undefined\s*$/i, "");
    text = text.replace(/\s*null\s*$/i, "");

    return text.trim();
  };

  // ============================================
  // LOAD ALL LESSONS FOR COURSE
  // ============================================

  useEffect(() => {
    let cancelled = false;

    async function loadCourseLessons() {
      try {
        const lessonModule = await import("../data/lessons.js");

        const lessonData =
          lessonModule.default || lessonModule.lessons;

        const courseLessons =
          lessonData?.[course?.id] || [];

        if (!cancelled) {
          setAllLessons(courseLessons);
          
          if (courseLessons.length > 0) {
            setLesson(courseLessons[0]);
            setCurrentLessonIndex(0);
            setPreviousLessonSummary("");
          }
        }
      } catch (error) {
        console.error(
          "Could not load lesson data:",
          error
        );

        if (!cancelled) {
          setAllLessons([]);
          setLesson(null);
        }
      }
    }

    loadCourseLessons();

    return () => {
      cancelled = true;
    };
  }, [course?.id]);

  // ============================================
  // STOP TYPING ANIMATION
  // ============================================

  const stopTyping = () => {
    if (typingTimerRef.current) {
      clearInterval(typingTimerRef.current);
      typingTimerRef.current = null;
    }

    setIsKaiTyping(false);
  };

  // ============================================
  // TYPE KAI RESPONSE
  // ============================================

  const typeKaiMessage = (text) => {
    stopTyping();

    const cleanText = cleanKaiResponse(text);

    setDisplayedKaiText("");
    setIsKaiTyping(true);

    let index = 0;

    typingTimerRef.current = setInterval(() => {
      if (index >= cleanText.length) {
        clearInterval(typingTimerRef.current);
        typingTimerRef.current = null;
        setIsKaiTyping(false);
        return;
      }

      const character = cleanText[index];

      setDisplayedKaiText((previous) => {
        return previous + character;
      });

      index += 1;
    }, 15);
  };

  // ============================================
  // ASK KAI (WITH PROGRESSION SUPPORT)
  // ============================================

  const askKai = async ({
    learnerMessage = "",
    conversation = [],
    nextLesson = false,
  } = {}) => {
    try {
      stopTyping();
      setDisplayedKaiText("");
      setIsKaiTyping(true);

      const response = await fetchWithAuth("/api/kai", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          userId: user?.id,
          course: {
            ...course,
            title: courseTitle,
          },

          lesson,

          userId: user?.id,
          learnerMessage,

          messages: conversation,

          // NEW: Progression context
          nextLesson,
          previousLessonSummary,
          currentLessonIndex,
          totalLessons: allLessons.length,
        }),
      });

      const data = await response.json();

      console.log("Kai response:", data);

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Kai could not respond."
        );
      }

      const kaiReply = cleanKaiResponse(
        data.reply
      );

      if (!kaiReply) {
        throw new Error(
          "Kai returned an empty response."
        );
      }

      // ========================================
      // HANDLE LESSON PROGRESSION FROM KAI
      // ========================================

      if (
        data.nextLessonReady &&
        currentLessonIndex < allLessons.length - 1
      ) {
        // Kai decided we should move to next lesson
        const lessonSummary =
          data.lessonSummary || kaiReply;
        
        setPreviousLessonSummary(lessonSummary);
        setMessages([]);
        setAnswer("");
        setDisplayedKaiText("");
        
        const nextIndex = currentLessonIndex + 1;
        setCurrentLessonIndex(nextIndex);
        setLesson(allLessons[nextIndex]);
        setLessonCompletionReady(false);
        
        // The lesson change effect will trigger Kai intro
        return;
      }

      // Check if Kai indicated readiness for next lesson
      if (data.readyForNextLesson) {
        setLessonCompletionReady(true);
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
  // START LESSON
  // ============================================

  useEffect(() => {
    if (!lesson) return;

    let cancelled = false;

    async function startKai() {
      setMessages([]);
      setAnswer("");
      setDisplayedKaiText("");
      setLessonCompletionReady(false);

      if (cancelled) return;

      const lessonNumber = currentLessonIndex + 1;
      const totalLessons = allLessons.length;
      
      let startMessage = `
Start teaching me this lesson.

You are Kai, my personal AI instructor.

Teach me this lesson step by step instead of giving me the whole lesson at once.

Start by:
1. Introducing yourself briefly.
2. Explaining the first important concept.
3. Giving a practical example.
4. Showing code when useful using proper Markdown code fences.
5. Explaining the code clearly.
6. Checking my understanding with one simple question.

Teach deeply but do not overwhelm me.

Do not simply dump the lesson content.

Adapt your explanation to my answers.

Never output the word "undefined" unless you are specifically explaining what the JavaScript value undefined means.

Keep the conversation natural and focused on learning.
      `.trim();

      // Add context if continuing from previous lesson
      if (currentLessonIndex > 0 && previousLessonSummary) {
        startMessage = `
In the previous lesson, we covered: ${previousLessonSummary}

Now let's move to lesson ${lessonNumber} of ${totalLessons}.

${startMessage}
        `.trim();
      }

      await askKai({
        learnerMessage: startMessage,
        conversation: [],
      });
    }

    startKai();

    return () => {
      cancelled = true;
      stopTyping();
    };

    // We intentionally restart when the lesson changes.
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
  // INLINE MARKDOWN
  // ============================================

  const renderInlineMarkdown = (text) => {
    const parts = String(text).split(
      /(`[^`]+`|\*\*[^*]+\*\*)/g
    );

    return parts.map((part, index) => {
      if (
        part.startsWith("`") &&
        part.endsWith("`")
      ) {
        return (
          <code
            key={index}
            className="kai-inline-code"
          >
            {part.slice(1, -1)}
          </code>
        );
      }

      if (
        part.startsWith("**") &&
        part.endsWith("**")
      ) {
        return (
          <strong key={index}>
            {part.slice(2, -2)}
          </strong>
        );
      }

      return (
        <span key={index}>
          {part}
        </span>
      );
    });
  };

  // ============================================
  // MARKDOWN RENDERER
  // ============================================

  const renderMarkdown = (content) => {
    const text = cleanKaiResponse(content);

    if (!text) {
      return null;
    }

    const lines = text.split("\n");
    const elements = [];

    let insideCodeBlock = false;
    let codeLanguage = "code";
    let codeLines = [];

    const addCodeBlock = (key) => {
      if (!codeLines.length) {
        return;
      }

      elements.push(
        <div
          className="kai-code-wrapper"
          key={`code-${key}`}
        >
          <div className="kai-code-header">
            <div className="kai-code-title">
              <Code2 size={13} />

              <span>
                {codeLanguage || "code"}
              </span>
            </div>

            <span className="kai-code-label">
              Example
            </span>
          </div>

          <pre className="kai-code-block">
            <code>
              {codeLines.join("\n")}
            </code>
          </pre>
        </div>
      );

      codeLines = [];
      codeLanguage = "code";
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      // Markdown code fence
      if (trimmed.startsWith("```")) {
        if (!insideCodeBlock) {
          insideCodeBlock = true;

          codeLanguage =
            trimmed
              .replace(/^```/, "")
              .trim() || "code";
        } else {
          insideCodeBlock = false;
          addCodeBlock(index);
        }

        return;
      }

      if (insideCodeBlock) {
        codeLines.push(line);
        return;
      }

      // Empty line
      if (!trimmed) {
        elements.push(
          <div
            className="kai-message-spacer"
            key={`space-${index}`}
          />
        );

        return;
      }

      // Heading 3
      if (trimmed.startsWith("### ")) {
        elements.push(
          <h4 key={index}>
            {renderInlineMarkdown(
              trimmed.slice(4)
            )}
          </h4>
        );

        return;
      }

      // Heading 2
      if (trimmed.startsWith("## ")) {
        elements.push(
          <h3 key={index}>
            {renderInlineMarkdown(
              trimmed.slice(3)
            )}
          </h3>
        );

        return;
      }

      // Heading 1
      if (trimmed.startsWith("# ")) {
        elements.push(
          <h2 key={index}>
            {renderInlineMarkdown(
              trimmed.slice(2)
            )}
          </h2>
        );

        return;
      }

      // Bullet
      if (
        trimmed.startsWith("- ") ||
        trimmed.startsWith("* ")
      ) {
        elements.push(
          <div
            className="kai-list-item"
            key={index}
          >
            <span className="kai-list-dot">
              •
            </span>

            <span>
              {renderInlineMarkdown(
                trimmed.slice(2)
              )}
            </span>
          </div>
        );

        return;
      }

      // Numbered list
      const numbered =
        trimmed.match(
          /^(\d+)\.\s+(.*)$/
        );

      if (numbered) {
        elements.push(
          <div
            className="kai-list-item kai-numbered"
            key={index}
          >
            <span className="kai-number">
              {numbered[1]}
            </span>

            <span>
              {renderInlineMarkdown(
                numbered[2]
              )}
            </span>
          </div>
        );

        return;
      }

      // Normal paragraph
      elements.push(
        <p key={index}>
          {renderInlineMarkdown(trimmed)}

          {isKaiTyping &&
            index === lines.length - 1 && (
              <span className="typing-cursor">
                |
              </span>
            )}
        </p>
      );
    });

    // Protect against an unfinished code block.
    if (insideCodeBlock) {
      addCodeBlock("unfinished");
    }

    return elements;
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

          <div className="kai-message-header">
            <div className="chat-avatar kai-avatar-small">
              <Bot size={18} />
            </div>

            <div className="chat-name">
              <strong>Kai</strong>
              <span>AI Instructor</span>
            </div>

            <div className="kai-online">
              <span />
              Online
            </div>
          </div>

          <div className="chat-bubble kai-bubble">
            <div className="kai-message-text">
              {renderMarkdown(text)}
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
        <div className="chat-content learner-content">

          <div className="learner-message-header">
            <div className="chat-name learner-name">
              <strong>You</strong>
              <span>Learner</span>
            </div>

            <div className="chat-avatar learner-avatar">
              <UserRound size={18} />
            </div>
          </div>

          <div className="chat-bubble learner-bubble">
            <div className="learner-message-text">
              {String(content)
                .split("\n")
                .map((line, index) => (
                  <p key={index}>
                    {line || "\u00A0"}
                  </p>
                ))}
            </div>
          </div>

        </div>
      </div>
    );
  };

  // ============================================
  // CALCULATE PROGRESS PERCENTAGE
  // ============================================

  const progressPercentage = allLessons.length > 0
    ? Math.round(((currentLessonIndex + 1) / allLessons.length) * 100)
    : 0;

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
          <span>Courses</span>
        </button>

        <div className="learn-course-title">
          <BookOpen size={18} />
          <span>{courseTitle}</span>
        </div>

        <div className="learn-progress">
          <span className="progress-label">
            Lesson {currentLessonIndex + 1}
          </span>

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          <span className="progress-percent">
            {progressPercentage}%
          </span>
        </div>

        <div className="learn-top-actions">
          <div className="lesson-status">
            <CheckCircle2 size={16} />
            <span>{lessonCompletionReady ? "Ready for next lesson!" : "Lesson in progress"}</span>
          </div>
          <button
            type="button"
            className="next-lesson"
            onClick={() => askKai({
              learnerMessage: "I feel ready to move to the next lesson. Can we continue?",
              conversation: messages,
              nextLesson: true,
            })}
            disabled={currentLessonIndex >= allLessons.length - 1 || isKaiTyping}
          >
            Continue to Next Lesson
            <ArrowRight size={17} />
          </button>
        </div>

      </header>

      {/* ========================================
          MAIN
      ======================================== */}

      <main className="conversation-container">


        {/* ======================================
            CHAT
        ====================================== */}

        <section className="conversation-messages">

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
            displayedKaiText.length === 0 && (
              <div className="chat-row kai-row">

                <div className="chat-content">

                  <div className="kai-message-header">
                    <div className="chat-avatar kai-avatar-small">
                      <Bot size={18} />
                    </div>

                    <div className="chat-name">
                      <strong>Kai</strong>
                      <span>
                        AI Instructor
                      </span>
                    </div>

                    <div className="kai-online">
                      <span />
                      Thinking
                    </div>
                  </div>

                  <div className="chat-bubble kai-bubble">

                    <div className="kai-thinking">
                      <span />
                      <span />
                      <span />
                    </div>

                  </div>

                </div>

              </div>
            )}

          <div
            ref={conversationEndRef}
            className="conversation-end-anchor"
            aria-hidden="true"
          />

        </section>

        {/* ======================================
            INPUT
        ====================================== */}

        <div className="learner-input-area">

          <div className="input-avatar">
            <UserRound size={18} />
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
                ? "Kai is thinking..."
                : "Answer Kai or ask a question..."
            }
            disabled={isKaiTyping}
            autoComplete="off"
          />

          <button
            type="button"
            onClick={handleSend}
            disabled={
              isKaiTyping ||
              !answer.trim()
            }
            aria-label="Send message"
          >
            <Send size={17} />
          </button>

        </div>

        <div className="input-hint">
          Press <kbd>Enter</kbd> to send
        </div>

      </main>

    </div>
  );
}

export default CourseLearn;
