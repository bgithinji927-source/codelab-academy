import fs from "node:fs";
import postcss from "postcss";

const inputPath = process.argv[2];
const outputPath = process.argv[3];

if (!inputPath || !outputPath) {
  throw new Error("Usage: node scripts/scope-dark-theme.mjs <input.css> <output.css>");
}

const source = fs.readFileSync(inputPath, "utf8");
const root = postcss.parse(source);

function isKeyframes(node) {
  return node.parent?.type === "atrule" && /keyframes$/i.test(node.parent.name || "");
}

root.walkRules((rule) => {
  if (isKeyframes(rule)) return;

  const selectors = rule.selectors || [];
  rule.selectors = selectors.map((selector) => {
    const trimmed = selector.trim();
    if (!trimmed) return trimmed;
    if (trimmed === ":root") return 'html[data-theme="dark"]:not([data-appearance-mode="light"])';
    if (trimmed.startsWith("html[data-theme=")) return trimmed;
    if (trimmed.startsWith("html")) return `html[data-theme="dark"]:not([data-appearance-mode="light"])${trimmed.slice(4)}`;
    return `html[data-theme="dark"]:not([data-appearance-mode="light"]) ${trimmed}`;
  });
});

fs.writeFileSync(outputPath, root.toString());
