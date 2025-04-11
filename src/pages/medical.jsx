import React, { useState } from "react";
import { motion } from "framer-motion";

export default function MedicalHistoryForm() {
  const medicalItems = [
    "Hypertension",
    "Hypotension",
    "Diabetes",
    "High Cholesterol",
    "Obesity",
    "Family History of Heart Disease",
    "Heart Problems",
    "Neck Pain",
    "Knee Pain",
    "Shoulder Pain",
    "Other (please specify):"
  ];

  const additionalItems = [
    "Age 40+",
    "Smoking",
    "Respiratory Issues (Asthma, Breathlessness)",
    "Post-operative Status",
    "Hormonal Issues (PCOD, PCOS, Thyroid)",
    "Gynecological Problems",
    "Allergies",
    "Medication",
    "Hernia",
    "Pregnancy"
  ];

  const [others, setOthers] = useState("");
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheck = (item) => {
    setCheckedItems((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  const handleSubmit = () => {
    const selected = Object.entries(checkedItems)
      .filter(([key, value]) => value)
      .map(([key]) => key);
    console.log("Selected Medical History:", selected);
    console.log("Others:", others);
    alert("Medical history submitted successfully!");
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-950 min-h-screen py-12 px-4 sm:px-8 lg:px-24 text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-yellow-400 mb-8"
        >
          Medical History Form
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            {medicalItems.map((item, index) => (
              <label key={index} className="flex items-center mb-4">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-yellow-400 rounded mr-3"
                  checked={!!checkedItems[item]}
                  onChange={() => handleCheck(item)}
                />
                <span className="text-white font-medium">{item}</span>
              </label>
            ))}
          </div>

          <div>
            {additionalItems.map((item, index) => (
              <label key={index} className="flex items-center mb-4">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-yellow-400 rounded mr-3"
                  checked={!!checkedItems[item]}
                  onChange={() => handleCheck(item)}
                />
                <span className="text-white font-medium">{item}</span>
              </label>
            ))}

            <div className="mt-6">
              <label htmlFor="others" className="block text-white font-semibold mb-1">
                Others:
              </label>
              <textarea
                id="others"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                rows="3"
                placeholder="Please specify..."
                value={others}
                onChange={(e) => setOthers(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleSubmit}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 rounded-full text-lg shadow-lg transition duration-300"
          >
            Submit
          </motion.button>
        </div>
      </div>
    </div>
  );
}
