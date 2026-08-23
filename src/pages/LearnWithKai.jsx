import { useEffect, useMemo, useState } from "react";
import { Send, ArrowLeft, Bot, Lightbulb, Code, X } from "lucide-react";
import fetchWithAuth from "../utils/fetchWithAuth";
import "./LearnWithKai.css";

function LearnWithKai({ user, onBack }) {
  const course = useMemo(() => ({ id: "general", title: "Coding Fundamentals", level: "Beginner" }), []);
  const lesson = useMemo(() => ({ id: "kai-general", title: "Ask Kai Anything", description: "Personalized coding guidance from your AI instructor." }), []);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeVideo, setActiveVideo] = useState(null);

  const sampleQuestions = [
    "Explain closures in JavaScript",
    "How do I debug React components?",
    "What's the difference between REST and GraphQL?",
    "Help me understand async/await",
  ];

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
          setMessages(data.session.conversationHistory);
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
      setMessages((current) => [...current, { role: "assistant", content: data.reply, video: data.videoRecommendation || null }]);
    } catch (err) {
      setError(err.message || "Unable to reach Kai right now.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="kai-page">
      <header className="kai-header">
        <button className="kai-back-btn" onClick={onBack}><ArrowLeft size={20} /> Back to Dashboard</button>
        <div className="kai-header-title"><Bot size={32} className="kai-icon" /><div><h1>Learn with Kai</h1><p>Your AI instructor is here to help you learn</p></div></div>
      </header>
      <main className="kai-main">
        <div className="kai-container">
          <div className="kai-messages">
            {messages.length === 0 && <div className="sample-questions"><h3><Lightbulb size={18} /> Try asking about:</h3><div className="questions-grid">{sampleQuestions.map((question) => <button key={question} className="sample-btn" onClick={() => setInputValue(question)}><Code size={16} />{question}</button>)}</div></div>}
            {messages.map((message, index) => <div key={`${message.role}-${index}`} className={`message ${message.role === "assistant" ? "kai-message" : "user-message"}`}>{message.role === "assistant" && <div className="kai-avatar"><Bot size={24} /></div>}<div><div className="message-bubble">{message.content || message.text}</div>{message.role === "assistant" && message.video?.playbackUrl && <div className="kai-video-recommendation"><div className="kai-video-recommendation-copy"><span className="kai-video-kicker">VISUAL SUPPLEMENT</span><strong>{message.video.title}</strong><span>{message.video.description}</span></div><button type="button" className="kai-watch-video" onClick={() => setActiveVideo(message.video)}><span className="kai-play-icon">▶</span>Watch Video</button></div>}</div></div>)}
            {isLoading && <div className="message kai-message"><div className="kai-avatar"><Bot size={24} /></div><div className="message-bubble loading"><span></span><span></span><span></span></div></div>}
          </div>
          {error && <p className="kai-error">{error}</p>}
          <div className="kai-input-area"><div className="input-wrapper"><input className="kai-input" placeholder="Ask me anything about coding..." value={inputValue} onChange={(event) => setInputValue(event.target.value)} onKeyDown={(event) => event.key === "Enter" && handleSendMessage()} disabled={isLoading} /><button className="send-btn" onClick={handleSendMessage} disabled={!inputValue.trim() || isLoading}><Send size={20} /></button></div><p className="input-hint">Kai uses your account session to continue your learning conversation.</p></div>
        </div>
        {activeVideo && <div className="kai-video-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveVideo(null); }}><section className="kai-video-modal" role="dialog" aria-modal="true" aria-labelledby="general-kai-video-title"><div className="kai-video-modal-header"><div><span className="kai-video-kicker">KAI VISUAL SUPPLEMENT</span><h2 id="general-kai-video-title">{activeVideo.title}</h2></div><button type="button" className="kai-video-modal-close" onClick={() => setActiveVideo(null)} aria-label="Close video"><X size={19} /></button></div><div className="kai-video-player-frame">{activeVideo.playerType === "embed" ? <iframe src={activeVideo.playbackUrl} title={activeVideo.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /> : <video src={activeVideo.playbackUrl} controls autoPlay playsInline preload="metadata" />}</div><p className="kai-video-modal-description">{activeVideo.description}</p><div className="kai-video-modal-topics">{(activeVideo.topics || []).map((topic) => <span key={topic}>{topic}</span>)}</div></section></div>}
        <aside className="kai-sidebar"><div className="sidebar-card"><h3>Tips</h3><ul><li>Ask follow-up questions</li><li>Request code examples</li><li>Ask about best practices</li><li>Get debugging help</li></ul></div><div className="sidebar-card"><h3>Your account</h3><p>{user?.name || user?.email}</p><p>Conversation history is saved to your account.</p></div></aside>
      </main>
    </div>
  );
}

export default LearnWithKai;
