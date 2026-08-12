import { useState } from "react";
import { ArrowLeft, Map, Lock, CheckCircle2, Zap, BookOpen, Trophy, ArrowRight } from "lucide-react";
import createStore from "../data/store";
import "./LearningRoadmap.css";

function LearningRoadmap({ onBack }) {
  const store = createStore();
  const state = store.getState();
  
  const [selectedPath, setSelectedPath] = useState("frontend");
  const [expandedModule, setExpandedModule] = useState(null);
  const [paths, setPaths] = useState(state.learningPaths);

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

  const handleModuleClick = (moduleId) => {
    const module = currentPath.modules.find(m => m.id === moduleId);
    if (module && module.status !== "locked") {
      setExpandedModule(expandedModule === moduleId ? null : moduleId);
    }
  };

  const handleCompleteLesson = (moduleId) => {
    const updatedPaths = { ...paths };
    const module = updatedPaths[selectedPath].modules.find(m => m.id === moduleId);
    
    if (module && module.progress < 100) {
      // Increment progress
      const progressStep = Math.round(100 / module.lessons);
      module.progress = Math.min(module.progress + progressStep, 100);
      
      if (module.progress === 100) {
        module.status = "completed";
      }
      
      setPaths(updatedPaths);
      store.updateModuleProgress(selectedPath, moduleId, module.progress);
    }
  };

  const totalProgress = currentPath.modules.length > 0 
    ? Math.round(currentPath.modules.reduce((sum, m) => sum + m.progress, 0) / currentPath.modules.length)
    : 0;

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
            <p>Follow your structured learning path to mastery</p>
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
                <div className="path-progress">
                  <div className="progress-bar-small">
                    <div className="progress-fill-small" style={{ width: `${path.progress}%` }}></div>
                  </div>
                  <span className="progress-text">{path.progress}% Complete</span>
                </div>
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
                  onClick={() => handleModuleClick(module.id)}
                >
                  <div className="module-header">
                    <div className="module-status">
                      {getStatusIcon(module.status)}
                    </div>
                    <div className="module-info">
                      <h3>{module.title}</h3>
                      <div className="module-progress-bar">
                        <div className="module-progress-fill" style={{ width: `${module.progress}%` }}></div>
                      </div>
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
                        <span className="progress-percent">{module.progress}%</span>
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
                      <button 
                        className="module-action-btn" 
                        disabled={module.status === "locked"}
                        onClick={() => handleCompleteLesson(module.id)}
                      >
                        {module.status === "completed" && "✓ Module Completed"}
                        {module.status === "in-progress" && `Continue Learning (${module.progress}%)`}
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
              <h3>{currentPath.title} Progress</h3>
            </div>
            <div className="progress-stats">
              <div className="stat">
                <strong>{totalProgress}%</strong>
                <p>Path Complete</p>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${totalProgress}%` }}></div>
              </div>
              <div className="stat">
                <strong>{state.userProgress.totalXP} XP</strong>
                <p>Total Earned</p>
              </div>
            </div>
            <p className="progress-message">
              {totalProgress === 100 
                ? "🎉 Congratulations! You've completed this path!" 
                : `Keep going! You're ${totalProgress}% through ${currentPath.title}. Complete the next module to unlock the one after!`
              }
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LearningRoadmap;
