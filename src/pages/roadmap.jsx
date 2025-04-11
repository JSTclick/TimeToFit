import React from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Dumbbell,
  Target,
  Rocket,
  Flame,
  Trophy
} from "lucide-react";

export default function FitnessRoadmap() {
  const steps = [
    {
      month: "1ST MONTH",
      title: "Foundation & Assessment",
      icon: <Compass className="text-yellow-400 w-8 h-8" />
    },
    {
      month: "2ND MONTH",
      title: "Building Strength & Stamina",
      icon: <Dumbbell className="text-yellow-400 w-8 h-8" />
    },
    {
      month: "3RD MONTH",
      title: "Targeted Muscle Development",
      icon: <Target className="text-yellow-400 w-8 h-8" />
    },
    {
      month: "4TH MONTH",
      title: "Enhancing Performance",
      icon: <Rocket className="text-yellow-400 w-8 h-8" />
    },
    {
      month: "5TH MONTH",
      title: "Fine-Tuning & Fat Reduction",
      icon: <Flame className="text-yellow-400 w-8 h-8" />
    },
    {
      month: "6TH MONTH",
      title: "Achieving Optimal Fitness",
      icon: <Trophy className="text-yellow-400 w-8 h-8" />
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-950 to-black py-20 px-4 sm:px-8 lg:px-24 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl sm:text-6xl font-extrabold text-yellow-400 mb-4 tracking-tight">
          Your Fitness Journey
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          A dynamic 6-month roadmap for unlocking your full health and performance potential.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative max-w-7xl mx-auto overflow-x-auto"
      >
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 h-1 bg-yellow-500/60 z-0 rounded" />

        <div className="flex justify-between items-start relative z-10 space-x-6 sm:space-x-10 min-w-[720px] md:min-w-full">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-40 sm:w-48 backdrop-blur-lg bg-white/5 border border-yellow-400/20 rounded-2xl p-4 shadow-lg hover:shadow-yellow-400/30 transition duration-300"
            >
              <div className="mb-3 animate-bounce">{step.icon}</div>
              <div className="bg-yellow-400 text-black font-semibold text-xs px-4 py-1 rounded-full shadow-sm mb-2">
                {step.month}
              </div>
              <div className="text-sm text-gray-200 font-medium leading-snug">
                {step.title}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}