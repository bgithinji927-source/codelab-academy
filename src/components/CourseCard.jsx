import {
  ArrowRight,
  BookOpen,
} from "lucide-react";
import CourseLogo from "./CourseLogo";
import "./CourseCard.css";

function CourseCard({ course, onSelect }) {
  if (!course) return null;

  return (
    <article className="course-card">
      <div className="course-card-top">
        <div className="course-card-icon">
          <CourseLogo course={course} />
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