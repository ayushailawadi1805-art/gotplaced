import React from "react";
import {
  Plus,
  FileText,
  Briefcase,
  Target,
  MessageSquare,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    icon: <FileText size={18} />,
    title: "Resume Review",
  },
  {
    icon: <Target size={18} />,
    title: "ATS Score",
  },
  {
    icon: <Briefcase size={18} />,
    title: "Cover Letter",
  },
  {
    icon: <MessageSquare size={18} />,
    title: "Mock Interview",
  },
];

const Sidebar = () => {
  return (
    <div className="w-72 h-screen bg-[#111111] border-r border-[#2b2b2b] flex flex-col">

      {/* Logo */}
      <div className="p-6 border-b border-[#2b2b2b]">

        <h1 className="text-2xl font-bold text-[#D4AF37]">
          GotPlaced AI
        </h1>

        <p className="text-sm text-gray-400 mt-1">
          Career Assistant
        </p>

      </div>

      {/* New Chat */}

      <div className="p-5">

        <button className="w-full flex items-center justify-center gap-2 bg-[#D4AF37] text-black font-semibold py-3 rounded-xl hover:opacity-90 transition">

          <Plus size={18} />

          New Chat

        </button>

      </div>

      {/* Menu */}

      <div className="px-4 flex-1">

        {menuItems.map((item, index) => (

          <button
            key={index}
            className="w-full flex items-center gap-3 p-4 rounded-xl hover:bg-[#1b1b1b] transition text-white mb-2"
          >

            {item.icon}

            {item.title}

          </button>

        ))}

      </div>

      {/* Bottom */}

      <div className="border-t border-[#2b2b2b] p-4">

        <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-[#1b1b1b] text-white">

          <Settings size={18} />

          Settings

        </button>

      </div>

    </div>
  );
};

export default Sidebar;