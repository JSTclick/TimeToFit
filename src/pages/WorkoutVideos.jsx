import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Bookmark } from "lucide-react";
import TopNavbar from '../components/TopNavbar'

const exercises = [
  {
    id: 1,
    name: "Seated Crunches (Machine)",
    videos: [
      {
        url: "https://d24cq1nx03h9us.cloudfront.net/content/en/1744124372004_v01New_2.mp4",
        title: "Abdominal Crunches (Machine)",
        description: "The target muscles are the abdominal muscles. All four of them are active but the focus of this exercise is on the rectus abdominis (red).The obliques (pink) assist in flexion, and the transverse is pulled slightly inward to maintain intra-abdominal pressure.",
      },
      {
        url: "https://d24cq1nx03h9us.cloudfront.net/content/en/1615500061638_15.mp4",
        title: "Abdominal Crunches",
        description: "On the left we see how rectus abdominis pulls the chest down and creates spinal flexion. On the right we see part of the core muscles (pelvic floor muscles and transversus abdominis) whose function is to maintain intra-abdominal pressure.It is important to contract the pelvic floor muscles throughout the exercise and hold the abdomen in slightly.",
      },
      {
        url: "https://d24cq1nx03h9us.cloudfront.net/content/en/1735554106299_v01new.mp4",
        title: "Abdominal Crunches",
        description: "On the left we see how rectus abdominis pulls the chest down and creates spinal flexion. On the right we see part of the core muscles (pelvic floor muscles and transversus abdominis) whose function is to maintain intra-abdominal pressure.It is important to contract the pelvic floor muscles throughout the exercise and hold the abdomen in slightly.",
      },
      {
        url: "https://d24cq1nx03h9us.cloudfront.net/content/en/1735421678286_v01new03.mp4",
        title: "Chest Press (Machine)",
        description: "On the left we see how rectus abdominis pulls the chest down and creates spinal flexion. On the right we see part of the core muscles (pelvic floor muscles and transversus abdominis) whose function is to maintain intra-abdominal pressure.It is important to contract the pelvic floor muscles throughout the exercise and hold the abdomen in slightly.",
      },
    ],
  },
  {
    id: 2,
    name: "Back Workout",
    videos: [
      {
        url: "https://d24cq1nx03h9us.cloudfront.net/content/en/1744307859019_v01new_03.mp4",
        title: "Pull-Ups",
        description: "The target muscles are the abdominal muscles. All four of them are active but the focus of this exercise is on the rectus abdominis (red).The obliques (pink) assist in flexion, and the transverse is pulled slightly inward to maintain intra-abdominal pressure.",
      },
      {
        url: "https://d24cq1nx03h9us.cloudfront.net/content/en/1744193383857_v01new_02.mp4",
        title: "Deadlifts",
        description: "On the left we see how rectus abdominis pulls the chest down and creates spinal flexion. On the right we see part of the core muscles (pelvic floor muscles and transversus abdominis) whose function is to maintain intra-abdominal pressure.It is important to contract the pelvic floor muscles throughout the exercise and hold the abdomen in slightly.",
      },
      {
        url: "https://d24cq1nx03h9us.cloudfront.net/exercises/videos_720p/793.mp4",
        title: "Hip Extension (Machine)",
        description: "The target muscles are the abdominal muscles. All four of them are active but the focus of this exercise is on the rectus abdominis (red).The obliques (pink) assist in flexion, and the transverse is pulled slightly inward to maintain intra-abdominal pressure.",
      },
      {
        url: "https://d24cq1nx03h9us.cloudfront.net/content/en/1721808080333_v1.mp4",
        title: "Deadlifts",
        description: "On the left we see how rectus abdominis pulls the chest down and creates spinal flexion. On the right we see part of the core muscles (pelvic floor muscles and transversus abdominis) whose function is to maintain intra-abdominal pressure.It is important to contract the pelvic floor muscles throughout the exercise and hold the abdomen in slightly.",
      }
    ],
  },
  {
    id: 3,
    name: "Seated Crunches (Machine)",
    videos: [
      {
        url: "https://d24cq1nx03h9us.cloudfront.net/content/en/1744124372004_v01New_2.mp4",
        title: "Abdominal Crunches (Machine)",
        description: "The target muscles are the abdominal muscles. All four of them are active but the focus of this exercise is on the rectus abdominis (red).The obliques (pink) assist in flexion, and the transverse is pulled slightly inward to maintain intra-abdominal pressure.",
      },
      {
        url: "https://d24cq1nx03h9us.cloudfront.net/content/en/1615500061638_15.mp4",
        title: "Abdominal Crunches",
        description: "On the left we see how rectus abdominis pulls the chest down and creates spinal flexion. On the right we see part of the core muscles (pelvic floor muscles and transversus abdominis) whose function is to maintain intra-abdominal pressure.It is important to contract the pelvic floor muscles throughout the exercise and hold the abdomen in slightly.",
      },
      {
        url: "https://d24cq1nx03h9us.cloudfront.net/content/en/1735554106299_v01new.mp4",
        title: "Abdominal Crunches",
        description: "On the left we see how rectus abdominis pulls the chest down and creates spinal flexion. On the right we see part of the core muscles (pelvic floor muscles and transversus abdominis) whose function is to maintain intra-abdominal pressure.It is important to contract the pelvic floor muscles throughout the exercise and hold the abdomen in slightly.",
      },
      {
        url: "https://d24cq1nx03h9us.cloudfront.net/content/en/1735421678286_v01new03.mp4",
        title: "Chest Press (Machine)",
        description: "On the left we see how rectus abdominis pulls the chest down and creates spinal flexion. On the right we see part of the core muscles (pelvic floor muscles and transversus abdominis) whose function is to maintain intra-abdominal pressure.It is important to contract the pelvic floor muscles throughout the exercise and hold the abdomen in slightly.",
      },
    ],
  },
  {
    id: 4,
    name: "Back Workout",
    videos: [
      {
        url: "https://d24cq1nx03h9us.cloudfront.net/content/en/1744307859019_v01new_03.mp4",
        title: "Pull-Ups",
        description: "Classic bodyweight exercise to build back width.",
      },
      {
        url: "https://d24cq1nx03h9us.cloudfront.net/content/en/1744193383857_v01new_02.mp4",
        title: "Deadlifts",
        description: "Engages lower back and full posterior chain.",
      },
      {
        url: "https://d24cq1nx03h9us.cloudfront.net/exercises/videos_720p/793.mp4",
        title: "Hip Extension (Machine)",
        description: "Classic bodyweight exercise to build back width.",
      },
      {
        url: "https://d24cq1nx03h9us.cloudfront.net/content/en/1721808080333_v1.mp4",
        title: "Deadlifts",
        description: "Engages lower back and full posterior chain.",
      }
    ],
  }
];

