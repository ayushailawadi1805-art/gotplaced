import React from "react";

const TypingLoader = () => {
  return (
    <div className="flex items-center gap-2 px-5 py-4 bg-[#1B1B1B] rounded-2xl w-fit">

      <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-bounce"></span>

      <span
        className="w-2 h-2 rounded-full bg-[#D4AF37] animate-bounce"
        style={{ animationDelay: "0.2s" }}
      ></span>

      <span
        className="w-2 h-2 rounded-full bg-[#D4AF37] animate-bounce"
        style={{ animationDelay: "0.4s" }}
      ></span>

    </div>
  );
};

export default TypingLoader;