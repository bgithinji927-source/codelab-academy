import { useEffect, useMemo, useState } from "react";
import { Send, ArrowLeft, Bot, Lightbulb, Code, X, Paperclip, Globe2, Copy, Share2, RotateCcw, SlidersHorizontal, MoreVertical } from "lucide-react";
import fetchWithAuth from "../utils/fetchWithAuth";
import resolveVideoPlaybackUrl from "../utils/resolveVideoPlaybackUrl";
import AIContentRenderer from "../components/AIContentRenderer";
import Latterface from "../components/Latterface";
import "./LearnWithKai.css";

function parseStructuredContent(value) {
  if (Array.isArray(value)) return value;
  if (!value || typeof value !== "string") return null;

  const text = value
    .replace(/```json\s*/gi, "")
    .replace(/```/g, "")
    .trim();
  const candidates = [text];
  const firstBrace = text.indexOf("{");
  const lastBrace = text.lastIndexOf("}");
  if (firstBrace >= 0 && lastBrace > firstBrace) {
    candidates.push(text.slice(firstBrace, lastBrace + 1));
  }

  for (const candidate of candidates) {
    try {
      let parsed = JSON.parse(candidate);
      if (typeof parsed === "string") parsed = JSON.parse(parsed);
      if (Array.isArray(parsed)) return parsed;
      if (Array.isArray(parsed?.content)) return parsed.content;
    } catch {
      // Plain Markdown replies are rendered by the fallback below.
    }
  }
  return null;
}

