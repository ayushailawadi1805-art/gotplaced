import React, { useState } from "react";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import { sendMessage } from "@/services/aiService";

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (text) => {
    if (!text.trim()) return;

    const userMessage = {
      role: "user",
      text,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

try {
  const response = await sendMessage(text);

  const aiMessage = {
    role: "assistant",
    text: response.reply,
  };

  setMessages((prev) => [...prev, aiMessage]);
} catch (error) {
  setMessages((prev) => [
    ...prev,
    {
      role: "assistant",
      text: "❌ Something went wrong.",
    },
  ]);
}

setLoading(false);
  };

  return (
    <div className="flex flex-col flex-1 h-screen bg-[#0F0F0F]">

      {/* Header */}

      <div className="h-20 border-b border-[#2b2b2b] flex items-center justify-between px-8">

        <div>

          <h1 className="text-2xl font-bold text-white">
            GotPlaced AI
          </h1>

          <p className="text-gray-500">
            Career Assistant
          </p>

        </div>

      </div>

      {/* Messages */}

      <ChatMessages
        messages={messages}
        loading={loading}
      />

      {/* Input */}

      <ChatInput onSend={handleSend} />

    </div>
  );
};

export default ChatWindow;