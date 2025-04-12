import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopNavbar from '../components/TopNavbar'
import {
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Edit,
  Calendar,
  List,
} from "lucide-react";

export default function WorkoutPage() {
  const navigate = useNavigate();

  // Which tab is active: 0 = schedule, 1 = list
  const [activeTab, setActiveTab] = useState(0);

  // Track selected day or null if none
  const [selectedDay, setSelectedDay] = useState(null);

  // Bottom sheet states: 'closed' | 'partial' | 'full'
  const [sheetState, setSheetState] = useState("closed");

  // Simulated exercises data
  const exercises = [
    {
      id: 1,
      name: "Plank",
      sets: "4 sets: 20 sec, 20 sec, 20 sec, 20 sec",
      image: "banner.png",
    },
    {
      id: 2,
      name: "Chair Squat",
      sets: "4 sets: 10 reps, 8 reps, 6 reps, 4 reps",
      image: "1.png",
    },
    {
      id: 3,
      name: "Bird Dog",
      sets: "5 sets: 20 sec, 20 sec, 20 sec, 20 sec, 20 sec",
      image: "2.png",
    },
    {
      id: 4,
      name: "Scapular Pull-up (Bodyweight)",
      sets: "4 sets: 15 reps, 12 reps, 9 reps, 6 reps",
      image: "1.png",
    },
    {
      id: 5,
      name: "Jump Rope",
      sets: "3 sets: 30 sec, 30 sec, 30 sec",
      image: "1.png",
    },
    {
      id: 6,
      name: "Thorax Extension (Bench)",
      sets: "1 set: 20 sec",
      image: "1.png",
    },
  ];

  // Week Ranges (3 lumps of 4 weeks = 12 weeks total)
  const weekRanges = ["Week 1 - 4", "Week 5 - 8", "Week 9 - 12"];

  // All weeks data: each item is an array of 4 sub-arrays (each sub-array = 1 week).
  const allWeeks = [
    // 1st range => W1, W2, W3, W4
    [
      ["1", "2", "3", "4", "5", "6", "7"],
      ["1", "2", "3", "4", "5", "6", "7"],
      ["1", "2", "3", "4", "5", "6", "7"],
      ["1", "2", "3", "4", "5", "6", "7"],
    ],
    // 2nd range => W5, W6, W7, W8
    [
      ["1", "2", "3", "4", "5", "6", "7"],
      ["1", "2", "3", "4", "5", "6", "7"],
      ["1", "2", "3", "4", "5", "6", "7"],
      ["1", "2", "3", "4", "5", "6", "7"],
    ],
    // 3rd range => W9, W10, W11, W12
    [
      ["1", "2", "3", "4", "5", "6", "7"],
      ["1", "2", "3", "4", "5", "6", "7"],
      ["1", "2", "3", "4", "5", "6", "7"],
      ["1", "2", "3", "4", "5", "6", "7"],
    ],
  ];

  // Current range index: 0: W1-4, 1: W5-8, 2: W9-12
  const [rangeIndex, setRangeIndex] = useState(0);

  const handleDayClick = (weekIdx, dayIdx) => {
    setSelectedDay(`W${weekIdx + 1 + rangeIndex * 4}D${dayIdx + 1}`);
    setSheetState("partial"); // open bottom sheet in partial mode
  };

  const closeSheet = () => {
    setSheetState("closed");
    setSelectedDay(null);
  };

  const toggleSheetFull = () => {
    setSheetState((prev) => (prev === "partial" ? "full" : "partial"));
  };

  // Navigate week range arrows
  const handlePrevRange = () => {
    if (rangeIndex > 0) {
      setRangeIndex((prev) => prev - 1);
    }
  };
  const handleNextRange = () => {
    if (rangeIndex < weekRanges.length - 1) {
      setRangeIndex((prev) => prev + 1);
    }
  };

  // Computed classes for bottom sheet
  const sheetBaseClasses =
    "fixed bottom-0 left-0 w-full bg-gray-900 text-white transition-transform duration-300 z-50 border-t border-gray-700";
  let sheetTranslate = "translate-y-full";
  if (sheetState === "partial") {
    sheetTranslate = "translate-y-[40%]"; // partially open
  } else if (sheetState === "full") {
    sheetTranslate = "translate-y-0";
  }

  // On any workout click, navigate to "/workout-videos" page.
  const handleWorkoutClick = () => {
    navigate("/workout-videos");
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
        <TopNavbar/>
      {/* Header Section */}
      <header className="p-4 border-b border-gray-700">
        <div className="text-sm text-yellow-400 uppercase mb-1">12 Weeks</div>
        <h1 className="text-xl font-bold">Push-Pull-Legs-Upper</h1>
        <p className="text-xs text-gray-400 mt-1">
          An advanced 4-day program targeting upper-body hypertrophy. Push, pull,
          legs, plus an extra upper session.
        </p>
      </header>

      {/* Tabs with Icons */}
      <div className="flex border-b border-gray-700 text-sm">
        <button
          onClick={() => setActiveTab(0)}
          className={`flex-1 py-3 text-center flex items-center justify-center gap-1 ${
            activeTab === 0
              ? "text-yellow-400 border-b-2 border-yellow-400 font-semibold"
              : "text-gray-300"
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>Workouts schedule</span>
        </button>
        <button
          onClick={() => setActiveTab(1)}
          className={`flex-1 py-3 text-center flex items-center justify-center gap-1 ${
            activeTab === 1
              ? "text-yellow-400 border-b-2 border-yellow-400 font-semibold"
              : "text-gray-300"
          }`}
        >
          <List className="w-4 h-4" />
          <span>Workouts list</span>
        </button>
      </div>

      {/* Content area */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === 0 && (
          <div className="p-4 space-y-4">
            {/* Week Navigation */}
            <div className="flex items-center justify-center space-x-4">
              <button
                className={`p-2 text-gray-300 hover:text-yellow-400 ${
                  rangeIndex === 0 && "opacity-50 cursor-not-allowed"
                }`}
                onClick={handlePrevRange}
                disabled={rangeIndex === 0}
              >
                <ChevronLeft />
              </button>
              <p className="text-sm text-yellow-400">{weekRanges[rangeIndex]}</p>
              <button
                className={`p-2 text-gray-300 hover:text-yellow-400 ${
                  rangeIndex === weekRanges.length - 1 &&
                  "opacity-50 cursor-not-allowed"
                }`}
                onClick={handleNextRange}
                disabled={rangeIndex === weekRanges.length - 1}
              >
                <ChevronRight />
              </button>
            </div>

            {/* Week Calendar */}
            <div className="relative h-auto transition-opacity duration-300">
              <div className="bg-gray-800 rounded-lg p-4 text-center text-sm">
                <div className="grid grid-cols-8 mb-2 text-gray-400">
                  <div></div>
                  <div>S</div>
                  <div>M</div>
                  <div>T</div>
                  <div>W</div>
                  <div>T</div>
                  <div>F</div>
                  <div>S</div>
                </div>
                {allWeeks[rangeIndex].map((weekDays, wIdx) => (
                  <div key={wIdx} className="grid grid-cols-8 mb-2">
                    <div className="text-yellow-400">
                      W{rangeIndex * 4 + wIdx + 1}
                    </div>
                    {weekDays.map((day, dIdx) => (
                      <button
                        key={dIdx}
                        onClick={() => handleDayClick(wIdx, dIdx)}
                        className="text-sm text-gray-300 hover:text-yellow-400"
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 text-center mt-2">
                Click the plus button to add workouts.
              </p>
            </div>
          </div>
        )}

        {activeTab === 1 && (
          <div className="p-4">
            <p className="text-gray-400">Your workouts list goes here...</p>
          </div>
        )}
      </div>

      {/* Bottom Sheet */}
      <div className={`${sheetBaseClasses} ${sheetTranslate}`}>
        {/* Sheet Header (Partial / Full toggle) */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-700">
          <div>
            <h2 className="text-base font-semibold">
              {selectedDay ? `Workout 1` : "No day selected"}
            </h2>
            <p className="text-xs text-gray-400">11 exercises</p>
          </div>
          {sheetState !== "closed" && (
            <button
              onClick={toggleSheetFull}
              className="text-yellow-400 hover:text-yellow-300"
            >
              {sheetState === "partial" ? <ChevronUp /> : <ChevronDown />}
            </button>
          )}
          <button className="text-xs bg-yellow-400 text-black px-2 py-1 rounded-md font-semibold flex items-center gap-1">
            Assign clients
            <Edit size={14} />
          </button>
        </div>

        {/* Sheet Content - Clickable exercises */}
        <div className="p-4 space-y-3 overflow-y-auto h-[40vh] md:h-[50vh]">
          {exercises.map((ex) => (
            <div
              key={ex.id}
              onClick={() => handleWorkoutClick(ex)}
              className="flex items-center gap-2 p-2 bg-gray-800 rounded cursor-pointer hover:bg-gray-700"
            >
              <img
                src={ex.image}
                alt={ex.name}
                className="w-14 h-14 object-cover rounded"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold">{ex.name}</p>
                <p className="text-xs text-gray-400">{ex.sets}</p>
              </div>
              <button className="text-yellow-400 text-xs hover:text-yellow-300">
                Detailed sets
              </button>
            </div>
          ))}
          <div className="flex justify-center items-center py-2 text-sm bg-gray-900 text-gray-300 rounded">
            Rest <span className="mx-2">3 min</span>
          </div>
        </div>

        {/* Close Button */}
        <div className="text-center border-t border-gray-700 py-2">
          <button
            className="text-xs text-gray-400 hover:text-yellow-300"
            onClick={closeSheet}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
