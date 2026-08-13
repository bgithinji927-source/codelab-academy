import { useState, useEffect, useMemo } from "react";
import { ArrowLeft, Flame, Clock, Code, Trophy, CheckCircle2, Zap } from "lucide-react";
import createStore from "../data/store";
import "./DailyChallenge.css";

function DailyChallenge({ onBack }) {
  // create store once
  const store = useMemo(() => createStore(), []);
  const initial = store.getState();

  // UI state synced from store
  const [userProgress, setUserProgress] = useState(initial.userProgress);
  const [dailyChallenges, setDailyChallenges] = useState(initial.dailyChallenges);
  const [leaderboard, setLeaderboard] = useState(initial.leaderboard || []);
  const [selectedTab, setSelectedTab] = useState("challenge");
  const [timeLeft, setTimeLeft] = useState(computeTimeToMidnight());
  const [currentChallenge, setCurrentChallenge] = useState(selectCurrentChallenge(initial.dailyChallenges));

  // completed local flag for UI (keeps in sync with store)
  const [completed, setCompleted] = useState(() => {
    const ch = selectCurrentChallenge(initial.dailyChallenges);
    return !!(ch && ch.completed);
  });

  // helper: choose the next uncompleted challenge, otherwise pick by day rotation
  function selectCurrentChallenge(challenges) {
    if (!Array.isArray(challenges) || challenges.length === 0) return null;
    const next = challenges.find((c) => !c.completed);
    if (next) return next;
    // rotate by date if all completed
    const day = new Date().getDate();
    return challenges[day % challenges.length];
  }

  // compute time until next midnight as "HHh MMm"
  function computeTimeToMidnight() {
    const now = new Date();
    const next = new Date(now);
    next.setHours(24, 0, 0, 0);
    const diff = next - now;
    const mins = Math.floor(diff / 60000);
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return `${h}h ${m}m`;
  }

  // refresh UI state from store (call after commit)
  function refreshFromStore() {
    const s = store.getState();
    setUserProgress({ ...s.userProgress });
    setDailyChallenges([...s.dailyChallenges]);
    setLeaderboard([...s.leaderboard]);
    const ch = selectCurrentChallenge(s.dailyChallenges);
    setCurrentChallenge(ch);
    setCompleted(!!(ch && ch.completed));
  }

  // Timer to update countdown every minute
  useEffect(() => {
    setTimeLeft(computeTimeToMidnight());
    const id = setInterval(() => {
      setTimeLeft(computeTimeToMidnight());
    }, 60_000);
    return () => clearInterval(id);
  }, []);

  // make sure UI reflects store when component mounts
  useEffect(() => {
    refreshFromStore();
    // also listen for storage events if multiple tabs may change the store
    function onStorage(e) {
      if (e.key === "codelabStore") refreshFromStore();
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []); // run once

  const handleCompleteChallenge = () => {
    if (!currentChallenge) return;
    // Ask store to complete; store will guard double-award and update streak/xp
    const success = store.completeDailyChallenge(currentChallenge.id);
    if (success) {
      // Update UI from store (store.save() was called inside)
      refreshFromStore();
      // show completion UI
      setCompleted(true);
    } else {
      // If store returned false, it was already completed — resync UI
      refreshFromStore();
      setCompleted(true);
    }
  };

  if (!currentChallenge) {
    return (
      <div className="challenge-page">
        <header className="challenge-header">
          <button className="challenge-back-btn" onClick={onBack}>
            <ArrowLeft size={20} />
            Back to Dashboard
          </button>
        </header>
        <main className="challenge-main">
          <div className="challenge-container">
            <div className="challenge-content">
              <div className="challenge-card">
                <h2>No daily challenge available</h2>
                <p>Check back tomorrow for a new challenge 🎯</p>
              </div>
            </div>
            <aside className="challenge-sidebar">
              <div className="info-card">
                <h4>📊 Your Progress Today</h4>
                <ul>
                  <li><strong>Challenges Completed:</strong> {dailyChallenges.filter(c => c.completed).length}/{dailyChallenges.length}</li>
                  <li><strong>Total XP Earned:</strong> {userProgress.totalXP}</li>
                  <li><strong>Current Streak:</strong> {userProgress.dayStreak} days 🔥</li>
                  <li><strong>Level:</strong> {userProgress.level}</li>
                </ul>
              </div>
            </aside>
          </div>
        </main>
      </div>
    );
  }

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
                      disabled={completed}
                    >
                      <CheckCircle2 size={18} />
                      {completed ? "Completed" : "Submit Solution"}
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
                    key={entry.rank + entry.name}
                    className={`leaderboard-entry ${entry.isUser ? "user-entry" : ""}`}
                  >
                    <span className="rank">{entry.rank}</span>
                    <div className="entry-info">
                      <strong>{entry.name}</strong>
                      <p>{entry.xp} XP • {entry.badges ?? 0} Badges • {entry.completed ?? 0} Completed</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="info-card">
              <h4>📊 Your Progress Today</h4>
              <ul>
                <li><strong>Challenges Completed:</strong> {dailyChallenges.filter(c => c.completed).length}/{dailyChallenges.length}</li>
                <li><strong>Total XP Earned:</strong> {userProgress.totalXP}</li>
                <li><strong>Current Streak:</strong> {userProgress.dayStreak} days 🔥</li>
                <li><strong>Level:</strong> {userProgress.level}</li>
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
