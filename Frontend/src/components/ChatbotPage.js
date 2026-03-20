import React from "react";
import AIChatbot from "./AIChatbot";

function ChatbotPage() {
  return (
    <div className="container">
      <h2 className="title">AI Chatbot</h2>
      <div className="card">
        <AIChatbot />
      </div>
    </div>
  );
}

export default ChatbotPage;