const mongoose = require("mongoose");

const platformSettingsSchema = new mongoose.Schema(
  {
    _id: { type: String, default: "platform" },
    academyName: { type: String, default: "CodeLab Academy" },
    challengeWindowHours: { type: Number, default: 24 },
    defaultChallengeXP: { type: Number, default: 10 },
    dailyChallengesEnabled: { type: Boolean, default: true },
    kaiBackground: {
      type: String,
      enum: ["violet-aurora", "circuit-night", "neon-orbit", "terminal-green", "soft-study"],
      default: "neon-orbit",
    },
    updatedBy: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("PlatformSettings", platformSettingsSchema);
