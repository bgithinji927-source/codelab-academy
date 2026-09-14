import { useEffect, useMemo, useState } from "react";
import Editor from "@monaco-editor/react";
import { Play, RotateCcw, Copy, Check, Lightbulb, AlertTriangle, Info, ArrowRight, Quote, CheckSquare, Clock, ExternalLink } from "lucide-react";
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
    <Editor height={Math.min(420, Math.max(150, value.split("\n").length * 21 + 24))} language={language === "py" ? "python" : language} value={value} onChange={(next) => setValue(next || "")} theme="vs-dark" options={{ minimap: { enabled: false }, lineNumbers: "on", fontSize: 14, padding: { top: 12, bottom: 12 }, scrollBeyondLastLine: false }} />
    {output && <pre className="kai-rich-code-output">{output}</pre>}
  </section>;
}

function Diagram({ block }) {
  const nodes = Array.isArray(block.data?.nodes) ? block.data.nodes : [];
  const edges = Array.isArray(block.data?.edges) ? block.data.edges : [];
  const nodeById = new Map(nodes.map((node, index) => [String(node.id || index), { ...node, index }]));
  const width = 720;
  const height = Math.max(180, nodes.length * 78);
  return <div className="kai-rich-diagram" role="img" aria-label={block.label || "Kai diagram"}>
    <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid meet">
      <defs><marker id="kai-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="currentColor" /></marker></defs>
      {edges.map((edge, index) => { const from = nodeById.get(String(edge.from)); const to = nodeById.get(String(edge.to)); if (!from || !to) return null; const x = width / 2; const y1 = from.index * 78 + 56; const y2 = to.index * 78 + 8; return <line key={index} x1={x} y1={y1} x2={x} y2={y2} stroke="currentColor" strokeWidth="2" markerEnd="url(#kai-arrow)" />; })}
      {nodes.map((node, index) => <g key={node.id || index}><rect x="120" y={index * 78 + 8} width="480" height="48" rx="12" /><text x="360" y={index * 78 + 38} textAnchor="middle">{node.label || node.title || node.id}</text></g>)}
    </svg>
  </div>;
}

function Choice({ block, onChoice }) {
  const [selected, setSelected] = useState(null);
  return <section className="kai-rich-choice"><h3>{block.question}</h3><div className="kai-choice-options">{(block.options || []).map((option) => <button type="button" key={option} className={selected === option ? "selected" : ""} onClick={() => { setSelected(option); onChoice?.(option); }}>{option}</button>)}</div></section>;
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
      {video.playerType === "embed" ? <iframe src={video.playbackUrl} title={video.title || "Kai video"} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /> : playbackUrl ? <video src={playbackUrl} controls playsInline preload="metadata" referrerPolicy="no-referrer" /> : <div className="kai-rich-video-status">{error || "Preparing secure video playback..."}</div>}
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
    if (block.type === "heading") return <h2 className="kai-rich-heading" key={key}>{block.text}</h2>;
    if (block.type === "subheading") return <h3 className="kai-rich-subheading" key={key}>{block.text}</h3>;
    if (block.type === "text") return <p className="kai-rich-text" key={key}><InlineText>{block.text}</InlineText></p>;
    if (block.type === "bullets") return <ul key={key}>{(block.items || []).map((item) => <li key={item}><InlineText>{item}</InlineText></li>)}</ul>;
    if (block.type === "numbered") return <ol key={key}>{(block.items || []).map((item) => <li key={item}><InlineText>{item}</InlineText></li>)}</ol>;
    if (["code", "terminal", "json", "xml"].includes(block.type)) return <CodeBlock block={{ ...block, language: block.language || (block.type === "terminal" ? "shell" : block.type) }} key={key} />;
    if (["copy", "copyable", "command", "config"].includes(block.type)) return <Copyable block={block} key={key} />;
    if (block.type === "diagram") return <Diagram block={block} key={key} />;
    if (block.type === "table") return <Table block={block} key={key} />;
    if (block.type === "choice") return <Choice block={block} onChoice={onChoice} key={key} />;
    if (block.type === "quiz") return <Choice block={block} onChoice={onChoice} key={key} />;
    if (block.type === "callout") return <Callout block={block} key={key} />;
    if (block.type === "quote") return <QuoteBlock block={block} key={key} />;
    if (block.type === "checklist") return <Checklist block={block} key={key} />;
    if (["comparison", "compare"].includes(block.type)) return <Comparison block={block} key={key} />;
    if (block.type === "timeline") return <Timeline block={block} key={key} />;
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
