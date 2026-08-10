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
} from "lucide-react";

import courses from "../data/course";
import CourseLearn from "./CourseLearn";
import "./Courses.css";

const categoryIcons = {
  Coding: Code2,
  "Tech Engines": Cpu,
  "AI Tools": Bot,
  "Developer Tools": Wrench,
  "Web Technologies": Globe,
  Databases: Database,
};

function Courses({ onBack }) {
  const [selectedCourse, setSelectedCourse] = useState(null);

  // ================================
  // OPEN COURSE
  // ================================

  if (selectedCourse) {
    return (
      <CourseLearn
        course={selectedCourse}
        onBack={() => setSelectedCourse(null)}
      />
    );
  }

  const categories = [
    "Coding",
    "Tech Engines",
    "AI Tools",
    "Developer Tools",
    "Web Technologies",
    "Databases",
  ];

  return (
    <div className="courses-page">

      {/* ================================
          NAVBAR
      ================================= */}

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

        <div />

      </header>

      {/* ================================
          HERO
      ================================= */}

      <section className="courses-hero">

        <div className="courses-hero-content">

          <div className="courses-hero-icon">
            <BookOpen size={30} />
          </div>

          <h1>
            Explore All Courses
          </h1>

          <p>
            Learn practical technology skills through structured
            lessons, real-world projects, challenges, and deeper
            guidance from Kai.
          </p>

        </div>

      </section>

      {/* ================================
          COURSES
      ================================= */}

      <section className="courses-container">

        {categories.map((category) => {

          const Icon = categoryIcons[category];

          const categoryCourses = courses.filter(
            (course) => course.category === category
          );

          return (
            <section
              className="course-category"
              key={category}
            >

              {/* CATEGORY HEADER */}

              <div className="course-category-heading">

                <div className="course-category-title">

                  <div className="course-category-icon">
                    <Icon size={22} />
                  </div>

                  <div>

                    <h2>
                      {category}
                    </h2>

                    <p>
                      {categoryCourses.length} courses available
                    </p>

                  </div>

                </div>

              </div>

              {/* COURSE CARDS */}

              {categoryCourses.length > 0 ? (

                <div className="course-grid">

                  {categoryCourses.map((course) => (

                    <article
                      className="course-card"
                      key={course.id}
                    >

                      <div className="course-card-icon">
                        <Icon size={28} />
                      </div>

                      <div className="course-card-content">

                        <span className="course-level">
                          {course.level || "Beginner"}
                        </span>

                        <h3>
                          {course.title}
                        </h3>

                        <p>
                          {course.description}
                        </p>

                        <button
                          type="button"
                          className="start-course-button"
                          onClick={() => {
                            console.log(
                              "Opening course:",
                              course.title
                            );

                            setSelectedCourse(course);
                          }}
                        >
                          Start Learning
                          <ArrowRight size={17} />
                        </button>

                      </div>

                    </article>

                  ))}

                </div>

              ) : (

                <div className="empty-category">

                  <p>
                    No courses available yet.
                  </p>

                </div>

              )}

            </section>
          );
        })}

      </section>

    </div>
  );
}

export default Courses;