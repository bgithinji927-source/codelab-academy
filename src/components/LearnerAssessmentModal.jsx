import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Bot, Check, Clock3, X } from "lucide-react";
import fetchWithAuth from "../utils/fetchWithAuth";
import "./LearnerAssessmentModal.css";

const QUESTIONS = [
  {
    id: "experience",
    options: ["Complete beginner", "I've tried it before", "Intermediate", "Advanced"],
    prompt: (courseTitle) => `Before we start ${courseTitle}, how much experience do you have with it?`,
  },
  {
    id: "programmingExperience",
    options: ["Never", "A little", "Yes, regularly"],
    prompt: () => "Have you programmed before, in any language?",
  },
  {
    id: "goal",
    options: [
      "Learn programming fundamentals",
      "Build applications",
      "Web development",
      "AI",
      "Automation",
      "Cybersecurity",
      "School/academic purposes",
    ],
    prompt: (courseTitle) => `What would you most like to achieve with ${courseTitle}?`,
  },
  {
    id: "learningPreference",
    options: ["Step-by-step explanations", "Practical exercises", "Projects", "A mixture"],
    prompt: () => "How should I shape your lessons so they feel most useful?",
  },
  {
    id: "studyTime",
    options: ["15 minutes/day", "30 minutes/day", "1 hour/day", "More than 1 hour"],
    prompt: () => "Finally, how much time can you study on a typical day?",
  },
];

function buildSummary(courseTitle, answers) {
  return `I have a plan for your ${courseTitle} path. I'll start at the ${String(answers.experience || "right").toLowerCase()} level, use ${String(answers.learningPreference || "a mixture").toLowerCase()}, focus on ${String(answers.goal || "your goals").toLowerCase()}, and keep sessions sized for ${String(answers.studyTime || "your schedule").toLowerCase()}. Ready to begin?`;
}

export default function LearnerAssessmentModal({ course, onComplete, onClose }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [displayedText, setDisplayedText] = useState("");
  const [isKaiTyping, setIsKaiTyping] = useState(true);
  const [showSummary, setShowSummary] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");
  const question = QUESTIONS[step];
  const selectedAnswer = answers[question.id];
  const progress = useMemo(() => `${Math.min(step + 1, QUESTIONS.length)}/${QUESTIONS.length}`, [step]);
  const kaiText = showSummary ? buildSummary(course.title, answers) : question.prompt(course.title);

  useEffect(() => {
    setDisplayedText("");
    setIsKaiTyping(true);
    let interval;
    const delay = window.setTimeout(() => {
      setIsKaiTyping(false);
      let index = 0;
      interval = window.setInterval(() => {
        index += 1;
        setDisplayedText(kaiText.slice(0, index));
        if (index >= kaiText.length) window.clearInterval(interval);
      }, 24);
    }, 620);
    return () => {
      window.clearTimeout(delay);
      if (interval) window.clearInterval(interval);
    };
  }, [kaiText]);

  const choose = (value) => {
    if (isKaiTyping || isSaving) return;
    setAnswers((current) => ({ ...current, [question.id]: value }));
    setError("");
  };

  const continueAssessment = () => {
    if (!selectedAnswer || isKaiTyping || isSaving) {
      setError("Select an answer to continue.");
      return;
    }
    const nextAnswers = { ...answers, [question.id]: selectedAnswer };
    if (step === QUESTIONS.length - 1) {
      setAnswers(nextAnswers);
      setShowSummary(true);
      return;
    }
    setError("");
    setStep((current) => current + 1);
  };

  const saveAssessment = async () => {
    setIsSaving(true);
    setError("");
    try {
      const response = await fetchWithAuth("/api/auth/learning-assessment", {
        method: "PATCH",
        body: JSON.stringify({ courseId: course.id, courseTitle: course.title, ...answers }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.message || "Could not save your learning profile.");
      onComplete?.(data.assessment, data.user);
    } catch (saveError) {
      setError(saveError.message || "Could not save your learning profile. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="assessment-backdrop" role="presentation">
      <section className="assessment-modal assessment-chat-modal" role="dialog" aria-modal="true" aria-labelledby="assessment-title">
        <div className="assessment-header">
          <div className="assessment-brand">
            <div className="assessment-kai-avatar"><Bot size={20} /></div>
            <div>
              <span className="assessment-eyebrow">KAI · AI INSTRUCTOR</span>
              <h2 id="assessment-title">Let’s build your learning path</h2>
            </div>
          </div>
          {onClose && <button type="button" className="assessment-close" onClick={onClose} aria-label="Close assessment"><X size={18} /></button>}
        </div>
        <div className="assessment-course-line"><span>{course.title}</span><span><Clock3 size={14} /> 2 min assessment</span></div>
        <div className="assessment-progress" aria-label={`Question ${progress} of ${QUESTIONS.length}`}><span style={{ width: `${((showSummary ? QUESTIONS.length : step + 1) / QUESTIONS.length) * 100}%` }} /></div>

        <div className="assessment-chat" aria-live="polite">
          <div className="assessment-chat-row assessment-kai-row assessment-page-swipe" key={`${step}-${showSummary}`}>
            <div className="assessment-kai-mini"><Bot size={15} /></div>
            <div className="assessment-kai-bubble">
              {isKaiTyping && <span className="assessment-typing-dots"><i /><i /><i /></span>}
              {!isKaiTyping && <>{displayedText}<span className="assessment-caret" aria-hidden="true" /></>}
            </div>
          </div>
        </div>

        {!showSummary && !isKaiTyping && (
          <div className="assessment-suggestions" aria-label="Kai suggestions">
            <div className="assessment-suggestions-label">Choose one answer</div>
            {question.options.map((option) => (
              <button type="button" className={`assessment-suggestion${selectedAnswer === option ? " is-selected" : ""}`} key={option} onClick={() => choose(option)} aria-pressed={selectedAnswer === option}>
                <span className="assessment-checkbox" aria-hidden="true">{selectedAnswer === option && <Check size={14} />}</span>
                <span>{option}</span>
              </button>
            ))}
            <button type="button" className="assessment-primary assessment-continue-button" onClick={continueAssessment}>
              Continue <ArrowRight size={16} />
            </button>
          </div>
        )}

        {showSummary && !isKaiTyping && (
          <div className="assessment-summary-actions">
            <div className="assessment-summary-note"><Check size={16} /> Your answers are ready for Kai.</div>
            <button type="button" className="assessment-primary assessment-start-button" onClick={saveAssessment} disabled={isSaving}>
              {isSaving ? "Saving your path..." : "Start my personalized lessons"}<ArrowRight size={16} />
            </button>
          </div>
        )}
        {error && <p className="assessment-error" role="alert">{error}</p>}
        <div className="assessment-footer"><span>Question {progress}</span><span>Your answers stay private to your learning profile.</span></div>
      </section>
    </div>
  );
}
