import fetchWithAuth from "./fetchWithAuth";

export default async function resolveVideoPlaybackUrl(video) {
  if (!video?.playbackUrl) return "";
  if (video.sourceType !== "upload") return video.playbackUrl;

  const response = await fetchWithAuth(`/api/videos/${encodeURIComponent(video.id)}/playback-ticket`);
  const data = await response.json().catch(() => ({}));
  if (!response.ok || !data.success || !data.ticket) {
    throw new Error(data.message || "Could not authorize this uploaded video.");
  }

  return `${video.playbackUrl}?ticket=${encodeURIComponent(data.ticket)}`;
}
