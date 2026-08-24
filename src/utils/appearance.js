const THEME_TOKEN_KEYS = [
  "background",
  "surface",
  "surfaceElevated",
  "border",
  "textPrimary",
  "textSecondary",
  "textMuted",
  "accent",
  "accentHover",
  "accentText",
  "success",
  "warning",
  "error",
  "info",
  "inputBackground",
  "inputBorder",
  "buttonBackground",
  "buttonText",
  "codeBackground",
  "codeText",
];

const THEME_DEFINITIONS = [
  {
    id: "default",
    name: "Classic Terminal",
    description: "Keep the current CodeLab Academy green developer design exactly as it is.",
    swatches: ["#030a06", "#0d1b15", "#39ff14"],
    tokens: {
      background: "#030a06",
      surface: "#0d1b15",
      surfaceElevated: "#12271d",
      border: "#244536",
      textPrimary: "#e8f5ed",
      textSecondary: "#b8d2c1",
      textMuted: "#8ea998",
      accent: "#39ff14",
      accentHover: "#7aff4b",
      accentText: "#06120a",
      success: "#39ff14",
      warning: "#fbbf24",
      error: "#ff7b7b",
      info: "#5ed7ff",
      inputBackground: "#08150f",
      inputBorder: "#3c7e50",
      buttonBackground: "#39ff14",
      buttonText: "#06120a",
      codeBackground: "#010503",
      codeText: "#d7f7df",
    },
  },
  {
    id: "midnight",
    name: "Midnight",
    description: "A focused dark developer theme with cool blue accents.",
    swatches: ["#0b1220", "#111c2e", "#60a5fa"],
    tokens: {
      background: "#0b1220",
      surface: "#111c2e",
      surfaceElevated: "#17243a",
      border: "#2e4769",
      textPrimary: "#eef4ff",
      textSecondary: "#bdcbea",
      textMuted: "#8d9bb2",
      accent: "#60a5fa",
      accentHover: "#93c5fd",
      accentText: "#06121d",
      success: "#4ade80",
      warning: "#fbbf24",
      error: "#fb7185",
      info: "#7dd3fc",
      inputBackground: "#0a1424",
      inputBorder: "#3b82f6",
      buttonBackground: "#60a5fa",
      buttonText: "#06121d",
      codeBackground: "#070c15",
      codeText: "#dbeafe",
    },
  },
  {
    id: "light",
    name: "Light",
    description: "A clean professional light theme for focused study and documentation.",
    swatches: ["#f4f8f5", "#ffffff", "#1e9f3c"],
    tokens: {
      background: "#f4f8f5",
      surface: "#ffffff",
      surfaceElevated: "#ffffff",
      border: "#b8cdbd",
      textPrimary: "#173520",
      textSecondary: "#365742",
      textMuted: "#5d7564",
      accent: "#1e9f3c",
      accentHover: "#168a32",
      accentText: "#06120a",
      success: "#1e9f3c",
      warning: "#a05a00",
      error: "#b42318",
      info: "#0b6ea8",
      inputBackground: "#ffffff",
      inputBorder: "#9bd2a5",
      buttonBackground: "#1e9f3c",
      buttonText: "#06120a",
      codeBackground: "#07110d",
      codeText: "#e7f7e9",
    },
  },
  {
    id: "cyber-purple",
    name: "Cyber Purple",
    description: "A dark technical theme with precise purple accents.",
    swatches: ["#110c1c", "#1b1430", "#c084fc"],
    tokens: {
      background: "#110c1c",
      surface: "#1b1430",
      surfaceElevated: "#241b3d",
      border: "#5a4290",
      textPrimary: "#f5efff",
      textSecondary: "#dccbfa",
      textMuted: "#ac9bc4",
      accent: "#c084fc",
      accentHover: "#d8b4fe",
      accentText: "#180b2b",
      success: "#86efac",
      warning: "#fbbf24",
      error: "#fb7185",
      info: "#a78bfa",
      inputBackground: "#130d22",
      inputBorder: "#7c3aed",
      buttonBackground: "#c084fc",
      buttonText: "#180b2b",
      codeBackground: "#0a0612",
      codeText: "#f3e8ff",
    },
  },
  {
    id: "matrix",
    name: "Matrix",
    description: "A deeper terminal-inspired black and green theme for lab work.",
    swatches: ["#020803", "#07140a", "#39ff14"],
    tokens: {
      background: "#020803",
      surface: "#07140a",
      surfaceElevated: "#0c2110",
      border: "#1e6b36",
      textPrimary: "#d9ffdf",
      textSecondary: "#9ee9ab",
      textMuted: "#70b27f",
      accent: "#39ff14",
      accentHover: "#75ff5a",
      accentText: "#021006",
      success: "#39ff14",
      warning: "#eab308",
      error: "#fb7185",
      info: "#67e8f9",
      inputBackground: "#031008",
      inputBorder: "#2e9f48",
      buttonBackground: "#39ff14",
      buttonText: "#021006",
      codeBackground: "#000a03",
      codeText: "#c7ffc9",
    },
  },
  {
    id: "ocean",
    name: "Ocean",
    description: "A dark blue and cyan theme for calm, clear technical work.",
    swatches: ["#07151d", "#0d2230", "#22d3ee"],
    tokens: {
      background: "#07151d",
      surface: "#0d2230",
      surfaceElevated: "#123246",
      border: "#28607a",
      textPrimary: "#e8fbff",
      textSecondary: "#b7dce7",
      textMuted: "#86afbf",
      accent: "#22d3ee",
      accentHover: "#67e8f9",
      accentText: "#03212a",
      success: "#4ade80",
      warning: "#fbbf24",
      error: "#fb7185",
      info: "#38bdf8",
      inputBackground: "#081b27",
      inputBorder: "#2e8aa8",
      buttonBackground: "#22d3ee",
      buttonText: "#03212a",
      codeBackground: "#031017",
      codeText: "#d6f9ff",
    },
  },
  {
    id: "sunset",
    name: "Sunset",
    description: "A dark warm theme with orange accents and comfortable contrast.",
    swatches: ["#1a0d0a", "#28150f", "#ff9f43"],
    tokens: {
      background: "#1a0d0a",
      surface: "#28150f",
      surfaceElevated: "#3a1d12",
      border: "#7a3c22",
      textPrimary: "#fff4ea",
      textSecondary: "#f4c7ae",
      textMuted: "#c69f8b",
      accent: "#ff9f43",
      accentHover: "#ffc070",
      accentText: "#2a1105",
      success: "#86efac",
      warning: "#ffd166",
      error: "#fb7185",
      info: "#fdba74",
      inputBackground: "#1e0f0b",
      inputBorder: "#a85a2b",
      buttonBackground: "#ff9f43",
      buttonText: "#2a1105",
      codeBackground: "#0d0704",
      codeText: "#fff0df",
    },
  },
  {
    id: "clean",
    name: "Clean Study",
    description: "A calmer study layout with softer surfaces and lighter borders.",
    swatches: ["#f3fbf4", "#ffffff", "#1e9f3c"],
    tokens: {
      background: "#f3fbf4",
      surface: "#ffffff",
      surfaceElevated: "#ffffff",
      border: "#b8d8bf",
      textPrimary: "#173520",
      textSecondary: "#3f6149",
      textMuted: "#5d7564",
      accent: "#1e9f3c",
      accentHover: "#168a32",
      accentText: "#06120a",
      success: "#1e9f3c",
      warning: "#a05a00",
      error: "#b42318",
      info: "#0b6ea8",
      inputBackground: "#ffffff",
      inputBorder: "#9bd2a5",
      buttonBackground: "#1e9f3c",
      buttonText: "#06120a",
      codeBackground: "#07110d",
      codeText: "#e7f7e9",
    },
  },
  {
    id: "forest",
    name: "Forest Focus",
    description: "A deeper green atmosphere with warm sage highlights and focused reading surfaces.",
    swatches: ["#071a12", "#123323", "#8ee694"],
    tokens: {
      background: "#071a12",
      surface: "#0b2417",
      surfaceElevated: "#123323",
      border: "#3c7e50",
      textPrimary: "#effff0",
      textSecondary: "#c9f5cf",
      textMuted: "#a7c4ad",
      accent: "#8ee694",
      accentHover: "#b4ffb8",
      accentText: "#06240d",
      success: "#8ee694",
      warning: "#f5c96a",
      error: "#ff9a9a",
      info: "#8bdff2",
      inputBackground: "#0b2417",
      inputBorder: "#4d9960",
      buttonBackground: "#a0f4a4",
      buttonText: "#06240d",
      codeBackground: "#071a12",
      codeText: "#effff0",
    },
  },
  {
    id: "contrast",
    name: "High Contrast",
    description: "Stronger text, borders, and focus states for clearer reading and accessibility.",
    swatches: ["#000000", "#ffffff", "#39ff14"],
    tokens: {
      background: "#000000",
      surface: "#000000",
      surfaceElevated: "#000000",
      border: "#ffffff",
      textPrimary: "#ffffff",
      textSecondary: "#ffffff",
      textMuted: "#ffffff",
      accent: "#39ff14",
      accentHover: "#8aff6f",
      accentText: "#000000",
      success: "#39ff14",
      warning: "#ffd166",
      error: "#ff7b7b",
      info: "#7dd3fc",
      inputBackground: "#000000",
      inputBorder: "#ffffff",
      buttonBackground: "#39ff14",
      buttonText: "#000000",
      codeBackground: "#000000",
      codeText: "#ffffff",
    },
  },
];

