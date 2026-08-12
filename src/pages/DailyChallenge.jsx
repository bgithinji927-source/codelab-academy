import { useState, useEffect } from "react";
import { ArrowLeft, Flame, Clock, Code, Trophy, CheckCircle2, Zap } from "lucide-react";
import createStore from "../data/store";
import "./DailyChallenge.css";

function DailyChallenge({ onBack }) {
  const store = createStore();
  const state = store.getState();
  
  const [selectedTab, setSelectedTab] = useState("challenge");
  const [completed, setCompleted] = useState(false);
  const [currentChallenge, setCurrentChallenge] = useState(state.dailyChallenges[0]);
  const [timeLeft, setTimeLeft] = useState("23h 45m");
  const [leaderboard, setLeaderboard] = useState([
    { rank: 1, name: "Alex Chen", xp: 4250, badges: 12, completed: 28 },
    { rank: 2, name: "Jordan Smith", xp: 3890, badges: 10, completed: 25 },
    { rank: 3, name: "Casey Rivera", xp: 3650, badges: 9, completed: 23 },
    { rank: 4, name: "Morgan Davis", xp: 3420, badges: 8, completed: 20 },
    { rank: 5, name: "You", xp: state.userProgress.totalXP, badges: state.userProgress.badges, completed: state.dailyChallenges.filter(c => c.completed).length, isUser: true },
  ]);

  // Timer countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const [hours, minutes] = prev.split("h ").join(" ").split("m")[0].split(" ");
        let h = parseInt(hours);
        let m = parseInt(minutes);
        
        m -= 1;
        if (m < 0) {
          m = 59;
          h -= 1;
        }
        if (h < 0) {
          h = 23;
          m = 59;
        }
        
        return `${h}h ${m}m`;
      });
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const handleCompleteChallenge = () => {
    setCompleted(!completed);
    
    if (!completed) {
      // Mark challenge as completed
      store.completeDailyChallenge(currentChallenge.id);
      
      // Update leaderboard
      const updatedLeaderboard = leaderboard.map(entry => {
        if (entry.isUser) {
          return {
            ...entry,
            xp: entry.xp + currentChallenge.xp,
            completed: entry.completed + 1,
          };
        }
        return entry;
      });
      
      setLeaderboard(updatedLeaderboard.sort((a, b) => b.xp - a.xp).map((entry, idx) => ({ ...entry, rank: idx + 1 })));
    }
  };

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
                  <h1>{currentChallenge.title}</h1>
                  <div className="challenge-meta">
                    <span className="difficulty-badge">
                      {currentChallenge.difficulty}
                    </span>
                    <span className="xp-badge">
                      <Zap size={14} />
                      +{currentChallenge.xp} XP
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
                    {currentChallenge.description}
                  </p>

                  <h3>
                    <CheckCircle2 size={18} />
                    Requirements
                  </h3>
                  <ul className="requirements-list">
                    {currentChallenge.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>

                  <div className="challenge-actions">
                    <button
                      className="submit-btn"
                      onClick={handleCompleteChallenge}
                    >
                      <CheckCircle2 size={18} />
                      {completed ? "Mark as Incomplete" : "Submit Solution"}
                    </button>
                    {completed && (
                      <div className="success-message">
                        <Trophy size={20} />
                        <div>
                          <strong>Challenge Completed! 🎉</strong>
                          <p>You earned +{currentChallenge.xp} XP</p>
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
                    <code>{currentChallenge.starter}</code>
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: LEADERBOARD & STATS */}
          <aside className="challenge-sidebar">
            <div className="leaderboard-card">
              <h3>
                <Flame size={20} />
                Today's Leaderboard
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
                      <p>{entry.xp} XP • {entry.badges} Badges • {entry.completed} Completed</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="info-card">
              <h4>📊 Your Progress Today</h4>
              <ul>
                <li><strong>Challenges Completed:</strong> {state.dailyChallenges.filter(c => c.completed).length}/{state.dailyChallenges.length}</li>
                <li><strong>Total XP Earned:</strong> {state.userProgress.totalXP}</li>
                <li><strong>Current Streak:</strong> {state.userProgress.dayStreak} days 🔥</li>
                <li><strong>Level:</strong> {state.userProgress.level}</li>
              </ul>
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
