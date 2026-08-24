const DEFAULT_ENTRY_COURSE_ID = "python";

function entryCourseId() {
  return String(process.env.ENTRY_COURSE_ID || DEFAULT_ENTRY_COURSE_ID).trim() || DEFAULT_ENTRY_COURSE_ID;
}

function asPlainProgress(progress) {
  if (!progress) return null;
  return {
    courseId: String(progress.courseId || ""),
    courseTitle: progress.courseTitle || "",
    lessonsCompleted: Number(progress.lessonsCompleted) || 0,
    totalLessons: Number(progress.totalLessons) || 0,
    lastLessonIndex: Number(progress.lastLessonIndex) || 0,
    completedLessonIds: Array.isArray(progress.completedLessonIds) ? progress.completedLessonIds : [],
    lastAccessedAt: progress.lastAccessedAt || null,
    startedAt: progress.startedAt || null,
    completedAt: progress.completedAt || null,
    readyForNextCourse: Boolean(progress.readyForNextCourse),
    readinessSummary: progress.readinessSummary || "",
    readyAt: progress.readyAt || null,
    unlockedAt: progress.unlockedAt || null,
    unlockedBy: progress.unlockedBy || "",
  };
}

function isStarted(progress) {
  return Boolean(
    progress
    && (
      progress.startedAt
      || Number(progress.lessonsCompleted) > 0
      || Number(progress.lastLessonIndex) > 0
      || progress.lastAccessedAt
    )
  );
}

function isComplete(progress) {
  return Boolean(
    progress
    && Number(progress.totalLessons) > 0
    && Number(progress.lessonsCompleted) >= Number(progress.totalLessons)
  );
}

function isKaiReady(progress) {
  return Boolean(progress && progress.readyForNextCourse === true);
}

function buildLearnerCourseAccess(user, courses = []) {
  const activeCourses = (Array.isArray(courses) ? courses : [])
    .filter((course) => course && course.active !== false);
  const progressList = Array.isArray(user?.courseProgress) ? user.courseProgress : [];
  const progressById = new Map(progressList.map((progress) => [String(progress.courseId), progress]));
  const configuredEntryId = entryCourseId();
  const entryIndex = Math.max(
    0,
    activeCourses.findIndex((course) => String(course.id) === configuredEntryId)
  );

  // Existing learners may already have started a later course before the
  // teacher-led gate existed. Preserve their recorded path rather than
  // deleting or hiding work they have already completed.
  const highestRecordedIndex = activeCourses.reduce((highest, course, index) => {
    const progress = progressById.get(String(course.id));
    return isStarted(progress) ? Math.max(highest, index) : highest;
  }, -1);

  const access = [];
  let sequentialUnlockedIndex = entryIndex;

  for (let index = entryIndex + 1; index < activeCourses.length; index += 1) {
    const previousCourse = activeCourses[index - 1];
    const previousProgress = progressById.get(String(previousCourse.id));
    if (!isKaiReady(previousProgress)) break;
    sequentialUnlockedIndex = index;
  }

  const highestUnlockedIndex = Math.max(sequentialUnlockedIndex, highestRecordedIndex, entryIndex);

  activeCourses.forEach((course, index) => {
    const progressRecord = progressById.get(String(course.id));
    const progress = asPlainProgress(progressRecord);
    const unlocked = index <= highestUnlockedIndex;
    const completed = isComplete(progressRecord);
    const started = isStarted(progressRecord);
    const previousCourse = activeCourses[index - 1] || null;
    const previousProgress = previousCourse
      ? progressById.get(String(previousCourse.id))
      : null;

    let status = "locked";
    if (unlocked) status = completed ? "completed" : started ? "in-progress" : "available";

    access.push({
      courseId: String(course.id),
      courseTitle: course.title || "",
      category: course.category || "",
      level: course.level || "",
      index,
      isEntry: index === entryIndex,
      locked: !unlocked,
      status,
      progress,
      unlockReason: index === entryIndex
        ? "Start here with Kai."
        : unlocked
          ? (started ? "Kai is tracking your progress." : "Kai has opened this course for you.")
          : `Complete ${previousCourse?.title || "the previous course"} and wait for Kai to confirm you are ready.`,
      requiredCourseId: unlocked ? null : String(previousCourse?.id || ""),
      requiredCourseTitle: unlocked ? null : previousCourse?.title || null,
      previousCourseReady: index === entryIndex ? true : isKaiReady(previousProgress),
      unlockedAt: progress?.unlockedAt || (index <= highestRecordedIndex ? progress?.startedAt || null : null),
    });
  });

  const entryCourse = access[entryIndex] || access[0] || null;
  const activeCourseId = user?.currentCourse?.id ? String(user.currentCourse.id) : null;
  const activeCourse = activeCourseId
    ? access.find((course) => course.courseId === activeCourseId) || null
    : null;
  const nextLockedCourse = access.find((course) => course.locked) || null;

  return {
    entryCourse,
    activeCourse,
    nextLockedCourse,
    courses: access,
  };
}

function findCourseAccess(courseAccess, courseId) {
  return courseAccess?.courses?.find((course) => String(course.courseId) === String(courseId)) || null;
}

module.exports = {
  DEFAULT_ENTRY_COURSE_ID,
  entryCourseId,
  asPlainProgress,
  isStarted,
  isComplete,
  isKaiReady,
  buildLearnerCourseAccess,
  findCourseAccess,
};
