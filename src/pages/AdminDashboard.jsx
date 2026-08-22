import { useEffect, useMemo, useState } from "react";
import {
  Activity,
  BookOpen,
  Check,
  ChevronDown,
  ChevronRight,
  ClipboardCheck,
  Database,
  Globe2,
  LayoutDashboard,
  LockKeyhole,
  Pencil,
  Plus,
  RefreshCw,
  Save,
  Settings,
  ShieldCheck,
  Trash2,
  UserRound,
  Users,
  X,
  Zap,
} from "lucide-react";
import fetchWithAuth from "../utils/fetchWithAuth";
import bundledCourseCatalog from "../data/course";
import bundledLessonCatalog from "../data/lessons";
import "./AdminDashboard.css";

const sections = [
  { id: "overview", label: "Overview", Icon: LayoutDashboard },
  { id: "users", label: "Users", Icon: Users },
  { id: "courses", label: "Courses & Lessons", Icon: BookOpen },
  { id: "challenges", label: "Daily Challenges", Icon: ClipboardCheck },
  { id: "settings", label: "Settings", Icon: Settings },
];

const emptyChallenge = {
  title: "",
  type: "short_answer",
  prompt: "",
  canonicalAnswer: "",
  choices: "",
  requirements: "",
  starter: "",
  xpReward: 10,
  difficulty: "easy",
  active: true,
};

function getLessonDraft(lesson) {
  const sections = lesson.sections || [];
  const example = sections.find((section) => section.type === "example");
  const challenge = sections.find((section) => section.type === "challenge");
  const quiz = sections.find((section) => section.type === "quiz");

  return {
    ...lesson,
    objectivesText: (lesson.objectives || []).join("\\n"),
    exampleCode: example?.code || "",
    challengeInstructions: challenge?.instructions || "",
    starterCode: challenge?.starterCode || "",
    quizQuestion: quiz?.question || "",
    quizOptionsText: (quiz?.options || []).join("\\n"),
    quizAnswer: quiz?.answer || "",
  };
}

const bundledAdminCourses = bundledCourseCatalog.map((course) => ({
  ...course,
  active: true,
  lessons: bundledLessonCatalog[course.id] || [],
}));