export default function WorkoutPage() {

  
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);

  const currentExercise = exercises[exerciseIndex];
  const currentVideo = currentExercise.videos[videoIndex];

  const handleNextVideo = () => {
    if (videoIndex < currentExercise.videos.length - 1) {
      setVideoIndex(videoIndex + 1);
    }
  };

  const handlePrevVideo = () => {
    if (videoIndex > 0) {
      setVideoIndex(videoIndex - 1);
    }
  };

  const handleNextExercise = () => {
    setExerciseIndex((prev) => (prev + 1) % exercises.length);
    setVideoIndex(0);
  };

  return (
    <div className="min-h-screen bg-black text-white px-2 py-4 md:px-6 lg:px-12">
    <TopNavbar />
    <h1 className="text-2xl md:text-3xl font-bold text-yellow-400 text-center mb-6">
      {currentExercise.name}
    </h1>

    <div className="relative w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentVideo.title}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 rounded-lg p-4 md:p-6 shadow-xl"
        >
          <div className="relative w-full h-[200px] md:h-[400px] lg:h-[550px]">
            <video
              src={currentVideo.url}
              controls
              className="w-full h-full rounded-lg object-cover"
            />
            <button className="absolute top-2 right-2 bg-white/10 p-2 rounded-full">
              <Bookmark className="text-white" />
            </button>
          </div>

          <h2 className="text-lg md:text-xl font-semibold text-yellow-300">
            {currentVideo.title}
          </h2>
          <p className="text-sm text-gray-300">{currentVideo.description}</p>

          <div className="flex justify-between mt-4">
            <button
              onClick={handlePrevVideo}
              disabled={videoIndex === 0}
              className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full disabled:opacity-30"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={handleNextVideo}
              disabled={videoIndex === currentExercise.videos.length - 1}
              className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full disabled:opacity-30"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>

    {/* Next Exercise Button */}
    <div className="text-center mt-8">
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        onClick={handleNextExercise}
        className="bg-yellow-400 w-full text-black text-lg font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-yellow-500/50 transition-all"
      >
        Next Exercise
      </motion.button>
    </div>

    {/* Related Workouts */}
    <div className="mt-10">
      <h3 className="text-xl font-semibold text-white mb-4">
         Related Workouts
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {exercises.map((ex) =>
          ex.videos.slice(0, 1).map((vid, vIdx) => (
            <div
              key={vid.title + vIdx}
              className="bg-gray-800 rounded-lg p-2 hover:scale-105 transition-transform duration-300"
            >
              <video
                src={vid.url}
                className="w-full h-25 md:h-48 lg:h-38 rounded-md object-cover"
                autoPlay
                loop
              />
              <p className="text-sm text-yellow-200 mt-2 font-medium">
                {vid.title}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  </div>
);
}