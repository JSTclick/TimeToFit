import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

const questions = [
  "Has a doctor ever told you that you have a heart condition and should only do physical activity recommended by them?",
  "Do you feel chest pain during physical activity?",
  "Have you experienced chest pain in the last month when not physically active?",
  "Do you lose balance due to dizziness or ever lose consciousness?",
  "Do you have any bone or joint problems that could worsen with physical activity?",
  "Are you currently taking medication for blood pressure or a heart condition?",
  "Is there any other reason you shouldn't do physical activity?"
];

export default function ActivityReadinessForm() {
  const [responses, setResponses] = useState(Array(questions.length).fill(null));

  const handleChange = (index, value) => {
    const updated = [...responses];
    updated[index] = value;
    setResponses(updated);
  };

  const handleSubmit = () => {
    console.log("Submitted responses:", responses);
    alert("Thank you for submitting the form!");
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-950 min-h-screen py-12 px-4 sm:px-8 lg:px-24 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-yellow-400 text-center mb-10">
          Activity Readiness Questionnaire
        </h1>

        <div className="overflow-x-auto shadow-xl rounded-3xl">
          <table className="min-w-full border border-yellow-500 rounded-3xl">
            <thead className="bg-yellow-500 text-white">
              <tr>
                <th className="px-4 py-3 text-left">SL No.</th>
                <th className="px-4 py-3 text-left">Questions</th>
                <th className="px-4 py-3 text-center">Yes</th>
                <th className="px-4 py-3 text-center">No</th>
              </tr>
            </thead>
            <tbody className="bg-gray-900">
              {questions.map((question, index) => (
                <tr key={index} className="border-t border-gray-700">
                  <td className="px-4 py-4 text-center text-yellow-300 font-semibold">
                    {index + 1}
                  </td>
                  <td className="px-4 py-4 text-gray-200 font-medium">
                    {question}
                  </td>
                  <td className="px-4 py-4 text-center">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      className={`p-2 rounded-full transition-colors duration-300 focus:outline-none ${
                        responses[index] === "Yes"
                          ? "bg-green-500 text-white"
                          : "bg-gray-800 text-green-400 hover:bg-green-600 hover:text-white"
                      }`}
                      onClick={() => handleChange(index, "Yes")}
                    >
                      <CheckCircle size={20} />
                    </motion.button>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      className={`p-2 rounded-full transition-colors duration-300 focus:outline-none ${
                        responses[index] === "No"
                          ? "bg-red-500 text-white"
                          : "bg-gray-800 text-red-400 hover:bg-red-600 hover:text-white"
                      }`}
                      onClick={() => handleChange(index, "No")}
                    >
                      <XCircle size={20} />
                    </motion.button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 text-center">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-full text-lg font-bold shadow-lg transition duration-300"
            onClick={handleSubmit}
          >
            Submit
          </motion.button>
        </div>
      </div>
    </div>
  );
}
