import { ArrowLeft, BookOpen, CheckCircle2, LockKeyhole, PlayCircle } from "lucide-react";
import { getLessonsByCourse } from "../data/lessons";
import CourseLogo from "../components/CourseLogo";
import "./LessonsPage.css";

function LessonsPage({ course, courseAccess, onOpenLesson, onBack }) {
  const lessons = getLessonsByCourse(course?.id);
  const completedLessons = Math.max(0, Number(courseAccess?.progress?.lessonsCompleted) || 0);
  const nextLessonIndex = Math.min(completedLessons, Math.max(lessons.length - 1, 0));

  return (
    <section className="lessons-page" aria-labelledby="lessons-page-title">
      <header className="lessons-header">
        <button type="button" className="lessons-back" onClick={onBack}>
          <ArrowLeft size={17} /> Back to courses
        </button>
        <div className="lessons-course-mark"><CourseLogo course={course} /></div>
        <div className="lessons-heading-copy">
          <span className="lessons-kicker">COURSE LESSONS</span>
          <h1 id="lessons-page-title">{course?.title}</h1>
          <p>{course?.description}</p>
        </div>
        <span className="lessons-progress"><BookOpen size={16} /> {completedLessons}/{lessons.length} complete</span>
      </header>

      <main className="lessons-content">
        <div className="lessons-intro">
          <div>
            <span className="lessons-kicker">KAI-LED PATH</span>
            <h2>Choose your next lesson</h2>
            <p>Lessons unlock one at a time. Kai reviews your understanding before opening the next lesson and the next course.</p>
          </div>
          <div className="lessons-readiness-note"><PlayCircle size={18} /> <span>Only Kai can unlock your next step.</span></div>
        </div>

        <div className="lessons-grid">
          {lessons.map((lesson, index) => {
            const completed = index < completedLessons;
            const unlocked = index <= nextLessonIndex;
            return (
              <article className={`lesson-library-card ${completed ? "is-complete" : ""} ${!unlocked ? "is-locked" : ""}`} key={lesson.id}>
                <div className="lesson-number">{String(index + 1).padStart(2, "0")}</div>
                <div className="lesson-card-copy">
                  <span className="lesson-card-status">
                    {completed ? <><CheckCircle2 size={14} /> Completed</> : unlocked ? <><PlayCircle size={14} /> Ready with Kai</> : <><LockKeyhole size={14} /> Locked</>}
                  </span>
                  <span className={`lesson-card-level level-${String(lesson.level || "Beginner").toLowerCase()}`}>
                    {lesson.level || "Beginner"}
                  </span>
                  <h3>{lesson.title}</h3>
                  <p>{lesson.focus || "Build understanding through guided practice with Kai."}</p>
                </div>
                <button type="button" disabled={!unlocked} onClick={() => onOpenLesson?.(lesson)}>
                  {completed ? "Review lesson" : unlocked ? "Start with Kai" : "Locked by Kai"}
                  {unlocked ? <PlayCircle size={16} /> : <LockKeyhole size={16} />}
                </button>
              </article>
            );
          })}
        </div>
      </main>
    </section>
  );
}

export default LessonsPage;
