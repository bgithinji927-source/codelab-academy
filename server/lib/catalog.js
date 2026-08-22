const path = require("path");
const { pathToFileURL } = require("url");
const CourseOverride = require("../models/CourseOverride");
const LessonOverride = require("../models/LessonOverride");

let staticCoursesPromise;
let staticLessonsPromise;

async function getStaticCourses() {
  if (!staticCoursesPromise) {
    staticCoursesPromise = import(pathToFileURL(path.join(__dirname, "../../src/data/course.js")).href)
      .then((module) => module.default || module.courses || []);
  }
  return staticCoursesPromise;
}

async function getStaticLessons() {
  if (!staticLessonsPromise) {
    staticLessonsPromise = import(pathToFileURL(path.join(__dirname, "../../src/data/lessons.js")).href)
      .then((module) => module.default || module.lessons || {});
  }
  return staticLessonsPromise;
}

async function getCatalogCourses({ includeInactive = false } = {}) {
  const [staticCourses, overrides] = await Promise.all([
    getStaticCourses(),
    CourseOverride.find({}).lean(),
  ]);
  const overrideMap = new Map(overrides.map((override) => [override.courseId, override]));

  const merged = staticCourses.map((course) => {
    const override = overrideMap.get(course.id);
    return {
      ...course,
      ...(override
        ? {
            title: override.title || course.title,
            description: override.description || course.description,
            category: override.category || course.category,
            level: override.level || course.level,
            active: override.active !== false,
            overrideId: String(override._id),
          }
        : { active: true }),
    };
  });

  if (!includeInactive) return merged.filter((course) => course.active !== false);
  return merged;
}

async function getCatalogLessons(courseId, { includeInactive = false } = {}) {
  const [staticLessons, overrides] = await Promise.all([
    getStaticLessons(),
    LessonOverride.find({ courseId }).lean(),
  ]);
  const baseLessons = staticLessons[courseId] || [];
  const overrideMap = new Map(overrides.map((override) => [override.lessonId, override]));

  const merged = baseLessons.map((lesson) => {
    const override = overrideMap.get(lesson.id);
    return {
      ...lesson,
      ...(override
        ? {
            title: override.title || lesson.title,
            description: override.description || lesson.description,
            level: override.level || lesson.level,
            estimatedTime: override.estimatedTime || lesson.estimatedTime,
            objectives: override.objectives || lesson.objectives,
            sections: override.sections || lesson.sections,
            ...(override.exampleCode || override.challengeInstructions || override.starterCode || override.quizQuestion || override.quizOptions || override.quizAnswer
              ? {
                  sections: (override.sections || lesson.sections || []).map((section) => ({
                    ...section,
                    ...(section.type === "example" && override.exampleCode ? { code: override.exampleCode } : {}),
                    ...(section.type === "challenge" && override.challengeInstructions ? { instructions: override.challengeInstructions } : {}),
                    ...(section.type === "challenge" && override.starterCode ? { starterCode: override.starterCode } : {}),
                    ...(section.type === "quiz" && override.quizQuestion ? { question: override.quizQuestion } : {}),
                    ...(section.type === "quiz" && override.quizOptions ? { options: override.quizOptions } : {}),
                    ...(section.type === "quiz" && override.quizAnswer ? { answer: override.quizAnswer } : {}),
                  })),
                }
              : {}),
            active: override.active !== false,
            overrideId: String(override._id),
          }
        : { active: true }),
    };
  });

  if (!includeInactive) return merged.filter((lesson) => lesson.active !== false);
  return merged;
}

module.exports = {
  getStaticCourses,
  getStaticLessons,
  getCatalogCourses,
  getCatalogLessons,
};
