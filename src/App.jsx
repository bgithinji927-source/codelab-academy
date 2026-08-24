import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Courses from "./pages/Courses";
import AdminDashboard from "./pages/AdminDashboard";
import ThemeToggle from "./components/ThemeToggle";
import {
  AboutPage,
  AiTutorPage,
  ChallengesPage,
  DemoPage,
  PricingPage,
  RoadmapsPage,
} from "./pages/PublicPages";
import { applyAppearance, appearanceStorageKey, normalizeAppearance } from "./utils/appearance";

const PUBLIC_PATHS = new Set(["/ai-tutor", "/roadmaps", "/challenges", "/pricing", "/about", "/demo"]);

const categories = [
  {
    icon: "</>",
    title: "Coding",
    description: "Python, JavaScript, Java & more",
    courses: "12 Courses",
  },
  {
    icon: "⚙",
    title: "Tech Engines",
    description: "Game, Search, Browser, AI & more",
    courses: "8 Courses",
  },
  {
    icon: "☁",
    title: "Cloud Engineering",
    description: "AWS, Azure, GCP, containers & infrastructure",
    courses: "12 Courses",
  },
  {
    icon: "🤖",
    title: "AI Tools",
    description: "Learn the tools that power AI",
    courses: "20 Courses",
  },
  {
    icon: "🛠",
    title: "Developer Tools",
    description: "Git, Docker, VS Code & more",
    courses: "10 Courses",
  },
  {
    icon: "◎",
    title: "Web Technologies",
    description: "HTML, CSS, React, Node.js & more",
    courses: "15 Courses",
  },
  {
    icon: "▣",
    title: "Databases",
    description: "SQL, NoSQL, performance & production data",
    courses: "19 Courses",
  },
  {
    icon: "⌘",
    title: "DevOps",
    description: "Automation, CI/CD, Linux & infrastructure",
    courses: "4 Courses",
  },
  {
    icon: "◈",
    title: "Cyber Security",
    description: "Threats, networks, identity & defense",
    courses: "20 Courses",
  },
  {
    icon: "▯",
    title: "Mobile Development",
    description: "Android, iOS, React Native & more",
    courses: "4 Courses",
  },
  {
    icon: "◇",
    title: "Game Development",
    description: "Game design, Unity & gameplay systems",
    courses: "4 Courses",
  },
  {
    icon: "◎",
    title: "System Design",
    description: "Scalable services, APIs & distributed systems",
    courses: "4 Courses",
  },
];

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isAdminPath, setIsAdminPath] = useState(() => window.location.pathname.replace(/\/+$/, "") === "/admin");
  const [publicPath, setPublicPath] = useState(() => {
    const path = window.location.pathname.replace(/\/+$/, "") || "/";
    return PUBLIC_PATHS.has(path) ? path : null;
  });
  const [showSignup, setShowSignup] = useState(false);
  const [user, setUser] = useState(null);
  const [showCourses, setShowCourses] = useState(() => window.location.pathname.replace(/\/+$/, "") === "/courses");
  const [visibleCategories, setVisibleCategories] = useState(categories);
  const [adminLoginRequested, setAdminLoginRequested] = useState(false);

  useEffect(() => {
    let mounted = true;
    fetch("/api/catalog/courses")
      .then((response) => response.json())
      .then((data) => {
        if (!mounted || !data.success || !Array.isArray(data.courses)) return;
        const counts = data.courses.reduce((result, course) => {
          result[course.category] = (result[course.category] || 0) + 1;
          return result;
        }, {});
        setVisibleCategories((current) => current.map((category) => ({
          ...category,
          courses: `${counts[category.title] || 0} Courses`,
        })));
      })
      .catch((error) => console.error("Failed to load public course counts:", error));
    return () => { mounted = false; };
  }, []);

  useEffect(() => {
    const handleHistoryChange = () => {
      const path = window.location.pathname.replace(/\/+$/, "") || "/";
      setIsAdminPath(path === "/admin");
      setPublicPath(PUBLIC_PATHS.has(path) ? path : null);
      setShowCourses(path === "/courses");
    };
    window.addEventListener("popstate", handleHistoryChange);
    return () => window.removeEventListener("popstate", handleHistoryChange);
  }, []);

  const navigatePublic = (path) => {
    const nextPath = path === "/" ? "/" : path;
    window.history.pushState({}, "", nextPath);
    setPublicPath(PUBLIC_PATHS.has(nextPath) ? nextPath : null);
    setIsAdminPath(nextPath === "/admin");
    if (nextPath === "/courses") setShowCourses(true);
    else setShowCourses(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const leaveAdminPath = () => {
    sessionStorage.removeItem("codelabAdminReturn");
    window.history.pushState({}, "", "/");
    setIsAdminPath(false);
    setPublicPath(null);
  };

  const startAdminLogin = () => {
    sessionStorage.setItem("codelabAdminReturn", "1");
    localStorage.removeItem("codelabUser");
    localStorage.removeItem("codelabToken");
    window.history.pushState({}, "", "/");
    setUser(null);
    setIsAdminPath(false);
    setAdminLoginRequested(true);
    setShowLogin(true);
  };

  // ================================
  // RESTORE USER
  // ================================

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem("codelabUser");

      if (savedUser) {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
      }
    } catch (error) {
      console.error("Could not restore user:", error);
      localStorage.removeItem("codelabUser");
    }
  }, []);

  useEffect(() => {
    const savedAppearance = localStorage.getItem(appearanceStorageKey(user?.id))
      || localStorage.getItem("codelabAppearance:guest")
      || user?.appearancePreset;
    applyAppearance(normalizeAppearance(savedAppearance));
  }, [user]);

  const handleUserUpdated = (updatedUser) => {
    localStorage.setItem("codelabUser", JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  // ================================
  // LOGIN
  // ================================

  const handleLoginSuccess = (loggedInUser) => {
    localStorage.setItem(
      "codelabUser",
      JSON.stringify(loggedInUser)
    );

    setUser(loggedInUser);
    setShowLogin(false);
    const shouldReturnToAdmin = adminLoginRequested || sessionStorage.getItem("codelabAdminReturn") === "1";
    if (shouldReturnToAdmin) {
      sessionStorage.removeItem("codelabAdminReturn");
      window.history.pushState({}, "", "/admin");
      setIsAdminPath(true);
      setAdminLoginRequested(false);
    }
  };

  // ================================
  // SIGNUP
  // ================================

  const handleSignupSuccess = (newUser) => {
    // The client store is shared by the browser, so never carry another
    // account's learning progress into a newly created account.
    localStorage.removeItem("codelabStore");
    localStorage.setItem("codelabUser", JSON.stringify(newUser));
    setUser(newUser);
    setShowSignup(false);
  };

  // ================================
  // LOGOUT
  // ================================

  const handleLogout = () => {
    localStorage.removeItem("codelabUser");
    localStorage.removeItem("codelabStore");

    setUser(null);
    setShowCourses(false);
    setAdminLoginRequested(false);
  };

  // ================================
  // OPEN COURSES
  // ================================

  const openCourses = (category = null) => {
    const selectedCategory = typeof category === "string" ? category : null;
    setPublicPath(null);
    window.history.pushState({}, "", "/courses");
    setShowCourses(selectedCategory ? { category: selectedCategory } : true);
  };

  // ================================
  // CLOSE COURSES
  // ================================

  const closeCourses = () => {
    setShowCourses(false);
    navigatePublic("/");
  };

  const renderPublicWithAuth = (page) => (
    <>
      {page}
      {showLogin && !user && <Login onClose={() => setShowLogin(false)} onLoginSuccess={handleLoginSuccess} />}
      {showSignup && !user && <Signup onClose={() => setShowSignup(false)} onSignupSuccess={handleSignupSuccess} />}
    </>
  );

  // ================================
  // ADMIN PAGE
  // ================================

  if (isAdminPath && user) {
    if (user.isAdmin || user.role === "admin") {
      return <AdminDashboard user={user} onBack={leaveAdminPath} onReauthenticate={startAdminLogin} />;
    }

    return (
      <div className="admin-route-gate">
        <div className="admin-route-gate-card">
          <div className="admin-route-gate-icon">!</div>
          <span className="admin-route-gate-kicker">ACCESS DENIED</span>
          <h1>Administrator access required</h1>
          <p>This account is not configured as an administrator.</p>
          <div className="admin-route-gate-actions"><button type="button" onClick={startAdminLogin}>Sign in as administrator</button><button type="button" className="admin-route-gate-secondary" onClick={leaveAdminPath}>Return to CodeLab Academy</button></div>
        </div>
      </div>
    );
  }

  if (isAdminPath && !user) {
    return (
      <div className="admin-route-gate">
        <div className="admin-route-gate-card">
          <div className="admin-route-gate-icon">+</div>
          <span className="admin-route-gate-kicker">PROTECTED ADMIN AREA</span>
          <h1>Administrator sign-in required</h1>
          <p>Sign in with an account configured in the deployment’s ADMIN_EMAILS setting to continue.</p>
          <button type="button" onClick={startAdminLogin}>Open sign in</button>
        </div>
      </div>
    );
  }

  // ================================
  // PUBLIC PAGES
  // ================================

  if (publicPath === "/ai-tutor") {
    return renderPublicWithAuth(<AiTutorPage onNavigate={navigatePublic} onSignIn={() => setShowLogin(true)} onGetStarted={() => setShowSignup(true)} />);
  }

  if (publicPath === "/roadmaps") {
    return renderPublicWithAuth(<RoadmapsPage onNavigate={navigatePublic} onSignIn={() => setShowLogin(true)} onGetStarted={() => setShowSignup(true)} />);
  }

  if (publicPath === "/challenges") {
    return renderPublicWithAuth(<ChallengesPage onNavigate={navigatePublic} onSignIn={() => setShowLogin(true)} onGetStarted={() => setShowSignup(true)} />);
  }

  if (publicPath === "/pricing") {
    return renderPublicWithAuth(<PricingPage onNavigate={navigatePublic} onSignIn={() => setShowLogin(true)} onGetStarted={() => setShowSignup(true)} />);
  }

  if (publicPath === "/about") {
    return renderPublicWithAuth(<AboutPage onNavigate={navigatePublic} onSignIn={() => setShowLogin(true)} onGetStarted={() => setShowSignup(true)} />);
  }

  if (publicPath === "/demo") {
    return renderPublicWithAuth(<DemoPage onNavigate={navigatePublic} onSignIn={() => setShowLogin(true)} onGetStarted={() => setShowSignup(true)} />);
  }

  // ================================
  // COURSES PAGE
  // ================================

  if (showCourses) {
    return (
      <Courses
        initialCategory={showCourses.category || null}
        onBack={closeCourses}
        onSelectCourse={(course) => {
          console.log("Selected course:", course);
        }}
      />
    );
  }

  // ================================
  // DASHBOARD
  // ================================

  if (user) {
    return (
      <Dashboard
        user={user}
        onLogout={handleLogout}
        onViewCourses={openCourses}
        onUserUpdated={handleUserUpdated}
      />
    );
  }

  // ================================
  // HOMEPAGE
  // ================================

  return (
    <div className="app">

      {/* ================================
          NAVBAR
      ================================= */}

      <header className="navbar">

        <div className="logo">
          <div className="logo-text">
            <span className="code">code</span>
            <span className="lab">Lab</span>
            <small>ACADEMY</small>
          </div>
        </div>

        <nav className="nav-links">

          <button
            type="button"
            onClick={openCourses}
          >
            Courses
          </button>

          <button type="button" onClick={() => navigatePublic("/ai-tutor")}>
            AI Tutor (Kai)
          </button>

          <button type="button" onClick={() => navigatePublic("/roadmaps")}>
            Roadmaps
          </button>

          <button type="button" onClick={() => navigatePublic("/challenges")}>
            Challenges
          </button>

          <button type="button" onClick={() => navigatePublic("/pricing")}>
            Pricing
          </button>

          <button type="button" onClick={() => navigatePublic("/about")}>
            About
          </button>

        </nav>

        <div className="nav-actions">

          <ThemeToggle />

          <button
            type="button"
            className="sign-in"
            onClick={() => setShowLogin(true)}
          >
            Sign In
          </button>

          <button
            type="button"
            className="get-started"
            onClick={() => setShowSignup(true)}
          >
            Get Started
          </button>

        </div>

      </header>


      {/* ================================
          HERO
      ================================= */}

      <main>

        <section className="hero">

          <div className="hero-content">

            <div className="eyebrow">
              🚀 Learn. Practice. Build. Grow.
            </div>

            <h1>
              Master Technology
              <br />
              with <span>AI-Powered</span> Learning
            </h1>

            <p className="hero-description">
              codeLab Academy helps you learn the technologies of
              the future with interactive lessons, real-world
              projects, and your AI instructor, Kai.
            </p>

            <div className="hero-buttons">

              <button
                type="button"
                className="primary-button"
                onClick={() => setShowSignup(true)}
              >
                🚀 Get Started Free
              </button>

              <button
                type="button"
                className="secondary-button"
                onClick={() => navigatePublic("/demo")}
              >
                ▷ &nbsp; Watch Demo
              </button>

            </div>


            {/* FEATURES */}

            <div className="features">

              <div className="feature">

                <div className="feature-icon">
                  ▤
                </div>

                <div>
                  <strong>
                    Structured Lessons
                  </strong>

                  <p>
                    Step-by-step learning paths
                  </p>
                </div>

              </div>


              <div className="feature">

                <div className="feature-icon">
                  ◉
                </div>

                <div>
                  <strong>
                    AI Instructor Kai
                  </strong>

                  <p>
                    Learn with intelligent guidance
                  </p>
                </div>

              </div>


              <div className="feature">

                <div className="feature-icon">
                  🏆
                </div>

                <div>
                  <strong>
                    Earn XP & Badges
                  </strong>

                  <p>
                    Track progress and grow
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* ================================
              KAI
          ================================= */}

          <div
            className="hero-visual"
            id="kai"
          >

            <div className="code-floating code-one">
              {"{...}"}
            </div>

            <div className="code-floating code-two">
              {"</>"}
            </div>

            <div className="play-floating">
              ▶
            </div>

            <div className="kai-glow"></div>

            <div className="kai">

              <div className="kai-antenna"></div>

              <div className="kai-head">

                <div className="kai-face">

                  <div className="eye left"></div>

                  <div className="eye right"></div>

                  <div className="mouth">
                    ⌣
                  </div>

                </div>

              </div>

              <div className="kai-body">

                <div className="kai-chest">
                  &lt;/&gt;
                </div>

              </div>

              <div className="kai-arm left-arm"></div>

              <div className="kai-arm right-arm"></div>

            </div>


            <div className="kai-message">

              <h3>
                Hi! I'm Kai 👋
              </h3>

              <p>
                I'll guide you, teach you, and help you become
                a better developer.
              </p>

            </div>

          </div>

        </section>


        {/* ================================
            CATEGORIES
        ================================= */}

        <section
          className="categories"
          id="courses"
        >

          <div className="section-heading">

            <div>

              <h2>
                Explore Top Categories
              </h2>

              <p>
                Choose a path and start your journey
              </p>

            </div>


            {/* VIEW ALL COURSES */}

            <button
              type="button"
              className="view-all-courses"
              onClick={openCourses}
            >
              View All Courses →
            </button>

          </div>


          <div className="category-grid">

            {visibleCategories.map((category) => (

              <article
                className="category-card"
                key={category.title}
              >

                <div className="category-icon">
                  {category.icon}
                </div>

                <h3>
                  {category.title}
                </h3>

                <p>
                  {category.description}
                </p>

                <strong>
                  {category.courses}
                </strong>

              </article>

            ))}

          </div>

        </section>

      </main>


      {/* ================================
          LOGIN
      ================================= */}

      {showLogin && !user && (
        <Login
          onClose={() => setShowLogin(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      {showSignup && !user && (
        <Signup
          onClose={() => setShowSignup(false)}
          onSignupSuccess={handleSignupSuccess}
        />
      )}

    </div>
  );
}

export default App;
