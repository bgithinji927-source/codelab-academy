import { useState } from "react";
import {

  ArrowLeft,
  ArrowRight,
  BookOpen,
  Code2,
  Database,
  Globe,
  Bot,
  Wrench,
  Cpu,
  Layers3,
  Boxes,
  ShieldCheck,
  Smartphone,
  Gamepad2,
} from "lucide-react";

import courses from "../data/course";
import CourseLearn from "./CourseLearn";
import "./Courses.css";

const categories = [
  {
    name: "Coding",
    description: "Python, JavaScript, Java, C++, and more.",
    icon: Code2,
    accent: "purple",
  },
  {
    name: "Tech Engines",
    description: "Understand the systems that power modern technology.",
    icon: Cpu,
    accent: "blue",
  },
  {
    name: "AI Tools",
    description: "Learn practical tools for building with artificial intelligence.",
    icon: Bot,
    accent: "pink",
  },
  {
    name: "Developer Tools",
    description: "Master the tools developers use every day.",
    icon: Wrench,
    accent: "orange",
  },
  {
    name: "Web Technologies",
    description: "Build modern websites and full-stack applications.",
    icon: Globe,
    accent: "green",
  },
  {
    name: "Databases",
    description: "Store, query, secure, and scale application data.",
    icon: Database,
    accent: "indigo",
  },
  {
    name: "DevOps",
    description: "Automate testing, deployment, infrastructure, and operations.",
    icon: Boxes,
    accent: "green",
  },
  {
    name: "Cyber Security",
    description: "Protect systems, networks, identities, and application data.",
    icon: ShieldCheck,
    accent: "blue",
  },
  {
    name: "Mobile Development",
    description: "Build useful Android, iOS, and cross-platform mobile apps.",
    icon: Smartphone,
    accent: "pink",
  },
  {
    name: "Game Development",
    description: "Design and program interactive games and real-time experiences.",
    icon: Gamepad2,
    accent: "orange",
  },
  {
    name: "System Design",
    description: "Design scalable services, APIs, and distributed systems.",
    icon: Boxes,
    accent: "indigo",
  },
];

function Courses({ initialCategory = null, onBack }) {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  if (selectedCourse) {
    return (
      <CourseLearn
        course={selectedCourse}
        onBack={() => setSelectedCourse(null)}
      />
    );
  }

  const activeCategory = categories.find(
    (category) => category.name === selectedCategory
  );
  const visibleCourses = selectedCategory
    ? courses.filter((course) => course.category === selectedCategory)
    : [];
  const ActiveIcon = activeCategory?.icon || Layers3;

  const selectCategory = (categoryName) => {
    setSelectedCategory(categoryName);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="courses-page">
      <header className="courses-navbar">
        <button
          type="button"
          className="courses-back-button"
          onClick={onBack}
        >
          <ArrowLeft size={17} />
          Back
        </button>

        <div className="courses-logo">
          <span className="code">code</span>
          <span className="lab">Lab</span>
          <small>ACADEMY</small>
        </div>

        <div className="courses-navbar-spacer" />
      </header>

      <section className="courses-hero">
        <div className="courses-hero-content">
          <div className="courses-hero-icon">
            <ActiveIcon size={30} />
          </div>
          <span className="courses-eyebrow">
            {selectedCategory ? "SUBCOURSE LIBRARY" : "LEARNING LIBRARY"}
          </span>
          <h1>
            {selectedCategory ? `${selectedCategory} Courses` : "Explore All Courses"}
          </h1>
          <p>
            {selectedCategory
              ? `${visibleCourses.length} structured courses to help you build practical skills in ${selectedCategory.toLowerCase()}.`
              : "Choose a category from the sidebar to explore focused courses, guided lessons, and practical projects."}
          </p>
        </div>
      </section>

      <div className="courses-layout">
        <aside className="category-sidebar" aria-label="Course categories">
          <div className="category-sidebar-heading">
            <span>Browse library</span>
            <strong>Categories</strong>
          </div>

          <nav className="category-nav">
            {categories.map((category) => {
              const Icon = category.icon;
              const count = courses.filter(
                (course) => course.category === category.name
              ).length;

              return (
                <button
                  type="button"
                  key={category.name}
                  className={`category-button ${
                    selectedCategory === category.name ? "active" : ""
                  }`}
                  onClick={() => selectCategory(category.name)}
                >
                  <span className={`category-button-icon ${category.accent}`}>
                    <Icon size={18} />
                  </span>
                  <span className="category-button-copy">
                    <strong>{category.name}</strong>
                    <small>{count} courses</small>
                  </span>
                  <ArrowRight size={15} className="category-arrow" />
                </button>
              );
            })}
          </nav>
        </aside>

        <main className="courses-container">
          {!selectedCategory ? (
            <section className="category-overview">
              <div className="category-overview-heading">
                <div>
                  <span className="section-kicker">START HERE</span>
                  <h2>What do you want to learn?</h2>
                  <p>Select a category to see its available courses.</p>
                </div>
                <Layers3 size={28} />
              </div>

              <div className="category-overview-grid">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const count = courses.filter(
                    (course) => course.category === category.name
                  ).length;

                  return (
                    <button
                      type="button"
                      className="category-overview-card"
                      key={category.name}
                      onClick={() => selectCategory(category.name)}
                    >
                      <span className={`overview-icon ${category.accent}`}>
                        <Icon size={24} />
                      </span>
                      <span className="overview-card-copy">
                        <strong>{category.name}</strong>
                        <span>{category.description}</span>
                        <small>{count} courses available</small>
                      </span>
                      <ArrowRight size={18} />
                    </button>
                  );
                })}
              </div>
            </section>
          ) : (
            <section className="subcourse-page">
              <div className="subcourse-heading">
                <div>
                  <button
                    type="button"
                    className="back-to-categories"
                    onClick={() => setSelectedCategory(null)}
                  >
                    <ArrowLeft size={15} />
                    All categories
                  </button>
                  <div className="course-category-title">
                    <div className="course-category-icon">
                      <ActiveIcon size={22} />
                    </div>
                    <div>
                      <h2>{selectedCategory}</h2>
                      <p>{visibleCourses.length} courses available</p>
                    </div>
                  </div>
                </div>
                <span className="subcourse-count">{visibleCourses.length} COURSES</span>
              </div>

              <div className="course-grid">
                {visibleCourses.map((course) => (
                  <article className="course-card" key={course.id}>
                    <div className="course-card-icon">
                      <ActiveIcon size={28} />
                    </div>
                    <div className="course-card-content">
                      <span className="course-level">
                        {course.level || "Beginner"}
                      </span>
                      <h3>{course.title}</h3>
                      <p>{course.description}</p>
                      <button
                        type="button"
                        className="start-course-button"
                        onClick={() => setSelectedCourse(course)}
                      >
                        Start Learning
                        <ArrowRight size={17} />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

export default Courses;
