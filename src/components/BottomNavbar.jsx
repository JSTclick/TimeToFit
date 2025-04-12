import React from "react";
import { Home, Dumbbell, Shapes, BookOpen, PlayCircle } from "lucide-react";

const BottomNavBar = () => {
  return (
    <nav className="bg-gray-900 border-t border-gray-700 py-3 px-4 flex justify-around text-xs fixed bottom-0 w-full md:hidden z-50">
      <div className="flex flex-col items-center text-yellow-400">
        <Home className="w-5 h-5" />
        <span>Home</span>
      </div>
      <div className="flex flex-col items-center hover:text-yellow-400 cursor-pointer">
        <Dumbbell className="w-5 h-5" />
        <span>Exercises</span>
      </div>
      <div className="flex flex-col items-center hover:text-yellow-400 cursor-pointer">
        <Shapes className="w-5 h-5" />
        <span>3D Model</span>
      </div>
      <div className="flex flex-col items-center hover:text-yellow-400 cursor-pointer">
        <BookOpen className="w-5 h-5" />
        <span>Theory</span>
      </div>
      <div className="flex flex-col items-center hover:text-yellow-400 cursor-pointer">
        <PlayCircle className="w-5 h-5" />
        <span>Training</span>
      </div>
    </nav>
  );
};

export default BottomNavBar;
