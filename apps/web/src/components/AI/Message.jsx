import React from "react";
import { Bot, User } from "lucide-react";

const Message = ({ role, text }) => {
  const isUser = role === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      } mb-6`}
    >
      <div
        className={`flex gap-3 max-w-3xl ${
          isUser ? "flex-row-reverse" : ""
        }`}
      >
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            isUser
              ? "bg-[#D4AF37] text-black"
              : "bg-[#1f1f1f] text-[#D4AF37]"
          }`}
        >
          {isUser ? <User size={20} /> : <Bot size={20} />}
        </div>

        <div
          className={`rounded-2xl px-5 py-4 whitespace-pre-wrap ${
            isUser
              ? "bg-[#D4AF37] text-black"
              : "bg-[#1b1b1b] text-white"
          }`}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default Message;