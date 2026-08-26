const Challenge = require("../models/Challenge");
const PlatformSettings = require("../models/PlatformSettings");

const CHALLENGE_INTERVAL_MS = 24 * 60 * 60 * 1000;
const MAX_CHALLENGE_ATTEMPTS = 5;

const DEFAULT_CHALLENGES = [
  {
    title: "JavaScript Variables Check",
    type: "mcq",
    prompt: "Which keyword declares a JavaScript variable that should not be reassigned?",
    choices: [
      { id: "a", label: "var" },
      { id: "b", label: "const" },
      { id: "c", label: "change" },
      { id: "d", label: "static" },
    ],
    canonicalAnswer: "b",
    requirements: ["Choose one answer", "Select the keyword used for a value that should not be reassigned"],
    starter: "const courseTitle = \"CodeLab Academy\";\nconsole.log(courseTitle);",
    xpReward: 10,
    difficulty: "easy",
  },
  {
    title: "HTTP Not Found",
    type: "short_answer",
    prompt: "Which HTTP status code means that a requested resource could not be found? Enter only the number.",
    canonicalAnswer: "404",
    requirements: ["Enter the HTTP status code", "Use only the numeric answer"],
    starter: "fetch(\"/api/course/missing\")\n  .then((response) => console.log(response.status));",
    xpReward: 10,
    difficulty: "easy",
  },
  {
    title: "Inspect the Git Working Tree",
    type: "regex",
    prompt: "Which Git command shows the current working-tree status? Enter the command.",
    canonicalAnswer: "^\\s*git\\s+status(?:\\s+--short)?\\s*$",
    requirements: ["Enter a Git command", "The command should inspect the current working tree"],
    starter: "# Check which files are modified before committing\n",
    xpReward: 15,
    difficulty: "easy",
  },
  {
    title: "Python Output",
    type: "short_answer",
    prompt: "Write the Python statement that prints the text Hello. Use double or single quotes around the word.",
    canonicalAnswer: ["print(\"hello\")", "print('hello')"],
    requirements: ["Write one Python statement", "Print the word Hello"],
    starter: "# Write your answer below\n",
    xpReward: 15,
    difficulty: "easy",
  },
  {
    title: "Least Privilege",
    type: "mcq",
    prompt: "What does the security principle of least privilege mean?",
    choices: [
      { id: "a", label: "Give every service administrator access" },
      { id: "b", label: "Grant only the access required for a task" },
      { id: "c", label: "Use one shared password" },
      { id: "d", label: "Disable audit logs" },
    ],
    canonicalAnswer: "b",
    requirements: ["Choose one answer", "Select the principle that limits unnecessary access"],
    starter: "const servicePermissions = [\n  \"read-lessons\"\n];",
    xpReward: 15,
    difficulty: "medium",
  },
];

async function getPlatformSettings() {
  const settings = await PlatformSettings.findOneAndUpdate(
    { _id: "platform" },
    {
      $setOnInsert: {
        academyName: "CodeLab Academy",
        challengeWindowHours: 24,
        defaultChallengeXP: 10,
        dailyChallengesEnabled: true,
        kaiBackground: "neon-orbit",
      },
    },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  ).lean();

  return {
    ...settings,
    kaiBackground: settings?.kaiBackground || "neon-orbit",
  };
}

function getChallengeWindowMs(settings) {
  const hours = Number(settings?.challengeWindowHours || 24);
  return Math.max(1, Math.min(168, hours)) * 60 * 60 * 1000;
}

function dateIndexForDateString(dateString, n) {
  let h = 0;
  for (let i = 0; i < dateString.length; i++) {
    h = (h * 31 + dateString.charCodeAt(i)) >>> 0;
  }
  return h % n;
}

async function ensureChallengeBank() {
  const activeCount = await Challenge.countDocuments({ active: true });
  if (activeCount > 0) return;

  for (const challenge of DEFAULT_CHALLENGES) {
    await Challenge.updateOne(
      { title: challenge.title },
      { $setOnInsert: challenge },
      { upsert: true }
    );
  }
}

function hasActiveAssignment(user, now = Date.now()) {
  const assignment = user?.dailyChallenge;
  if (!assignment?.challengeId || !assignment.assignedAt || !assignment.expiresAt) {
    return false;
  }

  return new Date(assignment.expiresAt).getTime() > now;
}

async function ensureDailyChallengeForUser(user) {
  const now = new Date();
  const settings = await getPlatformSettings();
  const challengeWindowMs = getChallengeWindowMs(settings);
  await ensureChallengeBank();

  // The assignment remains visible as completed or closed until its 24-hour
  // window expires. A new challenge is then assigned on the next page visit.
  if (hasActiveAssignment(user, now.getTime())) return user;

  const active = await Challenge.find({ active: true }).sort({ _id: 1 }).lean();
  if (!active.length) return user;

  const assignmentKey = now.toISOString().slice(0, 10) + `-${Math.floor(now.getTime() / challengeWindowMs)}`;
  const idx = dateIndexForDateString(assignmentKey, active.length);
  const chosen = active[idx];
  const expiresAt = new Date(now.getTime() + challengeWindowMs);

  user.dailyChallenge = {
    date: now.toISOString().slice(0, 10),
    challengeId: String(chosen._id),
    assignedAt: now,
    expiresAt,
    viewedAt: undefined,
    viewTokenHash: undefined,
    viewRequestId: undefined,
    attempts: 0,
    completed: false,
    closed: false,
    lastResult: undefined,
    lastAnswer: undefined,
  };

  await user.save();
  return user;
}

function normalizeAnswer(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/\\s+/g, " ");
}

function gradeChallengeAnswer(challenge, answer) {
  const submitted = String(answer ?? "");

  if (challenge.type === "mcq") {
    return normalizeAnswer(submitted) === normalizeAnswer(challenge.canonicalAnswer);
  }

  if (challenge.type === "regex") {
    try {
      return new RegExp(String(challenge.canonicalAnswer)).test(submitted);
    } catch {
      return false;
    }
  }

  if (challenge.type === "short_answer") {
    const accepted = Array.isArray(challenge.canonicalAnswer)
      ? challenge.canonicalAnswer
      : [challenge.canonicalAnswer];
    return accepted.some((value) => normalizeAnswer(submitted) === normalizeAnswer(value));
  }

  if (challenge.type === "code") {
    // Code answers are evaluated against explicitly stored accepted answers or
    // a regex. Arbitrary submitted code is never executed on the server.
    const canonical = challenge.canonicalAnswer || {};
    const accepted = canonical.acceptedAnswers || canonical.answers || [];
    if (Array.isArray(accepted) && accepted.length > 0) {
      return accepted.some((value) => normalizeAnswer(submitted) === normalizeAnswer(value));
    }
    if (canonical.regex) {
      try {
        return new RegExp(canonical.regex, canonical.flags || "").test(submitted);
      } catch {
        return false;
      }
    }
  }

  return false;
}

module.exports = {
  CHALLENGE_INTERVAL_MS,
  MAX_CHALLENGE_ATTEMPTS,
  DEFAULT_CHALLENGES,
  ensureChallengeBank,
  ensureDailyChallengeForUser,
  getPlatformSettings,
  getChallengeWindowMs,
  gradeChallengeAnswer,
  hasActiveAssignment,
};
