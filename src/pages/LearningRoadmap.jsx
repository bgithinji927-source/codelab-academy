import { useState } from "react";
import { ArrowLeft, Map, Lock, CheckCircle2, Zap, BookOpen, Trophy, ArrowRight } from "lucide-react";
import "./LearningRoadmap.css";

function LearningRoadmap({ onBack }) {
  const [selectedPath, setSelectedPath] = useState("frontend");
  const [expandedModule, setExpandedModule] = useState(null);

  const paths = {
    frontend: {
      title: "Frontend Developer",
      description: "Master HTML, CSS, JavaScript, and React",
      duration: "12 weeks",
      difficulty: "Beginner → Advanced",
      modules: [
        {
          id: 1,
          title: "HTML Fundamentals",
          duration: "2 weeks",
          lessons: 15,
          xp: 300,
          status: "completed",
          lessons_list: [
            "HTML Structure & Semantics",
            "Forms & Input Elements",
            "Accessibility Best Practices",
          ],
        },
        {
          id: 2,
          title: "CSS & Styling",
          duration: "2 weeks",
          lessons: 18,
          xp: 350,
          status: "in-progress",
          lessons_list: [
            "CSS Selectors & Box Model",
            "Flexbox & Grid Layouts",
            "Responsive Design",
          ],
        },
        {
          id: 3,
          title: "JavaScript Basics",
          duration: "3 weeks",
          lessons: 24,
          xp: 500,
          status: "locked",
          lessons_list: [
            "Variables & Data Types",
            "Functions & Scope",
            "DOM Manipulation",
          ],
        },
        {
          id: 4,
          title: "React Fundamentals",
          duration: "3 weeks",
          lessons: 20,
          xp: 450,
          status: "locked",
          lessons_list: [
            "Components & JSX",
            "State & Props",
            "Hooks & Side Effects",
          ],
        },
        {
          id: 5,
          title: "Advanced React",
          duration: "2 weeks",
          lessons: 16,
          xp: 400,
          status: "locked",
          lessons_list: [
            "Context API",
            "Performance Optimization",
            "Testing Components",
          ],
        },
      ],
    },
    backend: {
      title: "Backend Developer",
      description: "Learn Node.js, Express, and databases",
      duration: "14 weeks",
      difficulty: "Intermediate → Advanced",
      modules: [
        {
          id: 1,
          title: "Node.js Basics",
          duration: "2 weeks",
          lessons: 14,
          xp: 300,
          status: "locked",
          lessons_list: [
            "Node.js Runtime",
            "NPM & Packages",
            "Async Programming",
          ],
        },
        {
          id: 2,
          title: "Express Framework",
          duration: "3 weeks",
          lessons: 20,
          xp: 400,
          status: "locked",
          lessons_list: [
            "Routing & Middleware",
            "REST APIs",
            "Error Handling",
          ],
        },
        {
          id: 3,
          title: "Databases",
          duration: "3 weeks",
          lessons: 18,
          xp: 380,
          status: "locked",
          lessons_list: [
            "MongoDB & Mongoose",
            "SQL Basics",
            "Database Design",
          ],
        },
      ],
    },
    fullstack: {
      title: "Full Stack Developer",
      description: "Combine frontend and backend skills",
      duration: "20 weeks",
      difficulty: "Advanced",
      modules: [
        {
          id: 1,
          title: "Frontend Essentials",
          duration: "4 weeks",
          lessons: 32,
          xp: 600,
          status: "locked",
          lessons_list: [
            "HTML, CSS, JavaScript",
            "React Framework",
            "State Management",
          ],
        },
        {
          id: 2,
          title: "Backend Essentials",
          duration: "4 weeks",
          lessons: 28,
          xp: 550,
          status: "locked",
          lessons_list: [
            "Node.js & Express",
            "API Development",
            "Authentication",
          ],
        },
        {
          id: 3,
          title: "Full Stack Project",
          duration: "3 weeks",
          lessons: 12,
          xp: 500,
          status: "locked",
          lessons_list: [
            "Project Planning",
            "Building Together",
            "Deployment",
          ],
        },
      ],
    },
  };

  const currentPath = paths[selectedPath];

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 size={20} className="status-icon completed" />;
      case "in-progress":
        return <Zap size={20} className="status-icon in-progress" />;
      case "locked":
        return <Lock size={20} className="status-icon locked" />;
      default:
        return null;
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      case "locked":
        return "Locked";
      default:
        return "";
    }
  };

  return (
    <div className="roadmap-page">
      {/* HEADER */}
      <header className="roadmap-header">
        <button className="roadmap-back-btn" onClick={onBack}>
          <ArrowLeft size={20} />
          Back to Dashboard
        </button>
        <div className="roadmap-title">
          <Map size={32} className="roadmap-icon" />
          <div>
            <h1>Learning Roadmap</h1>
            <p>Choose your learning path and follow a structured curriculum</p>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="roadmap-main">
        {/* PATH SELECTOR */}
        <section className="path-selector">
          <h2>Select Your Path</h2>
          <div className="paths-grid">
            {Object.entries(paths).map(([key, path]) => (
              <button
                key={key}
                className={`path-card ${selectedPath === key ? "active" : ""}`}
                onClick={() => setSelectedPath(key)}
              >
                <div className="path-header">
                  <BookOpen size={24} />
                  <h3>{path.title}</h3>
                </div>
                <p>{path.description}</p>
                <div className="path-meta">
                  <span>{path.duration}</span>
                  <span>{path.difficulty}</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* ROADMAP CONTENT */}
        <section className="roadmap-content">
          <div className="roadmap-info">
            <h2>{currentPath.title}</h2>
            <p>{currentPath.description}</p>
          </div>

          {/* MODULES */}
          <div className="modules-container">
            {currentPath.modules.map((module, idx) => (
              <div key={module.id} className="module-wrapper">
                {idx > 0 && <div className="module-connector"></div>}
                <div
                  className={`module-card module-${module.status}`}
                  onClick={() =>
                    setExpandedModule(
                      expandedModule === module.id ? null : module.id
                    )
                  }
                >
                  <div className="module-header">
                    <div className="module-status">
                      {getStatusIcon(module.status)}
                    </div>
                    <div className="module-info">
                      <h3>{module.title}</h3>
                      <div className="module-meta">
                        <span>
                          <BookOpen size={14} />
                          {module.lessons} Lessons
                        </span>
                        <span>
                          <Zap size={14} />
                          +{module.xp} XP
                        </span>
                        <span>{module.duration}</span>
                      </div>
                    </div>
                    <div className="module-expand">
                      <ArrowRight
                        size={20}
                        className={expandedModule === module.id ? "expanded" : ""}
                      />
                    </div>
                  </div>

                  {/* EXPANDED CONTENT */}
                  {expandedModule === module.id && (
                    <div className="module-details">
                      <h4>Topics:</h4>
                      <ul>
                        {module.lessons_list.map((lesson, i) => (
                          <li key={i}>{lesson}</li>
                        ))}
                      </ul>
                      <button className="module-action-btn" disabled={module.status === "locked"}>
                        {module.status === "completed" && "Review Module"}
                        {module.status === "in-progress" && "Continue Learning"}
                        {module.status === "locked" && "Unlock After Previous Module"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROGRESS CARD */}
        <section className="progress-section">
          <div className="progress-card">
            <div className="progress-header">
              <Trophy size={24} />
              <h3>Your Progress</h3>
            </div>
            <div className="progress-stats">
              <div className="stat">
                <strong>45%</strong>
                <p>Path Complete</p>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "45%" }}></div>
              </div>
              <div className="stat">
                <strong>2,150 XP</strong>
                <p>Total Earned</p>
              </div>
            </div>
            <p className="progress-message">
              Keep going! Complete the JavaScript module to unlock React.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LearningRoadmap;