function hexToRgb(hex) {
  const normalized = hex.replace("#", "");
  const value = normalized.length === 3
    ? normalized.split("").map((part) => part + part).join("")
    : normalized;
  const number = Number.parseInt(value, 16);
  return {
    r: (number >> 16) & 255,
    g: (number >> 8) & 255,
    b: number & 255,
  };
}

function relativeLuminance(hex) {
  const { r, g, b } = hexToRgb(hex);
  const channels = [r, g, b].map((channel) => {
    const normalized = channel / 255;
    return normalized <= 0.03928
      ? normalized / 12.92
      : ((normalized + 0.055) / 1.055) ** 2.4;
  });
  return (0.2126 * channels[0]) + (0.7152 * channels[1]) + (0.0722 * channels[2]);
}

export function contrastRatio(foreground, background) {
  const lighter = Math.max(relativeLuminance(foreground), relativeLuminance(background));
  const darker = Math.min(relativeLuminance(foreground), relativeLuminance(background));
  return (lighter + 0.05) / (darker + 0.05);
}

export function validateThemeTokens(tokens) {
  const missing = THEME_TOKEN_KEYS.filter((key) => !tokens?.[key]);
  if (missing.length > 0) {
    return { valid: false, missing, checks: [] };
  }

  const checks = [
    ["textPrimary", "background", 4.5],
    ["textSecondary", "background", 4.5],
    ["textMuted", "background", 4.5],
    ["textPrimary", "surface", 4.5],
    ["textPrimary", "surfaceElevated", 4.5],
    ["accentText", "accent", 4.5],
    ["buttonText", "buttonBackground", 4.5],
    ["codeText", "codeBackground", 4.5],
  ].map(([foreground, background, minimum]) => {
    const ratio = contrastRatio(tokens[foreground], tokens[background]);
    return { foreground, background, minimum, ratio, passes: ratio >= minimum };
  });

  return {
    valid: checks.every((check) => check.passes),
    missing: [],
    checks,
  };
}

