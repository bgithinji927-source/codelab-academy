export const APPEARANCE_PRESETS = [
  {
    id: "default",
    name: "Classic Terminal",
    description: "Keep the current CodeLab Academy design exactly as it is.",
    swatches: ["#030a06", "#0d1b15", "#39ff14"],
  },
  {
    id: "clean",
    name: "Clean Study",
    description: "A calmer study layout with softer surfaces, lighter borders, and less glow.",
    swatches: ["#f3fbf4", "#ffffff", "#1e9f3c"],
  },
  {
    id: "forest",
    name: "Forest Focus",
    description: "A deeper green atmosphere with warm sage highlights and focused reading surfaces.",
    swatches: ["#071a12", "#123323", "#8ee694"],
  },
  {
    id: "contrast",
    name: "High Contrast",
    description: "Stronger text, borders, and focus states for clearer reading and accessibility.",
    swatches: ["#000000", "#ffffff", "#39ff14"],
  },
];

export const DEFAULT_APPEARANCE = "default";
const validPresetIds = new Set(APPEARANCE_PRESETS.map((preset) => preset.id));

export function normalizeAppearance(value) {
  return validPresetIds.has(value) ? value : DEFAULT_APPEARANCE;
}

export function appearanceStorageKey(userId) {
  return userId ? `codelabAppearance:${userId}` : "codelabAppearance:guest";
}

export function applyAppearance(value) {
  const preset = normalizeAppearance(value);
  document.documentElement.dataset.appearance = preset;
  return preset;
}