function LearnWithKai({ user, onBack }) {
  const course = useMemo(() => ({ id: "general", title: "Coding Fundamentals", level: "Beginner" }), []);
  const lesson = useMemo(() => ({ id: "kai-general", title: "Ask Kai Anything", description: "Personalized coding guidance from your AI instructor." }), []);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeVideo, setActiveVideo] = useState(null);
  const [resolvedVideoUrl, setResolvedVideoUrl] = useState("");
  const [videoPlaybackError, setVideoPlaybackError] = useState("");
  const [interfaceMode, setInterfaceMode] = useState(() => localStorage.getItem("kai-interface-mode") || "focus");

  const sampleQuestions = [
    "Explain closures in JavaScript",
    "How do I debug React components?",
    "What's the difference between REST and GraphQL?",
    "Help me understand async/await",
  ];

  useEffect(() => {
    let cancelled = false;
    setResolvedVideoUrl("");
    setVideoPlaybackError("");
    if (!activeVideo) return undefined;

    resolveVideoPlaybackUrl(activeVideo)
      .then((playbackUrl) => {
        if (!cancelled) setResolvedVideoUrl(playbackUrl);
      })
      .catch((error) => {
        if (!cancelled) setVideoPlaybackError(error.message || "Could not prepare this video.");
      });

    return () => {
      cancelled = true;
    };
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

  useEffect(() => {
    let mounted = true;
    fetchWithAuth(`/api/kai/session/${user?.id}/${course.id}/${lesson.id}`)
      .then((response) => response.json())
      .then((data) => {
        if (mounted && data.success && data.session?.conversationHistory?.length) {
          setMessages(data.session.conversationHistory.map((message) => ({
            ...message,
            contentBlocks: message.contentBlocks || parseStructuredContent(message.content),
          })));
        }
      })
      .catch(() => {});
    return () => { mounted = false; };
  }, [course.id, lesson.id, user?.id]);

  const handleSendMessage = async () => {
    const text = inputValue.trim();
    if (!text || isLoading) return;
    const learnerMessage = { role: "user", content: text };
    const conversation = [...messages, learnerMessage];
    setMessages(conversation);
    setInputValue("");
    setIsLoading(true);
    setError("");

    try {
      const response = await fetchWithAuth("/api/kai", {
        method: "POST",
        body: JSON.stringify({ userId: user?.id, course, lesson, learnerMessage: text, messages: conversation }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.message || "Kai could not respond.");
      setMessages((current) => [...current, {
        role: "assistant",
        content: data.reply,
        contentBlocks: data.content || parseStructuredContent(data.reply),
        video: data.videoRecommendation || null,
      }]);
    } catch (err) {
      setError(err.message || "Unable to reach Kai right now.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleComposerKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  const changeInterfaceMode = (mode) => {
    setInterfaceMode(mode);
    localStorage.setItem("kai-interface-mode", mode);
  };

  const copyResponse = async (message) => {
    try {
      await navigator.clipboard.writeText(message.content || message.text || "");
    } catch {
      setError("Copy is unavailable in this browser.");
    }
  };

  const shareResponse = async (message) => {
    const content = message.content || message.text || "";
    if (navigator.share) {
      await navigator.share({ title: "Kai response", text: content }).catch(() => {});
    } else {
      await copyResponse(message);
    }
  };

  const retryLastQuestion = () => {
    const lastQuestion = [...messages].reverse().find((message) => message.role === "user");
    if (lastQuestion) {
      setInputValue(lastQuestion.content || lastQuestion.text || "");
      window.setTimeout(() => document.querySelector(".kai-input")?.focus(), 0);
    }
  };

  const startNewChat = () => {
    setMessages([]);
    setError("");
    setInputValue("");
  };

  if (interfaceMode === "latterface") {
    return <Latterface
      messages={messages}
      inputValue={inputValue}
      setInputValue={setInputValue}
      handleSendMessage={handleSendMessage}
      isLoading={isLoading}
      error={error}
      onBack={onBack}
      onNewChat={startNewChat}
      onModeChange={changeInterfaceMode}
    />;
  }

  return (
    <div className={`kai-page ${interfaceMode === "focus" ? "kai-focus-mode" : ""}`}>
      <header className="kai-header">
        <div className="kai-topbar">
          <button className="kai-back-btn" onClick={onBack}><ArrowLeft size={20} /> Back to Dashboard</button>
          <div className="kai-interface-switch" aria-label="Kai interface style">
            <button type="button" className={interfaceMode === "classic" ? "is-active" : ""} onClick={() => changeInterfaceMode("classic")}>Classic</button>
            <button type="button" className={interfaceMode === "focus" ? "is-active" : ""} onClick={() => changeInterfaceMode("focus")}>Focus</button>
            <button type="button" className={interfaceMode === "latterface" ? "is-active" : ""} onClick={() => changeInterfaceMode("latterface")}>Latterface</button>
          </div>
        </div>
        <div className="kai-header-title"><span className="kai-brand-mark"><Bot size={25} /></span><div><h1>FIREBOX AI</h1><p>GENERATIVE TECHNICAL ASSISTANT</p></div><SlidersHorizontal className="kai-header-tool" size={20} /><MoreVertical className="kai-header-tool" size={20} /></div>
      </header>
      <main className="kai-main">
        <div className="kai-container">
          <div className="kai-messages">
            {messages.length === 0 && <div className="sample-questions"><h3><Lightbulb size={18} /> Try asking about:</h3><div className="questions-grid">{sampleQuestions.map((question) => <button key={question} className="sample-btn" onClick={() => setInputValue(question)}><Code size={16} />{question}</button>)}</div></div>}
            {messages.map((message, index) => <div key={`${message.role}-${index}`} className={`message ${message.role === "assistant" ? "kai-message" : "user-message"}`}>
              {message.role === "assistant" && <div className="kai-avatar"><Bot size={24} /></div>}
              <div>
                {message.role === "assistant" && <span className="kai-response-label">FIREBOX AI · RICH RESPONSE</span>}
                <div className="message-bubble">
                  {message.role === "assistant" && message.contentBlocks?.length
                    ? <AIContentRenderer content={message.contentBlocks} />
                    : message.content || message.text}
                </div>
                {message.role === "assistant" && message.video?.playbackUrl && <div className="kai-video-recommendation"><div className="kai-video-recommendation-copy"><span className="kai-video-kicker">VISUAL SUPPLEMENT</span><strong>{message.video.title}</strong><span>{message.video.description}</span></div><button type="button" className="kai-watch-video" onClick={() => setActiveVideo(message.video)}><span className="kai-play-icon">▶</span>Watch Video</button></div>}
                {message.role === "assistant" && <div className="kai-response-actions"><button type="button" aria-label="Copy Kai response" onClick={() => copyResponse(message)}><Copy size={17} /></button><button type="button" aria-label="Share Kai response" onClick={() => shareResponse(message)}><Share2 size={17} /></button><button type="button" aria-label="Retry last question" onClick={retryLastQuestion}><RotateCcw size={17} /></button></div>}
              </div>
            </div>)}
            {isLoading && <div className="message kai-message"><div className="kai-avatar"><Bot size={24} /></div><div className="message-bubble loading"><span></span><span></span><span></span></div></div>}
          </div>
          {error && <p className="kai-error">{error}</p>}
          <div className="kai-input-area"><div className="input-wrapper"><textarea className="kai-input" rows="2" placeholder="Ask FIREBOX AI to explain, compare, build, or verify..." value={inputValue} onChange={(event) => setInputValue(event.target.value)} onKeyDown={handleComposerKeyDown} disabled={isLoading} /><button className="send-btn" onClick={handleSendMessage} disabled={!inputValue.trim() || isLoading}><Send size={20} /></button></div><div className="kai-composer-tools"><button type="button"><Paperclip size={15} /> Attach</button><button type="button"><Globe2 size={15} /> Web search</button><span>Enter to send · Shift + Enter for a new line</span></div><p className="input-hint">Kai uses your account session to continue your learning conversation.</p></div>
        </div>
        {activeVideo && <div className="kai-video-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveVideo(null); }}><section className="kai-video-modal" role="dialog" aria-modal="true" aria-labelledby="general-kai-video-title"><div className="kai-video-modal-header"><div><span className="kai-video-kicker">KAI VISUAL SUPPLEMENT</span><h2 id="general-kai-video-title">{activeVideo.title}</h2></div><button type="button" className="kai-video-modal-close" onClick={() => setActiveVideo(null)} aria-label="Close video"><X size={19} /></button></div><div className="kai-video-player-frame">{activeVideo.playerType === "embed" ? <iframe src={activeVideo.playbackUrl} title={activeVideo.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /> : resolvedVideoUrl ? <video src={resolvedVideoUrl} controls autoPlay playsInline preload="metadata" referrerPolicy="no-referrer" /> : <div className="kai-video-player-status">{videoPlaybackError || "Preparing secure video playback..."}</div>}</div><p className="kai-video-modal-description">{activeVideo.description}</p><div className="kai-video-modal-topics">{(activeVideo.topics || []).map((topic) => <span key={topic}>{topic}</span>)}</div></section></div>}
        <aside className="kai-sidebar"><div className="sidebar-card"><h3>Tips</h3><ul><li>Ask follow-up questions</li><li>Request code examples</li><li>Ask about best practices</li><li>Get debugging help</li></ul></div><div className="sidebar-card"><h3>Your account</h3><p>{user?.name || user?.email}</p><p>Conversation history is saved to your account.</p></div></aside>
      </main>
    </div>
  );
}

export default LearnWithKai;
