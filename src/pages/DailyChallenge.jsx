import { useEffect, useState } from "react";
import { ArrowLeft, Clock, Code, Trophy, CheckCircle2, Zap } from "lucide-react";
import fetchWithAuth from "../utils/fetchWithAuth";
import "./DailyChallenge.css";

function DailyChallenge({ user, onBack }) {
  const [challenge, setChallenge] = useState(null);
  const [assigned, setAssigned] = useState(null);
  const [progress, setProgress] = useState({ xp: 0, dayStreak: 0, level: 1, dailyChallengesCompleted: 0 });
  const [answer, setAnswer] = useState("");
  const [selectedTab, setSelectedTab] = useState("challenge");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    let mounted = true;
    Promise.all([
      fetchWithAuth("/api/challenges/today").then((response) => response.json()),
      fetchWithAuth(`/api/kai/progress/${user?.id}`).then((response) => response.json()),
    ]).then(([challengeData, progressData]) => {
      if (!mounted) return;
      if (challengeData.success) {
        setChallenge(challengeData.challenge);
        setAssigned(challengeData.assigned);
        if (challengeData.assigned?.completed) setStatus("completed");
      }
      if (progressData.success && progressData.user) setProgress(progressData.user);
    }).catch(() => setStatus("Unable to load today's challenge."))
      .finally(() => mounted && setLoading(false));
    return () => { mounted = false; };
  }, [user?.id]);

  const handleSubmit = async () => {
    if (!challenge || !answer.trim() || submitting || status === "completed") return;
    setSubmitting(true);
    setStatus("");
    try {
      const response = await fetchWithAuth("/api/challenges/submit", { method: "POST", body: JSON.stringify({ challengeId: challenge.id, answer }) });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.message || "Submission failed");
      if (data.correct || data.alreadyCompleted) {
        setStatus("completed");
        setAssigned((current) => ({ ...current, completed: true }));
        setProgress((current) => ({ ...current, xp: current.xp + (data.awardedXP || 0), dailyChallengesCompleted: (current.dailyChallengesCompleted || 0) + (data.alreadyCompleted ? 0 : 1) }));
      } else {
        setStatus(`Not quite yet. Attempt ${data.attempts || 1}; review the requirements and try again.`);
      }
    } catch (err) {
      setStatus(err.message || "Submission failed");
    } finally {
      setSubmitting(false);
    }
  };

  const timeLeft = () => {
    const next = new Date(); next.setHours(24, 0, 0, 0);
    const minutes = Math.max(0, Math.floor((next - new Date()) / 60000));
    return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
  };

  return <div className="challenge-page">
    <header className="challenge-header"><button className="challenge-back-btn" onClick={onBack}><ArrowLeft size={20} /> Back to Dashboard</button></header>
    <main className="challenge-main"><div className="challenge-container"><div className="challenge-content">
      {loading ? <div className="challenge-card"><h2>Loading today’s challenge...</h2></div> : !challenge ? <div className="challenge-card"><h2>No daily challenge available</h2><p>Ask an administrator to publish an active challenge.</p></div> : <div className="challenge-card">
        <div className="challenge-header-info"><div><h1>{challenge.title}</h1><div className="challenge-meta"><span className="difficulty-badge">{challenge.difficulty}</span><span className="xp-badge"><Zap size={14} /> +{challenge.xp} XP</span></div></div><div className="challenge-timer"><Clock size={20} /><span>{timeLeft()}</span></div></div>
        <div className="challenge-tabs"><button className={`tab ${selectedTab === "challenge" ? "active" : ""}`} onClick={() => setSelectedTab("challenge")}>Challenge</button><button className={`tab ${selectedTab === "code" ? "active" : ""}`} onClick={() => setSelectedTab("code")}>Code Editor</button></div>
        {selectedTab === "challenge" ? <div className="challenge-details"><p className="challenge-description">{challenge.prompt || challenge.description}</p>{challenge.choices?.length > 0 && <div className="challenge-choices">{challenge.choices.map((choice) => <button key={choice.id} className="choice-button" onClick={() => setAnswer(choice.id)}>{choice.label}</button>)}</div>}<h3><CheckCircle2 size={18} /> Requirements</h3><ul className="requirements-list">{(challenge.requirements || ["Read the prompt carefully", "Submit an answer that demonstrates your understanding"]).map((item, index) => <li key={index}>{item}</li>)}</ul><input className="challenge-answer" value={answer} onChange={(event) => setAnswer(event.target.value)} placeholder="Enter your answer..." disabled={status === "completed"} /><div className="challenge-actions"><button className="submit-btn" onClick={handleSubmit} disabled={!answer.trim() || submitting || status === "completed"}><CheckCircle2 size={18} />{submitting ? "Checking..." : status === "completed" ? "Completed" : "Submit Solution"}</button>{status && <div className={`success-message ${status === "completed" ? "" : "challenge-feedback"}`}><Trophy size={20} /><div><strong>{status === "completed" ? "Challenge Completed!" : status}</strong>{status === "completed" && <p>You earned +{challenge.xp} XP</p>}</div></div>}</div></div> : <div className="code-editor-placeholder"><Code size={40} /><h3>Code Editor</h3><p>Use this starter context while solving the challenge.</p><pre className="code-block"><code>{challenge.starter || "// Write your solution here"}</code></pre></div>}
      </div>}
    </div><aside className="challenge-sidebar"><div className="info-card"><h4>📊 Your Progress Today</h4><ul><li><strong>Challenges Completed:</strong> {progress.dailyChallengesCompleted || 0}</li><li><strong>Total XP Earned:</strong> {progress.xp || 0}</li><li><strong>Current Streak:</strong> {progress.dayStreak || 0} days</li><li><strong>Level:</strong> {progress.level || 1}</li></ul></div><div className="info-card"><h4>💡 Tips</h4><ul><li>Break the problem into steps</li><li>Test each function separately</li><li>Check edge cases</li></ul></div></aside></div></main>
  </div>;
}

export default DailyChallenge;
