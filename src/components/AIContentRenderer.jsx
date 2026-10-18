import { useEffect, useMemo, useState } from "react";
import Editor from "@monaco-editor/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Play, RotateCcw, Copy, Check, Lightbulb, AlertTriangle, Info, ArrowRight, Quote, CheckSquare, Clock, ExternalLink, MessageCircle, Code2, HelpCircle, Dumbbell, Sparkles, ListChecks } from "lucide-react";
import resolveVideoPlaybackUrl from "../utils/resolveVideoPlaybackUrl";
import "./AIContentRenderer.css";

const SAFE_ACTIONS = new Set([
  "openExercise",
  "openEditor",
  "openTerminal",
  "showDiagram",
  "showTable",
  "showCode",
  "showHint",
  "showExplanation",
  "unlockNextLesson",
  "completeSection",
  "nextSection",
  "nextLesson",
]);

function InlineText({ children }) {
  return <span>{String(children || "").split(/(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) return <code key={index}>{part.slice(1, -1)}</code>;
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={index}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("*") && part.endsWith("*")) return <em key={index}>{part.slice(1, -1)}</em>;
    return <span key={index}>{part}</span>;
  })}</span>;
}

function TextBlock({ value }) {
  const text = String(value || "").trim();
  if (!text) return null;
  return <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    components={{
      h1: ({ children }) => <h2 className="kai-rich-heading">{children}</h2>,
      h2: ({ children }) => <h3 className="kai-rich-heading">{children}</h3>,
      h3: ({ children }) => <h4 className="kai-rich-heading">{children}</h4>,
      h4: ({ children }) => <h4 className="kai-rich-heading">{children}</h4>,
      p: ({ children }) => <p className="kai-rich-text">{children}</p>,
      blockquote: ({ children }) => <blockquote className="kai-rich-quote">{children}</blockquote>,
      ul: ({ children }) => <ul className="kai-rich-bullet-list">{children}</ul>,
      ol: ({ children }) => <ol className="kai-rich-bullet-list">{children}</ol>,
      hr: () => <hr className="kai-rich-divider" />,
      a: ({ href, children }) => /^https?:\/\//i.test(href || "")
        ? <a href={href} target="_blank" rel="noreferrer">{children}</a>
        : <span>{children}</span>,
      code: ({ className, children }) => <code className={className}>{children}</code>,
    }}
  >{text}</ReactMarkdown>;
}

function Copyable({ block }) {
  const [copied, setCopied] = useState(false);
  const value = String(block.content ?? block.text ?? block.code ?? "");
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch { setCopied(false); }
  };
  return <section className="kai-rich-copyable"><header><strong>{block.title || block.filename || block.language || "Copyable content"}</strong><button type="button" onClick={copy}>{copied ? <Check size={14} /> : <Copy size={14} />} {copied ? "Copied" : "Copy"}</button></header><pre>{value}</pre></section>;
}

function QuoteBlock({ block }) {
  return <blockquote className="kai-rich-quote"><Quote size={18} /><div><InlineText>{block.text || block.content}</InlineText>{block.author && <cite>— {block.author}</cite>}</div></blockquote>;
}

function Checklist({ block }) {
  const [checked, setChecked] = useState(() => new Set((block.items || []).map((item) => item.done ? String(item.text || item) : "")));
  return <section className="kai-rich-checklist"><h3>{block.title || "Checklist"}</h3>{(block.items || []).map((item, index) => { const text = typeof item === "string" ? item : item.text; const active = checked.has(String(text)); return <label key={index}><input type="checkbox" checked={active} onChange={() => setChecked((current) => { const next = new Set(current); if (next.has(String(text))) next.delete(String(text)); else next.add(String(text)); return next; })} /><CheckSquare size={16} /><span className={active ? "done" : ""}><InlineText>{text}</InlineText></span></label>; })}</section>;
}

function Comparison({ block }) {
  return <section className="kai-rich-comparison"><h3>{block.title || "Comparison"}</h3><div className="kai-comparison-grid">{(block.options || block.items || []).map((item, index) => <article key={index}><h4>{item.name || item.title || `Option ${index + 1}`}</h4>{item.bestFor && <p><strong>Best for:</strong> <InlineText>{item.bestFor}</InlineText></p>}<ul>{(item.pros || []).map((value) => <li key={`p-${value}`}><strong>+</strong> <InlineText>{value}</InlineText></li>)}{(item.cons || []).map((value) => <li key={`c-${value}`}><strong>−</strong> <InlineText>{value}</InlineText></li>)}</ul></article>)}</div></section>;
}

