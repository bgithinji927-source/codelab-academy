import { useEffect, useState } from "react";
import {

  ArrowLeft,
  ArrowRight,
  BookOpen,
  Code2,
  Database,
  Globe,
  Bot,
  Wrench,
  Cpu,
  Cloud,
  Layers3,
  Boxes,
  ShieldCheck,
  LockKeyhole,
  CircleCheck,
  Smartphone,
  Gamepad2,
} from "lucide-react";

import courses from "../data/course";
import CourseLearn from "./CourseLearn";
import ThemeToggle from "../components/ThemeToggle";
import fetchWithAuth from "../utils/fetchWithAuth";
import { buildFallbackCourseAccess, findCourseAccess } from "../utils/courseAccess";
import "./Courses.css";

const categories = [
  {
    name: "Coding",
    description: "Python, JavaScript, Java, C++, and more.",
    icon: Code2,
    accent: "purple",
  },
  {
    name: "Tech Engines",
    description: "Understand the systems that power modern technology.",
    icon: Cpu,
    accent: "blue",
  },
  {
    name: "Cloud Engineering",
    description: "Build, secure, deploy, and operate reliable cloud systems.",
    icon: Cloud,
    accent: "blue",
  },
  {
    name: "AI Tools",
    description: "Learn practical tools for building with artificial intelligence.",
    icon: Bot,
    accent: "pink",
  },
  {
    name: "Developer Tools",
    description: "Master the tools developers use every day.",
    icon: Wrench,
    accent: "orange",
  },
  {
    name: "Web Technologies",
    description: "Build modern websites and full-stack applications.",
    icon: Globe,
    accent: "green",
  },
  {
    name: "Databases",
    description: "Store, query, secure, and scale application data.",
    icon: Database,
    accent: "indigo",
  },
  {
    name: "DevOps",
    description: "Automate testing, deployment, infrastructure, and operations.",
    icon: Boxes,
    accent: "green",
  },
  {
    name: "Cyber Security",
    description: "Protect systems, networks, identities, and application data.",
    icon: ShieldCheck,
    accent: "blue",
  },
  {
    name: "Mobile Development",
    description: "Build useful Android, iOS, and cross-platform mobile apps.",
    icon: Smartphone,
    accent: "pink",
  },
  {
    name: "Game Development",
    description: "Design and program interactive games and real-time experiences.",
    icon: Gamepad2,
    accent: "orange",
  },
  {
    name: "System Design",
    description: "Design scalable services, APIs, and distributed systems.",
    icon: Boxes,
    accent: "indigo",
  },
];

