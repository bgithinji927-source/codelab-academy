const Challenge = require("../models/Challenge");

function dateIndexForDateString(dateString, n) {
  let h = 0;
  for (let i = 0; i < dateString.length; i++) {
    h = (h * 31 + dateString.charCodeAt(i)) >>> 0;
  }
  return h % n;
}

async function ensureDailyChallengeForUser(user) {
  const today = new Date().toISOString().slice(0,10);
  if (user.dailyChallenge?.date === today) return user;

  const active = await Challenge.find({ active: true }).sort({ _id: 1 }).lean();
  if (!active.length) return user;

  const idx = dateIndexForDateString(today, active.length);
  const chosen = active[idx];

  user.dailyChallenge = {
    date: today,
    challengeId: String(chosen._id),
    assignedAt: new Date(),
    attempts: 0,
    completed: false,
  };

  await user.save();
  return user;
}

module.exports = { ensureDailyChallengeForUser };
