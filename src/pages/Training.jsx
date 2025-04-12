import React from "react";
import { useNavigate } from "react-router-dom"; // 👈 import this
import PlanTabs from "../components/Planbutton";
import TopNavbar from "../components/TopNavbar";

export default function Training() {
  const navigate = useNavigate(); // 👈 get navigate function

  const plans = [
    {
      id: 1,
      weeks: "12 Weeks",
      title: "Push-Pull-Legs-Upper",
      description:
        "An advanced 4-day program targeting upper-body hypertrophy. Push, pull, legs, plus an extra upper session.",
      image: "banner.png",
    },
    {
      id: 2,
      weeks: "4 Weeks",
      title: "Bodyweight Basics (Level 1)",
      description:
        "This plan will go through fundamental exercises in bodyweight training and help you develop body control.",
      image: "2.png",
    },
    {
      id: 3,
      weeks: "8 Weeks",
      title: "Bodyweight Basics (Level 1)",
      description:
        "This plan will go through fundamental exercises in bodyweight training and help you develop body control.",
      image: "1.png",
    },
  ];

  const handleClick = (plan) => {
    navigate("/workout-page", { state: plan }); // Pass the plan data
  };

  return (
    <div className="mt-4 bg-black text-white min-h-screen">
      <TopNavbar />
      <header className="sticky top-0 bg-black z-10">
        {/* <PlanTabs /> */}
      </header>

      <main className="p-4 space-y-4">
        {plans.map((plan) => (
          <div
            key={plan.id}
            onClick={() => handleClick(plan)} // 👈 Make it clickable
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:bg-gray-800 transition"
          >
            <div className="relative w-full h-40 sm:h-48 md:h-52 lg:h-60">
              <img
                src={plan.image}
                alt={plan.title}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="p-3">
              <p className="text-xs text-yellow-400 uppercase mb-1">{plan.weeks}</p>
              <h2 className="font-semibold text-base md:text-lg">{plan.title}</h2>
              <p className="text-xs text-gray-400 mt-1">{plan.description}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
