import React from "react";
import {
  FileText,
  Target,
  Briefcase,
  Mic,
} from "lucide-react";

const cards = [
  {
    icon: <FileText size={28} className="text-[#D4AF37]" />,
    title: "Resume Review",
    description: "Upload your resume and get AI feedback.",
  },
  {
    icon: <Target size={28} className="text-[#D4AF37]" />,
    title: "ATS Score",
    description: "Check ATS compatibility instantly.",
  },
  {
    icon: <Briefcase size={28} className="text-[#D4AF37]" />,
    title: "Cover Letter",
    description: "Generate a professional cover letter.",
  },
  {
    icon: <Mic size={28} className="text-[#D4AF37]" />,
    title: "Mock Interview",
    description: "Practice interview questions with AI.",
  },
];

const WelcomeScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-white px-10">

      <h1 className="text-5xl font-bold mb-5 text-center">
        Welcome to <span className="text-[#D4AF37]">GotPlaced AI</span>
      </h1>

      <p className="text-gray-400 text-center max-w-2xl text-lg">
        Your personal AI Career Assistant for Resume Optimization,
        ATS Analysis, Cover Letter Generation and Interview Preparation.
      </p>

      <div className="grid grid-cols-2 gap-6 mt-14 w-full max-w-5xl">

        {cards.map((card, index) => (

          <div
            key={index}
            className="bg-[#171717] border border-[#2d2d2d] rounded-2xl p-6 hover:border-[#D4AF37] transition cursor-pointer"
          >

            {card.icon}

            <h2 className="mt-4 text-xl font-semibold">
              {card.title}
            </h2>

            <p className="mt-2 text-gray-400">
              {card.description}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default WelcomeScreen;