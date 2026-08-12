import { useState } from "react";
import { Send, ArrowLeft, Bot, Lightbulb, Code } from "lucide-react";
import "./LearnWithKai.css";

function LearnWithKai({ onBack }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "kai",
      text: "Hi there! 👋 I'm Kai, your AI instructor. What would you like to learn today? I can help you with concepts, code problems, debugging, or project guidance.",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const sampleQuestions = [
    "Explain closures in JavaScript",
    "How do I debug React components?",
    "What's the difference between REST and GraphQL?",
    "Help me understand async/await",
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: "user",
      text: inputValue,
    };
    setMessages([...messages, userMessage]);

    // Simulate Kai response
    setTimeout(() => {
      const kaiResponse = {
        id: messages.length + 2,
        type: "kai",
        text: "That's a great question! Let me explain that for you. This is an AI response placeholder that would be replaced with actual Groq API responses. I can help you understand the concept step by step, provide code examples, and answer follow-up questions.",
      };
      setMessages((prev) => [...prev, kaiResponse]);
    }, 800);

    setInputValue("");
  };

  const handleSampleQuestion = (question) => {
    setInputValue(question);
  };

  return (
    <div className="kai-page">
      {/* HEADER */}
      <header className="kai-header">
        <button className="kai-back-btn" onClick={onBack}>
          <ArrowLeft size={20} />
          Back to Dashboard
        </button>
        <div className="kai-header-title">
          <Bot size={32} className="kai-icon" />
          <div>
            <h1>Learn with Kai</h1>
            <p>Your AI instructor is here to help</p>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="kai-main">
        <div className="kai-container">
          {/* CHAT AREA */}
          <div className="kai-chat-wrapper">
            <div className="kai-messages">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`message ${message.type}-message`}
                >
                  {message.type === "kai" && (
                    <div className="kai-avatar">
                      <Bot size={24} />
                    </div>
                  )}
                  <div className="message-bubble">
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* SAMPLE QUESTIONS (shown if few messages) */}
            {messages.length <= 1 && (
              <div className="sample-questions">
                <h3>
                  <Lightbulb size={18} />
                  Try asking about:
                </h3>
                <div className="questions-grid">
                  {sampleQuestions.map((question, idx) => (
                    <button
                      key={idx}
                      className="sample-btn"
                      onClick={() => handleSampleQuestion(question)}
                    >
                      <Code size={16} />
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* INPUT AREA */}
          <div className="kai-input-area">
            <div className="input-wrapper">
              <input
                type="text"
                className="kai-input"
                placeholder="Ask me anything about coding..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) =>
                  e.key === "Enter" && handleSendMessage()
                }
              />
              <button
                className="send-btn"
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
              >
                <Send size={20} />
              </button>
            </div>
            <p className="input-hint">
              Kai can explain concepts, help with code, and answer questions about web development.
            </p>
          </div>
        </div>

        {/* INFO SIDEBAR */}
        <aside className="kai-sidebar">
          <div className="sidebar-card">
            <h3>💡 Tips</h3>
            <ul>
              <li>Ask follow-up questions for clarification</li>
              <li>Request code examples and explanations</li>
              <li>Ask about best practices</li>
              <li>Get debugging help</li>
            </ul>
          </div>

          <div className="sidebar-card">
            <h3>🎯 Topics</h3>
            <div className="topics-list">
              <span className="topic-tag">JavaScript</span>
              <span className="topic-tag">React</span>
              <span className="topic-tag">CSS</span>
              <span className="topic-tag">APIs</span>
              <span className="topic-tag">Databases</span>
              <span className="topic-tag">DevTools</span>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default LearnWithKai;
