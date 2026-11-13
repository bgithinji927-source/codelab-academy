// ============================================
// CODELAB ACADEMY - LESSON DATA
// Deep-learning lesson structure for Kai
// ============================================
import pythonListsCollectionsDelivery from "./pythonListsCollectionsDelivery.mjs";
import pythonDictionariesDelivery from "./pythonDictionariesDelivery.mjs";
import pythonLoopsDelivery from "./pythonLoopsDelivery.mjs";
import pythonFunctionsDelivery from "./pythonFunctionsDelivery.mjs";
import pythonErrorsDebuggingDelivery from "./pythonErrorsDebuggingDelivery.mjs";
import pythonFilesModulesDelivery from "./pythonFilesModulesDelivery.mjs";
import pythonFileHandlingDelivery from "./pythonFileHandlingDelivery.mjs";
import pythonObjectOrientedDelivery from "./pythonObjectOrientedDelivery.mjs";
import pythonIteratorsGeneratorsDelivery from "./pythonIteratorsGeneratorsDelivery.mjs";
import pythonDecoratorsContextManagersDelivery from "./pythonDecoratorsContextManagersDelivery.mjs";
import pythonLambdaFunctionalDelivery from "./pythonLambdaFunctionalDelivery.mjs";
import pythonBasicsProjectDelivery from "./pythonBasicsProjectDelivery.mjs";
import pythonListComprehensionsDelivery from "./pythonListComprehensionsDelivery.mjs";
import pythonModulesPackagesRoadmapDelivery from "./pythonModulesPackagesRoadmapDelivery.mjs";
import pythonExceptionsDelivery from "./pythonExceptionsDelivery.mjs";
import javascriptIntroductionMarkdown from "./javascriptIntroductionLessonContent.mjs";
import javascriptVariablesMarkdown from "./javascriptVariablesLessonContent.mjs";
import javascriptOperatorsMarkdown from "./javascriptOperatorsLessonContent.mjs";
import javascriptInputOutputMarkdown from "./javascriptInputOutputLessonContent.mjs";
import javascriptConditionalsMarkdown from "./javascriptConditionalsLessonContent.mjs";
import cybersecurityCiaTriadDelivery from "./cybersecurityCiaTriadDelivery.mjs";

// EXPANDED COURSE LESSON BUILDER
// ============================================

function buildLessonNotes({ title, focus, code, quizAnswer }) {
  const topic = String(focus || title).trim();
  const normalized = topic.toLowerCase();
  const notesByTopic = [
    {
      matches: ["shell navigation", "linux shell"],
      definition: "The Linux shell is a text-based interface for finding files, running programs, and inspecting system state. Each command reads inputs, performs one operation, and writes output that can be used by the next command.",
      rules: ["Use pwd to confirm where you are before changing files.", "Use ls to inspect a directory and cd to move through the filesystem.", "Prefer small, reversible commands and inspect output before acting on a production system."],
      mistake: "A common mistake is running a command from the wrong directory. Confirm the path first, then use an explicit path when an action could affect important files.",
    },
    {
      matches: ["permissions", "least privilege", "authorization", "authentication"],
      definition: "Access control answers two different questions: authentication verifies who an identity is, while authorization decides what that identity may do. Least privilege keeps the allowed actions as small as possible.",
      rules: ["Authenticate before trusting an identity.", "Check authorization for every protected action, not only at login.", "Grant the minimum read, write, or administrative access required for the task."],
      mistake: "Do not confuse a valid login with permission to perform every action. A user may be authenticated but still unauthorized to edit a lesson or read private progress.",
    },
    {
      matches: ["observability", "monitoring", "metrics", "logs"],
      definition: "Observability is the ability to understand what a running system is doing from its outputs. Logs describe events, metrics measure trends, and traces connect work across services.",
      rules: ["Choose signals that reflect user impact, such as error rate, latency, and availability.", "Include enough context in logs to investigate without exposing secrets.", "Set alerts around meaningful thresholds and provide a runbook for the response."],
      mistake: "Collecting data is not the same as being observable. An alert that fires constantly or has no owner creates noise instead of useful feedback.",
    },
    {
      matches: ["api", "service boundary", "rest resource"],
      definition: "An API is a documented agreement between a caller and a service. It defines the request shape, response shape, errors, authentication rules, and compatibility expectations.",
      rules: ["Give resources stable identifiers and predictable representations.", "Validate inputs at the boundary and return useful status codes.", "Document failure cases as carefully as successful responses."],
      mistake: "Changing a response field or meaning without considering existing clients can break applications that still depend on the old contract.",
    },
    {
      matches: ["testing", "debugging", "verification"],
      definition: "Testing compares a program's actual behavior with an expected result. Good tests make a claim about behavior, provide controlled inputs, and fail with evidence when the implementation changes.",
      rules: ["Test the normal path and at least one boundary or failure path.", "Keep each test focused on one behavior.", "Use a failing test or a reproducible example to guide debugging instead of guessing."],
      mistake: "A single successful demo does not prove correctness. Empty input, invalid data, repeated actions, and slow dependencies often reveal the real bug.",
    },
  ];
  const matched = notesByTopic.find((entry) => entry.matches.some((term) => normalized.includes(term)));
  const definition = matched?.definition || `${topic} is the main idea in this lesson. It helps a developer make a specific behavior understandable, repeatable, and safe to change. Learn it by connecting the goal, the inputs, the steps performed, and the observable result.`;
  const rules = matched?.rules || [
    `Start with the problem that ${topic} is meant to solve, not with memorizing syntax.`,
    "Trace the data or state from input to operation to result.",
    "Keep the first implementation small enough to explain and test.",
  ];
  const mistake = matched?.mistake || `A common mistake is using ${topic} without checking its assumptions. Test an empty, invalid, repeated, or boundary case and document what should happen.`;
  return `${definition}\n\nWhat to remember:\n${rules.map((rule) => `- ${rule}`).join("\n")}\n\nRead the example:\nThe worked example that follows shows ${topic.toLowerCase()} in a small, observable situation. First identify the values or conditions introduced by each line. Then follow the operation that changes or checks them and predict the result before running the code.\n\nCheck your understanding:\n- Expected result: ${quizAnswer || `the program demonstrates ${topic.toLowerCase()} correctly`}\n- Change one input or condition and predict how the result will change.\n- Test one boundary or failure case and explain how the program should respond.\n\nCommon mistake:\n${mistake}\n\nThe goal is not to copy the example. It is to explain why it works, identify its assumptions, and adapt the same idea to a small problem of your own.`;
}

function makeLesson({
  id,
  title,
  focus,
  code,
  challenge,
  starterCode,
  quizQuestion,
  quizOptions,
  quizAnswer,
  delivery,
}) {
  const notes = buildLessonNotes({ title, focus, code, quizAnswer });
  return {
    id,
    title,
    description: `Read these notes to understand ${focus.toLowerCase()}, then trace the example and apply the idea in the practice task.`,
    level: "Beginner",
    estimatedTime: "25 min",
    objectives: [
      `Understand ${focus.toLowerCase()}`,
      `Explain why ${focus.toLowerCase()} is useful`,
      "Read and adapt a practical example",
      "Apply the concept in a guided challenge",
    ],
    quizQuestion,
    quizOptions,
    quizAnswer,
    ...(delivery ? { delivery } : {}),
    sections: [
      {
        type: "explanation",
        title: `${focus}: reading notes`,
        content: notes,
      },
      {
        type: "example",
        title: `A ${focus} Example`,
        code,
        explanation: `This example demonstrates ${focus.toLowerCase()} by turning an input or condition into an observable result. Read each line in order: name the value it introduces, describe the operation it performs, and predict the output before running it. Then change one value, predict the new result, and add a check for the most likely failure case. The goal is to understand why the code works, not to copy it unchanged.`,
      },
      {
        type: "challenge",
        title: "Try It Yourself",
        instructions: challenge,
        starterCode,
      },
    ],
  };
}


const devopsCultureAuthoredDelivery = {
  type: "authored",
  version: 1,
  intro: "Learn why DevOps is a delivery system built on collaboration, automation, and fast feedback.",
  sections: [
    {
      id: "devops-culture-foundation",
      title: "The delivery problem",
      description: "DevOps reduces the friction between building software and operating it reliably.",
      blocks: [
        { type: "text", text: "DevOps is a way of working that brings development and operations closer together. The goal is not simply to release faster; it is to make delivery repeatable, observable, and safe to improve." },
        { type: "bullets", items: [
          "Shared ownership: the team owns the software after it ships.",
          "Automation: repeatable checks and delivery steps reduce manual variation.",
          "Feedback: tests, monitoring, and user signals guide the next change.",
        ] },
        { type: "callout", title: "Core idea", text: "A healthy delivery process makes the safe path the easy, repeatable path." },
      ],
    },
    {
      id: "devops-culture-worked-example",
      title: "A repeatable workflow",
      description: "This small model shows the stages a change should pass through before production.",
      blocks: [
        { type: "code", language: "javascript", filename: "delivery-workflow.js", code: "const workflow = {\n  build: true,\n  test: true,\n  deploy: \"repeatable\"\n};\n\nconsole.log(workflow);" },
        { type: "tutorial", title: "Read the workflow", steps: [
          { title: "Build", description: "Create a consistent artifact from the source code.", code: "build: true" },
          { title: "Test", description: "Check the expected behavior before promotion.", code: "test: true" },
          { title: "Deploy repeatedly", description: "Use the same controlled process instead of relying on one-off manual steps.", code: "deploy: \"repeatable\"" },
        ] },
      ],
    },
    {
      id: "devops-culture-practice",
      title: "Apply the idea",
      description: "Design a delivery sequence for a small web application.",
      blocks: [
        { type: "text", text: "Write down the checks and delivery steps that should happen before a change reaches production. For each step, identify what could be automated and what feedback it should produce." },
        { type: "code", language: "javascript", filename: "delivery-plan.js", code: "const deliverySteps = [];\n\n// Add build, test, and deploy steps here\nconsole.log(deliverySteps);" },
        { type: "checklist", items: [
          "Include a build or packaging step.",
          "Include an automated test or verification step.",
          "Include monitoring or rollback feedback after deployment.",
        ] },
      ],
    },
    {
      id: "devops-culture-check",
      title: "Check your understanding",
      blocks: [{ type: "quiz", question: "What is a central goal of DevOps?", options: [
        "Make releases repeatable and collaborative",
        "Remove all testing",
        "Avoid monitoring",
        "Deploy only once",
      ], answer: "Make releases repeatable and collaborative", explanation: "DevOps combines collaboration, automation, and feedback so teams can deliver changes safely and repeatedly." }],
    },
  ],
};
const courseLessonPlans = {
  "devops-foundations": [
    makeLesson({ id: "devops-foundations-culture", title: "DevOps Culture and Delivery", focus: "DevOps culture", code: "const workflow = {\n  build: true,\n  test: true,\n  deploy: \"repeatable\"\n};\n\nconsole.log(workflow);", challenge: "Write down three steps that should happen before software reaches production. For each step, explain how automation could make it repeatable.", starterCode: "const deliverySteps = [];\n\n// Add build, test, and deploy steps here\nconsole.log(deliverySteps);", quizQuestion: "What is a central goal of DevOps?", quizOptions: ["Make releases repeatable and collaborative", "Remove all testing", "Avoid monitoring", "Deploy only once"], quizAnswer: "Make releases repeatable and collaborative", delivery: devopsCultureAuthoredDelivery }),
    makeLesson({ id: "devops-foundations-observability", title: "Feedback and Observability", focus: "DevOps observability", code: "const health = {\n  status: \"ok\",\n  latencyMs: 120\n};\n\nif (health.latencyMs > 500) {\n  console.log(\"Investigate latency\");\n}", challenge: "Choose one application metric, one log event, and one alert that would help you detect a failing release.", starterCode: "const metric = \"\";\nconst logEvent = \"\";\nconst alert = \"\";\n\nconsole.log(metric, logEvent, alert);", quizQuestion: "Why do teams collect metrics and logs?", quizOptions: ["To create feedback about system behavior", "To hide failures", "To replace source code", "To disable releases"], quizAnswer: "To create feedback about system behavior" }),
    makeLesson({ id: "devops-foundations-release", title: "Safe Release Practices", focus: "safe releases", code: "const release = {\n  version: \"1.2.0\",\n  tested: true,\n  rollbackPlan: true\n};\n\nconsole.log(release);", challenge: "Design a release checklist with tests, approval, monitoring, and rollback steps.", starterCode: "const releaseChecklist = [\n  \"\",\n  \"\",\n  \"\",\n  \"\"\n];\n\nconsole.log(releaseChecklist);", quizQuestion: "What makes a release safer?", quizOptions: ["Testing, monitoring, and a rollback plan", "Skipping code review", "Changing many systems at once", "Deleting logs"], quizAnswer: "Testing, monitoring, and a rollback plan" }),
  ],
  "linux-for-devops": [
    makeLesson({ id: "linux-for-devops-shell", title: "The Linux Shell", focus: "Linux shell navigation", code: "pwd\nls -la\ncd /var/log\ncat app.log", challenge: "Describe the commands you would use to find your current directory, list hidden files, and inspect a log.", starterCode: "# Write the command sequence here\n", quizQuestion: "Which command lists files in the current directory?", quizOptions: ["ls", "pwd", "cd", "mkdir"], quizAnswer: "ls" }),
    makeLesson({ id: "linux-for-devops-processes", title: "Processes and Services", focus: "Linux processes", code: "ps aux | grep node\nsystemctl status nginx\nsystemctl restart nginx", challenge: "Explain how you would inspect a running service before restarting it in production.", starterCode: "# Inspect the service first, then choose an action\n", quizQuestion: "What should you do before restarting a production service?", quizOptions: ["Inspect its status and impact", "Delete its logs", "Change every permission", "Restart repeatedly"], quizAnswer: "Inspect its status and impact" }),
    makeLesson({ id: "linux-for-devops-permissions", title: "Permissions and Logs", focus: "Linux permissions", code: "chmod 640 app.log\nchown deploy:deploy app.log\ntail -f app.log", challenge: "Explain why application logs should be readable by the service owner but not writable by every user.", starterCode: "# Record an example owner, group, and permission policy\n", quizQuestion: "What do file permissions control?", quizOptions: ["Who can read, write, or execute a file", "Which network cable is used", "How code is compiled", "Which browser opens a file"], quizAnswer: "Who can read, write, or execute a file" }),
  ],
  "ci-cd-pipelines": [
    makeLesson({ id: "ci-cd-pipelines-stages", title: "Pipeline Stages", focus: "CI/CD pipeline stages", code: "stages:\n  - install\n  - test\n  - build\n  - deploy", challenge: "Create a four-stage pipeline for a web app and place each stage in the order it should run.", starterCode: "stages:\n  - \n  - \n  - \n  - ", quizQuestion: "What should normally happen before deployment?", quizOptions: ["Automated tests and a successful build", "Deleting the repository", "Turning off monitoring", "Skipping dependency installation"], quizAnswer: "Automated tests and a successful build" }),
    makeLesson({ id: "ci-cd-pipelines-testing", title: "Testing in CI", focus: "continuous integration testing", code: "npm ci\nnpm test\nnpm run build", challenge: "Explain why installing clean dependencies and running tests in a fresh environment catches integration problems.", starterCode: "# Describe the commands your CI job should run\n", quizQuestion: "Why run tests in CI?", quizOptions: ["To catch regressions before merging or releasing", "To make code harder to review", "To avoid repeatable builds", "To remove feedback"], quizAnswer: "To catch regressions before merging or releasing" }),
    makeLesson({ id: "ci-cd-pipelines-deploy", title: "Deployment Gates", focus: "deployment gates", code: "if:\n  tests: passing\n  approval: granted\n  healthCheck: green", challenge: "Define two conditions that must be true before an application is promoted to production.", starterCode: "const deploymentGate = {\n  tests: false,\n  approval: false\n};", quizQuestion: "What is a deployment gate?", quizOptions: ["A condition that must pass before promotion", "A UI color", "A database table", "A replacement for tests"], quizAnswer: "A condition that must pass before promotion" }),
  ],
  "infrastructure-as-code": [
    makeLesson({ id: "infrastructure-as-code-declarative", title: "Declarative Infrastructure", focus: "declarative infrastructure", code: "resource \"server\" \"api\" {\n  size  = \"small\"\n  image = \"node-20\"\n}", challenge: "Describe the desired state of a small web server using three properties: image, size, and region.", starterCode: "resource \"server\" \"web\" {\n  image  = \"\"\n  size   = \"\"\n  region = \"\"\n}", quizQuestion: "What does declarative infrastructure describe?", quizOptions: ["The desired final state", "Every manual click only", "A user password", "A CSS component"], quizAnswer: "The desired final state" }),
    makeLesson({ id: "infrastructure-as-code-state", title: "State and Change Plans", focus: "infrastructure state", code: "plan = {\n  add: [\"cache\"],\n  change: [\"api-size\"],\n  destroy: []\n};\n\nconsole.log(plan);", challenge: "Explain why an infrastructure plan should be reviewed before it is applied.", starterCode: "const plan = { add: [], change: [], destroy: [] };\n\nconsole.log(plan);", quizQuestion: "Why review a change plan?", quizOptions: ["To understand impact before modifying infrastructure", "To hide drift", "To skip backups", "To remove version history"], quizAnswer: "To understand impact before modifying infrastructure" }),
    makeLesson({ id: "infrastructure-as-code-modules", title: "Reusable Infrastructure Modules", focus: "infrastructure modules", code: "module \"web_service\" {\n  name     = \"catalog\"\n  replicas = 3\n}", challenge: "Identify two values that should be inputs to a reusable web-service module.", starterCode: "module \"web_service\" {\n  name     = \"\"\n  replicas = 0\n}", quizQuestion: "What is a benefit of infrastructure modules?", quizOptions: ["They package reusable, consistent patterns", "They prevent all changes", "They remove documentation", "They replace monitoring"], quizAnswer: "They package reusable, consistent patterns" }),
  ],
  "cybersecurity-fundamentals": [
    makeLesson({ id: "cybersecurity-fundamentals-threats", title: "Threats and Risk", focus: "cyber security risk", code: "const asset = {\n  name: \"user-data\",\n  impact: \"high\",\n  exposure: \"medium\"\n};\n\nconsole.log(asset);", challenge: "Choose one application asset and list a threat, a vulnerability, and a possible impact.", starterCode: "const risk = {\n  asset: \"\",\n  threat: \"\",\n  vulnerability: \"\",\n  impact: \"\"\n};", quizQuestion: "What does risk analysis help a team do?", quizOptions: ["Prioritize protections based on likelihood and impact", "Guarantee zero incidents", "Remove authentication", "Avoid documenting decisions"], quizAnswer: "Prioritize protections based on likelihood and impact" }),
    makeLesson({ id: "cybersecurity-fundamentals-defense", title: "Defense in Depth", focus: "defense in depth", code: "const controls = [\n  \"strong-authentication\",\n  \"least-privilege\",\n  \"monitoring\",\n  \"backups\"\n];", challenge: "Design four layers of protection for a small learning platform.", starterCode: "const controls = [\n  \"\",\n  \"\",\n  \"\",\n  \"\"\n];", quizQuestion: "What is defense in depth?", quizOptions: ["Using multiple complementary security controls", "Using one password everywhere", "Disabling alerts", "Keeping no backups"], quizAnswer: "Using multiple complementary security controls" }),
    makeLesson({ id: "cybersecurity-fundamentals-incidents", title: "Incident Response", focus: "incident response", code: "const response = [\n  \"detect\",\n  \"contain\",\n  \"eradicate\",\n  \"recover\",\n  \"learn\"\n];", challenge: "Put the five incident-response actions in order and explain why learning comes after recovery.", starterCode: "const response = [\n  \"detect\",\n  \"contain\",\n  \"\",\n  \"\",\n  \"\"\n];", quizQuestion: "What is an early incident-response priority?", quizOptions: ["Contain the impact while preserving evidence", "Delete all records", "Blame a user", "Ignore the alert"], quizAnswer: "Contain the impact while preserving evidence" }),
  ],
  "network-security": [
    makeLesson({ id: "network-security-segmentation", title: "Network Segmentation", focus: "network segmentation", code: "const zones = {\n  public: [\"web\"],\n  private: [\"api\", \"database\"],\n  admin: [\"bastion\"]\n};", challenge: "Place a web server, API server, database, and admin workstation into sensible network zones.", starterCode: "const zones = { public: [], private: [], admin: [] };", quizQuestion: "Why segment networks?", quizOptions: ["To limit lateral movement after a compromise", "To make every service public", "To remove access rules", "To avoid logging"], quizAnswer: "To limit lateral movement after a compromise" }),
    makeLesson({ id: "network-security-firewalls", title: "Firewalls and Rules", focus: "firewall rules", code: "allow tcp 443 from internet to web\nallow tcp 27017 from api to database\ndeny all", challenge: "Write a simple rule policy that exposes HTTPS but keeps the database private.", starterCode: "allow tcp 443 from internet to web\n# Add a private service rule\ndeny all", quizQuestion: "What is a good default firewall posture?", quizOptions: ["Allow only required traffic and deny the rest", "Allow every port", "Disable inspection", "Share admin ports publicly"], quizAnswer: "Allow only required traffic and deny the rest" }),
    makeLesson({ id: "network-security-monitoring", title: "Network Monitoring", focus: "network security monitoring", code: "const event = {\n  source: \"unknown\",\n  port: 22,\n  attempts: 120\n};\n\nif (event.attempts > 50) console.log(\"Investigate\");", challenge: "Name two network signals that could indicate scanning or unauthorized access.", starterCode: "const signals = [\n  \"\",\n  \"\"\n];", quizQuestion: "What can network monitoring reveal?", quizOptions: ["Unexpected traffic and suspicious behavior", "A user's favorite color", "Source-code formatting", "CPU brand only"], quizAnswer: "Unexpected traffic and suspicious behavior" }),
  ],
  "ethical-hacking-basics": [
    makeLesson({ id: "ethical-hacking-basics-scope", title: "Authorization and Scope", focus: "authorized security testing", code: "const scope = {\n  target: \"staging.example.test\",\n  methods: [\"scan\", \"review\"],\n  excluded: [\"production\"]\n};", challenge: "Write a safe testing scope with an approved target, time window, and excluded systems.", starterCode: "const scope = { target: \"\", window: \"\", excluded: [] };", quizQuestion: "What must exist before a security test begins?", quizOptions: ["Clear authorization and scope", "A public announcement only", "No contact person", "Unlimited access"], quizAnswer: "Clear authorization and scope" }),
    makeLesson({ id: "ethical-hacking-basics-recon", title: "Reconnaissance", focus: "security reconnaissance", code: "const findings = {\n  subdomains: 3,\n  exposedPorts: [443],\n  technologies: [\"node\"]\n};", challenge: "Explain how passive reconnaissance differs from actively probing a target.", starterCode: "const findings = { passive: [], active: [] };", quizQuestion: "What is reconnaissance used for?", quizOptions: ["Understanding the authorized attack surface", "Changing production data", "Deleting evidence", "Disabling controls"], quizAnswer: "Understanding the authorized attack surface" }),
    makeLesson({ id: "ethical-hacking-basics-reporting", title: "Findings and Reporting", focus: "ethical security reporting", code: "const finding = {\n  title: \"Missing access control\",\n  severity: \"high\",\n  evidence: \"request example\",\n  fix: \"enforce authorization\"\n};", challenge: "Write a finding with a clear title, impact, evidence, and recommended fix.", starterCode: "const finding = { title: \"\", impact: \"\", evidence: \"\", fix: \"\" };", quizQuestion: "What makes a security report useful?", quizOptions: ["Clear evidence, impact, and remediation", "Only a scary title", "Unverified rumors", "Hidden reproduction steps"], quizAnswer: "Clear evidence, impact, and remediation" }),
  ],
  "identity-access-management": [
    makeLesson({ id: "identity-access-management-authentication", title: "Authentication", focus: "authentication", code: "const login = {\n  identity: \"learner@example.com\",\n  passwordVerified: true,\n  secondFactor: true\n};", challenge: "List the identity checks a high-value administrator account should complete before access is granted.", starterCode: "const checks = [\n  \"\",\n  \"\"\n];", quizQuestion: "What does authentication verify?", quizOptions: ["Who a user or service is", "What data a user may edit", "How fast a query runs", "Which CSS theme is active"], quizAnswer: "Who a user or service is" }),
    makeLesson({ id: "identity-access-management-authorization", title: "Authorization and Roles", focus: "authorization", code: "const permissions = {\n  learner: [\"read-course\"],\n  instructor: [\"read-course\", \"write-lesson\"]\n};", challenge: "Create learner, instructor, and admin roles with one permission for each.", starterCode: "const permissions = { learner: [], instructor: [], admin: [] };", quizQuestion: "What does authorization decide?", quizOptions: ["What an authenticated identity may do", "Whether a password exists", "Which server starts first", "Whether logs are useful"], quizAnswer: "What an authenticated identity may do" }),
    makeLesson({ id: "identity-access-management-least-privilege", title: "Least Privilege", focus: "least privilege", code: "const service = {\n  name: \"lesson-api\",\n  permissions: [\"read-lessons\"]\n};", challenge: "Give a lesson-reading service the smallest set of permissions it needs and explain what it should not access.", starterCode: "const servicePermissions = [\n  \"\"\n];", quizQuestion: "What does least privilege mean?", quizOptions: ["Granting only the access required for a task", "Giving every service admin access", "Reusing one account", "Removing audit logs"], quizAnswer: "Granting only the access required for a task" }),
  ],
  "mobile-development-foundations": [
    makeLesson({ id: "mobile-development-foundations-ui", title: "Mobile Screens and Layout", focus: "mobile interface structure", code: "function ProfileScreen({ name }) {\n  return View(\n    Text(`Hello ${name}`)\n  );\n}", challenge: "Sketch the hierarchy of a profile screen containing a header, avatar, name, and action button.", starterCode: "Screen\n  Header\n  Content\n    // Add profile elements here", quizQuestion: "Why should mobile layouts be designed for small screens first?", quizOptions: ["It keeps core actions clear in constrained space", "It removes accessibility", "It prevents responsive design", "It makes testing unnecessary"], quizAnswer: "It keeps core actions clear in constrained space" }),
    makeLesson({ id: "mobile-development-foundations-navigation", title: "Navigation and App State", focus: "mobile navigation", code: "const routes = [\n  \"Home\",\n  \"Courses\",\n  \"Profile\"\n];\n\nopen(routes[1]);", challenge: "Plan the navigation flow from Home to a Course detail screen and back.", starterCode: "const routes = [\"Home\", \"\"];", quizQuestion: "What should navigation provide?", quizOptions: ["A predictable way to move between app states", "A new login on every screen", "Hidden exits", "Random destinations"], quizAnswer: "A predictable way to move between app states" }),
    makeLesson({ id: "mobile-development-foundations-lifecycle", title: "Mobile App Lifecycle", focus: "mobile app lifecycle", code: "onStart(() => loadData());\nonPause(() => saveDraft());\nonStop(() => releaseResources());", challenge: "Name one task that belongs when a screen starts, pauses, and stops.", starterCode: "onStart(() => {});\nonPause(() => {});\nonStop(() => {});", quizQuestion: "Why does the mobile lifecycle matter?", quizOptions: ["Apps can be paused, resumed, or stopped by the operating system", "Phones never interrupt apps", "It only changes colors", "It replaces state management"], quizAnswer: "Apps can be paused, resumed, or stopped by the operating system" }),
  ],
  "android-with-kotlin": [
    makeLesson({ id: "android-with-kotlin-kotlin", title: "Kotlin for Android", focus: "Kotlin Android syntax", code: "val title = \"CodeLab\"\nvar lessonsCompleted = 0\nlessonsCompleted += 1\nprintln(title)", challenge: "Create immutable and mutable Kotlin values for a course title and completed lesson count.", starterCode: "val courseTitle = \"\"\nvar completed = 0", quizQuestion: "Which Kotlin keyword declares a value that should not be reassigned?", quizOptions: ["val", "var", "let", "const"], quizAnswer: "val" }),
    makeLesson({ id: "android-with-kotlin-composables", title: "Composable UI", focus: "Android composable UI", code: "@Composable\nfun Welcome(name: String) {\n  Text(\"Welcome $name\")\n}", challenge: "Describe the UI tree for a simple lesson card with a title and progress indicator.", starterCode: "@Composable\nfun LessonCard() {\n  // Add the UI tree here\n}", quizQuestion: "What is a composable function used for?", quizOptions: ["Describing reusable UI", "Opening a database connection only", "Writing SQL", "Managing DNS"], quizAnswer: "Describing reusable UI" }),
    makeLesson({ id: "android-with-kotlin-state", title: "Android State", focus: "Android UI state", code: "var completed by remember { mutableStateOf(0) }\nButton(onClick = { completed++ }) {\n  Text(\"Completed: $completed\")\n}", challenge: "Identify which value should be state in a lesson completion screen and why.", starterCode: "var completed = 0\n// Decide how the UI should update when this changes", quizQuestion: "What happens when observable UI state changes?", quizOptions: ["The relevant UI can recompose with the new value", "The app must always restart", "The database is deleted", "The screen becomes inaccessible"], quizAnswer: "The relevant UI can recompose with the new value" }),
  ],
  "ios-with-swift": [
    makeLesson({ id: "ios-with-swift-types", title: "Swift Values and Types", focus: "Swift types", code: "let title = \"CodeLab\"\nvar completed = 0\ncompleted += 1\nprint(title)", challenge: "Create Swift values for a title, a lesson count, and whether a lesson is complete.", starterCode: "let title = \"\"\nvar completed = 0\nlet isComplete = false", quizQuestion: "Which Swift keyword is used for a value that does not change?", quizOptions: ["let", "var", "const", "fixed"], quizAnswer: "let" }),
    makeLesson({ id: "ios-with-swift-swiftui", title: "SwiftUI Views", focus: "SwiftUI views", code: "struct WelcomeView: View {\n  let name: String\n\n  var body: some View {\n    Text(\"Welcome, $name\")\n  }\n}", challenge: "Describe the view hierarchy for a SwiftUI course card with text and a button.", starterCode: "struct CourseCard: View {\n  var body: some View {\n    // Build the view here\n  }\n}", quizQuestion: "What does a SwiftUI View describe?", quizOptions: ["A piece of interface and its body", "A network firewall", "A database index", "A command-line process"], quizAnswer: "A piece of interface and its body" }),
    makeLesson({ id: "ios-with-swift-state", title: "SwiftUI State", focus: "SwiftUI state", code: "@State private var completed = 0\n\nButton(\"Complete\") {\n  completed += 1\n}", challenge: "Explain why a completion count belongs in view state when the screen should update immediately.", starterCode: "@State private var completed = 0\n// Add an action that changes it", quizQuestion: "Why use state in a SwiftUI view?", quizOptions: ["To update the view when a value changes", "To hide all data", "To replace source control", "To create a server"], quizAnswer: "To update the view when a value changes" }),
  ],
  "react-native": [
    makeLesson({ id: "react-native-components", title: "React Native Components", focus: "React Native components", code: "function LessonCard({ title }) {\n  return (\n    <View>\n      <Text>{title}</Text>\n    </View>\n  );\n}", challenge: "Build the component tree for a course card with a title, level, and start button.", starterCode: "function CourseCard() {\n  return (\n    <View>\n      {/* Add course content */}\n    </View>\n  );\n}", quizQuestion: "What are React Native components?", quizOptions: ["Reusable pieces of mobile UI", "Only database tables", "Linux processes", "Image files only"], quizAnswer: "Reusable pieces of mobile UI" }),
    makeLesson({ id: "react-native-state", title: "State and Interaction", focus: "React Native state", code: "const [completed, setCompleted] = useState(0);\n\n<Button\n  title=\"Complete\"\n  onPress={() => setCompleted(completed + 1)}\n/>", challenge: "Add a button interaction that changes the completion count and displays the new value.", starterCode: "const [completed, setCompleted] = useState(0);\n\n// Add a button and a text label", quizQuestion: "What should update state in React Native?", quizOptions: ["A state setter called from an interaction", "A random CSS selector", "A database restart", "A hidden URL"], quizAnswer: "A state setter called from an interaction" }),
    makeLesson({ id: "react-native-navigation", title: "Mobile Navigation", focus: "React Native navigation", code: "navigation.navigate(\"Course\", {\n  courseId: \"react-native\"\n});", challenge: "Describe the route parameters needed to open a selected course detail screen.", starterCode: "navigation.navigate(\"Course\", {\n  // Add the selected course identifier\n});", quizQuestion: "Why pass a course identifier during navigation?", quizOptions: ["So the destination can load the selected course", "To reset every user", "To disable back navigation", "To remove screen state"], quizAnswer: "So the destination can load the selected course" }),
  ],
  "game-development-foundations": [
    makeLesson({ id: "game-development-foundations-loop", title: "The Game Loop", focus: "the game loop", code: "while (gameRunning) {\n  readInput();\n  updateWorld(deltaTime);\n  renderFrame();\n}", challenge: "Explain why input, update, and render need to happen repeatedly in an interactive game.", starterCode: "while (gameRunning) {\n  // input\n  // update\n  // render\n}", quizQuestion: "What does the game loop do?", quizOptions: ["Repeatedly processes input, updates state, and renders", "Runs only once", "Stores passwords", "Builds a database schema"], quizAnswer: "Repeatedly processes input, updates state, and renders" }),
    makeLesson({ id: "game-development-foundations-scenes", title: "Scenes and Game Objects", focus: "game scenes and objects", code: "scene.add(player);\nscene.add(enemy);\nscene.add(goal);\n\nplayer.position.x += 1;", challenge: "Design a simple level containing a player, an obstacle, and a goal.", starterCode: "const scene = [];\n// Add player, obstacle, and goal", quizQuestion: "What is a scene commonly used for?", quizOptions: ["Containing the objects and state for a game view", "Encrypting a password", "Compiling a kernel", "Sending an email"], quizAnswer: "Containing the objects and state for a game view" }),
    makeLesson({ id: "game-development-foundations-input", title: "Player Input", focus: "game input", code: "if (input.isDown(\"ArrowRight\")) {\n  player.velocity.x = 5;\n}\n\nplayer.move();", challenge: "Map two keyboard or touch inputs to two different player actions.", starterCode: "const controls = {\n  move: \"\",\n  action: \"\"\n};", quizQuestion: "Why separate input from movement logic?", quizOptions: ["It keeps controls easier to change and test", "It prevents all interaction", "It removes the game loop", "It hides the player"], quizAnswer: "It keeps controls easier to change and test" }),
  ],
  "game-design": [
    makeLesson({ id: "game-design-goals", title: "Goals and Player Feedback", focus: "game goals and feedback", code: "const goal = {\n  objective: \"Reach the exit\",\n  feedback: \"Door unlocked\",\n  reward: 100\n};", challenge: "Define a clear goal, success feedback, and reward for a one-screen game.", starterCode: "const goal = { objective: \"\", feedback: \"\", reward: 0 };", quizQuestion: "Why is feedback important in game design?", quizOptions: ["It tells players how their actions affect the game", "It hides progress", "It replaces goals", "It prevents learning"], quizAnswer: "It tells players how their actions affect the game" }),
    makeLesson({ id: "game-design-difficulty", title: "Difficulty and Pacing", focus: "game difficulty curves", code: "const levels = [\n  { enemies: 1, time: 60 },\n  { enemies: 2, time: 50 },\n  { enemies: 4, time: 45 }\n];", challenge: "Create three levels that increase challenge gradually without making the first level frustrating.", starterCode: "const levels = [\n  { difficulty: 1 },\n  { difficulty: 2 },\n  { difficulty: 3 }\n];", quizQuestion: "What is a good difficulty curve?", quizOptions: ["A gradual increase that teaches before it tests", "Maximum difficulty immediately", "No feedback", "Random difficulty only"], quizAnswer: "A gradual increase that teaches before it tests" }),
    makeLesson({ id: "game-design-prototyping", title: "Prototyping Mechanics", focus: "gameplay prototyping", code: "const prototype = {\n  mechanic: \"jump\",\n  question: \"Is timing fun?\",\n  test: \"10-second playable slice\"\n};", challenge: "Choose one game mechanic and describe the smallest playable test for it.", starterCode: "const prototype = { mechanic: \"\", test: \"\" };", quizQuestion: "Why prototype a mechanic early?", quizOptions: ["To learn quickly before building many assets", "To avoid playtesting", "To finalize every detail", "To remove iteration"], quizAnswer: "To learn quickly before building many assets" }),
  ],
  "unity-fundamentals": [
    makeLesson({ id: "unity-fundamentals-objects", title: "Unity Scenes and GameObjects", focus: "Unity GameObjects", code: "public class Player : MonoBehaviour\n{\n    public float speed = 5f;\n}", challenge: "Describe which GameObjects a simple Unity level needs and what each one is responsible for.", starterCode: "// List the GameObjects for your scene here\n", quizQuestion: "What is a GameObject in Unity?", quizOptions: ["An entity in a scene that can hold components", "A database record", "A shell command", "A network packet"], quizAnswer: "An entity in a scene that can hold components" }),
    makeLesson({ id: "unity-fundamentals-components", title: "Components and Prefabs", focus: "Unity components", code: "gameObject.AddComponent<Rigidbody>();\n\nInstantiate(enemyPrefab, spawnPoint.position, Quaternion.identity);", challenge: "Explain which behavior could be a reusable prefab and which values should be configurable.", starterCode: "// Describe a reusable enemy prefab\n", quizQuestion: "Why use prefabs?", quizOptions: ["To reuse configured GameObjects consistently", "To remove scenes", "To disable scripts", "To store user passwords"], quizAnswer: "To reuse configured GameObjects consistently" }),
    makeLesson({ id: "unity-fundamentals-physics", title: "Physics and Collisions", focus: "Unity physics", code: "void OnCollisionEnter(Collision collision)\n{\n    if (collision.gameObject.CompareTag(\"Goal\"))\n        CompleteLevel();\n}", challenge: "Define what should happen when a player collides with a goal and with an obstacle.", starterCode: "void OnCollisionEnter(Collision collision)\n{\n    // Check the collision and choose an action\n}", quizQuestion: "What can a collision callback detect?", quizOptions: ["When physics bodies interact", "When a user changes a password", "When a package installs", "When a query is indexed"], quizAnswer: "When physics bodies interact" }),
  ],
  "game-programming": [
    makeLesson({ id: "game-programming-movement", title: "Movement Systems", focus: "game movement programming", code: "const direction = inputVector.normalize();\nplayer.position = player.position.add(\n  direction.multiply(speed * deltaTime)\n);", challenge: "Explain how delta time keeps movement consistent across different frame rates.", starterCode: "const movement = { direction: { x: 0, y: 0 }, speed: 5 };", quizQuestion: "Why use delta time in movement?", quizOptions: ["To make movement depend on elapsed time rather than frame count", "To freeze a player", "To remove input", "To save a database"], quizAnswer: "To make movement depend on elapsed time rather than frame count" }),
    makeLesson({ id: "game-programming-collisions", title: "Collision Logic", focus: "game collision logic", code: "if (overlaps(player, coin)) {\n  score += 10;\n  remove(coin);\n}", challenge: "Write the steps that occur when a player collects a coin.", starterCode: "if (overlaps(player, coin)) {\n  // update score\n  // remove coin\n}", quizQuestion: "What should collision logic define?", quizOptions: ["The game response when objects interact", "Only the color palette", "The app login flow", "A database migration"], quizAnswer: "The game response when objects interact" }),
    makeLesson({ id: "game-programming-state", title: "Gameplay State Machines", focus: "gameplay state machines", code: "switch (enemy.state) {\n  case \"patrol\": patrol(); break;\n  case \"chase\": chase(player); break;\n  case \"defeated\": disappear(); break;\n}", challenge: "Define three states for an enemy and the event that moves it between each state.", starterCode: "const states = [\"\", \"\", \"\"];\n// Describe the transitions", quizQuestion: "Why use a state machine?", quizOptions: ["To make allowed behavior changes explicit", "To remove all game rules", "To hide transitions", "To replace rendering"], quizAnswer: "To make allowed behavior changes explicit" }),
  ],
  "system-design-foundations": [
    makeLesson({ id: "system-design-foundations-requirements", title: "Requirements and Constraints", focus: "system design requirements", code: "const requirements = {\n  users: 100000,\n  readWriteRatio: \"10:1\",\n  latencyMs: 200,\n  availability: \"99.9%\"\n};", challenge: "Write three functional requirements and three non-functional constraints for a course platform.", starterCode: "const requirements = { functional: [], nonFunctional: [] };", quizQuestion: "Why clarify requirements before choosing technologies?", quizOptions: ["Architecture should solve the actual product constraints", "Technology choices never have trade-offs", "It removes the need for users", "It guarantees no scaling"], quizAnswer: "Architecture should solve the actual product constraints" }),
    makeLesson({ id: "system-design-foundations-components", title: "Service Boundaries", focus: "system service boundaries", code: "Client -> API -> CourseService\n                  -> ProgressService\n                  -> NotificationService", challenge: "Break a learning platform into three services and state the responsibility of each.", starterCode: "const services = {\n  serviceA: \"\",\n  serviceB: \"\",\n  serviceC: \"\"\n};", quizQuestion: "What is a service boundary?", quizOptions: ["A clear responsibility and contract for a system component", "A visual divider only", "A user password", "A CSS breakpoint"], quizAnswer: "A clear responsibility and contract for a system component" }),
    makeLesson({ id: "system-design-foundations-tradeoffs", title: "Architecture Trade-offs", focus: "architecture trade-offs", code: "const decision = {\n  choice: \"cache reads\",\n  benefit: \"lower latency\",\n  cost: \"stale data\",\n  mitigation: \"short TTL\"\n};", challenge: "Choose one design decision and document its benefit, cost, and mitigation.", starterCode: "const decision = { choice: \"\", benefit: \"\", cost: \"\", mitigation: \"\" };", quizQuestion: "What should a design decision include?", quizOptions: ["Benefits, costs, and ways to reduce risk", "Only the technology name", "No assumptions", "A guarantee of perfection"], quizAnswer: "Benefits, costs, and ways to reduce risk" }),
  ],
  "scalability-and-performance": [
    makeLesson({ id: "scalability-and-performance-capacity", title: "Capacity and Bottlenecks", focus: "capacity planning", code: "const capacity = {\n  requestsPerSecond: 1000,\n  averageLatencyMs: 80,\n  databaseConnections: 40\n};", challenge: "Identify the likely bottleneck in a system where traffic grows but database connections stay fixed.", starterCode: "const capacity = { traffic: 0, databaseConnections: 0, bottleneck: \"\" };", quizQuestion: "What is a bottleneck?", quizOptions: ["A constrained resource that limits system throughput", "A UI label", "A backup file", "A test name"], quizAnswer: "A constrained resource that limits system throughput" }),
    makeLesson({ id: "scalability-and-performance-caching", title: "Caching", focus: "system caching", code: "const cached = cache.get(\"course:react\");\nif (cached) return cached;\nconst course = database.find(\"react\");\ncache.set(\"course:react\", course, 60);", challenge: "Choose data that is safe to cache and explain how stale results should be handled.", starterCode: "const cachePolicy = { key: \"\", ttlSeconds: 0, staleStrategy: \"\" };", quizQuestion: "What is a common caching trade-off?", quizOptions: ["Lower latency in exchange for possible staleness", "More latency with no benefit", "No memory use", "Automatic correctness for all data"], quizAnswer: "Lower latency in exchange for possible staleness" }),
    makeLesson({ id: "scalability-and-performance-queues", title: "Queues and Backpressure", focus: "queues and backpressure", code: "queue.publish({\n  type: \"send-certificate\",\n  userId: 42\n});\nworker.consume(queue);", challenge: "Describe a task that should be processed asynchronously instead of during a user's request.", starterCode: "const job = { type: \"\", payload: {} };\nqueue.publish(job);", quizQuestion: "Why use a queue?", quizOptions: ["To smooth bursts and separate slow work from requests", "To remove retries", "To force every task to be synchronous", "To hide errors"], quizAnswer: "To smooth bursts and separate slow work from requests" }),
  ],
  "distributed-systems": [
    makeLesson({ id: "distributed-systems-consistency", title: "Consistency Models", focus: "distributed consistency", code: "write(primary, progress);\nreplica.waitForReplication();\nread(replica);", challenge: "Explain when a learner can tolerate slightly stale progress and when strong consistency is more important.", starterCode: "const policy = { data: \"\", consistency: \"\", reason: \"\" };", quizQuestion: "What is a consistency trade-off about?", quizOptions: ["When and how replicas see the same data", "Which font to use", "Whether code compiles", "How users log out"], quizAnswer: "When and how replicas see the same data" }),
    makeLesson({ id: "distributed-systems-failures", title: "Failure and Retries", focus: "distributed system failures", code: "for (let attempt = 1; attempt <= 3; attempt++) {\n  if (request()) break;\n  wait(2 ** attempt);\n}", challenge: "Design a retry policy that avoids retry storms and gives up after a clear limit.", starterCode: "const retryPolicy = { maxAttempts: 0, backoff: \"\", retryableErrors: [] };", quizQuestion: "Why should retries be bounded?", quizOptions: ["To avoid amplifying failures and overloading a dependency", "To guarantee instant success", "To remove timeouts", "To skip monitoring"], quizAnswer: "To avoid amplifying failures and overloading a dependency" }),
    makeLesson({ id: "distributed-systems-coordination", title: "Coordination and Idempotency", focus: "distributed coordination", code: "if (!processed.has(event.id)) {\n  apply(event);\n  processed.add(event.id);\n}", challenge: "Explain how an idempotency key protects a payment or progress update from duplicate delivery.", starterCode: "const processedIds = new Set();\nfunction handle(event) {\n  // Make this safe for duplicate events\n}", quizQuestion: "What does idempotency provide?", quizOptions: ["The same safe result when an operation is repeated", "A faster UI color", "A new password", "A larger image"], quizAnswer: "The same safe result when an operation is repeated" }),
  ],
  "api-architecture": [
    makeLesson({ id: "api-architecture-contracts", title: "API Contracts", focus: "API contracts", code: "GET /api/courses/react\n\n200 OK\n{\n  \"id\": \"react\",\n  \"title\": \"React\"\n}", challenge: "Design a response shape for a course endpoint that includes an identifier, title, level, and lessons count.", starterCode: "const response = { id: \"\", title: \"\", level: \"\", lessons: 0 };", quizQuestion: "Why define an API contract?", quizOptions: ["Clients and servers need a predictable agreement", "To avoid documenting behavior", "To change fields randomly", "To remove validation"], quizAnswer: "Clients and servers need a predictable agreement" }),
    makeLesson({ id: "api-architecture-versioning", title: "Versioning APIs", focus: "API versioning", code: "GET /api/v1/courses\nGET /api/v2/courses\n\n// v2 adds progress without breaking v1 clients", challenge: "Give one reason an API team might introduce a new version instead of changing an existing response.", starterCode: "const versions = { v1: \"\", v2: \"\" };", quizQuestion: "What does versioning protect?", quizOptions: ["Existing clients from incompatible changes", "A database from all reads", "A UI from all bugs", "A server from logging"], quizAnswer: "Existing clients from incompatible changes" }),
    makeLesson({ id: "api-architecture-security", title: "API Security and Limits", focus: "API security", code: "if (!token) return 401;\nif (rateLimit.exceeded(userId)) return 429;\nreturn courseService.list();", challenge: "List two protections an authenticated course API should apply before returning private progress.", starterCode: "const protections = [\n  \"\",\n  \"\"\n];", quizQuestion: "Why apply rate limits?", quizOptions: ["To reduce abuse and protect service capacity", "To remove authentication", "To make errors invisible", "To store passwords"], quizAnswer: "To reduce abuse and protect service capacity" }),
  ],
};

