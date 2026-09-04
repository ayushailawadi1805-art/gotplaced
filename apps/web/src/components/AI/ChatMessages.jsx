import React, { useEffect, useRef } from "react";
import Message from "./Message";
import TypingLoader from "./TypingLoader";

const ChatMessages = ({ messages, loading }) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  return (
    <div className="flex-1 overflow-y-auto px-8 py-8">

      {messages.length === 0 ? (

        <div className="text-center mt-32">

          <h1 className="text-5xl font-bold text-white">
            🤖 GotPlaced AI
          </h1>

          <p className="text-gray-400 mt-5 text-lg">
            Ask anything about Resume, ATS, Jobs,
            Interview Preparation or Career Guidance.
          </p>

        </div>

      ) : (

        messages.map((msg, index) => (

          <Message
            key={index}
            role={msg.role}
            text={msg.text}
          />

        ))

      )}

      {loading && <TypingLoader />}

      <div ref={bottomRef} />

    </div>
  );
};

export default ChatMessages;