import React, { useState } from "react";

export default function PlanTabs() {
  const tabs = ["M&M PLANS", "MY PLANS", "MY CLIENTS"];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex border-b border-gray-700">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(index)}
          className={`flex-1 text-center py-3 font-semibold transition-colors
            ${activeTab === index ? "text-yellow-400 border-b-2 border-yellow-400" : "text-gray-300"}
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