function AdminDashboard({ user, onBack }) {
  const [section, setSection] = useState("overview");
  const [summary, setSummary] = useState(null);
  const [databaseStatus, setDatabaseStatus] = useState(null);
  const [users, setUsers] = useState([]);
  const [usersStatus, setUsersStatus] = useState("loading");
  const [courses, setCourses] = useState(bundledAdminCourses);
  const [challenges, setChallenges] = useState([]);
  const [settings, setSettings] = useState(null);
  const [challengeForm, setChallengeForm] = useState(emptyChallenge);
  const [userSearch, setUserSearch] = useState("");
  const [courseSearch, setCourseSearch] = useState("");
  const [courseDrafts, setCourseDrafts] = useState({});
  const [lessonDrafts, setLessonDrafts] = useState({});
  const [expandedCourses, setExpandedCourses] = useState({});
  const [editingLesson, setEditingLesson] = useState(null);
  const [loading, setLoading] = useState(false);
  const [savingKey, setSavingKey] = useState("");
  const [notice, setNotice] = useState(null);

  const notify = (type, message) => {
    setNotice({ type, message });
    window.setTimeout(() => setNotice(null), 3200);
  };

  const loadBundledCatalog = async () => bundledAdminCourses;

  const setLoadedCourses = (loadedCourses) => {
    setCourses(loadedCourses);
    setExpandedCourses((current) => Object.keys(current).length > 0
      ? current
      : Object.fromEntries(loadedCourses.map((course) => [course.id, true])));
  };

  const loadAdminData = async () => {
    setLoading(true);
    setUsersStatus("loading");

    fetch("/api/health")
      .then((response) => response.json())
      .then((data) => {
        if (data.success && data.database) setDatabaseStatus(data.database);
      })
      .catch((error) => console.error("Could not read database health:", error));

    // Load the complete course/lesson inventory independently. A failure in a
    // secondary widget must never prevent the catalog from appearing.
    try {
      const coursesResponse = await fetchWithAuth("/api/admin/courses");
      const coursesData = await coursesResponse.json().catch(() => ({}));
      if (coursesResponse.status === 401 || coursesResponse.status === 403) {
        throw new Error("Administrator authorization is required");
      }
      if (coursesResponse.ok && coursesData.success && Array.isArray(coursesData.courses) && coursesData.courses.length > 0) {
        setLoadedCourses(coursesData.courses);
      } else {
        const bundledCourses = await loadBundledCatalog();
        setLoadedCourses(bundledCourses);
        notify("error", "Managed catalog unavailable; showing the built-in course and lesson catalog");
      }
    } catch (error) {
      if (error.message === "Administrator authorization is required") {
        notify("error", error.message);
      } else {
        try {
          const bundledCourses = await loadBundledCatalog();
          setLoadedCourses(bundledCourses);
          notify("error", "Managed catalog unavailable; showing the built-in course and lesson catalog");
        } catch (fallbackError) {
          notify("error", fallbackError.message || "Could not load course catalog");
        }
      }
    }

    try {
      const results = await Promise.allSettled([
        fetchWithAuth("/api/admin/summary"),
        fetchWithAuth("/api/admin/users"),
        fetchWithAuth("/api/admin/challenges"),
        fetchWithAuth("/api/admin/settings"),
      ]);
      const payloads = await Promise.all(results.map((result) => result.status === "fulfilled"
        ? result.value.json().catch(() => ({}))
        : Promise.resolve({})));
      const [summaryResult, usersResult, challengesResult, settingsResult] = results;
      const [summaryData, usersData, challengesData, settingsData] = payloads;
      const responses = [summaryResult, usersResult, challengesResult, settingsResult]
        .map((result) => result.status === "fulfilled" ? result.value : null)
        .filter(Boolean);

      if (responses.some((response) => response.status === 401 || response.status === 403)) {
        throw new Error("Administrator authorization is required");
      }
      if (summaryResult.status === "fulfilled" && summaryResult.value.ok && summaryData.success) {
        setSummary(summaryData.summary);
        setDatabaseStatus(summaryData.database || null);
      }
      if (usersResult.status === "fulfilled" && usersResult.value.ok && usersData.success) {
        setUsers(usersData.users || []);
        setUsersStatus("ready");
      } else {
        setUsersStatus("unavailable");
      }
      if (challengesResult.status === "fulfilled" && challengesResult.value.ok && challengesData.success) setChallenges(challengesData.challenges || []);
      if (settingsResult.status === "fulfilled" && settingsResult.value.ok && settingsData.success) setSettings(settingsData.settings);
    } catch (error) {
      notify("error", error.message || "Some admin controls could not be loaded");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAdminData();
  }, []);

  const filteredUsers = useMemo(() => {
    const query = userSearch.trim().toLowerCase();
    if (!query) return users;
    return users.filter((item) => `${item.name} ${item.email} ${item.role}`.toLowerCase().includes(query));
  }, [users, userSearch]);

  const filteredCourses = useMemo(() => {
    const query = courseSearch.trim().toLowerCase();
    if (!query) return courses;
    return courses.filter((course) => {
      const courseText = `${course.title} ${course.category} ${course.id}`.toLowerCase();
      const lessonText = (course.lessons || []).map((lesson) => `${lesson.title} ${lesson.id}`).join(" ").toLowerCase();
      return `${courseText} ${lessonText}`.includes(query);
    });
  }, [courses, courseSearch]);

  const updateUser = async (target, patch, action = "update") => {
    setSavingKey(`user-${target.id}`);
    try {
      const response = await fetchWithAuth(`/api/admin/users/${target.id}`, {
        method: "PATCH",
        body: JSON.stringify(patch),
      });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.message || "Could not update user");
      setUsers((current) => current.map((item) => item.id === target.id ? data.user : item));
      notify("success", action === "reset" ? "User progress reset" : "User updated");
    } catch (error) {
      notify("error", error.message || "Could not update user");
    } finally {
      setSavingKey("");
    }
  };

  const saveCourse = async (course) => {
    const draft = courseDrafts[course.id] || course;
    setSavingKey(`course-${course.id}`);
    try {
      const response = await fetchWithAuth(`/api/admin/courses/${course.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          title: draft.title,
          description: draft.description,
          category: draft.category,
          level: draft.level,
          active: draft.active,
        }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.message || "Could not save course");
      notify("success", `${draft.title} saved`);
      await loadAdminData();
    } catch (error) {
      notify("error", error.message || "Could not save course");
    } finally {
      setSavingKey("");
    }
  };

  const saveLesson = async (courseId, lesson) => {
    const key = `${courseId}:${lesson.id}`;
    const draft = lessonDrafts[key] || lesson;
    setSavingKey(`lesson-${key}`);
    try {
      const response = await fetchWithAuth(`/api/admin/courses/${courseId}/lessons/${lesson.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          title: draft.title,
          description: draft.description,
          estimatedTime: draft.estimatedTime,
          level: draft.level,
          objectives: String(draft.objectivesText || "").split("\n").map((line) => line.trim()).filter(Boolean),
          exampleCode: draft.exampleCode,
          challengeInstructions: draft.challengeInstructions,
          starterCode: draft.starterCode,
          quizQuestion: draft.quizQuestion,
          quizOptions: String(draft.quizOptionsText || "").split("\n").map((line) => line.trim()).filter(Boolean),
          quizAnswer: draft.quizAnswer,
          active: draft.active,
        }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.message || "Could not save lesson");
      notify("success", `${draft.title} saved`);
      setEditingLesson(null);
      await loadAdminData();
    } catch (error) {
      notify("error", error.message || "Could not save lesson");
    } finally {
      setSavingKey("");
    }
  };

  const createChallenge = async (event) => {
    event.preventDefault();
    setSavingKey("challenge-new");
    try {
      const choices = String(challengeForm.choices || "")
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
        .map((label, index) => ({ id: String.fromCharCode(97 + index), label }));
      const payload = {
        ...challengeForm,
        xpReward: Number(challengeForm.xpReward) || 0,
        requirements: String(challengeForm.requirements || "").split("\n").map((line) => line.trim()).filter(Boolean),
        choices,
      };
      const response = await fetchWithAuth("/api/admin/challenges", {
        method: "POST",
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.message || "Could not create challenge");
      setChallenges((current) => [data.challenge, ...current]);
      setChallengeForm(emptyChallenge);
      notify("success", "Daily challenge created");
      setSection("challenges");
    } catch (error) {
      notify("error", error.message || "Could not create challenge");
    } finally {
      setSavingKey("");
    }
  };

  const seedChallenges = async () => {
    setSavingKey("challenge-seed");
    try {
      const response = await fetchWithAuth("/api/admin/challenges/seed", { method: "POST", body: JSON.stringify({}) });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.message || "Could not seed challenges");
      setChallenges(data.challenges || []);
      notify("success", "Default challenge bank is ready");
      await loadAdminData();
    } catch (error) {
      notify("error", error.message || "Could not seed challenges");
    } finally {
      setSavingKey("");
    }
  };

  const toggleChallenge = async (challenge) => {
    setSavingKey(`challenge-${challenge.id}`);
    try {
      const response = await fetchWithAuth(`/api/admin/challenges/${challenge.id}`, {
        method: "PATCH",
        body: JSON.stringify({ active: !challenge.active }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.message || "Could not update challenge");
      setChallenges((current) => current.map((item) => item.id === challenge.id ? data.challenge : item));
      notify("success", challenge.active ? "Challenge archived" : "Challenge activated");
    } catch (error) {
      notify("error", error.message || "Could not update challenge");
    } finally {
      setSavingKey("");
    }
  };

  const deleteChallenge = async (challenge) => {
    if (!window.confirm(`Delete ${challenge.title}?`)) return;
    setSavingKey(`challenge-${challenge.id}`);
    try {
      const response = await fetchWithAuth(`/api/admin/challenges/${challenge.id}`, { method: "DELETE" });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.message || "Could not delete challenge");
      setChallenges((current) => current.filter((item) => item.id !== challenge.id));
      notify("success", "Challenge deleted");
    } catch (error) {
      notify("error", error.message || "Could not delete challenge");
    } finally {
      setSavingKey("");
    }
  };

  const saveSettings = async (event) => {
    event.preventDefault();
    setSavingKey("settings");
    try {
      const response = await fetchWithAuth("/api/admin/settings", {
        method: "PATCH",
        body: JSON.stringify(settings),
      });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.message || "Could not save settings");
      setSettings(data.settings);
      notify("success", "Platform settings saved");
    } catch (error) {
      notify("error", error.message || "Could not save settings");
    } finally {
      setSavingKey("");
    }
  };

  const pageTitle = section === "new-challenge"
    ? "Create Daily Challenge"
    : sections.find((item) => item.id === section)?.label || "Overview";

  const statCards = [
    { label: "Total Users", value: summary?.users ?? "—", Icon: Users },
    { label: "Active Users", value: summary?.activeUsers ?? "—", Icon: Activity },
    { label: "Live Courses", value: summary?.activeCourses ?? "—", Icon: BookOpen },
    { label: "Active Challenges", value: summary?.activeChallenges ?? "—", Icon: ClipboardCheck },
  ];

  if (loading && courses.length === 0) {
    return <div className="admin-page admin-loading"><RefreshCw className="admin-spin" size={28} /><p>Loading administrator controls...</p></div>;
  }

  return (
    <div className="admin-page">
      <header className="admin-topbar">
        <button type="button" className="admin-back" onClick={onBack}><ChevronRight size={17} className="admin-back-icon" /> Back to learner dashboard</button>
        <div className="admin-topbar-title"><ShieldCheck size={20} /><span>ADMIN CONTROL CENTER</span></div>
        <div className="admin-operator"><span className="admin-operator-dot" />{user?.name || user?.email || "Administrator"}</div>
      </header>

      <div className="admin-layout">
        <aside className="admin-sidebar">
          <div className="admin-brand"><span className="admin-brand-mark"><LockKeyhole size={18} /></span><div><strong>Control Room</strong><small>CodeLab Academy</small></div></div>
          <div className="admin-sidebar-label">PLATFORM MANAGEMENT</div>
          <nav className="admin-nav" aria-label="Admin sections">
            {sections.map(({ id, label, Icon }) => <button key={id} type="button" className={section === id ? "active" : ""} onClick={() => setSection(id)}><Icon size={17} /><span>{label}</span>{section === id && <ChevronRight size={15} />}</button>)}
          </nav>
          <div className="admin-sidebar-footer"><span>ADMIN SESSION</span><strong>{user?.email}</strong><small>Protected by server authorization</small></div>
        </aside>

        <main className="admin-main">
          <div className="admin-heading-row"><div><span className="admin-eyebrow">SYSTEM CONSOLE</span><h1>{pageTitle}</h1><p>Manage CodeLab Academy data and learner experiences from one protected interface.</p></div><button type="button" className="admin-refresh" onClick={loadAdminData}><RefreshCw size={16} /> Refresh data</button></div>

          {notice && <div className={`admin-notice ${notice.type}`}><Check size={16} />{notice.message}</div>}

          {section === "overview" && <section className="admin-section"><div className="admin-stat-grid">{statCards.map(({ label, value, Icon }) => <div className="admin-stat-card" key={label}><Icon size={21} /><div><strong>{value}</strong><span>{label}</span></div></div>)}</div><div className="admin-overview-grid"><article className="admin-panel admin-quick-panel"><div className="admin-panel-heading"><div><span className="admin-eyebrow">QUICK CONTROL</span><h2>What do you want to manage?</h2></div><Settings size={22} /></div><div className="admin-quick-grid">{sections.slice(1).map(({ id, label, Icon }) => <button type="button" key={id} onClick={() => setSection(id)}><Icon size={20} /><span>{label}</span><ChevronRight size={15} /></button>)}</div></article><article className="admin-panel admin-health-panel"><div className="admin-panel-heading"><div><span className="admin-eyebrow">PLATFORM HEALTH</span><h2>Control summary</h2></div><Globe2 size={22} /></div><div className="admin-health-row"><span><i className={`health-dot ${databaseStatus?.connected ? "" : "disconnected"}`} />MongoDB database</span><strong className={databaseStatus?.connected ? "" : "health-unavailable"}>{databaseStatus?.connected ? "CONNECTED" : databaseStatus?.state?.toUpperCase() || "UNAVAILABLE"}</strong></div><div className="admin-health-row"><span><i className="health-dot" />Learner catalog</span><strong>{summary?.activeCourses ?? "—"} {summary?.activeCourses === null ? "UNAVAILABLE" : "LIVE"}</strong></div><div className="admin-health-row"><span><i className={`health-dot ${usersStatus === "ready" ? "" : "disconnected"}`} />Users and XP records</span><strong className={usersStatus === "ready" ? "" : "health-unavailable"}>{usersStatus === "ready" ? "AVAILABLE" : usersStatus === "loading" ? "LOADING" : "UNAVAILABLE"}</strong></div><div className="admin-health-row"><span><i className="health-dot" />Daily challenge bank</span><strong>{summary?.activeChallenges ?? "—"} {summary?.activeChallenges === null ? "UNAVAILABLE" : "ACTIVE"}</strong></div><p className="admin-muted-copy">Changes made here are persisted on the server and are visible to learners after refresh.</p></article></div></section>}

          {section === "users" && <section className="admin-section"><div className="admin-panel"><div className="admin-toolbar"><div><span className="admin-eyebrow">ACCOUNT DIRECTORY</span><h2>Users and learner progress</h2></div><input className="admin-search" value={userSearch} onChange={(event) => setUserSearch(event.target.value)} placeholder="Search name, email, or role" /></div><div className="admin-table-wrap"><table className="admin-table"><thead><tr><th>Learner</th><th>Role</th><th>Status</th><th>XP</th><th>Level</th><th>Progress</th><th>Actions</th></tr></thead><tbody>{filteredUsers.map((item) => <tr key={item.id}><td><div className="admin-user-cell"><span className="admin-avatar">{String(item.name || "U").slice(0, 1).toUpperCase()}</span><div><strong>{item.name}</strong><small>{item.email}</small></div></div></td><td><select value={item.role || "user"} onChange={(event) => setUsers((current) => current.map((userItem) => userItem.id === item.id ? { ...userItem, role: event.target.value } : userItem))}><option value="user">Learner</option><option value="admin">Admin</option></select></td><td><button type="button" className={`admin-status-toggle ${item.isActive ? "on" : "off"}`} onClick={() => updateUser(item, { isActive: !item.isActive })}>{item.isActive ? "Active" : "Disabled"}</button></td><td><input className="admin-number-input" type="number" min="0" value={item.xp || 0} onChange={(event) => setUsers((current) => current.map((userItem) => userItem.id === item.id ? { ...userItem, xp: event.target.value } : userItem))} /></td><td>{item.level || 1}</td><td><span className="admin-progress-copy">{item.coursesStarted || 0} courses<br />{item.completedLessons || 0} lessons</span></td><td><div className="admin-row-actions"><button type="button" className="admin-icon-action" title="Save user" onClick={() => updateUser(item, { role: item.role, xp: Number(item.xp) || 0 })} disabled={savingKey === `user-${item.id}`}><Save size={15} /></button><button type="button" className="admin-text-action" onClick={() => updateUser(item, { resetProgress: true }, "reset")} disabled={savingKey === `user-${item.id}`}>Reset progress</button></div></td></tr>)}</tbody></table>{filteredUsers.length === 0 && <div className="admin-empty">{usersStatus === "unavailable" ? "MongoDB user records are unavailable. Check the MONGODB_URI deployment variable and database connection." : usersStatus === "loading" ? "Loading user records..." : "No users match this search."}</div>}</div></div></section>}

          {section === "courses" && <section className="admin-section"><div className="admin-toolbar admin-toolbar-standalone"><div><span className="admin-eyebrow">CONTENT MANAGEMENT</span><h2>All courses and Kai lessons</h2><p>{filteredCourses.length} of {courses.length} courses shown · {filteredCourses.reduce((total, course) => total + (course.lessons?.length || 0), 0)} lessons in view. Every course below includes the ordered lessons Kai teaches, their timing, visibility, examples, challenges, and quizzes.</p></div><div className="admin-toolbar-actions"><input className="admin-search" value={courseSearch} onChange={(event) => setCourseSearch(event.target.value)} placeholder="Search courses or lessons" /><div className="admin-row-actions"><button type="button" className="admin-secondary-button" onClick={() => setExpandedCourses(Object.fromEntries(filteredCourses.map((course) => [course.id, true])))}>Expand shown</button><button type="button" className="admin-secondary-button" onClick={() => setExpandedCourses({})}>Collapse all</button></div></div></div><div className="admin-course-list">{filteredCourses.map((course) => { const draft = courseDrafts[course.id] || course; const expanded = expandedCourses[course.id]; return <article className="admin-panel admin-course-panel" key={course.id}><div className="admin-course-summary"><button type="button" className="admin-expand-button" onClick={() => setExpandedCourses((current) => ({ ...current, [course.id]: !expanded }))}>{expanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}</button><div className="admin-course-icon"><BookOpen size={18} /></div><div className="admin-course-summary-copy"><strong>{draft.title}</strong><span>{draft.category} · {course.lessons?.length || 0} lessons · {draft.active !== false ? "Live" : "Hidden"}</span></div><button type="button" className="admin-secondary-button" onClick={() => setExpandedCourses((current) => ({ ...current, [course.id]: true }))}><Pencil size={15} /> Edit course</button></div>{expanded && <div className="admin-course-editor"><div className="admin-form-grid"><label>Course title<input value={draft.title || ""} onChange={(event) => setCourseDrafts((current) => ({ ...current, [course.id]: { ...draft, title: event.target.value } }))} /></label><label>Category<input value={draft.category || ""} onChange={(event) => setCourseDrafts((current) => ({ ...current, [course.id]: { ...draft, category: event.target.value } }))} /></label><label>Level<select value={draft.level || "Beginner"} onChange={(event) => setCourseDrafts((current) => ({ ...current, [course.id]: { ...draft, level: event.target.value } }))}><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select></label><label className="admin-checkbox-label"><input type="checkbox" checked={draft.active !== false} onChange={(event) => setCourseDrafts((current) => ({ ...current, [course.id]: { ...draft, active: event.target.checked } }))} /> Visible to learners</label></div><label className="admin-wide-field">Description<textarea rows="2" value={draft.description || ""} onChange={(event) => setCourseDrafts((current) => ({ ...current, [course.id]: { ...draft, description: event.target.value } }))} /></label><div className="admin-editor-actions"><button type="button" className="admin-primary-button" onClick={() => saveCourse(course)} disabled={savingKey === `course-${course.id}`}><Save size={15} />{savingKey === `course-${course.id}` ? "Saving..." : "Save course"}</button></div><div className="admin-lesson-heading"><div><span className="admin-eyebrow">LESSON CONTENT</span><h3>{course.lessons?.length || 0} lessons in this course</h3></div></div><div className="admin-lesson-list">{(course.lessons || []).map((lesson, lessonIndex) => { const key = `${course.id}:${lesson.id}`; const lessonDraft = lessonDrafts[key] || getLessonDraft(lesson); return <div className="admin-lesson-row" key={lesson.id}><div><strong>{lesson.title}</strong><span>Lesson {lessonIndex + 1} · {lesson.estimatedTime || "Lesson"} · {lesson.active !== false ? "Live" : "Hidden"} · Kai: {(lesson.sections || []).map((section) => ({ explanation: "concepts", example: "example", deepDive: "deep dive", challenge: "practice", quiz: "quiz", summary: "summary" }[section.type] || section.type)).join(" · ") || "guided teaching"}</span></div><button type="button" className="admin-text-action" onClick={() => setEditingLesson(editingLesson === key ? null : key)}>{editingLesson === key ? "Close" : "Edit lesson"}</button>{editingLesson === key && <div className="admin-lesson-editor"><div className="admin-form-grid"><label>Lesson title<input value={lessonDraft.title || ""} onChange={(event) => setLessonDrafts((current) => ({ ...current, [key]: { ...lessonDraft, title: event.target.value } }))} /></label><label>Estimated time<input value={lessonDraft.estimatedTime || ""} onChange={(event) => setLessonDrafts((current) => ({ ...current, [key]: { ...lessonDraft, estimatedTime: event.target.value } }))} /></label></div><label className="admin-wide-field">Description<textarea rows="2" value={lessonDraft.description || ""} onChange={(event) => setLessonDrafts((current) => ({ ...current, [key]: { ...lessonDraft, description: event.target.value } }))} /></label><label className="admin-wide-field">Objectives<textarea rows="3" value={lessonDraft.objectivesText || ""} onChange={(event) => setLessonDrafts((current) => ({ ...current, [key]: { ...lessonDraft, objectivesText: event.target.value } }))} placeholder="One objective per line" /></label><div className="admin-content-editor-grid"><label>Example code<textarea rows="6" value={lessonDraft.exampleCode || ""} onChange={(event) => setLessonDrafts((current) => ({ ...current, [key]: { ...lessonDraft, exampleCode: event.target.value } }))} /></label><label>Challenge instructions<textarea rows="6" value={lessonDraft.challengeInstructions || ""} onChange={(event) => setLessonDrafts((current) => ({ ...current, [key]: { ...lessonDraft, challengeInstructions: event.target.value } }))} /></label><label>Starter code<textarea rows="5" value={lessonDraft.starterCode || ""} onChange={(event) => setLessonDrafts((current) => ({ ...current, [key]: { ...lessonDraft, starterCode: event.target.value } }))} /></label><label>Quiz question<textarea rows="3" value={lessonDraft.quizQuestion || ""} onChange={(event) => setLessonDrafts((current) => ({ ...current, [key]: { ...lessonDraft, quizQuestion: event.target.value } }))} /></label><label>Quiz options<textarea rows="4" value={lessonDraft.quizOptionsText || ""} onChange={(event) => setLessonDrafts((current) => ({ ...current, [key]: { ...lessonDraft, quizOptionsText: event.target.value } }))} placeholder="One option per line" /></label><label>Quiz answer<input value={lessonDraft.quizAnswer || ""} onChange={(event) => setLessonDrafts((current) => ({ ...current, [key]: { ...lessonDraft, quizAnswer: event.target.value } }))} /></label></div><label className="admin-checkbox-label"><input type="checkbox" checked={lessonDraft.active !== false} onChange={(event) => setLessonDrafts((current) => ({ ...current, [key]: { ...lessonDraft, active: event.target.checked } }))} /> Visible to learners</label><button type="button" className="admin-primary-button" onClick={() => saveLesson(course.id, lesson)} disabled={savingKey === `lesson-${key}`}><Save size={15} /> Save lesson</button></div>}</div>})}</div></div>}</article>; })}</div></section>}

          {section === "challenges" && <section className="admin-section"><div className="admin-panel"><div className="admin-toolbar"><div><span className="admin-eyebrow">CHALLENGE BANK</span><h2>Daily challenge controls</h2><p>Create, activate, archive, and delete the exercises served to learners.</p></div><div className="admin-row-actions"><button type="button" className="admin-secondary-button" onClick={seedChallenges} disabled={savingKey === "challenge-seed"}><Database size={15} /> Seed defaults</button><button type="button" className="admin-primary-button" onClick={() => setSection("new-challenge")}><Plus size={16} /> New challenge</button></div></div><div className="admin-challenge-list">{challenges.map((challenge) => <div className="admin-challenge-row" key={challenge.id}><div className="admin-challenge-copy"><strong>{challenge.title}</strong><span>{challenge.type} · +{challenge.xp} XP · {challenge.active ? "Active" : "Archived"}</span><p>{challenge.prompt}</p></div><div className="admin-row-actions"><button type="button" className={`admin-status-toggle ${challenge.active ? "on" : "off"}`} onClick={() => toggleChallenge(challenge)} disabled={savingKey === `challenge-${challenge.id}`}>{challenge.active ? "Active" : "Archived"}</button><button type="button" className="admin-icon-action danger" onClick={() => deleteChallenge(challenge)} disabled={savingKey === `challenge-${challenge.id}`}><Trash2 size={15} /></button></div></div>)}</div>{challenges.length === 0 && <div className="admin-empty">No challenges yet. Create one or seed the default challenge bank.</div>}</div></section>}

          {section === "new-challenge" && <section className="admin-section"><div className="admin-panel"><div className="admin-toolbar"><div><span className="admin-eyebrow">CHALLENGE BANK</span><h2>Create a daily challenge</h2><p>The canonical answer is stored server-side and is never sent to learners.</p></div><button type="button" className="admin-secondary-button" onClick={() => setSection("challenges")}><X size={15} /> Cancel</button></div><form className="admin-form" onSubmit={createChallenge}><div className="admin-form-grid"><label>Title<input required value={challengeForm.title} onChange={(event) => setChallengeForm((current) => ({ ...current, title: event.target.value }))} /></label><label>Type<select value={challengeForm.type} onChange={(event) => setChallengeForm((current) => ({ ...current, type: event.target.value }))}><option value="short_answer">Short answer</option><option value="mcq">Multiple choice</option><option value="regex">Command / pattern</option><option value="code">Code answer</option></select></label><label>Difficulty<select value={challengeForm.difficulty} onChange={(event) => setChallengeForm((current) => ({ ...current, difficulty: event.target.value }))}><option>easy</option><option>medium</option><option>hard</option></select></label><label>XP reward<input type="number" min="0" max="10000" value={challengeForm.xpReward} onChange={(event) => setChallengeForm((current) => ({ ...current, xpReward: event.target.value }))} /></label></div><label className="admin-wide-field">Prompt<textarea required rows="4" value={challengeForm.prompt} onChange={(event) => setChallengeForm((current) => ({ ...current, prompt: event.target.value }))} /></label><div className="admin-form-grid"><label>Canonical answer<input required value={challengeForm.canonicalAnswer} onChange={(event) => setChallengeForm((current) => ({ ...current, canonicalAnswer: event.target.value }))} /></label><label className="admin-checkbox-label"><input type="checkbox" checked={challengeForm.active} onChange={(event) => setChallengeForm((current) => ({ ...current, active: event.target.checked }))} /> Activate immediately</label></div><label className="admin-wide-field">Choices<textarea rows="4" value={challengeForm.choices} onChange={(event) => setChallengeForm((current) => ({ ...current, choices: event.target.value }))} placeholder="For MCQ only: one choice per line" /></label><label className="admin-wide-field">Requirements<textarea rows="3" value={challengeForm.requirements} onChange={(event) => setChallengeForm((current) => ({ ...current, requirements: event.target.value }))} placeholder="One requirement per line" /></label><label className="admin-wide-field">Starter code<textarea rows="5" value={challengeForm.starter} onChange={(event) => setChallengeForm((current) => ({ ...current, starter: event.target.value }))} /></label><button type="submit" className="admin-primary-button" disabled={savingKey === "challenge-new"}><Save size={15} />{savingKey === "challenge-new" ? "Creating..." : "Create challenge"}</button></form></div></section>}

          {section === "settings" && settings && <section className="admin-section"><div className="admin-panel admin-settings-panel"><div className="admin-panel-heading"><div><span className="admin-eyebrow">PLATFORM SETTINGS</span><h2>Control the learner experience</h2><p>These values are stored centrally and applied by the server.</p></div><Settings size={23} /></div><form className="admin-form" onSubmit={saveSettings}><div className="admin-form-grid"><label>Academy name<input value={settings.academyName || ""} onChange={(event) => setSettings((current) => ({ ...current, academyName: event.target.value }))} /></label><label>Challenge window hours<input type="number" min="1" max="168" value={settings.challengeWindowHours || 24} onChange={(event) => setSettings((current) => ({ ...current, challengeWindowHours: event.target.value }))} /></label><label>Default challenge XP<input type="number" min="0" max="10000" value={settings.defaultChallengeXP ?? 10} onChange={(event) => setSettings((current) => ({ ...current, defaultChallengeXP: event.target.value }))} /></label><label className="admin-checkbox-label"><input type="checkbox" checked={settings.dailyChallengesEnabled !== false} onChange={(event) => setSettings((current) => ({ ...current, dailyChallengesEnabled: event.target.checked }))} /> Enable daily challenges</label></div><div className="admin-settings-callout"><Zap size={18} /><div><strong>Attempt policy</strong><p>The learner-facing daily challenge keeps the existing five-attempt protection. Correct answers award XP; five incorrect attempts close the challenge.</p></div></div><button type="submit" className="admin-primary-button" disabled={savingKey === "settings"}><Save size={15} />{savingKey === "settings" ? "Saving..." : "Save platform settings"}</button></form></div></section>}
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
