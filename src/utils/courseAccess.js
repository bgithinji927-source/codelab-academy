export const ENTRY_COURSE_ID = "python";

export function buildFallbackCourseAccess(courseCatalog = []) {
  const activeCourses = (courseCatalog || []).filter((course) => course && course.active !== false);
  const entryIndex = Math.max(0, activeCourses.findIndex((course) => String(course.id) === ENTRY_COURSE_ID));
  const courses = activeCourses.map((course, index) => ({
    courseId: String(course.id),
    courseTitle: course.title || "",
    category: course.category || "",
    level: course.level || "",
    index,
    isEntry: index === entryIndex,
    locked: index !== entryIndex,
    status: index === entryIndex ? "available" : "locked",
    progress: null,
    unlockReason: index === entryIndex
      ? "Start here with Kai."
      : `Complete ${activeCourses[index - 1]?.title || "the previous course"} and wait for Kai to confirm you are ready.`,
    requiredCourseId: index === entryIndex ? null : String(activeCourses[index - 1]?.id || ""),
    requiredCourseTitle: index === entryIndex ? null : activeCourses[index - 1]?.title || null,
    previousCourseReady: index === entryIndex,
  }));

  return {
    entryCourse: courses[entryIndex] || courses[0] || null,
    activeCourse: null,
    nextLockedCourse: courses.find((course) => course.locked) || null,
    courses,
  };
}

export function findCourseAccess(courseAccess, courseId) {
  return courseAccess?.courses?.find((item) => String(item.courseId) === String(courseId)) || null;
}
