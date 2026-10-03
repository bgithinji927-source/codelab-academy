import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";
import fetchWithAuth from "../utils/fetchWithAuth";
import "./LearnerAssessmentModal.css";

const QUESTIONS = [
  {
    id: "experience",
    title: "What's your experience with this topic?",
    options: ["Complete beginner", "I've tried it before", "Intermediate", "Advanced"],
  },
  {
    id: "programmingExperience",
    title: "Have you programmed before?",
    options: ["Never", "A little", "Yes, regularly"],
  },
  {
    id: "goal",
    title: "What do you want to achieve?",
    options: [
      "Learn programming fundamentals",
      "Build applications",
      "Web development",
      "AI",
      "Automation",
      "Cybersecurity",
      "School/academic purposes",
    ],
  },
  {
    id: "learningPreference",
    title: "How do you prefer to learn?",
    options: ["Step-by-step explanations", "Practical exercises", "Projects", "A mixture"],
  },
  {
    id: "studyTime",
    title: "How much time can you study?",
    options: ["15 minutes/day", "30 minutes/day", "1 hour/day", "More than 1 hour"],
  },
];

export default function LearnerAssessmentModal({ course, onComplete, onClose }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");
  const question = QUESTIONS[step];
  const progress = useMemo(() => `${step + 1}/${QUESTIONS.length}`, [step]);

  const choose = (value) => {
    setAnswers((current) => ({ ...current, [question.id]: value }));
    setError("");
  };

  const next = async () => {
    if (!answers[question.id]) {
      setError("Choose an answer to continue.");
      return;
    }
    if (step < QUESTIONS.length - 1) {
      setStep((current) => current + 1);
      return;
    }

    setIsSaving(true);
    setError("");
    try {
      const response = await fetchWithAuth("/api/auth/learning-assessment", {
        method: "PATCH",
        body: JSON.stringify({
          courseId: course.id,
          courseTitle: course.title,
          ...answers,
        }),
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
      <section className="assessment-modal" role="dialog" aria-modal="true" aria-labelledby="assessment-title">
        <div className="assessment-header">
          <div>
            <span className="assessment-eyebrow">KAI LEARNING PATH</span>
            <h2 id="assessment-title">Let Kai personalize your path</h2>
            <p>{course.title} · A quick assessment before your lessons begin.</p>
          </div>
          {onClose && <button type="button" className="assessment-close" onClick={onClose} aria-label="Close assessment"><X size={18} /></button>}
        </div>

        <div className="assessment-progress" aria-label={`Question ${progress} of ${QUESTIONS.length}`}>
          <span style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }} />
        </div>
        <div className="assessment-step-label">QUESTION {progress}</div>
        <h3 className="assessment-question">{question.title}</h3>
        <div className="assessment-options">
          {question.options.map((option) => (
            <button
              type="button"
              key={option}
              className={`assessment-option${answers[question.id] === option ? " is-selected" : ""}`}
              onClick={() => choose(option)}
            >
              <span>{option}</span>
              {answers[question.id] === option && <Check size={17} />}
            </button>
          ))}
        </div>
        {error && <p className="assessment-error" role="alert">{error}</p>}
        <div className="assessment-actions">
          <button type="button" className="assessment-secondary" onClick={() => setStep((current) => Math.max(0, current - 1))} disabled={step === 0 || isSaving}>
            <ArrowLeft size={16} /> Back
          </button>
          <button type="button" className="assessment-primary" onClick={next} disabled={isSaving}>
            {isSaving ? "Saving..." : step === QUESTIONS.length - 1 ? "Build my path" : "Continue"}
            {!isSaving && <ArrowRight size={16} />}
          </button>
        </div>
      </section>
    </div>
  );
}
