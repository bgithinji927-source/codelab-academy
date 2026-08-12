import { useState } from "react";
import { ArrowLeft, Flame, Clock, Code, Trophy, CheckCircle2, Zap } from "lucide-react";
import "./DailyChallenge.css";

function DailyChallenge({ onBack }) {
  const [selectedTab, setSelectedTab] = useState("challenge");
  const [completed, setCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState("23h 45m");

  const challenge = {
    title: "Build a Todo App",
    difficulty: "Intermediate",
    xp: 150,
    description:
      "Create a simple todo application with add, delete, and mark complete functionality using HTML, CSS, and JavaScript.",
    requirements: [
      "Create an input field to add new todos",
      "Display all todos in a list",
      "Add a delete button for each todo",
      "Add a checkbox to mark todos as complete",
      "Persist data using localStorage",
    ],
    starter: `// Create your todo app here
const todoApp = {
  todos: [],
  addTodo(task) {
    // Your code here
  },
  removeTodo(id) {
    // Your code here
  },
  toggleComplete(id) {
    // Your code here
  }
};`,
  };

  const leaderboard = [
    { rank: 1, name: "Alex Chen", xp: 4250, badges: 12 },
    { rank: 2, name: "Jordan Smith", xp: 3890, badges: 10 },
    { rank: 3, name: "Casey Rivera", xp: 3650, badges: 9 },
    { rank: 4, name: "Morgan Davis", xp: 3420, badges: 8 },
    { rank: 5, name: "You", xp: 1850, badges: 5, isUser: true },
  ];

  return (
    <div className="challenge-page">
      {/* HEADER */}
      <header className="challenge-header">
        <button className="challenge-back-btn" onClick={onBack}>
          <ArrowLeft size={20} />
          Back to Dashboard
        </button>
      </header>

      {/* MAIN CONTENT */}
      <main className="challenge-main">
        <div className="challenge-container">
          {/* LEFT: CHALLENGE DETAILS */}
          <div className="challenge-content">
            {/* CHALLENGE CARD */}
            <div className="challenge-card">
              <div className="challenge-header-info">
                <div>
                  <h1>{challenge.title}</h1>
                  <div className="challenge-meta">
                    <span className="difficulty-badge">
                      {challenge.difficulty}
                    </span>
                    <span className="xp-badge">
                      <Zap size={14} />
                      +{challenge.xp} XP
                    </span>
                  </div>
                </div>
                <div className="challenge-timer">
                  <Clock size={20} />
                  <span>{timeLeft}</span>
                </div>
              </div>

              {/* TABS */}
              <div className="challenge-tabs">
                <button
                  className={`tab ${selectedTab === "challenge" ? "active" : ""}`}
                  onClick={() => setSelectedTab("challenge")}
                >
                  Challenge
                </button>
                <button
                  className={`tab ${selectedTab === "code" ? "active" : ""}`}
                  onClick={() => setSelectedTab("code")}
                >
                  Code Editor
                </button>
              </div>

              {/* TAB CONTENT */}
              {selectedTab === "challenge" && (
                <div className="challenge-details">
                  <p className="challenge-description">
                    {challenge.description}
                  </p>

                  <h3>
                    <CheckCircle2 size={18} />
                    Requirements
                  </h3>
                  <ul className="requirements-list">
                    {challenge.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>

                  <div className="challenge-actions">
                    <button
                      className="submit-btn"
                      onClick={() => setCompleted(!completed)}
                    >
                      <CheckCircle2 size={18} />
                      {completed ? "Mark as Incomplete" : "Submit Solution"}
                    </button>
                    {completed && (
                      <div className="success-message">
                        <Trophy size={20} />
                        <div>
                          <strong>Challenge Completed!</strong>
                          <p>You earned +{challenge.xp} XP 🎉</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {selectedTab === "code" && (
                <div className="code-editor-placeholder">
                  <Code size={40} />
                  <h3>Code Editor</h3>
                  <p>Write your solution here</p>
                  <pre className="code-block">
                    <code>{challenge.starter}</code>
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: LEADERBOARD */}
          <aside className="challenge-sidebar">
            <div className="leaderboard-card">
              <h3>
                <Flame size={20} />
                Leaderboard
              </h3>
              <div className="leaderboard-list">
                {leaderboard.map((entry) => (
                  <div
                    key={entry.rank}
                    className={`leaderboard-entry ${
                      entry.isUser ? "user-entry" : ""
                    }`}
                  >
                    <span className="rank">{entry.rank}</span>
                    <div className="entry-info">
                      <strong>{entry.name}</strong>
                      <p>{entry.xp} XP • {entry.badges} Badges</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="info-card">
              <h4>💡 Tips</h4>
              <ul>
                <li>Break the problem into steps</li>
                <li>Test each function separately</li>
                <li>Use console.log to debug</li>
                <li>Check edge cases</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default DailyChallenge;
