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
    description: `Learn ${focus.toLowerCase()} through a clear explanation, a practical example, and guided practice.`,
    level: "Beginner",
    estimatedTime: "25 min",
    objectives: [
      `Understand ${focus.toLowerCase()}`,
      `Explain why ${focus.toLowerCase()} is useful`,
      "Read and adapt a practical example",
      "Apply the concept in a guided challenge",
    ],
    sections: [
      {
        type: "explanation",
        title: `What is ${focus}?`,
        content: `
${focus} is an important building block for developers who want to create reliable, useful software.

Start with the problem it solves. Kai will explain the idea in simple language, connect it to a real development workflow, and point out the decisions that matter when you use it.

You do not need to memorize every detail at once. Focus on what the concept does, when to use it, and what can go wrong.
        `,
      },
      {
        type: "example",
        title: `A ${focus} Example`,
        code,
        explanation: `Read this example line by line. Notice how ${focus.toLowerCase()} solves a small, realistic problem. Then change one value or step and observe how the behavior changes.`,
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
      { type: "explanation", title: "Core Idea", content: `${description} Study the example, explain why it works, and consider how it behaves when inputs or requirements change.` },
      { type: "example", title: "Practical Example", code, explanation: "Read the example carefully, then adapt it rather than copying it blindly." },
      { type: "challenge", title: "Practice Project", instructions: challenge, starterCode: `${code}\n\n# Extend this example to complete the challenge` },
    ],
  };
}

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
    ...pythonMasteryLessonPlans.map(makePythonMasteryLesson),
  ],

  ...expandedCourseLessonPlans,
  ...generatedMissingCourseLessons,
  ...cloudCourseLessonPlans,
  ...cyberCourseLessonPlans,
  ...aiCourseLessonPlans,
  ...databaseCourseLessonPlans,
};

// JavaScript has two hand-written beginner lessons; extend it with the same
// complete path used by the other programming languages.
lessons.javascript = [
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