function Timeline({ block }) {
  return <section className="kai-rich-timeline"><h3>{block.title || "Timeline"}</h3>{(block.items || block.events || []).map((item, index) => <div className="kai-timeline-item" key={index}><span className="kai-timeline-dot" /><div><strong>{item.time || item.label || `Step ${index + 1}`}</strong><p><InlineText>{item.text || item.description || item.content}</InlineText></p></div></div>)}</section>;
}

function Progress({ block }) {
  const value = Math.min(100, Math.max(0, Number(block.value ?? block.percent ?? 0)));
  return <section className="kai-rich-progress"><div><strong>{block.label || "Progress"}</strong><span>{value}%</span></div><div className="kai-progress-track"><span style={{ width: `${value}%` }} /></div></section>;
}

function FileTree({ block }) {
  return <section className="kai-rich-filetree"><strong>{block.title || "File structure"}</strong><pre>{String(block.tree || block.content || "")}</pre></section>;
}

function Preview({ block }) {
  const url = String(block.url || block.src || "");
  const allowed = /^https?:\/\//i.test(url);
  if (!allowed) return <Callout block={{ kind: "warning", title: "Preview unavailable", text: "This preview URL is not safe to embed." }} />;
  return <figure className="kai-rich-preview"><iframe src={url} title={block.title || "Interactive preview"} sandbox="allow-scripts" loading="lazy" /><figcaption>{block.title || "Interactive preview"} <a href={url} target="_blank" rel="noreferrer"><ExternalLink size={13} /></a></figcaption></figure>;
}

