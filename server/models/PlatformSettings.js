const mongoose = require("mongoose");

const platformSettingsSchema = new mongoose.Schema(
  {
    _id: { type: String, default: "platform" },
    academyName: { type: String, default: "CodeLab Academy" },
    challengeWindowHours: { type: Number, default: 24 },
    defaultChallengeXP: { type: Number, default: 10 },
    dailyChallengesEnabled: { type: Boolean, default: true },
    aiProvider: { type: String, enum: ["auto", "groq", "openrouter"], default: "auto" },
    aiModel: { type: String, default: "" },
    kaiBackground: {
      type: String,
      enum: ["violet-aurora", "circuit-night", "neon-orbit", "terminal-green", "soft-study"],
      default: "neon-orbit",
    },
    kaiBackgroundImageFileId: mongoose.Schema.Types.ObjectId,
    kaiBackgroundImageFilename: String,
    kaiBackgroundImageMimeType: String,
    kaiBackgroundImageUpdatedAt: Date,
    updatedBy: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("PlatformSettings", platformSettingsSchema);