function makeExpansionLesson({ id, title, focus, snippet }) {
  const concept = focus.toLowerCase();
  return makeLesson({
    id,
    title,
    focus,
    code: snippet || `// ${title}\nconst concept = "${focus}";\nconsole.log(concept);`,
    challenge: `Create a small practice exercise about ${concept}. Explain what it does, how you would test it, and what could go wrong.`,
    starterCode: `const practice = {\n  topic: "${focus}",\n  notes: "",\n  test: ""\n};\n\nconsole.log(practice);`,
    quizQuestion: `Which approach is most useful when learning ${concept}?`,
    quizOptions: ["Build and test a small example", "Skip practice and testing", "Copy code without understanding it", "Avoid asking what can fail"],
    quizAnswer: "Build and test a small example",
  });
}

const extraCourseLessons = {
  "devops-foundations": [
    makeExpansionLesson({ id: "devops-foundations-automation", title: "Automation as a Habit", focus: "DevOps automation", snippet: "const checks = [\"lint\", \"test\", \"build\"];\nchecks.forEach((check) => console.log(`run:${check}`));" }),
    makeExpansionLesson({ id: "devops-foundations-collaboration", title: "Shared Ownership", focus: "DevOps collaboration" }),
    makeExpansionLesson({ id: "devops-foundations-monitoring", title: "Monitoring a Release", focus: "release monitoring" }),
    makeExpansionLesson({ id: "devops-foundations-containers", title: "Containers in Delivery", focus: "containers in DevOps", snippet: "docker build -t codelab-api .\ndocker run --rm -p 3000:3000 codelab-api" }),
    makeExpansionLesson({ id: "devops-foundations-capstone", title: "DevOps Delivery Plan", focus: "a complete DevOps delivery plan" }),
  ],
  "linux-for-devops": [
    makeExpansionLesson({ id: "linux-for-devops-files", title: "Files and Shell Scripts", focus: "Linux shell scripting", snippet: "#!/usr/bin/env bash\nset -e\nmkdir -p reports\necho \"build complete\" > reports/status.txt" }),
    makeExpansionLesson({ id: "linux-for-devops-networking", title: "Linux Networking", focus: "Linux networking" }),
    makeExpansionLesson({ id: "linux-for-devops-security", title: "Hardening a Server", focus: "Linux server hardening" }),
    makeExpansionLesson({ id: "linux-for-devops-containers", title: "Linux and Containers", focus: "Linux container operations" }),
    makeExpansionLesson({ id: "linux-for-devops-capstone", title: "Operate a Small Service", focus: "a Linux service runbook" }),
  ],
  "ci-cd-pipelines": [
    makeExpansionLesson({ id: "ci-cd-pipelines-as-code", title: "Pipelines as Code", focus: "pipelines as code" }),
    makeExpansionLesson({ id: "ci-cd-pipelines-artifacts", title: "Build Artifacts", focus: "CI/CD build artifacts" }),
    makeExpansionLesson({ id: "ci-cd-pipelines-branches", title: "Branches and Pull Requests", focus: "CI/CD branch strategy" }),
    makeExpansionLesson({ id: "ci-cd-pipelines-deployment", title: "Deployment Strategies", focus: "deployment strategies" }),
    makeExpansionLesson({ id: "ci-cd-pipelines-capstone", title: "Ship a Service Safely", focus: "a complete CI/CD workflow" }),
  ],
  "infrastructure-as-code": [
    makeExpansionLesson({ id: "infrastructure-as-code-providers", title: "Providers and Resources", focus: "infrastructure providers" }),
    makeExpansionLesson({ id: "infrastructure-as-code-variables", title: "Variables and Outputs", focus: "infrastructure variables" }),
    makeExpansionLesson({ id: "infrastructure-as-code-remote-state", title: "Remote State", focus: "remote infrastructure state" }),
    makeExpansionLesson({ id: "infrastructure-as-code-environments", title: "Multiple Environments", focus: "infrastructure environments" }),
    makeExpansionLesson({ id: "infrastructure-as-code-capstone", title: "Provision a Web Stack", focus: "a complete infrastructure plan" }),
  ],
  "cybersecurity-fundamentals": [
    makeExpansionLesson({ id: "cybersecurity-fundamentals-coding", title: "Secure Coding Basics", focus: "secure coding" }),
    makeExpansionLesson({ id: "cybersecurity-fundamentals-cryptography", title: "Cryptography Concepts", focus: "applied cryptography" }),
    makeExpansionLesson({ id: "cybersecurity-fundamentals-vulnerabilities", title: "Vulnerability Management", focus: "vulnerability management" }),
    makeExpansionLesson({ id: "cybersecurity-fundamentals-awareness", title: "Security Awareness", focus: "security awareness" }),
    makeExpansionLesson({ id: "cybersecurity-fundamentals-capstone", title: "Secure Platform Checklist", focus: "a practical security baseline" }),
  ],
  "network-security": [
    makeExpansionLesson({ id: "network-security-protocols", title: "Protocols and Ports", focus: "network protocols and ports" }),
    makeExpansionLesson({ id: "network-security-tls", title: "TLS and Certificates", focus: "TLS security" }),
    makeExpansionLesson({ id: "network-security-vpn", title: "VPNs and Private Access", focus: "private network access" }),
    makeExpansionLesson({ id: "network-security-ids", title: "Detection and Response", focus: "network intrusion detection" }),
    makeExpansionLesson({ id: "network-security-capstone", title: "Design a Protected Network", focus: "a protected application network" }),
  ],
  "ethical-hacking-basics": [
    makeExpansionLesson({ id: "ethical-hacking-basics-scanning", title: "Safe Scanning", focus: "authorized vulnerability scanning" }),
    makeExpansionLesson({ id: "ethical-hacking-basics-web", title: "Web Application Testing", focus: "web application security testing" }),
    makeExpansionLesson({ id: "ethical-hacking-basics-vulnerabilities", title: "Prioritizing Findings", focus: "security vulnerability prioritization" }),
    makeExpansionLesson({ id: "ethical-hacking-basics-evidence", title: "Evidence and Reproduction", focus: "security testing evidence" }),
    makeExpansionLesson({ id: "ethical-hacking-basics-capstone", title: "Write a Test Report", focus: "an ethical hacking engagement report" }),
  ],
  "identity-access-management": [
    makeExpansionLesson({ id: "identity-access-management-mfa", title: "Passwords and MFA", focus: "multi-factor authentication" }),
    makeExpansionLesson({ id: "identity-access-management-sessions", title: "Sessions and Tokens", focus: "secure sessions and tokens" }),
    makeExpansionLesson({ id: "identity-access-management-rbac", title: "RBAC and ABAC", focus: "role-based access control" }),
    makeExpansionLesson({ id: "identity-access-management-services", title: "Service Identities", focus: "machine identity management" }),
    makeExpansionLesson({ id: "identity-access-management-capstone", title: "Protect a Learning Platform", focus: "an identity and access design" }),
  ],
  "mobile-development-foundations": [
    makeExpansionLesson({ id: "mobile-development-foundations-accessibility", title: "Mobile Accessibility", focus: "mobile accessibility" }),
    makeExpansionLesson({ id: "mobile-development-foundations-responsive", title: "Responsive Mobile Layouts", focus: "responsive mobile layouts" }),
    makeExpansionLesson({ id: "mobile-development-foundations-storage", title: "Local Storage", focus: "mobile local storage" }),
    makeExpansionLesson({ id: "mobile-development-foundations-api", title: "Mobile APIs and Offline States", focus: "mobile API and offline design" }),
    makeExpansionLesson({ id: "mobile-development-foundations-capstone", title: "Plan a Mobile App", focus: "a complete mobile app foundation" }),
  ],
  "android-with-kotlin": [
    makeExpansionLesson({ id: "android-with-kotlin-activities", title: "Screens and Activities", focus: "Android activities" }),
    makeExpansionLesson({ id: "android-with-kotlin-networking", title: "Networking on Android", focus: "Android networking" }),
    makeExpansionLesson({ id: "android-with-kotlin-persistence", title: "Local Persistence", focus: "Android data persistence" }),
    makeExpansionLesson({ id: "android-with-kotlin-testing", title: "Testing Android Apps", focus: "Android app testing" }),
    makeExpansionLesson({ id: "android-with-kotlin-capstone", title: "Build an Android Flow", focus: "a complete Android course flow" }),
  ],
  "ios-with-swift": [
    makeExpansionLesson({ id: "ios-with-swift-structure", title: "App Structure", focus: "iOS app structure" }),
    makeExpansionLesson({ id: "ios-with-swift-navigation", title: "SwiftUI Navigation", focus: "SwiftUI navigation" }),
    makeExpansionLesson({ id: "ios-with-swift-networking", title: "Networking with Swift", focus: "iOS networking" }),
    makeExpansionLesson({ id: "ios-with-swift-persistence", title: "Persisting App Data", focus: "iOS data persistence" }),
    makeExpansionLesson({ id: "ios-with-swift-capstone", title: "Build an iOS Flow", focus: "a complete iOS course flow" }),
  ],
  "react-native": [
    makeExpansionLesson({ id: "react-native-setup", title: "Project Setup", focus: "React Native project setup" }),
    makeExpansionLesson({ id: "react-native-styling", title: "Styling and Layout", focus: "React Native styling" }),
    makeExpansionLesson({ id: "react-native-networking", title: "Networking and Loading", focus: "React Native data loading" }),
    makeExpansionLesson({ id: "react-native-storage", title: "Persisting Mobile State", focus: "React Native persistence" }),
    makeExpansionLesson({ id: "react-native-capstone", title: "Build a Cross-Platform Flow", focus: "a complete React Native app flow" }),
  ],
  "game-development-foundations": [
    makeExpansionLesson({ id: "game-development-foundations-camera", title: "Cameras and Viewports", focus: "game cameras and viewports" }),
    makeExpansionLesson({ id: "game-development-foundations-assets", title: "Assets and Resources", focus: "game assets and resources" }),
    makeExpansionLesson({ id: "game-development-foundations-audio", title: "Game Audio", focus: "game audio systems" }),
    makeExpansionLesson({ id: "game-development-foundations-ui", title: "Game Interface", focus: "game UI design" }),
    makeExpansionLesson({ id: "game-development-foundations-capstone", title: "Build a Small Game Loop", focus: "a complete small game prototype" }),
  ],
  "game-design": [
    makeExpansionLesson({ id: "game-design-loops", title: "Core Gameplay Loops", focus: "core gameplay loops" }),
    makeExpansionLesson({ id: "game-design-levels", title: "Level Design", focus: "game level design" }),
    makeExpansionLesson({ id: "game-design-narrative", title: "Narrative and World Building", focus: "game narrative design" }),
    makeExpansionLesson({ id: "game-design-accessibility", title: "Accessible Game Design", focus: "accessible game design" }),
    makeExpansionLesson({ id: "game-design-capstone", title: "Design a Playable Concept", focus: "a complete game design concept" }),
  ],
  "unity-fundamentals": [
    makeExpansionLesson({ id: "unity-fundamentals-scripting", title: "Unity Scripting", focus: "Unity scripting" }),
    makeExpansionLesson({ id: "unity-fundamentals-input", title: "Unity Input", focus: "Unity input systems" }),
    makeExpansionLesson({ id: "unity-fundamentals-animation", title: "Animation Controllers", focus: "Unity animation" }),
    makeExpansionLesson({ id: "unity-fundamentals-ui", title: "Unity UI", focus: "Unity user interfaces" }),
    makeExpansionLesson({ id: "unity-fundamentals-capstone", title: "Build a Unity Scene", focus: "a complete Unity scene" }),
  ],
  "game-programming": [
    makeExpansionLesson({ id: "game-programming-cameras", title: "Camera Programming", focus: "game camera programming" }),
    makeExpansionLesson({ id: "game-programming-ai", title: "Game AI", focus: "game artificial intelligence" }),
    makeExpansionLesson({ id: "game-programming-animation", title: "Animation State", focus: "game animation state" }),
    makeExpansionLesson({ id: "game-programming-optimization", title: "Game Performance", focus: "game performance optimization" }),
    makeExpansionLesson({ id: "game-programming-capstone", title: "Build a Gameplay System", focus: "a complete gameplay system" }),
  ],
  "system-design-foundations": [
    makeExpansionLesson({ id: "system-design-foundations-data", title: "Data Modeling", focus: "system data modeling" }),
    makeExpansionLesson({ id: "system-design-foundations-api", title: "Interfaces Between Services", focus: "service interfaces" }),
    makeExpansionLesson({ id: "system-design-foundations-storage", title: "Choosing Storage", focus: "system storage choices" }),
    makeExpansionLesson({ id: "system-design-foundations-observability", title: "Designing for Operations", focus: "system observability" }),
    makeExpansionLesson({ id: "system-design-foundations-capstone", title: "Design a Course Platform", focus: "a complete course platform architecture" }),
  ],
  "scalability-and-performance": [
    makeExpansionLesson({ id: "scalability-and-performance-load", title: "Load Testing", focus: "system load testing" }),
    makeExpansionLesson({ id: "scalability-and-performance-sharding", title: "Partitioning Data", focus: "data partitioning" }),
    makeExpansionLesson({ id: "scalability-and-performance-cdn", title: "CDNs and Edge Delivery", focus: "CDN and edge delivery" }),
    makeExpansionLesson({ id: "scalability-and-performance-reliability", title: "Reliability Budgets", focus: "service reliability" }),
    makeExpansionLesson({ id: "scalability-and-performance-capstone", title: "Scale a Learning Service", focus: "a scalable learning service" }),
  ],
  "distributed-systems": [
    makeExpansionLesson({ id: "distributed-systems-clocks", title: "Time and Ordering", focus: "time and ordering in distributed systems" }),
    makeExpansionLesson({ id: "distributed-systems-consensus", title: "Consensus Concepts", focus: "distributed consensus" }),
    makeExpansionLesson({ id: "distributed-systems-events", title: "Event-Driven Services", focus: "event-driven architecture" }),
    makeExpansionLesson({ id: "distributed-systems-recovery", title: "Disaster Recovery", focus: "distributed disaster recovery" }),
    makeExpansionLesson({ id: "distributed-systems-capstone", title: "Design for Failure", focus: "a fault-tolerant distributed system" }),
  ],
  "api-architecture": [
    makeExpansionLesson({ id: "api-architecture-rest", title: "REST Resource Design", focus: "REST resource design" }),
    makeExpansionLesson({ id: "api-architecture-validation", title: "Validation and Schemas", focus: "API validation" }),
    makeExpansionLesson({ id: "api-architecture-errors", title: "Errors and Status Codes", focus: "API error design" }),
    makeExpansionLesson({ id: "api-architecture-docs", title: "Documentation and Testing", focus: "API documentation and testing" }),
    makeExpansionLesson({ id: "api-architecture-capstone", title: "Design a Production API", focus: "a complete production API" }),
  ],
};

const expandedCourseLessonPlans = Object.fromEntries(
  Object.entries(courseLessonPlans).map(([courseId, existingLessons]) => [
    courseId,
    [...existingLessons, ...(extraCourseLessons[courseId] || [])],
  ])
);

const generatedTopicTemplates = {
  coding: [
    "Syntax and Program Structure",
    "Variables and Types",
    "Control Flow",
    "Functions and Reusable Logic",
    "Collections and Data",
    "Modules and Packages",
    "Object-Oriented Design",
    "Errors and Defensive Programming",
    "Testing and Debugging",
    "APIs, Persistence, and Integration",
    "Performance, Security, and Production Practice",
    "Advanced Language Patterns",
    "Concurrency and Parallel Work",
    "API Design and Compatibility",
    "Data Modeling and Persistence",
    "Observability and Diagnostics",
    "Secure Dependency and Supply-Chain Practice",
    "Architecture Refactoring and Technical Debt",
    "Team-Scale Code Review and Delivery",
    "Build and Ship a Complete Project",
  ],
  engines: [
    "The Core Pipeline",
    "Inputs and Representation",
    "Algorithms and Decisions",
    "State and Memory",
    "Interfaces and Extensibility",
    "Performance Trade-offs",
    "Concurrency and Resource Management",
    "Reliability and Failure Recovery",
    "Testing and Observability",
    "Security and Operational Boundaries",
    "Design Review and Architecture Trade-offs",
    "Caching and Resource Lifecycles",
    "Concurrency, Scheduling, and Backpressure",
    "Compatibility and Versioning",
    "Security Boundaries and Threat Modeling",
    "Profiling and Capacity Planning",
    "Incident Response and Recovery",
    "Maintainable Architecture Refactoring",
    "Build and Ship an Advanced Engine Project",
    "Build an Engine-Inspired Project",
  ],
  ai: [
    "Core Concepts and Terminology",
    "Preparing Useful Inputs",
    "Prompt and Task Design",
    "Calling a Model or Tool",
    "Structured Outputs and Application State",
    "Evaluating Output Quality",
    "Safety, Privacy, and Failure Handling",
    "Retrieval, Memory, and Context",
    "Testing and Observability",
    "Production Cost and Reliability",
    "Responsible Architecture and Governance",
    "Advanced Evaluation and Regression Testing",
    "Tool Use, Agents, and Permission Boundaries",
    "Data Protection and Privacy Engineering",
    "Latency, Throughput, and Cost Optimization",
    "Model Failure Analysis and Red Teaming",
    "Production Rollouts and Incident Response",
    "Architecture Review and Long-Term Maintenance",
    "Build and Operate a Mastery AI System",
    "Build and Evaluate an AI-Powered Project",
  ],
  tools: [
    "Installation and Setup",
    "The Everyday Workflow",
    "Projects, Files, and State",
    "Automation and Scripting",
    "Configuration and Environment Management",
    "Collaboration and Sharing",
    "Security and Permissions",
    "Troubleshooting and Recovery",
    "Integration with a Development Pipeline",
    "Performance and Reliable Operations",
    "Team Standards and Maintainability",
    "Advanced Automation Patterns",
    "Plugin and Extension Design",
    "Cross-Platform Compatibility",
    "Performance Profiling and Capacity",
    "Auditability and Compliance",
    "Incident Response and Recovery",
    "Architecture Refactoring",
    "Build and Operate an Expert Workflow",
    "Build a Repeatable Production Workflow",
  ],
  web: [
    "Web Foundations",
    "Structure and Semantics",
    "State and Interaction",
    "Requests and Responses",
    "Components and Reuse",
    "Data, Forms, and Validation",
    "Authentication and Web Security",
    "Testing and Accessibility",
    "Performance and SEO",
    "Deployment and Observability",
    "Architecture and Maintainability",
    "Advanced State and Data Architecture",
    "Caching, Streaming, and Real-Time Interaction",
    "Internationalization and Complex Forms",
    "Web Performance Profiling",
    "Threat Modeling and Secure Architecture",
    "Release Engineering and Feature Flags",
    "Observability and Incident Response",
    "Build and Operate a Production Web System",
    "Build and Ship a Production Feature",
  ],
  data: [
    "Data and Table Foundations",
    "Queries and Filters",
    "Relationships and Modeling",
    "Indexes and Performance",
    "Transactions and Consistency",
    "Security and Backups",
    "Views, Aggregations, and Reporting",
    "Testing and Data Migration",
    "Operations, Monitoring, and Recovery",
    "Scaling and Distributed Data Patterns",
    "Production Design Trade-offs",
    "Advanced Query Planning",
    "Concurrency, Locking, and Isolation",
    "Distributed Data and Replication",
    "Partitioning and Sharding Strategies",
    "Data Governance and Privacy",
    "Performance Benchmarking and Capacity",
    "Disaster Recovery and Operational Readiness",
    "Build and Operate a Production Data System",
    "Build a Data-Driven Feature",
  ],
};