function ImageBlock({ block }) {
  const src = String(block.url || block.src || "");
  if (!/^https?:\/\//i.test(src)) return null;
  return <figure className="kai-rich-image"><img src={src} alt={block.alt || block.title || "Kai illustration"} loading="lazy" /><figcaption>{block.title || block.alt}</figcaption></figure>;
}

export function CodeBlock({ block }) {
  const [value, setValue] = useState(String(block.code || ""));
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);
  const language = String(block.language || "javascript").toLowerCase();

  const runCode = () => {
    if (language !== "javascript" && language !== "js") {
      setOutput("Run is available in the browser for JavaScript. Kai can still review this code and explain it.");
      return;
    }
    try {
      const logs = [];
      // Deliberately restricted: no network, DOM, storage, or arbitrary app access.
      const safeConsole = { log: (...args) => logs.push(args.map(String).join(" ")) };
      // eslint-disable-next-line no-new-func
      Function("console", `"use strict";\n${value}`)(safeConsole);
      setOutput(logs.join("\n") || "Code ran without console output.");
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  };

  return <section className="kai-rich-code" aria-label={`${language} code example`}>
    <header className="kai-rich-code-header">
      <span>{block.filename || language}</span>
      <div className="kai-rich-code-actions">
        <button type="button" onClick={copyCode}>{copied ? <Check size={14} /> : <Copy size={14} />} {copied ? "Copied" : "Copy"}</button>
        <button type="button" onClick={() => setValue(String(block.code || ""))}><RotateCcw size={14} /> Reset</button>
        <button type="button" onClick={runCode}><Play size={14} /> Run</button>
      </div>
    </header>
    <Editor height={Math.min(420, Math.max(72, value.split("\n").length * 21 + 24))} language={language === "py" ? "python" : language} value={value} onChange={(next) => setValue(next || "")} theme="vs-dark" options={{ minimap: { enabled: false }, lineNumbers: "on", lineNumbersMinChars: 4, lineDecorationsWidth: 12, glyphMargin: false, fontSize: 14, padding: { top: 12, bottom: 12, left: 12, right: 8 }, scrollBeyondLastLine: false, scrollBeyondLastColumn: 0 }} />
    {output && <pre className="kai-rich-code-output">{output}</pre>}
  </section>;
}

function Diagram({ block }) {
  const nodes = Array.isArray(block.nodes) ? block.nodes : Array.isArray(block.data?.nodes) ? block.data.nodes : [];
  const edges = Array.isArray(block.edges) ? block.edges : Array.isArray(block.data?.edges) ? block.data.edges : [];
  const nodeById = new Map(nodes.map((node, index) => [String(node.id || index), { ...node, index }]));
  const width = 980;
  const nodeWidth = 190;
  const nodeHeight = 64;
  const diagramType = String(block.diagramType || '').toLowerCase();
  const defaultLayout = diagramType === 'network' ? 'radial' : ['architecture', 'class', 'dataflow'].includes(diagramType) ? 'horizontal' : 'auto';
  const layoutName = String(block.layout || block.direction || defaultLayout).toLowerCase();
  const radialLayout = ['radial', 'radial/all-sides', 'all-sides'].includes(layoutName);
  const columns = layoutName === 'horizontal' ? Math.min(4, Math.max(2, nodes.length)) : layoutName === 'grid' ? 3 : 1;
  const rows = Math.max(1, Math.ceil(nodes.length / columns));
  const height = radialLayout ? 430 : Math.max(230, rows * 150 + 50);
  const markerId = `kai-arrow-${String(block.title || block.label || 'diagram').replace(/[^a-z0-9]/gi, '').slice(0, 12) || 'diagram'}`;
  const position = (node) => {
    if (node.position && Number.isFinite(Number(node.position.x)) && Number.isFinite(Number(node.position.y))) {
      return { x: Number(node.position.x), y: Number(node.position.y) };
    }
    const index = node.index;
    if (layoutName === 'radial' || layoutName === 'radial/all-sides' || layoutName === 'all-sides') {
      const centerX = width / 2 - nodeWidth / 2;
      const centerY = height / 2 - nodeHeight / 2;
      if (index === 0) return { x: centerX, y: centerY };
      const angle = ((index - 1) / Math.max(1, nodes.length - 1)) * Math.PI * 2 - Math.PI / 2;
      return { x: centerX + Math.cos(angle) * 300, y: centerY + Math.sin(angle) * 120 };
    }
    const col = index % columns;
    const row = Math.floor(index / columns);
    const gap = (width - columns * nodeWidth) / (columns + 1);
    return { x: gap + col * (nodeWidth + gap), y: 26 + row * 150 };
  };
  const shape = (node, x, y) => {
    const kind = String(node.shape || 'process').toLowerCase();
    if (['start', 'end', 'terminal'].includes(kind)) return <rect x={x} y={y} width={nodeWidth} height={nodeHeight} rx="32" />;
    if (['decision', 'diamond'].includes(kind)) return <polygon points={
      `${x + nodeWidth / 2},${y - 10} ${x + nodeWidth + 12},${y + nodeHeight / 2} ${x + nodeWidth / 2},${y + nodeHeight + 10} ${x - 12},${y + nodeHeight / 2}`
    } />;
    if (['input', 'output', 'io'].includes(kind)) return <polygon points={
      `${x + 18},${y} ${x + nodeWidth},${y} ${x + nodeWidth - 18},${y + nodeHeight} ${x},${y + nodeHeight}`
    } />;
    if (['circle', 'connector'].includes(kind)) return <circle cx={x + nodeWidth / 2} cy={y + nodeHeight / 2} r="31" />;
    return <rect x={x} y={y} width={nodeWidth} height={nodeHeight} rx="12" />;
  };
  const anchor = (node, side) => { const p = position(node); return { x: p.x + nodeWidth / 2, y: p.y + nodeHeight / 2, top: p.y, bottom: p.y + nodeHeight, left: p.x, right: p.x + nodeWidth, side }; };
  return <section className={`kai-rich-diagram${diagramType === 'network' ? ' kai-rich-network-diagram' : ''}`} role="img" aria-label={block.title || block.label || (diagramType === 'network' ? 'Kai network topology' : 'Kai diagram')}>
    {diagramType === 'network' && <span className="kai-network-diagram-label">NETWORK TOPOLOGY</span>}
    {block.title && <h3>{block.title}</h3>}
    <div className="kai-rich-diagram-scroll"><svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMin meet">
      <defs><marker id={markerId} markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" /></marker></defs>
      {edges.map((edge, index) => { const from = nodeById.get(String(edge.from)); const to = nodeById.get(String(edge.to)); if (!from || !to) return null; const a = anchor(from); const b = anchor(to); const horizontal = Math.abs(b.x - a.x) >= Math.abs(b.y - a.y); const x1 = horizontal ? (b.x > a.x ? a.right : a.left) : a.x; const y1 = horizontal ? a.y : (b.y > a.y ? a.bottom : a.top); const x2 = horizontal ? (b.x > a.x ? b.left : b.right) : b.x; const y2 = horizontal ? b.y : (b.y > a.y ? b.top : b.bottom); const midX = (x1 + x2) / 2; const midY = (y1 + y2) / 2; return <g key={`edge-${index}`}><path d={horizontal ? `M ${x1} ${y1} L ${x2} ${y2}` : `M ${x1} ${y1} L ${x2} ${y2}`} markerEnd={`url(#${markerId})`} /><text className="kai-rich-diagram-edge-label" x={midX + 8} y={midY - 5}>{edge.label || ''}</text></g>; })}
      {nodes.map((node, index) => { const positioned = { ...node, index }; const { x, y } = position(positioned); const labelLines = String(node.label || node.title || node.id || '').split(/\\n|\n/); return <g key={node.id || index} className="kai-rich-diagram-node">{shape(node, x, y)}<text x={x + nodeWidth / 2} y={y + 27 - ((labelLines.length - 1) * 8)} textAnchor="middle">{labelLines.map((line, lineIndex) => <tspan x={x + nodeWidth / 2} dy={lineIndex === 0 ? 0 : 16} key={lineIndex}>{line}</tspan>)}</text></g>; })}
    </svg></div>
  </section>;
}
function Choice({ block, onChoice }) {
  const [selected, setSelected] = useState(null);
  return <section className="kai-rich-choice"><h3>{block.question}</h3><div className="kai-choice-options">{(block.options || []).map((option) => <button type="button" key={option} className={selected === option ? "selected" : ""} onClick={() => { setSelected(option); onChoice?.(option); }}>{option}</button>)}</div></section>;
}

function InteractiveQuiz({ block, onChoice }) {
  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const options = Array.isArray(block.options) ? block.options.map((option) => typeof option === "string" ? option : String(option.text || option.label || "")) : [];
  const answerKey = String(block.correctAnswer ?? block.answerKey ?? block.answer ?? "").trim();
  const isCorrect = answerKey && selected.trim().toLowerCase() === answerKey.toLowerCase();
  return <section className="kai-rich-quiz" aria-live="polite">
    <div className="kai-rich-quiz-kicker">QUICK CHECK</div>
    <h3>{block.question || block.title || "Check your understanding"}</h3>
    <div className="kai-choice-options">{options.map((option) => <button type="button" key={option} disabled={submitted} className={`${selected === option ? "selected" : ""}${submitted && selected === option ? (isCorrect ? " is-correct" : " is-incorrect") : ""}`} onClick={() => setSelected(option)}>{option}</button>)}</div>
    {!submitted ? <button type="button" className="kai-rich-quiz-submit" disabled={!selected} onClick={() => { setSubmitted(true); onChoice?.(`For the question “${block.question || block.title || "Check your understanding"}”, I chose “${selected}”. Please respond to my answer and continue teaching from here.`); }}>{block.submitLabel || "Check my answer"}</button> : <div className={`kai-rich-quiz-feedback ${answerKey ? (isCorrect ? "is-correct" : "is-incorrect") : ""}`}>
      <strong>{answerKey ? (isCorrect ? "Correct" : `Not quite — the answer is ${answerKey}`) : "Answer sent to Kai"}</strong>
      {block.explanation && <p>{block.explanation}</p>}
      {!answerKey && <p>Kai will use your choice to guide the next explanation.</p>}
    </div>}
  </section>;
}

function LearningPath({ block, onAction }) {
  const [activeStep, setActiveStep] = useState(0);
  const steps = Array.isArray(block.steps) ? block.steps : Array.isArray(block.items) ? block.items : [];
  const active = steps[activeStep];
  if (!steps.length) return null;
  return <section className="kai-rich-learning-path">
    <div className="kai-rich-learning-path-heading"><span>LEARNING PATH</span><h3>{block.title || "Choose a path to continue"}</h3>{block.description && <p>{block.description}</p>}</div>
    <div className="kai-learning-path-cards">{steps.map((step, index) => <button type="button" key={`${step.title || step.name || "step"}-${index}`} className={activeStep === index ? "is-active" : ""} onClick={() => setActiveStep(index)}><span>STEP {index + 1}</span><strong>{step.title || step.name || `Step ${index + 1}`}</strong>{step.summary && <small>{step.summary}</small>}</button>)}</div>
    {active && <div className="kai-learning-path-detail"><strong>{active.title || active.name || `Step ${activeStep + 1}`}</strong><p>{active.description || active.content || active.summary}</p>{(active.prompt || active.askKai) && <button type="button" onClick={() => onAction?.("prompt", active.prompt || active.askKai)}>Explore this step with Kai <ArrowRight size={14} /></button>}</div>}
  </section>;
}

function StepTutorial({ block, onAction }) {
  const [stepIndex, setStepIndex] = useState(0);
  const steps = Array.isArray(block.steps) ? block.steps : [];
  const step = steps[stepIndex];
  if (!step) return null;
  return <section className="kai-rich-tutorial">
    <header><span>STEP-BY-STEP</span><small>{stepIndex + 1} / {steps.length}</small></header>
    <div className="kai-tutorial-progress"><span style={{ width: `${((stepIndex + 1) / steps.length) * 100}%` }} /></div>
    <h3>{step.title || `Step ${stepIndex + 1}`}</h3>
    <p>{step.description || step.content || ""}</p>
    {step.code && <CodeBlock key={`tutorial-code-${stepIndex}`} block={{ code: step.code, language: step.language || "javascript", filename: step.filename || `step-${stepIndex + 1}` }} />}
    {step.prompt && <button type="button" onClick={() => onAction?.("prompt", step.prompt)}>Ask Kai about this step <ArrowRight size={14} /></button>}
    <footer><button type="button" disabled={stepIndex === 0} onClick={() => setStepIndex((index) => index - 1)}>Back</button><button type="button" disabled={stepIndex === steps.length - 1} onClick={() => setStepIndex((index) => index + 1)}>{stepIndex === steps.length - 1 ? "Tutorial complete" : "Next step"} <ArrowRight size={14} /></button></footer>
  </section>;
}

function SimulatedTerminal({ block, onAction }) {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState([]);
  const files = block.files && typeof block.files === "object" ? block.files : {};
  const simulated = block.simulatedCommands && typeof block.simulatedCommands === "object" ? block.simulatedCommands : {};
  const run = (event) => {
    event.preventDefault();
    const entered = command.trim();
    if (!entered) return;
    if (entered.toLowerCase() === "clear") { setHistory([]); setCommand(""); return; }
    let output = "";
    const [base, ...args] = entered.split(/\s+/);
    if (Object.prototype.hasOwnProperty.call(simulated, entered)) output = String(simulated[entered]);
    else if (base === "help") output = `Safe simulated commands: help, pwd, whoami, ls, cat <fixture-file>, clear${Object.keys(simulated).length ? `, ${Object.keys(simulated).join(", ")}` : ""}. Nothing runs on a real machine.`;
    else if (base === "pwd") output = String(block.workingDirectory || "/home/learner/workspace");
    else if (base === "whoami") output = "learner (simulated account)";
    else if (base === "ls") output = Object.keys(files).length ? Object.keys(files).join("  ") : "No fixture files are configured.";
    else if (base === "cat") output = args.length && Object.prototype.hasOwnProperty.call(files, args.join(" ")) ? String(files[args.join(" ")]) : `No such fixture file: ${args.join(" ") || "(missing path)"}`;
    else output = "Command not simulated. This terminal never executes real commands; use help or ask Kai about a safe simulation.";
    setHistory((previous) => [...previous, { command: entered, output }]);
    setCommand("");
  };
  return <section className="kai-sim-terminal">
    <header><span className="kai-sim-terminal-lights"><i /><i /><i /></span><strong>{block.title || "Simulated terminal"}</strong><span>ISOLATED MOCK</span></header>
    {block.scenario && <p className="kai-sim-terminal-scenario">{block.scenario}</p>}
    <div className="kai-sim-terminal-screen" aria-live="polite">
      <p>{block.welcome || "Kai training shell — fixture data only. Type help to see supported commands."}</p>
      {history.map((item, index) => <div key={`${item.command}-${index}`}><p><b>$ {item.command}</b></p><pre>{item.output}</pre></div>)}
    </div>
    <form onSubmit={run}><label htmlFor={`sim-terminal-${String(block.title || "kai").replace(/[^a-z0-9]/gi, "")}`}>$</label><input id={`sim-terminal-${String(block.title || "kai").replace(/[^a-z0-9]/gi, "")}`} value={command} onChange={(event) => setCommand(event.target.value)} placeholder="Try help" autoComplete="off" /><button type="submit">Run in simulation</button></form>
    <button className="kai-sim-terminal-ask" type="button" disabled={!history.length} onClick={() => { const last = history[history.length - 1]; onAction?.("prompt", `In the simulated terminal for ${block.title || "this lesson"}, I ran “${last.command}” and got: ${last.output}. Explain what it means and what I should check next.`); }}>Discuss last result with Kai</button>
  </section>;
}

export function Suggestions({ block, onAction }) {
  const items = Array.isArray(block.items) ? block.items : [];
  const progressionText = /(?:start|open|go to|continue to)\s+(?:the\s+)?(?:next\s+lesson|.+\blesson\b)|\bnext\s+lesson\b/i;
  const normalizedItems = items.flatMap((item) => {
    const value = typeof item === "string" ? { text: item, action: "prompt" } : item;
    return String(value?.text || value?.label || "")
      .split(/\r?\n|\s+(?=-\s*)/)
      .map((text) => ({ ...value, text: text.replace(/^\s*[-•]\s*/, "").replace(/\s+/g, " ").trim() }))
      .filter((value) => value.text);
  });
  return <section className="kai-rich-suggestions" aria-label={block.title || "Suggested next steps"}>
    {block.title && <p className="kai-rich-suggestions-title">{block.title}</p>}
    <div className="kai-suggestion-links">{normalizedItems.map((item, index) => {
      const text = item.text;
      if (!text) return null;
      const action = item.action === "prompt" && progressionText.test(text) ? "next_lesson" : (item.action || "prompt");
      return <button type="button" className="kai-suggestion-link" key={`${text}-${index}`} onClick={() => onAction?.(action, item.prompt || item.payload || text)}><span aria-hidden="true">→</span>{text}</button>;
    })}</div>
  </section>;
}

const QUICK_REPLY_ICONS = {
  example: Code2,
  practice: Dumbbell,
  quiz: HelpCircle,
  review: ListChecks,
  challenge: Sparkles,
  prompt: MessageCircle,
};

export function QuickReplies({ block, onAction }) {
  const items = Array.isArray(block.items) ? block.items : [];
  return <section className="kai-quick-replies" aria-label={block.title || "Quick replies"}>
    {block.title && <p className="kai-quick-replies-title">{block.title}</p>}
    <div className="kai-quick-reply-list">{items.slice(0, 5).map((item, index) => {
      const value = typeof item === "string" ? { text: item, action: "prompt" } : item;
      const text = value.text || value.label;
      if (!text) return null;
      const Icon = QUICK_REPLY_ICONS[value.action] || MessageCircle;
      return <button type="button" className="kai-quick-reply" key={`${text}-${index}`} onClick={() => onAction?.(value.action || "prompt", value.prompt || value.payload || text)}><Icon size={15} aria-hidden="true" /><span>{text}</span></button>;
    })}</div>
  </section>;
}

function Callout({ block }) {
  const kind = String(block.kind || "tip").toLowerCase();
  const Icon = kind === "warning" ? AlertTriangle : kind === "important" ? Info : Lightbulb;
  return <aside className={`kai-rich-callout ${kind}`}><Icon size={17} /><div><strong>{String(block.title || kind).toUpperCase()}</strong><p><InlineText>{block.text}</InlineText></p></div></aside>;
}

function Table({ block }) {
  return <div className="kai-rich-table-wrap"><table><thead><tr>{(block.columns || []).map((column) => <th key={column}>{column}</th>)}</tr></thead><tbody>{(block.rows || []).map((row, index) => <tr key={index}>{(Array.isArray(row) ? row : block.columns.map((column) => row?.[column])).map((cell, cellIndex) => <td key={cellIndex}><InlineText>{cell}</InlineText></td>)}</tr>)}</tbody></table></div>;
}

export function KaiVideoPlayer({ video, aspectRatio = "16 / 9" }) {
  const [playbackUrl, setPlaybackUrl] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    setPlaybackUrl("");
    setError("");
    if (!video?.playbackUrl) return undefined;
    resolveVideoPlaybackUrl(video)
      .then((url) => { if (!cancelled) setPlaybackUrl(url); })
      .catch((reason) => { if (!cancelled) setError(reason.message || "Could not load this video."); });
    return () => { cancelled = true; };
  }, [video]);

  if (!video?.playbackUrl) return null;
  return <figure className="kai-rich-video">
    <div className="kai-rich-video-frame" style={{ aspectRatio: String(aspectRatio).replace(":", " /") }}>
      {video.playerType === "embed" ? <iframe src={video.playbackUrl} title={video.title || "Kai video"} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /> : playbackUrl ? <video src={playbackUrl} poster={video.posterUrl || undefined} controls playsInline preload="metadata" referrerPolicy="no-referrer" /> : <div className="kai-rich-video-status">{error || "Preparing secure video playback..."}</div>}
    </div>
    {(video.title || video.description) && <figcaption><strong>{video.title}</strong>{video.description && <span>{video.description}</span>}</figcaption>}
  </figure>;
}

