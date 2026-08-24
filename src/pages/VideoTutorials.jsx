import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Play, Search, Video as VideoIcon, X } from "lucide-react";
import fetchWithAuth from "../utils/fetchWithAuth";
import resolveVideoPlaybackUrl from "../utils/resolveVideoPlaybackUrl";
import "./VideoTutorials.css";

function VideoTutorials({ user, onBack }) {
  const [videos, setVideos] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("all");
  const [activeVideo, setActiveVideo] = useState(null);
  const [resolvedVideoUrl, setResolvedVideoUrl] = useState("");
  const [videoPlaybackError, setVideoPlaybackError] = useState("");

  useEffect(() => {
    let mounted = true;
    setStatus("loading");
    fetchWithAuth("/api/videos")
      .then(async (response) => {
        const data = await response.json().catch(() => ({}));
        if (!response.ok || !data.success) {
          if (response.status === 401) throw new Error("Please sign in to view video tutorials.");
          throw new Error(data.message || "Could not load video tutorials.");
        }
        if (mounted) {
          setVideos(Array.isArray(data.videos) ? data.videos : []);
          setStatus("ready");
        }
      })
      .catch((loadError) => {
        if (mounted) {
          setError(loadError.message || "Video tutorials are temporarily unavailable.");
          setStatus("error");
        }
      });

    return () => { mounted = false; };
  }, [user?.id]);

  useEffect(() => {
    let cancelled = false;
    setResolvedVideoUrl("");
    setVideoPlaybackError("");
    if (!activeVideo) return undefined;

    resolveVideoPlaybackUrl(activeVideo)
      .then((playbackUrl) => {
        if (!cancelled) setResolvedVideoUrl(playbackUrl);
      })
      .catch((playbackError) => {
        if (!cancelled) setVideoPlaybackError(playbackError.message || "Could not prepare this video.");
      });

    return () => { cancelled = true; };
  }, [activeVideo]);

  useEffect(() => {
    if (!activeVideo) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActiveVideo(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVideo]);

  const courseFilters = useMemo(() => {
    const values = new Map();
    videos.forEach((video) => {
      const id = String(video.courseId || "general");
      const label = video.courseTitle || video.courseId || "General tutorials";
      values.set(id, label);
    });
    return [...values.entries()].sort((left, right) => left[1].localeCompare(right[1]));
  }, [videos]);

  const filteredVideos = useMemo(() => {
    const query = search.trim().toLowerCase();
    return videos.filter((video) => {
      const matchesCourse = selectedCourse === "all" || String(video.courseId || "general") === selectedCourse;
      const searchable = `${video.title || ""} ${video.description || ""} ${(video.topics || []).join(" ")} ${video.courseTitle || ""} ${video.lessonTitle || ""}`.toLowerCase();
      return matchesCourse && (!query || searchable.includes(query));
    });
  }, [videos, search, selectedCourse]);

  return (
    <div className="tutorials-page">
      <header className="tutorials-header">
        <button type="button" className="tutorials-back" onClick={onBack}>
          <ArrowLeft size={18} />
          Back to Dashboard
        </button>
        <div className="tutorials-heading">
          <div className="tutorials-heading-icon"><VideoIcon size={25} /></div>
          <div>
            <span className="tutorials-kicker">LEARNER VIDEO LIBRARY</span>
            <h1>Video Tutorials</h1>
            <p>Watch administrator-curated lessons and practical demonstrations from your sidebar.</p>
          </div>
        </div>
      </header>

      <main className="tutorials-main">
        <section className="tutorials-toolbar" aria-label="Video tutorial filters">
          <label className="tutorials-search">
            <Search size={17} />
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search tutorials, topics, or lessons" />
          </label>
          <label className="tutorials-filter">
            <span>Course</span>
            <select value={selectedCourse} onChange={(event) => setSelectedCourse(event.target.value)}>
              <option value="all">All courses</option>
              {courseFilters.map(([id, label]) => <option key={id} value={id}>{label}</option>)}
            </select>
          </label>
        </section>

        {status === "loading" && <div className="tutorials-state"><VideoIcon size={25} /><p>Loading tutorials...</p></div>}
        {status === "error" && <div className="tutorials-state tutorials-error"><VideoIcon size={25} /><p>{error}</p><button type="button" onClick={() => window.location.reload()}>Try again</button></div>}
        {status === "ready" && filteredVideos.length === 0 && <div className="tutorials-state"><VideoIcon size={30} /><h2>No tutorials found</h2><p>{videos.length ? "Try another search or course filter." : "Your administrator has not published any tutorials yet."}</p></div>}

        {status === "ready" && filteredVideos.length > 0 && (
          <section className="tutorials-grid" aria-label="Available video tutorials">
            {filteredVideos.map((video) => (
              <article className="tutorial-card" key={video.id}>
                <div className="tutorial-card-preview">
                  <VideoIcon size={30} />
                  <span>{video.sourceType === "upload" ? "UPLOADED TUTORIAL" : "HOSTED TUTORIAL"}</span>
                  <button type="button" className="tutorial-play" onClick={() => setActiveVideo(video)} aria-label={`Watch ${video.title}`}><Play size={19} fill="currentColor" /></button>
                </div>
                <div className="tutorial-card-body">
                  <span className="tutorial-card-course">{video.courseTitle || "General tutorial"}</span>
                  <h2>{video.title}</h2>
                  <p>{video.description}</p>
                  <div className="tutorial-card-footer">
                    <span>{video.lessonTitle || "Practical tutorial"}</span>
                    <button type="button" onClick={() => setActiveVideo(video)}>Watch tutorial <Play size={14} fill="currentColor" /></button>
                  </div>
                  {(video.topics || []).length > 0 && <div className="tutorial-topics">{video.topics.map((topic) => <span key={topic}>{topic}</span>)}</div>}
                </div>
              </article>
            ))}
          </section>
        )}
      </main>

      {activeVideo && (
        <div className="tutorial-video-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveVideo(null); }}>
          <section className="tutorial-video-modal" role="dialog" aria-modal="true" aria-labelledby="tutorial-video-title">
            <div className="tutorial-video-modal-header">
              <div>
                <span className="tutorials-kicker">VIDEO TUTORIAL</span>
                <h2 id="tutorial-video-title">{activeVideo.title}</h2>
              </div>
              <button type="button" className="tutorial-video-close" onClick={() => setActiveVideo(null)} aria-label="Close video"><X size={19} /></button>
            </div>
            <div className="tutorial-video-frame">
              {activeVideo.playerType === "embed" ? (
                <iframe src={activeVideo.playbackUrl} title={activeVideo.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
              ) : resolvedVideoUrl ? (
                <video src={resolvedVideoUrl} controls autoPlay playsInline preload="metadata" referrerPolicy="no-referrer" />
              ) : (
                <div className="tutorial-video-status">{videoPlaybackError || "Preparing secure video playback..."}</div>
              )}
            </div>
            <p className="tutorial-video-description">{activeVideo.description}</p>
            {(activeVideo.topics || []).length > 0 && <div className="tutorial-topics">{activeVideo.topics.map((topic) => <span key={topic}>{topic}</span>)}</div>}
          </section>
        </div>
      )}
    </div>
  );
}

export default VideoTutorials;
