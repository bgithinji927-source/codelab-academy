function getExternalPlayback(videoUrl) {
  const rawUrl = String(videoUrl || "").trim();
  try {
    const url = new URL(rawUrl);
    const host = url.hostname.toLowerCase().replace(/^www\./, "");

    if (host === "youtube.com" || host === "m.youtube.com") {
      const videoId = url.searchParams.get("v");
      if (videoId) {
        return {
          playerType: "embed",
          playbackUrl: `https://www.youtube.com/embed/${encodeURIComponent(videoId)}?rel=0`,
        };
      }
    }

    if (host === "youtu.be") {
      const videoId = url.pathname.split("/").filter(Boolean)[0];
      if (videoId) {
        return {
          playerType: "embed",
          playbackUrl: `https://www.youtube.com/embed/${encodeURIComponent(videoId)}?rel=0`,
        };
      }
    }

    if (host === "vimeo.com") {
      const videoId = url.pathname.split("/").filter(Boolean).pop();
      if (videoId && /^\d+$/.test(videoId)) {
        return {
          playerType: "embed",
          playbackUrl: `https://player.vimeo.com/video/${videoId}`,
        };
      }
    }

    return { playerType: "video", playbackUrl: rawUrl };
  } catch {
    return { playerType: "video", playbackUrl: rawUrl };
  }
}

function serializeVideo(video) {
  const plain = typeof video.toObject === "function" ? video.toObject() : video;
  const id = String(plain._id || plain.id);
  const externalPlayback = plain.sourceType === "url"
    ? getExternalPlayback(plain.videoUrl)
    : { playerType: "video", playbackUrl: `/api/videos/${id}/stream` };

  return {
    id,
    title: plain.title,
    description: plain.description,
    topics: Array.isArray(plain.topics) ? plain.topics : [],
    courseId: plain.courseId,
    courseTitle: plain.courseTitle || "",
    lessonId: plain.lessonId,
    lessonTitle: plain.lessonTitle || "",
    sourceType: plain.sourceType,
    sourceUrl: plain.sourceType === "url" ? plain.videoUrl || "" : "",
    playbackUrl: externalPlayback.playbackUrl,
    playerType: externalPlayback.playerType,
    originalFilename: plain.originalFilename || "",
    mimeType: plain.mimeType || "video/mp4",
    fileSize: plain.fileSize || 0,
    active: plain.active !== false,
    createdAt: plain.createdAt,
    updatedAt: plain.updatedAt,
  };
}

function parseTopics(value) {
  if (Array.isArray(value)) {
    return value.map((topic) => String(topic).trim()).filter(Boolean).slice(0, 30);
  }
  return String(value || "")
    .split(/[,\n]/)
    .map((topic) => topic.trim())
    .filter(Boolean)
    .slice(0, 30);
}

function parseBoolean(value, fallback = true) {
  if (value === undefined || value === null || value === "") return fallback;
  if (typeof value === "boolean") return value;
  return String(value).toLowerCase() !== "false";
}

module.exports = {
  getExternalPlayback,
  serializeVideo,
  parseTopics,
  parseBoolean,
};
