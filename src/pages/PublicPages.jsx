import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Bot,
  Check,
  CheckCircle2,
  ChevronRight,
  Code2,
  Clock3,
  Compass,
  Crown,
  Flag,
  GitBranch,
  Lightbulb,
  Map,
  MessageCircle,
  Play,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";
import "./PublicPages.css";

const PUBLIC_LINKS = [
  { path: "/ai-tutor", label: "AI Tutor (Kai)" },
  { path: "/roadmaps", label: "Roadmaps" },
  { path: "/challenges", label: "Challenges" },
  { path: "/pricing", label: "Pricing" },
  { path: "/about", label: "About" },
];

function Logo({ onNavigate }) {
  return (
    <button type="button" className="public-logo" onClick={() => onNavigate("/")} aria-label="Go to CodeLab Academy home">
      <span className="public-logo-code">code</span><span className="public-logo-lab">Lab</span>
      <small>ACADEMY</small>
    </button>
  );
}

export function PublicPageShell({ activePath, onNavigate, onSignIn, onGetStarted, children, pageClassName = "" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = (path) => {
    setMenuOpen(false);
    onNavigate(path);
  };

  return (
    <div className={`public-page-shell ${pageClassName}`}>
      <header className="public-navbar">
        <Logo onNavigate={navigate} />
        <button type="button" className="public-menu-button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          <span /><span /><span />
        </button>
        <nav className={`public-nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Public navigation">
          <button type="button" className={!activePath ? "is-active" : ""} onClick={() => navigate("/courses")}>Courses</button>
          {PUBLIC_LINKS.map((link) => (
            <button type="button" key={link.path} className={activePath === link.path ? "is-active" : ""} onClick={() => navigate(link.path)}>{link.label}</button>
          ))}
        </nav>
        <div className="public-nav-actions">
          <ThemeToggle />
          <button type="button" className="public-sign-in" onClick={onSignIn}>Sign In</button>
          <button type="button" className="public-get-started" onClick={onGetStarted}>Get Started <ArrowRight size={15} /></button>
        </div>
      </header>
      {children}
      <footer className="public-footer">
        <div>
          <Logo onNavigate={navigate} />
          <p>Learn the technologies that shape the future, one practical step at a time.</p>
        </div>
        <div className="public-footer-links">
          <button type="button" onClick={() => navigate("/ai-tutor")}>AI Tutor (Kai)</button>
          <button type="button" onClick={() => navigate("/roadmaps")}>Roadmaps</button>
          <button type="button" onClick={() => navigate("/challenges")}>Challenges</button>
          <button type="button" onClick={() => navigate("/about")}>About</button>
        </div>
        <span className="public-footer-note">Built for curious developers.</span>
      </footer>
    </div>
  );
}

function PageHero({ eyebrow, title, description, children, icon: Icon = Sparkles }) {
  return (
    <section className="public-page-hero">
      <div className="public-page-hero-copy">
        <span className="public-eyebrow"><Icon size={14} /> {eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
      </div>
      <div className="public-hero-orbit" aria-hidden="true">
        <div className="public-orbit-ring public-orbit-ring-one" />
        <div className="public-orbit-ring public-orbit-ring-two" />
        <div className="public-hero-core"><Icon size={38} /></div>
      </div>
    </section>
  );
}

function PageSectionHeading({ eyebrow, title, description }) {
  return (
    <div className="public-section-heading">
      <span className="public-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export function AiTutorPage({ onNavigate, onSignIn, onGetStarted }) {
  const [selectedPrompt, setSelectedPrompt] = useState("Explain closures in JavaScript");
  const prompts = ["Explain closures in JavaScript", "Why use Git branches?", "Help me plan a React project"];

  return (
    <PublicPageShell activePath="/ai-tutor" onNavigate={onNavigate} onSignIn={onSignIn} onGetStarted={onGetStarted} pageClassName="public-ai-page">
      <main>
        <PageHero
          eyebrow="MEET YOUR AI INSTRUCTOR"
          title={<>Learn with Kai.<br /><span>Build with confidence.</span></>}
          description="Kai turns confusing technical ideas into clear explanations, guided practice, and the next small step you can actually finish."
          icon={Bot}
        >
          <div className="public-hero-actions">
            <button type="button" className="public-primary-button" onClick={() => onNavigate("/demo")}>Try Kai Demo <ArrowRight size={16} /></button>
            <button type="button" className="public-secondary-button" onClick={onGetStarted}>Start learning free</button>
          </div>
        </PageHero>

        <section className="public-content-section public-kai-demo-section">
          <div className="public-kai-copy">
            <span className="public-eyebrow">HOW KAI TEACHES</span>
            <h2>Not just answers. A learning loop.</h2>
            <p>Kai explains the idea, checks your understanding, gives you a focused challenge, and keeps the lesson moving only when you are ready.</p>
            <div className="public-step-list">
              {["Ask in your own words", "Get a clear explanation", "Practice with a small challenge", "Unlock the next step"].map((step, index) => (
                <div className="public-step-item" key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong><CheckCircle2 size={16} /></div>
              ))}
            </div>
          </div>
          <div className="public-kai-console">
            <div className="public-console-top"><span><i /> Kai teaching preview</span><span>LIVE LESSON</span></div>
            <div className="public-console-message public-console-message-kai"><div className="public-message-avatar"><Bot size={16} /></div><div><strong>Kai</strong><p>Let’s make this practical. What do you already know about closures?</p></div></div>
            <div className="public-console-message public-console-message-user"><div><strong>You</strong><p>{selectedPrompt}</p></div></div>
            <div className="public-console-message public-console-message-kai"><div className="public-message-avatar"><Bot size={16} /></div><div><strong>Kai</strong><p>A closure lets a function remember variables from the place where it was created. Let’s use a tiny example, then you’ll modify it.</p></div></div>
            <div className="public-prompt-row">{prompts.map((prompt) => <button type="button" key={prompt} onClick={() => setSelectedPrompt(prompt)} className={selectedPrompt === prompt ? "is-selected" : ""}>{prompt}</button>)}</div>
          </div>
        </section>

        <section className="public-content-section">
          <PageSectionHeading eyebrow="WHY LEARN WITH KAI" title="A better way to stay in motion." description="Every part of the experience is designed to replace passive scrolling with deliberate progress." />
          <div className="public-feature-grid public-feature-grid-four">
            {[
              [MessageCircle, "Natural questions", "Ask follow-up questions without losing the lesson thread."],
              [Target, "Focused practice", "Turn each concept into a small challenge that builds confidence."],
              [Clock3, "Your pace", "Pause, revisit, and continue without being pushed through a checklist."],
              [ShieldCheck, "No skipped foundations", "Sequential lesson gates keep the learning path meaningful."],
            ].map(([Icon, title, description]) => <article className="public-feature-card" key={title}><div className="public-feature-icon"><Icon size={20} /></div><h3>{title}</h3><p>{description}</p></article>)}
          </div>
        </section>
      </main>
    </PublicPageShell>
  );
}

const ROADMAPS = [
  { icon: Code2, label: "FOUNDATIONS", title: "Frontend Builder", description: "HTML, CSS, JavaScript, React, and the habits behind clean interfaces.", lessons: "48 lessons", color: "green" },
  { icon: GitBranch, label: "ENGINEERING", title: "Backend Pathfinder", description: "APIs, databases, authentication, testing, and production-ready services.", lessons: "56 lessons", color: "blue" },
  { icon: Compass, label: "SYSTEMS", title: "Full-Stack Navigator", description: "Connect the browser, server, data layer, and deployment into one mental model.", lessons: "72 lessons", color: "orange" },
];

export function RoadmapsPage({ onNavigate, onSignIn, onGetStarted }) {
  return (
    <PublicPageShell activePath="/roadmaps" onNavigate={onNavigate} onSignIn={onSignIn} onGetStarted={onGetStarted} pageClassName="public-roadmaps-page">
      <main>
        <PageHero eyebrow="LEARNING ROADMAPS" title={<>Know your next step.<br /><span>See the whole path.</span></>} description="Choose a direction, follow a structured sequence, and use Kai to turn every milestone into a working skill." icon={Map}>
          <div className="public-hero-actions"><button type="button" className="public-primary-button" onClick={onGetStarted}>Choose a roadmap <ArrowRight size={16} /></button><button type="button" className="public-text-button" onClick={() => onNavigate("/demo")}>Preview the experience <Play size={15} /></button></div>
        </PageHero>
        <section className="public-content-section">
          <PageSectionHeading eyebrow="THREE WAYS FORWARD" title="Pick a path that matches your ambition." description="You can change direction later. Start with the path that makes the next project feel exciting." />
          <div className="public-roadmap-grid">{ROADMAPS.map(({ icon: Icon, label, title, description, lessons, color }) => <article className={`public-roadmap-card ${color}`} key={title}><div className="public-roadmap-card-top"><div className="public-feature-icon"><Icon size={21} /></div><span>{label}</span></div><h3>{title}</h3><p>{description}</p><div className="public-roadmap-meta"><span><BookOpen size={14} /> {lessons}</span><span><Clock3 size={14} /> Self-paced</span></div><button type="button" onClick={onGetStarted}>Explore path <ChevronRight size={15} /></button></article>)}</div>
        </section>
        <section className="public-content-section public-roadmap-flow"><div className="public-roadmap-flow-copy"><span className="public-eyebrow">A LIVING PLAN</span><h2>Progress is more than a percentage.</h2><p>Roadmaps connect lessons to practice, practice to projects, and projects to a portfolio you can explain with confidence.</p></div><div className="public-roadmap-timeline">{["Choose your direction", "Learn the foundation", "Ship a small project", "Review with Kai", "Unlock the next milestone"].map((item, index) => <div className="public-timeline-item" key={item}><span>{index + 1}</span><strong>{item}</strong>{index < 4 && <i />}</div>)}</div></section>
      </main>
    </PublicPageShell>
  );
}

const CHALLENGES = [
  { icon: Zap, title: "The 20-minute fix", description: "Repair a broken function and explain why your change works.", level: "BEGINNER", time: "20 min" },
  { icon: Target, title: "Build from a prompt", description: "Turn a product idea into a small, testable feature with Kai's hints.", level: "INTERMEDIATE", time: "35 min" },
  { icon: Trophy, title: "Debug the system", description: "Trace a realistic bug through the browser, API, and database layers.", level: "ADVANCED", time: "45 min" },
];

export function ChallengesPage({ onNavigate, onSignIn, onGetStarted }) {
  return (
    <PublicPageShell activePath="/challenges" onNavigate={onNavigate} onSignIn={onSignIn} onGetStarted={onGetStarted} pageClassName="public-challenges-page">
      <main>
        <PageHero eyebrow="PRACTICE MAKES PROGRESS" title={<>Learn it.<br /><span>Then prove it.</span></>} description="Daily challenges turn lessons into small wins. Get a prompt, build your answer, and learn from the feedback." icon={Flag}>
          <div className="public-hero-actions"><button type="button" className="public-primary-button" onClick={() => onNavigate("/demo")}>Try a sample challenge <ArrowRight size={16} /></button><button type="button" className="public-secondary-button" onClick={onGetStarted}>Join the challenge loop</button></div>
        </PageHero>
        <section className="public-content-section"><PageSectionHeading eyebrow="THE CHALLENGE BOARD" title="Small problems. Real momentum." description="Challenges are sized to fit into your day and designed to stretch the exact skill you just practiced." /><div className="public-challenge-grid">{CHALLENGES.map(({ icon: Icon, title, description, level, time }) => <article className="public-challenge-card" key={title}><div className="public-challenge-top"><div className="public-feature-icon"><Icon size={20} /></div><span>{level}</span></div><h3>{title}</h3><p>{description}</p><div className="public-roadmap-meta"><span><Clock3 size={14} /> {time}</span><span><Sparkles size={14} /> Kai feedback</span></div><button type="button" onClick={() => onNavigate("/demo")}>View challenge <ArrowRight size={15} /></button></article>)}</div></section>
        <section className="public-content-section public-challenge-banner"><div className="public-banner-icon"><Rocket size={25} /></div><div><span className="public-eyebrow">KEEP YOUR STREAK ALIVE</span><h2>One focused challenge is enough for today.</h2><p>Build a repeatable learning habit instead of waiting for a perfect block of time.</p></div><button type="button" className="public-primary-button" onClick={onGetStarted}>Start learning <ArrowRight size={16} /></button></section>
      </main>
    </PublicPageShell>
  );
}

const PLANS = [
  { name: "Starter", price: "$0", description: "Build your first learning habit.", featured: false, features: ["Course catalog access", "Kai lesson introductions", "Daily challenge previews", "Progress tracking"] },
  { name: "Builder", price: "$12", suffix: "/ month", description: "A focused path from idea to shipped project.", featured: true, features: ["Everything in Starter", "Full Kai teaching loop", "Complete roadmap access", "Unlimited challenges"] },
  { name: "Team", price: "Let’s talk", description: "Shared learning for a team that ships together.", featured: false, features: ["Everything in Builder", "Team learning paths", "Progress visibility", "Custom onboarding"] },
];

export function PricingPage({ onNavigate, onSignIn, onGetStarted }) {
  return (
    <PublicPageShell activePath="/pricing" onNavigate={onNavigate} onSignIn={onSignIn} onGetStarted={onGetStarted} pageClassName="public-pricing-page">
      <main>
        <PageHero eyebrow="SIMPLE, HONEST PLANS" title={<>Invest in the<br /><span>developer you’re becoming.</span></>} description="Start free, build a habit, and choose more structure only when it creates real value for your learning." icon={Crown}>
          <div className="public-hero-actions"><button type="button" className="public-primary-button" onClick={onGetStarted}>Start for free <ArrowRight size={16} /></button><button type="button" className="public-text-button" onClick={() => onNavigate("/about")}>Why CodeLab? <ChevronRight size={15} /></button></div>
        </PageHero>
        <section className="public-content-section"><div className="public-pricing-grid">{PLANS.map((plan) => <article className={`public-price-card ${plan.featured ? "is-featured" : ""}`} key={plan.name}>{plan.featured && <span className="public-plan-badge">MOST POPULAR</span>}<div className="public-price-card-title"><span>{plan.name}</span>{plan.featured ? <Sparkles size={17} /> : <BookOpen size={17} />}</div><p>{plan.description}</p><div className="public-price"><strong>{plan.price}</strong>{plan.suffix && <span>{plan.suffix}</span>}</div><button type="button" className={plan.featured ? "public-primary-button" : "public-secondary-button"} onClick={plan.name === "Team" ? () => onNavigate("/about") : onGetStarted}>{plan.name === "Team" ? "Talk to us" : "Choose plan"} <ArrowRight size={15} /></button><div className="public-price-divider" />{plan.features.map((feature) => <div className="public-price-feature" key={feature}><Check size={15} /> <span>{feature}</span></div>)}</article>)}</div></section>
        <section className="public-content-section public-pricing-note"><ShieldCheck size={22} /><div><strong>No lock-in learning.</strong><p>Your account keeps its progress. Change your plan or keep learning on the free path whenever you choose.</p></div></section>
      </main>
    </PublicPageShell>
  );
}

export function AboutPage({ onNavigate, onSignIn, onGetStarted }) {
  return (
    <PublicPageShell activePath="/about" onNavigate={onNavigate} onSignIn={onSignIn} onGetStarted={onGetStarted} pageClassName="public-about-page">
      <main>
        <PageHero eyebrow="THE CODELAB ACADEMY IDEA" title={<>Make technical learning<br /><span>feel possible.</span></>} description="CodeLab Academy exists for people who want to build, not just collect tutorials. We combine structured paths, deliberate practice, and a patient AI instructor." icon={Lightbulb}>
          <div className="public-hero-actions"><button type="button" className="public-primary-button" onClick={onGetStarted}>Join the lab <ArrowRight size={16} /></button><button type="button" className="public-text-button" onClick={() => onNavigate("/demo")}>See it in action <Play size={15} /></button></div>
        </PageHero>
        <section className="public-content-section public-about-grid"><div><span className="public-eyebrow">OUR NORTH STAR</span><h2>Confidence comes from doing the work with a guide.</h2><p>We are building a learning environment where a beginner can ask the question they were afraid to ask, practice without judgment, and see a clear next step every time they return.</p><p>Kai is part instructor, part pair programmer, and part accountability partner. The platform around Kai makes sure the learning path remains coherent.</p></div><div className="public-principle-stack">{[[Users, "Human pace", "Learning should fit around real life, not demand a perfect schedule."], [Code2, "Working examples", "The fastest way to understand a concept is to use it in context."], [Zap, "Visible progress", "Progress should show what you can now do, not only what you have opened."]].map(([Icon, title, description]) => <article key={title}><div className="public-feature-icon"><Icon size={19} /></div><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></section>
        <section className="public-content-section public-about-stats"><div><strong>78</strong><span>course directions</span></div><div><strong>611+</strong><span>structured lessons</span></div><div><strong>1</strong><span>patient AI instructor</span></div><div><strong>∞</strong><span>questions welcome</span></div></section>
      </main>
    </PublicPageShell>
  );
}

const DEMO_RESPONSES = {
  "Explain closures": "A closure is a function that keeps access to variables from the place where it was created. Think of it as a function carrying a small backpack of remembered values. Let’s make one together, then you’ll change the value it remembers.",
  "Plan a React project": "Start with the user action, not the component list. We’ll define one small outcome, sketch the data it needs, then build the smallest component that proves the idea. After that, we can add structure without guessing.",
  "Debug an API": "We’ll follow the request in order: browser input, network request, server route, database query, and response. At each step we’ll inspect one fact, so the bug becomes a location instead of a mystery.",
};

export function DemoPage({ onNavigate, onSignIn, onGetStarted }) {
  const [selectedPrompt, setSelectedPrompt] = useState("Explain closures");
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState(DEMO_RESPONSES["Explain closures"]);
  const [isRunning, setIsRunning] = useState(false);
  const [completed, setCompleted] = useState(false);

  const runDemo = () => {
    if (!question.trim() && !selectedPrompt) return;
    setIsRunning(true);
    setCompleted(false);
    window.setTimeout(() => {
      const normalized = question.trim() ? "Explain closures" : selectedPrompt;
      setResponse(question.trim() ? `That’s a useful question. Kai would first break “${question.trim()}” into the smallest concept we can test, then guide you through an example before asking you to apply it.` : DEMO_RESPONSES[normalized]);
      setIsRunning(false);
      setCompleted(true);
    }, 520);
  };

  return (
    <PublicPageShell activePath="/demo" onNavigate={onNavigate} onSignIn={onSignIn} onGetStarted={onGetStarted} pageClassName="public-demo-page">
      <main>
        <section className="public-demo-hero"><div><span className="public-eyebrow"><Play size={14} /> INTERACTIVE DEMO</span><h1>See how Kai turns a question into a <span>learning moment.</span></h1><p>Choose a prompt or write your own. This demo shows the teaching rhythm before you create an account.</p></div><div className="public-demo-badge"><Bot size={18} /><span>DEMO MODE</span></div></section>
        <section className="public-content-section public-demo-workspace"><aside className="public-demo-sidebar"><span className="public-demo-sidebar-label">CHOOSE A STARTING POINT</span>{Object.keys(DEMO_RESPONSES).map((prompt) => <button type="button" key={prompt} className={selectedPrompt === prompt ? "is-selected" : ""} onClick={() => { setSelectedPrompt(prompt); setQuestion(""); setCompleted(false); }}>{prompt}<ChevronRight size={15} /></button>)}<div className="public-demo-side-note"><Sparkles size={17} /><p>Kai will explain first, then give you a small next step.</p></div></aside><div className="public-demo-chat"><div className="public-demo-chat-top"><div><span className="public-status-dot" /> Kai is ready</div><span>TEACHING PREVIEW</span></div><div className="public-demo-messages"><div className="public-demo-bubble kai"><div className="public-message-avatar"><Bot size={16} /></div><div><strong>Kai</strong><p>Hi, I’m Kai. Pick a question and I’ll show you how I would start teaching it.</p></div></div><div className="public-demo-bubble user"><strong>You</strong><p>{question || selectedPrompt}</p></div><div className={`public-demo-bubble kai ${isRunning ? "is-loading" : ""}`}><div className="public-message-avatar"><Bot size={16} /></div><div><strong>Kai</strong><p>{isRunning ? "Thinking through the best first explanation…" : response}</p>{completed && <div className="public-demo-next-step"><CheckCircle2 size={15} /> Next step unlocked: try the example</div>}</div></div></div><div className="public-demo-compose"><input value={question} onChange={(event) => setQuestion(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter") runDemo(); }} placeholder="Ask Kai a question..." aria-label="Ask Kai a question" /><button type="button" onClick={runDemo} disabled={isRunning}>{isRunning ? "Working..." : "Ask Kai"} <ArrowRight size={15} /></button></div></div></section>
        <section className="public-content-section public-demo-bottom"><div><span className="public-eyebrow">READY TO KEEP GOING?</span><h2>Make the demo part of your real learning path.</h2><p>Create a free account to save your conversations, unlock structured courses, and let Kai remember where you left off.</p></div><button type="button" className="public-primary-button" onClick={onGetStarted}>Create free account <ArrowRight size={16} /></button></section>
      </main>
    </PublicPageShell>
  );
}
