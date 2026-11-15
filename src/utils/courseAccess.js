export const ENTRY_COURSE_ID = "python";

export function buildFallbackCourseAccess(courseCatalog = []) {
  const activeCourses = (courseCatalog || []).filter((course) => course && course.active !== false);
  const entryIndex = Math.max(0, activeCourses.findIndex((course) => String(course.id) === ENTRY_COURSE_ID));
  const courses = activeCourses.map((course, index) => {
    const isOpen = course.enrollmentStatus === "open";
    return {
      courseId: String(course.id),
      courseTitle: course.title || "",
      category: course.category || "",
      level: course.level || "",
      index,
      isEntry: index === entryIndex,
      locked: !isOpen,
      status: isOpen ? "available" : "coming-soon",
      progress: null,
      enrollmentStatus: course.enrollmentStatus || "coming-soon",
      unlockReason: isOpen
        ? (index === entryIndex ? "Start here with Kai." : "This course is open. Lessons unlock one at a time with Kai.")
        : "Coming soon. Join the waitlist to be notified when this course opens.",
      requiredCourseId: null,
      requiredCourseTitle: null,
      previousCourseReady: isOpen,
    };
  });

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
