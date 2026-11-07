import { useEffect, useState } from "react";
import { Bot } from "lucide-react";
import AIContentRenderer from "./AIContentRenderer";
import "./AuthoredLesson.css";

export default function AuthoredLesson({ lesson, delivery, theme = "dark", onChoice, onStartAssessment, assessmentStarted = false }) {
  const progressKey = `codelab-authored-part:${lesson?.id || "lesson"}`;
  const [partIndex, setPartIndex] = useState(() => {
    const saved = Number.parseInt(localStorage.getItem(progressKey) || "0", 10);
    return Number.isInteger(saved) ? Math.max(0, Math.min(saved, (delivery?.sections?.length || 1) - 1)) : 0;
  });

  useEffect(() => {
    localStorage.setItem(progressKey, String(partIndex));
  }, [partIndex, progressKey]);

  if (!delivery) return null;
  const section = delivery.sections[partIndex] || delivery.sections[0];
  const isFirstPart = partIndex === 0;
  const isFinalPart = partIndex === delivery.sections.length - 1;

  return (
    <div className="chat-row kai-row authored-lesson-message">
      <div className="chat-content">
        <div className="kai-message-header">
          <div className="chat-avatar kai-avatar-small" aria-hidden="true"><Bot size={18} /></div>
          <div className="chat-name">
            <strong>Kai</strong>
            <span>AI Instructor</span>
          </div>
          <div className="kai-online"><span />Online</div>
        </div>

        <div className="kai-board-content">
          <div className="kai-message-text authored-lesson-text" aria-labelledby="authored-lesson-title">
            <header className="authored-lesson-header">
              <div>
                <span className="authored-lesson-kicker">LESSON {String(partIndex + 1).padStart(2, "0")}</span>
                <h2 id="authored-lesson-title">{lesson?.title || "Lesson"}</h2>
                {delivery.intro && <p>{delivery.intro}</p>}
              </div>
              <span className="authored-lesson-version">Part {partIndex + 1}/{delivery.sections.length}</span>
            </header>
            <div className="authored-lesson-progress" aria-label={`Part ${partIndex + 1} of ${delivery.sections.length}`}>
              <div className="authored-lesson-progress-copy"><strong>{section.title}</strong><span>{Math.round(((partIndex + 1) / delivery.sections.length) * 100)}% complete</span></div>
              <div className="authored-lesson-progress-track"><span style={{ width: `${((partIndex + 1) / delivery.sections.length) * 100}%` }} /></div>
            </div>
            <article className="authored-lesson-section" key={section.id}>
              <div className="authored-lesson-section-heading">
                <span>{String(partIndex + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{section.title}</h3>
                  {section.description && <p>{section.description}</p>}
                </div>
              </div>
              <AIContentRenderer content={section.blocks} theme={theme} onChoice={onChoice} />
            </article>
          </div>
        </div>

        <nav className="authored-lesson-navigation" aria-label="Lesson part navigation">
          <button type="button" onClick={() => setPartIndex((current) => Math.max(0, current - 1))} disabled={isFirstPart}>Back</button>
          <span>{partIndex + 1} / {delivery.sections.length}</span>
          {isFinalPart ? (
            <button type="button" className="is-primary" onClick={onStartAssessment} disabled={assessmentStarted}>
              {assessmentStarted ? "Kai assessment started" : "Start Kai assessment"}
            </button>
          ) : (
            <button type="button" className="is-primary" onClick={() => setPartIndex((current) => Math.min(delivery.sections.length - 1, current + 1))}>
              Continue to Part {partIndex + 2}
            </button>
          )}
        </nav>
      </div>
    </div>
  );
}