const generatedCourseGroups = {
  coding: ["java", "cpp", "c-programming", "csharp", "typescript", "go", "rust", "php", "kotlin", "swift"],
  engines: ["game-engine", "search-engine", "browser-engine", "ai-engine", "rendering-engine", "recommendation-engine", "compiler-engine", "web-crawler"],
  ai: ["ai-fundamentals", "prompt-engineering", "ai-api-development", "ai-agents", "ai-chatbots", "ai-applications"],
  tools: ["git", "github", "docker", "vscode", "npm", "terminal", "postman", "vercel", "linux", "devtools"],
  web: ["html", "css", "responsive-design", "react", "nodejs", "express", "rest-api", "nextjs", "tailwind", "web-security", "authentication", "websockets", "pwa", "frontend-projects", "fullstack"],
  data: ["mongodb", "sql", "postgresql", "mysql", "firebase", "database-design", "database-security"],
};

function humanizeCourseId(courseId) {
  return courseId
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function slugifyTopic(topic) {
  return topic.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function makeGeneratedCourseLessons(courseId, topics) {
  const courseLabel = humanizeCourseId(courseId);
  return topics.map((topic, index) => {
    const answer = `Apply ${topic} using a small tested example`;
    return makeLesson({
      id: `${courseId}-${String(index + 1).padStart(2, "0")}-${slugifyTopic(topic)}`,
      title: `${courseLabel}: ${topic}`,
      focus: `${courseLabel} ${topic}`,
      code: `const lessonPlan = {\n  course: "${courseLabel}",\n  topic: "${topic}",\n  step: ${index + 1},\n  tested: true\n};\n\nconsole.log(lessonPlan);`,
      challenge: `Create a small ${courseLabel} exercise that demonstrates ${topic.toLowerCase()}. Explain your design choice, test the happy path, and describe one failure case.`,
      starterCode: `const exercise = {\n  course: "${courseLabel}",\n  topic: "${topic}",\n  result: null\n};\n\n// Implement and test the idea here\nconsole.log(exercise);`,
      quizQuestion: `Which approach best supports ${topic.toLowerCase()}?`,
      quizOptions: [answer, "Skip planning and testing", "Hide errors from users", "Give every component unlimited access"],
      quizAnswer: answer,
    });
  });
}

const generatedMissingCourseLessons = Object.fromEntries(
  Object.entries(generatedCourseGroups).flatMap(([group, courseIds]) =>
    courseIds.map((courseId) => [courseId, makeGeneratedCourseLessons(courseId, generatedTopicTemplates[group])])
  )
);

function makeDatabaseCourseLessons(courseId, courseTitle, topics) {
  return topics.map((topic, index) => makeLesson({
    id: `${courseId}-${String(index + 1).padStart(2, "0")}-${slugifyTopic(topic)}`,
    title: `${courseTitle}: ${topic}`,
    focus: `${courseTitle} ${topic}`,
    code: `const databasePractice = {\n  course: "${courseTitle}",\n  topic: "${topic}",\n  step: ${index + 1},\n  tested: true\n};\n\nconsole.log(databasePractice);`,
    challenge: `Design a small, safe database exercise for ${topic.toLowerCase()}. Define the data shape, test the expected behavior, and explain one failure or recovery case.`,
    starterCode: `const databaseExercise = {\n  course: "${courseTitle}",\n  topic: "${topic}",\n  schema: {},\n  query: "",\n  expectedResult: ""\n};\n\n// Add a tested database idea here\nconsole.log(databaseExercise);`,
    quizQuestion: `Which approach best supports ${topic.toLowerCase()}?`,
    quizOptions: [
      `Apply ${topic.toLowerCase()} with clear data rules, testing, and recovery planning`,
      "Skip validation and backups",
      "Give every service unrestricted database access",
      "Hide failures from operators and users",
    ],
    quizAnswer: `Apply ${topic.toLowerCase()} with clear data rules, testing, and recovery planning`,
  }));
}

const databaseCourseLessonPlans = {
  "database-fundamentals": makeDatabaseCourseLessons(
    "database-fundamentals",
    "Database Fundamentals",
    ["Data, tables, and records", "Schemas and relationships", "Queries and changes", "Backups and data integrity"]
  ),
  sql: makeDatabaseCourseLessons(
    "sql",
    "SQL Fundamentals",
    ["SELECT and filtering", "INSERT, UPDATE, and DELETE", "Joins and relationships", "Transactions and constraints"]
  ),
  mongodb: makeDatabaseCourseLessons(
    "mongodb",
    "MongoDB",
    ["Documents and collections", "Queries and indexes", "Schema design patterns", "Validation and safe operations"]
  ),
  mysql: makeDatabaseCourseLessons(
    "mysql",
    "MySQL",
    ["MySQL schemas and tables", "Queries and joins", "Transactions and constraints", "Users, backups, and maintenance"]
  ),
  "database-tools-gui": makeDatabaseCourseLessons(
    "database-tools-gui",
    "Database Tools & GUI",
    ["Connections and environments", "Browsing and editing safely", "Query consoles and explain plans", "Export, import, and collaboration"]
  ),
  postgresql: makeDatabaseCourseLessons(
    "postgresql",
    "PostgreSQL",
    ["PostgreSQL schemas and types", "Queries and powerful joins", "Transactions and concurrency", "Extensions and production operations"]
  ),
  "database-design": makeDatabaseCourseLessons(
    "database-design",
    "Database Design",
    ["Requirements and entities", "Relationships and normalization", "Constraints and migrations", "Designing for change"]
  ),
  "advanced-sql": makeDatabaseCourseLessons(
    "advanced-sql",
    "Advanced SQL",
    ["Common table expressions", "Window functions", "Subqueries and set operations", "Readable, tested query design"]
  ),
  "database-indexing-performance": makeDatabaseCourseLessons(
    "database-indexing-performance",
    "Database Indexing & Performance",
    ["How indexes work", "Query plans and EXPLAIN", "Composite and covering indexes", "Measuring and tuning safely"]
  ),
  "redis-caching": makeDatabaseCourseLessons(
    "redis-caching",
    "Redis & Caching",
    ["Keys, values, and data structures", "Cache-aside patterns", "TTL, invalidation, and freshness", "Redis reliability and safe limits"]
  ),
  "nosql-databases": makeDatabaseCourseLessons(
    "nosql-databases",
    "NoSQL Databases",
    ["NoSQL data models", "Document and key-value patterns", "Consistency and trade-offs", "Choosing a NoSQL database"]
  ),
  "database-integration": makeDatabaseCourseLessons(
    "database-integration",
    "Database Integration",
    ["Application connections and pooling", "Repositories and service boundaries", "Validation and transactions", "Retries, errors, and observability"]
  ),
  "database-security": makeDatabaseCourseLessons(
    "database-security",
    "Database Security",
    ["Database identities and permissions", "Secrets and encryption", "Injection prevention and validation", "Auditing and secure backups"]
  ),
  "database-administration": makeDatabaseCourseLessons(
    "database-administration",
    "Database Administration",
    ["Users, roles, and configuration", "Migrations and maintenance", "Backups and restores", "Health checks and incident response"]
  ),
  "database-scaling": makeDatabaseCourseLessons(
    "database-scaling",
    "Database Scaling",
    ["Capacity and bottlenecks", "Read replicas and write paths", "Partitioning and sharding", "Scaling tests and trade-offs"]
  ),
  "distributed-databases": makeDatabaseCourseLessons(
    "distributed-databases",
    "Distributed Databases",
    ["Replication and consistency", "Partitions and failure", "Quorums and coordination", "Distributed data trade-offs"]
  ),
  "cloud-databases": makeDatabaseCourseLessons(
    "cloud-databases",
    "Cloud Databases",
    ["Managed database choices", "Cloud networking and access", "Scaling and cost controls", "Cloud backups and recovery"]
  ),
  "production-database-engineering": makeDatabaseCourseLessons(
    "production-database-engineering",
    "Production Database Engineering",
    ["Production readiness", "Observability and service objectives", "Safe schema changes", "Recovery and continuous improvement"]
  ),
  "database-backend-engineering": makeDatabaseCourseLessons(
    "database-backend-engineering",
    "Database + Backend Engineering",
    ["Data access layers and APIs", "Transactions across services", "Queues and asynchronous work", "Backend testing and reliability"]
  ),
};

function makeAiCourseLessons(courseId, courseTitle, topics) {
  return topics.map((topic, index) => makeLesson({
    id: `${courseId}-${String(index + 1).padStart(2, "0")}-${slugifyTopic(topic)}`,
    title: `${courseTitle}: ${topic}`,
    focus: `${courseTitle} ${topic}`,
    code: `const aiPractice = {\n  course: "${courseTitle}",\n  topic: "${topic}",\n  step: ${index + 1},\n  evaluationRequired: true\n};\n\nconsole.log(aiPractice);`,
    challenge: `Create a small, responsible AI practice exercise for ${topic.toLowerCase()}. Define the input and expected output, test one edge case, and explain how you would verify the result.`,
    starterCode: `const aiExercise = {\n  course: "${courseTitle}",\n  topic: "${topic}",\n  input: "",\n  expectedOutput: "",\n  notes: ""\n};\n\n// Add a test and record what you learned\nconsole.log(aiExercise);`,
    quizQuestion: `Which approach best supports ${topic.toLowerCase()}?`,
    quizOptions: [
      `Use ${topic.toLowerCase()} with clear goals, testing, and human review`,
      "Skip evaluation and trust every output",
      "Send sensitive data to every tool by default",
      "Hide failures from the people using the system",
    ],
    quizAnswer: `Use ${topic.toLowerCase()} with clear goals, testing, and human review`,
  }));
}

const aiCourseLessonPlans = {
  "ai-fundamentals": makeAiCourseLessons(
    "ai-fundamentals",
    "AI Fundamentals",
    ["AI and machine learning concepts", "Data, models, and representations", "Training and inference", "Evaluation and limitations"]
  ),
  "prompt-engineering": makeAiCourseLessons(
    "prompt-engineering",
    "Prompt Engineering",
    ["Clear tasks and instructions", "Context and examples", "Constraints and output formats", "Iteration and prompt testing"]
  ),
  "ai-productivity-tools": makeAiCourseLessons(
    "ai-productivity-tools",
    "AI Productivity Tools",
    ["Summarizing and transforming work", "Drafting and editing", "Planning and brainstorming", "Verification, privacy, and workflow habits"]
  ),
  "ai-research-knowledge-tools": makeAiCourseLessons(
    "ai-research-knowledge-tools",
    "AI Research & Knowledge Tools",
    ["Finding useful sources", "Evaluating source quality", "Notes, citations, and provenance", "Synthesizing a knowledge brief"]
  ),
  "ai-api-development": makeAiCourseLessons(
    "ai-api-development",
    "Building with AI APIs",
    ["Model requests and responses", "Credentials and configuration", "Structured output and errors", "Latency, cost, and evaluation"]
  ),
  "ai-chatbots": makeAiCourseLessons(
    "ai-chatbots",
    "Building AI Chatbots",
    ["Conversation state", "Intent and context handling", "Retrieval and useful memory", "Guardrails and conversation evaluation"]
  ),
  "ai-applications": makeAiCourseLessons(
    "ai-applications",
    "AI-Powered Applications",
    ["Choosing an AI use case", "User experience and human review", "Application data flows", "Testing and releasing an AI feature"]
  ),
  "rag-ai-knowledge-bases": makeAiCourseLessons(
    "rag-ai-knowledge-bases",
    "RAG & AI Knowledge Bases",
    ["Documents, chunks, and embeddings", "Retrieval and ranking", "Grounded answers and citations", "Freshness and RAG evaluation"]
  ),
  "ai-coding-tools": makeAiCourseLessons(
    "ai-coding-tools",
    "AI Coding Tools",
    ["Giving an AI assistant codebase context", "Generation and safe editing", "Tests and debugging with AI", "Review, security, and maintainability"]
  ),
  "ai-automation": makeAiCourseLessons(
    "ai-automation",
    "AI Automation",
    ["Triggers and workflow steps", "Connecting tools and data", "Human approvals and boundaries", "Retries, logs, and automation evaluation"]
  ),
  "ai-agents": makeAiCourseLessons(
    "ai-agents",
    "AI Agents",
    ["Agent loops and tool use", "Planning and task decomposition", "State, permissions, and limits", "Agent evaluation and recovery"]
  ),
  "local-ai-ollama": makeAiCourseLessons(
    "local-ai-ollama",
    "Local AI with Ollama",
    ["Local models and Ollama setup", "Model selection and resources", "Calling a local model API", "Privacy, quality, and local evaluation"]
  ),
  "multimodal-ai": makeAiCourseLessons(
    "multimodal-ai",
    "Multimodal AI",
    ["Text, image, audio, and video inputs", "Vision and audio understanding", "Multimodal prompts and transformations", "Evaluating multimodal outputs"]
  ),
  "ai-image-video-generation": makeAiCourseLessons(
    "ai-image-video-generation",
    "AI Image & Video Generation",
    ["Prompts and visual references", "Composition and controllable outputs", "Editing and iterative workflows", "Rights, safety, and quality evaluation"]
  ),
  "production-ai-engineering": makeAiCourseLessons(
    "production-ai-engineering",
    "Production AI Engineering",
    ["Production AI architecture", "Evaluation datasets and quality gates", "Reliability and observability", "Cost controls and safe rollouts"]
  ),
  "ai-security": makeAiCourseLessons(
    "ai-security",
    "AI Security",
    ["Prompt injection and unsafe inputs", "Data leakage and access boundaries", "Model and tool abuse", "Red teaming and security monitoring"]
  ),
  "ai-backend-engineering": makeAiCourseLessons(
    "ai-backend-engineering",
    "AI + Backend Engineering",
    ["Authentication for AI features", "API orchestration and service boundaries", "Queues, jobs, and streaming", "Persistence, logs, and backend observability"]
  ),
  "ai-cloud": makeAiCourseLessons(
    "ai-cloud",
    "AI + Cloud",
    ["Cloud inference and compute choices", "Cloud storage and AI data flows", "Scaling and cost management", "Secure cloud AI architecture"]
  ),
  "ai-agents-mcp-tools": makeAiCourseLessons(
    "ai-agents-mcp-tools",
    "AI Agents with MCP & Tools",
    ["Tool contracts and schemas", "Context servers and permissions", "Consent and safe tool execution", "Testing tool-using agents"]
  ),
  "ai-saas-products": makeAiCourseLessons(
    "ai-saas-products",
    "Building AI SaaS Products",
    ["Users, problems, and AI product scope", "Multi-user product architecture", "Feedback, evaluation, and iteration", "Operations, reliability, and launch"]
  ),
};

function makeCloudCourseLessons(courseId, courseTitle, topics) {
  return topics.map((topic, index) => makeLesson({
    id: `${courseId}-${String(index + 1).padStart(2, "0")}-${slugifyTopic(topic)}`,
    title: `${courseTitle}: ${topic}`,
    focus: `${courseTitle} ${topic}`,
    code: `const cloudLesson = {\n  course: "${courseTitle}",\n  topic: "${topic}",\n  step: ${index + 1},\n  practiceReady: true\n};\n\nconsole.log(cloudLesson);`,
    challenge: `Build a small ${courseTitle} exercise focused on ${topic.toLowerCase()}. Explain the design, test the happy path, and describe one operational failure case.`,
    starterCode: `const exercise = {\n  course: "${courseTitle}",\n  topic: "${topic}",\n  result: null\n};\n\n// Implement and test the idea here\nconsole.log(exercise);`,
    quizQuestion: `Which approach best supports ${topic.toLowerCase()}?`,
    quizOptions: [
      `Apply ${topic.toLowerCase()} with a tested, observable design`,
      "Skip planning and testing",
      "Give every workload unlimited access",
      "Hide failures from operators",
    ],
    quizAnswer: `Apply ${topic.toLowerCase()} with a tested, observable design`,
  }));
}

function makeCyberCourseLessons(courseId, courseTitle, topics) {
  return topics.map((topic, index) => makeLesson({
    id: `${courseId}-${String(index + 1).padStart(2, "0")}-${slugifyTopic(topic)}`,
    title: `${courseTitle}: ${topic}`,
    focus: `${courseTitle} ${topic}`,
    code: `const securityLesson = {\n  course: "${courseTitle}",\n  topic: "${topic}",\n  step: ${index + 1},\n  authorizedLab: true\n};\n\nconsole.log(securityLesson);`,
    challenge: `In an authorized training environment, create a small defensive exercise for ${topic.toLowerCase()}. Explain the control, test the expected behavior, and record one safe remediation step.`,
    starterCode: `const securityExercise = {\n  course: "${courseTitle}",\n  topic: "${topic}",\n  control: "",\n  evidence: ""\n};\n\n// Work only in an authorized lab\nconsole.log(securityExercise);`,
    quizQuestion: `Which approach best supports ${topic.toLowerCase()}?`,
    quizOptions: [
      `Practice ${topic.toLowerCase()} in an authorized, tested, and documented way`,
      "Skip authorization and testing",
      "Give every user unrestricted access",
      "Hide security evidence from defenders",
    ],
    quizAnswer: `Practice ${topic.toLowerCase()} in an authorized, tested, and documented way`,
  }));
}

const cyberCourseLessonPlans = {
  "cybersecurity-fundamentals": makeCyberCourseLessons(
    "cybersecurity-fundamentals",
    "Cybersecurity Fundamentals",
    ["Security goals and the CIA triad", "Threats, vulnerabilities, and risk", "Defense in depth", "Secure habits and culture"]
  ),
  "networking-for-cybersecurity": makeCyberCourseLessons(
    "networking-for-cybersecurity",
    "Networking for Cybersecurity",
    ["TCP/IP and network layers", "DNS, HTTP, and TLS traffic", "Firewalls and segmentation", "Packet analysis fundamentals"]
  ),
  "linux-security": makeCyberCourseLessons(
    "linux-security",
    "Linux Security",
    ["Users, groups, and permissions", "Processes and services", "Updates and system hardening", "Logs and Linux auditing"]
  ),
  "windows-security": makeCyberCourseLessons(
    "windows-security",
    "Windows Security",
    ["Windows accounts and policies", "Defender and host firewalls", "Event Viewer and security logs", "Windows endpoint hardening"]
  ),
  "cryptography": makeCyberCourseLessons(
    "cryptography",
    "Cryptography",
    ["Hashing and data integrity", "Symmetric encryption", "Asymmetric keys and exchange", "Digital signatures, PKI, and TLS"]
  ),
  "identity-access-management": makeCyberCourseLessons(
    "identity-access-management",
    "Identity & Access Management",
    ["Authentication and factors", "Authorization and RBAC", "Least privilege", "Identity lifecycle and audit"]
  ),
  "web-application-security": makeCyberCourseLessons(
    "web-application-security",
    "Web Application Security",
    ["Input validation and output encoding", "Sessions, cookies, and CSRF", "Secure headers and dependencies", "Threat modeling and testing"]
  ),
  "api-security": makeCyberCourseLessons(
    "api-security",
    "API Security",
    ["API authentication and tokens", "Object-level authorization", "Validation and rate limits", "API logging and versioning"]
  ),
  "owasp-top-10": makeCyberCourseLessons(
    "owasp-top-10",
    "OWASP Top 10",
    ["Understanding common application risks", "Broken access control", "Injection and unsafe input", "Misconfiguration and vulnerable components"]
  ),
  "ethical-hacking-basics": makeCyberCourseLessons(
    "ethical-hacking-basics",
    "Ethical Hacking",
    ["Authorization and rules of engagement", "Attack-surface mapping in a lab", "Controlled validation", "Evidence and responsible reporting"]
  ),
  "reconnaissance-osint": makeCyberCourseLessons(
    "reconnaissance-osint",
    "Reconnaissance & OSINT",
    ["Ethics, scope, and collection plans", "Passive information discovery", "Source verification and confidence", "Defensive reporting and exposure reduction"]
  ),
  "vulnerability-assessment": makeCyberCourseLessons(
    "vulnerability-assessment",
    "Vulnerability Assessment",
    ["Asset inventory and baselines", "Safe scanning concepts", "Validating findings", "Prioritizing remediation"]
  ),
  "penetration-testing": makeCyberCourseLessons(
    "penetration-testing",
    "Penetration Testing",
    ["Rules of engagement", "Test planning and safety", "Controlled security validation", "Findings, cleanup, and reporting"]
  ),
  "network-security": makeCyberCourseLessons(
    "network-security",
    "Network Security",
    ["Secure network architecture", "Firewall policy design", "IDS, IPS, and network visibility", "VPNs and zero-trust access"]
  ),
  "cyber-cloud-security": makeCyberCourseLessons(
    "cyber-cloud-security",
    "Cloud Security",
    ["Shared responsibility", "Cloud IAM and secrets", "Network and data controls", "Cloud posture and monitoring"]
  ),
  "security-monitoring-siem": makeCyberCourseLessons(
    "security-monitoring-siem",
    "Security Monitoring & SIEM",
    ["Security log sources", "Normalization and correlation", "Detection rules and alerts", "Triage dashboards and workflows"]
  ),
  "incident-response": makeCyberCourseLessons(
    "incident-response",
    "Incident Response",
    ["Preparation and response plans", "Detection and containment", "Eradication and recovery", "Lessons learned and improvement"]
  ),
  "digital-forensics": makeCyberCourseLessons(
    "digital-forensics",
    "Digital Forensics",
    ["Evidence handling and integrity", "Disk and file artifacts", "Memory and event timelines", "Defensible forensic reporting"]
  ),
  "malware-fundamentals": makeCyberCourseLessons(
    "malware-fundamentals",
    "Malware Fundamentals",
    ["Malware types and delivery", "Behavior and indicators", "Safe analysis boundaries", "Detection and defensive controls"]
  ),
  "ctf-security-labs": makeCyberCourseLessons(
    "ctf-security-labs",
    "CTF & Security Labs",
    ["Lab rules and safe methodology", "Web security lab workflow", "Crypto and analysis lab thinking", "Writeups, flags, and remediation"]
  ),
  "advanced-web-exploitation": makeCyberCourseLessons(
    "advanced-web-exploitation",
    "Advanced Web Exploitation",
    [
      "Insecure deserialization in Java, PHP, and Python pickle; ysoserial gadget-chain lab",
      "Server-Side Template Injection in Jinja2 and Freemarker; detection and safe escalation lab",
      "Prototype pollution in JavaScript and Node.js; client-side and server-side chains",
      "GraphQL and REST attacks: introspection, batching, IDOR, BOLA, and BOPLA",
      "SSRF escalation: blind SSRF, AWS/GCP/Azure metadata, credentials, and internal pivots",
      "Race conditions: HTTP/2 single-packet attacks and TOCTOU financial-logic lab",
      "HTTP request smuggling: CL.TE, TE.CL, reverse-proxy desync, and client-side desync",
      "Web cache poisoning and cache deception; persistent XSS impact and defenses",
      "JWT abuse: alg none, RS256-to-HS256 key confusion, and kid injection",
      "Advanced PortSwigger Academy and disclosed HackerOne report follow-up lab",
    ]
  ),
  "active-directory-attacks": makeCyberCourseLessons(
    "active-directory-attacks",
    "Active Directory Attacks",
    [
      "AD domains, forests, Kerberos AS-REQ, TGS, TGS-REP, and delegation review",
      "Kerberoasting: service-ticket requests, offline cracking, and service-account remediation",
      "AS-REP roasting and accounts with pre-authentication disabled",
      "Pass-the-Hash, Pass-the-Ticket, and Overpass-the-Hash credential mechanics",
      "Golden and Silver Tickets, KRBTGT protection, and detection boundaries",
      "NTLM relay with Responder and ntlmrelayx; LDAP/SMB relay and coercion risks",
      "Active Directory ACL abuse: GenericAll, WriteDACL, DCSync, and BloodHound paths",
      "Domain escalation endgame: gMSA abuse and AD Certificate Services ESC1 through ESC8",
      "Lateral movement with WinRM, scheduled tasks, WMI, and safer alternatives to PsExec",
      "GOAD or multi-domain-controller lab: foothold, Kerberoast, ACL abuse, DCSync, and reporting",
    ]
  ),
  "privilege-escalation-mastery": makeCyberCourseLessons(
    "privilege-escalation-mastery",
    "Privilege Escalation Mastery",
    [
      "Linux SUID, GTFOBins, sudo misconfigurations, and manual enumeration",
      "Linux cron hijacking, PATH manipulation, capabilities, and cap_setuid",
      "Linux NFS no_root_squash, kernel exposure, Docker/LXD groups, and remediation",
      "Windows unquoted service paths, weak service permissions, and AlwaysInstallElevated",
      "Windows token impersonation: PrintSpoofer, GodPotato, UAC bypass, and safe lab limits",
      "Windows DLL hijacking, Autoruns abuse, and service hardening",
      "Methodology over tools: use PowerUp and linPEAS as accelerators, not crutches",
      "Locked-down VM lab: identify three distinct escalation paths and submit written evidence",
    ]
  ),
  "post-exploitation-c2": makeCyberCourseLessons(
    "post-exploitation-c2",
    "Post-Exploitation, Persistence & C2",
    [
      "Command-and-control concepts: beaconing, sleep timers, jitter, and encrypted channels",
      "Lab-only Mythic or Sliver workflows with scope, consent, cleanup, and defender visibility",
      "Build a benign Python C2 teaching model with raw sockets, AES, polling, and safe shutdown",
      "Staged versus stageless payloads, shellcode concepts, execve, and obfuscation trade-offs",
      "In-memory techniques and why fileless behavior challenges disk-based AV; benign Nishang lab",
      "Credential-looting concepts: LSASS, SAM, NTDS.dit, browser credentials, and token theft defenses",
      "Pivoting with SSH tunnels, chisel, ligolo-ng, and SOCKS proxies in an isolated network",
      "Detection awareness: Windows Event Logs and Sysmon indicators for every technique",
    ]
  ),
  "malware-analysis-reverse-engineering": makeCyberCourseLessons(
    "malware-analysis-reverse-engineering",
    "Malware Analysis & Reverse Engineering",
    [
      "x86-64 assembly essentials, stack frames, calling conventions, and binary safety",
      "PE and ELF structure, imports, strings, Detect It Easy, and Ghidra disassembly",
      "Dynamic analysis in isolated snapshots: processes, network capture, registry, and file changes",
      "Deobfuscation, simple packers, UPX, and JavaScript dropper analysis",
      "Anti-debugging and anti-VM concepts with safe analyst countermeasures",
      "Malware-training-set pipeline: hash, triage, strings, Ghidra configuration analysis, and detonation",
      "IOC extraction and a complete malware analysis report with containment recommendations",
    ]
  ),
  "vulnerability-research-exploit-development": makeCyberCourseLessons(
    "vulnerability-research-exploit-development",
    "Vulnerability Research & Exploit Development",
    [
      "AFL++ fuzzing: mutation, coverage guidance, and a file-parser harness",
      "Linux stack buffer overflows and why ret2libc is a safer modern starting point",
      "ASLR, DEP/NX, stack canaries, PIE, and CFI with one defensive bypass concept each",
      "Return-Oriented Programming: locate gadgets and build a bounded ROP chain in a toy binary",
      "Heap layout and use-after-free exploitation concepts with mitigations and cleanup",
      "CVE analysis: read an advisory and public patch, identify the root cause, and reproduce safely",
      "Professional one-day reproduction methodology using advisory, patch, PoC, evidence, and remediation",
      "Practice pathways: pwn.college, Hack The Box binary challenges, and CTF pwn writeups",
    ]
  ),
  "advanced-cloud-security": makeCyberCourseLessons(
    "advanced-cloud-security",
    "Advanced Cloud Security",
    [
      "AWS, Azure, and GCP architecture, shared responsibility, IAM, federation, and metadata services",
      "AWS IAM privilege-escalation policy chains, role assumption, and Pacu lab boundaries",
      "SSRF to 169.254.169.254 metadata credential theft and cloud-specific mitigations",
      "Cloud misconfigurations: public S3, permissive security groups, Lambda secrets, and broad roles",
      "Azure Entra ID: lab-only password spray, OAuth consent phishing, token theft, and managed identity risks",
      "Docker and Kubernetes security: privileged containers, socket mounts, RBAC, kubelet, and API exposure",
      "CloudGoat and deliberately misconfigured k3s lab: identify, fix, verify, and document each finding",
    ]
  ),
  "detection-engineering-threat-hunting": makeCyberCourseLessons(
    "detection-engineering-threat-hunting",
    "Detection Engineering & Threat Hunting",
    [
      "Sysmon, ETW, Windows Event IDs 4625, 4688, 4698, and 7045, plus MITRE ATT&CK mapping",
      "Write Sigma rules for Kerberoasting, DCSync, Pass-the-Hash, and other red-team techniques",
      "Hypothesis-driven threat hunting with Sigma and Atomic Red Team as a hunt catalogue",
      "Volatility 3 memory forensics, injected-code review, disk triage, Prefetch, SRUM, and event logs",
      "Network forensics with Brim and Zeek; PCAP review and statistical C2 jitter analysis",
      "Atomic Red Team simulation and detection validation in an owned lab",
      "Red-team/blue-team capstone: reconstruct a staged intrusion and map the complete kill chain",
    ]
  ),
  "social-engineering-physical-security": makeCyberCourseLessons(
    "social-engineering-physical-security",
    "Social Engineering & Physical Security",
    [
      "Education-first phishing simulation design: lookalike domains, homoglyphs, and safe measurement",
      "Evilginx-style reverse-proxy MFA phishing concepts, indicators, and defensive awareness",
      "Vishing and OSINT-driven pretexts using authorized scenarios and privacy-respecting collection",
      "USB drops, badge-cloning basics, tailgating awareness, and physical-security training design",
    ]
  ),
  "emerging-specialized-security": makeCyberCourseLessons(
    "emerging-specialized-security",
    "Emerging & Specialized Security Topics",
    [
      "AI and ML security: direct and indirect prompt injection, adversarial ML, model theft, and agent tool access",
      "Mobile security: Android APK analysis with MobSF, Frida hooking, and iOS security basics",
      "Wireless security: WPA2/WPA3, evil-twin awareness, radio fundamentals, and authorized testing",
      "IoT and embedded security: firmware with binwalk, UART/JTAG basics, and MQTT attack surfaces",
      "Blockchain security: smart-contract reentrancy, integer overflow, and Ethernaut practice",
    ]
  ),
};

const cloudCourseLessonPlans = {
  "cloud-foundations-providers": makeCloudCourseLessons(
    "cloud-foundations-providers",
    "Cloud Foundations and AWS / Azure / GCP Provider Choices",
    ["Cloud service models", "Shared responsibility", "Regions, zones, and cost", "Choosing a provider"]
  ),
  "cloud-linux-operations": makeCloudCourseLessons(
    "cloud-linux-operations",
    "Linux for Cloud Operators",
    ["Shell and filesystem navigation", "Processes and services", "Users and permissions", "Logs and incident triage"]
  ),
  "cloud-networking": makeCloudCourseLessons(
    "cloud-networking",
    "Cloud Networking Fundamentals",
    ["VPCs and subnets", "Routes and gateways", "Security groups and firewalls", "Private service connectivity"]
  ),
  "cloud-containers": makeCloudCourseLessons(
    "cloud-containers",
    "Docker and Containers",
    ["Container images", "Dockerfiles and builds", "Volumes and networking", "Container health and delivery"]
  ),
  "cloud-kubernetes": makeCloudCourseLessons(
    "cloud-kubernetes",
    "Kubernetes Workloads",
    ["Pods and Deployments", "Services and discovery", "Config, secrets, and health checks", "Scaling and rollouts"]
  ),
  "cloud-cicd": makeCloudCourseLessons(
    "cloud-cicd",
    "CI/CD for Cloud Delivery",
    ["Pipeline stages", "Testing in CI", "Image scanning and artifacts", "Promotion and rollback"]
  ),
  "cloud-terraform": makeCloudCourseLessons(
    "cloud-terraform",
    "Terraform and Infrastructure as Code",
    ["Declarative resources", "State and plans", "Variables and modules", "Safe infrastructure changes"]
  ),
  "cloud-security": makeCloudCourseLessons(
    "cloud-security",
    "Cloud Security Foundations",
    ["Identity and access", "Least privilege", "Secrets and encryption", "Audit and defense in depth"]
  ),
  "cloud-monitoring-logging": makeCloudCourseLessons(
    "cloud-monitoring-logging",
    "Monitoring and Logging",
    ["Metrics and service health", "Structured application logs", "Alerts and incident signals", "Tracing and operational feedback"]
  ),
  "cloud-dns-https-proxies": makeCloudCourseLessons(
    "cloud-dns-https-proxies",
    "DNS, HTTPS, and Reverse Proxies",
    ["DNS records and resolution", "TLS and HTTPS", "Reverse proxy routing", "Certificates and secure request paths"]
  ),
  "cloud-load-balancing": makeCloudCourseLessons(
    "cloud-load-balancing",
    "Load Balancing and High Availability",
    ["Traffic distribution", "Health checks", "Failover and redundancy", "Capacity and availability targets"]
  ),
  "cloud-serverless-databases": makeCloudCourseLessons(
    "cloud-serverless-databases",
    "Serverless and Cloud Databases",
    ["Serverless functions and events", "Managed database choices", "Scaling and connection patterns", "Cost, latency, and operational trade-offs"]
  ),
};

const pythonProfessionalRoadmap = [
  ["python-introduction", "What Python Is and How to Run It", "Understand what Python is used for, how to install it, how to run code in a terminal or editor, and how to write a first program.", "print(\"Hello, Python!\")", "Install Python, run this file from a terminal and an editor, then change the message and run it again."],
  ["python-variables-data-types", "Variables and Data Types", "Store values in variables, recognize strings, integers, floats, and booleans, use valid names, and convert between types.", "name = \"Amina\"\nage = 20\nis_student = True\nheight = 1.68\nprint(name, age, is_student, height)", "Create a learner profile using a string, integer, float, boolean, and one converted input value."],
  ["python-strings", "Strings and Text", "Create and combine strings, use f-strings, apply methods such as upper and strip, and read text with input.", "name = input(\"What is your name? \")\nprint(f\"Hello, {name.strip()}!\")", "Ask for a learner's name and course, clean the input, and print a clear welcome message."],
  ["python-operators", "Numbers and Operators", "Use addition, subtraction, multiplication, division, comparisons, remainders, and operator precedence.", "completed = 8\ntotal = 10\nprogress = completed / total\nprint(progress * 100)\nprint(completed % 3)", "Build a progress calculation that reports a percentage and uses a remainder to group lessons."],
  ["python-conditional-statements", "Conditional Statements", "Make decisions with if, elif, and else, compare values, and combine conditions with and, or, and not.", "score = 70\n\nif score >= 50:\n    print(\"Pass\")\nelse:\n    print(\"Try again\")", "Classify a score as excellent, pass, or needing more practice using clear conditions."],
  ["python-lists-collections", "Lists and Collections", "Create lists, add and remove items, access values by index, slice sequences, and understand tuples and sets.", "topics = [\"Python\", \"Testing\"]\ntopics.append(\"APIs\")\nprint(topics[0])\nprint(topics[1:])", "Create a list of course topics, update it, access one item, and produce a slice."],
  ["python-dictionaries", "Dictionaries", "Store data as key-value pairs, read and update values, and loop through dictionary data.", "learner = {\n    \"name\": \"Amina\",\n    \"course\": \"Python\",\n    \"progress\": 40\n}\nlearner[\"progress\"] += 10\nfor key, value in learner.items():\n    print(key, value)", "Create and update a learner dictionary, then print each key and value clearly."],
  ["python-loops-roadmap", "Loops", "Repeat work with for and while, use range, and control loops with break and continue.", "for lesson_number in range(1, 4):\n    if lesson_number == 2:\n        continue\n    print(f\"Lesson {lesson_number}\")", "Use a for loop to process lessons and a while loop that stops when a valid value is entered."],
  ["python-functions-roadmap", "Functions", "Define reusable blocks of code, pass parameters and arguments, return values, and understand local variables.", "def calculate_total(price, quantity):\n    return price * quantity\n\nprint(calculate_total(12.5, 3))", "Write a function that calculates a learner's average and handles an empty list safely."],
  ["python-errors-debugging", "Errors and Debugging", "Recognize syntax and runtime errors, use try and except for expected failures, read error messages, and debug with focused output.", "try:\n    score = int(\"not a number\")\nexcept ValueError as error:\n    print(f\"Invalid score: {error}\")", "Debug a score input program and handle invalid input without hiding unexpected errors."],
  ["python-files-modules", "Files and Modules", "Read and write text files, import built-in modules, create a simple module, and understand packages.", "from pathlib import Path\n\npath = Path(\"progress.txt\")\npath.write_text(\"Python: started\\n\", encoding=\"utf-8\")\nprint(path.read_text(encoding=\"utf-8\"))", "Save a learner's progress to a text file and move the save logic into a reusable module."],
  ["python-basics-project", "Python Basics Project", "Combine variables, strings, collections, conditions, loops, functions, errors, files, and modules in a small useful program.", "def add_expense(expenses, name, amount):\n    expenses.append({\"name\": name, \"amount\": amount})\n\nexpenses = []\nadd_expense(expenses, \"Notebook\", 4.50)\nprint(expenses)", "Build a calculator, student-grade tracker, to-do list, quiz game, or personal expense tracker and explain your design."],
  ["python-list-comprehensions", "List Comprehensions", "Transform and filter collections with readable comprehensions.", "squares = [number * number for number in range(1, 6)]\npassed = [score for score in [45, 72, 88] if score >= 60]", "Build a filtered list of completed lesson titles and compare it with a normal loop."],
  ["python-modules-packages-roadmap", "Modules and Packages", "Organize reusable Python code into modules and packages.", "# progress.py\ndef complete(current, lesson_id):\n    return {**current, lesson_id: True}\n\n# app.py\nfrom progress import complete", "Design a small package with a calculator module and a public function."],
  ["python-exception-handling", "Exception Handling", "Handle expected failures without hiding programming errors.", "try:\n    score = int(\"not a number\")\nexcept ValueError:\n    score = 0\n    print(\"Please enter a whole number\")", "Validate score input with a focused except clause and decide which errors should be allowed to propagate."],
  ["python-file-handling", "File Handling", "Read, write, and manage files using safe context managers and paths.", "from pathlib import Path\npath = Path(\"progress.txt\")\npath.write_text(\"lesson-1: complete\\n\", encoding=\"utf-8\")\nprint(path.read_text(encoding=\"utf-8\"))", "Save and reload a text-based list of course tasks without losing existing data."],
  ["python-object-oriented-programming", "Object-Oriented Programming (OOP)", "Model state and behavior with classes, methods, and composition.", "class Student:\n    def __init__(self, name):\n        self.name = name\n        self.completed = set()\n\n    def complete(self, lesson_id):\n        self.completed.add(lesson_id)", "Create Student and Course classes that track enrollment and completed lessons."],
  ["python-iterators", "Iterators and Generators", "Process sequences lazily with iterators and generators.", "def count_up_to(limit):\n    for value in range(limit):\n        yield value\n\nfor value in count_up_to(3):\n    print(value)", "Write a generator that reads large records one at a time and explain why it saves memory."],
  ["python-decorators", "Decorators and Context Managers", "Reuse cross-cutting behavior and manage resources safely.", "from contextlib import contextmanager\n\n@contextmanager\ndef lesson_session(name):\n    print(f\"start {name}\")\n    yield\n    print(f\"end {name}\")", "Add a timing decorator and a context manager that safely opens and closes a resource."],
  ["python-lambda-functional", "Lambda Functions and Functional Programming", "Use lambda functions and functional patterns when they improve clarity.", "scores = [42, 91, 67]\nranked = sorted(scores, key=lambda score: -score)\nprint(ranked)", "Transform and sort learner records using a clear combination of map, filter, or sorted."],
  ["python-type-hints", "Type Hints and Annotations", "Use annotations to communicate contracts and catch mistakes earlier.", "def completion_rate(done: int, total: int) -> float:\n    return done / total", "Add type hints to a course-progress service and identify an invalid call a type checker should catch."],
  ["python-regular-expressions", "Regular Expressions", "Search and validate structured text with regular expressions.", "import re\nemail = \"learner@example.com\"\nmatch = re.fullmatch(r\"[^@\\s]+@[^@\\s]+\\.[^@\\s]+\", email)\nprint(bool(match))", "Extract lesson identifiers from a log line and explain when a parser is safer than a regex."],
  ["python-json-csv", "Working with JSON and CSV", "Exchange structured data with JSON and CSV files.", "import json\nrecord = {\"lesson\": \"python\", \"complete\": True}\nencoded = json.dumps(record)\nprint(json.loads(encoded)[\"lesson\"])", "Export course progress to JSON and CSV while preserving headers and handling missing values."],
  ["python-virtual-environments", "Virtual Environments and Package Management", "Create reproducible Python environments and manage dependencies.", "python -m venv .venv\npython -m pip install requests\npython -m pip freeze > requirements.txt", "Write setup instructions that let another developer reproduce a clean project environment."],
  ["python-debugging", "Debugging and Logging", "Diagnose failures with tracebacks, debuggers, and structured logs.", "import logging\nlogging.basicConfig(level=logging.INFO)\nlogging.info(\"Starting progress sync\")", "Replace print-based debugging with useful log levels, context, and an actionable error message."],
  ["python-testing-pytest", "Testing with Pytest", "Design focused tests and use assertions to prevent regressions.", "def add(a, b):\n    return a + b\n\ndef test_add():\n    assert add(2, 3) == 5", "Add unit tests for a score calculator, including an edge case and a meaningful failure message."],
  ["python-algorithms-data-structures", "Algorithms and Data Structures", "Choose algorithms and data structures based on correctness and complexity.", "def contains(items, target):\n    return target in items\n\nprint(contains([1, 3, 5], 3))", "Compare a linear search with a set lookup and explain their time and space trade-offs."],
  ["python-git-github", "Git and GitHub", "Track Python projects with commits, branches, pull requests, and reviews.", "git status\ngit add .\ngit commit -m \"Add progress tracker\"\ngit push origin feature/progress", "Create a branch workflow for a Python feature, including a focused commit and a pull request checklist."],
  ["python-apis-http", "Working with APIs and HTTP", "Call web APIs, validate responses, and handle timeouts and errors.", "import requests\nresponse = requests.get(\"https://example.com\", timeout=5)\nresponse.raise_for_status()", "Design a function that fetches JSON with a timeout, status validation, and a safe error path."],
  ["python-sql-databases", "SQL and Database Integration", "Use parameterized queries, transactions, and repository boundaries.", "import sqlite3\nwith sqlite3.connect(\"app.db\") as db:\n    db.execute(\"CREATE TABLE IF NOT EXISTS tasks (title TEXT)\")\n    db.execute(\"INSERT INTO tasks VALUES (?)\", (\"Practice SQL\",))", "Build a small CRUD repository for learning tasks without constructing SQL from user input."],
  ["python-backend-development", "Backend Development with FastAPI or Django", "Expose Python business logic through reliable web endpoints.", "from fastapi import FastAPI\napp = FastAPI()\n\n@app.get(\"/health\")\ndef health():\n    return {\"ok\": True}", "Design endpoints for listing courses, recording progress, validation, and health checks."],
  ["python-auth-cybersecurity", "Authentication and Cybersecurity", "Protect identities, secrets, data, and application boundaries.", "import os\nsecret = os.environ[\"APP_SECRET\"]\n\n# Hash passwords with a dedicated password-hashing library.", "Review a Python service for hard-coded secrets, weak password handling, unsafe input, and missing authorization."],
  ["python-async-await", "Asynchronous Programming (async and await)", "Use async and await for concurrent I/O-bound work.", "import asyncio\n\nasync def load_lesson():\n    await asyncio.sleep(0.1)\n    return \"ready\"\n\nprint(asyncio.run(load_lesson()))", "Run independent API calls concurrently and explain when async improves throughput."],
  ["python-concurrency", "Multithreading and Multiprocessing", "Choose threads, processes, or async execution for different workloads.", "from concurrent.futures import ThreadPoolExecutor\n\ndef load(url):\n    return f\"loaded {url}\"\n\nwith ThreadPoolExecutor(max_workers=2) as pool:\n    print(list(pool.map(load, [\"a\", \"b\"])))", "Choose a concurrency model for I/O-bound and CPU-bound tasks, including how to measure the result."],
  ["python-numpy-pandas", "Data Science with NumPy and Pandas", "Use arrays and data frames to inspect, transform, and summarize data.", "import pandas as pd\nprogress = pd.DataFrame({\"score\": [72, 88, 54]})\nprint(progress[progress[\"score\"] >= 60].mean())", "Clean a small progress dataset, handle missing values, and calculate a useful summary."],
  ["python-scikit-learn", "Machine Learning with Scikit-learn", "Build, evaluate, and interpret a basic machine-learning pipeline.", "from sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LogisticRegression\n\n# Split data, train a model, and evaluate on held-out data.", "Design a reproducible classification experiment with a train/test split and an appropriate metric."],
  ["python-pytorch", "Deep Learning with PyTorch", "Understand tensors, models, training loops, and validation in PyTorch.", "import torch\nweights = torch.tensor([0.5, 0.2], requires_grad=True)\nloss = (weights ** 2).sum()\nloss.backward()", "Outline a small training loop with a model, loss function, optimizer, validation step, and checkpoint."],
  ["python-llm-apis", "AI Integration and LLM APIs", "Integrate language models with controlled prompts, validation, and safe boundaries.", "from openai import OpenAI\nclient = OpenAI()\n# Send a narrowly scoped request and validate the returned content.", "Design an LLM-powered lesson helper with input limits, structured output, retries, and human review."],
  ["python-rag", "Embeddings and Retrieval-Augmented Generation (RAG)", "Retrieve relevant knowledge before generating grounded responses.", "documents = [\"Python variables guide\", \"SQL safety guide\"]\nquery = \"How do I store a value?\"\n# Embed, retrieve, then answer using the selected context.", "Plan a RAG pipeline that chunks documents, retrieves citations, and refuses unsupported answers."],
  ["python-docker-deployment", "Docker and Deployment", "Package, configure, observe, and deploy Python applications reliably.", "FROM python:3.12-slim\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install --no-cache-dir -r requirements.txt\nCOPY . .\nCMD [\"python\", \"app.py\"]", "Create a deployment checklist covering image builds, environment variables, health checks, logs, and rollback."],
  ["python-performance", "Performance Optimization and Profiling", "Measure Python programs and optimize the real bottleneck.", "import cProfile\n\ndef work():\n    return sum(number * number for number in range(10000))\n\ncProfile.run(\"work()\")", "Profile a slow function, identify its bottleneck, and compare an optimization with a benchmark."],
  ["python-architecture", "Software Architecture and Design Patterns", "Design maintainable Python systems with boundaries and appropriate patterns.", "class ProgressService:\n    def __init__(self, repository):\n        self.repository = repository\n\n    def complete(self, lesson_id):\n        return self.repository.save(lesson_id)", "Separate a learning API into domain, service, repository, and transport layers and justify one design pattern."],
  ["python-production-applications", "Building Production-Ready Applications", "Combine testing, persistence, security, observability, and deployment habits.", "def readiness(checks):\n    required = {\"tests\", \"security\", \"health\", \"rollback\"}\n    return required.issubset(checks)", "Plan and implement a tested learning-progress application with documentation, monitoring, error handling, and a rollback strategy."],
];
const pythonBasicsNotes = {
  "python-introduction": `Python is a readable, high-level programming language used for web applications, automation, data analysis, machine learning, testing, and scripting.

Install Python from python.org or your operating system's package manager. Confirm it with python --version or python3 --version. Save Python code in a file ending in .py.

You can run code in the terminal with python hello.py, in an editor such as VS Code with its Run button, or one line at a time in the interactive interpreter. The first program uses print("Hello, Python!") to send text to the screen. This proves that Python is installed and that your file can run.

Common mistakes are running the command from the wrong folder and naming a file python.py, which can hide the real Python module.`,
  "python-variables-data-types": `A variable is a name that refers to a value. Python creates it with assignment, so name = "Amina" stores text and age = 20 stores a whole number. The common beginner types are str for text, int for whole numbers, float for decimals, and bool for True or False.

Use descriptive lowercase_with_underscores names. Do not use spaces, start with a number, or use names such as list and str that hide useful built-ins. The value must be the number 20, not the word twenty, when arithmetic is required.

input() returns text. Convert it at the program boundary with int() or float(), and use str() when you need a value as text.`,
  "python-strings": `A string is a sequence of characters in quotes. Join text with +, repeat it with *, and prefer f-strings such as f"Hello, {name}!" when inserting values into a sentence.

input() reads text from the learner. strip() removes accidental spaces, upper() and lower() change case, replace() substitutes text, and split() creates a list of pieces. String methods return a new string because strings are immutable.

Clean the name before greeting the learner, and check for an empty result after strip().`,
  "python-operators": `Operators calculate results and compare values. Arithmetic includes +, -, *, /, //, %, and **. Comparisons such as ==, !=, >, and <= produce booleans. and, or, and not combine conditions.

The example divides completed lessons by the total, multiplies by 100 for a percentage, and uses % to find a remainder. Parentheses make operator precedence clear. Remember that = assigns while == compares, and test division by zero.`,
  "python-conditional-statements": `Conditional statements let a program choose behavior. Python checks if, then each elif in order, and runs else when no condition matched. The indented block belongs to its decision.

With score = 70, score >= 50 is True and the program prints Pass. Use and when both conditions must be true, or when either condition is enough, and not to reverse a boolean. Test values below, equal to, and above every threshold.`,
  "python-lists-collections": `A list is an ordered, changeable collection. Indexes start at zero, append() adds an item, remove() removes a matching item, and a slice such as topics[1:] returns part of a list.

Tuples are fixed groups of values, while sets store unique values. Choose a collection based on whether you need order, changeability, uniqueness, or lookup. Check that a list is not empty before accessing an index.`,
  "python-dictionaries": `A dictionary stores key-value pairs, which makes it useful for a learner profile. Read a value with learner["name"], update it with assignment, and loop through learner.items() to receive each key and value.

The example increases progress from 40 to 50, then prints the record. Use get() when a key may be missing and keep each field's meaning and type consistent.`,
  "python-loops-roadmap": `Loops repeat work. A for loop visits each item or each number from range(); a while loop continues while its condition is True. range(1, 4) produces 1, 2, and 3 because its upper bound is excluded.

continue skips the current iteration and break stops the loop. Use for for a known collection and while for condition-driven input. Always update a while-loop value so the loop can finish.`,
  "python-functions-roadmap": `A function is a reusable block of code. Define it with def, pass inputs through parameters, and send a result back with return. The values supplied at the call site are arguments.

calculate_total(12.5, 3) binds price and quantity, then returns 37.5. Give each function one clear job and decide what it should do with empty or invalid input.`,
  "python-errors-debugging": `A syntax error means Python cannot understand the code. A runtime error occurs while code runs, such as converting invalid text to an integer. A traceback names the exception and points to the failing line.

Use try and except around an expected failure you understand. The example catches ValueError because the text cannot become an integer. Debug by reproducing the issue, reading the traceback, inspecting values, making one focused change, and testing again.`,
  "python-files-modules": `Files persist data after a program stops. pathlib.Path gives clear path operations, and a context manager closes file resources safely. Decide whether to replace or append, use an explicit encoding, and handle missing files.

The example writes progress.txt and reads it back. A module is a .py file whose functions and values can be imported; a package organizes related modules. Keep file access separate from business logic and never store secrets in ordinary text files.`,
  "python-basics-project": `A Python Basics project combines variables, strings, collections, conditions, loops, functions, errors, files, and modules. Choose a small useful program: a calculator, student-grade tracker, to-do list, quiz game, or personal expense tracker.

Build in steps: define the data, implement one operation, test it, add the next operation, and move repeated logic into functions. Validate user input and display clear output. Your final explanation should describe the data model, functions, normal and invalid cases, and how to run the program.`,
};
function makePythonRoadmapLesson([id, title, description, code, challenge], index) {
  const advanced = index >= 24;
  const detailedNotes = pythonBasicsNotes[id];
  return {
    id,
    title,
    description,
    level: index < 12 ? "Beginner" : advanced ? "Advanced" : "Intermediate",
    estimatedTime: advanced ? "40 min" : "30 min",
    objectives: [description, "Explain the trade-offs behind the approach", "Apply the concept in a practical exercise"],
    sections: [
      { type: "explanation", title: detailedNotes ? "Detailed Python Notes" : "Core Idea", content: detailedNotes || `${description}

What this teaches: ${description} The concept turns a defined input into a predictable result, so first name the input, the rule being applied, and the output you expect.

How to use it:
- Start with a small normal case and trace each important operation.
- Check an empty, invalid, or boundary case before trusting the result.
- Keep the code readable enough that another developer can explain why it works.
- Choose a simpler approach when it gives the same result with fewer failure points.` },
      { type: "example", title: "Practical Python Example", code, explanation: `This code demonstrates the lesson directly. Read it from top to bottom, identify each value and operation, predict the result, then change one input and test the new behavior. The goal is to understand the rule behind ${description.toLowerCase()}, not to copy the snippet without explanation.` },
      { type: "challenge", title: "Practice Project", instructions: challenge, starterCode: `${code}\n\n# Extend this example to complete the challenge` },
    ],
  };
}
const pythonMasteryLessonPlans = [
  ["python-collections", "Lists, Tuples, Sets, and Dictionaries", "Work confidently with Python's core collection types.", "const", "Create a contact book using a dictionary and a list of tags."],
  ["python-comprehensions", "Comprehensions and Iteration Patterns", "Write clear list, set, and dictionary comprehensions.", "squares = [n * n for n in range(1, 6)]", "Build a filtered dictionary of learners who passed."],
  ["python-modules-packages", "Modules and Packages", "Split reusable code across modules and packages.", "from math import sqrt\nprint(sqrt(81))", "Design a small package with a calculator module and a public function."],
  ["python-files", "Files, Paths, and Serialization", "Read, write, and safely exchange data with files.", "from pathlib import Path\nPath(\"notes.txt\").write_text(\"Hello\")", "Save and reload a JSON list of course tasks."],
  ["python-exceptions", "Exceptions and Defensive Programming", "Handle expected failures without hiding real bugs.", "try:\n    age = int(input(\"Age: \"))\nexcept ValueError:\n    print(\"Enter a number\")", "Validate user input and report useful error messages."],
  ["python-oop", "Object-Oriented Python", "Model behavior with classes, objects, methods, and composition.", "class Course:\n    def __init__(self, title):\n        self.title = title", "Create Student and Course classes that track enrollment."],
  ["python-iterators-generators", "Iterators and Generators", "Process sequences lazily and efficiently.", "def count_up_to(limit):\n    for value in range(limit):\n        yield value", "Write a generator that reads large records one at a time."],
  ["python-decorators-context-managers", "Decorators and Context Managers", "Reuse cross-cutting behavior and manage resources safely.", "from contextlib import contextmanager\n\n@contextmanager\ndef managed():\n    yield", "Add a timing decorator and a safe temporary-resource context manager."],
  ["python-typing-dataclasses", "Type Hints and Dataclasses", "Make Python code clearer and easier to maintain with typing.", "from dataclasses import dataclass\n\n@dataclass\nclass Lesson:\n    title: str", "Define typed dataclasses for a course catalog."],
  ["python-virtualenv-pip", "Virtual Environments and pip", "Create reproducible Python environments and manage dependencies.", "python -m venv .venv\npython -m pip install requests", "Write a requirements file and explain how another developer reproduces the setup."],
  ["python-testing", "Testing with pytest", "Design focused tests and use assertions to prevent regressions.", "def add(a, b):\n    return a + b\n\ndef test_add():\n    assert add(2, 3) == 5", "Add tests for a score calculator, including an edge case."],
  ["python-debugging-logging", "Debugging and Logging", "Diagnose failures with tracebacks, debuggers, and structured logs.", "import logging\nlogging.basicConfig(level=logging.INFO)\nlogging.info(\"Starting job\")", "Replace print-based debugging with useful log levels and context."],
  ["python-http-apis", "HTTP Clients and APIs", "Call web APIs, validate responses, and handle timeouts.", "import requests\nresponse = requests.get(\"https://example.com\", timeout=5)\nresponse.raise_for_status()", "Design a function that fetches JSON and handles network errors."],
  ["python-databases", "Python and Databases", "Use parameterized queries, transactions, and repository boundaries.", "import sqlite3\nwith sqlite3.connect(\"app.db\") as db:\n    db.execute(\"CREATE TABLE IF NOT EXISTS tasks (title TEXT)\")", "Build a small CRUD repository for learning tasks."],
  ["python-flask-fastapi", "Web APIs with Flask and FastAPI", "Expose Python logic through reliable web endpoints.", "from fastapi import FastAPI\napp = FastAPI()\n\n@app.get(\"/health\")\ndef health():\n    return {\"ok\": True}", "Design endpoints for listing courses and recording progress."],
  ["python-async", "Async Python", "Use async and await for concurrent I/O-bound work.", "import asyncio\n\nasync def main():\n    await asyncio.sleep(0.1)\n    return \"done\"", "Run several independent API calls concurrently and explain when async helps."],
  ["python-security", "Python Security Practices", "Protect secrets, validate input, and avoid unsafe execution patterns.", "import os\napi_key = os.environ.get(\"API_KEY\")", "Review a script for hard-coded secrets, unsafe input, and missing validation."],
  ["python-performance", "Performance and Profiling", "Measure before optimizing and choose suitable data structures.", "import timeit\nprint(timeit.timeit(\"sum(range(100))\", number=1000))", "Profile a slow loop and improve it without changing its result."],
  ["python-automation-project", "Python Automation Project", "Build a useful command-line automation tool from start to finish.", "from pathlib import Path\nfor path in Path(\".\").glob(\"*.txt\"):\n    print(path)", "Create a safe file organizer with a dry-run mode and clear logs."],
  ["python-production-project", "Production Python Capstone", "Combine testing, APIs, persistence, security, and deployment habits.", "class ProgressService:\n    def __init__(self, repository):\n        self.repository = repository", "Plan and implement a tested learning-progress API with documentation and error handling."],
];

function makePythonMasteryLesson([id, title, description, code, challenge]) {
  return {
    id,
    title,
    description,
    level: id.includes("production") || id.includes("security") ? "Advanced" : "Intermediate",
    estimatedTime: "30 min",
    objectives: [description, "Explain the trade-offs behind the approach", "Apply the concept in a practical exercise"],
    sections: [
      { type: "explanation", title: "Core Idea", content: `${description}

The working rule is to define the input and expected result first, apply the concept in a small example, and then verify the result with a normal and boundary case. Pay attention to what the approach makes easier, what it costs, and how it behaves when requirements change.` },
      { type: "example", title: "Practical Example", code, explanation: `This example is the lesson in action. Trace every line, explain what changes in memory or output, predict the result before running it, and modify one value to test whether your understanding is correct.` },
      { type: "challenge", title: "Practice Project", instructions: challenge, starterCode: `${code}\n\n# Extend this example to complete the challenge` },
    ],
  };
}

function splitAuthoredLessonParts(markdown) {
  const headings = [...markdown.matchAll(/^#{1,3}\s*PART ([1-4]) OF 4\s*[—:-]\s*(.+)$/gim)];
  return headings.map((match, index) => ({
    number: match[1],
    title: match[2].trim(),
    start: match.index,
    bodyStart: match.index + match[0].length,
    end: headings[index + 1]?.index ?? markdown.length,
  }));
}

function parseAuthoredMarkdownBlocks(markdown, quizAnswers = {}) {
  const lines = markdown.replace(/\r/g, "").split("\n");
  const blocks = [];
  let index = 0;
  const isTableDivider = (line) => /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line);
  const tableCells = (line) => line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim());

  while (index < lines.length) {
    const line = lines[index];
    if (!line.trim()) { index += 1; continue; }

    const questionHeader = line.match(/^\s*(?:#{1,6}\s*)?(?:\*\*)?Question\s+(\d+)(?:\s*:[^*]*)?(?:\*\*)?\s*$/i);
    if (questionHeader) {
      const promptLines = [];
      const options = [];
      let scan = index + 1;
      let insideFence = false;
      while (scan < lines.length && options.length < 4) {
        const current = lines[scan];
        if (!insideFence && /^\s*(?:#{1,6}\s*)?(?:\*\*)?Question\s+\d+/i.test(current)) break;
        if (/^\s*```/.test(current)) {
          insideFence = !insideFence;
          promptLines.push(current);
          scan += 1;
          continue;
        }
        const option = !insideFence && current.match(/^\s*([A-D])[.)]\s+(.+?)\s*$/i);
        if (option) {
          options.push(`${option[1].toUpperCase()}. ${option[2]}`);
          scan += 1;
          continue;
        }
        if (options.length) {
          if (!current.trim()) { scan += 1; continue; }
          break;
        }
        promptLines.push(current);
        scan += 1;
      }
      if (options.length === 4 && options.map((option) => option[0]).join("") === "ABCD") {
        const label = line.replace(/^\s*#{1,6}\s*/, "").replace(/^\*\*|\*\*$/g, "").trim();
        const prompt = promptLines.join("\n").trim();
        blocks.push({
          type: "quiz",
          question: [label, prompt].filter(Boolean).join("\n\n"),
          options,
          answer: options.find((option) => option.startsWith(`${quizAnswers[questionHeader[1]]}.`)) || "",
          explanation: quizAnswers[questionHeader[1]] ? "Compare the feedback with the lesson section that covers this concept." : "Review the relevant lesson section after choosing an answer.",
        });
        index = scan;
        continue;
      }
    }

    const fence = line.match(/^\s*```([\w+-]*)\s*$/);
    if (fence) {
      const codeLines = [];
      index += 1;
      while (index < lines.length && !/^\s*```\s*$/.test(lines[index])) codeLines.push(lines[index++]);
      if (index < lines.length) index += 1;
      let codeLanguage = fence[1] || "text";
      const snippet = codeLines.join("\n");
      if (["javascript", "js"].includes(codeLanguage.toLowerCase()) && !/(^|\n)\s*(import|export)\b|\bawait\b/.test(snippet)) {
        try { new Function(snippet); } catch { codeLanguage = "text"; }
      }
      blocks.push({ type: "code", language: codeLanguage, code: snippet });
      continue;
    }

    if (line.includes("|") && index + 1 < lines.length && isTableDivider(lines[index + 1])) {
      const columns = tableCells(line);
      index += 2;
      const rows = [];
      while (index < lines.length && lines[index].includes("|") && lines[index].trim()) rows.push(tableCells(lines[index++]));
      blocks.push({ type: "table", columns, rows });
      continue;
    }

    const heading = line.match(/^\s*(#{1,6})\s+(.+?)\s*#*\s*$/);
    if (heading) {
      blocks.push({ type: heading[1].length <= 2 ? "heading" : "subheading", text: heading[2].trim() });
      index += 1;
      continue;
    }

    const listItem = line.match(/^\s*(?:[-*+]\s+|\d+[.)]\s+)(.*)$/);
    if (listItem) {
      const items = [];
      let ordered = /^\s*\d+[.)]\s+/.test(line);
      let checklist = /^\s*[-*+]\s+\[[ xX]\]\s+/.test(line);
      while (index < lines.length) {
        const current = lines[index];
        const match = current.match(/^\s*(?:([-*+]\s+)|(\d+[.)]\s+))(.*)$/);
        if (!match) break;
        const isOrdered = Boolean(match[2]);
        const isChecklist = !isOrdered && /^\[[ xX]\]\s+/.test(match[3]);
        if (isOrdered !== ordered || isChecklist !== checklist) break;
        let value = match[3];
        if (isChecklist) value = value.replace(/^\[[ xX]\]\s+/, "");
        items.push(checklist ? { text: value, done: /^\[[xX]\]/.test(match[3]) } : value);
        index += 1;
      }
      blocks.push({ type: checklist ? "checklist" : ordered ? "numbered" : "bullets", ...(checklist ? { title: "Lesson checklist" } : {}), items });
      continue;
    }

    if (/^\s*(?:---+|\*\*\*+|___+)\s*$/.test(line)) {
      blocks.push({ type: "text", text: line.trim() });
      index += 1;
      continue;
    }

    const paragraph = [line];
    index += 1;
    while (index < lines.length && lines[index].trim()) {
      if (/^\s*```/.test(lines[index]) || /^\s*#{1,6}\s+/.test(lines[index]) || /^\s*(?:[-*+]\s+|\d+[.)]\s+)/.test(lines[index])) break;
      if (lines[index].includes("|") && index + 1 < lines.length && isTableDivider(lines[index + 1])) break;
      paragraph.push(lines[index++]);
    }
    blocks.push({ type: "text", text: paragraph.join("\n").trim() });
  }
  return blocks;
}

function makeAuthoredMarkdownDelivery(markdown, lessonId, intro, quizAnswers = {}) {
  const parts = splitAuthoredLessonParts(markdown);
  const opening = parts.length ? markdown.slice(0, parts[0].start).trim() : markdown.trim();
  return {
    type: "authored",
    version: 1,
    intro,
    sections: parts.map((part, index) => {
      const body = markdown.slice(part.bodyStart, part.end).trim();
      const content = [index === 0 ? opening : "", body].filter(Boolean).join("\n\n");
      return {
        id: `${lessonId}-part-${part.number}`,
        title: part.title,
        description: `Part ${part.number} of 4 — ${part.title}`,
        blocks: parseAuthoredMarkdownBlocks(content, quizAnswers),
      };
    }),
  };
}

const javascriptIntroductionAuthoredDelivery = makeAuthoredMarkdownDelivery(
  javascriptIntroductionMarkdown,
  "javascript-introduction",
  "A complete, four-part JavaScript introduction with structured explanations, comparison tables, code examples, exercises, assessment, and completion checklist.",
  { 1: "B", 2: "C", 3: "C", 4: "B", 5: "C", 6: "B" }
);
const javascriptVariablesAuthoredDelivery = makeAuthoredMarkdownDelivery(
  javascriptVariablesMarkdown,
  "javascript-variables",
  "A complete, four-part lesson on JavaScript variables, declaration keywords, scope, hoisting, practical applications, exercises, and assessment.",
  { 1: "B", 2: "B", 3: "C", 4: "C", 5: "B", 6: "B" }
);
const javascriptOperatorsAuthoredDelivery = makeAuthoredMarkdownDelivery(
  javascriptOperatorsMarkdown,
  "javascript-operators",
  "A complete, four-part lesson covering JavaScript arithmetic, assignment, comparison, logical, string, ternary, and type operators, with practical projects and assessment.",
  { 1: "B", 2: "C", 3: "C", 4: "B", 5: "C" }
);
const javascriptInputOutputAuthoredDelivery = makeAuthoredMarkdownDelivery(
  javascriptInputOutputMarkdown,
  "javascript-input-output",
  "A complete, four-part lesson on the Input–Process–Output cycle, browser and Node.js input/output, data conversion, validation, and practical projects.",
  { 1: "B", 2: "C", 3: "A", 4: "C", 5: "B" }
);
const javascriptConditionalsAuthoredDelivery = makeAuthoredMarkdownDelivery(
  javascriptConditionalsMarkdown,
  "javascript-conditionals",
  "A complete, four-part lesson on if/else logic, nested conditions, switch statements, truthy and falsy values, practical projects, and assessment.",
  { 1: "B", 2: "C", 3: "B", 4: "A", 5: "B" }
);

function makeJavaScriptMasteryLesson([id, title, focus, code, challenge, starterCode]) {
  return makeLesson({
    id,
    title,
    focus,
    code,
    challenge,
    starterCode: starterCode || `${code}\n\n// Extend this example to complete the challenge`,
  });
}

const javascriptMasteryLessonPlans = [
  ["javascript-operators-expressions", "Operators and Expressions", "JavaScript operators and expressions", "const total = 3 * (4 + 2);\nconst isReady = total >= 18 && total !== 20;\nconsole.log(total, isReady);", "Build an expression that calculates a course score and checks whether the learner passes.", "const score = 0;\nconst passed = false;"],
  ["javascript-scope-closures", "Scope and Closures", "JavaScript scope and closures", "function makeCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst next = makeCounter();\nconsole.log(next(), next());", "Create a closure that protects a private lesson-progress value and exposes safe read and update functions."],
  ["javascript-hoisting-execution", "Hoisting and Execution Context", "JavaScript execution context and hoisting", "console.log(typeof declaredLater);\nvar declaredLater = 42;\n\nfunction greet() {\n  return \"hello\";\n}", "Explain the difference between function declarations, var, let, and const during creation and execution phases."],
  ["javascript-this-prototypes", "this and Prototypes", "JavaScript this binding and prototypes", "const learner = {\n  name: \"Amina\",\n  greet() { return `Hi, ${this.name}`; }\n};\nconsole.log(learner.greet());", "Create two learner objects that share a prototype method without duplicating the method implementation."],
  ["javascript-classes-inheritance", "Classes and Composition", "JavaScript classes and object composition", "class Course {\n  constructor(title) { this.title = title; }\n  describe() { return `Course: ${this.title}`; }\n}\nconsole.log(new Course(\"JavaScript\").describe());", "Model a course and enrollment relationship, then explain when composition is safer than inheritance."],
  ["javascript-destructuring-spread", "Destructuring and Spread", "JavaScript destructuring and spread syntax", "const course = { title: \"JS\", level: \"Advanced\" };\nconst { title, ...metadata } = course;\nconst copy = { title, ...metadata, lessons: 36 };\nconsole.log(copy);", "Transform nested learner data without mutating the original objects."],
  ["javascript-array-methods", "Array Methods and Functional Patterns", "JavaScript array transformation methods", "const scores = [62, 88, 47, 91];\nconst passed = scores.filter((score) => score >= 50).map((score) => score + 5);\nconst average = passed.reduce((sum, score) => sum + score, 0) / passed.length;\nconsole.log(passed, average);", "Build a pipeline that filters, transforms, groups, and summarizes course results."],
  ["javascript-iterators-generators", "Iterators and Generators", "JavaScript iterators and generators", "function* lessonNumbers(total) {\n  for (let index = 1; index <= total; index++) yield index;\n}\nfor (const number of lessonNumbers(3)) console.log(number);", "Create a lazy generator for paginated lessons and explain why lazy iteration helps with large data."],
  ["javascript-symbols-maps-sets", "Maps, Sets, Symbols, and Weak Collections", "JavaScript collection types", "const completed = new Set([\"intro\", \"arrays\"]);\nconst attempts = new Map([[\"intro\", 2]]);\nconsole.log(completed.has(\"arrays\"), attempts.get(\"intro\"));", "Choose suitable collection types for unique tags, keyed progress, and object metadata."],
  ["javascript-modules-esm-cjs", "ES Modules and Module Boundaries", "JavaScript modules and dependency boundaries", "// progress.js\nexport function completeLesson(progress, id) {\n  return { ...progress, [id]: true };\n}\n\n// app.js\nimport { completeLesson } from \"./progress.js\";", "Split a course feature into modules with a small public API and no hidden global state."],
  ["javascript-npm-package-management", "npm and Package Management", "JavaScript package management", "{\n  \"scripts\": {\n    \"test\": \"vitest run\",\n    \"build\": \"vite build\"\n  }\n}", "Design package scripts, dependency boundaries, and a lockfile policy for a team project."],
  ["javascript-dom-tree", "The DOM Tree and Rendering", "JavaScript DOM manipulation", "const heading = document.querySelector(\"h1\");\nheading.textContent = \"Course Dashboard\";\nheading.classList.add(\"highlight\");", "Render a lesson card from data while avoiding unsafe HTML injection."],
  ["javascript-events-delegation", "Events and Event Delegation", "JavaScript browser events", "document.querySelector(\".lessons\").addEventListener(\"click\", (event) => {\n  const button = event.target.closest(\"[data-lesson-id]\");\n  if (button) console.log(button.dataset.lessonId);\n});", "Implement event delegation for a dynamic lesson list and explain propagation."],
  ["javascript-forms-validation", "Forms and Client Validation", "JavaScript form handling and validation", "form.addEventListener(\"submit\", (event) => {\n  event.preventDefault();\n  const title = new FormData(form).get(\"title\");\n  if (!title?.trim()) showError(\"Title is required\");\n});", "Build accessible validation that gives useful errors without treating client validation as security."],
  ["javascript-storage-indexeddb", "Storage and IndexedDB", "JavaScript browser storage", "localStorage.setItem(\"theme\", \"dark\");\nconst theme = localStorage.getItem(\"theme\") || \"light\";\nconsole.log(theme);", "Choose between localStorage, sessionStorage, and IndexedDB for offline course progress."],
  ["javascript-web-workers", "Web Workers and Shared Work", "JavaScript Web Workers", "const worker = new Worker(\"worker.js\");\nworker.postMessage({ task: \"calculate\", values: [1, 2, 3] });\nworker.onmessage = ({ data }) => console.log(data);", "Move an expensive calculation off the main thread and define the message contract."],
  ["javascript-promises", "Promises and Promise Composition", "JavaScript promises", "const loadCourse = fetch(\"/api/course\").then((response) => {\n  if (!response.ok) throw new Error(\"Course unavailable\");\n  return response.json();\n});\nloadCourse.then(console.log).catch(console.error);", "Compose dependent and independent asynchronous operations with clear error handling."],
  ["javascript-event-loop", "The Event Loop and Microtasks", "JavaScript event loop scheduling", "console.log(\"A\");\nsetTimeout(() => console.log(\"timer\"), 0);\nqueueMicrotask(() => console.log(\"microtask\"));\nconsole.log(\"B\");", "Predict the output order and explain the call stack, microtask queue, and task queue."],
  ["javascript-async-await", "Async and Await Patterns", "JavaScript async and await", "async function loadDashboard() {\n  const [course, progress] = await Promise.all([\n    fetch(\"/api/course\"),\n    fetch(\"/api/progress\")\n  ]);\n  return { course, progress };\n}", "Refactor nested asynchronous code, handle partial failure, and avoid accidentally serial requests."],
  ["javascript-abort-timeouts-retries", "Timeouts, Cancellation, and Retries", "JavaScript request cancellation and retry design", "const controller = new AbortController();\nsetTimeout(() => controller.abort(), 3000);\nfetch(\"/api/course\", { signal: controller.signal });", "Design bounded retries with backoff, cancellation, and a clear distinction between retryable and permanent errors."],
  ["javascript-fetch-streams", "Fetch, Streams, and Uploads", "JavaScript Fetch streams", "const response = await fetch(\"/api/export\");\nconst reader = response.body.getReader();\nconst { value, done } = await reader.read();\nconsole.log(value, done);", "Process a large response incrementally and explain memory and backpressure considerations."],
  ["javascript-websockets-sse", "WebSockets and Server-Sent Events", "JavaScript real-time communication", "const socket = new WebSocket(\"wss://example.test/progress\");\nsocket.onmessage = ({ data }) => console.log(JSON.parse(data));", "Design reconnect, ordering, authorization, and duplicate-event handling for live progress updates."],
  ["javascript-error-design", "Errors, Custom Errors, and Recovery", "JavaScript error design", "class ValidationError extends Error {\n  constructor(field, message) {\n    super(message);\n    this.field = field;\n    this.name = \"ValidationError\";\n  }\n}", "Create an error taxonomy that lets a UI show safe messages while logs retain useful diagnostics."],
  ["javascript-testing-unit", "Unit Testing JavaScript", "JavaScript unit testing", "function addTax(price, rate) { return price * (1 + rate); }\n\ntest(\"adds tax\", () => {\n  expect(addTax(100, 0.16)).toBe(116);\n});", "Write focused tests for normal cases, boundaries, invalid input, and regression bugs."],
  ["javascript-testing-integration", "Integration and Browser Testing", "JavaScript integration testing", "describe(\"course API\", () => {\n  it(\"returns a course\", async () => {\n    const response = await request(app).get(\"/api/courses/js\");\n    expect(response.status).toBe(200);\n  });\n});", "Design an integration test that exercises the API, database boundary, and authorization behavior."],
  ["javascript-debugging-devtools", "Debugging with DevTools", "JavaScript debugging and diagnostics", "debugger;\nconsole.table(learners);\nconsole.time(\"load\");\nloadCourses().finally(() => console.timeEnd(\"load\"));", "Create a repeatable debugging workflow using breakpoints, network inspection, profiling, and structured logs."],
  ["javascript-typescript-boundary", "TypeScript for JavaScript Developers", "TypeScript boundaries in JavaScript systems", "type Lesson = { id: string; title: string; completed: boolean };\nconst lesson: Lesson = { id: \"intro\", title: \"Intro\", completed: false };", "Add types at a risky API boundary and explain what static types do and do not protect at runtime."],
  ["javascript-security-xss-csrf", "Web Security: XSS, CSRF, and Injection", "JavaScript web security", "const safe = document.createElement(\"p\");\nsafe.textContent = userSuppliedText;\ncontainer.append(safe);", "Threat-model a course form and defend it against XSS, CSRF, injection, and unsafe redirects."],
  ["javascript-security-auth", "Authentication and Authorization", "JavaScript authentication and authorization", "const response = await fetch(\"/api/progress\", {\n  credentials: \"include\"\n});\nif (response.status === 401) redirectToLogin();", "Design session handling, authorization checks, token storage, logout, and account recovery safely."],
  ["javascript-performance-rendering", "Rendering and Performance", "JavaScript rendering performance", "const fragment = document.createDocumentFragment();\nfor (const lesson of lessons) fragment.append(renderLesson(lesson));\ncontainer.replaceChildren(fragment);", "Measure and improve a slow interface using batching, memoization, virtualization, and performance budgets."],
  ["javascript-node-runtime", "Node.js Runtime and the Filesystem", "Node.js runtime fundamentals", "import { readFile } from \"node:fs/promises\";\nconst source = await readFile(\"package.json\", \"utf8\");\nconsole.log(JSON.parse(source).name);", "Build a safe command-line tool with filesystem errors, argument validation, and graceful shutdown."],
  ["javascript-node-http", "Node.js HTTP Servers", "Node.js HTTP servers", "import http from \"node:http\";\nconst server = http.createServer((request, response) => {\n  response.writeHead(200, { \"content-type\": \"application/json\" });\n  response.end(JSON.stringify({ ok: true }));\n});", "Implement routing, request limits, structured errors, and health checks for a small HTTP service."],
  ["javascript-express-architecture", "Express APIs and Middleware", "Express API architecture", "app.use(express.json({ limit: \"100kb\" }));\napp.get(\"/api/courses\", requireAuth, listCourses);\napp.use(errorHandler);", "Separate routing, validation, services, repositories, and error middleware in an Express API."],
  ["javascript-databases", "JavaScript Persistence and Transactions", "JavaScript database integration", "const user = await db.users.findOne({ id: userId });\nawait db.transaction(async (tx) => {\n  await tx.progress.update({ userId, lessonId, completed: true });\n});", "Design a repository boundary with parameterized queries, transactions, migrations, and recovery behavior."],
  ["javascript-deployment-observability", "Deployment and Observability", "JavaScript production deployment", "const health = {\n  version: process.env.APP_VERSION,\n  uptime: process.uptime(),\n  status: \"ok\"\n};\nconsole.log(JSON.stringify(health));", "Create a deployment checklist with environment configuration, logs, metrics, tracing, health checks, and rollback."],
  ["javascript-architecture", "JavaScript Architecture and Refactoring", "large-scale JavaScript architecture", "const createCourseService = ({ repository, clock, logger }) => ({\n  async complete(id) {\n    logger.info({ id }, \"completing lesson\");\n    return repository.complete(id, clock.now());\n  }\n});", "Refactor a tangled feature into testable boundaries, remove technical debt safely, and document the architecture decision."],
  ["javascript-project-frontend", "Project: Production Frontend", "a production JavaScript frontend", "const app = createApp({ api, router, storage, telemetry });\napp.mount(document.querySelector(\"#root\"));", "Build a production frontend with accessible UI, state management, API errors, tests, security controls, and performance budgets."],
  ["javascript-project-backend", "Project: Production Node API", "a production Node.js API", "const api = createApi({ auth, courses, progress, metrics });\nawait api.listen({ port: 3000 });", "Build a tested Node API with authentication, persistence, validation, rate limits, observability, and deployment documentation."],
  ["javascript-project-capstone", "JavaScript Mastery Capstone", "a complete JavaScript learning platform", "const platform = {\n  frontend: true,\n  api: true,\n  database: true,\n  tests: true,\n  securityReview: true,\n  productionRunbook: true\n};\nconsole.log(platform);", "Deliver a complete JavaScript product from requirements to production. Include architecture, frontend, backend, persistence, authentication, testing, security review, performance measurements, monitoring, deployment, rollback, and a retrospective."]
];


const pythonIntroductionAuthoredDelivery = {
  type: "authored",
  version: 1,
  intro: "This lesson introduces Python, explains how it works, and teaches learners how to write and execute their first Python program.",
  sections: [
    {
      id: "python-introduction-understanding-python",
      title: "Understanding Python",
      description: "Part 1 of 4 — Understanding Python",
      blocks: [
        { type: "heading", text: "1. What is Python?" },
        { type: "text", text: "**Python** is a **high-level, general-purpose programming language** used to develop different types of software and applications.\n\nIt is popular because its syntax is simple and readable. This makes it easier for beginners to learn programming.\n\nPython allows developers to give instructions to computers to perform specific tasks.\n\nFor example, Python can be used to:" },
        { type: "bullets", items: [
          "Build websites and web applications.",
          "Develop artificial intelligence systems.",
          "Analyse and process data.",
          "Automate repetitive tasks.",
          "Develop cybersecurity tools.",
          "Build desktop applications.",
          "Create scripts and software solutions.",
        ] },
        { type: "heading", text: "2. Who created Python?" },
        { type: "text", text: "**Python** was created by **Guido van Rossum**." },
        { type: "bullets", items: [
          "Development started in the late 1980s.",
          "Python was first released in 1991.",
          "It was designed to be readable and relatively easy to use.",
          "It has continued to evolve through different versions.",
        ] },
        { type: "heading", text: "3. Why is Python popular?" },
        { type: "text", text: "**Python** is widely used because of several advantages." },
        { type: "table", title: "Python advantages", columns: ["Feature", "Explanation"], rows: [
          ["Easy syntax", "Code is readable and beginner-friendly."],
          ["Versatile", "Used in many areas of software development."],
          ["Open source", "Freely available to use and distribute."],
          ["Libraries", "Provides reusable tools for developers."],
          ["Community", "Has a large developer community."],
          ["Cross-platform", "Runs on Windows, Linux and macOS."],
        ] },
        { type: "heading", text: "4. Where is Python used?" },
        { type: "heading", text: "Artificial Intelligence" },
        { type: "text", text: "Python is used to develop machine learning models, AI applications and intelligent systems." },
        { type: "heading", text: "Cybersecurity" },
        { type: "text", text: "Developers use Python to automate security tasks, analyse logs and build security testing tools." },
        { type: "heading", text: "Data Science" },
        { type: "text", text: "Python helps process large datasets, perform calculations and create visualizations." },
        { type: "heading", text: "Software Development" },
        { type: "text", text: "Python frameworks such as Django and Flask are used to build web applications and APIs." },
        { type: "heading", text: "5. Understanding how Python works" },
        { type: "text", text: "A computer processor does not directly understand **Python code**. Python uses an implementation that processes your source code and executes the instructions." },
        { type: "bullets", items: [
          "**Python source code** — instructions written by the developer.",
          "**Python interpreter** — processes and executes the program.",
          "**Program output** — the result of executing the instructions.",
        ] },
        { type: "heading", text: "6. Python compared with other languages" },
        { type: "text", text: "Python is not the only programming language. Each language has different strengths and applications." },
        { type: "table", title: "Language comparison", columns: ["Language", "Common applications"], rows: [
          ["Python", "AI, automation, software"],
          ["JavaScript", "Web development"],
          ["Java", "Enterprise applications"],
          ["C", "Systems programming"],
          ["C++", "Games and high-performance software"],
        ] },
        { type: "heading", text: "7. Key points to remember" },
        { type: "bullets", items: [
          "Python is a high-level programming language.",
          "It was created by Guido van Rossum.",
          "Its first release was in 1991.",
          "It is used in AI, cybersecurity, automation and software development.",
          "Python code is executed using a Python interpreter.",
        ] },
        { type: "callout", title: "Part 1 complete", text: "You have learned what Python is, who created it, where it is used, and how the interpreter connects source code to program output." },
      ],
    },
    {
      id: "python-introduction-setting-up",
      title: "Setting Up Python",
      description: "Part 2 of 4 — Install Python, choose an editor, and verify the interpreter.",
      blocks: [
        { type: "text", text: "Before writing Python programs, you need an environment where you can write and execute code." },
        { type: "heading", text: "1. What do you need?" },
        { type: "text", text: "You need two main things:\n\nA. Python interpreter\n\nThe interpreter allows your computer to execute Python programs.\n\nB. Code editor\n\nA code editor is software used to write and manage your program files." },
        { type: "heading", text: "Popular code editors" },
        { type: "heading", text: "Visual Studio Code" },
        { type: "text", text: "A popular code editor with Python extensions, syntax highlighting and debugging tools.\n\n[Official website](https://code.visualstudio.com/)" },
        { type: "heading", text: "PyCharm" },
        { type: "text", text: "An IDE designed specifically for Python development.\n\n[Official website](https://www.jetbrains.com/pycharm/)" },
        { type: "heading", text: "Python IDLE" },
        { type: "text", text: "A simple environment included with many standard Python installations." },
        { type: "heading", text: "2. Installing Python" },
        { type: "text", text: "Let's use Windows as an example." },
        { type: "numbered", items: [
          "Visit the official Python website.",
          "Download the latest stable Python version available for your operating system.",
          "Open the downloaded installer.",
          "Enable the option: Add Python to PATH.",
          "Click Install Now.",
          "Wait for the installation to finish.",
        ] },
        { type: "text", text: "[Download Python](https://www.python.org/downloads/)" },
        { type: "heading", text: "3. Verify the installation" },
        { type: "text", text: "Open your terminal or Command Prompt. Enter:" },
        { type: "code", language: "bash", filename: "Terminal", code: "python --version" },
        { type: "text", text: "On some systems, use:" },
        { type: "code", language: "bash", filename: "Terminal", code: "python3 --version" },
        { type: "text", text: "Expected output (the version number may differ):" },
        { type: "code", language: "text", filename: "Expected output", code: "Python 3.x.x" },
        { type: "text", text: "This confirms that Python is accessible from your terminal." },
        { type: "heading", text: "4. Understanding the PATH variable" },
        { type: "text", text: "**PATH** is an environment variable that tells your operating system where to find executable programs. When Python is added to PATH, you can execute it from different terminal locations without typing its full installation directory." },
        { type: "callout", title: "Part 2 complete", text: "You now know what tools are required, how to install Python, how to verify the installation, and why PATH matters." },
      ],
    },
    {
      id: "python-introduction-first-program",
      title: "Running Your First Python Program",
      description: "Part 3 of 4 — Create a project, run a Python file, use the REPL, and troubleshoot beginner errors.",
      blocks: [
        { type: "text", text: "Now it's time to write and execute actual Python code." },
        { type: "heading", text: "1. Create your first project" },
        { type: "text", text: "Open Visual Studio Code. Create a folder named python_learning, open that folder in VS Code, and create a new file named hello.py." },
        { type: "code", language: "text", filename: "Project structure", code: "python_learning/\n    hello.py" },
        { type: "heading", text: "2. Write your first Python code" },
        { type: "text", text: "Inside hello.py, type:" },
        { type: "code", language: "python", filename: "hello.py", code: "print(\"Hello, World!\")" },
        { type: "text", text: "Let's understand the code." },
        { type: "table", title: "Parts of print(\"Hello, World!\")", columns: ["Code", "Meaning"], rows: [
          ["**print()**", "Displays information on the screen."],
          ["\"Hello, World!\"", "The text we want to display."],
          ["Parentheses", "Contain the information passed to the function."],
          ["Quotation marks", "Indicate a string of text."],
        ] },
        { type: "heading", text: "3. Run the program using the terminal" },
        { type: "text", text: "Open the integrated terminal in VS Code. Make sure the terminal is inside your project directory. Execute:" },
        { type: "code", language: "bash", filename: "Terminal", code: "python hello.py" },
        { type: "text", text: "Expected output:" },
        { type: "code", language: "text", filename: "Expected output", code: "Hello, World!" },
        { type: "callout", title: "Congratulations", text: "You have executed your first Python program." },
        { type: "heading", text: "4. Run Python code interactively" },
        { type: "text", text: "Python also provides an interactive environment called the Python REPL. REPL means Read, Evaluate, Print, Loop: it receives your instruction, processes it, displays the result, and waits for another instruction." },
        { type: "code", language: "bash", filename: "Terminal", code: "python" },
        { type: "code", language: "text", filename: "Python prompt", code: ">>>" },
        { type: "code", language: "python", filename: "REPL", code: "print(\"Learning Python\")" },
        { type: "code", language: "text", filename: "Expected output", code: "Learning Python" },
        { type: "text", text: "To exit the interactive interpreter, type exit()." },
        { type: "heading", text: "5. Understanding different ways of running Python" },
        { type: "table", title: "Ways to run Python", columns: ["Method", "How it works"], rows: [
          ["Python file", "Executes a saved .py file."],
          ["Interactive shell", "Executes instructions one at a time."],
          ["IDE run button", "Executes code through your editor."],
          ["Terminal", "Runs Python commands directly."],
        ] },
        { type: "heading", text: "6. Common errors beginners encounter" },
        { type: "callout", title: "Python is not recognized", text: "Possible reason: Python is not installed correctly or PATH is not configured. Solution: verify the installation and PATH settings." },
        { type: "callout", title: "No such file or directory", text: "Possible reason: you are running a file from the wrong directory. Solution: navigate to the folder containing your Python file." },
        { type: "callout", title: "SyntaxError", text: "Possible reason: the code contains invalid Python syntax. A missing closing quotation mark is a common example." },
        { type: "code", language: "python", filename: "Incorrect", code: "print(\"Hello)" },
        { type: "code", language: "python", filename: "Correct", code: "print(\"Hello\")" },
        { type: "heading", text: "7. Practical exercise" },
        { type: "exercise", title: "Create introduction.py", description: "Create a file called introduction.py. Write a program that displays three lines: My name is Brian. I am learning Python. I want to become a software developer. Hint: use three separate **print()** statements." },
        { type: "callout", title: "Part 3 complete", text: "You can now create a Python file, execute it in a terminal, use the interactive shell, and identify common beginner errors." },
      ],
    },
    {
      id: "python-introduction-assessment",
      title: "Kai Assessment",
      description: "Part 4 of 4 — Test your understanding before moving to the next lesson.",
      blocks: [
        { type: "heading", text: "AI-powered assessment" },
        { type: "text", text: "Kai generates an assessment based on Parts 1, 2 and 3. The following is an illustrative assessment for this lesson. Answer all five questions before moving to the next lesson." },
        { type: "heading", text: "Python fundamentals · 5 questions" },
        { type: "quiz", question: "Who created the Python programming language?", options: ["James Gosling", "Guido van Rossum", "Dennis Ritchie", "Brendan Eich"], answer: "Guido van Rossum", explanation: "**Python** was created by **Guido van Rossum**." },
        { type: "quiz", question: "Which command checks the installed Python version on many systems?", options: ["python --version", "python --install", "python --remove", "python --start"], answer: "python --version", explanation: "The --version option reports the installed Python version." },
        { type: "quiz", question: "What is the purpose of the **print()** function?", options: ["To install Python", "To delete files", "To display information", "To create folders"], answer: "To display information", explanation: "**print()** sends a value or message to the program output." },
        { type: "quiz", question: "What file extension is normally used for Python source files?", options: [".html", ".py", ".css", ".sql"], answer: ".py", explanation: "Python source files normally use the .py extension." },
        { type: "quiz", question: "What does PATH help the operating system locate?", options: ["Images", "Documents", "Executable programs", "Websites"], answer: "Executable programs", explanation: "PATH lists locations where executable programs such as Python can be found." },
        { type: "heading", text: "Final lesson outcome" },
        { type: "text", text: "After completing this lesson, the learner should be able to:" },
        { type: "bullets", items: [
          "Define Python and explain its applications.",
          "Identify the advantages of Python.",
          "Explain the role of the Python interpreter.",
          "Install and verify Python.",
          "Create a Python source file.",
          "Execute Python programs using a terminal.",
          "Use the interactive Python shell.",
          "Identify and troubleshoot basic execution errors.",
        ] },
        { type: "callout", title: "Submit assessment", text: "Answer all five questions to submit. Passing Kai's assessment unlocks the next lesson according to the course progression rules." },
      ],
    },
  ],
};
const pythonVariablesAuthoredDelivery = {
  type: "authored",
  version: 1,
  intro: "Learn how Python stores, retrieves, changes, and uses information through variables.",
  sections: [
    {
      id: "python-variables-introduction",
      title: "Introduction to Variables",
      description: "Part 1 of 4 · Learn what variables are, why they matter, and how assignment works.",
      blocks: [
        { type: "heading", text: "1. What is a variable?" },
        { type: "text", text: "A variable is a named storage location used to hold data in a computer program. Think of a variable as a labelled container. The container holds information, the label identifies the information, and the stored information can be accessed whenever it is needed." },
        { type: "text", text: "For example, imagine that you want to store a learner's name. Python creates the name variable and associates it with the text value Brian." },
        { type: "code", language: "python", filename: "name.py", code: "name = \"Brian\"" },
        { type: "text", text: "Here, name is the variable name, = is the assignment operator, and \"Brian\" is the value stored in the variable. Assignment does not mean that the two sides are mathematically equal. It means Python evaluates the right side and stores the result under the name on the left." },
        { type: "heading", text: "2. Why are variables important?" },
        { type: "bullets", items: [
          "Store information for later use.",
          "Reuse data without writing the same value repeatedly.",
          "Perform calculations using named values.",
          "Modify information when the program needs to change it.",
          "Build dynamic applications that respond to input.",
        ] },
        { type: "heading", text: "3. How does a variable work?" },
        { type: "code", language: "python", filename: "age.py", code: "age = 20\nprint(age)" },
        { type: "text", text: "Python creates a variable called age, assigns the integer 20 to it, and then print(age) retrieves and displays the value stored under that name." },
        { type: "code", language: "text", filename: "Expected output", code: "20" },
        { type: "heading", text: "4. Important characteristics" },
        { type: "table", title: "Parts of a variable", columns: ["Characteristic", "Explanation"], rows: [
          ["Name", "Identifies the variable"],
          ["Value", "The information currently stored"],
          ["Assignment", "Gives a value to a variable"],
          ["Reassignment", "Changes the value stored under a name"],
        ] },
        { type: "callout", title: "Part 1 summary", text: "A variable is a fundamental programming concept. It allows a program to store, access, and manipulate information." },
      ],
    },
    {
      id: "python-variables-concepts",
      title: "Working with Variables and Values",
      description: "Part 2 of 4 · Learn naming rules, value types, reassignment, and input conversion.",
      blocks: [
        { type: "heading", text: "1. Variable naming rules" },
        { type: "text", text: "Python variable names may contain letters, numbers, and underscores. They cannot contain spaces, cannot begin with a number, and are case-sensitive. This means score, Score, and SCORE are three different names." },
        { type: "code", language: "python", filename: "names.py", code: "learner_name = \"Amina\"\nlesson_count = 4\n_is_ready = True" },
        { type: "bullets", items: [
          "Use descriptive names such as learner_name and total_score.",
          "Use lowercase words separated by underscores in normal Python code.",
          "Do not use Python keywords such as if, class, or return as names.",
          "Avoid names such as list or str because they hide useful built-in functions.",
        ] },
        { type: "heading", text: "2. Common value types" },
        { type: "text", text: "A variable can refer to different kinds of values. The value type determines which operations make sense. Text can be joined, numbers can be calculated, and booleans can be used in decisions." },
        { type: "table", title: "Common Python value types", columns: ["Type", "Example", "Purpose"], rows: [
          ["str", '\"Amina\"', "Text"],
          ["int", "20", "Whole numbers"],
          ["float", "1.68", "Decimal numbers"],
          ["bool", "True", "True or false decisions"],
        ] },
        { type: "heading", text: "3. Reassignment" },
        { type: "code", language: "python", filename: "reassignment.py", code: "age = 20\nage = age + 1\nprint(age)" },
        { type: "text", text: "The first line stores 20. The second line reads the current value, adds 1, and stores the new result under the same name. The final line prints 21. Reassignment changes the value associated with a name; it does not create a second variable called age." },
        { type: "heading", text: "4. Input and conversion" },
        { type: "code", language: "python", filename: "input_value.py", code: "age_text = input(\"How old are you? \" )\nage = int(age_text)\nprint(age + 1)" },
        { type: "text", text: "input() returns text, even when the learner types digits. int() converts that text to a whole number so Python can perform arithmetic. Convert values at the boundary of your program and validate input when it may be invalid." },
        { type: "callout", title: "Common mistake", text: "Do not confuse = with ==. A single equals sign assigns a value. A double equals sign compares two values." },
        { type: "callout", title: "Part 2 summary", text: "Good variable names communicate intent. The value type controls what the program can do, and reassignment lets the program update its state." },
      ],
    },
    {
      id: "python-variables-examples",
      title: "Examples, Walkthroughs, and Practice",
      description: "Part 3 of 4 · Trace complete programs, predict output, and build a learner profile.",
      blocks: [
        { type: "heading", text: "1. A complete learner profile" },
        { type: "code", language: "python", filename: "learner_profile.py", code: "name = \"Brian\"\nage = 25\nlanguage = \"Python\"\n\nprint(name)\nprint(age)\nprint(language)" },
        { type: "heading", text: "2. Line-by-line explanation" },
        { type: "bullets", items: [
          "name = \"Brian\" stores a string under the name name.",
          "age = 25 stores a whole number under the name age.",
          "language = \"Python\" stores another string for the learner's preferred language.",
          "Each print() call retrieves one stored value and writes it to the terminal.",
        ] },
        { type: "heading", text: "3. Expected output" },
        { type: "code", language: "text", filename: "Terminal", code: "Brian\n25\nPython" },
        { type: "text", text: "The output appears in the same order as the print statements. Python does not automatically display every variable; a program must use print() or another operation to make a value visible." },
        { type: "heading", text: "4. Guided experiment" },
        { type: "code", language: "python", filename: "experiment.py", code: "completed = 3\ntotal = 10\nprogress = completed / total * 100\nprint(progress)" },
        { type: "text", text: "Before running the code, calculate the expected result. completed is 3, total is 10, and the division produces 0.3. Multiplying by 100 produces 30.0, so the program prints the learner's percentage progress." },
        { type: "exercise", title: "Practice: build and improve a profile", description: "Create variables for a learner's name, age, course, and completed lesson count. Print a readable profile. Then calculate a progress percentage using completed_lessons and total_lessons. Test the program with a second learner." },
        { type: "checklist", title: "Before moving to Part 4", items: [
          "I can identify the name, operator, and value in an assignment.",
          "I can predict what a print statement will display.",
          "I can change a variable and explain the new result.",
        ] },
      ],
    },
    {
      id: "python-variables-assessment",
      title: "Test Your Understanding",
      description: "Part 4 of 4 · Review the lesson, then complete Kai's assessment.",
      blocks: [
        { type: "heading", text: "Assessment preparation" },
        { type: "text", text: "Before starting Kai's assessment, explain the lesson without looking back at the examples. Define a variable, describe assignment, name three common Python value types, and explain how reassignment changes a stored value." },
        { type: "quiz", question: "What does name = \"Brian\" do in Python?", options: [
          "It assigns the string Brian to the name variable",
          "It compares name with Brian",
          "It prints Brian immediately",
          "It creates a function called name",
        ], answer: "It assigns the string Brian to the name variable", explanation: "The assignment operator evaluates the value on the right and associates it with the name on the left." },
        { type: "heading", text: "Explain this code" },
        { type: "code", language: "python", filename: "assessment_review.py", code: "lessons_done = 4\nlessons_total = 8\nprogress = lessons_done / lessons_total * 100\nprint(progress)" },
        { type: "text", text: "A strong explanation says that the program stores two integers, divides the completed count by the total count, multiplies by 100, and prints 50.0. Kai may ask you to explain what changes when lessons_done changes or lessons_total is zero." },
        { type: "checklist", title: "Ready for Kai's assessment?", items: [
          "I can define a variable and assignment.",
          "I can explain strings, integers, floats, and booleans.",
          "I can trace a variable-based Python program line by line.",
          "I can identify a naming, type, or division-by-zero mistake.",
        ] },
      ],
    },
  ],
};
const lessons = {
  javascript: [
    {
      id: "js-variables",
      title: "JavaScript Variables",
      description: "Learn how JavaScript stores and manages information.",
      level: "Beginner",
      estimatedTime: "20 min",

      objectives: [
        "Understand what a variable is",
        "Understand let, const, and var",
        "Know when to use let and const",
        "Store different types of values",
        "Modify variable values",
      ],

      sections: [
        {
          type: "explanation",
          title: "What is a Variable?",
          content: `
A variable is a named place where a program can store a value.

Think of a variable like a labeled box.

The label gives the box a name, while the value is what we put inside the box.

For example:

let age = 20;

Here:

- "age" is the variable name.
- 20 is the value.
- let tells JavaScript that we are creating a variable.

Variables allow programs to remember information and use that information later.
          `,
        },

        {
          type: "example",
          title: "Your First Variable",
          code: `let username = "Brian";

console.log(username);`,
          explanation:
            "JavaScript stores the text \"Brian\" inside the username variable. console.log() then reads the value stored in that variable.",
        },

        {
          type: "deepDive",
          title: "Why Do We Need Variables?",
          content: `
Without variables, programs would have to repeatedly write the same values.

Imagine an application needs to display a user's name in ten different places.

Instead of writing the name everywhere, we can store it once:

const username = "Brian";

Then use:

console.log(username);

Variables make programs easier to maintain, understand, and change.
          `,
        },

        {
          type: "concept",
          title: "let vs const",
          content: `
JavaScript commonly uses let and const when creating variables.

Use let when the value may change:

let score = 10;
score = 20;

Use const when the value should not be reassigned:

const country = "Kenya";

country = "Uganda";

The second example causes an error because a const variable cannot be reassigned.
          `,
        },

        {
          type: "example",
          title: "Changing a Variable",
          code: `let score = 10;

console.log(score);

score = 50;

console.log(score);`,
          explanation:
            "The variable starts with the value 10. Later, its value is changed to 50.",
        },

        {
          type: "challenge",
          title: "Try It Yourself",
          instructions: `
Create a variable called username.

Store your name inside it.

Then print the variable using console.log().
          `,
          starterCode: `let username = "";

console.log(username);`,
        },

        {
          type: "quiz",
          title: "Quick Check",
          question: "Which keyword should you normally use for a value that should not be reassigned?",
          options: ["let", "const", "var", "change"],
          answer: "const",
          explanation:
            "const is used when a variable should not be reassigned after it has been created.",
        },

        {
          type: "summary",
          title: "Lesson Summary",
          content: `
You learned that:

1. Variables store information.
2. let creates a variable that can be reassigned.
3. const creates a variable that cannot be reassigned.
4. Variables make programs easier to manage.
5. console.log() can be used to inspect a stored value.

Next, you should learn about JavaScript data types.
          `,
        },
      ],
    },

    {
      id: "js-data-types",
      title: "JavaScript Data Types",
      description: "Understand the different kinds of values JavaScript can work with.",
      level: "Beginner",
      estimatedTime: "25 min",

      objectives: [
        "Understand primitive data types",
        "Understand strings",
        "Understand numbers",
        "Understand booleans",
        "Understand null and undefined",
        "Identify data types using typeof",
      ],

      sections: [
        {
          type: "explanation",
          title: "What is a Data Type?",
          content: `
A data type describes the kind of value stored in a variable.

For example:

const name = "Brian";

The value is text, so JavaScript treats it as a string.

Another example:

const age = 25;

This is a number.

Different types of data behave differently inside a program.
          `,
        },

        {
          type: "example",
          title: "Common Data Types",
          code: `const name = "Brian";
const age = 25;
const isStudent = true;

console.log(name);
console.log(age);
console.log(isStudent);`,
          explanation:
            "The variables contain a string, number, and boolean respectively.",
        },

        {
          type: "deepDive",
          title: "Checking a Data Type",
          content: `
JavaScript provides the typeof operator.

Example:

const age = 25;

console.log(typeof age);

The result is:

"number"

You can use typeof when debugging your application and trying to understand what kind of value you are working with.
          `,
        },

        {
          type: "challenge",
          title: "Try It Yourself",
          instructions: `
Create three variables:

name
age
isDeveloper

Give each variable an appropriate value.

Then use typeof to inspect each value.
          `,
          starterCode: `const name = "";
const age = 0;
const isDeveloper = false;

// Check the types here
`,
        },

        {
          type: "quiz",
          title: "Quick Check",
          question: "What data type is the value true?",
          options: ["String", "Number", "Boolean", "Object"],
          answer: "Boolean",
          explanation:
            "true and false are boolean values in JavaScript.",
        },

        {
          type: "summary",
          title: "Lesson Summary",
          content: `
You now understand that JavaScript values have different data types.

Important beginner types include:

- String
- Number
- Boolean
- Undefined
- Null

The typeof operator can help you inspect a value's type.
          `,
        },
      ],
    },
  ],

  python: [
    ...pythonProfessionalRoadmap.map(makePythonRoadmapLesson),
    {
      id: "python-variables",
      title: "Python Variables",
      description: "Learn how to store information in Python.",
      level: "Beginner",
      estimatedTime: "20 min",

      objectives: [
        "Understand Python variables",
        "Store values",
        "Change values",
        "Work with strings and numbers",
      ],

      delivery: pythonVariablesAuthoredDelivery,

      sections: [
        {
          type: "explanation",
          title: "What is a Variable?",
          content: `
A variable is a name that refers to a value.

For example:

name = "Brian"

Python does not require a special keyword such as let or const to create a normal variable.

The variable name is name and the stored value is "Brian".
          `,
        },

        {
          type: "example",
          title: "Creating a Variable",
          code: `name = "Brian"
age = 25

print(name)
print(age)`,
          explanation:
            "Python stores the values and allows you to use the variable names later.",
        },

        {
          type: "challenge",
          title: "Try It Yourself",
          instructions: `
Create variables for:

- your name
- your age
- your favorite programming language

Then print all three.
          `,
          starterCode: `name = ""
age = 0
language = ""

print(name)
print(age)
print(language)`,
        },
      ],
    },
    {
      id: "python-data-types",
      title: "Python Data Types",
      description: "Understand the common values Python programs work with.",
      level: "Beginner",
      estimatedTime: "20 min",
      objectives: ["Identify strings, numbers, booleans, and lists", "Choose suitable values", "Use type conversion safely"],
      sections: [
        { type: "explanation", title: "Common Python Values", content: `Python values have different types. Strings hold text, integers and floats hold numbers, booleans represent True or False, and lists hold collections of values.` },
        { type: "example", title: "Checking Types", code: `name = "Brian"\nage = 25\nactive = True\n\nprint(type(name))\nprint(type(age))\nprint(type(active))`, explanation: "type() helps you inspect what kind of value a variable contains." },
        { type: "challenge", title: "Try It Yourself", instructions: "Create one string, one integer, one float, one boolean, and one list. Print each value and its type.", starterCode: `name = ""\nage = 0\nprice = 0.0\nactive = False\nitems = []` },
      ],
    },
    {
      id: "python-conditionals",
      title: "Python Conditions",
      description: "Make decisions with if, elif, and else.",
      level: "Beginner",
      estimatedTime: "25 min",
      objectives: ["Write boolean comparisons", "Use if and else branches", "Handle more than two cases with elif"],
      sections: [
        { type: "explanation", title: "Making Decisions", content: `Conditional statements let a program choose what to do. Python runs the indented block after if when its condition is True.` },
        { type: "example", title: "A Simple Decision", code: `score = 72\n\nif score >= 50:\n    print("Pass")\nelse:\n    print("Try again")`, explanation: "The comparison creates a boolean result, and indentation defines each branch." },
        { type: "challenge", title: "Try It Yourself", instructions: "Write a program that reports whether a number is positive, negative, or zero.", starterCode: `number = 0\n\nif number > 0:\n    pass\nelif number < 0:\n    pass\nelse:\n    pass` },
      ],
    },
    {
      id: "python-loops",
      title: "Python Loops",
      description: "Repeat work with for and while loops.",
      level: "Beginner",
      estimatedTime: "25 min",
      objectives: ["Iterate through a collection", "Repeat a known number of times", "Avoid accidental infinite loops"],
      sections: [
        { type: "explanation", title: "Repeating Work", content: `A for loop visits each item in a sequence. A while loop repeats while its condition remains True.` },
        { type: "example", title: "Looping Through Items", code: `languages = ["Python", "JavaScript", "Go"]\n\nfor language in languages:\n    print(language)`, explanation: "The loop variable receives one item on each iteration." },
        { type: "challenge", title: "Try It Yourself", instructions: "Loop through a list of numbers and print only the numbers greater than 10.", starterCode: `numbers = [4, 12, 7, 20, 3]\n\nfor number in numbers:\n    pass` },
      ],
    },
    {
      id: "python-functions",
      title: "Python Functions",
      description: "Organize reusable logic with functions.",
      level: "Beginner",
      estimatedTime: "25 min",
      objectives: ["Define and call functions", "Pass arguments", "Return calculated results"],
      sections: [
        { type: "explanation", title: "Reusable Behavior", content: `Functions package a task under a name. Parameters provide input and return sends a result back to the caller.` },
        { type: "example", title: "A Greeting Function", code: `def greet(name):\n    return f"Hello, {name}!"\n\nmessage = greet("Brian")\nprint(message)`, explanation: "The function can be called with different names without repeating its implementation." },
        { type: "challenge", title: "Try It Yourself", instructions: "Create a function that accepts a price and tax rate, then returns the final price.", starterCode: `def final_price(price, tax_rate):\n    pass\n\nprint(final_price(100, 0.16))` },
      ],
    },
    {
      id: "python-collections-project",
      title: "Python Collections Project",
      description: "Combine variables, conditions, loops, and functions in a small program.",
      level: "Beginner",
      estimatedTime: "30 min",
      objectives: ["Store related values in a list", "Process data with a loop", "Separate logic into a function"],
      sections: [
        { type: "explanation", title: "Putting the Pieces Together", content: `Small Python programs become easier to change when data is stored in collections and repeated logic is placed in functions.` },
        { type: "example", title: "Course Score Summary", code: `def average(scores):\n    return sum(scores) / len(scores)\n\nscores = [80, 74, 91]\nprint(average(scores))`, explanation: "The function receives a collection and returns one useful summary value." },
        { type: "challenge", title: "Build a Score Tracker", instructions: "Create a small program that stores scores, calculates the average, and prints whether the learner passed.", starterCode: `def average(scores):\n    pass\n\nscores = []\n# Add scores, calculate the average, and check the result` },
      ],
    },
    ...pythonProfessionalRoadmap.map(makePythonRoadmapLesson),
    ...pythonMasteryLessonPlans.map(makePythonMasteryLesson),
  ],

  ...expandedCourseLessonPlans,
  ...generatedMissingCourseLessons,
  ...cloudCourseLessonPlans,
  ...cyberCourseLessonPlans,
  ...aiCourseLessonPlans,
  ...databaseCourseLessonPlans,
};

const javascriptProfessionalRoadmap = [
  ["Introduction to JavaScript", "JavaScript syntax, runtimes, and the role of scripts in web applications."],
  ["Variables (`let`, `const`, `var`)", "Declare values safely and understand reassignment and hoisting trade-offs."],
  ["Data Types", "Work with primitive values, objects, null, undefined, and type conversion."],
  ["Operators", "Use arithmetic, comparison, logical, assignment, and ternary operators."],
  ["Input and Output", "Read browser input and produce clear output with the console and the DOM."],
  ["Conditional Statements (`if`, `else`, `switch`)", "Choose behavior with readable conditional branches."],
  ["Loops (`for`, `while`, `for...of`, `for...in`)", "Repeat work while choosing the correct iteration construct."],
  ["Functions", "Create reusable functions with parameters, return values, and clear contracts."],
  ["Strings and String Methods", "Search, format, split, and transform text safely."],
  ["Arrays and Array Methods", "Store ordered data and transform arrays with built-in methods."],
  ["Objects and Object Methods", "Model related data and behavior with JavaScript objects."],
  ["Scope and Closures", "Understand lexical scope and use closures to protect state."],
  ["Arrow Functions", "Use concise functions while understanding lexical `this`."],
  ["Destructuring and Spread/Rest Operators", "Extract values and compose arrays and objects without unintended mutation."],
  ["Array Methods (`map`, `filter`, `reduce`, `find`)", "Build readable data-transformation pipelines."],
  ["Error Handling (`try`, `catch`, `finally`)", "Handle expected failures and clean up resources safely."],
  ["DOM Manipulation", "Read and update the document tree to create interactive interfaces."],
  ["Events and Event Handling", "Respond to user actions and understand propagation and delegation."],
  ["Forms and Input Validation", "Build accessible forms and validate input without treating the client as a security boundary."],
  ["JavaScript Modules (`import`, `export`)", "Split code into maintainable modules with explicit boundaries."],
  ["Asynchronous JavaScript", "Reason about non-blocking work, callbacks, and completion order."],
  ["Promises", "Represent eventual results and compose asynchronous operations."],
  ["`async` and `await`", "Write readable asynchronous code with explicit error handling."],
  ["Fetch API and HTTP Requests", "Call APIs with request configuration, timeouts, status checks, and safe errors."],
  ["JSON and Data Handling", "Serialize, parse, validate, and transform structured data."],
  ["Browser Storage (LocalStorage, SessionStorage)", "Persist appropriate client-side state while considering privacy and staleness."],
  ["Object-Oriented Programming", "Model state and behavior with objects, composition, and reusable abstractions."],
  ["Prototypes and Inheritance", "Understand prototype lookup and choose inheritance deliberately."],
  ["Classes and Constructors", "Define class contracts, constructors, methods, and instances."],
  ["Regular Expressions", "Search and validate structured text while knowing when a parser is safer."],
  ["Debugging and Browser Developer Tools", "Use breakpoints, network inspection, console tools, and profilers to find root causes."],
  ["Testing with Jest or Vitest", "Write focused unit tests, regression tests, and useful assertions."],
  ["Node.js Fundamentals", "Run JavaScript outside the browser and work with the Node.js runtime."],
  ["npm and Package Management", "Manage dependencies, scripts, lockfiles, and reproducible installs."],
  ["Backend Development with Express.js", "Build server routes, middleware, validation, and error handling with Express."],
  ["REST APIs and CRUD Operations", "Design predictable HTTP resources and implement create, read, update, and delete flows."],
  ["Databases and SQL Integration", "Persist application data with queries, transactions, migrations, and repository boundaries."],
  ["Authentication and Web Security", "Protect identities, sessions, data, and browser applications from common threats."],
  ["TypeScript", "Add static types to JavaScript boundaries and understand runtime limitations."],
  ["Frontend Frameworks (React)", "Build component-based interfaces with props, state, effects, and accessibility."],
  ["State Management", "Choose local, server, URL, and shared state boundaries for predictable applications."],
  ["Web Performance Optimization", "Measure rendering and network bottlenecks and improve performance with evidence."],
  ["Git and GitHub", "Collaborate with branches, commits, pull requests, reviews, and release history."],
  ["Build Tools and Bundlers", "Understand modules, bundling, code splitting, source maps, and production builds."],
  ["WebSockets and Real-Time Applications", "Design authenticated live updates with reconnection and duplicate-event handling."],
  ["Design Patterns and Software Architecture", "Choose maintainable boundaries and patterns based on product constraints."],
  ["Deployment and Production Workflows", "Configure, deploy, observe, and roll back JavaScript applications safely."],
  ["Building Production-Ready Applications", "Combine testing, security, persistence, performance, observability, and operations in a complete product."],
];
function slugifyJavaScriptRoadmap(title) {
  return title.toLowerCase().replace(/[`'()]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
function makeJavaScriptRoadmapLesson([title, focus], index) {
  const slug = slugifyJavaScriptRoadmap(title);
  const advanced = index >= 31;
  const code = index < 20
    ? `const topic = ${JSON.stringify(title)};\nconst practice = { topic, completed: false };\nconsole.log(practice);`
    : `const workflow = {\n  topic: ${JSON.stringify(title)},\n  validated: true,\n  tested: false,\n  productionReady: false\n};\nconsole.log(workflow);`;
  return {
    id: `javascript-roadmap-${slug}`,
    title,
    description: focus,
    level: index < 20 ? "Beginner" : advanced ? "Advanced" : "Intermediate",
    estimatedTime: advanced ? "40 min" : "30 min",
    objectives: [focus, "Explain the trade-offs behind the approach", "Apply the concept in a practical JavaScript exercise"],
    sections: [
      { type: "explanation", title: "Core Idea", content: `${focus}

What this teaches: the concept solves a concrete JavaScript problem by transforming an input or condition into an observable result. Identify the input, trace the operation, predict the output, and then test an invalid or boundary case. Also decide whether the code runs in the browser, on the server, or in both environments, because that boundary affects available APIs, security, and performance.` },
      { type: "example", title: "Practical JavaScript Example", code, explanation: `This example demonstrates ${focus.toLowerCase()} directly. Read it line by line, predict the output, run or trace it, and replace one value with a realistic feature from your project. Explain why the new result is correct and what could fail.` },
      { type: "challenge", title: "Practice Project", instructions: `Create a focused exercise about ${title}. Include a normal case, an edge case, a test or verification step, and a short explanation of what could go wrong.`, starterCode: `${code}\n\n// Extend this example to complete the challenge` },
    ],
  };
}
// JavaScript has two hand-written beginner lessons; extend it with the same
// complete path used by the other programming languages.
lessons.javascript = [
  ...javascriptProfessionalRoadmap.map(makeJavaScriptRoadmapLesson),
  ...lessons.javascript,
  ...makeGeneratedCourseLessons("javascript", [
    "Control Flow and Functions",
    "Arrays, Objects, and Data Transformation",
    "Modules and Package Management",
    "DOM, Events, and Browser State",
    "Asynchronous JavaScript and Promises",
    "APIs, Errors, Testing, and Debugging",
    "Performance, Security, and Deployment",
    "Build and Ship a Complete JavaScript Application",
  ]),
  ...javascriptMasteryLessonPlans.map(makeJavaScriptMasteryLesson),
];

// Apply the supplied full authored lesson to the matching roadmap entry while
// keeping its existing ID, title, position, and all other lessons unchanged.
for (const lesson of lessons.javascript) {
  if (lesson.id === "javascript-roadmap-introduction-to-javascript") {
    lesson.title = "Introduction to JavaScript";
    lesson.delivery = javascriptIntroductionAuthoredDelivery;
    break;
  }
}

for (const lesson of lessons.javascript) {
  if (lesson.id === "javascript-roadmap-variables-let-const-var") {
    lesson.title = "Variables (`let`, `const`, `var`)";
    lesson.delivery = javascriptVariablesAuthoredDelivery;
    break;
  }
}

for (const lesson of lessons.javascript) {
  if (lesson.id === "javascript-roadmap-operators") {
    lesson.title = "JavaScript: Operators";
    lesson.delivery = javascriptOperatorsAuthoredDelivery;
    break;
  }
}

for (const lesson of lessons.javascript) {
  if (lesson.id === "javascript-roadmap-input-and-output") {
    lesson.title = "JavaScript: Input and Output";
    lesson.delivery = javascriptInputOutputAuthoredDelivery;
    break;
  }
}

for (const lesson of lessons.javascript) {
  if (lesson.id === "javascript-roadmap-conditional-statements-if-else-switch") {
    lesson.title = "JavaScript: Conditional Statements";
    lesson.delivery = javascriptConditionalsAuthoredDelivery;
    break;
  }
}

function makeMasteryProjectLesson(courseId, courseLessons) {
  const courseTitle = courseId
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return makeLesson({
    id: `${courseId}-mastery-project`,
    title: `${courseTitle} Mastery Project`,
    focus: `${courseTitle} mastery project`,
    code: `const masteryProject = {
  course: "${courseTitle}",
  requirements: ["design", "implement", "test", "document"],
  completedLessons: ${courseLessons.length}
};

console.log(masteryProject);`,
    challenge: `Build a complete ${courseTitle} project that combines the major ideas from this course. Define requirements, implement the core behavior, test normal and failure cases, document your decisions, and explain how you would operate or improve it in production.`,
    starterCode: `const masteryProject = {
  requirements: [],
  implementation: "",
  tests: [],
  documentation: "",
  nextImprovement: ""
};

console.log(masteryProject);`,
  });
}

function getProgressiveLevel(index, totalLessons) {
  if (totalLessons <= 1) return "Beginner";
  const beginnerEnd = Math.ceil(totalLessons / 3);
  const intermediateEnd = Math.ceil((totalLessons * 2) / 3);
  if (index < beginnerEnd) return "Beginner";
  if (index < intermediateEnd) return "Intermediate";
  return "Advanced";
}

const supplementalMasteryTopics = [
  "Intermediate Patterns and Composition",
  "Input Validation and Failure Cases",
  "Testing Strategies and Debugging",
  "Integration with Real Systems",
  "Performance and Resource Management",
  "Security Boundaries and Threat Modeling",
  "Observability and Operational Readiness",
  "Scalability and Architecture Trade-offs",
  "Refactoring for Maintainability",
  "Production Readiness Review",
];

const comprehensiveCourseTopics = [
  "Terminology, Mental Models, and Professional Vocabulary",
  "Tools, Setup, and a Repeatable Working Environment",
  "Core Workflow from Input to Outcome",
  "Essential Data, State, and Resource Management",
  "Interfaces, Components, and Reusable Boundaries",
  "Configuration and Environment Separation",
  "Validation, Invariants, and Safe Defaults",
  "Errors, Recovery, and Failure Analysis",
  "Testing Fundamentals and Regression Prevention",
  "Debugging, Diagnostics, and Root-Cause Analysis",
  "Automation and Repeatable Operations",
  "Integration with Adjacent Systems",
  "Security Principles and Access Boundaries",
  "Privacy, Compliance, and Responsible Practice",
  "Performance Measurement and Bottleneck Analysis",
  "Capacity Planning and Resource Trade-offs",
  "Reliability, Availability, and Resilience",
  "Monitoring, Logging, and Operational Feedback",
  "Scaling Patterns and Distributed Concerns",
  "Versioning, Compatibility, and Change Management",
  "Architecture Review and Design Alternatives",
  "Refactoring, Maintainability, and Technical Debt",
  "Case Study: Analyze a Real-World Failure",
  "Project: Build a Useful Intermediate System",
  "Project: Test and Harden the System",
  "Project: Deploy and Operate the System",
  "Expert Review: Defend Your Design Decisions",
  "Mastery Portfolio and Further Research",
];

function makeSupplementalMasteryLesson(courseId, topic, index) {
  const courseTitle = courseId
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return makeLesson({
    id: `${courseId}-mastery-${String(index + 1).padStart(2, "0")}-${slugifyTopic(topic)}`,
    title: `${courseTitle}: ${topic}`,
    focus: `${courseTitle} ${topic}`,
    code: `const lesson = {
  course: "${courseTitle}",
  topic: "${topic}",
  inputsValidated: true,
  testsAdded: true,
  productionReady: false
};

console.log(lesson);`,
    challenge: `Apply ${topic.toLowerCase()} to ${courseTitle}. Build a focused example, include a normal case and a failure case, test the behavior, and explain the trade-off you made.`,
    starterCode: `const practice = {
  course: "${courseTitle}",
  topic: "${topic}",
  design: "",
  tests: [],
  failureCase: "",
  improvement: ""
};

console.log(practice);`,
  });
}

// Every course follows the same learning arc: foundations first, then
// applied skills, then advanced and project-level work. This also keeps
// hand-written courses consistent with the generated course catalog.
Object.values(lessons).forEach((courseLessons) => {
  const courseId = Object.keys(lessons).find((key) => lessons[key] === courseLessons);
  if (courseLessons.length < 12) {
    const needed = 12 - courseLessons.length;
    const existingIds = new Set(courseLessons.map((lesson) => lesson.id));
    supplementalMasteryTopics.slice(0, needed).forEach((topic, index) => {
      const lesson = makeSupplementalMasteryLesson(courseId, topic, index);
      if (!existingIds.has(lesson.id)) courseLessons.push(lesson);
    });
  }
  if (courseId !== "javascript" && courseId !== "python" && courseLessons.length < 36) {
    const needed = 36 - courseLessons.length;
    const existingIds = new Set(courseLessons.map((lesson) => lesson.id));
    comprehensiveCourseTopics.slice(0, needed).forEach((topic, index) => {
      const lesson = makeSupplementalMasteryLesson(courseId, topic, 100 + index);
      if (!existingIds.has(lesson.id)) courseLessons.push(lesson);
    });
  }
  const hasMasteryProject = courseLessons.some((lesson) => /mastery project|capstone|project:/i.test(lesson.title || ""));
  if (!hasMasteryProject) courseLessons.push(makeMasteryProjectLesson(courseId, courseLessons));
  const totalLessons = courseLessons.length;
  courseLessons.forEach((lesson, index) => {
    const level = getProgressiveLevel(index, totalLessons);
    lesson.level = level;

    const topic = lesson.title || lesson.id || "this concept";
    const focus = lesson.focus || topic;
    const primaryCode = lesson.code || lesson.exampleCode || `// Practice ${topic}\n`;
    lesson.sections = [
      ...(lesson.sections || []),
      {
        type: "deepDive",
        title: "What this lesson teaches",
        content: `${topic} is a practical building block for professional ${focus}. The goal is not to memorize a definition; the goal is to understand what problem the idea solves and when it is the right tool.

A learner who understands this topic can describe the input, explain the transformation, predict the result, and identify a safe response when something goes wrong.

Key ideas to remember:
- Problem: ${focus} gives you a structured way to solve a specific kind of programming problem.
- Input: Start by naming the values, events, or user actions that the solution receives.
- Process: Trace the important steps in order instead of jumping straight to the final code.
- Output: State what the program should produce and how you will verify that result.
- Professional habit: Explain the reason behind each decision so another developer can maintain it.`
      },
      {
        type: "deepDive",
        title: "Step-by-step mental model",
        content: `Use this sequence whenever you study ${focus}. Each step has a purpose, so do not skip directly to implementation.

- First, define the goal: write one sentence describing what the solution must accomplish.
- Second, identify the state: list the data that can change while the solution is running.
- Third, trace a normal case: follow one realistic example from input to output.
- Fourth, test a boundary case: try empty input, invalid input, repeated input, or an unusually large value.
- Fifth, explain the trade-off: say what becomes easier, what becomes harder, and why your choice is reasonable.
- Sixth, verify the result: choose a test, example output, or observable check that proves the behavior is correct.

This method makes ${focus} easier to transfer to new projects because you learn the reasoning process, not only one copied example.`
      },
      {
        type: "example",
        title: "Guided example: read, predict, run, improve",
        content: `Study the example below as if you were reviewing a teammate's code. Do not only read the syntax; explain what each part contributes to the final behavior.

Example walkthrough:
- Read the first statement and identify the value or responsibility it introduces.
- Follow the next operation and explain how it changes, checks, or uses that value.
- Predict the output before running the code, then compare your prediction with the real result.
- Change one input and predict the new result; this reveals whether you understand the rule or are only repeating the original example.
- Add one validation or test that would catch an incorrect result.

Why this example matters: a small example is valuable when it makes the rule visible, gives you something concrete to change, and provides evidence that your explanation is correct.`,
        code: primaryCode,
        language: lesson.language || "javascript"
      },
      {
        type: "knowledgeExamples",
        title: "10 questions you should be able to answer",
        content: `Use these worked examples as a self-check before starting the assessment. Read the question first, answer it yourself, and then reveal the explanation. Every answer is connected to the lesson's main idea.`,
        questions: [
          { question: lesson.quizQuestion || `What is the most important idea in ${focus}?`, answer: lesson.quizAnswer || `Apply ${focus} with a tested example.`, explanation: `This is correct because it connects the lesson to its intended outcome: understanding ${focus} well enough to use it, test it, and explain the result.` },
          { question: `What problem does ${focus} help a developer solve?`, answer: `It provides a structured approach to working with ${focus}.`, explanation: `This is correct because a programming concept is useful when it reduces confusion around a specific problem and gives the developer predictable steps.` },
          { question: `What should you identify before writing code for ${focus}?`, answer: "The goal, inputs, expected output, and important constraints.", explanation: "This is correct because clear boundaries prevent a solution from solving the wrong problem or ignoring important requirements." },
          { question: `What is the best way to understand an example of ${focus}?`, answer: "Predict the result, run or trace the example, and explain each important step.", explanation: "This is correct because prediction exposes what you understand, while tracing and checking the result gives you evidence instead of relying on memorization." },
          { question: `Which case should you test in addition to the normal case?`, answer: "A boundary or failure case such as empty, invalid, repeated, or unusually large input.", explanation: "This is correct because real programs receive unexpected inputs, and boundary testing reveals weaknesses that a happy-path demo can hide." },
          { question: `How can you tell whether your ${focus} solution is correct?`, answer: "Compare its observable result with a clearly defined expected result.", explanation: "This is correct because correctness must be checked against evidence, such as an assertion, expected output, validation rule, or user-visible behavior." },
          { question: `Why should responsibilities be kept clear when using ${focus}?`, answer: "Clear responsibilities make code easier to read, test, change, and debug.", explanation: "This is correct because a focused component has fewer hidden side effects and makes it easier to locate the cause of a problem." },
          { question: `What is a common beginner mistake with ${focus}?`, answer: "Copying the pattern without understanding its assumptions or limitations.", explanation: "This is correct because copied code may work for one example while failing when the input, environment, or requirement changes." },
          { question: `What should a professional developer consider before shipping ${focus}?`, answer: "Validation, security, performance, observability, maintainability, and rollback.", explanation: "This is correct because production quality includes safe operation over time, not only a successful first run on a developer's machine." },
          { question: `How can you transfer this lesson to a new project?`, answer: `Explain the goal, adapt the pattern to the new inputs, test an edge case, and document the trade-off.`, explanation: `This is correct because transfer means applying the reasoning behind ${focus}, rather than copying the exact example without understanding it.` }
        ]
      },
      {
        type: "deepDive",
        title: "Common mistakes and professional checks",
        content: `Beginners often get ${topic.toLowerCase()} working once, but professional developers also consider what happens when the environment or the input changes.

Watch for these mistakes:
- Copying a pattern without being able to explain what each important line does.
- Testing only the happy path and never checking empty, invalid, repeated, or unexpected input.
- Mixing several responsibilities together, which makes the code harder to read and change.
- Hiding errors instead of giving the learner or user a useful next step.
- Adding complexity before a simple, readable solution has been measured and understood.

Professional review questions:
- Is the behavior clear from the names and structure?
- What should be logged or measured if this fails in production?
- Does the solution protect private data and reject unsafe input?
- What focused test would catch the most likely regression?
- How could the change be rolled back safely?`
      },
      {
        type: "challenge",
        title: "Applied practice: build and explain",
        instructions: lesson.challenge || `Create a small example that applies ${focus}. Explain the input, the important steps, the expected output, one edge case, and the test that proves your solution works.`,
        starterCode: lesson.starterCode || `${primaryCode}\n\n// Extend this example and add a verification step`
      }
    ];
    lesson.objectives = [...new Set([...(lesson.objectives || []), `Explain ${focus} clearly`, `Apply ${focus} in a tested example`, "Identify an edge case and a professional-quality improvement"])];
    // Depth increases with the learner's progress. Beginners get the core
    // idea; intermediate learners examine boundaries and trade-offs; advanced
    // learners must reason about production-quality design and failure.
    if (level !== "Beginner") {
      const topic = lesson.title || lesson.id;
      const depthSection = {
        type: "deepDive",
        title: level === "Intermediate" ? "Go Deeper: Edge Cases and Trade-offs" : "Advanced Practice: Production Thinking",
        content: level === "Intermediate"
          ? `${topic} is more than the happy-path example. Investigate what happens with invalid input, empty or unusually large data, repeated operations, partial failure, and changing requirements. Compare at least two reasonable approaches, explain the trade-offs, and decide which behavior should be tested and documented.`
          : `${topic} at an advanced level requires more than making one example work. Design the boundaries between components, define failure and recovery behavior, protect data and permissions, measure performance, and choose observability signals. Review maintainability, security, scalability, deployment, and rollback before calling the solution production-ready.`,
      };
      lesson.sections = [
        ...(lesson.sections || []),
        depthSection,
      ];
      lesson.objectives = [
        ...(lesson.objectives || []),
        level === "Intermediate"
          ? "Analyze edge cases and compare alternative approaches"
          : "Design, test, secure, observe, and improve a production-quality solution",
      ];
    }

    if (level === "Advanced") {
      lesson.sections.push({
        type: "challenge",
        title: "Advanced Review Challenge",
        instructions: `Extend your ${lesson.title || "solution"} example into a production-ready design. Include automated tests, an error or failure path, a security decision, a performance consideration, and a short plan for monitoring and rollback. Explain why each decision is appropriate.`,
        starterCode: "// Document the design, tests, failure handling, security, performance, and operations plan here\n",
      });
    }
    if (courseId === "python" && index < 12) {
      const genericTeachingSections = new Set([
        "What this lesson teaches",
        "Step-by-step mental model",
        "Guided example: read, predict, run, improve",
        "10 questions you should be able to answer",
        "Common mistakes and professional checks",
        "Applied practice: build and explain",
        "Practice Project",
      ]);
      lesson.sections = lesson.sections.filter((section) => !genericTeachingSections.has(section.title));
    }
  });
});


function authoredTextBlock(text) {
  const value = String(text || "").trim();
  return value ? { type: "text", text: value } : null;
}
function authoredBlocksFromLegacySection(section, defaultLanguage = "python") {
  if (!section || typeof section !== "object") return [];
  const blocks = [];
  const sectionType = String(section.type || "");
  if (["example", "code"].includes(sectionType) && section.code) {
    blocks.push({ type: "code", language: section.language || defaultLanguage, filename: section.title || "example", code: String(section.code) });
    if (section.explanation) blocks.push(authoredTextBlock(section.explanation));
  } else if (sectionType === "challenge") {
    blocks.push(authoredTextBlock(section.instructions || section.content));
    if (section.starterCode) blocks.push({ type: "code", language: section.language || defaultLanguage, filename: "starter", code: String(section.starterCode) });
  } else if (sectionType === "quiz") {
    blocks.push({
      type: "quiz",
      question: section.question || section.title || "Check your understanding",
      options: Array.isArray(section.options) && section.options.length >= 2 ? section.options : ["The approach described in this lesson", "Skip the concept", "Ignore input validation", "Change unrelated code"],
      answer: section.answer || section.answerKey || "The approach described in this lesson",
      explanation: section.explanation || "The correct answer connects the idea to the behavior the lesson teaches.",
    });
  } else if (sectionType === "knowledgeExamples" && Array.isArray(section.questions)) {
    blocks.push(authoredTextBlock(section.content || section.title || "Use these questions to review the lesson."));
    blocks.push({ type: "bullets", items: section.questions.map((question) => question.question).filter(Boolean) });
  } else {
    blocks.push(authoredTextBlock(section.content || section.explanation || section.text || section.title));
  }
  return blocks.filter(Boolean);
}
function pythonExampleCode(lesson, sections) {
  const sectionWithCode = sections.find((section) => section?.code);
  return String(lesson.code || sectionWithCode?.code || "").trim();
}
function explainPythonLine(line) {
  const clean = line.trim();
  if (!clean || clean.startsWith("#")) return null;
  if (/^(from|import)\b/.test(clean)) return `\`${clean}\` imports a tool so the program can use functionality outside the current file.`;
  if (/^(def|class)\b/.test(clean)) return `\`${clean}\` defines a reusable boundary. The body below it runs only when the function is called or the class is used.`;
  if (/^(@|async def)/.test(clean)) return `\`${clean}\` changes how the following definition is created or executed.`;
  if (/^\s*(if|elif|else|for|while|try|except|with)\b/.test(clean)) return `\`${clean}\` controls the next block. Indentation tells Python which statements belong to that block.`;
  if (/\b(return|yield)\b/.test(clean)) return `\`${clean}\` sends a value back to the caller or produces the next value in a lazy sequence.`;
  if (/\b(print|raise|assert)\b/.test(clean)) return `\`${clean}\` makes an observable check, output, or failure decision.`;
  if (clean.includes("=")) return `\`${clean}\` stores a value or result in a name so a later statement can use it.`;
  return `\`${clean}\` performs one operation in the example; trace its input and result before moving to the next line.`;
}
function makePythonAuthoredDelivery(lesson) {
  const legacySections = Array.isArray(lesson.sections) ? lesson.sections : [];
  const teachingSections = legacySections.filter((section) => ["explanation", "deepDive", "summary", "knowledgeExamples"].includes(section?.type));
  const practicalSections = legacySections.filter((section) => ["example", "code", "terminal", "challenge"].includes(section?.type));
  const assessmentSections = legacySections.filter((section) => section?.type === "quiz");
  const code = pythonExampleCode(lesson, practicalSections);
  const codeLineExplanations = code.split("\n").map(explainPythonLine).filter(Boolean).slice(0, 10);
  const objectives = (lesson.objectives || []).filter(Boolean).slice(0, 6);
  const firstTeaching = teachingSections[0];
  const detailedTeaching = teachingSections.slice(1);
  const topic = lesson.title || lesson.id || "this Python topic";
  const partOneBlocks = [
    { type: "heading", text: `Introduction and Foundations: ${topic}` },
    authoredTextBlock(`This lesson teaches ${lesson.description || topic}. Start by connecting the topic to a problem a program needs to solve. Identify the important vocabulary, the information that enters the program, the operation Python performs, and the result a learner should be able to observe.`),
    ...authoredBlocksFromLegacySection(firstTeaching),
    { type: "heading", text: "Why this matters in real programs" },
    authoredTextBlock(`${topic} is useful because it gives a program a repeatable way to represent, transform, inspect, or respond to information. The same idea appears in scripts, web applications, automation, data tools, and larger software systems.`),
    objectives.length ? { type: "bullets", items: objectives } : null,
    { type: "callout", title: "Beginner reminder", text: "Do not memorize the example. Change one input, predict the result, run it, and explain why the result changed." },
  ].filter(Boolean);
  const partTwoBlocks = [
    { type: "heading", text: `Detailed Concepts and Explanations: ${topic}` },
    authoredTextBlock(`Use this mental model for ${topic}: establish the values or resources the program receives, apply the Python construct, then verify the output or state change. The important question is not only what the syntax says, but what changes after each step and what assumptions must remain true.`),
    ...(detailedTeaching.length ? detailedTeaching.flatMap(authoredBlocksFromLegacySection) : []),
    codeLineExplanations.length ? { type: "heading", text: "Reading the example line by line" } : null,
    codeLineExplanations.length ? { type: "bullets", items: codeLineExplanations } : null,
    { type: "heading", text: "Rules and common mistakes" },
    { type: "bullets", items: [
      "Check indentation, input types, empty values, and boundary values before trusting the result.",
      "Distinguish between changing an existing value and creating a new value.",
      "Test one normal case and one case that should fail or take a different branch.",
      `Do not copy ${topic} without explaining its assumptions and limitations.`,
    ] },
    { type: "callout", title: "Think like a debugger", text: `When the result is unexpected, inspect the input first, then trace each operation in ${topic}, and finally compare the observed output with the expected result.` },
  ].filter(Boolean);
  const practiceBlocks = practicalSections.flatMap(authoredBlocksFromLegacySection);
  const partThreeBlocks = [
    { type: "heading", text: `Practical Application and Exercises: ${topic}` },
    authoredTextBlock("You need Python 3, a text editor such as VS Code or IDLE, and a terminal. Create a folder for this lesson, create lesson_example.py, save the example, and run python lesson_example.py (or python3 lesson_example.py). Predict the output before running it, then compare the actual result with your prediction."),
    { type: "numbered", items: [
      "Create the file and enter the complete example below.",
      "Run it with Python 3 and read the output or traceback.",
      "Explain what each important line receives, changes, or produces.",
      "Change one input and predict the new result before running again.",
      "Test one boundary or invalid case and record how the program responds.",
    ] },
    ...practiceBlocks,
    code && !practiceBlocks.some((block) => block.type === "code") ? { type: "code", language: "python", filename: "lesson_example.py", code } : null,
    code ? { type: "text", text: "Expected output: the program should produce the result described by its print statements for the sample inputs. If your output differs, compare the inputs, indentation, data types, and operation order with the example." } : null,
    { type: "exercise", title: `Practice project: apply ${topic}`, description: lesson.challenge || `Build a small Python program that demonstrates ${topic}. Include a normal case, a boundary or failure case, clear output, and a short explanation of why the result is correct.` },
  ].filter(Boolean);
  const assessmentQuiz = lesson.quizQuestion && Array.isArray(lesson.quizOptions) && lesson.quizOptions.length >= 2
    ? { type: "quiz", question: lesson.quizQuestion, options: lesson.quizOptions, answer: lesson.quizAnswer, explanation: `This answer is correct because it applies the main idea taught in ${topic}, not just a memorised word.` }
    : null;
  const partFourBlocks = [
    { type: "heading", text: `Kai Assessment: ${topic}` },
    authoredTextBlock(`This assessment checks the concepts taught in Parts 1–3. Kai will explain why an answer is correct or incorrect and will help you repair misunderstandings. Do not guess from vocabulary alone: use the example, its inputs, and its expected result.`),
    assessmentQuiz,
    ...assessmentSections.flatMap(authoredBlocksFromLegacySection),
    { type: "heading", text: "Explain your reasoning" },
    { type: "numbered", items: [
      `Define ${topic} in your own words and explain why it matters.`,
      "Trace the worked example and state its expected output or state change.",
      "Describe one practical use and one beginner mistake.",
      "Explain how you would test an empty, invalid, repeated, or boundary input.",
    ] },
    { type: "checklist", title: "Ready for Kai's assessment?", items: [
      "I can define the main idea and explain why it matters.",
      "I can trace the example and predict its result.",
      "I can apply the idea to a small Python exercise.",
      "I can identify a boundary, failure, or recovery case.",
    ] },
  ].filter(Boolean);
  return {
    type: "authored",
    version: 1,
    intro: `A complete, structured Python lesson about ${topic}.`,
    sections: [
      { id: `${lesson.id}-foundations`, title: "Introduction and Foundations", description: "Part 1 of 4 · Build the learner's mental model from the ground up.", blocks: partOneBlocks },
      { id: `${lesson.id}-concepts`, title: "Detailed Concepts and Explanations", description: "Part 2 of 4 · Develop the rules, examples, and common mistakes.", blocks: partTwoBlocks },
      { id: `${lesson.id}-practice`, title: "Practical Application and Exercises", description: "Part 3 of 4 · Create, run, explain, and extend a working program.", blocks: partThreeBlocks },
      { id: `${lesson.id}-assessment`, title: "Kai Assessment", description: "Part 4 of 4 · Demonstrate understanding and receive explanatory feedback.", blocks: partFourBlocks },
    ],
  };
}
function makeGeneralAuthoredDelivery(lesson, courseId) {
  const legacySections = Array.isArray(lesson.sections) ? lesson.sections : [];
  const defaultLanguage = lesson.language || (courseId === "javascript" || courseId === "typescript" || courseId === "react" ? "javascript" : "text");
  const teachingSections = legacySections.filter((section) => ["explanation", "deepDive", "summary", "knowledgeExamples"].includes(section?.type));
  const practicalSections = legacySections.filter((section) => ["example", "code", "terminal", "challenge"].includes(section?.type));
  const assessmentSections = legacySections.filter((section) => section?.type === "quiz");
  const firstTeaching = teachingSections[0];
  const detailedTeaching = teachingSections.slice(1);
  const codeSection = practicalSections.find((section) => section?.code);
  const code = String(lesson.code || codeSection?.code || "").trim();
  const practiceBlocks = practicalSections.flatMap((section) => authoredBlocksFromLegacySection(section, defaultLanguage));
  const objectives = (lesson.objectives || []).filter(Boolean).slice(0, 6);
  const topic = lesson.title || lesson.id || "this lesson";
  const partOneBlocks = [
    { type: "heading", text: `Introduction and Foundations: ${topic}` },
    authoredTextBlock(`This lesson teaches ${lesson.description || topic}. Begin by defining the idea in plain language, identifying the problem it solves, and naming the inputs, operations, and observable results involved. Understanding these relationships is more useful than memorising isolated syntax.`),
    ...(firstTeaching ? authoredBlocksFromLegacySection(firstTeaching, defaultLanguage) : []),
    { type: "heading", text: "Purpose and real-world use" },
    authoredTextBlock(`${topic} appears in real software when developers need a repeatable way to represent information, make decisions, transform data, or operate a system. Look for the same pattern in the tools and applications you use every day.`),
    objectives.length ? { type: "bullets", items: objectives } : null,
    { type: "callout", title: "Beginner reminder", text: "Read the example slowly. Name what each important line receives, changes, or produces before moving to the next line." },
  ].filter(Boolean);
  const partTwoBlocks = [
    { type: "heading", text: `Detailed Concepts and Explanations: ${topic}` },
    authoredTextBlock(`Develop the foundation by tracing ${topic} from input to operation to outcome. Compare related ideas where appropriate, note the rules that govern the behavior, and check the assumptions that could cause a different result.`),
    ...detailedTeaching.flatMap((section) => authoredBlocksFromLegacySection(section, defaultLanguage)),
    { type: "heading", text: "Rules, comparisons, and mistakes to avoid" },
    { type: "bullets", items: [
      `Explain what problem ${topic} solves before choosing an implementation.`,
      "Identify the normal case, one boundary case, and one failure or recovery case.",
      "Use clear names and verify the observable result instead of assuming the code worked.",
      `Do not copy ${topic} without checking its assumptions, constraints, and trade-offs.`,
    ] },
    { type: "callout", title: "Common mistake", text: `Change one input, predict the result, and explain why the result changed. This exposes misunderstandings more reliably than rereading a definition.` },
  ].filter(Boolean);
  const partThreeBlocks = [
    { type: "heading", text: `Practical Application and Exercises: ${topic}` },
    authoredTextBlock(`Prepare the tools required by this course, create a small working file or project, and run the example in a controlled environment. First predict the result, then execute it, compare the output with your prediction, and record what you learned. Extend the example with one meaningful variation and test a boundary or failure case.`),
    { type: "numbered", items: [
      "Create the file or project and copy the complete example into it.",
      "Run the example using the course toolchain and inspect the result.",
      "Explain the important lines or steps in your own words.",
      "Change one input or condition and predict the new result.",
      "Test a boundary or failure case and document what should happen.",
    ] },
    ...practiceBlocks,
    !practiceBlocks.some((block) => block.type === "code") && code ? { type: "code", language: defaultLanguage, filename: `${String(lesson.id || "lesson").replace(/[^a-z0-9_-]/gi, "_")}.example`, code } : null,
    code ? { type: "text", text: "Expected output: run the sample with its stated inputs and compare the observable result with your prediction. If it differs, inspect the input, operation order, configuration, and error message before changing the code." } : null,
    { type: "exercise", title: `Practice project: apply ${topic}`, description: lesson.challenge || `Create a small practical example for ${topic}. Explain the goal, inputs, expected output, normal case, failure case, and the test or observation that verifies your result.` },
  ].filter(Boolean);
  const assessmentQuiz = lesson.quizQuestion && Array.isArray(lesson.quizOptions) && lesson.quizOptions.length >= 2
    ? { type: "quiz", question: lesson.quizQuestion, options: lesson.quizOptions, answer: lesson.quizAnswer, explanation: `This answer is correct because it follows the principles taught in ${topic} and connects them to a testable result.` }
    : null;
  const partFourBlocks = [
    { type: "heading", text: `Kai Assessment: ${topic}` },
    authoredTextBlock(`This assessment is based only on the teaching and practical work in Parts 1–3. Kai will explain why each answer is correct or incorrect, identify the misunderstanding, and suggest how to improve it.`),
    assessmentQuiz,
    ...assessmentSections.flatMap((section) => authoredBlocksFromLegacySection(section, defaultLanguage)),
    { type: "heading", text: "Scenario and explanation questions" },
    { type: "numbered", items: [
      `Define ${topic} and explain the problem it solves.`,
      "Trace the worked example and describe its expected output or state change.",
      "Choose a realistic use for this idea and explain why it fits.",
      "Describe a boundary, failure, or recovery case and how you would test it.",
    ] },
    { type: "checklist", title: "Ready for Kai's assessment?", items: [
      "I can define the main idea and explain why it matters.",
      "I can trace the example and predict its result.",
      "I can apply the idea in a practical exercise.",
      "I can identify a boundary, failure, or recovery case.",
    ] },
  ].filter(Boolean);
  return {
    type: "authored",
    version: 1,
    intro: `A complete, structured lesson about ${topic}.`,
    sections: [
      { id: `${lesson.id}-foundations`, title: "Introduction and Foundations", description: "Part 1 of 4 · Build the learner's mental model from the ground up.", blocks: partOneBlocks },
      { id: `${lesson.id}-concepts`, title: "Detailed Concepts and Explanations", description: "Part 2 of 4 · Develop the rules, examples, comparisons, and mistakes.", blocks: partTwoBlocks },
      { id: `${lesson.id}-practice`, title: "Practical Application and Exercises", description: "Part 3 of 4 · Create, run, explain, and extend a working example.", blocks: partThreeBlocks },
      { id: `${lesson.id}-assessment`, title: "Kai Assessment", description: "Part 4 of 4 · Demonstrate understanding and receive explanatory feedback.", blocks: partFourBlocks },
    ],
  };
}
const pythonVariablesDataTypesDelivery = {
  type: "authored",
  version: 1,
  intro: "Learn how Python stores information, works with variables, and handles different types of data.",
  sections: [
    {
      id: "python-variables-data-types-fundamentals",
      title: "Introduction to Variables",
      description: "Part 1 of 4 · Understand variables, assignment, naming rules, and how Python stores values.",
      blocks: [
        { type: "heading", text: "What is a variable?" },
        { type: "text", text: "A variable is a named reference used to store a value in a program. Variables allow programs to remember and reuse information. Think of a variable as a labelled container." },
        { type: "code", language: "python", filename: "variables.py", code: "student_name = \"Brian\"" },
        { type: "bullets", items: [
          "student_name is the variable name.",
          "= is the assignment operator.",
          "Brian is the stored value.",
        ] },
        { type: "heading", text: "Why variables are important" },
        { type: "bullets", items: [
          "Store information such as names, ages, and scores.",
          "Perform calculations with reusable values.",
          "Use the same information in different parts of a program.",
          "Update stored information when the program changes state.",
        ] },
        { type: "code", language: "python", filename: "assignment.py", code: "price = 500\nquantity = 3\ntotal = price * quantity\nprint(\"Total:\", total)\n\nname = \"Brian\"\nprint(\"Welcome\", name)\n\nscore = 50\nscore = 80\nprint(score)" },
        { type: "heading", text: "Rules for naming variables" },
        { type: "bullets", items: [
          "Begin with a letter or underscore, not a number.",
          "Use numbers only after the first character.",
          "Do not use spaces; use descriptive names such as student_name.",
          "Names are case-sensitive, so age and Age are different.",
          "Do not use reserved Python keywords such as class.",
        ] },
        { type: "code", language: "python", filename: "multiple_assignment.py", code: "name, age, country = \"Brian\", 21, \"Kenya\"\nprint(name)\nprint(age)\nprint(country)" },
        { type: "callout", title: "Part 1 summary", text: "A variable allows a Python program to store, access, and update information. Use descriptive names and remember that assignment can replace the value a name refers to." },
      ],
    },
    {
      id: "python-variables-data-types-concepts",
      title: "Understanding Data Types",
      description: "Part 2 of 4 · Learn strings, integers, floats, booleans, and how to identify data types.",
      blocks: [
        { type: "heading", text: "What are data types?" },
        { type: "text", text: "A data type describes the kind of value stored in a variable. Names are text, ages are whole numbers, prices can contain decimal values, and conditions can be true or false." },
        { type: "heading", text: "The four fundamental Python types" },
        { type: "comparison", title: "Common data types", items: [
          { name: "String (str)", bestFor: "Text such as names, addresses, messages, and email addresses", pros: ["Written inside quotation marks"], cons: ["A number in quotes is still text"] },
          { name: "Integer (int)", bestFor: "Whole numbers such as ages, counts, and years", pros: ["Can be positive, negative, or zero"], cons: ["Does not represent decimal precision"] },
          { name: "Float (float)", bestFor: "Measurements, prices, and decimal calculations", pros: ["Represents values with a decimal point"], cons: ["Decimal calculations can have precision limits"] },
          { name: "Boolean (bool)", bestFor: "Conditions and yes/no state", pros: ["Only True or False"], cons: ["Does not store arbitrary text"] },
        ] },
        { type: "code", language: "python", filename: "types.py", code: "name = \"Brian\"\nage = 21\nprice = 250.50\nis_student = True\n\nprint(type(name))\nprint(type(age))\nprint(type(price))\nprint(type(is_student))" },
        { type: "text", text: "Python provides type() to identify a value's type. This is useful when checking assumptions and debugging programs. Lists, tuples, sets, and dictionaries are additional data types that will be explored in later lessons." },
        { type: "heading", text: "Converting between data types" },
        { type: "code", language: "python", filename: "conversion.py", code: "age = 21\nage_text = str(age)\nprint(age_text)\n\nnumber = \"100\"\nconverted_number = int(number)\nprint(converted_number)\n\nprice = 100\nnew_price = float(price)\nprint(new_price)" },
        { type: "callout", title: "Important", text: "Not every conversion is valid. For example, int(\"hello\") raises a ValueError. Convert user input at the program boundary and validate values before using them." },
      ],
    },
    {
      id: "python-variables-data-types-practice",
      title: "Practical Examples and Explanations",
      description: "Part 3 of 4 · Write Python programs, combine data types, and solve practical exercises.",
      blocks: [
        { type: "heading", text: "Prepare your coding environment" },
        { type: "text", text: "Create a file named variables.py in VS Code, PyCharm, IDLE, or another Python-supported editor. Run it with python variables.py or python3 variables.py." },
        { type: "heading", text: "Practical 1: Creating variables" },
        { type: "code", language: "python", filename: "variables.py", code: "name = \"Brian\"\nage = 21\ncourse = \"Software Development\"\n\nprint(name)\nprint(age)\nprint(course)" },
        { type: "text", text: "Python assigns values to three variables, then print() displays each value in order." },
        { type: "heading", text: "Practical 2: Working with different data types" },
        { type: "code", language: "python", filename: "student_profile.py", code: "student_name = \"Brian\"\nstudent_age = 21\ncourse_fee = 15000.50\nis_registered = True\n\nprint(type(student_name))\nprint(type(student_age))\nprint(type(course_fee))\nprint(type(is_registered))" },
        { type: "heading", text: "Practical 3: Calculations and input" },
        { type: "code", language: "python", filename: "student_information.py", code: "name = input(\"Student name: \")\nage = int(input(\"Student age: \"))\ncourse = input(\"Course: \")\nfee = float(input(\"Course fee: \"))\n\nprint(\"\\n--- STUDENT INFORMATION ---\")\nprint(\"Name:\", name)\nprint(\"Age:\", age)\nprint(\"Course:\", course)\nprint(\"Fee:\", fee)" },
        { type: "text", text: "The input() function returns a string even when the learner enters a number. Use int() or float() when numeric input is required." },
        { type: "heading", text: "Independent practical exercise" },
        { type: "checklist", title: "Build a simple calculator", items: [
          "Ask the user for the first number.",
          "Ask for the second number.",
          "Convert both inputs into numbers.",
          "Calculate and display their sum.",
          "Test the program with normal and invalid input.",
        ] },
        { type: "code", language: "python", filename: "calculator.py", code: "first = float(input(\"Enter first number: \"))\nsecond = float(input(\"Enter second number: \"))\nprint(\"Sum:\", first + second)" },
        { type: "callout", title: "Part 3 summary", text: "You have used variables and data types in real Python programs, collected user input, converted values, performed calculations, and displayed useful output." },
      ],
    },
    {
      id: "python-variables-data-types-assessment",
      title: "Kai Assessment",
      description: "Part 4 of 4 · Demonstrate your understanding of variables and data types.",
      blocks: [
        { type: "heading", text: "Ready for Kai's assessment?" },
        { type: "text", text: "This assessment tests the concepts covered in the three teaching parts. Kai will generate fresh questions from this lesson and explain mistakes after you answer." },
        { type: "checklist", title: "Before you begin", items: [
          "I can explain what a variable stores and how assignment works.",
          "I can identify strings, integers, floats, and booleans.",
          "I can use type() and convert valid values safely.",
          "I can read and explain a small Python program using input and output.",
        ] },
        { type: "callout", title: "Assessment starts here", text: "Select Start Kai assessment below when you are ready. The assessment is generated from this lesson rather than from a separate teaching prompt." },
      ],
    },
  ],
};

const pythonStringsDelivery = {
  type: "authored",
  version: 1,
  intro: "Learn how Python stores, manipulates, formats, and processes text using strings.",
  sections: [
    {
      id: "python-strings-fundamentals",
      title: "Introduction to Strings",
      description: "Part 1 of 4 · Understand what strings are and how Python stores text.",
      blocks: [
        { type: "heading", text: "What is a string?" },
        { type: "text", text: "A string is a Python data type used to store text such as names, sentences, addresses, and messages. Text inside quotation marks is recognized as a string." },
        { type: "code", language: "python", filename: "strings.py", code: "name = \"Brian\"\ncountry = \"Kenya\"\nmessage = \"Welcome to Python programming!\"\n\nprint(name)\nprint(country)\nprint(message)" },
        { type: "heading", text: "Creating strings" },
        { type: "bullets", items: [
          "Single quotation marks: name = 'Brian'",
          "Double quotation marks: name = \"Brian\"",
          "Triple quotation marks for text spanning multiple lines.",
        ] },
        { type: "code", language: "python", filename: "multiline.py", code: "message = \"\"\"Welcome to Python.\nWe are learning strings.\nPython makes programming interesting.\"\"\"\n\nprint(message)" },
        { type: "heading", text: "Strings, variables, and empty text" },
        { type: "code", language: "python", filename: "text_values.py", code: "first_name = \"Brian\"\nlast_name = \"Njogu\"\nempty_name = \"\"\n\nprint(first_name)\nprint(last_name)\nprint(type(first_name))\nprint(type(21))\nprint(type(\"0712345678\"))" },
        { type: "text", text: "An empty string contains no characters but still gives a variable a text value. A phone number written inside quotation marks is also a string, even though it contains digits." },
        { type: "callout", title: "Part 1 summary", text: "Strings store text, quotation marks create strings, triple quotes support multiline text, and type() identifies strings as str." },
      ],
    },
    {
      id: "python-strings-concepts",
      title: "Working with Strings",
      description: "Part 2 of 4 · Access characters, slice text, count characters, and use string methods.",
      blocks: [
        { type: "heading", text: "Indexing and negative indexing" },
        { type: "text", text: "Every character has an index. Python starts counting at zero, while negative indexes count backward from the end. The last character is at index -1." },
        { type: "code", language: "python", filename: "indexing.py", code: "word = \"PYTHON\"\n\nprint(word[0])\nprint(word[1])\nprint(word[3])\nprint(word[-1])\nprint(word[-2])" },
        { type: "heading", text: "Slicing and length" },
        { type: "text", text: "Slicing uses string[start:end]. The start position is included and the end position is excluded. len() counts every character, including spaces." },
        { type: "code", language: "python", filename: "slicing.py", code: "word = \"PYTHON\"\nmessage = \"Hello Python\"\n\nprint(word[0:3])\nprint(word[:3])\nprint(word[2:])\nprint(len(message))" },
        { type: "heading", text: "Useful string methods" },
        { type: "comparison", title: "Common string operations", items: [
          { name: "upper() and lower()", bestFor: "Changing all letters to uppercase or lowercase", pros: ["Useful for consistent comparisons and display"], cons: ["Returns a new string"] },
          { name: "title() and capitalize()", bestFor: "Formatting names, headings, and sentences", pros: ["Makes display text easier to read"], cons: ["Automatic capitalization is not always the desired style"] },
          { name: "strip(), lstrip(), rstrip()", bestFor: "Removing unwanted spaces around text", pros: ["Useful for cleaning user input"], cons: ["Only removes surrounding whitespace"] },
          { name: "replace()", bestFor: "Replacing one piece of text with another", pros: ["Returns the updated text without changing the original"], cons: ["Must be assigned if the result should be kept"] },
        ] },
        { type: "code", language: "python", filename: "methods.py", code: "name = \"   brian   \"\nmessage = \"I love Java\"\n\nprint(name.strip().title())\nprint(message.replace(\"Java\", \"Python\"))\nprint(\"learning python programming\".upper())\nprint(\"WELCOME TO PYTHON\".lower())" },
        { type: "callout", title: "Part 2 summary", text: "You can access characters with indexes, extract sections with slices, count characters with len(), clean text with strip(), change case, and replace text." },
      ],
    },
    {
      id: "python-strings-practice",
      title: "Practical String Programming",
      description: "Part 3 of 4 · Combine strings, format text, process input, and build a text program.",
      blocks: [
        { type: "heading", text: "Create and combine text" },
        { type: "text", text: "Create a file called strings.py and run it with python strings.py or python3 strings.py. Combining strings with + is called concatenation." },
        { type: "code", language: "python", filename: "strings.py", code: "first_name = \"Brian\"\nlast_name = \"Njogu\"\ncountry = \"Kenya\"\n\nfull_name = first_name + \" \" + last_name\nprint(\"Name:\", full_name)\nprint(\"Country:\", country)" },
        { type: "heading", text: "Use f-strings" },
        { type: "text", text: "An f-string inserts variables and expressions into formatted text. Place f before the opening quotation mark and put values inside curly brackets." },
        { type: "code", language: "python", filename: "formatted_text.py", code: "name = \"Brian\"\nage = 21\ncountry = \"Kenya\"\nprice = 500\nquantity = 3\n\nprint(f\"My name is {name}.\")\nprint(f\"I am {age} years old.\")\nprint(f\"I live in {country}.\")\nprint(f\"Total cost: {price * quantity}\")" },
        { type: "callout", title: "Watch the types", text: "You cannot directly concatenate a string and an integer with +. Convert the integer with str(age), or use an f-string instead." },
        { type: "heading", text: "Receive and process user input" },
        { type: "code", language: "python", filename: "user_profile.py", code: "print(\"===== USER PROFILE =====\")\n\nname = input(\"Enter your full name: \")\ncountry = input(\"Enter your country: \")\ncourse = input(\"Enter your course: \")\nage = int(input(\"Enter your age: \"))\n\nprint(\"\\n===== PROFILE DETAILS =====\")\nprint(f\"Name: {name.strip().title()}\")\nprint(f\"Country: {country.strip().title()}\")\nprint(f\"Course: {course.strip().title()}\")\nprint(f\"Age: {age}\")\nprint(f\"Your name has {len(name)} characters.\")" },
        { type: "text", text: "input() returns a string by default. Convert it with int() when a whole number is required, and clean surrounding spaces before formatting the result." },
        { type: "heading", text: "Independent exercise: build a text processor" },
        { type: "checklist", title: "Your program should", items: [
          "Ask the user for a sentence.",
          "Display it in uppercase and lowercase.",
          "Count the number of characters.",
          "Ask for a word to replace and a replacement word.",
          "Display the updated sentence.",
        ] },
        { type: "code", language: "python", filename: "text_processor.py", code: "sentence = input(\"Enter a sentence: \")\nold_word = input(\"Word to replace: \")\nnew_word = input(\"Replacement word: \")\n\nprint(sentence.upper())\nprint(sentence.lower())\nprint(\"Characters:\", len(sentence))\nprint(sentence.replace(old_word, new_word))" },
        { type: "callout", title: "Part 3 summary", text: "You have created and run Python files, combined strings, used f-strings, received user input, converted values, and built a text-processing program." },
      ],
    },
    {
      id: "python-strings-assessment",
      title: "Kai Assessment",
      description: "Part 4 of 4 · Demonstrate your understanding of Python strings and text processing.",
      blocks: [
        { type: "heading", text: "Ready for Kai's assessment?" },
        { type: "text", text: "The assessment will test string creation, indexing, slicing, string methods, concatenation, f-strings, user input, and type conversion. Kai will evaluate your answers and explain mistakes." },
        { type: "checklist", title: "Before you begin", items: [
          "I can create strings with single, double, and triple quotes.",
          "I can access characters and use positive and negative indexes.",
          "I can slice strings and count characters with len().",
          "I can clean, format, replace, and combine text.",
          "I understand that input() returns a string by default.",
        ] },
        { type: "callout", title: "Assessment starts here", text: "Select Start Kai assessment below when you are ready. Your result determines whether you can continue to the next Python lesson." },
      ],
    },
  ],
};

const pythonNumbersOperatorsDelivery = {
  type: "authored",
  version: 1,
  intro: "Learn how Python works with numerical data and performs mathematical and logical operations.",
  sections: [
    {
      id: "python-operators-fundamentals",
      title: "Understanding Numbers in Python",
      description: "Part 1 of 4 · Understand integers, floats, numerical types, and conversion.",
      blocks: [
        { type: "heading", text: "Integers and floating-point numbers" },
        { type: "text", text: "Python uses numbers to represent numerical values. Integers (int) are whole numbers, while floating-point numbers (float) contain a decimal point. Both can be positive, negative, or zero where appropriate." },
        { type: "code", language: "python", filename: "numbers.py", code: "age = 21\nstudents = 45\ntemperature = -5\nbalance = 1000\n\nprice = 250.50\nheight = 1.75\ninterest_rate = 12.75\n\nprint(age)\nprint(price)\nprint(type(age))\nprint(type(price))" },
        { type: "heading", text: "int versus float" },
        { type: "comparison", title: "Numerical data types", items: [
          { name: "Integer (int)", bestFor: "Whole numbers such as counts, ages, and quantities", pros: ["No decimal portion", "Can represent positive, negative, or zero"], cons: ["Cannot represent decimal measurements directly"] },
          { name: "Float (float)", bestFor: "Prices, measurements, percentages, and decimal calculations", pros: ["Represents values with a decimal point"], cons: ["Floating-point calculations can have precision limits"] },
        ] },
        { type: "code", language: "python", filename: "conversion.py", code: "number = 25\nwhole_number = int(25.85)\ndecimal_number = float(number)\n\nprint(whole_number)\nprint(decimal_number)\n\n age = int(input(\"Enter your age: \"))\nprint(age + 1)".replace("\n age", "\nage") },
        { type: "text", text: "int(25.85) produces 25 by removing the decimal portion; it does not round to the nearest integer. input() returns a string, so convert user input with int() or float() before performing calculations." },
        { type: "callout", title: "Part 1 summary", text: "Use int for whole numbers and float for decimal values. Use type() to inspect values and convert compatible input before doing numerical work." },
      ],
    },
    {
      id: "python-operators-arithmetic",
      title: "Arithmetic Operators",
      description: "Part 2 of 4 · Perform calculations with addition, subtraction, multiplication, division, remainders, and powers.",
      blocks: [
        { type: "heading", text: "Main arithmetic operators" },
        { type: "text", text: "Operators are symbols or keywords that perform operations on values. Python supports addition (+), subtraction (-), multiplication (*), division (/), floor division (//), modulus (%), and exponentiation (**)." },
        { type: "comparison", title: "Arithmetic operations", items: [
          { name: "+ and -", bestFor: "Adding values and calculating differences", pros: ["Direct and readable"], cons: ["Inputs must be compatible numeric values"] },
          { name: "* and /", bestFor: "Totals, rates, and proportional calculations", pros: ["Useful for real calculations"], cons: ["Division returns a float and cannot divide by zero"] },
          { name: "// and %", bestFor: "Whole-number groups and remainders", pros: ["Useful for even/odd checks and grouping"], cons: ["Division by zero is invalid"] },
          { name: "**", bestFor: "Powers and exponential calculations", pros: ["Expresses repeated multiplication clearly"], cons: ["Large powers can produce very large values"] },
        ] },
        { type: "code", language: "python", filename: "arithmetic.py", code: "a = 17\nb = 5\n\nprint(a + b)\nprint(a - b)\nprint(a * b)\nprint(a / b)\nprint(a // b)\nprint(a % b)\nprint(2 ** 3)\n\nnumber = 10\nprint(\"Even remainder:\", number % 2)" },
        { type: "text", text: "The / operator returns a floating-point result. Floor division returns the quotient rounded down, modulus returns the remainder, and exponentiation raises a number to a power." },
        { type: "heading", text: "Arithmetic with variables" },
        { type: "code", language: "python", filename: "total.py", code: "price = 500\nquantity = 4\ntotal = price * quantity\n\nprint(\"Total cost:\", total)" },
        { type: "callout", title: "Part 2 summary", text: "Arithmetic operators are the foundation of calculators, shopping systems, financial applications, measurements, and progress calculations." },
      ],
    },
    {
      id: "python-operators-logic",
      title: "Comparison, Logical, and Assignment Operators",
      description: "Part 3 of 4 · Compare values, combine conditions, update variables, and control precedence.",
      blocks: [
        { type: "heading", text: "Comparison operators" },
        { type: "text", text: "Comparison operators produce Boolean results: True or False. Remember that = assigns a value, while == checks whether two values are equal." },
        { type: "code", language: "python", filename: "comparisons.py", code: "age = 21\nscore = 75\n\nprint(age == 21)\nprint(score != 50)\nprint(score > 60)\nprint(score >= 70)\nprint(age < 18)" },
        { type: "heading", text: "Logical operators" },
        { type: "bullets", items: [
          "and is True only when both conditions are True.",
          "or is True when at least one condition is True.",
          "not reverses a Boolean value.",
        ] },
        { type: "code", language: "python", filename: "logic.py", code: "age = 22\nhas_id = True\nhas_email = False\nhas_phone = True\n\nprint(age >= 18 and has_id)\nprint(has_email or has_phone)\nprint(not has_email)" },
        { type: "heading", text: "Assignment operators and precedence" },
        { type: "code", language: "python", filename: "updates.py", code: "number = 10\nnumber += 5\nnumber -= 2\nnumber *= 3\nnumber /= 2\nprint(number)\n\nprint(10 + 5 * 2)\nprint((10 + 5) * 2)" },
        { type: "text", text: "Shorthand operators such as +=, -=, *=, /=, //=, %=, and **= update a variable. Python evaluates parentheses first, then powers, multiplication/division/remainder, addition/subtraction, comparisons, not, and, and or. Use parentheses when they make the intended calculation clearer." },
        { type: "callout", title: "Part 3 summary", text: "Comparisons evaluate relationships, logical operators combine conditions, assignment operators update state, and precedence determines calculation order." },
      ],
    },
    {
      id: "python-operators-assessment",
      title: "Practical Programming and Kai Assessment",
      description: "Part 4 of 4 · Build calculation programs and demonstrate your understanding.",
      blocks: [
        { type: "heading", text: "Build a simple calculator" },
        { type: "code", language: "python", filename: "calculator.py", code: "print(\"===== SIMPLE CALCULATOR =====\")\n\nnum1 = float(input(\"Enter first number: \"))\nnum2 = float(input(\"Enter second number: \"))\n\nprint(\"\\n===== RESULTS =====\")\nprint(f\"Addition: {num1 + num2}\")\nprint(f\"Subtraction: {num1 - num2}\")\nprint(f\"Multiplication: {num1 * num2}\")\n\nif num2 != 0:\n    print(f\"Division: {num1 / num2}\")\n    print(f\"Floor Division: {num1 // num2}\")\n    print(f\"Remainder: {num1 % num2}\")\nelse:\n    print(\"Division, floor division, and remainder require a non-zero second number.\")\n\nprint(f\"Power: {num1 ** num2}\")" },
        { type: "heading", text: "Build an even and odd checker" },
        { type: "code", language: "python", filename: "even_odd.py", code: "number = int(input(\"Enter a number: \"))\n\nif number % 2 == 0:\n    print(\"This is an even number.\")\nelse:\n    print(\"This is an odd number.\")" },
        { type: "heading", text: "Build a shopping calculator" },
        { type: "code", language: "python", filename: "shopping.py", code: "product = input(\"Enter product name: \")\nprice = float(input(\"Enter product price: \"))\nquantity = int(input(\"Enter quantity: \"))\ntotal = price * quantity\n\nprint(\"Product:\", product)\nprint(f\"Price: KSh {price:.2f}\")\nprint(\"Quantity:\", quantity)\nprint(f\"Total: KSh {total:.2f}\")" },
        { type: "checklist", title: "Before you begin Kai's assessment", items: [
          "I can distinguish integers and floats and convert numerical input.",
          "I can use all main arithmetic operators, including //, %, and **.",
          "I can compare values and combine conditions with and, or, and not.",
          "I can update variables with assignment operators.",
          "I can explain precedence and avoid division by zero.",
        ] },
        { type: "callout", title: "Assessment starts here", text: "Select Start Kai assessment below when you are ready. Kai will test numbers, operators, Boolean logic, assignment, and calculation order." },
      ],
    },
  ],
};

const pythonConditionalsDelivery = {
  type: "authored",
  version: 1,
  intro: "Learn how to make Python programs make decisions using conditions.",
  sections: [
    {
      id: "python-conditionals-fundamentals",
      title: "Introduction to Conditional Statements",
      description: "Part 1 of 4 · Understand conditions, comparisons, Boolean results, and indentation.",
      blocks: [
        { type: "heading", text: "What are conditional statements?" },
        { type: "text", text: "A conditional statement allows a program to make decisions. It checks whether a condition is true or false and executes instructions based on the result." },
        { type: "code", language: "python", filename: "voting.py", code: "age = 20\n\nif age >= 18:\n    print(\"You are eligible to vote.\")" },
        { type: "heading", text: "The if statement" },
        { type: "text", text: "The if keyword begins the condition, the expression is evaluated, the colon starts the block, and indented instructions execute only when the condition is true." },
        { type: "code", language: "python", filename: "temperature.py", code: "temperature = 35\n\nif temperature > 30:\n    print(\"It is a hot day.\")\n\nprint(\"Program completed.\")" },
        { type: "heading", text: "Boolean conditions and indentation" },
        { type: "code", language: "python", filename: "conditions.py", code: "age = 25\n\nprint(age >= 18)\nprint(age < 18)\n\nif age >= 18:\n    print(\"You are an adult.\")\n    print(\"You can apply for an ID.\")" },
        { type: "bullets", items: [
          "Conditions produce True or False.",
          "Comparison operators include ==, !=, >, <, >=, and <=.",
          "Python commonly uses four spaces for each indentation level.",
          "Indented statements belong to the conditional block; unindented statements do not.",
        ] },
        { type: "callout", title: "Part 1 summary", text: "Conditional statements make decisions, if runs code when a condition is true, comparisons produce Boolean values, and indentation defines each code block." },
      ],
    },
    {
      id: "python-conditionals-branches",
      title: "Using if, elif, and else",
      description: "Part 2 of 4 · Handle alternatives, multiple possibilities, and combined conditions.",
      blocks: [
        { type: "heading", text: "else provides an alternative" },
        { type: "code", language: "python", filename: "age_check.py", code: "age = 16\n\nif age >= 18:\n    print(\"You are an adult.\")\nelse:\n    print(\"You are a minor.\")" },
        { type: "heading", text: "elif checks another condition" },
        { type: "text", text: "elif means else if. Python checks conditions from top to bottom and stops after the first true condition in the same if/elif/else structure." },
        { type: "code", language: "python", filename: "grades.py", code: "marks = 75\n\nif marks >= 80:\n    print(\"Grade A\")\nelif marks >= 70:\n    print(\"Grade B\")\nelif marks >= 60:\n    print(\"Grade C\")\nelif marks >= 50:\n    print(\"Grade D\")\nelse:\n    print(\"Grade E\")" },
        { type: "heading", text: "Combine conditions" },
        { type: "code", language: "python", filename: "access.py", code: "age = 22\nhas_id = True\nhas_email = False\nhas_phone = True\n\nif age >= 18 and has_id:\n    print(\"Access granted.\")\n\nif has_email or has_phone:\n    print(\"You can register.\")\n\nif not has_email:\n    print(\"Email is missing.\")" },
        { type: "bullets", items: [
          "and requires both conditions to be true.",
          "or requires at least one condition to be true.",
          "not reverses a Boolean condition.",
        ] },
        { type: "callout", title: "Part 2 summary", text: "Use if for the first condition, elif for additional alternatives, else when all earlier conditions are false, and logical operators when a decision depends on more than one condition." },
      ],
    },
    {
      id: "python-conditionals-practice",
      title: "Practical Conditional Programming",
      description: "Part 3 of 4 · Build programs that validate input, grade results, authenticate users, and make decisions.",
      blocks: [
        { type: "heading", text: "Age checker" },
        { type: "code", language: "python", filename: "age_checker.py", code: "age = int(input(\"Enter your age: \"))\n\nif age >= 18:\n    print(\"You are an adult.\")\nelse:\n    print(\"You are a minor.\")" },
        { type: "heading", text: "Student grading system" },
        { type: "code", language: "python", filename: "grading_system.py", code: "marks = float(input(\"Enter student marks: \"))\n\nif marks < 0 or marks > 100:\n    print(\"Invalid marks. Enter a value between 0 and 100.\")\nelif marks >= 80:\n    print(\"Grade: A\")\nelif marks >= 70:\n    print(\"Grade: B\")\nelif marks >= 60:\n    print(\"Grade: C\")\nelif marks >= 50:\n    print(\"Grade: D\")\nelse:\n    print(\"Grade: E\")" },
        { type: "heading", text: "Login and nested decisions" },
        { type: "code", language: "python", filename: "login.py", code: "correct_username = \"admin\"\ncorrect_password = \"12345\"\n\nusername = input(\"Enter username: \")\npassword = input(\"Enter password: \")\n\nif username == correct_username and password == correct_password:\n    print(\"Login successful. Welcome!\")\nelse:\n    print(\"Invalid username or password.\")" },
        { type: "code", language: "python", filename: "nested_access.py", code: "age = 22\nhas_id = True\n\nif age >= 18:\n    if has_id:\n        print(\"You can enter.\")\n    else:\n        print(\"Identification required.\")\nelse:\n    print(\"You are too young to enter.\")" },
        { type: "heading", text: "ATM withdrawal system" },
        { type: "code", language: "python", filename: "atm.py", code: "balance = 10000\namount = float(input(\"Enter withdrawal amount: \"))\n\nif amount <= 0:\n    print(\"Invalid withdrawal amount.\")\nelif amount > balance:\n    print(\"Insufficient funds.\")\nelse:\n    balance -= amount\n    print(\"Withdrawal successful.\")\n    print(f\"Amount withdrawn: KSh {amount:.2f}\")\n    print(f\"Remaining balance: KSh {balance:.2f}\")" },
        { type: "checklist", title: "Independent exercise: electricity billing", items: [
          "Ask for the number of electricity units consumed.",
          "Reject negative units.",
          "Charge KSh 10 per unit for 0–100 units.",
          "Charge KSh 15 per unit above 100 units.",
          "Display the total with an f-string.",
        ] },
        { type: "callout", title: "Part 3 summary", text: "You have used input, if/elif/else, logical operators, nested conditionals, validation, and state updates to build practical decision-making programs." },
      ],
    },
    {
      id: "python-conditionals-assessment",
      title: "Kai Assessment",
      description: "Part 4 of 4 · Demonstrate your understanding of Python conditional statements.",
      blocks: [
        { type: "heading", text: "Ready for Kai's assessment?" },
        { type: "text", text: "The assessment covers the purpose of conditional statements, if/elif/else, comparison operators, logical operators, indentation, nested decisions, and practical program execution." },
        { type: "checklist", title: "Before you begin", items: [
          "I can explain why programs need conditional statements.",
          "I can write if, elif, and else blocks with correct indentation.",
          "I can compare values and combine conditions with and, or, and not.",
          "I can create nested conditionals when one decision depends on another.",
          "I can validate input and build a practical decision-making program.",
        ] },
        { type: "callout", title: "Assessment starts here", text: "Select Start Kai assessment below when you are ready. A successful result allows you to progress to the next Python lesson." },
      ],
    },
  ],
};

const javascriptDataTypesAuthoredDelivery = {
  type: "authored",
  version: 1,
  intro: "Understand the values JavaScript can store, how those values behave, and how to use them in real programs.",
  sections: [
    {
      id: "javascript-data-types-foundations",
      title: "Introduction to JavaScript Data Types",
      description: "Part 1 of 4 · Build the foundation: values, types, primitive data, objects, and real applications.",
      blocks: [
        { type: "heading", text: "What are data types?" },
        { type: "text", text: "A data type describes the kind of value a variable stores. JavaScript uses the type to decide how a value behaves during an operation." },
        { type: "text", text: "A name is text, an age is a number, and a login state is either true or false. These values all look different because they represent different kinds of information." },
        { type: "code", language: "javascript", filename: "values.js", code: "const name = \"Amina\";\nconst age = 21;\nconst loggedIn = true;\n\nconsole.log(name);\nconsole.log(age);\nconsole.log(loggedIn);" },
        { type: "text", text: "The variable names tell us what the values mean. The values themselves have different types: string, number, and boolean." },
        { type: "table", columns: ["Variable", "Value", "Type", "Purpose"], rows: [
          ["name", "\"Amina\"", "String", "Stores text"],
          ["age", "21", "Number", "Stores a quantity"],
          ["loggedIn", "true", "Boolean", "Stores a yes/no state"],
        ] },
        { type: "heading", text: "Types change how operators behave" },
        { type: "code", language: "javascript", filename: "operations.js", code: "console.log(10 + 5);\nconsole.log(\"10\" + 5);\nconsole.log(\"Amina\" + \" Khan\");" },
        { type: "text", text: "The first expression performs addition. The second joins text because one value is a string. The third joins two strings together; this is called concatenation." },
        { type: "code", language: "text", filename: "output", code: "15\n105\nAmina Khan" },
        { type: "heading", text: "The two broad groups" },
        { type: "text", text: "JavaScript values are often discussed as primitive values and reference values. Primitive values represent one basic piece of data. Objects, arrays, and functions represent richer structures." },
        { type: "table", columns: ["Group", "Examples", "What it represents"], rows: [
          ["Primitive", "string, number, boolean", "One basic value"],
          ["Primitive", "undefined, null, bigint, symbol", "Special or unique values"],
          ["Reference", "object, array, function", "A structured value or reusable behavior"],
        ] },
        { type: "heading", text: "A small value model" },
        { type: "diagram", title: "JavaScript variable, value, and type", diagramType: "dataflow", layout: "horizontal", nodes: [
          { id: "name", label: "variable\nscore", shape: "input" },
          { id: "value", label: "value\n87", shape: "process" },
          { id: "kind", label: "type\nnumber", shape: "output" },
        ], edges: [{ from: "name", to: "value", label: "refers to" }, { from: "value", to: "kind", label: "is a" }] },
        { type: "heading", text: "Where types appear in applications" },
        { type: "bullets", items: [
          "Registration forms use strings for names and numbers for ages.",
          "Shopping systems use numbers for prices and arrays for carts.",
          "Permission checks use booleans such as isAdmin.",
          "APIs exchange objects containing strings, numbers, arrays, booleans, and null.",
        ] },
        { type: "callout", title: "Key idea", text: "Before using a value, ask two questions: What information does it represent? Which type best describes that information?" },
      ],
    },
    {
      id: "javascript-data-types-concepts",
      title: "Understanding JavaScript Data Types in Detail",
      description: "Part 2 of 4 · Study common types, structures, typeof, dynamic typing, and conversion.",
      blocks: [
        { type: "heading", text: "1. Strings" },
        { type: "text", text: "A string stores text. It may contain letters, spaces, symbols, or digits that should be treated as text." },
        { type: "code", language: "javascript", filename: "strings.js", code: "const single = 'Kenya';\nconst double = \"JavaScript\";\nconst greeting = `Hello, ${single}!`;\n\nconsole.log(greeting);" },
        { type: "code", language: "text", filename: "output", code: "Hello, Kenya!" },
        { type: "text", text: "Backticks create a template literal. The expression inside ${} is replaced with its value." },
        { type: "table", columns: ["Tool", "Purpose", "Example"], rows: [
          ["length", "Counts characters", "message.length"],
          ["toUpperCase()", "Creates uppercase text", "name.toUpperCase()"],
          ["trim()", "Removes outer spaces", "input.trim()"],
          ["includes()", "Checks for text", "email.includes('@')"],
          ["slice()", "Extracts part of a string", "word.slice(0, 3)"],
        ] },
        { type: "code", language: "javascript", filename: "string-tools.js", code: "const message = \"  Learn JavaScript  \";\n\nconsole.log(message.trim());\nconsole.log(message.toUpperCase());\nconsole.log(message.includes(\"JavaScript\"));" },
        { type: "code", language: "text", filename: "output", code: "Learn JavaScript\n  LEARN JAVASCRIPT  \ntrue" },
        { type: "heading", text: "2. Numbers" },
        { type: "text", text: "JavaScript uses the Number type for whole numbers and decimal numbers. It also provides special numeric values such as NaN and Infinity." },
        { type: "table", columns: ["Operator", "Meaning", "Example", "Result"], rows: [
          ["+", "Addition", "10 + 3", "13"],
          ["-", "Subtraction", "10 - 3", "7"],
          ["*", "Multiplication", "10 * 3", "30"],
          ["/", "Division", "10 / 2", "5"],
          ["%", "Remainder", "10 % 3", "1"],
          ["**", "Power", "2 ** 3", "8"],
        ] },
        { type: "code", language: "javascript", filename: "numbers.js", code: "const price = 650;\nconst quantity = 3;\nconst total = price * quantity;\n\nconsole.log(total);\nconsole.log(\"Invalid result:\", \"hello\" / 2);\nconsole.log(\"Infinite result:\", 10 / 0);" },
        { type: "code", language: "text", filename: "output", code: "1950\nInvalid result: NaN\nInfinite result: Infinity" },
        { type: "text", text: "NaN means Not-a-Number. It usually signals that a numeric operation could not produce a valid number. Infinity is the result of a value growing beyond the finite range, such as dividing 10 by zero." },
        { type: "heading", text: "3. Booleans" },
        { type: "text", text: "A Boolean has only two values: true and false. Booleans are commonly used in conditions and feature flags." },
        { type: "code", language: "javascript", filename: "booleans.js", code: "const age = 20;\nconst hasId = true;\n\nconsole.log(age >= 18);\nconsole.log(age >= 18 && hasId);" },
        { type: "code", language: "text", filename: "output", code: "true\ntrue" },
        { type: "text", text: "The comparison produces a Boolean. The && operator produces true only when both conditions are true." },
        { type: "heading", text: "4. undefined and null" },
        { type: "table", columns: ["Value", "Meaning", "Example"], rows: [
          ["undefined", "A value has not been assigned", "let city;"],
          ["null", "An intentional empty value", "let selectedUser = null;"],
        ] },
        { type: "code", language: "javascript", filename: "empty-values.js", code: "let city;\nconst selectedUser = null;\n\nconsole.log(city);\nconsole.log(selectedUser);\nconsole.log(typeof city);\nconsole.log(typeof selectedUser);" },
        { type: "code", language: "text", filename: "output", code: "undefined\nnull\nundefined\nobject" },
        { type: "callout", title: "JavaScript detail", kind: "warning", text: "typeof null returns object because of a historical JavaScript behavior. Check value === null when you specifically need to test for null." },
        { type: "heading", text: "5. BigInt and Symbol" },
        { type: "text", text: "BigInt represents integers larger than the safe range of Number. Add n to the end of an integer literal." },
        { type: "code", language: "javascript", filename: "special-types.js", code: "const population = 9007199254740993n;\nconst userId = Symbol(\"user-id\");\n\nconsole.log(population);\nconsole.log(typeof userId);" },
        { type: "text", text: "A Symbol creates a unique identifier. Symbols are useful when a property name must not accidentally collide with another property name." },
        { type: "heading", text: "6. Objects, arrays, and functions" },
        { type: "code", language: "javascript", filename: "structures.js", code: "const student = { name: \"Amina\", score: 87 };\nconst subjects = [\"JavaScript\", \"HTML\"];\nfunction greet() {\n  return \"Welcome\";\n}\n\nconsole.log(student.name);\nconsole.log(subjects[0]);\nconsole.log(greet());" },
        { type: "text", text: "An object groups named properties. An array stores an ordered collection. A function stores reusable behavior that can be called later." },
        { type: "heading", text: "7. Dynamic typing and conversion" },
        { type: "text", text: "JavaScript is dynamically typed. A variable can refer to a value of one type and later refer to a value of another type." },
        { type: "code", language: "javascript", filename: "dynamic.js", code: "let value = 10;\nconsole.log(typeof value);\n\nvalue = \"ten\";\nconsole.log(typeof value);" },
        { type: "code", language: "text", filename: "output", code: "number\nstring" },
        { type: "table", columns: ["Function", "Input", "Result"], rows: [
          ["Number()", "Number(\"42\")", "42"],
          ["String()", "String(42)", "\"42\""],
          ["Boolean()", "Boolean(1)", "true"],
        ] },
        { type: "code", language: "javascript", filename: "convert.js", code: "const quantityText = \"4\";\nconst quantity = Number(quantityText);\nconst price = 25;\n\nconsole.log(quantity * price);\nconsole.log(typeof quantity);" },
        { type: "code", language: "text", filename: "output", code: "100\nnumber" },
        { type: "callout", title: "Common mistake", text: "The text \"4\" is not the same as the number 4. Convert user input before doing calculations." },
      ],
    },
    {
      id: "javascript-data-types-practice",
      title: "Practical Application and Exercises",
      description: "Part 3 of 4 · Build a data inspector, process input, and create a small registration record.",
      blocks: [
        { type: "heading", text: "Tools and setup" },
        { type: "text", text: "Install Node.js and use a code editor such as VS Code. Create a folder named javascript-data-types and create data-types.js inside it." },
        { type: "numbered", items: [
          "Open the folder in your editor.",
          "Write the example in data-types.js.",
          "Open a terminal in the folder.",
          "Run node data-types.js.",
          "Compare the output with the expected output.",
        ] },
        { type: "heading", text: "Project 1: inspect a learner record" },
        { type: "code", language: "javascript", filename: "data-types.js", code: "const learner = {\n  name: \"Amina\",\n  age: 21,\n  score: \"87\",\n  enrolled: true\n};\n\nconsole.log(\"Name type:\", typeof learner.name);\nconsole.log(\"Age type:\", typeof learner.age);\nconsole.log(\"Score type:\", typeof learner.score);\nconsole.log(\"Enrolled type:\", typeof learner.enrolled);\n\nconst numericScore = Number(learner.score);\nconsole.log(\"Numeric score:\", numericScore);" },
        { type: "code", language: "text", filename: "expected-output", code: "Name type: string\nAge type: number\nScore type: string\nEnrolled type: boolean\nNumeric score: 87" },
        { type: "text", text: "The score begins as text because it is written inside quotes. Number() creates a numeric copy that can be used in calculations." },
        { type: "heading", text: "Project 2: build a registration summary" },
        { type: "code", language: "javascript", filename: "registration.js", code: "const name = \"Amina\";\nconst age = 21;\nconst course = \"JavaScript\";\nconst active = true;\n\nconsole.log(`Name: ${name}`);\nconsole.log(`Age: ${age}`);\nconsole.log(`Course: ${course}`);\nconsole.log(`Active: ${active}`);" },
        { type: "code", language: "text", filename: "expected-output", code: "Name: Amina\nAge: 21\nCourse: JavaScript\nActive: true" },
        { type: "heading", text: "Exercises" },
        { type: "numbered", items: [
          "Create variables for a product name, price, quantity, and availability.",
          "Print the type of each variable.",
          "Calculate the total price using price * quantity.",
          "Store a price as text, convert it with Number(), and compare the result.",
          "Change availability to false and write a message when the product is unavailable.",
        ] },
        { type: "heading", text: "Challenge: safe score conversion" },
        { type: "code", language: "javascript", filename: "challenge.js", code: "const scoreText = \"not submitted\";\nconst score = Number(scoreText);\n\nif (Number.isNaN(score)) {\n  console.log(\"Score must be a number.\");\n} else {\n  console.log(\"Score:\", score);\n}" },
        { type: "code", language: "text", filename: "expected-output", code: "Score must be a number." },
        { type: "exercise", title: "Mini-project: learner profile", description: "Create a learner object with a name, age, course, score, and enrolled status. Print the values, inspect their types, convert a score supplied as text, and handle invalid score input." },
      ],
    },
    {
      id: "javascript-data-types-assessment",
      title: "Kai Assessment",
      description: "Part 4 of 4 · Test definitions, code tracing, comparisons, and practical decisions.",
      blocks: [
        { type: "heading", text: "Assessment instructions" },
        { type: "text", text: "Answer using the concepts and examples from Parts 1–3. Kai will explain the reason behind each result and help you correct any misunderstanding." },
        { type: "quiz", question: "Which type stores text?", options: ["string", "number", "boolean", "object"], answer: "string", explanation: "Strings contain text such as names, messages, and course titles." },
        { type: "quiz", question: "What is the result of typeof true?", options: ["string", "number", "boolean", "undefined"], answer: "boolean", explanation: "true and false are Boolean values." },
        { type: "quiz", question: "What does Number(\"25\") do?", options: ["Converts text to a number", "Converts a number to text", "Creates an object", "Removes the value"], answer: "Converts text to a number", explanation: "Number(\"25\") returns the numeric value 25." },
        { type: "quiz", question: "Which value represents an intentional absence of a value?", options: ["undefined", "null", "false", "0"], answer: "null", explanation: "null is commonly used when the program intentionally represents no value." },
        { type: "heading", text: "Trace the output" },
        { type: "code", language: "javascript", filename: "assessment-trace.js", code: "const value = \"5\";\nconsole.log(value + 2);\nconsole.log(Number(value) + 2);" },
        { type: "code", language: "text", filename: "answer", code: "52\n7" },
        { type: "text", text: "The first line joins a string and a number. The second line converts the string to a number before adding." },
        { type: "heading", text: "Scenario question" },
        { type: "text", text: "A registration form gives you age as \"21\". Explain why converting it before comparing it with 18 is a safe choice. Then describe what you would do if the user entered \"unknown\"." },
        { type: "checklist", title: "Ready to finish?", items: [
          "I can define a data type and explain why types matter.",
          "I can distinguish primitive values from objects, arrays, and functions.",
          "I can use typeof and explain the typeof null exception.",
          "I can convert text input with Number() and check for invalid results.",
          "I can trace an expression and predict its output.",
        ] },
      ],
    },
  ],
};

// Python is the first complete coding roadmap on the authored delivery system.
// Preserve the explicitly authored pilot lesson and migrate every other Python
// lesson from its existing official sections without changing lesson identity,
// ordering, progression, or Kai assessment behavior.
lessons.python.forEach((lesson) => {
  if (lesson.id === "python-introduction") {
    lesson.title = "Introduction to Python and Running Python";
    lesson.description = "This lesson introduces Python, explains how it works, and teaches learners how to write and execute their first Python program.";
    lesson.level = "Beginner";
    lesson.delivery = pythonIntroductionAuthoredDelivery;
  }
  else if (lesson.id === "python-variables-data-types") lesson.delivery = pythonVariablesDataTypesDelivery;
  else if (lesson.id === "python-strings") lesson.delivery = pythonStringsDelivery;
  else if (lesson.id === "python-operators") lesson.delivery = pythonNumbersOperatorsDelivery;
  else if (lesson.id === "python-conditional-statements") lesson.delivery = pythonConditionalsDelivery;
  else if (lesson.id === "python-lists-collections") lesson.delivery = pythonListsCollectionsDelivery;
  else if (lesson.id === "python-dictionaries") lesson.delivery = pythonDictionariesDelivery;
  else if (lesson.id === "python-functions-roadmap") lesson.delivery = pythonFunctionsDelivery;
  else if (lesson.id === "python-errors-debugging") lesson.delivery = pythonErrorsDebuggingDelivery;
  else if (lesson.id === "python-files-modules") lesson.delivery = pythonFilesModulesDelivery;
  else if (lesson.id === "python-file-handling") lesson.delivery = pythonFileHandlingDelivery;
  else if (lesson.id === "python-object-oriented-programming") lesson.delivery = pythonObjectOrientedDelivery;
  else if (lesson.id === "python-iterators") lesson.delivery = pythonIteratorsGeneratorsDelivery;
  else if (lesson.id === "python-decorators") lesson.delivery = pythonDecoratorsContextManagersDelivery;
  else if (lesson.id === "python-lambda-functional") lesson.delivery = pythonLambdaFunctionalDelivery;
  else if (lesson.id === "python-basics-project") lesson.delivery = pythonBasicsProjectDelivery;
  else if (lesson.id === "python-list-comprehensions") lesson.delivery = pythonListComprehensionsDelivery;
  else if (lesson.id === "python-modules-packages-roadmap") lesson.delivery = pythonModulesPackagesRoadmapDelivery;
  else if (lesson.id === "python-exception-handling") lesson.delivery = pythonExceptionsDelivery;
  else if (!lesson.delivery || lesson.delivery.type !== "authored") lesson.delivery = makePythonAuthoredDelivery(lesson);
});

// Several historical roadmap fragments describe the same lesson more than once.
// Keep the first occurrence so progress keys, URLs, and Kai sessions remain stable.
const uniquePythonLessons = [];
const seenPythonLessonIds = new Set();
for (const lesson of lessons.python) {
  if (seenPythonLessonIds.has(lesson.id)) continue;
  seenPythonLessonIds.add(lesson.id);
  uniquePythonLessons.push(lesson);
}
lessons.python = uniquePythonLessons;

// Use the fully authored CIA Triad lesson for the Cybersecurity Fundamentals entry.
for (const lesson of lessons["cybersecurity-fundamentals"] || []) {
  if (lesson.id === "cybersecurity-fundamentals-01-security-goals-and-the-cia-triad") {
    lesson.delivery = cybersecurityCiaTriadDelivery;
  }
}

// Use the fully authored Python loops lesson for both historical loop entries.
for (const lesson of lessons.python) {
  if (lesson.id === "python-loops" || lesson.id === "python-loops-roadmap") {
    lesson.delivery = pythonLoopsDelivery;
  }
}

// Use the fully authored Data Types lesson for both historical JavaScript entries.
for (const lesson of lessons.javascript) {
  if (lesson.id === "js-data-types" || lesson.id === "javascript-roadmap-data-types") {
    lesson.delivery = javascriptDataTypesAuthoredDelivery;
  }
}

// Apply the same structured teaching experience to every remaining course while
// preserving any delivery that has already been authored by hand.
Object.entries(lessons).forEach(([courseId, courseLessons]) => {
  if (courseId === "python") return;
  courseLessons.forEach((lesson) => {
    if (!lesson.delivery || lesson.delivery.type !== "authored") {
      lesson.delivery = makeGeneralAuthoredDelivery(lesson, courseId);
    }
  });
});

// Keep the learner path predictable even when lessons are added, generated, or
// edited later. The original order is preserved within the same difficulty so
// related topics and project milestones remain in their intended sequence.
const lessonLevelOrder = {
  Beginner: 0,
  Intermediate: 1,
  Advanced: 2,
};

Object.values(lessons).forEach((courseLessons) => {
  courseLessons.sort((left, right) => {
    const leftLevel = lessonLevelOrder[left.level] ?? 3;
    const rightLevel = lessonLevelOrder[right.level] ?? 3;
    return leftLevel - rightLevel;
  });
});

export { lessons };

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getLessonsByCourse(courseId) {
  return lessons[courseId] || [];
}

export function getLesson(courseId, lessonId) {
  const courseLessons = lessons[courseId] || [];

  return courseLessons.find(
    (lesson) => lesson.id === lessonId
  );
}

export default lessons;
