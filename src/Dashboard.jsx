import { useState } from "react";
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
} from "lucide-react";

import LearnWithKai from "./pages/LearnWithKai";
import DailyChallenge from "./pages/DailyChallenge";
import LearningRoadmap from "./pages/LearningRoadmap";
import createStore from "./data/store";

function Dashboard({ user, onLogout, onViewCourses }) {
  const [activeView, setActiveView] = useState("dashboard");
  
  // Initialize store and get current state
  const store = createStore();
  const state = store.getState();

  // Show Learn with Kai page
  if (activeView === "kai") {
    return <LearnWithKai onBack={() => setActiveView("dashboard")} />;
  }

  // Show Daily Challenge page
  if (activeView === "challenge") {
    return <DailyChallenge onBack={() => setActiveView("dashboard")} />;
  }

  // Show Learning Roadmap page
  if (activeView === "roadmap") {
    return <LearningRoadmap onBack={() => setActiveView("dashboard")} />;
  }

  // Calculate stats from real data
  const completedChallenges = state.dailyChallenges.filter(c => c.completed).length;
  const inProgressCourses = state.courses.filter(c => c.status === "in-progress").length;

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
              {state.courses.filter(c => c.status === "in-progress").map(course => (
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
