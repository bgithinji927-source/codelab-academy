export const AUTHORED_DELIVERY_VERSION = 1;

export const AUTHORED_BLOCK_TYPES = new Set([
  "heading",
  "subheading",
  "text",
  "bullets",
  "numbered",
  "code",
  "terminal",
  "json",
  "xml",
  "copy",
  "copyable",
  "command",
  "config",
  "diagram",
  "table",
  "choice",
  "quiz",
  "suggestions",
  "callout",
  "quote",
  "checklist",
  "comparison",
  "compare",
  "timeline",
  "equation",
  "math",
  "quick_replies",
  "quickReplies",
  "progress",
  "filetree",
  "file-tree",
  "image",
  "preview",
  "embed",
  "video",
  "exercise",
  "action",
  "learning_path",
  "tutorial",
]);

function normalizeBlock(block) {
  if (!block || typeof block !== "object" || Array.isArray(block)) return null;
  if (block.type === "diagram" || block.diagramType) {
    if (!Array.isArray(block.nodes) || !Array.isArray(block.edges)) return null;
    return { ...block, type: "diagram" };
  }
  return AUTHORED_BLOCK_TYPES.has(block.type) ? block : null;
}

function normalizeSection(section, index) {
  if (!section || typeof section !== "object" || Array.isArray(section)) return null;
  const blocks = Array.isArray(section.blocks)
    ? section.blocks.map(normalizeBlock).filter(Boolean)
    : [];
  if (!blocks.length) return null;
  return {
    id: String(section.id || `section-${index + 1}`),
    title: String(section.title || `Section ${index + 1}`),
    description: section.description ? String(section.description) : "",
    blocks,
    required: section.required !== false,
  };
}

/**
 * Returns a safe, renderable authored delivery or null for legacy lessons.
 * The catalog remains backward compatible: only an explicit authored delivery
 * opts a lesson into deterministic delivery.
 */
export function normalizeAuthoredDelivery(lesson) {
  const delivery = lesson?.delivery;
  if (!delivery || delivery.type !== "authored" || !Array.isArray(delivery.sections)) return null;
  const sections = delivery.sections.map(normalizeSection).filter(Boolean);
  if (!sections.length) return null;
  return {
    type: "authored",
    version: Number(delivery.version) || AUTHORED_DELIVERY_VERSION,
    intro: delivery.intro ? String(delivery.intro) : "",
    sections,
    assessment: delivery.assessment && typeof delivery.assessment === "object"
      ? delivery.assessment
      : null,
  };
}

function blockToContext(block) {
  if (!block || typeof block !== "object") return "";
  if (["text", "heading", "subheading", "quote", "callout"].includes(block.type)) {
    return String(block.text || block.content || block.description || block.title || "");
  }
  if (["bullets", "numbered"].includes(block.type)) {
    return (Array.isArray(block.items) ? block.items : []).map((item) => `- ${typeof item === "string" ? item : item.text || item.label || ""}`).join("\n");
  }
  if (["code", "json", "xml", "copy", "copyable", "command", "config"].includes(block.type)) {
    return String(block.code || block.content || block.text || "");
  }
  if (block.type === "tutorial") {
    return (Array.isArray(block.steps) ? block.steps : []).map((step) => `${step.title || "Step"}: ${step.description || step.content || ""}\n${step.code || ""}`).join("\n");
  }
  if (block.title) return String(block.title);
  return "";
}

export function authoredDeliveryToContext(delivery) {
  if (!delivery) return "";
  return delivery.sections
    .map((section) => [section.title, section.description, ...section.blocks.map(blockToContext)].filter(Boolean).join("\n"))
    .join("\n\n")
    .trim();
}
