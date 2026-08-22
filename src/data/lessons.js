// ============================================
// CODELAB ACADEMY - LESSON DATA
// Deep-learning lesson structure for Kai
// ============================================
// EXPANDED COURSE LESSON BUILDER
// ============================================

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
}) {
  return {
    id,
    title,
    description: `Build a practical understanding of ${focus.toLowerCase()}.`,
    level: "Beginner",
    estimatedTime: "25 min",
    objectives: [
      `Explain the role of ${focus.toLowerCase()}`,
      "Recognize the key decisions involved",
      "Apply the idea to a practical scenario",
      "Check your understanding with a short challenge",
    ],
    sections: [
      {
        type: "explanation",
        title: `Understanding ${focus}`,
        content: `
${focus} is an important building block for developers who want to create reliable, useful software.

In this lesson, Kai will help you understand the idea, connect it to a real development workflow, and identify the trade-offs that matter when you use it.

Start with the problem it solves: good engineering makes systems easier to understand, operate, test, and improve.
        `,
      },
      {
        type: "example",
        title: "A Practical Example",
        code,
        explanation: `This example gives you a small, concrete way to see ${focus.toLowerCase()} in action. Read it line by line, then change one part and observe how the behavior changes.`,
      },
      {
        type: "deepDive",
        title: "How to Think About It",
        content: `
When applying ${focus.toLowerCase()}, ask three questions:

1. What problem is the design solving?
2. What can fail or become difficult to maintain?
3. How will you observe, test, and improve the result?

These questions help you move from memorizing terms to making sound engineering decisions.
        `,
      },
      {
        type: "challenge",
        title: "Try It Yourself",
        instructions: challenge,
        starterCode,
      },
      {
        type: "quiz",
        title: "Quick Check",
        question: quizQuestion,
        options: quizOptions,
        answer: quizAnswer,
        explanation: `${quizAnswer} is the best answer because it directly supports the main goal of this lesson: applying ${focus.toLowerCase()} deliberately and safely.`,
      },
      {
        type: "summary",
        title: "Lesson Summary",
        content: `
You learned the core idea behind ${focus.toLowerCase()}, saw a practical example, and considered the trade-offs involved.

Next, practice explaining the idea in your own words and use the challenge as a starting point for a small project.
        `,
      },
    ],
  };
}

const courseLessonPlans = {
  "devops-foundations": [
    makeLesson({ id: "devops-foundations-culture", title: "DevOps Culture and Delivery", focus: "DevOps culture", code: "const workflow = {\n  build: true,\n  test: true,\n  deploy: \"repeatable\"\n};\n\nconsole.log(workflow);", challenge: "Write down three steps that should happen before software reaches production. For each step, explain how automation could make it repeatable.", starterCode: "const deliverySteps = [];\n\n// Add build, test, and deploy steps here\nconsole.log(deliverySteps);", quizQuestion: "What is a central goal of DevOps?", quizOptions: ["Make releases repeatable and collaborative", "Remove all testing", "Avoid monitoring", "Deploy only once"], quizAnswer: "Make releases repeatable and collaborative" }),
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

export const lessons = {
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
  ],

  ...courseLessonPlans,
};

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