import React from "react";
import { motion } from "framer-motion";

export default function BodyFatChart() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-950 min-h-screen text-white py-12 px-4 sm:px-8 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-2">
          Understanding
        </h2>
        <p className="text-lg text-gray-300">Your Body Fat</p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="flex justify-center mb-12"
      >
        <img
          src="fat.png"
          alt="Body Fat Illustration"
          className="w-full max-w-2xl rounded-xl shadow-2xl border border-yellow-500"
        />
      </motion.div>

      {/* Info Cards */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="bg-gray-800 text-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <h4 className="text-center text-lg font-bold text-yellow-400 mb-4">
            The American Council on Exercise Body Fat Categorization
          </h4>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-yellow-500 text-black">
                <th className="p-2 text-left">Description</th>
                <th className="p-2 text-left">Men</th>
                <th className="p-2 text-left">Women</th>
              </tr>
            </thead>
            <tbody>
              {["Essential fat", "Athletes", "Fitness", "Average", "Obese"].map((desc, idx) => {
                const values = [
                  ["10 - 13 %", "2 - 5 %"],
                  ["14 - 20 %", "6 - 13 %"],
                  ["21 - 24 %", "14 - 17 %"],
                  ["25 - 31 %", "18 - 24 %"],
                  ["32+ %", "25+ %"]
                ];
                return (
                  <tr key={idx} className="border-t border-yellow-500">
                    <td className="py-2 px-2 font-medium">{desc}</td>
                    <td className="py-2 px-2">{values[idx][0]}</td>
                    <td className="py-2 px-2">{values[idx][1]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="bg-gray-800 text-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <h4 className="text-center text-lg font-bold text-yellow-400 mb-4">
            Jackson & Pollock Idle Body Fat Percentages
          </h4>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-yellow-500 text-black">
                <th className="p-2 text-left">Age</th>
                <th className="p-2 text-left">Women</th>
                <th className="p-2 text-left">Men</th>
              </tr>
            </thead>
            <tbody>
              {[20, 25, 30, 35, 40, 45, 50, 55].map((age, idx) => {
                const values = [
                  ["17.7 %", "8.5 %"],
                  ["18.4 %", "10.5 %"],
                  ["19.3 %", "12.7 %"],
                  ["21.5 %", "13.7 %"],
                  ["22.2 %", "15.3 %"],
                  ["22.9 %", "16.4 %"],
                  ["25.2 %", "18.9 %"],
                  ["26.3 %", "20.9 %"]
                ];
                return (
                  <tr key={idx} className="border-t border-yellow-500">
                    <td className="py-2 px-2 font-medium">{age}</td>
                    <td className="py-2 px-2">{values[idx][0]}</td>
                    <td className="py-2 px-2">{values[idx][1]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
