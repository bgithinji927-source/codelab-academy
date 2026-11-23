import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  Bot,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  Code2,
  MessageCircle,
  Play,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import "./LearnWithKai.css";

const FLOW_STEPS = [
  {
    icon: Target,
    eyebrow: "01 · UNDERSTAND",
    title: "Kai starts with your goal",
    text: "Tell Kai what you are learning and where you want to go. Kai uses your course, lesson, and progress to shape the next step.",
    typing: "I know where you are in your learning path. Let’s make the next concept clear and useful.",
    accent: "violet",
  },
  {
    icon: BrainCircuit,
    eyebrow: "02 · PERSONALIZE",
    title: "Kai builds your lesson path",
    text: "Kai adjusts the explanation to your level, remembers what you have completed, and keeps the lesson focused instead of overwhelming you.",
    typing: "I’m adapting this lesson to your pace and connecting it to what you already know.",
    accent: "blue",
  },
  {
    icon: BookOpen,
    eyebrow: "03 · EXPLAIN",
    title: "Kai teaches one idea at a time",
    text: "Concepts are introduced in clear steps with plain-language explanations, useful context, and practical examples.",
    typing: "Here is the core idea, explained simply first. Then we’ll turn it into code.",
    accent: "green",
  },
  {
    icon: Code2,
    eyebrow: "04 · PRACTICE",
    title: "Kai turns knowledge into action",
    text: "You see an example, try a focused challenge, and work through the same idea in a realistic programming task.",
    typing: "Now apply the idea in a small challenge. I’ll keep the task focused and guide you if you get stuck.",
    accent: "orange",
  },
  {
    icon: CheckCircle2,
    eyebrow: "05 · GUIDE",
    title: "Kai gives useful feedback",
    text: "Kai reviews your attempt, explains what worked, identifies what to improve, and helps you know when you are ready for the next lesson.",
    typing: "Good progress. I’ll explain the improvement, show the correction, and help you take the next step.",
    accent: "pink",
  },
];

function TypingMessage({ text, isActive }) {
  const [visibleText, setVisibleText] = useState(isActive ? "" : text);

  useEffect(() => {
    if (!isActive) {
      setVisibleText(text);
      return undefined;
    }

    setVisibleText("");
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setVisibleText(text.slice(0, index));
      if (index >= text.length) window.clearInterval(timer);
    }, 22);
    return () => window.clearInterval(timer);
  }, [isActive, text]);

  return <span>{visibleText}{isActive && visibleText.length < text.length && <span className="kai-typing-cursor" aria-hidden="true" />}</span>;
}

function LearnWithKai({ user, onBack }) {
  const [activeStep, setActiveStep] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const activeFlow = useMemo(() => FLOW_STEPS[activeStep], [activeStep]);
  const ActiveIcon = activeFlow.icon;

  useEffect(() => {
    if (!hasStarted) return undefined;
    const timer = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % FLOW_STEPS.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [hasStarted]);

  const startTour = () => {
    setHasStarted(true);
    setActiveStep(0);
  };

  return (
    <div className="kai-page kai-explainer-page">
      <header className="kai-header kai-explainer-header">
        <div className="kai-topbar">
          <button type="button" className="kai-back-btn" onClick={onBack}><ArrowLeft size={20} /> Back to Dashboard</button>
          <span className="kai-live-pill"><span className="kai-live-dot" /> Kai learning flow</span>
        </div>
        <div className="kai-header-title">
          <span className="kai-brand-mark"><Bot size={25} /></span>
          <div><h1>Learn with Kai</h1><p>Your personal AI instructor for learning by doing</p></div>
        </div>
      </header>

      <main className="kai-explainer-main">
        <section className="kai-explainer-hero">
          <div className="kai-hero-copy">
            <span className="kai-eyebrow"><Sparkles size={15} /> YOUR AI LEARNING PARTNER</span>
            <h2>Kai does more than answer.<br /><span>Kai helps you learn.</span></h2>
            <p>Kai guides you through a clear learning flow: understand your goal, learn the idea, practise it, and get feedback that moves you forward.</p>
            <button type="button" className="kai-tour-button" onClick={startTour}><Play size={17} fill="currentColor" /> {hasStarted ? "Replay the flow" : "See how Kai works"}</button>
          </div>
          <div className={`kai-orbit-stage ${hasStarted ? "is-running" : ""}`} aria-label="Animated Kai learning flow">
            <div className="kai-orbit-ring ring-one" />
            <div className="kai-orbit-ring ring-two" />
            <div className="kai-orbit-core"><Bot size={48} /><span>KAI</span></div>
            <div className="kai-orbit-spark spark-one"><Zap size={15} /></div>
            <div className="kai-orbit-spark spark-two"><Sparkles size={15} /></div>
            <div className="kai-orbit-label">Learn<br /><strong>by doing</strong></div>
          </div>
        </section>

        <section className="kai-flow-section" aria-label="How Kai teaches">
          <div className="kai-section-heading"><span className="kai-eyebrow">THE KAI METHOD</span><h3>A learning loop built around you</h3><p>Watch the active step come alive, then follow the complete path below.</p></div>
          <div className="kai-flow-layout">
            <div className="kai-step-list">
              {FLOW_STEPS.map((step, index) => {
                const Icon = step.icon;
                return <button type="button" key={step.eyebrow} className={`kai-step-button ${activeStep === index ? "is-active" : ""}`} onClick={() => { setHasStarted(true); setActiveStep(index); }}><span className={`kai-step-icon ${step.accent}`}><Icon size={18} /></span><span><small>{step.eyebrow}</small><strong>{step.title}</strong></span><span className="kai-step-number">{String(index + 1).padStart(2, "0")}</span></button>;
              })}
            </div>
            <div className={`kai-demo-panel accent-${activeFlow.accent}`}>
              <div className="kai-demo-topbar"><span><span className="kai-demo-status" /> KAI IS TEACHING</span><span>{String(activeStep + 1).padStart(2, "0")} / {String(FLOW_STEPS.length).padStart(2, "0")}</span></div>
              <div className="kai-demo-content">
                <div className="kai-demo-icon"><ActiveIcon size={26} /></div>
                <span className="kai-demo-eyebrow">{activeFlow.eyebrow}</span>
                <h4>{activeFlow.title}</h4>
                <p>{activeFlow.text}</p>
                <div className="kai-typing-bubble"><span className="kai-mini-avatar"><Bot size={16} /></span><p><TypingMessage text={activeFlow.typing} isActive={hasStarted} /></p></div>
              </div>
              <div className="kai-demo-progress"><span style={{ width: `${((activeStep + 1) / FLOW_STEPS.length) * 100}%` }} /></div>
            </div>
          </div>
        </section>

        <section className="kai-outcome-section">
          <div className="kai-outcome-card"><MessageCircle size={24} /><div><strong>Clear explanations, practical challenges, real progress.</strong><p>Kai keeps the conversation inside your learning path so every interaction helps you understand, practise, and build confidence.</p></div></div>
          <span className="kai-account-note">Ready when you are, {user?.name || "learner"}.</span>
        </section>
      </main>
    </div>
  );
}

export default LearnWithKai;
