import { useEffect, useRef } from "react";
import { ArrowLeft, Copy, MoreVertical, Paperclip, RotateCcw, Send, Share2, Sparkles, Globe2 } from "lucide-react";
import AIContentRenderer from "./AIContentRenderer";
import "./Latterface.css";

function FireboxLogo() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="26" height="26" rx="7" fill="currentColor" />
      <path d="M16 6c1 3.5 5 5.5 5 10.2A5 5 0 0 1 16 21a5 5 0 0 1-5-4.8c0-2 1-3.2 2-4.4.3 1.4 1 2.2 1.8 2.6C14.6 11.8 14.6 8.6 16 6Z" fill="#0f1112" />
      <path d="M10 23h12" stroke="#0f1112" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function messageText(message) {
  return message.content || message.text || "";
}

export default function Latterface({
  messages,
  inputValue,
  setInputValue,
  handleSendMessage,
  isLoading,
  error,
  onBack,
  onNewChat,
  onModeChange,
}) {
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isLoading]);

  useEffect(() => {
    const element = inputRef.current;
    if (!element) return;
    element.style.height = "auto";
    element.style.height = `${Math.min(element.scrollHeight, 160)}px`;
  }, [inputValue]);

  const onKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  const copyResponse = async (message) => {
    try {
      await navigator.clipboard.writeText(messageText(message));
    } catch {
      // Clipboard access is optional in embedded previews.
    }
  };

  const shareResponse = async (message) => {
    const text = messageText(message);
    if (navigator.share) await navigator.share({ title: "Kai response", text }).catch(() => {});
    else await copyResponse(message);
  };

  const retryLastQuestion = () => {
    const lastQuestion = [...messages].reverse().find((message) => message.role === "user");
    if (!lastQuestion) return;
    setInputValue(messageText(lastQuestion));
    window.setTimeout(() => inputRef.current?.focus(), 0);
  };

  return (
    <div className="latterface">
      <header className="latterface-header">
        <div className="latterface-brand">
          <button className="latterface-back" type="button" onClick={onBack} aria-label="Back to dashboard"><ArrowLeft size={19} /></button>
          <div className="latterface-logo"><FireboxLogo /></div>
          <div>
            <h1>LATTERFACE</h1>
            <p>Generative technical assistant</p>
          </div>
        </div>
        <div className="latterface-actions">
          <div className="latterface-status"><i /> <span>{isLoading ? "Composing" : "Ready"}</span></div>
          <div className="latterface-mode-switch" aria-label="Kai interface style">
            <button type="button" onClick={() => onModeChange("classic")}>Classic</button>
            <button type="button" onClick={() => onModeChange("focus")}>Focus</button>
            <button type="button" className="is-active">Latterface</button>
          </div>
          <button className="latterface-icon-button" type="button" aria-label="Share conversation" onClick={() => navigator.share?.({ title: "Kai teaching", url: window.location.href })}><Share2 size={17} /></button>
          <button className="latterface-new-chat" type="button" onClick={onNewChat}>New chat</button>
          <MoreVertical className="latterface-more" size={18} />
        </div>
      </header>

      <main className="latterface-main" ref={scrollRef}>
        <div className="latterface-thread">
          {messages.length === 0 && (
            <div className="latterface-empty">
              <Sparkles size={20} />
              <strong>Ask Kai to explain, compare, build, or verify.</strong>
              <span>Your conversation is saved to your CodeLab Academy account.</span>
            </div>
          )}
          {messages.map((message, index) => (
            <div key={`${message.role}-${index}`} className={`latterface-message ${message.role === "user" ? "is-user" : "is-ai"}`}>
              {message.role === "assistant" && <span className="latterface-response-kicker">LATTERFACE · RICH RESPONSE</span>}
              {message.role === "assistant" && message.contentBlocks?.length ? <AIContentRenderer content={message.contentBlocks} /> : messageText(message)}
              {message.role === "assistant" && (
                <div className="latterface-response-actions">
                  <button type="button" aria-label="Copy response" onClick={() => copyResponse(message)}><Copy size={15} /></button>
                  <button type="button" aria-label="Share response" onClick={() => shareResponse(message)}><Share2 size={15} /></button>
                  <button type="button" aria-label="Retry question" onClick={retryLastQuestion}><RotateCcw size={15} /></button>
                </div>
              )}
            </div>
          ))}
          {isLoading && <div className="latterface-composing" role="status"><span className="latterface-dots"><b /><b /><b /></span> LATTERFACE is composing a rich response</div>}
          {error && <p className="latterface-error">{error}</p>}
        </div>
      </main>

      <div className="latterface-composer-wrap">
        <div className="latterface-composer">
          <textarea ref={inputRef} rows={1} value={inputValue} onChange={(event) => setInputValue(event.target.value)} onKeyDown={onKeyDown} placeholder="Ask LATTERFACE to explain, compare, build, or verify..." disabled={isLoading} />
          <div className="latterface-bar">
            <div className="latterface-chips">
              <button className="latterface-chip" type="button"><Paperclip size={14} /> Attach</button>
              <button className="latterface-chip" type="button"><Globe2 size={14} /> Web search</button>
            </div>
            <div className="latterface-right"><span className="latterface-hint">Enter to send · Shift + Enter for a new line</span><button className="latterface-send" type="button" onClick={handleSendMessage} disabled={!inputValue.trim() || isLoading} aria-label="Send"><Send size={19} /></button></div>
          </div>
        </div>
        <p className="latterface-disclaimer">LATTERFACE can make mistakes. Check important technical and security advice.</p>
      </div>
    </div>
  );
}
