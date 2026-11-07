import AIContentRenderer from "./AIContentRenderer";
import { authoredDeliveryToContext } from "../utils/authoredLesson";
import "./AuthoredLesson.css";

export default function AuthoredLesson({ lesson, delivery, theme = "dark" }) {
  if (!delivery) return null;

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
      <div className="authored-lesson-sections">
        {delivery.sections.map((section, index) => (
          <article className="authored-lesson-section" key={section.id}>
            <div className="authored-lesson-section-heading">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{section.title}</h3>
                {section.description && <p>{section.description}</p>}
              </div>
            </div>
            <AIContentRenderer
              content={section.blocks}
              theme={theme}
            />
          </article>
        ))}
      </div>
      <span className="authored-lesson-context" aria-hidden="true">
        {authoredDeliveryToContext(delivery)}
      </span>
    </section>
  );
}
