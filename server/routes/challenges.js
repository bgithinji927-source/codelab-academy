const express = require("express");
const Challenge = require("../models/Challenge");
const User = require("../models/User");
const { ensureDailyChallengeForUser } = require("../lib/challenges");
const ensureAuth = require("../middleware/ensureAuth");

const router = express.Router();

// ADMIN: create/list challenges (protect later with isAdmin)
router.post("/", ensureAuth, async (req, res) => {
  try {
    const ch = await Challenge.create(req.body);
    return res.json({ success: true, challenge: ch });
  } catch (err) {
    console.error("Create challenge error:", err);
    return res.status(500).json({ success: false, message: "Failed to create challenge" });
  }
});

router.get("/", ensureAuth, async (req, res) => {
  try {
    const list = await Challenge.find({}).lean();
    return res.json({ success: true, challenges: list });
  } catch (err) {
    console.error("List challenges error:", err);
    return res.status(500).json({ success: false });
  }
});

// GET today's assigned challenge
router.get("/today", ensureAuth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    await ensureDailyChallengeForUser(user);

    const challenge = await Challenge.findById(user.dailyChallenge.challengeId).lean();
    if (!challenge) return res.status(404).json({ success: false, message: "No challenge available" });

    // Never send canonical answer to client
    const { canonicalAnswer, ...publicChallenge } = challenge;
    // Normalize some fields to match frontend expectations
    publicChallenge.id = String(publicChallenge._id);
    publicChallenge.xp = publicChallenge.xpReward || publicChallenge.xp || 0;

    return res.json({ success: true, challenge: publicChallenge, assigned: user.dailyChallenge });
  } catch (err) {
    console.error("Get today's challenge error:", err);
    return res.status(500).json({ success: false });
  }
});

// POST submit answer for today's assigned challenge
router.post("/submit", ensureAuth, async (req, res) => {
  try {
    const { challengeId, answer } = req.body;
    if (!challengeId) return res.status(400).json({ success: false, message: "challengeId required" });

    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    const today = new Date().toISOString().slice(0, 10);
    if (!user.dailyChallenge || user.dailyChallenge.date !== today || String(user.dailyChallenge.challengeId) !== String(challengeId)) {
      return res.status(400).json({ success: false, message: "Challenge not assigned or stale" });
    }

    if (user.dailyChallenge.completed) {
      return res.json({ success: true, alreadyCompleted: true });
    }

    const challenge = await Challenge.findById(challengeId);
    if (!challenge) return res.status(404).json({ success: false, message: "Challenge not found" });

    // grading logic
    let correct = false;
    if (challenge.type === "mcq") {
      correct = String(answer) === String(challenge.canonicalAnswer);
    } else if (challenge.type === "regex") {
      try {
        const rx = new RegExp(challenge.canonicalAnswer);
        correct = rx.test(String(answer || ""));
      } catch (e) {
        correct = false;
      }
    } else if (challenge.type === "short_answer") {
      const normalize = (s) => String(s || "").trim().toLowerCase();
      correct = normalize(answer) === normalize(challenge.canonicalAnswer);
    } else if (challenge.type === "code") {
      // For now mark code as pending review (do not auto-award)
      correct = false;
    }

    if (correct) {
      // atomic award
      const updated = await User.findOneAndUpdate(
        { _id: user._id, "dailyChallenge.challengeId": String(challengeId), "dailyChallenge.completed": false },
        {
          $inc: { xp: challenge.xpReward || Number(process.env.CHALLENGE_XP_DEFAULT) || 5, dailyChallengesCompleted: 1, "dailyChallenge.attempts": 1 },
          $set: { "dailyChallenge.completed": true, "dailyChallenge.completedAt": new Date(), "dailyChallenge.lastAnswer": String(answer) }
        },
        { new: true }
      );

      if (!updated) {
        // race condition or already updated
        return res.json({ success: true, alreadyCompleted: true });
      }

      return res.json({ success: true, correct: true, awardedXP: challenge.xpReward || Number(process.env.CHALLENGE_XP_DEFAULT) || 5 });
    } else {
      // increment attempts and save lastAnswer
      await User.updateOne({ _id: user._id }, { $inc: { "dailyChallenge.attempts": 1 }, $set: { "dailyChallenge.lastAnswer": String(answer) } });
      return res.json({ success: true, correct: false, attempts: (user.dailyChallenge.attempts || 0) + 1 });
    }
  } catch (err) {
    console.error("Submit challenge error:", err);
    return res.status(500).json({ success: false, message: "Submission failed" });
  }
});

module.exports = router;
