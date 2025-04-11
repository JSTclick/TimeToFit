import React, { useState } from "react";
import { motion } from "framer-motion";


export default function BodyFatCalculator() {
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [waist, setWaist] = useState();
  const [neck, setNeck] = useState();
  const [hip, setHip] = useState(90);
  const [result, setResult] = useState(null);

  const calculateBodyFat = () => {
    let bodyFat = 0;

    if (gender === "male") {
      bodyFat =
        495 /
          (1.0324 -
            0.19077 * Math.log10(waist - neck) +
            0.15456 * Math.log10(height)) -
        450;
    } else {
      bodyFat =
        495 /
          (1.29579 -
            0.35004 * Math.log10(waist + hip - neck) +
            0.221 * Math.log10(height)) -
        450;
    }

    setResult(bodyFat.toFixed(2));
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-950 min-h-screen py-12 px-4 sm:px-8 lg:px-24 text-white">
        <div className="">
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-3">
              Time to Fit - Body Fat Calculator
            </h2>
            <p className="text-gray-300 text-lg">
              Estimate your body fat percentage using the U.S. Navy Method. Fill in the details to get personalized insights.
            </p>
          </motion.div>
        </div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <div>


          <div className="bg-gray-900 p-8 rounded-3xl shadow-2xl space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 text-sm font-semibold">Gender</label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full p-3 bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="none">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 text-sm font-semibold">Age</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full p-3 bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-semibold">Height (cm)</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full p-3 bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-semibold">Weight (kg)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full p-3 bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-semibold">Waist (cm)</label>
                <input
                  type="number"
                  value={waist}
                  onChange={(e) => setWaist(Number(e.target.value))}
                  className="w-full p-3 bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-semibold">Neck (cm)</label>
                <input
                  type="number"
                  value={neck}
                  onChange={(e) => setNeck(Number(e.target.value))}
                  className="w-full p-3 bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {gender === "female" && (
                <div>
                  <label className="block mb-1 text-sm font-semibold">Hip (cm)</label>
                  <input
                    type="number"
                    value={hip}
                    onChange={(e) => setHip(Number(e.target.value))}
                    className="w-full p-3 bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              )}
            </div>

            <div className="pt-4">
              <button
                onClick={calculateBodyFat}
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg w-full transition duration-300"
              >
                Calculate Body Fat %
              </button>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="bg-gray-800 p-8 rounded-3xl shadow-2xl"
        >
          <h3 className="text-2xl font-bold mb-4 text-yellow-400">
            Your Body Fat Percentage is
          </h3>
          <p className="text-5xl font-extrabold text-green-400 mb-4">
            {result ? `${result}%` : `--`}
          </p>
          <p className="text-gray-300 text-sm mb-4">
            Body fat percentage is a key indicator of good health. A high body fat percentage may put you at a higher risk of lifestyle diseases.
          </p>
          <p className="text-sm text-gray-400 mb-6">
            Males are advised to maintain their body fat level at 15% or lower, while females are advised to maintain their body fat level at 25% or lower.
          </p>
          <div className="border-t border-gray-700 pt-4">
            <p className="text-base font-semibold text-white">
              Take the first step to unlocking a new you!
            </p>
            <p className="text-sm text-gray-400 mt-1">
              3 million+ members trust Time to Fit for their fitness & nutrition needs.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
