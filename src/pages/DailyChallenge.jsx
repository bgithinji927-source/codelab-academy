import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, Clock, Code, Trophy, CheckCircle2, Zap, LockKeyhole, RotateCcw } from "lucide-react";
import fetchWithAuth from "../utils/fetchWithAuth";
import "./DailyChallenge.css";

const DEFAULT_MAX_ATTEMPTS = 5;

function formatTimeLeft(expiresAt, now) {
  if (!expiresAt) return "—";

  const milliseconds = Math.max(0, new Date(expiresAt).getTime() - now);
  const totalMinutes = Math.ceil(milliseconds / 60000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
}

function DailyChallenge({ user, onBack }) {
  const [challenge, setChallenge] = useState(null);
  const [assigned, setAssigned] = useState(null);
  const [progress, setProgress] = useState({
    xp: 0,
    dayStreak: 0,
    level: 1,
    dailyChallengesCompleted: 0,
  });
  const [answer, setAnswer] = useState("");
  const [selectedTab, setSelectedTab] = useState("challenge");
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [now, setNow] = useState(() => Date.now());
  const [challengeRefreshKey, setChallengeRefreshKey] = useState(0);
  const [viewToken, setViewToken] = useState("");
  const [viewLocked, setViewLocked] = useState(false);
  const [openingChallenge, setOpeningChallenge] = useState(false);
  const viewRequestRef = useRef(null);

  const maxAttempts = assigned?.maxAttempts || DEFAULT_MAX_ATTEMPTS;
  const attempts = Number(assigned?.attempts || 0);
  const attemptsRemaining = Math.max(
    0,
    assigned?.attemptsRemaining ?? maxAttempts - attempts
  );
  const isExpired = Boolean(
    assigned?.expiresAt && new Date(assigned.expiresAt).getTime() <= now
  );
  const isClosed = Boolean(assigned?.closed || isExpired);
  const isCompleted = Boolean(assigned?.completed);
  const canSubmit = Boolean(
    challenge &&
      answer.trim() &&
      !submitting &&
      !isCompleted &&
      !isClosed &&
      attemptsRemaining > 0 &&
      Boolean(viewToken)
  );

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    let mounted = true;

    async function loadChallenge() {
      setLoading(true);
      setOpeningChallenge(false);
      setChallenge(null);
      setViewToken("");
      setViewLocked(false);
      setFeedback(null);

      try {
        const [challengeResponse, progressResponse] = await Promise.all([
          fetchWithAuth("/api/challenges/today"),
          fetchWithAuth(`/api/kai/progress/${user?.id}`),
        ]);
        const challengeData = await challengeResponse.json();
        const progressData = await progressResponse.json();

        if (!mounted) return;

        if (progressResponse.ok && progressData.success && progressData.user) {
          setProgress(progressData.user);
        }

        if (!challengeResponse.ok || !challengeData.success) {
          setFeedback({
            type: "error",
            title: "No daily challenge available",
            message: challengeData.message || "Ask an administrator to publish an active challenge.",
          });
          return;
        }

        setAssigned(challengeData.assigned);

        if (challengeData.disabled) {
          setViewLocked(false);
          setFeedback({
            type: "disabled",
            title: "Daily challenges paused",
            message: challengeData.message || "Daily challenges are temporarily paused by an administrator.",
          });
          return;
        }

        if (!challengeData.oneTimeViewAvailable || challengeData.viewed) {
          setViewLocked(true);
          setFeedback({
            type: challengeData.assigned?.closed ? "closed" : "locked",
            title: challengeData.assigned?.closed ? "Challenge closed" : "Challenge already viewed",
            message: challengeData.assigned?.closed
              ? "This challenge reached the five-attempt limit and cannot be reopened."
              : "This one-time challenge was already opened. It cannot be viewed again during this 24-hour cycle.",
          });
          return;
        }

        setOpeningChallenge(true);
        if (!viewRequestRef.current) {
          viewRequestRef.current = fetchWithAuth("/api/challenges/view", {
            method: "POST",
            body: JSON.stringify({}),
          })
            .then(async (response) => ({
              ok: response.ok,
              data: await response.json(),
            }))
            .finally(() => {
              viewRequestRef.current = null;
            });
        }

        const viewResult = await viewRequestRef.current;
        const viewData = viewResult.data;

        if (!mounted) return;

        if (!viewResult.ok || !viewData.success) {
          setViewLocked(Boolean(viewData.alreadyViewed || viewData.locked));
          setFeedback({
            type: viewData.alreadyViewed || viewData.locked ? "locked" : "error",
            title: viewData.alreadyViewed || viewData.locked ? "Challenge already viewed" : "Unable to open challenge",
            message: viewData.message || "Please try again in a moment.",
          });
          return;
        }

        setChallenge(viewData.challenge);
        setAssigned(viewData.assigned);
        setViewToken(viewData.viewToken || "");
        setViewLocked(false);
      } catch (error) {
        console.error("Unable to load daily challenge:", error);
        if (mounted) {
          setFeedback({
            type: "error",
            title: "Unable to load today's challenge",
            message: "Please try again in a moment.",
          });
        }
      } finally {
        if (mounted) {
          setOpeningChallenge(false);
          setLoading(false);
        }
      }
    }

    loadChallenge();
    return () => {
      mounted = false;
    };
  }, [user?.id, challengeRefreshKey]);

  // Refresh automatically at the end of the assignment window, even if the
  // learner completed or closed the previous challenge early.
  useEffect(() => {
    if (!assigned?.expiresAt) return;

    const delay = Math.max(0, new Date(assigned.expiresAt).getTime() - Date.now());
    const timer = window.setTimeout(() => setChallengeRefreshKey((key) => key + 1), delay + 250);
    return () => window.clearTimeout(timer);
  }, [assigned?.expiresAt]);

  useEffect(() => {
    if (!isExpired || !assigned || assigned.closed) return;

    if (!assigned.completed) {
      setAssigned((current) => (current ? { ...current, closed: true } : current));
      setFeedback({
        type: "closed",
        title: "24-hour window ended",
        message: "This challenge has expired. Kai is loading your next challenge.",
      });
    }

    setChallengeRefreshKey((key) => key + 1);
  }, [assigned, isExpired]);

  const challengeStateLabel = useMemo(() => {
    if (isCompleted) return "Completed";
    if (isClosed) return "Closed";
    return "Open for submissions";
  }, [isClosed, isCompleted]);

  const handleSubmit = async () => {
    if (!canSubmit) return;

    setSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetchWithAuth("/api/challenges/submit", {
        method: "POST",
        body: JSON.stringify({
          challengeId: challenge.id,
          answer: answer.trim(),
          viewToken,
        }),
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Submission failed");
      }

      const nextAttempts = data.attempts ?? attempts;
      const nextRemaining = data.attemptsRemaining ?? Math.max(0, maxAttempts - nextAttempts);

      setAssigned((current) => ({
        ...current,
        attempts: nextAttempts,
        attemptsRemaining: nextRemaining,
        maxAttempts,
        completed: Boolean(data.correct || data.alreadyCompleted || current?.completed),
        closed: Boolean(data.closed || current?.closed),
      }));

      if (data.correct) {
        const awardedXP = Number(data.awardedXP || 0);
        setFeedback({
          type: "success",
          title: "Correct answer",
          message: "Excellent work. Kai marked your answer as correct.",
          xp: awardedXP,
          attempts: nextAttempts,
        });
        setProgress((current) => ({
          ...current,
          xp: data.xp ?? current.xp + awardedXP,
          dailyChallengesCompleted:
            data.dailyChallengesCompleted ?? (current.dailyChallengesCompleted || 0) + 1,
        }));
      } else if (data.closed) {
        setFeedback({
          type: "closed",
          title: "Challenge closed",
          message: data.message || "You used all five attempts. Try the next challenge in 24 hours.",
          attempts: nextAttempts,
        });
      } else {
        setFeedback({
          type: "incorrect",
          title: "Not correct yet",
          message: data.message || "Review the requirements and try again.",
          attempts: nextAttempts,
          attemptsRemaining: nextRemaining,
        });
      }
    } catch (error) {
      setFeedback({
        type: "error",
        title: "Submission failed",
        message: error.message || "Please try submitting again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="challenge-page">
      <header className="challenge-header">
        <button className="challenge-back-btn" onClick={onBack} type="button">
          <ArrowLeft size={20} />
          Back to Dashboard
        </button>
      </header>

      <main className="challenge-main">
        <div className="challenge-container">
          <div className="challenge-content">
            {loading ? (
              <div className="challenge-card challenge-loading-card">
                <h2>{openingChallenge ? "Opening your one-time challenge..." : "Loading today’s challenge..."}</h2>
                <p>{openingChallenge ? "This challenge will be available in the current browser session only." : "Checking your 24-hour challenge window."}</p>
              </div>
            ) : !challenge ? (
              <div className={`challenge-card challenge-empty-card ${viewLocked ? "challenge-locked-card" : ""}`}>
                {viewLocked ? <LockKeyhole size={34} /> : <Clock size={34} />}
                <h2>{feedback?.title || "No daily challenge available"}</h2>
                <p>{feedback?.message || "Ask an administrator to publish an active challenge."}</p>
                {viewLocked && assigned?.expiresAt && <span className="challenge-lock-countdown">Next challenge window: {formatTimeLeft(assigned.expiresAt, now)}</span>}
              </div>
            ) : (
              <div className="challenge-card">
                <div className="challenge-header-info">
                  <div>
                    <span className="challenge-kicker">KAI DAILY CHALLENGE</span>
                    <h1>{challenge.title}</h1>
                    <div className="challenge-meta">
                      <span className="difficulty-badge">{challenge.difficulty}</span>
                      <span className="xp-badge"><Zap size={14} /> +{challenge.xp} XP</span>
                      <span className={`challenge-state-badge ${challengeStateLabel.toLowerCase().replaceAll(" ", "-")}`}>
                        {challengeStateLabel}
                      </span>
                    </div>
                  </div>
                  <div className="challenge-timer">
                    <Clock size={20} />
                    <span>{formatTimeLeft(assigned?.expiresAt, now)}</span>
                  </div>
                </div>

                <div className="challenge-attempts" aria-live="polite">
                  <span>Attempts: <strong>{attempts}/{maxAttempts}</strong></span>
                  <span>{attemptsRemaining} remaining</span>
                </div>

                <div className="challenge-tabs">
                  <button type="button" className={`tab ${selectedTab === "challenge" ? "active" : ""}`} onClick={() => setSelectedTab("challenge")}>
                    Challenge
                  </button>
                  <button type="button" className={`tab ${selectedTab === "code" ? "active" : ""}`} onClick={() => setSelectedTab("code")}>
                    Code Editor
                  </button>
                </div>

                {selectedTab === "challenge" ? (
                  <div className="challenge-details">
                    <p className="challenge-description">{challenge.prompt || challenge.description}</p>

                    {challenge.choices?.length > 0 && (
                      <div className="challenge-choices">
                        {challenge.choices.map((choice) => (
                          <button
                            type="button"
                            key={choice.id}
                            className={`choice-button ${answer === choice.id ? "selected" : ""}`}
                            onClick={() => setAnswer(choice.id)}
                            disabled={isClosed || isCompleted || submitting}
                          >
                            <span>{choice.label}</span>
                            {answer === choice.id && <CheckCircle2 size={17} />}
                          </button>
                        ))}
                      </div>
                    )}

                    <h3><CheckCircle2 size={18} /> Requirements</h3>
                    <ul className="requirements-list">
                      {(challenge.requirements || [
                        "Read the prompt carefully",
                        "Submit an answer that demonstrates your understanding",
                      ]).map((item, index) => <li key={index}>{item}</li>)}
                    </ul>

                    <input
                      className="challenge-answer"
                      value={answer}
                      onChange={(event) => setAnswer(event.target.value)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") handleSubmit();
                      }}
                      placeholder={isClosed ? "This challenge is closed" : "Enter your answer..."}
                      disabled={isClosed || isCompleted || submitting}
                    />

                    <div className="challenge-actions">
                      <button className="submit-btn" onClick={handleSubmit} disabled={!canSubmit} type="button">
                        {isCompleted ? <CheckCircle2 size={18} /> : isClosed ? <LockKeyhole size={18} /> : <CheckCircle2 size={18} />}
                        {submitting ? "Checking..." : isCompleted ? "Completed" : isClosed ? "Challenge Closed" : "Submit Answer"}
                      </button>

                      {feedback && (
                        <div className={`challenge-feedback-panel ${feedback.type}`} role="status">
                          {feedback.type === "success" ? <Trophy size={22} /> : feedback.type === "closed" ? <LockKeyhole size={22} /> : <RotateCcw size={22} />}
                          <div>
                            <strong>{feedback.title}</strong>
                            <p>{feedback.message}</p>
                            {feedback.type === "success" && feedback.xp > 0 && <span className="feedback-xp">+{feedback.xp} XP awarded</span>}
                            {feedback.type === "incorrect" && <span className="feedback-attempts">{feedback.attemptsRemaining} attempts remaining</span>}
                            {feedback.type === "closed" && <span className="feedback-attempts">{feedback.attempts ?? maxAttempts}/{maxAttempts} attempts used</span>}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="code-editor-placeholder">
                    <Code size={40} />
                    <h3>Code Editor</h3>
                    <p>Use this starter context while solving the challenge.</p>
                    <pre className="code-block"><code>{challenge.starter || "// Write your solution here"}</code></pre>
                  </div>
                )}
              </div>
            )}
          </div>

          <aside className="challenge-sidebar">
            <div className="info-card">
              <h4>📊 Your Progress Today</h4>
              <ul>
                <li><strong>Challenges Completed:</strong> {progress.dailyChallengesCompleted || 0}</li>
                <li><strong>Total XP Earned:</strong> {progress.xp || 0}</li>
                <li><strong>Current Streak:</strong> {progress.dayStreak || 0} days</li>
                <li><strong>Level:</strong> {progress.level || 1}</li>
              </ul>
            </div>
            <div className="info-card">
              <h4>How the daily cycle works</h4>
              <ul>
                <li>One challenge stays open for 24 hours.</li>
                <li>Submit up to five answers.</li>
                <li>Correct answers earn the displayed XP.</li>
                <li>Five incorrect attempts close the challenge.</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default DailyChallenge;