function Courses({ initialCategory = null, onBack, user }) {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [courseCatalog, setCourseCatalog] = useState(courses);
  const [courseAccess, setCourseAccess] = useState(() => user?.id ? buildFallbackCourseAccess(courses) : null);

  useEffect(() => {
    let mounted = true;
    fetch("/api/catalog/courses")
      .then((response) => response.json())
      .then((data) => {
        if (mounted && data.success && Array.isArray(data.courses)) setCourseCatalog(data.courses);
      })
      .catch((error) => console.error("Failed to load managed course catalog:", error));
    return () => { mounted = false; };
  }, []);

  useEffect(() => {
    let mounted = true;
    if (!user?.id) {
      setCourseAccess(null);
      return () => { mounted = false; };
    }

    fetchWithAuth(`/api/kai/progress/${user.id}`)
      .then((response) => response.json().then((data) => ({ response, data })))
      .then(({ response, data }) => {
        if (!mounted) return;
        if (response.ok && data.success && data.user) {
          setCourseAccess(data.user.courseAccess || data.courseAccess || buildFallbackCourseAccess(courseCatalog));
        } else {
          setCourseAccess(buildFallbackCourseAccess(courseCatalog));
        }
      })
      .catch(() => {
        if (mounted) setCourseAccess(buildFallbackCourseAccess(courseCatalog));
      });

    return () => { mounted = false; };
  }, [user?.id]);

  if (selectedCourse) {
    const selectedAccess = findCourseAccess(courseAccess, selectedCourse.id);
    const nextAccess = selectedAccess
      ? courseAccess?.courses?.find((item) => item.index === selectedAccess.index + 1)
      : null;
    const nextCourse = courseCatalog.find((item) => String(item.id) === String(nextAccess?.courseId)) || null;

    return (
      <CourseLearn
        user={user}
        course={selectedCourse}
        nextCourse={nextCourse}
        onNextCourse={(course) => setSelectedCourse(course)}
        onProgressChanged={(data) => {
          if (data?.courseAccess) setCourseAccess(data.courseAccess);
        }}
        onBack={() => setSelectedCourse(null)}
      />
    );
  }

  const activeCategory = categories.find(
    (category) => category.name === selectedCategory
  );
  const visibleCourses = selectedCategory
    ? courseCatalog.filter((course) => course.category === selectedCategory && course.active !== false)
    : [];
  const ActiveIcon = activeCategory?.icon || Layers3;
  const accessById = new Map((courseAccess?.courses || []).map((item) => [String(item.courseId), item]));
  const unlockedCount = visibleCourses.filter((course) => !accessById.get(String(course.id))?.locked).length;

  const selectCategory = (categoryName) => {
    setSelectedCategory(categoryName);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="courses-page">
      <header className="courses-navbar">
        <button
          type="button"
          className="courses-back-button"
          onClick={onBack}
        >
          <ArrowLeft size={17} />
          Back
        </button>

        <div className="courses-logo">
          <span className="code">code</span>
          <span className="lab">Lab</span>
          <small>ACADEMY</small>
        </div>

        <div className="courses-navbar-spacer" />
        <ThemeToggle />
      </header>

      <section className="courses-hero">
        <div className="courses-hero-content">
          <div className="courses-hero-icon">
            <ActiveIcon size={30} />
          </div>
          <span className="courses-eyebrow">
            {selectedCategory ? "SUBCOURSE LIBRARY" : "LEARNING LIBRARY"}
          </span>
          <h1>
            {selectedCategory ? `${selectedCategory} Courses` : "Explore All Courses"}
          </h1>
          <p>
            {selectedCategory
              ? `${courseAccess ? `${unlockedCount} of ${visibleCourses.length}` : visibleCourses.length} structured courses currently open in ${selectedCategory.toLowerCase()}. Kai confirms when the next course is ready.`
              : "Choose a category from the sidebar to explore focused courses, guided lessons, and practical projects."}
          </p>
        </div>
      </section>

      <div className="courses-layout">
        <aside className="category-sidebar" aria-label="Course categories">
          <div className="category-sidebar-heading">
            <span>Browse library</span>
            <strong>Categories</strong>
          </div>

          <nav className="category-nav">
            {categories.map((category) => {
              const Icon = category.icon;
              const count = courseCatalog.filter(
                (course) => course.category === category.name && course.active !== false
              ).length;

              return (
                <button
                  type="button"
                  key={category.name}
                  className={`category-button ${
                    selectedCategory === category.name ? "active" : ""
                  }`}
                  onClick={() => selectCategory(category.name)}
                >
                  <span className={`category-button-icon ${category.accent}`}>
                    <Icon size={18} />
                  </span>
                  <span className="category-button-copy">
                    <strong>{category.name}</strong>
                    <small>{count} courses</small>
                  </span>
                  <ArrowRight size={15} className="category-arrow" />
                </button>
              );
            })}
          </nav>
        </aside>

        <main className="courses-container">
          {!selectedCategory ? (
            <section className="category-overview">
              <div className="category-overview-heading">
                <div>
                  <span className="section-kicker">START HERE</span>
                  <h2>What do you want to learn?</h2>
                  <p>Select a category to see its available courses.</p>
                </div>
                <Layers3 size={28} />
              </div>

              <div className="category-overview-grid">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const count = courses.filter(
                    (course) => course.category === category.name
                  ).length;

                  return (
                    <button
                      type="button"
                      className="category-overview-card"
                      key={category.name}
                      onClick={() => selectCategory(category.name)}
                    >
                      <span className={`overview-icon ${category.accent}`}>
                        <Icon size={24} />
                      </span>
                      <span className="overview-card-copy">
                        <strong>{category.name}</strong>
                        <span>{category.description}</span>
                        <small>{count} courses available</small>
                      </span>
                      <ArrowRight size={18} />
                    </button>
                  );
                })}
              </div>
            </section>
          ) : (
            <section className="subcourse-page">
              <div className="subcourse-heading">
                <div>
                  <button
                    type="button"
                    className="back-to-categories"
                    onClick={() => setSelectedCategory(null)}
                  >
                    <ArrowLeft size={15} />
                    All categories
                  </button>
                  <div className="course-category-title">
                    <div className="course-category-icon">
                      <ActiveIcon size={22} />
                    </div>
                    <div>
                      <h2>{selectedCategory}</h2>
                        <p>{courseAccess ? `${unlockedCount} of ${visibleCourses.length} courses open` : `${visibleCourses.length} courses available`}</p>
                    </div>
                  </div>
                </div>
                <span className="subcourse-count">{visibleCourses.length} COURSES</span>
              </div>

              <div className="course-grid">
                {visibleCourses.map((course) => {
                  const access = accessById.get(String(course.id));
                  const locked = Boolean(user?.id && access?.locked);
                  const completed = access?.status === "completed";
                  const label = locked ? "Locked by Kai" : completed ? "Review with Kai" : access?.status === "in-progress" ? "Continue with Kai" : "Start with Kai";

                  return (
                    <article className={`course-card ${locked ? "is-locked" : ""} ${completed ? "is-completed" : ""}`} key={course.id}>
                      <div className="course-card-icon">
                        {locked ? <LockKeyhole size={28} /> : completed ? <CircleCheck size={28} /> : <ActiveIcon size={28} />}
                      </div>
                      <div className="course-card-content">
                        <span className="course-level">
                          {course.level || "Beginner"}
                        </span>
                        <h3>{course.title}</h3>
                        <p>{locked ? (access?.unlockReason || "Kai will open this course when you are ready.") : course.description}</p>
                        {access?.progress && access.progress.totalLessons > 0 && (
                          <span className="course-access-progress">{access.progress.lessonsCompleted}/{access.progress.totalLessons} lessons complete</span>
                        )}
                        <button
                          type="button"
                          className="start-course-button"
                          disabled={locked}
                          title={locked ? access?.unlockReason : label}
                          onClick={() => {
                            if (locked) return;
                            setSelectedCourse(course);
                          }}
                        >
                          {label}
                          {locked ? <LockKeyhole size={17} /> : <ArrowRight size={17} />}
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

export default Courses;
