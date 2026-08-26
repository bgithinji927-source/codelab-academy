export const KAI_BACKGROUND_OPTIONS = [
  {
    id: "violet-aurora",
    name: "Violet Aurora",
    description: "A dark violet AI atmosphere with a soft central glow.",
    swatches: ["#05030d", "#1c0f3d", "#8b5cf6"],
  },
  {
    id: "circuit-night",
    name: "Circuit Night",
    description: "A deep midnight backdrop with subtle digital circuit lines.",
    swatches: ["#020611", "#101b38", "#4f8cff"],
  },
  {
    id: "neon-orbit",
    name: "Neon Orbit",
    description: "An original AI-avatar wallpaper with violet and electric-blue light.",
    swatches: ["#02030a", "#12133a", "#7d70ff"],
  },
  {
    id: "terminal-green",
    name: "Terminal Green",
    description: "A focused developer backdrop with restrained green energy.",
    swatches: ["#020804", "#0b2415", "#39ff14"],
  },
  {
    id: "soft-study",
    name: "Soft Study",
    description: "A calm light backdrop for a quieter learning session.",
    swatches: ["#f8f7ff", "#ebe5ff", "#7040e8"],
  },
];

export const DEFAULT_KAI_BACKGROUND = "neon-orbit";
const validBackgroundIds = new Set(KAI_BACKGROUND_OPTIONS.map((option) => option.id));

export function normalizeKaiBackground(value) {
  return validBackgroundIds.has(value) ? value : DEFAULT_KAI_BACKGROUND;
}

export function kaiBackgroundStorageKey(userId) {
  return userId ? `codelabKaiBackground:${userId}` : "codelabKaiBackground:guest";
}
