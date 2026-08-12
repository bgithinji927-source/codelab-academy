const mongoose = require("mongoose");

const challengeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ["mcq","short_answer","regex","code"], default: "short_answer" },
  prompt: { type: String, required: true },
  // mcq choices: [{ id: 'a', label: '...' }]
  choices: [{ id: String, label: String }],
  // canonicalAnswer:
  // - mcq: choice id (string)
  // - regex: string with regex pattern
  // - short_answer: string
  // - code: object with tests (later)
  canonicalAnswer: mongoose.Schema.Types.Mixed,
  xpReward: { type: Number, default: Number(process.env.CHALLENGE_XP_DEFAULT) || 5 },
  active: { type: Boolean, default: true },
  difficulty: { type: String, default: "easy" }
}, { timestamps: true });

module.exports = mongoose.model("Challenge", challengeSchema);
