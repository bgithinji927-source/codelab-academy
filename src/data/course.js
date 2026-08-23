const courses = [
  // =========================
  // CODING — 12 COURSES
  // =========================

  {
    id: "python",
    title: "Python Programming",
    category: "Coding",
    description: "Learn Python from the fundamentals to real-world projects.",
    level: "Beginner",
  },
  {
    id: "javascript",
    title: "JavaScript",
    category: "Coding",
    description: "Master JavaScript and build interactive applications.",
    level: "Beginner",
  },
  {
    id: "java",
    title: "Java Programming",
    category: "Coding",
    description: "Learn Java programming and object-oriented development.",
    level: "Beginner",
  },
  {
    id: "cpp",
    title: "C++ Programming",
    category: "Coding",
    description: "Learn C++ programming, memory, and object-oriented concepts.",
    level: "Intermediate",
  },
  {
    id: "c-programming",
    title: "C Programming",
    category: "Coding",
    description: "Build a strong programming foundation with C.",
    level: "Beginner",
  },
  {
    id: "csharp",
    title: "C# Programming",
    category: "Coding",
    description: "Learn C# and build modern applications.",
    level: "Beginner",
  },
  {
    id: "typescript",
    title: "TypeScript",
    category: "Coding",
    description: "Write safer and more scalable JavaScript with TypeScript.",
    level: "Intermediate",
  },
  {
    id: "go",
    title: "Go Programming",
    category: "Coding",
    description: "Learn Go and build fast, reliable applications.",
    level: "Intermediate",
  },
  {
    id: "rust",
    title: "Rust Programming",
    category: "Coding",
    description: "Explore safe systems programming with Rust.",
    level: "Advanced",
  },
  {
    id: "php",
    title: "PHP Programming",
    category: "Coding",
    description: "Learn PHP and build dynamic web applications.",
    level: "Beginner",
  },
  {
    id: "kotlin",
    title: "Kotlin",
    category: "Coding",
    description: "Learn Kotlin for modern application development.",
    level: "Intermediate",
  },
  {
    id: "swift",
    title: "Swift Programming",
    category: "Coding",
    description: "Learn Swift for modern application development.",
    level: "Intermediate",
  },

  // =========================
  // TECH ENGINES — 8 COURSES
  // =========================

  {
    id: "game-engine",
    title: "How Game Engines Work",
    category: "Tech Engines",
    description: "Understand the technology behind modern game engines.",
    level: "Intermediate",
  },
  {
    id: "search-engine",
    title: "How Search Engines Work",
    category: "Tech Engines",
    description: "Learn how search engines crawl, index, and rank information.",
    level: "Intermediate",
  },
  {
    id: "browser-engine",
    title: "How Browser Engines Work",
    category: "Tech Engines",
    description: "Understand how browsers turn code into web pages.",
    level: "Intermediate",
  },
  {
    id: "ai-engine",
    title: "How AI Engines Work",
    category: "Tech Engines",
    description: "Explore the foundations behind modern AI systems.",
    level: "Intermediate",
  },
  {
    id: "rendering-engine",
    title: "Rendering Engines",
    category: "Tech Engines",
    description: "Learn how software renders graphics and interfaces.",
    level: "Advanced",
  },
  {
    id: "recommendation-engine",
    title: "Recommendation Engines",
    category: "Tech Engines",
    description: "Learn how platforms recommend content to users.",
    level: "Intermediate",
  },
  {
    id: "compiler-engine",
    title: "How Compilers Work",
    category: "Tech Engines",
    description: "Understand how source code becomes executable programs.",
    level: "Advanced",
  },
  {
    id: "web-crawler",
    title: "Building Web Crawlers",
    category: "Tech Engines",
    description: "Learn how automated systems discover information online.",
    level: "Intermediate",
  },

  // =========================
  // AI TOOLS — 6 COURSES
  // =========================

  {
    id: "ai-fundamentals",
    title: "AI Fundamentals",
    category: "AI Tools",
    description: "Understand artificial intelligence and modern AI systems.",
    level: "Beginner",
  },
  {
    id: "prompt-engineering",
    title: "Prompt Engineering",
    category: "AI Tools",
    description: "Learn how to communicate effectively with AI models.",
    level: "Beginner",
  },
  {
    id: "ai-api-development",
    title: "Building with AI APIs",
    category: "AI Tools",
    description: "Integrate AI models into your own applications.",
    level: "Intermediate",
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    category: "AI Tools",
    description: "Learn how autonomous AI agents work and how to build them.",
    level: "Advanced",
  },
  {
    id: "ai-chatbots",
    title: "Building AI Chatbots",
    category: "AI Tools",
    description: "Build intelligent conversational applications.",
    level: "Intermediate",
  },
  {
    id: "ai-applications",
    title: "AI-Powered Applications",
    category: "AI Tools",
    description: "Build practical applications powered by artificial intelligence.",
    level: "Intermediate",
  },

  // =========================
  // DEVELOPER TOOLS — 10 COURSES
  // =========================

  {
    id: "git",
    title: "Git",
    category: "Developer Tools",
    description: "Learn version control and manage your code effectively.",
    level: "Beginner",
  },
  {
    id: "github",
    title: "GitHub",
    category: "Developer Tools",
    description: "Learn collaboration, repositories, branches, and pull requests.",
    level: "Beginner",
  },
  {
    id: "docker",
    title: "Docker",
    category: "Developer Tools",
    description: "Learn containers and modern application deployment.",
    level: "Intermediate",
  },
  {
    id: "vscode",
    title: "VS Code",
    category: "Developer Tools",
    description: "Master Visual Studio Code for efficient development.",
    level: "Beginner",
  },
  {
    id: "npm",
    title: "npm",
    category: "Developer Tools",
    description: "Learn JavaScript package management with npm.",
    level: "Beginner",
  },
  {
    id: "terminal",
    title: "Command Line",
    category: "Developer Tools",
    description: "Master the terminal and command-line development.",
    level: "Beginner",
  },
  {
    id: "postman",
    title: "Postman",
    category: "Developer Tools",
    description: "Test and work with APIs using Postman.",
    level: "Beginner",
  },
  {
    id: "vercel",
    title: "Vercel",
    category: "Developer Tools",
    description: "Learn how to deploy modern web applications.",
    level: "Beginner",
  },
  {
    id: "linux",
    title: "Linux",
    category: "Developer Tools",
    description: "Learn Linux fundamentals for developers.",
    level: "Intermediate",
  },
  {
    id: "devtools",
    title: "Browser DevTools",
    category: "Developer Tools",
    description: "Debug and inspect modern web applications.",
    level: "Beginner",
  },

  // =========================
  // WEB TECHNOLOGIES — 15 COURSES
  // =========================

  {
    id: "html",
    title: "HTML",
    category: "Web Technologies",
    description: "Learn the structure of modern web pages.",
    level: "Beginner",
  },
  {
    id: "css",
    title: "CSS",
    category: "Web Technologies",
    description: "Learn how to style and design websites.",
    level: "Beginner",
  },
  {
    id: "responsive-design",
    title: "Responsive Web Design",
    category: "Web Technologies",
    description: "Build websites that work across phones, tablets, and desktops.",
    level: "Beginner",
  },
  {
    id: "react",
    title: "React",
    category: "Web Technologies",
    description: "Build modern user interfaces with React.",
    level: "Intermediate",
  },
  {
    id: "nodejs",
    title: "Node.js",
    category: "Web Technologies",
    description: "Build backend applications using Node.js.",
    level: "Intermediate",
  },
  {
    id: "express",
    title: "Express.js",
    category: "Web Technologies",
    description: "Build APIs and web servers with Express.",
    level: "Intermediate",
  },
  {
    id: "rest-api",
    title: "REST APIs",
    category: "Web Technologies",
    description: "Understand and build RESTful APIs.",
    level: "Intermediate",
  },
  {
    id: "nextjs",
    title: "Next.js",
    category: "Web Technologies",
    description: "Build full-stack React applications with Next.js.",
    level: "Intermediate",
  },
  {
    id: "tailwind",
    title: "Tailwind CSS",
    category: "Web Technologies",
    description: "Build modern interfaces using utility-first CSS.",
    level: "Beginner",
  },
  {
    id: "web-security",
    title: "Web Security",
    category: "Web Technologies",
    description: "Learn the fundamentals of securing web applications.",
    level: "Intermediate",
  },
  {
    id: "authentication",
    title: "Web Authentication",
    category: "Web Technologies",
    description: "Learn login, sessions, tokens, and authentication systems.",
    level: "Intermediate",
  },
  {
    id: "websockets",
    title: "WebSockets",
    category: "Web Technologies",
    description: "Build real-time applications using WebSockets.",
    level: "Advanced",
  },
  {
    id: "pwa",
    title: "Progressive Web Apps",
    category: "Web Technologies",
    description: "Build installable and offline-capable web applications.",
    level: "Intermediate",
  },
  {
    id: "frontend-projects",
    title: "Frontend Projects",
    category: "Web Technologies",
    description: "Build real-world frontend projects.",
    level: "Intermediate",
  },
  {
    id: "fullstack",
    title: "Full-Stack Development",
    category: "Web Technologies",
    description: "Combine frontend and backend technologies to build complete applications.",
    level: "Advanced",
  },

  // =========================
  // DATABASES — 7 COURSES
  // =========================

  {
    id: "mongodb",
    title: "MongoDB",
    category: "Databases",
    description: "Learn NoSQL database development with MongoDB.",
    level: "Beginner",
  },
  {
    id: "sql",
    title: "SQL Fundamentals",
    category: "Databases",
    description: "Learn how relational databases store and query data.",
    level: "Beginner",
  },
  {
    id: "postgresql",
    title: "PostgreSQL",
    category: "Databases",
    description: "Learn advanced relational database development.",
    level: "Intermediate",
  },
  {
    id: "mysql",
    title: "MySQL",
    category: "Databases",
    description: "Build applications using MySQL databases.",
    level: "Beginner",
  },
  {
    id: "firebase",
    title: "Firebase",
    category: "Databases",
    description: "Build applications using Firebase services.",
    level: "Beginner",
  },
  {
    id: "database-design",
    title: "Database Design",
    category: "Databases",
    description: "Learn how to design scalable and efficient databases.",
    level: "Intermediate",
  },
  {
    id: "database-security",
    title: "Database Security",
    category: "Databases",
    description: "Learn how to protect application databases and data.",
    level: "Advanced",
  },

  // =========================
  // CLOUD ENGINEERING — PRIMARY COURSE
  // =========================

  {
    id: "cloud-engineering",
    title: "Cloud Engineering",
    category: "Cloud Engineering",
    description: "Learn cloud platforms, infrastructure, deployment, security, and reliable operations from the ground up.",
    level: "Beginner → Advanced",
  },

  // =========================
  // DEVOPS — 4 COURSES
  // =========================

  {
    id: "devops-foundations",
    title: "DevOps Foundations",
    category: "DevOps",
    description: "Learn the culture, practices, and automation behind reliable software delivery.",
    level: "Beginner",
  },
  {
    id: "linux-for-devops",
    title: "Linux for DevOps",
    category: "DevOps",
    description: "Use the Linux command line, processes, permissions, and logs with confidence.",
    level: "Beginner",
  },
  {
    id: "ci-cd-pipelines",
    title: "CI/CD Pipelines",
    category: "DevOps",
    description: "Build automated workflows that test, package, and ship applications safely.",
    level: "Intermediate",
  },
  {
    id: "infrastructure-as-code",
    title: "Infrastructure as Code",
    category: "DevOps",
    description: "Manage repeatable infrastructure with declarative configuration and reviewable changes.",
    level: "Advanced",
  },

  // =========================
  // CYBER SECURITY — 4 COURSES
  // =========================

  {
    id: "cybersecurity-fundamentals",
    title: "Cyber Security Fundamentals",
    category: "Cyber Security",
    description: "Build a practical foundation in threats, risk, defense, and secure behavior.",
    level: "Beginner",
  },
  {
    id: "network-security",
    title: "Network Security",
    category: "Cyber Security",
    description: "Understand how networks are protected with segmentation, firewalls, and monitoring.",
    level: "Intermediate",
  },
  {
    id: "ethical-hacking-basics",
    title: "Ethical Hacking Basics",
    category: "Cyber Security",
    description: "Learn authorized security testing, reconnaissance, and responsible reporting.",
    level: "Intermediate",
  },
  {
    id: "identity-access-management",
    title: "Identity and Access Management",
    category: "Cyber Security",
    description: "Design safer authentication, authorization, roles, and least-privilege access.",
    level: "Intermediate",
  },

  // =========================
  // MOBILE DEVELOPMENT — 4 COURSES
  // =========================

  {
    id: "mobile-development-foundations",
    title: "Mobile Development Foundations",
    category: "Mobile Development",
    description: "Learn mobile UI structure, navigation, state, and the app development lifecycle.",
    level: "Beginner",
  },
  {
    id: "android-with-kotlin",
    title: "Android with Kotlin",
    category: "Mobile Development",
    description: "Build Android screens and interactions with Kotlin and modern app patterns.",
    level: "Intermediate",
  },
  {
    id: "ios-with-swift",
    title: "iOS with Swift",
    category: "Mobile Development",
    description: "Create iOS interfaces and app logic using Swift and SwiftUI concepts.",
    level: "Intermediate",
  },
  {
    id: "react-native",
    title: "React Native",
    category: "Mobile Development",
    description: "Build cross-platform mobile experiences with React Native components and state.",
    level: "Intermediate",
  },

  // =========================
  // GAME DEVELOPMENT — 4 COURSES
  // =========================

  {
    id: "game-development-foundations",
    title: "Game Development Foundations",
    category: "Game Development",
    description: "Learn the game loop, player input, scenes, assets, and interactive systems.",
    level: "Beginner",
  },
  {
    id: "game-design",
    title: "Game Design Principles",
    category: "Game Development",
    description: "Design engaging game rules, feedback loops, difficulty curves, and player goals.",
    level: "Beginner",
  },
  {
    id: "unity-fundamentals",
    title: "Unity Fundamentals",
    category: "Game Development",
    description: "Explore scenes, game objects, components, prefabs, and scripts in Unity.",
    level: "Intermediate",
  },
  {
    id: "game-programming",
    title: "Game Programming",
    category: "Game Development",
    description: "Program movement, collisions, state machines, and gameplay systems.",
    level: "Intermediate",
  },

  // =========================
  // SYSTEM DESIGN — 4 COURSES
  // =========================

  {
    id: "system-design-foundations",
    title: "System Design Foundations",
    category: "System Design",
    description: "Learn how to break products into reliable services and make clear architecture choices.",
    level: "Intermediate",
  },
  {
    id: "scalability-and-performance",
    title: "Scalability and Performance",
    category: "System Design",
    description: "Design systems that handle growing traffic, data, and latency requirements.",
    level: "Intermediate",
  },
  {
    id: "distributed-systems",
    title: "Distributed Systems",
    category: "System Design",
    description: "Understand coordination, consistency, availability, and failure in distributed services.",
    level: "Advanced",
  },
  {
    id: "api-architecture",
    title: "API Architecture",
    category: "System Design",
    description: "Design maintainable APIs with clear contracts, versioning, security, and observability.",
    level: "Intermediate",
  },
];

export default courses;