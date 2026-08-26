import { useState, useEffect } from "react";
import "./Dashboard.css";

import {
  Bot,
  BookOpen,
  Flame,
  LogOut,
  Map,
  Rocket,
  Trophy,
  Zap,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Hand,
  Home,
  Code2,
  Cpu,
  Cloud,
  Wrench,
  Globe,
  Database,
  Bookmark,
  ShieldCheck,
  Smartphone,
  Gamepad2,
  Boxes,
  Video as VideoIcon,
  Settings as SettingsIcon,
  LockKeyhole,
  CircleCheck,
} from "lucide-react";

import LearnWithKai from "./pages/LearnWithKai";
import CourseLearn from "./pages/CourseLearn";
import DailyChallenge from "./pages/DailyChallenge";
import LearningRoadmap from "./pages/LearningRoadmap";
import AdminDashboard from "./pages/AdminDashboard";
import createStore from "./data/store";
import courses from "./data/course";
import SettingsPage from "./pages/Settings";
import VideoTutorials from "./pages/VideoTutorials";
import fetchWithAuth from "./utils/fetchWithAuth";
import { buildFallbackCourseAccess, findCourseAccess } from "./utils/courseAccess";
import CourseLogo from "./components/CourseLogo";

function DashboardCategoryView({ category, onOpenCourse, courseCatalog, courseAccess }) {
  const visibleCourses = courseCatalog.filter((course) => course.category === category && course.active !== false);
  const accessById = new globalThis.Map((courseAccess?.courses || []).map((item) => [String(item.courseId), item]));
  const visibleAccess = visibleCourses.map((course) => accessById.get(String(course.id))).filter(Boolean);
  const unlockedCount = visibleAccess.filter((item) => !item.locked).length;

  return (
    <section className="dashboard-category-view">
      <div className="dashboard-category-heading">
        <div>
          <span className="dashboard-category-kicker">COURSE LIBRARY</span>
          <h1>{category}</h1>
          <p>{courseAccess ? `${unlockedCount} of ${visibleCourses.length} courses currently open. Kai unlocks the next course after confirming your readiness.` : `${visibleCourses.length} courses available in this learning category.`}</p>
        </div>
        <span className="dashboard-category-count">{courseAccess ? `${unlockedCount}/${visibleCourses.length} OPEN` : `${visibleCourses.length} COURSES`}</span>
      </div>
      <div className="dashboard-category-grid">
        {visibleCourses.map((course) => {
          const access = accessById.get(String(course.id));
          const locked = Boolean(access?.locked);
          const completed = access?.status === "completed";
          const label = locked ? "Locked by Kai" : completed ? "Review with Kai" : access?.status === "in-progress" ? "Continue with Kai" : "Start with Kai";

          return (
            <article
              className={`dashboard-course-card ${locked ? "is-locked" : ""} ${completed ? "is-completed" : ""} ${locked ? "" : "is-resumable"}`}
              key={course.id}
              role={locked ? undefined : "button"}
              tabIndex={locked ? -1 : 0}
              aria-label={locked ? `${course.title} is locked by Kai` : `${label}: ${course.title}`}
              aria-disabled={locked || undefined}
              onClick={(event) => {
                if (!locked && !event.target.closest("button")) onOpenCourse(course);
              }}
              onKeyDown={(event) => {
                if (!locked && !event.target.closest("button") && (event.key === "Enter" || event.key === " ")) {
                  event.preventDefault();
                  onOpenCourse(course);
                }
              }}
            >
              <div className="dashboard-course-card-icon">
                <CourseLogo course={course} />
                {(locked || completed) && (
                  <span className="dashboard-course-card-status-icon" aria-hidden="true">
                    {locked ? <LockKeyhole size={15} /> : <CircleCheck size={15} />}
                  </span>
                )}
              </div>
              <span className="dashboard-course-level">{course.level}</span>
              <h2>{course.title}</h2>
              <p>{locked ? (access?.unlockReason || "Kai will open this course when you are ready.") : course.description}</p>
              {access?.progress && access.progress.totalLessons > 0 && (
                <div className="dashboard-course-access-progress" aria-label={`${access.progress.lessonsCompleted} of ${access.progress.totalLessons} lessons complete`}>
                  <span>{access.progress.lessonsCompleted}/{access.progress.totalLessons} lessons</span>
                  <span>{Math.round((access.progress.lessonsCompleted / access.progress.totalLessons) * 100)}%</span>
                </div>
              )}
              <button type="button" disabled={locked} title={locked ? access?.unlockReason : label} onClick={() => onOpenCourse(course)}>
                {label} {locked ? <LockKeyhole size={16} /> : <ArrowRight size={16} />}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}

const sidebarItems = [
  { label: "Dashboard", Icon: Home, view: "dashboard" },
  { label: "Coding", Icon: Code2, category: "Coding" },
  { label: "Tech Engines", Icon: Cpu, category: "Tech Engines" },
  { label: "Cloud Engineering", Icon: Cloud, category: "Cloud Engineering" },
  { label: "AI Tools", Icon: Bot, category: "AI Tools" },
  { label: "Developer Tools", Icon: Wrench, category: "Developer Tools" },
  { label: "Web Technologies", Icon: Globe, category: "Web Technologies" },
  { label: "Databases", Icon: Database, category: "Databases" },
  { label: "DevOps", Icon: Boxes, category: "DevOps" },
  { label: "Cyber Security", Icon: ShieldCheck, category: "Cyber Security" },
  { label: "Mobile Development", Icon: Smartphone, category: "Mobile Development" },
  { label: "Game Development", Icon: Gamepad2, category: "Game Development" },
  { label: "System Design", Icon: Boxes, category: "System Design" },
  { label: "Settings", Icon: SettingsIcon, view: "settings" },
  { label: "Video Tutorials", Icon: VideoIcon, view: "videos" },
];

function Dashboard({ user, onLogout, onViewCourses, onUserUpdated }) {
  const [activeView, setActiveView] = useState("dashboard");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courseCatalog, setCourseCatalog] = useState(courses);
  const [courseAccess, setCourseAccess] = useState(() => buildFallbackCourseAccess(courses));

  // Initialize store and load current state into local component state
  const baseStore = createStore();
  const [state, setState] = useState(() => baseStore.getState());

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

  // When a user is present, load their real progress from the server
  // and build the UI state as: (zero baseline) + (user progress)
  useEffect(() => {
    let mounted = true;

    async function loadUserProgress() {
      const baseline = baseStore.getState();

      // Default baseline: zero out counts so UI starts from 0
      baseline.courses = baseline.courses.map((c) => ({ ...c, progress: 0, completed: 0, status: "not-started" }));
      baseline.userProgress = {
        totalXP: 0,
        dayStreak: 0,
        coursesStarted: 0,
        badges: 0,
        level: 1,
        dailyChallengesCompleted: 0,
      };

      // If no authenticated user, show zeroed baseline
      if (!user?.id) {
        setCourseAccess(buildFallbackCourseAccess(courseCatalog));
        setState(baseline);
        return;
      }

      try {
        const res = await fetchWithAuth(`/api/kai/progress/${user.id}`);
        const data = await res.json();

        if (!mounted) return;

        if (res.ok && data.success && data.user) {
          const userProgressData = data.user;
          setCourseAccess(userProgressData.courseAccess || data.courseAccess || buildFallbackCourseAccess(courseCatalog));

          // Build merged courses from the canonical catalog and apply server progress/access records.
          const catalogCourses = courseCatalog.length ? courseCatalog : baseline.courses;
          const accessById = new globalThis.Map((userProgressData.courseAccess?.courses || []).map((item) => [String(item.courseId), item]));
          const mergedCourses = catalogCourses.map((c) => {
            const cp = (userProgressData.courseProgress || []).find(
              (p) => String(p.courseId) === String(c.id) || Number(p.courseId) === c.id
            );
            const access = accessById.get(String(c.id));
            const total = cp?.totalLessons || c.lessons || 0;
            const lessonsCompleted = cp?.lessonsCompleted || 0;
            const progressPercent = total ? Math.round((lessonsCompleted / total) * 100) : (typeof cp?.progress === "number" ? cp.progress : 0);
            const status = access?.status || (progressPercent === 0 ? "not-started" : (progressPercent === 100 ? "completed" : "in-progress"));

            return {
              ...c,
              lessons: total,
              progress: progressPercent,
              completed: lessonsCompleted,
              status,
              locked: Boolean(access?.locked),
            };
          });

          // Build userProgress entirely from server values, falling back to zero
          const serverXP = typeof userProgressData.xp === "number" ? userProgressData.xp : 0;
          const serverDayStreak = typeof userProgressData.dayStreak === "number" ? userProgressData.dayStreak : 0;
          const serverBadges = typeof userProgressData.badges === "number" ? userProgressData.badges : 0;
          const serverLevel = typeof userProgressData.level === "number" ? userProgressData.level : 1;

          // If server doesn't supply coursesStarted, compute it from courseProgress
          const serverCoursesStarted = typeof userProgressData.coursesStarted === "number"
            ? userProgressData.coursesStarted
            : (userProgressData.courseProgress || []).filter((p) => (p.lessonsCompleted || 0) > 0).length;

          const newState = {
            ...baseline,
            courses: mergedCourses,
            userProgress: {
              totalXP: serverXP,
              dayStreak: serverDayStreak,
              coursesStarted: serverCoursesStarted,
              badges: serverBadges,
              level: serverLevel,
              dailyChallengesCompleted: userProgressData.dailyChallengesCompleted || 0,
            },
          };

          setState(newState);
          return;
        }

        // If server returned no data, keep zero baseline and keep only the entry course open.
        setCourseAccess(buildFallbackCourseAccess(courseCatalog));
        setState(baseline);
      } catch (err) {
        console.error("Failed to load user progress:", err);
        // On error, keep zero baseline and keep only the entry course open.
        setCourseAccess(buildFallbackCourseAccess(courseCatalog));
        setState(baseline);
      }
    }

    loadUserProgress();

    return () => {
      mounted = false;
    };
  }, [user, courseCatalog]);

  const openCourseWithKai = (course) => {
    const access = findCourseAccess(courseAccess, course?.id);
    if (access?.locked) return;
    setSelectedCourse(course);
    setActiveView("courseLearn");
    setSelectedCategory(null);
  };

  // Open the selected course in the real Kai teaching screen
  if (activeView === "courseLearn" && selectedCourse) {
    return (
      <CourseLearn
        user={user}
        course={selectedCourse}
        nextCourse={(() => {
          const selectedAccess = findCourseAccess(courseAccess, selectedCourse.id);
          const nextAccess = selectedAccess
            ? courseAccess?.courses?.find((item) => item.index === selectedAccess.index + 1)
            : null;
          return courseCatalog.find((item) => String(item.id) === String(nextAccess?.courseId)) || null;
        })()}
        onNextCourse={openCourseWithKai}
        onProgressChanged={(data) => {
          if (data?.courseAccess) setCourseAccess(data.courseAccess);
          const progressPatch = data?.userProgress || data?.user;
          if (progressPatch) {
            setState((previous) => ({
              ...previous,
              userProgress: {
                ...previous.userProgress,
                totalXP: progressPatch.totalXP ?? progressPatch.xp ?? previous.userProgress.totalXP,
                level: progressPatch.level ?? previous.userProgress.level,
                coursesStarted: progressPatch.coursesStarted ?? previous.userProgress.coursesStarted,
                badges: progressPatch.badges ?? previous.userProgress.badges,
                completedLessons: progressPatch.completedLessons ?? previous.userProgress.completedLessons,
              },
            }));
          }
        }}
        onBack={() => {
          setSelectedCourse(null);
          setActiveView("dashboard");
          setSelectedCategory(null);
        }}
      />
    );
  }

  // Show Learn with Kai page
  if (activeView === "kai") {
    return <LearnWithKai user={user} onBack={() => setActiveView("dashboard")} />;
  }

  // Show Daily Challenge page
  if (activeView === "challenge") {
    return <DailyChallenge user={user} onBack={() => setActiveView("dashboard")} />;
  }

  // Show Learning Roadmap page
  if (activeView === "roadmap") {
    return <LearningRoadmap user={user} onBack={() => setActiveView("dashboard")} />;
  }

  if (activeView === "admin" && (user?.isAdmin || user?.role === "admin")) {
    return <AdminDashboard user={user} onBack={() => setActiveView("dashboard")} />;
  }

  if (activeView === "settings") {
    return (
      <SettingsPage
        user={user}
        onBack={() => setActiveView("dashboard")}
        onUserUpdated={onUserUpdated}
      />
    );
  }

  if (activeView === "videos") {
    return <VideoTutorials user={user} onBack={() => setActiveView("dashboard")} />;
  }

  // Calculate stats from real data
  const completedChallenges = state.userProgress.dailyChallengesCompleted || 0;
  const inProgressCourses = state.courses.filter((c) => c.status === "in-progress" || (c.progress > 0 && c.progress < 100)).length;

  // Dashboard view
  return (
    <div className="dashboard-page">

      {/* NAVBAR */}
      <header className="dashboard-navbar">

        <div className="dashboard-logo">
          <span className="code">code</span>
          <span className="lab">Lab</span>
          <small>ACADEMY</small>
        </div>

        <div className="dashboard-user">

          <span className="dashboard-user-name">
            <Hand size={18} strokeWidth={2} />
            {user?.name || user?.email || "Student"}
          </span>

          {(user?.isAdmin || user?.role === "admin") && (
            <button type="button" className="admin-dashboard-launch" onClick={() => setActiveView("admin")}>
              <ShieldCheck size={17} strokeWidth={2} />
              Admin Control
            </button>
          )}

          <button
            type="button"
            onClick={onLogout}
          >
            <LogOut size={17} strokeWidth={2} />
            Log Out
          </button>

        </div>

      </header>

      {/* MAIN DASHBOARD */}
      <main className="dashboard-main">
        <aside className="dashboard-course-sidebar" aria-label="Course categories">
          <div className="dashboard-sidebar-brand" aria-label="CodeLab Academy">
            <Code2 size={26} aria-hidden="true" />
            <strong>Lab</strong>
          </div>
          <div className="dashboard-sidebar-label">LEARNING LIBRARY</div>
          <nav className="dashboard-sidebar-nav">
            {sidebarItems.map(({ label, Icon, category, view }) => (
              <button
                key={label}
                type="button"
                title={label}
                className={view === "dashboard"
                  ? (activeView === "dashboard" && !selectedCategory ? "active" : "")
                      : view === "settings"
                    ? (activeView === "settings" ? "active" : "")
                    : view === "videos"
                      ? (activeView === "videos" ? "active" : "")
                      : (selectedCategory === category ? "active" : "")}
                onClick={() => {
                  if (view === "settings") {
                    setActiveView("settings");
                    setSelectedCategory(null);
                  } else if (view === "videos") {
                    setActiveView("videos");
                    setSelectedCategory(null);
                  } else if (view === "dashboard") {
                    setActiveView("dashboard");
                    setSelectedCategory(null);
                  } else {
                    setActiveView("dashboard");
                    setSelectedCategory(category);
                  }
                }}
              >
                <Icon size={17} aria-hidden="true" />
                <span>{label}</span>
                <ChevronRight size={15} aria-hidden="true" />
              </button>
            ))}
          </nav>
          <div className="dashboard-sidebar-divider" />
          <button className="dashboard-sidebar-bookmark" type="button">
            <Bookmark size={17} aria-hidden="true" />
            <span>Bookmarks</span>
          </button>
          <button
            type="button"
            className="dashboard-sidebar-profile"
            onClick={() => {
              setActiveView("settings");
              setSelectedCategory(null);
            }}
            title="Open your profile settings"
          >
            <span className="dashboard-profile-avatar">{String(user?.name || user?.email || "Student").trim().charAt(0).toUpperCase() || "S"}</span>
            <span className="dashboard-profile-copy"><strong>{user?.name || user?.email || "Student"}</strong><small>Open profile settings</small></span>
            <ChevronDown size={16} aria-hidden="true" />
          </button>
        </aside>

        {selectedCategory ? (
          <DashboardCategoryView
            category={selectedCategory}
            courseCatalog={courseCatalog}
            onOpenCourse={openCourseWithKai}
            courseAccess={courseAccess}
          />
        ) : (
          <>
        <div className="dashboard-content-container">
        {/* WELCOME */}
        <section className="dashboard-welcome">

          <div>

            <p className="dashboard-eyebrow">
              <Rocket size={18} strokeWidth={2} />
              Welcome back
            </p>

            <h1>
              Ready to keep learning?
            </h1>

            <p>
              Continue your journey and become a better developer
              with CodeLab Academy.
            </p>

          </div>

          <div className="dashboard-kai">
            <Bot
              size={64}
              strokeWidth={1.7}
            />
          </div>

        </section>

        {/* REAL STATS */}
        <section className="dashboard-stats">

          <div className="stat-card">
            <span>
              <Flame size={30} strokeWidth={2} />
            </span>

            <div>
              <strong>{state.userProgress.dayStreak}</strong>
              <p>Day Streak</p>
            </div>
          </div>

          <div className="stat-card">
            <span>
              <Zap size={30} strokeWidth={2} />
            </span>

            <div>
              <strong>{state.userProgress.totalXP} XP</strong>
              <p>Total XP</p>
            </div>
          </div>

          <div className="stat-card">
            <span>
              <BookOpen size={30} strokeWidth={2} />
            </span>

            <div>
              <strong>{state.userProgress.coursesStarted}</strong>
              <p>Courses Started</p>
            </div>
          </div>

          <div className="stat-card">
            <span>
              <Trophy size={30} strokeWidth={2} />
            </span>

            <div>
              <strong>{state.userProgress.badges}</strong>
              <p>Badges</p>
            </div>
          </div>

        </section>

        {/* CONTINUE LEARNING */}
        <section className="continue-learning">

          <div className="dashboard-section-heading">

            <div>
              <h2>
                Continue Learning
              </h2>

              <p>
                Pick up where you left off.
              </p>
            </div>



          </div>

          {inProgressCourses > 0 ? (
            <div className="courses-list" aria-label="Courses in progress">
              {state.courses.filter((c) => c.status === "in-progress" || (c.progress > 0 && c.progress < 100)).map((course) => (
                <button
                  type="button"
                  key={course.id}
                  className="course-item"
                  onClick={() => openCourseWithKai(course)}
                  aria-label={`Continue ${course.title} at ${course.progress}% progress`}
                >
                  <div className="course-card-topline">
                    <span className="course-card-category">{course.category}</span>
                    <span className="course-progress-text">{course.progress}%</span>
                  </div>
                  <div className="course-header">
                    <CourseLogo course={course} className="continue-course-logo" />
                    <h3>{course.title}</h3>
                  </div>
                  <div
                    className="course-progress-bar"
                    role="progressbar"
                    aria-label={`${course.title} progress`}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow={course.progress}
                  >
                    <div className="course-progress-fill" style={{ width: `${course.progress}%` }}></div>
                  </div>
                  <p className="course-meta">
                    {course.completed}/{course.lessons} lessons completed
                  </p>
                </button>
              ))}
            </div>
          ) : (
            <div className="empty-course">

              <div className="empty-course-icon">
                <BookOpen
                  size={42}
                  strokeWidth={1.8}
                />
              </div>

              <h3>
                {courseAccess?.activeCourse?.courseTitle
                  ? `Continue with ${courseAccess.activeCourse.courseTitle}`
                  : `Start with ${courseAccess?.entryCourse?.courseTitle || "Python Programming"}`}
              </h3>

              <p>
                {courseAccess?.activeCourse?.courseTitle
                  ? "Kai is tracking your lessons and will open the next course when you are ready."
                  : "Kai starts every learner here, records your lesson progress, and unlocks the next course after a readiness check."}
              </p>

              <button
                type="button"
                className="start-learning"
                onClick={() => {
                  const targetId = courseAccess?.activeCourse?.courseId || courseAccess?.entryCourse?.courseId;
                  const targetCourse = courseCatalog.find((course) => String(course.id) === String(targetId));
                  if (targetCourse) openCourseWithKai(targetCourse);
                  else onViewCourses();
                }}
              >
                {courseAccess?.activeCourse?.courseId ? "Continue with Kai" : "Start with Kai"}
                <ArrowRight size={17} />
              </button>

            </div>
          )}

        </section>

        {/* DASHBOARD CARDS */}
        <section className="dashboard-grid">

          {/* KAI */}
          <div className="dashboard-card">

            <div className="card-icon">
              <Bot
                size={34}
                strokeWidth={1.8}
              />
            </div>

            <h3>
              Learn with Kai
            </h3>

            <p>
              Your AI instructor is ready to explain concepts,
              answer questions and guide you through coding.
            </p>

            <button 
              type="button"
              onClick={() => setActiveView("kai")}
            >
              Talk to Kai
              <ArrowRight size={17} />
            </button>

          </div>

          {/* CHALLENGE */}
          <div className="dashboard-card">

            <div className="card-icon">
              <Flame
                size={34}
                strokeWidth={1.8}
              />
            </div>

            <h3>
              Daily Challenge
            </h3>

            <p>
              Complete today's coding challenge and earn XP.
              {completedChallenges > 0 && (
                <span className="badge">{completedChallenges} completed</span>
              )}
            </p>

            <button 
              type="button"
              onClick={() => setActiveView("challenge")}
            >
              Start Challenge
              <ArrowRight size={17} />
            </button>

          </div>

          {/* ROADMAP */}
          <div className="dashboard-card">

            <div className="card-icon">
              <Map
                size={34}
                strokeWidth={1.8}
              />
            </div>

            <h3>
              Learning Roadmap
            </h3>

            <p>
              Follow a structured path from beginner to developer.
            </p>

            <button 
              type="button"
              onClick={() => setActiveView("roadmap")}
            >
              View Roadmap
              <ArrowRight size={17} />
            </button>

          </div>

        </section>
        </div>
          </>
        )}

      </main>

    </div>
  );
}

export default Dashboard;
