import React, { useState } from "react";
import { Sparkles } from "lucide-react";

const AIAssistantPage = () => {

  const [message, setMessage] = useState("");
const handleSend = async () => {
  if (!message.trim()) return;

  try {
    const res = await fetch("http://localhost:5000/api/ai/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
      }),
    });

    const data = await res.json();

    alert(data.reply);

    setMessage("");
  } catch (err) {
    console.error(err);
    alert("Server Error");
  }
};
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white flex flex-col">

      {/* Header */}
      <div className="border-b border-gray-800 px-8 py-5 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <Sparkles className="text-[#D4AF37]" size={30} />
          <h1 className="text-2xl font-bold text-[#D4AF37]">
            GotPlaced AI
          </h1>
        </div>

        <button className="bg-[#D4AF37] text-black px-5 py-2 rounded-lg font-semibold hover:opacity-90">
          New Chat
        </button>

      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">

        <h1 className="text-5xl font-bold mb-5 text-center">
          Your AI Career Assistant
        </h1>

        <p className="text-gray-400 text-lg text-center max-w-2xl">
          Upload your resume, get ATS score, optimize your resume,
          generate cover letters and prepare for interviews with AI.
        </p>

        {/* Suggestions */}
        <div className="grid grid-cols-2 gap-5 mt-12 w-full max-w-4xl">

          <button className="bg-[#1A1A1A] hover:bg-[#232323] rounded-xl p-6 text-left transition">
            📄 Review My Resume
          </button>

          <button className="bg-[#1A1A1A] hover:bg-[#232323] rounded-xl p-6 text-left transition">
            🎯 ATS Score
          </button>

          <button className="bg-[#1A1A1A] hover:bg-[#232323] rounded-xl p-6 text-left transition">
            💼 Generate Cover Letter
          </button>

          <button className="bg-[#1A1A1A] hover:bg-[#232323] rounded-xl p-6 text-left transition">
            🎤 Mock Interview
          </button>

        </div>

        {/* Input */}
        <div className="w-full max-w-4xl mt-14">

          <div className="bg-[#1A1A1A] rounded-2xl flex items-center px-5 py-4">

            <input
  type="text"
  placeholder="Ask GotPlaced AI anything..."
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  className="flex-1 bg-transparent outline-none text-white text-lg"
/>

            <button
  onClick={handleSend}
  className="bg-[#D4AF37] text-black px-5 py-3 rounded-xl font-semibold"
>
  Send
</button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AIAssistantPage;