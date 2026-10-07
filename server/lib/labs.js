const crypto = require("crypto");

const labDefinitions = [
  {
    id: "web-idor-safe-review",
    courseIds: ["web-application-security", "api-security", "advanced-web-exploitation", "ctf-security-labs"],
    title: "IDOR / BOLA Authorization Review",
    summary: "Inspect a simulated API request and identify the missing object-level authorization check.",
    objective: "Explain why an authenticated user must not be able to read another user's object by changing an identifier.",
    task: "Review the provided request and write the authorization check and one regression test you would add. Work only with the synthetic request shown below.",
    fixture: "GET /lab-api/profiles/1002\nAuthorization: Bearer learner-token\n\nCurrent user id: 1001\nRequested object owner id: 1002",
    expected: ["authorize", "owner", "403"],
    hint: "Compare the authenticated subject with the requested object's owner before returning data.",
  },
  {
    id: "web-jwt-validation",
    courseIds: ["api-security", "web-application-security", "advanced-web-exploitation"],
    title: "JWT Validation Checklist",
    summary: "Build a defensive checklist for validating a JSON Web Token in a toy service.",
    objective: "Name the signature, algorithm, issuer, audience, expiry, and key-selection checks a service should perform.",
    task: "Write a short validation checklist. Include the words algorithm, signature, issuer, audience, expiry, and key.",
    fixture: "Synthetic token header: { alg: 'HS256', kid: 'lesson-key' }\nSynthetic claims: { iss: 'codelab-lab', aud: 'lesson-api', exp: 'future' }",
    expected: ["algorithm", "signature", "issuer", "audience", "expiry", "key"],
    hint: "Never trust token claims until the expected algorithm and server-controlled key have validated the signature.",
  },
  {
    id: "linux-permissions-audit",
    courseIds: ["linux-security", "privilege-escalation-mastery", "ctf-security-labs"],
    title: "Linux Permissions Audit",
    summary: "Find the unsafe permission in a synthetic service configuration and propose a least-privilege fix.",
    objective: "Explain how ownership and mode bits reduce unnecessary execution and write access.",
    task: "Review the fixture and identify the risky permission. Submit a remediation using an owner, group, and mode.",
    fixture: "/opt/codelab/backup.sh  owner=root group=learners mode=0777\nService user: backup\nRequired behavior: read source files and write /var/backups",
    expected: ["0777", "least", "permission"],
    hint: "The service does not need every user to write or execute the script.",
  },
  {
    id: "siem-event-triage",
    courseIds: ["security-monitoring-siem", "incident-response", "detection-engineering-threat-hunting"],
    title: "SIEM Event Triage",
    summary: "Interpret a synthetic event sequence and write the first safe investigation steps.",
    objective: "Connect authentication failures, process creation, and scheduled-task events to an evidence-preserving response.",
    task: "Write a triage note that identifies the suspicious sequence and includes containment, evidence preservation, and one detection.",
    fixture: "10:01 Event 4625: 34 failed logons\n10:04 Event 4688: powershell.exe -enc [synthetic]\n10:05 Event 4698: new scheduled task\nHost: LAB-WIN-01",
    expected: ["contain", "evidence", "detection"],
    hint: "Preserve logs and scope the host before making destructive changes.",
  },
  {
    id: "cloud-iam-policy-review",
    courseIds: ["cyber-cloud-security", "advanced-cloud-security"],
    title: "Cloud IAM Policy Review",
    summary: "Review a synthetic cloud policy and reduce its permissions without touching a real provider.",
    objective: "Apply least privilege to a service role and document the exact change and verification step.",
    task: "Identify why the fixture is too broad and propose a narrower action/resource policy with a verification test.",
    fixture: "Role: lesson-exporter\nActions: s3:*\nResource: *\nPurpose: export reports to one bucket",
    expected: ["least", "s3", "resource"],
    hint: "Scope both actions and resources to the report-export operation and its single bucket.",
  },
];

const attempts = new Map();

function listLabsForCourse(courseId) {
  return labDefinitions.filter((lab) => lab.courseIds.includes(String(courseId))).map(({ expected, ...lab }) => lab);
}

function startLab(userId, labId) {
  const lab = labDefinitions.find((item) => item.id === labId);
  if (!lab) return null;
  const attemptId = crypto.randomUUID();
  attempts.set(attemptId, { userId: String(userId), labId, startedAt: new Date(), completed: false });
  return { attemptId, lab: { ...lab, expected: undefined } };
}

function submitLab(userId, attemptId, answer) {
  const attempt = attempts.get(attemptId);
  if (!attempt || attempt.userId !== String(userId)) return { error: "Lab attempt not found" };
  const lab = labDefinitions.find((item) => item.id === attempt.labId);
  const normalized = String(answer || "").toLowerCase();
  const matched = lab.expected.filter((term) => normalized.includes(term.toLowerCase()));
  const passed = matched.length === lab.expected.length;
  attempt.completed = passed;
  attempt.submittedAt = new Date();
  return {
    passed,
    score: Math.round((matched.length / lab.expected.length) * 100),
    feedback: passed
      ? "Lab passed. Your response includes the required defensive reasoning."
      : `Add more evidence: ${lab.expected.filter((term) => !matched.includes(term)).join(", ")}.`,
  };
}

module.exports = { listLabsForCourse, startLab, submitLab };
