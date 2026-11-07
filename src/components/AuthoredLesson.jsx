import { useEffect, useState } from "react";
import AIContentRenderer from "./AIContentRenderer";
import { authoredDeliveryToContext } from "../utils/authoredLesson.mjs";
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
    <section className="authored-lesson" aria-labelledby="authored-lesson-title">
      <header className="authored-lesson-header">
        <div>
          <span className="authored-lesson-kicker">AUTHORED LESSON</span>
          <h2 id="authored-lesson-title">{lesson?.title || "Lesson"}</h2>
          {delivery.intro && <p>{delivery.intro}</p>}
        </div>
        <span className="authored-lesson-version">v{delivery.version}</span>
      </header>
      <div className="authored-lesson-progress" aria-label={`Part ${partIndex + 1} of ${delivery.sections.length}`}>
        <div className="authored-lesson-progress-copy"><strong>Part {partIndex + 1} of {delivery.sections.length}</strong><span>{section.title}</span></div>
        <div className="authored-lesson-progress-track"><span style={{ width: `${((partIndex + 1) / delivery.sections.length) * 100}%` }} /></div>
      </div>
      <div className="authored-lesson-sections">
        <article className="authored-lesson-section" key={section.id}>
          <div className="authored-lesson-section-heading">
            <span>{String(partIndex + 1).padStart(2, "0")}</span>
            <div>
              <h3>{section.title}</h3>
              {section.description && <p>{section.description}</p>}
            </div>
          </div>
          <AIContentRenderer
            content={section.blocks}
            theme={theme}
            onChoice={onChoice}
          />
        </article>
      </div>
      <nav className="authored-lesson-navigation" aria-label="Lesson part navigation">
        <button type="button" onClick={() => setPartIndex((current) => Math.max(0, current - 1))} disabled={isFirstPart}>
          Back
        </button>
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
      <span className="authored-lesson-context" aria-hidden="true">
        {authoredDeliveryToContext(delivery)}
      </span>
    </section>
  );
}
