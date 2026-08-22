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
  Hand,
  Code2,
  Cpu,
  Wrench,
  Globe,
  Database,
} from "lucide-react";

import LearnWithKai from "./pages/LearnWithKai";
import DailyChallenge from "./pages/DailyChallenge";
import LearningRoadmap from "./pages/LearningRoadmap";
import createStore from "./data/store";

const courseCategories = [
  ["Coding", Code2],
  ["Tech Engines", Cpu],
  ["AI Tools", Bot],
  ["Developer Tools", Wrench],
  ["Web Technologies", Globe],
  ["Databases", Database],
];

function Dashboard({ user, onLogout, onViewCourses }) {
  const [activeView, setActiveView] = useState("dashboard");

  // Initialize store and load current state into local component state
  const baseStore = createStore();
  const [state, setState] = useState(() => baseStore.getState());

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
        setState(baseline);
        return;
      }

      try {
        const res = await fetch(`/api/kai/progress/${user.id}`);
        const data = await res.json();

        if (!mounted) return;

        if (res.ok && data.success && data.user) {
          const userProgressData = data.user;

          // Build merged courses: start from baseline (all zeros), then apply per-course records
          const mergedCourses = baseline.courses.map((c) => {
            const cp = (userProgressData.courseProgress || []).find(
              (p) => String(p.courseId) === String(c.id) || Number(p.courseId) === c.id
            );

            if (cp) {
              const total = cp.totalLessons || c.lessons || 0;
              const lessonsCompleted = cp.lessonsCompleted || 0;
              const progressPercent = total ? Math.round((lessonsCompleted / total) * 100) : (typeof cp.progress === "number" ? cp.progress : 0);

              const status = progressPercent === 0 ? "not-started" : (progressPercent === 100 ? "completed" : "in-progress");

              return {
                ...c,
                progress: progressPercent,
                completed: lessonsCompleted,
                status,
              };
            }

            // No user data for this course: keep zero baseline
            return { ...c };
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

        // If server returned no data, keep zero baseline
        setState(baseline);
      } catch (err) {
        console.error("Failed to load user progress:", err);
        // On error, keep zero baseline
        setState(baseline);
      }
    }

    loadUserProgress();

    return () => {
      mounted = false;
    };
  }, [user]);

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
          <div className="dashboard-course-sidebar-heading">
            <span>LEARNING LIBRARY</span>
            <strong>Course categories</strong>
          </div>
          <nav>
            {courseCategories.map(([category, Icon]) => (
              <button key={category} type="button" onClick={() => onViewCourses(category)}>
                <Icon size={17} />
                <span>{category}</span>
                <ArrowRight size={14} />
              </button>
            ))}
          </nav>
        </aside>

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

            {/* VIEW ALL COURSES */}
            <button
              type="button"
              onClick={onViewCourses}
            >
              View All Courses
              <ArrowRight size={17} />
            </button>

          </div>

          {inProgressCourses > 0 ? (
            <div className="courses-list">
              {state.courses.filter((c) => c.status === "in-progress" || (c.progress > 0 && c.progress < 100)).map((course) => (
                <div key={course.id} className="course-item">
                  <div className="course-header">
                    <h3>{course.title}</h3>
                    <span className="course-progress-text">{course.progress}%</span>
                  </div>
                  <div className="course-progress-bar">
                    <div className="course-progress-fill" style={{ width: `${course.progress}%` }}></div>
                  </div>
                  <p className="course-meta">
                    {course.completed}/{course.lessons} lessons • {course.category}
                  </p>
                </div>
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
                Your learning journey starts here
              </h3>

              <p>
                Choose a course and start building your skills.
              </p>

              {/* EXPLORE COURSES */}
              <button
                type="button"
                className="start-learning"
                onClick={onViewCourses}
              >
                Explore Courses
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

      </main>

    </div>
  );
}

export default Dashboard;
