const crypto = require("crypto");
const express = require("express");
const Challenge = require("../models/Challenge");
const User = require("../models/User");
const {
  MAX_CHALLENGE_ATTEMPTS,
  ensureChallengeBank,
  ensureDailyChallengeForUser,
  getPlatformSettings,
  gradeChallengeAnswer,
  hasActiveAssignment,
} = require("../lib/challenges");
const ensureAuth = require("../middleware/ensureAuth");
const ensureAdmin = require("../middleware/ensureAdmin");

const router = express.Router();

function hashViewToken(token) {
  return crypto.createHash("sha256").update(String(token)).digest("hex");
}

function serializeAssignment(assignment) {
  if (!assignment) return null;

  const plain = typeof assignment.toObject === "function"
    ? assignment.toObject()
    : assignment;
  const attempts = Number(plain.attempts || 0);

  return {
    date: plain.date,
    challengeId: plain.challengeId,
    assignedAt: plain.assignedAt,
    expiresAt: plain.expiresAt,
    attempts,
    maxAttempts: MAX_CHALLENGE_ATTEMPTS,
    attemptsRemaining: Math.max(0, MAX_CHALLENGE_ATTEMPTS - attempts),
    completed: Boolean(plain.completed),
    closed: Boolean(plain.closed),
    completedAt: plain.completedAt,
    closedAt: plain.closedAt,
    lastResult: plain.lastResult,
    viewed: Boolean(plain.viewedAt),
    oneTimeView: true,
  };
}

function serializeChallenge(challenge) {
  if (!challenge) return null;

  const plain = typeof challenge.toObject === "function"
    ? challenge.toObject()
    : challenge;
  const { canonicalAnswer, ...publicChallenge } = plain;

  return {
    ...publicChallenge,
    id: String(publicChallenge._id || publicChallenge.id),
    xp: publicChallenge.xpReward || publicChallenge.xp || 0,
  };
}

// ADMIN: create/list challenges. Admin authorization can be tightened later.
router.post("/", ensureAuth, ensureAdmin, async (req, res) => {
  try {
    const challenge = await Challenge.create(req.body);
    return res.json({ success: true, challenge: serializeChallenge(challenge) });
  } catch (err) {
    console.error("Create challenge error:", err);
    return res.status(500).json({ success: false, message: "Failed to create challenge" });
  }
});

router.get("/", ensureAuth, ensureAdmin, async (req, res) => {
  try {
    const list = await Challenge.find({}).lean();
    return res.json({ success: true, challenges: list.map(serializeChallenge) });
  } catch (err) {
    console.error("List challenges error:", err);
    return res.status(500).json({ success: false });
  }
});

// GET the learner's current 24-hour challenge. A new one is assigned on the
// first visit after the previous 24-hour assignment expires.
router.get("/today", ensureAuth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    const platformSettings = await getPlatformSettings();
    if (platformSettings.dailyChallengesEnabled === false) {
      return res.json({
        success: true,
        disabled: true,
        challenge: null,
        assigned: null,
        message: "Daily challenges are temporarily paused by an administrator.",
      });
    }

    await ensureDailyChallengeForUser(user);

    const challenge = await Challenge.findById(user.dailyChallenge.challengeId).lean();
    if (!challenge) return res.status(404).json({ success: false, message: "No challenge available" });

    const viewed = Boolean(user.dailyChallenge.viewedAt);
    return res.json({
      success: true,
      challenge: null,
      assigned: serializeAssignment(user.dailyChallenge),
      maxAttempts: MAX_CHALLENGE_ATTEMPTS,
      oneTimeViewAvailable: !viewed,
      viewed,
      message: viewed
        ? "This challenge has already been viewed and cannot be reopened during this cycle."
        : "This challenge can be opened once."
    });
  } catch (err) {
    console.error("Get today's challenge error:", err);
    return res.status(500).json({ success: false, message: "Could not load today's challenge" });
  }
});

// Open the current challenge exactly once. The returned token is kept only in
// the active browser session and is required for answer submissions.
router.post("/view", ensureAuth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    const platformSettings = await getPlatformSettings();
    if (platformSettings.dailyChallengesEnabled === false) {
      return res.json({
        success: true,
        disabled: true,
        challenge: null,
        assigned: null,
        message: "Daily challenges are temporarily paused by an administrator.",
      });
    }

    await ensureDailyChallengeForUser(user);
    const assignment = user.dailyChallenge;
    const challenge = await Challenge.findById(assignment.challengeId).lean();
    if (!challenge) return res.status(404).json({ success: false, message: "No challenge available" });

    const now = new Date();
    const viewToken = crypto.randomBytes(32).toString("hex");
    const viewTokenHash = hashViewToken(viewToken);
    const updated = await User.findOneAndUpdate(
      {
        _id: user._id,
        "dailyChallenge.challengeId": String(challenge._id),
        "dailyChallenge.viewedAt": { $exists: false },
        "dailyChallenge.expiresAt": { $gt: now },
        "dailyChallenge.completed": { $ne: true },
        "dailyChallenge.closed": { $ne: true },
      },
      {
        $set: {
          "dailyChallenge.viewedAt": now,
          "dailyChallenge.viewTokenHash": viewTokenHash,
          "dailyChallenge.viewRequestId": crypto.randomUUID(),
        },
      },
      { new: true }
    );

    if (!updated) {
      const current = await User.findById(user._id).lean();
      return res.status(409).json({
        success: false,
        alreadyViewed: true,
        locked: true,
        message: "This challenge has already been viewed and cannot be reopened during this cycle.",
        assigned: serializeAssignment(current?.dailyChallenge),
      });
    }

    return res.json({
      success: true,
      oneTimeView: true,
      viewToken,
      viewRequestId: updated.dailyChallenge.viewRequestId,
      challenge: serializeChallenge(challenge),
      assigned: serializeAssignment(updated.dailyChallenge),
    });
  } catch (err) {
    console.error("Open challenge error:", err);
    return res.status(500).json({ success: false, message: "Could not open the challenge" });
  }
});

