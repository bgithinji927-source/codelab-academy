const DESIGN_DEFINITIONS = [
  {
    id: "classic",
    name: "Classic Lab",
    description: "Keep the current CodeLab Academy layout with the full learning-library sidebar.",
    tags: ["Current layout", "Full sidebar", "Balanced workspace"],
  },
  {
    id: "focus",
    name: "Focus Workspace",
    description: "A calmer study layout with a compact rail, generous spacing, and a centered workspace.",
    tags: ["Study first", "Spacious", "Low distraction"],
  },
  {
    id: "rail",
    name: "Developer Rail",
    description: "A compact developer-console layout that gives the learning workspace more room.",
    tags: ["Icon navigation", "More workspace", "Developer feel"],
  },
  {
    id: "canvas",
    name: "Open Canvas",
    description: "A wide horizontal layout that puts library navigation above the learning workspace.",
    tags: ["Wide canvas", "Quick scanning", "Flexible navigation"],
  },
];

export const DESIGN_PRESETS = DESIGN_DEFINITIONS;
export const DEFAULT_DESIGN = "classic";

const validDesignIds = new Set(DESIGN_PRESETS.map((preset) => preset.id));

export function normalizeDesign(value) {
  return validDesignIds.has(value) ? value : DEFAULT_DESIGN;
}

export function designStorageKey(userId) {
  return userId ? `codelabDesign:${userId}` : "codelabDesign:guest";
}

export function applyDesign(value) {
  const designId = normalizeDesign(value);
  if (typeof document !== "undefined") {
    document.documentElement.dataset.design = designId;
  }
  return designId;
}
