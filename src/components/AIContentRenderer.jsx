import { useMemo, useState } from "react";
import Editor from "@monaco-editor/react";
import { Play, RotateCcw, Copy, Check, Lightbulb, AlertTriangle, Info, ArrowRight } from "lucide-react";
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
  return <span>{String(children || "").split(/(`[^`]+`|\*\*[^*]+\*\*)/g).map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) return <code key={index}>{part.slice(1, -1)}</code>;
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={index}>{part.slice(2, -2)}</strong>;
    return <span key={index}>{part}</span>;
  })}</span>;
}

function CodeBlock({ block }) {
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
    if (block.type === "code") return <CodeBlock block={block} key={key} />;
    if (block.type === "diagram") return <Diagram block={block} key={key} />;
    if (block.type === "table") return <Table block={block} key={key} />;
    if (block.type === "choice") return <Choice block={block} onChoice={onChoice} key={key} />;
    if (block.type === "callout") return <Callout block={block} key={key} />;
    if (block.type === "exercise") return <button type="button" className="kai-rich-exercise" onClick={() => onAction?.("openExercise", block)} key={key}>{block.title || "Try this exercise"} <ArrowRight size={15} /></button>;
    if (block.type === "action" && SAFE_ACTIONS.has(block.action)) return <button type="button" className="kai-rich-action" onClick={() => onAction?.(block.action, block)} key={key}>{block.label || "Continue"} <ArrowRight size={14} /></button>;
    return null;
  })}</div>;
}