// POST an answer for the learner's current challenge.
router.post("/submit", ensureAuth, async (req, res) => {
  try {
    const { challengeId, answer, viewToken } = req.body;
    if (!challengeId) return res.status(400).json({ success: false, message: "challengeId required" });
    if (!viewToken) return res.status(403).json({ success: false, locked: true, message: "Open the challenge before submitting an answer" });
    if (typeof answer !== "string" || !answer.trim()) {
      return res.status(400).json({ success: false, message: "Answer required" });
    }

    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    const assignment = user.dailyChallenge;
    if (!assignment || String(assignment.challengeId) !== String(challengeId)) {
      return res.status(409).json({ success: false, stale: true, message: "This challenge is no longer assigned. Load the new challenge." });
    }

    if (!assignment.viewedAt || !assignment.viewTokenHash || hashViewToken(viewToken) !== assignment.viewTokenHash) {
      return res.status(403).json({ success: false, locked: true, message: "This challenge can only be answered from its original view session." });
    }

    if (!hasActiveAssignment(user)) {
      return res.status(409).json({ success: false, expired: true, message: "This challenge has expired. Load the next 24-hour challenge." });
    }

    if (assignment.completed) {
      return res.json({
        success: true,
        alreadyCompleted: true,
        completed: true,
        awardedXP: 0,
        attempts: assignment.attempts || 0,
        attemptsRemaining: Math.max(0, MAX_CHALLENGE_ATTEMPTS - (assignment.attempts || 0)),
      });
    }

    if (assignment.closed || Number(assignment.attempts || 0) >= MAX_CHALLENGE_ATTEMPTS) {
      return res.json({
        success: true,
        correct: false,
        closed: true,
        attempts: Math.min(MAX_CHALLENGE_ATTEMPTS, Number(assignment.attempts || 0)),
        attemptsRemaining: 0,
        message: "This challenge is closed after five attempts.",
      });
    }

    const challenge = await Challenge.findById(challengeId);
    if (!challenge || !challenge.active) {
      return res.status(404).json({ success: false, message: "Challenge not found or inactive" });
    }

    const correct = gradeChallengeAnswer(challenge, answer);
    const currentAttempts = Number(assignment.attempts || 0);
    const nextAttempts = currentAttempts + 1;
    const attemptsRemaining = Math.max(0, MAX_CHALLENGE_ATTEMPTS - nextAttempts);

    if (correct) {
      const awardedXP = Number(challenge.xpReward || process.env.CHALLENGE_XP_DEFAULT || 5);
      const updated = await User.findOneAndUpdate(
        {
          _id: user._id,
          "dailyChallenge.challengeId": String(challengeId),
          "dailyChallenge.completed": false,
          "dailyChallenge.closed": { $ne: true },
          "dailyChallenge.viewTokenHash": hashViewToken(viewToken),
          "dailyChallenge.attempts": { $lt: MAX_CHALLENGE_ATTEMPTS },
        },
        {
          $inc: {
            xp: awardedXP,
            dailyChallengesCompleted: 1,
            "dailyChallenge.attempts": 1,
          },
          $set: {
            "dailyChallenge.completed": true,
            "dailyChallenge.completedAt": new Date(),
            "dailyChallenge.lastResult": "correct",
            "dailyChallenge.lastAnswer": answer,
          },
        },
        { new: true }
      );

      if (!updated) {
        return res.json({ success: true, alreadyCompleted: true, completed: true, awardedXP: 0 });
      }

      return res.json({
        success: true,
        correct: true,
        completed: true,
        awardedXP,
        attempts: nextAttempts,
        attemptsRemaining,
      });
    }

    const closed = nextAttempts >= MAX_CHALLENGE_ATTEMPTS;
    const update = {
      $inc: { "dailyChallenge.attempts": 1 },
      $set: {
        "dailyChallenge.lastAnswer": answer,
        "dailyChallenge.lastResult": closed ? "closed" : "incorrect",
      },
    };

    if (closed) {
      update.$set["dailyChallenge.closed"] = true;
      update.$set["dailyChallenge.closedAt"] = new Date();
    }

    const updated = await User.findOneAndUpdate(
      {
        _id: user._id,
        "dailyChallenge.challengeId": String(challengeId),
        "dailyChallenge.completed": false,
        "dailyChallenge.closed": { $ne: true },
        "dailyChallenge.attempts": { $lt: MAX_CHALLENGE_ATTEMPTS },
      },
      update,
      { new: true }
    );

    if (!updated) {
      return res.json({
        success: true,
        correct: false,
        closed: true,
        attempts: MAX_CHALLENGE_ATTEMPTS,
        attemptsRemaining: 0,
        message: "This challenge is closed after five attempts.",
      });
    }

    return res.json({
      success: true,
      correct: false,
      closed,
      attempts: nextAttempts,
      attemptsRemaining,
      message: closed
        ? "This challenge is now closed after five incorrect attempts. Try again with the next challenge."
        : "That answer is not correct yet. Review the challenge and try again.",
    });
  } catch (err) {
    console.error("Submit challenge error:", err);
    return res.status(500).json({ success: false, message: "Submission failed" });
  }
});

module.exports = router;
