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
  Clock,
  Smartphone,
  Gamepad2,
} from "lucide-react";

import courses from "../data/course.mjs";
import CourseLogo from "../components/CourseLogo";
import LearnerAssessmentModal from "../components/LearnerAssessmentModal";
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

function Courses({ initialCategory = null, onBack, user, onRequireAuth, onUserUpdated }) {
  const isAdmin = Boolean(user?.isAdmin || user?.role === "admin");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [pendingAssessmentCourse, setPendingAssessmentCourse] = useState(null);
  const [learningAssessments, setLearningAssessments] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [courseCatalog, setCourseCatalog] = useState(courses);
  const [courseAccess, setCourseAccess] = useState(() => user?.id ? buildFallbackCourseAccess(courses, user) : null);
  const [waitlistedCourseIds, setWaitlistedCourseIds] = useState(() => new Set(
    (user?.waitlistedCourses || []).map((item) => String(item.courseId))
  ));
  const [waitlistState, setWaitlistState] = useState(null);

  useEffect(() => {
    setWaitlistedCourseIds(new Set(
      (user?.waitlistedCourses || []).map((item) => String(item.courseId))
    ));
  }, [user?.id, user?.waitlistedCourses]);

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
          setCourseAccess(data.user.courseAccess || data.courseAccess || buildFallbackCourseAccess(courseCatalog, user));
          setLearningAssessments(data.user.learningAssessments || []);
        } else {
          setCourseAccess(buildFallbackCourseAccess(courseCatalog, user));
        }
      })
      .catch(() => {
        if (mounted) setCourseAccess(buildFallbackCourseAccess(courseCatalog, user));
      });

    return () => { mounted = false; };
  }, [user?.id]);

  const joinWaitlist = async (course) => {
    if (!user?.id) {
      onRequireAuth?.();
      return;
    }

    setWaitlistState({ courseId: course.id, status: "joining", message: "Joining waitlist..." });
    try {
      const response = await fetchWithAuth("/api/waitlist", {
        method: "POST",
        body: JSON.stringify({ courseId: course.id }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.success) {
        throw new Error(data.message || "Could not join the waitlist");
      }

      const nextIds = new Set((data.waitlistedCourses || []).map((item) => String(item.courseId)));
      nextIds.add(String(course.id));
      setWaitlistedCourseIds(nextIds);
      setWaitlistState({
        courseId: course.id,
        status: "joined",
        message: data.message || "You are on the waitlist. We will let you know when this course opens.",
      });
      if (data.waitlistedCourses) {
        onUserUpdated?.({ ...user, waitlistedCourses: data.waitlistedCourses });
      }
    } catch (error) {
      setWaitlistState({ courseId: course.id, status: "error", message: error.message });
    }
  };

  if (pendingAssessmentCourse) {
    return (
      <LearnerAssessmentModal
        course={pendingAssessmentCourse}
        onClose={() => setPendingAssessmentCourse(null)}
        onComplete={(assessment) => {
          setLearningAssessments((current) => [
            ...current.filter((item) => String(item.courseId) !== String(assessment.courseId)),
            assessment,
          ]);
          setPendingAssessmentCourse(null);
          setSelectedCourse(pendingAssessmentCourse);
        }}
      />
    );
  }

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
  const openCourseCount = visibleCourses.filter((course) => course.enrollmentStatus === "open").length;
  const unlockedCount = courseAccess
    ? visibleCourses.filter((course) => !accessById.get(String(course.id))?.locked).length
    : openCourseCount;

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
              ? `${unlockedCount} of ${visibleCourses.length} courses are open in ${selectedCategory.toLowerCase()}. Join the waitlist for courses coming soon.`
              : "Choose a category to explore open courses, guided lessons, and courses coming soon. Join the waitlist for what you want to learn next."}
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
                        <small>{count} courses in the library</small>
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
                      <p>{unlockedCount} of {visibleCourses.length} courses open · {visibleCourses.length - openCourseCount} coming soon</p>
                    </div>
                  </div>
                </div>
                <span className="subcourse-count">{visibleCourses.length} COURSES</span>
              </div>

              <div className="course-grid">
                {visibleCourses.map((course) => {
                  const access = accessById.get(String(course.id));
                  const isComingSoon = course.enrollmentStatus !== "open";
                  const canReview = Boolean(isAdmin && isComingSoon && !access?.locked);
                  const locked = Boolean(user?.id && access?.locked && !canReview);
                  const showWaitlist = isComingSoon && !canReview;
                  const isWaitlisted = waitlistedCourseIds.has(String(course.id));
                  const currentWaitlistState = waitlistState?.courseId === course.id ? waitlistState : null;
                  const completed = access?.status === "completed";
                  const label = showWaitlist ? (isAdmin ? "Review course" : "Join waitlist") : locked ? "Locked by Kai" : completed ? "Review with Kai" : access?.status === "in-progress" ? "Continue with Kai" : "Start with Kai";

                  return (
                    <article className={`course-card ${locked ? "is-locked" : ""} ${completed ? "is-completed" : ""} ${isComingSoon ? "is-coming-soon" : ""}`} key={course.id}>
                      <div className="course-card-visual">
                        <div className="course-card-image">
                          <CourseLogo course={course} className="course-card-image-logo" />
                          {(locked || completed) && (
                            <span className="course-card-status-icon" aria-hidden="true">
                              {locked ? <LockKeyhole size={16} /> : <CircleCheck size={16} />}
                            </span>
                          )}
                        </div>
                        <div className="course-card-visual-meta">
                          <span className="course-card-logo-label">{course.category}</span>
                          <span className={`course-availability-badge ${isComingSoon ? "coming-soon" : "open"}`}>
                            {isComingSoon ? "Coming soon" : "Open now"}
                          </span>
                        </div>
                      </div>
                      <div className="course-card-content">
                        <span className="course-level">
                          {course.level || "Beginner"}
                        </span>
                        <h3>{course.title}</h3>
                        <p>{isComingSoon
                          ? (isAdmin ? "Coming soon for learners. Available for administrator review." : `This course is coming soon. Join the waitlist to be notified when ${course.title} opens.`)
                          : locked
                            ? (access?.unlockReason || "Kai will open this course when you are ready.")
                            : course.description}</p>
                        {access?.progress && access.progress.totalLessons > 0 && (
                          <span className="course-access-progress">{access.progress.lessonsCompleted}/{access.progress.totalLessons} lessons complete</span>
                        )}
                      </div>
                      <div className="course-card-footer">
                        <button
                          type="button"
                          className={`start-course-button ${showWaitlist ? "waitlist-course-button" : ""}`}
                          disabled={(locked && !showWaitlist) || (showWaitlist && isWaitlisted) || currentWaitlistState?.status === "joining"}
                          title={showWaitlist ? (isWaitlisted ? "You are already on the waitlist" : "Join the waitlist") : (locked ? access?.unlockReason : label)}
                          onClick={() => {
                            if (showWaitlist) {
                              if (!isWaitlisted) joinWaitlist(course);
                              return;
                            }
                            if (locked) return;
                            if (!user?.id) {
                              onRequireAuth?.();
                              return;
                            }
                            if (!learningAssessments.some((assessment) => String(assessment.courseId) === String(course.id))) {
                              setPendingAssessmentCourse(course);
                            } else {
                              setSelectedCourse(course);
                            }
                          }}
                        >
                          {showWaitlist
                            ? (isWaitlisted ? "On waitlist" : currentWaitlistState?.status === "joining" ? "Joining..." : "Join waitlist")
                            : label}
                          {showWaitlist
                            ? (isWaitlisted || currentWaitlistState?.status === "joined" ? <CircleCheck size={17} /> : <Clock size={17} />)
                            : (locked ? <LockKeyhole size={17} /> : <ArrowRight size={17} />)}
                        </button>
                        {currentWaitlistState && currentWaitlistState.status !== "joining" && (
                          <span className={`waitlist-feedback ${currentWaitlistState.status}`} role={currentWaitlistState.status === "error" ? "alert" : "status"}>
                            {currentWaitlistState.message}
                          </span>
                        )}
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
