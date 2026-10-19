const PlatformSettings = require("../models/PlatformSettings");

const PROVIDERS = {
  groq: {
    name: "groq",
    url: "https://api.groq.com/openai/v1/chat/completions",
    keyEnv: "GROQ_API_KEY",
    modelEnv: "GROQ_MODEL",
    defaultModel: "openai/gpt-oss-120b",
  },
  openrouter: {
    name: "openrouter",
    url: "https://openrouter.ai/api/v1/chat/completions",
    keyEnv: "OPENROUTER_API_KEY",
    modelEnv: "OPENROUTER_MODEL",
    defaultModel: "openai/gpt-oss-120b",
  },
};

function getAIProvider(overrides = {}) {
  const requested = String(overrides.provider || process.env.AI_PROVIDER || "auto").trim().toLowerCase();
  if (requested !== "auto" && !PROVIDERS[requested]) {
    throw new Error(`Unsupported AI provider: ${requested}. Use auto, groq, or openrouter.`);
  }

  const candidates = requested === "auto" ? ["groq", "openrouter"] : [requested];
  const providerName = candidates.find((name) => process.env[PROVIDERS[name].keyEnv]);
  const selectedName = providerName || candidates[0];
  const provider = PROVIDERS[selectedName];
  const configuredModel = String(overrides.model || "").trim();
  const model = configuredModel || process.env[provider.modelEnv] || provider.defaultModel;

  return {
    ...provider,
    key: process.env[provider.keyEnv] || "",
    model,
    configured: Boolean(process.env[provider.keyEnv]),
    expectedKey: candidates.map((name) => PROVIDERS[name].keyEnv).join(" or "),
  };
}

// Routes keep this object reference and refresh it from MongoDB before requests,
// allowing an administrator to change provider/model without restarting Node.
const activeAIProvider = getAIProvider();

async function refreshAIProvider() {
  let settings = null;
  try {
    if (PlatformSettings.db.readyState === 1) {
      settings = await PlatformSettings.findOne({ _id: "platform" }).select("aiProvider aiModel").lean();
    }
  } catch (error) {
    console.error("AI provider settings lookup error:", error.message);
  }
  const next = getAIProvider({ provider: settings?.aiProvider, model: settings?.aiModel });
  Object.assign(activeAIProvider, next);
  return activeAIProvider;
}

function getAIRequestHeaders(provider = activeAIProvider) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${provider.key}`,
  };
  if (provider.name === "openrouter") {
    if (process.env.OPENROUTER_SITE_URL) headers["HTTP-Referer"] = process.env.OPENROUTER_SITE_URL;
    if (process.env.OPENROUTER_APP_NAME) headers["X-Title"] = process.env.OPENROUTER_APP_NAME;
  }
  return headers;
}

module.exports = { activeAIProvider, getAIProvider, refreshAIProvider, getAIRequestHeaders };
