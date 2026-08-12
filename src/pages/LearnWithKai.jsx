import { useState, useEffect } from "react";
import { Send, ArrowLeft, Bot, Lightbulb, Code } from "lucide-react";
import createStore from "../data/store";
import "./LearnWithKai.css";

function LearnWithKai({ onBack }) {
  const store = createStore();
  const state = store.getState();
  
  const [messages, setMessages] = useState(state.kaiConversations);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sampleQuestions = [
    "Explain closures in JavaScript",
    "How do I debug React components?",
    "What's the difference between REST and GraphQL?",
    "Help me understand async/await",
  ];

  const kaiResponses = {
    closure: "A closure is a function that has access to variables from its outer scope, even after that outer scope has returned. This is powerful for creating private variables and callbacks. Would you like me to show you an example?",
    react: "To debug React components, you can use React DevTools browser extension, console.log() in render methods, and the debugger keyword. What specific issue are you trying to debug?",
    rest: "REST (Representational State Transfer) uses HTTP methods (GET, POST, PUT, DELETE) on endpoints, while GraphQL uses a single endpoint with queries and mutations. REST is simpler, GraphQL is more flexible. Which one interests you more?",
    async: "Async/await makes asynchronous code look synchronous. 'async' marks a function as asynchronous, and 'await' pauses execution until a Promise resolves. This makes code much more readable than callbacks or .then() chains!",
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: "user",
      text: inputValue,
      timestamp: new Date(),
    };
    
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    store.addKaiMessage(inputValue, "user");
    setInputValue("");
    setIsLoading(true);

    // Simulate AI response delay
    setTimeout(() => {
      let responseText = "That's a great question! Let me help you understand that better. ";
      
      const input = inputValue.toLowerCase();
      if (input.includes("closure")) {
        responseText += kaiResponses.closure;
      } else if (input.includes("debug") && input.includes("react")) {
        responseText += kaiResponses.react;
      } else if (input.includes("rest") || input.includes("graphql")) {
        responseText += kaiResponses.rest;
      } else if (input.includes("async") || input.includes("await")) {
        responseText += kaiResponses.async;
      } else {
        responseText += "That's interesting! I'd love to help. Can you tell me more about what you're working on? You can ask me about JavaScript, React, CSS, APIs, or any web development topic.";
      }

      const kaiMessage = {
        id: newMessages.length + 1,
        type: "kai",
        text: responseText,
        timestamp: new Date(),
      };
      
      setMessages([...newMessages, kaiMessage]);
      store.addKaiMessage(responseText, "kai");
      setIsLoading(false);
    }, 800);
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
            <p>Your AI instructor is here to help you learn</p>
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
              {isLoading && (
                <div className="message kai-message">
                  <div className="kai-avatar">
                    <Bot size={24} />
                  </div>
                  <div className="message-bubble loading">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              )}
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
                disabled={!inputValue.trim() || isLoading}
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

          <div className="sidebar-card">
            <h3>📊 Your Stats</h3>
            <ul>
              <li><strong>{state.userProgress.totalXP}</strong> Total XP</li>
              <li><strong>{state.userProgress.dayStreak}</strong> Day Streak 🔥</li>
              <li><strong>{state.userProgress.level}</strong> Level</li>
              <li><strong>{state.userProgress.badges}</strong> Badges 🏆</li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default LearnWithKai;
