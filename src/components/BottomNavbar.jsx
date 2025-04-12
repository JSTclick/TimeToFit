import React from "react";
import { Link } from "react-router-dom";
import { Home, Dumbbell, Shapes, BookOpen, PlayCircle } from "lucide-react";

const BottomNavBar = () => {
  return (
    <nav className="bg-gray-900 border-t border-gray-700 py-3 px-4 flex justify-around text-xs fixed bottom-0 w-full md:hidden z-50">
      
      <Link to="/dashboard" className="flex flex-col items-center text-yellow-400">
        <Home className="w-5 h-5" />
        <span>Home</span>
      </Link>

      <Link to="/workout-page" className="flex flex-col items-center hover:text-yellow-400">
        <Dumbbell className="w-5 h-5" />
        <span>Exercises</span>
      </Link>

      <Link to="/3d-model" className="flex flex-col items-center hover:text-yellow-400">
        <Shapes className="w-5 h-5" />
        <span>3D Model</span>
      </Link>

      <Link to="/theory" className="flex flex-col items-center hover:text-yellow-400">
        <BookOpen className="w-5 h-5" />
        <span>Theory</span>
      </Link>

      <Link to="/training" className="flex flex-col items-center hover:text-yellow-400">
        <PlayCircle className="w-5 h-5" />
        <span>Training</span>
      </Link>

    </nav>
  );
};

export default BottomNavBar;
