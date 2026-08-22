// Store for managing user data
const createStore = () => {
  const initialState = {
    user: null,
    courses: [
      {
        id: 1,
        title: "HTML Fundamentals",
        category: "Frontend",
        progress: 0,
        lessons: 15,
        completed: 0,
        xp: 300,
        status: "in-progress",
      },
      {
        id: 2,
        title: "CSS & Styling",
        category: "Frontend",
        progress: 0,
        lessons: 18,
        completed: 0,
        xp: 350,
        status: "locked",
      },
      {
        id: 3,
        title: "JavaScript Basics",
        category: "Frontend",
        progress: 0,
        lessons: 24,
        completed: 0,
        xp: 500,
        status: "locked",
      },
    ],
    userProgress: {
      totalXP: 0,
      dayStreak: 0,
      coursesStarted: 0,
      badges: 0,
      level: 1,
      // Track last date when a daily challenge was completed to maintain streaks
      lastDailyChallengeDate: null,
    },
    dailyChallenges: [
      {
        id: 1,
        title: "Build a Todo App",
        description: "Create a simple todo application with add, delete, and mark complete functionality",
        difficulty: "Intermediate",
        xp: 150,
        timeLimit: "1h",
        completed: false,
        requirements: [
          "Create an input field to add new todos",
          "Display all todos in a list",
          "Add a delete button for each todo",
          "Add a checkbox to mark todos as complete",
          "Persist data using localStorage",
        ],
        starter: `// Create your todo app here
const todoApp = {
  todos: [],
  addTodo(task) {
    // Your code here
  },
  removeTodo(id) {
    // Your code here
  },
  toggleComplete(id) {
    // Your code here
  }
};`,
      },
      {
        id: 2,
        title: "Create a Weather App",
        description: "Fetch weather data from an API and display it beautifully",
        difficulty: "Intermediate",
        xp: 200,
        timeLimit: "2h",
        completed: false,
        requirements: [
          "Use OpenWeather API or similar",
          "Get user's location",
          "Display temperature and weather",
          "Show 5-day forecast",
          "Add search functionality",
        ],
        // Fixed starter string to avoid nested template backticks which break the build
        starter: `// Weather app starter
async function getWeather(city) {
  try {
    // Replace the URL below with a real API endpoint (e.g. OpenWeather)
    const response = await fetch("https://api.weather.example/data?city=" + encodeURIComponent(city));
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}`,
      },
    ],
    // Leaderboard: simple persistent leaderboard for this single-user demo app.
    // In a real app this would come from a backend with many users.
    leaderboard: [
      { rank: 1, name: "Alex Chen", xp: 4250, badges: 12, completed: 28 },
      { rank: 2, name: "Jordan Smith", xp: 3890, badges: 10, completed: 25 },
      { rank: 3, name: "Casey Rivera", xp: 3650, badges: 9, completed: 23 },
      { rank: 4, name: "Morgan Davis", xp: 3420, badges: 8, completed: 20 },
      // The "You" row will be kept in sync with userProgress and dailyChallenges
      { rank: 5, name: "You", xp: 0, badges: 0, completed: 0, isUser: true },
    ],
    learningPaths: {
      frontend: {
        title: "Frontend Developer",
        description: "Master HTML, CSS, JavaScript, and React",
        duration: "12 weeks",
        difficulty: "Beginner → Advanced",
        progress: 0,
        modules: [
          {
            id: 1,
            title: "HTML Fundamentals",
            duration: "2 weeks",
            lessons: 15,
            xp: 300,
            status: "in-progress",
            progress: 0,
            lessons_list: [
              "HTML Structure & Semantics",
              "Forms & Input Elements",
              "Accessibility Best Practices",
            ],
          },
          {
            id: 2,
            title: "CSS & Styling",
            duration: "2 weeks",
            lessons: 18,
            xp: 350,
            status: "locked",
            progress: 0,
            lessons_list: [
              "CSS Selectors & Box Model",
              "Flexbox & Grid Layouts",
              "Responsive Design",
            ],
          },
          {
            id: 3,
            title: "JavaScript Basics",
            duration: "3 weeks",
            lessons: 24,
            xp: 500,
            status: "locked",
            progress: 0,
            lessons_list: [
              "Variables & Data Types",
              "Functions & Scope",
              "DOM Manipulation",
            ],
          },
          {
            id: 4,
            title: "React Fundamentals",
            duration: "3 weeks",
            lessons: 20,
            xp: 450,
            status: "locked",
            progress: 0,
            lessons_list: [
              "Components & JSX",
              "State & Props",
              "Hooks & Side Effects",
            ],
          },
          {
            id: 5,
            title: "Advanced React",
            duration: "2 weeks",
            lessons: 16,
            xp: 400,
            status: "locked",
            progress: 0,
            lessons_list: [
              "Context API",
              "Performance Optimization",
              "Testing Components",
            ],
          },
        ],
      },
      backend: {
        title: "Backend Developer",
        description: "Learn Node.js, Express, and databases",
        duration: "14 weeks",
        difficulty: "Intermediate → Advanced",
        progress: 0,
        modules: [
          {
            id: 1,
            title: "Node.js Basics",
            duration: "2 weeks",
            lessons: 14,
            xp: 300,
            status: "locked",
            progress: 0,
            lessons_list: [
              "Node.js Runtime",
              "NPM & Packages",
              "Async Programming",
            ],
          },
          {
            id: 2,
            title: "Express Framework",
            duration: "3 weeks",
            lessons: 20,
            xp: 400,
            status: "locked",
            progress: 0,
            lessons_list: [
              "Routing & Middleware",
              "REST APIs",
              "Error Handling",
            ],
          },
          {
            id: 3,
            title: "Databases",
            duration: "3 weeks",
            lessons: 18,
            xp: 380,
            status: "locked",
            progress: 0,
            lessons_list: [
              "MongoDB & Mongoose",
              "SQL Basics",
              "Database Design",
            ],
          },
        ],
      },
      fullstack: {
        title: "Full Stack Developer",
        description: "Combine frontend and backend skills",
        duration: "20 weeks",
        difficulty: "Advanced",
        progress: 0,
        modules: [],
      },
    },
    kaiConversations: [
      {
        id: 1,
        type: "kai",
        text: "Hi there! 👋 I'm Kai, your AI instructor. What would you like to learn today? I can help you with concepts, code problems, debugging, or project guidance.",
        timestamp: new Date(),
      },
    ],
  };

  // Store in localStorage
  const save = () => {
    localStorage.setItem("codelabStore", JSON.stringify(initialState));
  };

  const load = () => {
    try {
      const stored = localStorage.getItem("codelabStore");
      if (stored) {
        Object.assign(initialState, JSON.parse(stored));
      } else {
        // Ensure the "You" leaderboard entry matches userProgress on first load
        _syncUserRowWithProgress();
      }
    } catch (error) {
      console.error("Could not load store:", error);
    }
  };

  const getState = () => initialState;

  const _recomputeLeaderboard = () => {
    // Ensure the user row exists and is synced
    _syncUserRowWithProgress();

    initialState.leaderboard = initialState.leaderboard
      .slice()
      .sort((a, b) => b.xp - a.xp)
      .map((entry, idx) => ({ ...entry, rank: idx + 1 }));
  };

  const _syncUserRowWithProgress = () => {
    const completedCount = initialState.dailyChallenges.filter(c => c.completed).length;
    const userRowIndex = initialState.leaderboard.findIndex(e => e.isUser);
    const userRow = {
      rank: 0,
      name: "You",
      xp: initialState.userProgress.totalXP,
      badges: initialState.userProgress.badges,
      completed: completedCount,
      isUser: true,
    };

    if (userRowIndex >= 0) {
      initialState.leaderboard[userRowIndex] = { ...initialState.leaderboard[userRowIndex], ...userRow };
    } else {
      initialState.leaderboard.push(userRow);
    }

    // Recompute ranks
    initialState.leaderboard = initialState.leaderboard
      .slice()
      .sort((a, b) => b.xp - a.xp)
      .map((entry, idx) => ({ ...entry, rank: idx + 1 }));
  };

  const updateUserProgress = (updates) => {
    initialState.userProgress = { ...initialState.userProgress, ...updates };
    _syncUserRowWithProgress();
    save();
  };

  const completeDailyChallenge = (challengeId) => {
    const challenge = initialState.dailyChallenges.find(c => c.id === challengeId);
    if (challenge && !challenge.completed) {
      challenge.completed = true;

      // Award XP once
      initialState.userProgress.totalXP += challenge.xp;

      // Update streak: if lastDailyChallengeDate is yesterday -> increment, if today -> do nothing, else reset to 1
      const today = new Date();
      const todayKey = today.toISOString().slice(0, 10);
      const lastKey = initialState.userProgress.lastDailyChallengeDate;

      if (!lastKey) {
        initialState.userProgress.dayStreak = (initialState.userProgress.dayStreak || 0) + 1;
      } else {
        const last = new Date(lastKey);
        const diffDays = Math.floor((today - last) / (1000 * 60 * 60 * 24));
        if (diffDays === 1) {
          initialState.userProgress.dayStreak = (initialState.userProgress.dayStreak || 0) + 1;
        } else if (diffDays === 0) {
          // already completed earlier today; do not increment
        } else {
          initialState.userProgress.dayStreak = 1;
        }
      }

      initialState.userProgress.lastDailyChallengeDate = todayKey;

      // Sync leaderboard user row
      _syncUserRowWithProgress();

      save();
      return true; // success
    }
    return false; // already completed or not found
  };

  const addKaiMessage = (text, type = "user") => {
    initialState.kaiConversations.push({
      id: initialState.kaiConversations.length + 1,
      type,
      text,
      timestamp: new Date(),
    });
    save();
  };

  const updateModuleProgress = (pathKey, moduleId, progress) => {
    const module = initialState.learningPaths[pathKey].modules.find(m => m.id === moduleId);
    if (module) {
      module.progress = progress;
      if (progress === 100) {
        module.status = "completed";
        initialState.userProgress.totalXP += module.xp;
      }
      save();
    }
  };

  const completeLesson = (courseId) => {
    const course = initialState.courses.find(c => c.id === courseId);
    if (course && course.completed < course.lessons) {
      course.completed += 1;
      course.progress = Math.round((course.completed / course.lessons) * 100);
      if (course.completed === course.lessons) {
        course.status = "completed";
        initialState.userProgress.totalXP += course.xp;
      }
      save();
    }
  };

  load();

  return {
    getState,
    save,
    load,
    updateUserProgress,
    completeDailyChallenge,
    addKaiMessage,
    updateModuleProgress,
    completeLesson,
  };
};

export default createStore;
