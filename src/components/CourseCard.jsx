import {
  ArrowRight,
  BookOpen,
  Code2,
  Database,
  Globe,
  Cpu,
  Bot,
  Wrench,
} from "lucide-react";
import "./CourseCard.css";

const iconMap = {
  coding: Code2,
  "tech-engines": Cpu,
  "ai-tools": Bot,
  "developer-tools": Wrench,
  "web-technologies": Globe,
  databases: Database,
};

function CourseCard({ course, onSelect }) {
  if (!course) return null;

  const Icon = iconMap[course.id] || BookOpen;

  return (
    <article className="course-card">
      <div className="course-card-top">
        <div className="course-card-icon">
          <Icon size={28} strokeWidth={1.8} />
        </div>

        {course.level && (
          <span className="course-level">
            {course.level}
          </span>
        )}
      </div>

      <div className="course-card-content">
        <h3>{course.title}</h3>

        <p>
          {course.description}
        </p>

        <div className="course-card-meta">
          <span>
            <BookOpen size={15} />
            {course.lessons || 0} Lessons
          </span>

          {course.duration && (
            <span>
              {course.duration}
            </span>
          )}
        </div>
      </div>

      <button
        type="button"
        className="course-card-button"
        onClick={() => onSelect?.(course)}
      >
        Start Course
        <ArrowRight size={17} />
      </button>
    </article>
  );
}

export default CourseCard;