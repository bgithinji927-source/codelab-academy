import { useEffect, useRef, useState } from "react";
import { Bot, ChevronDown, MessageCircle } from "lucide-react";
import AIContentRenderer from "./AIContentRenderer";
import "./AuthoredLesson.css";

export default function AuthoredLesson({ lesson, delivery, theme = "dark", onStartAssessment, onAskKai, kaiTeachingsCollapsed = false, onToggleKaiTeachings, assessmentStarted = false }) {
  const progressKey = `codelab-authored-part:${lesson?.id || "lesson"}`;
  const [partIndex, setPartIndex] = useState(() => {
    const saved = Number.parseInt(localStorage.getItem(progressKey) || "0", 10);
    return Number.isInteger(saved) ? Math.max(0, Math.min(saved, (delivery?.sections?.length || 1) - 1)) : 0;
  });
  const partStartRef = useRef(null);

  useEffect(() => {
    localStorage.setItem(progressKey, String(partIndex));
  }, [partIndex, progressKey]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      partStartRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [partIndex]);

  if (!delivery) return null;
  const section = delivery.sections[partIndex] || delivery.sections[0];
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
              <h2 id="authored-lesson-title">{lesson?.title || "Lesson"}</h2>
            </header>
            <nav className="authored-lesson-parts" aria-label="Teaching parts">
              {delivery.sections.map((part, index) => (
                <button
                  type="button"
                  key={part.id || `part-${index}`}
                  className={index === partIndex ? "is-active" : ""}
                  onClick={() => setPartIndex(index)}
                  aria-current={index === partIndex ? "step" : undefined}
                >
                  Part {index + 1}
                </button>
              ))}
            </nav>
            <article className="authored-lesson-section" key={section.id} ref={partStartRef}>
              <AIContentRenderer content={section.blocks} theme={theme} />
            </article>
          </div>
        </div>

        <nav className="authored-lesson-navigation" aria-label="Lesson part navigation">
          <button
            type="button"
            onClick={() => setPartIndex((current) => Math.max(0, current - 1))}
            disabled={partIndex === 0}
          >
            Back
          </button>
          <span>Part {partIndex + 1} of {delivery.sections.length}</span>
          <button type="button" className="kai-teaching-toggle" onClick={onToggleKaiTeachings} aria-expanded={!kaiTeachingsCollapsed}>
            <ChevronDown size={15} aria-hidden="true" />
            {kaiTeachingsCollapsed ? "Expand Kai teachings" : "Collapse Kai teachings"}
          </button>
          <button type="button" onClick={onAskKai} disabled={!onAskKai}>
            <MessageCircle size={15} aria-hidden="true" />
            Ask Kai
          </button>
          {isFinalPart ? (
            <button type="button" className="is-primary" onClick={onStartAssessment} disabled={assessmentStarted}>
              {assessmentStarted ? "Kai assessment started" : "Start Kai assessment"}
            </button>
          ) : (
            <button type="button" className="is-primary" onClick={() => setPartIndex((current) => Math.min(delivery.sections.length - 1, current + 1))}>
              Continue
            </button>
          )}
        </nav>
      </div>
    </div>
  );
}
