import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Dumbbell,
  Video,
  Laptop,
  Tv2,
  CheckCircle
} from "lucide-react";

export default function Prices() {
  const packages = {
    video: [
      { duration: "1 Month", price: "₹999", features: ["Weekly video tips", "Custom workout plans", "Progress check-ins"] },
      { duration: "3 Months", price: "₹2499", features: ["All 1-month features", "Priority coach support", "Diet guidance"] },
      { duration: "6 Months", price: "₹4499", features: ["All 3-month features", "Monthly video analysis", "Advanced goal tracking"] }
    ],
    online: [
      { duration: "1 Month", price: "₹1499", features: ["Access to live Q&A", "Recorded sessions", "Weekly assessments"] },
      { duration: "3 Months", price: "₹3999", features: ["All 1-month features", "Workout modifications", "Private group access"] },
      { duration: "6 Months", price: "₹6999", features: ["All 3-month features", "Personalized coaching", "Bonus nutrition classes"] }
    ],
    live: [
      { duration: "1 Month", price: "₹1999", features: ["Live sessions thrice/week", "Chat with trainers", "Basic diet support"] },
      { duration: "3 Months", price: "₹4999", features: ["All 1-month features", "1-on-1 trainer session", "Form correction feedback"] },
      { duration: "6 Months", price: "₹8999", features: ["All 3-month features", "Monthly fitness evaluations", "Goal milestone tracking"] }
    ]
  };

  const [active, setActive] = useState("video");

  return (
    <div className="bg-gradient-to-b from-gray-950 to-black py-10 px-4 sm:px-8 lg:px-24 text-yellow-400">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Pricing</h2>
        <Dumbbell className="mx-auto w-8 h-8 animate-pulse" />
      </div>

      <div className="text-center mb-10">
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setActive("video")}
            className={`px-6 py-2 rounded-full border text-sm font-medium transition duration-300 shadow-md hover:scale-105 ${
              active === "video"
                ? "bg-yellow-400 text-black border-yellow-400"
                : "border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
            }`}
          >
            <Video className="inline-block mr-2 w-4 h-4" /> Video Sending
          </button>
          <button
            onClick={() => setActive("online")}
            className={`px-6 py-2 rounded-full border text-sm font-medium transition duration-300 shadow-md hover:scale-105 ${
              active === "online"
                ? "bg-yellow-400 text-black border-yellow-400"
                : "border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
            }`}
          >
            <Laptop className="inline-block mr-2 w-4 h-4" /> Online Classes
          </button>
          <button
            onClick={() => setActive("live")}
            className={`px-6 py-2 rounded-full border text-sm font-medium transition duration-300 shadow-md hover:scale-105 ${
              active === "live"
                ? "bg-yellow-400 text-black border-yellow-400"
                : "border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
            }`}
          >
            <Tv2 className="inline-block mr-2 w-4 h-4" /> Live Classes
          </button>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4"
      >
        {packages[active].map((plan, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-[#1a1a1a] border border-yellow-400 rounded-2xl p-6 text-yellow-400 shadow-lg transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:shadow-yellow-400"
          >
            <div className="text-xl font-bold mb-2">{plan.duration}</div>
            <div className="text-2xl font-extrabold mb-4">{plan.price}</div>
            <ul className="text-sm text-left space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" /> {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
