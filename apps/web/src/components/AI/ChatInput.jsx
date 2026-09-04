import React, { useState } from "react";
import { Send, Paperclip } from "lucide-react";

const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="border-t border-[#2b2b2b] bg-[#111111] p-5">

      <div className="flex items-center bg-[#1B1B1B] rounded-2xl px-5 py-3">

        <button className="text-gray-400 hover:text-[#D4AF37] mr-3">
          <Paperclip size={20} />
        </button>

        <input
          type="text"
          placeholder="Message GotPlaced AI..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none text-white"
        />

        <button
          onClick={handleSubmit}
          className="ml-3 bg-[#D4AF37] text-black p-3 rounded-xl hover:opacity-90"
        >
          <Send size={18} />
        </button>

      </div>

    </div>
  );
};

export default ChatInput;