const validatedDefinitions = THEME_DEFINITIONS.map((definition) => ({
  ...definition,
  validation: validateThemeTokens(definition.tokens),
}));

const invalidThemeIds = validatedDefinitions
  .filter((definition) => !definition.validation.valid)
  .map((definition) => definition.id);

if (invalidThemeIds.length > 0 && typeof console !== "undefined") {
  console.error("CodeLab appearance palettes failed contrast validation:", invalidThemeIds);
}

export const APPEARANCE_PRESETS = validatedDefinitions;
export const DEFAULT_APPEARANCE = "default";
const validPresetIds = new Set(
  APPEARANCE_PRESETS
    .filter((preset) => preset.validation.valid)
    .map((preset) => preset.id)
);

export function normalizeAppearance(value) {
  return validPresetIds.has(value) ? value : DEFAULT_APPEARANCE;
}

export function appearanceStorageKey(userId) {
  return userId ? `codelabAppearance:${userId}` : "codelabAppearance:guest";
}

function cssTokenName(key) {
  return `--theme-${key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}`;
}

export function applyAppearance(value) {
  const presetId = normalizeAppearance(value);
  const preset = APPEARANCE_PRESETS.find((item) => item.id === presetId);
  const root = document.documentElement;

  if (!preset?.validation.valid) {
    return applyAppearance(DEFAULT_APPEARANCE);
  }

  root.dataset.appearance = preset.id;
  Object.entries(preset.tokens).forEach(([key, tokenValue]) => {
    root.style.setProperty(cssTokenName(key), tokenValue);
  });
  return preset.id;
}