export default function AIContentRenderer({ content, onAction, onChoice }) {
  const blocks = useMemo(() => Array.isArray(content) ? content : [], [content]);
  if (!blocks.length) return null;
  return <div className="kai-rich-content">{blocks.map((block, index) => {
    if (!block || typeof block !== "object") return null;
    const key = `${block.type || "block"}-${index}`;
    if (block.type === "heading") return <h2 className="kai-rich-heading" key={key}>{block.text || block.content}</h2>;
    if (block.type === "subheading") return <h3 className="kai-rich-subheading" key={key}>{block.text || block.content}</h3>;
    if (block.type === "text") return <div key={key}><TextBlock value={block.text || block.content} /></div>;
    if (block.type === "bullets") return <ul className="kai-rich-bullet-list" key={key}>{(block.items || []).flatMap((item) => String(item).split(/\s+-\s+/).map((part) => part.trim()).filter(Boolean)).map((item, itemIndex) => <li key={`${itemIndex}-${item}`}><InlineText>{item}</InlineText></li>)}</ul>;
    if (block.type === "numbered") return <ol key={key}>{(block.items || []).map((item) => <li key={item}><InlineText>{item}</InlineText></li>)}</ol>;
    if (block.type === "terminal") return <SimulatedTerminal block={block} onAction={onAction} key={key} />;
    if (["code", "json", "xml"].includes(block.type)) return <CodeBlock block={{ ...block, language: block.language || block.type }} key={key} />;
    if (["copy", "copyable", "command", "config"].includes(block.type)) return <Copyable block={block} key={key} />;
    if (block.type === "diagram") return <Diagram block={block} key={key} />;
    if (block.type === "table") return <Table block={block} key={key} />;
    if (block.type === "choice") return <Choice block={block} onChoice={onChoice} key={key} />;
    if (block.type === "quiz") return <InteractiveQuiz block={block} onChoice={onChoice} key={key} />;
    if (block.type === "suggestions") return <Suggestions block={block} onAction={onAction} key={key} />;
    if (["quick_replies", "quickReplies"].includes(block.type)) return <QuickReplies block={block} onAction={onAction} key={key} />;
    if (block.type === "callout") return <Callout block={block} key={key} />;
    if (block.type === "quote") return <QuoteBlock block={block} key={key} />;
    if (block.type === "checklist") return <Checklist block={block} key={key} />;
    if (["comparison", "compare"].includes(block.type)) return <Comparison block={block} key={key} />;
    if (block.type === "timeline") return <Timeline block={block} key={key} />;
    if (block.type === "learning_path") return <LearningPath block={block} onAction={onAction} key={key} />;
    if (block.type === "tutorial") return <StepTutorial block={block} onAction={onAction} key={key} />;
    if (["equation", "math"].includes(block.type)) return <div className="kai-rich-equation" key={key}>{block.label && <span>{block.label}</span>}<code>{block.latex || block.expression || block.text}</code></div>;
    if (block.type === "progress") return <Progress block={block} key={key} />;
    if (["filetree", "file-tree"].includes(block.type)) return <FileTree block={block} key={key} />;
    if (block.type === "image") return <ImageBlock block={block} key={key} />;
    if (["preview", "embed"].includes(block.type)) return <Preview block={block} key={key} />;
    if (block.type === "video") return <KaiVideoPlayer video={block.video || block} aspectRatio={block.aspectRatio || "16 / 9"} key={key} />;
    if (block.type === "exercise") return <button type="button" className="kai-rich-exercise" onClick={() => onAction?.("openExercise", block)} key={key}>{block.title || "Try this exercise"} <ArrowRight size={15} /></button>;
    if (block.type === "action" && SAFE_ACTIONS.has(block.action)) return <button type="button" className="kai-rich-action" onClick={() => onAction?.(block.action, block)} key={key}>{block.label || "Continue"} <ArrowRight size={14} /></button>;
    return null;
  })}</div>;
}
