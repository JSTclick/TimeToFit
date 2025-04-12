import React from "react";
import { LogOut, Star, User, DollarSign, Info, HelpCircle, Shield, FileText, Users, ThumbsUp, ArrowLeft } from "lucide-react";

const settingsItems = [
  {
    title: "Profile Setup",
    items: [
      { label: "My Profile", icon: <User />, action: () => {} },
      { label: "Content Preferences", icon: <Star />, action: () => {} },
      { label: "Pricing", icon: <DollarSign />, action: () => {} },
    ],
  },
  {
    title: "About",
    items: [
      { label: "About Us", icon: <Info />, action: () => {} },
      { label: "More Apps", icon: <Users />, action: () => {} },
      { label: "Invite Friends", icon: <Users />, action: () => {} },
      { label: "Rate Us", icon: <ThumbsUp />, action: () => {} },
    ],
  },
  {
    title: "Support",
    items: [
      { label: "FAQ & Support", icon: <HelpCircle />, action: () => {} },
    ],
  },
  {
    title: "Other",
    items: [
      { label: "Terms & Conditions", icon: <FileText />, action: () => {} },
      { label: "Privacy Policy", icon: <Shield />, action: () => {} },
    ],
  },
];

export default function SettingsPage() {
  return (
    <div className="bg-black text-white min-h-screen py-6 px-4 space-y-4">
      {/* Go Back Button */}
      <div className="mb-4">
        <button
          onClick={() => window.history.back()}
          className="flex items-center text-yellow-400 hover:text-yellow-300 space-x-2"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Go Back</span>
        </button>
      </div>

      {/* User Info */}
      <div className="flex flex-col items-center mb-4">
        <div className="bg-gray-800 w-20 h-20 rounded-full flex items-center justify-center">
          <User className="text-white w-10 h-10" />
        </div>
        <p className="text-lg font-semibold mt-2">hunk</p>
        <p className="text-sm text-gray-400">shreyasmp.7@gmail.com</p>
      </div>

      {/* Settings Sections */}
      {settingsItems.map((section, i) => (
        <div key={i} className="bg-gray-900 rounded-xl p-3 space-y-2">
          {section.items.map((item, j) => (
            <div
              key={j}
              onClick={item.action}
              className="flex items-center justify-between bg-gray-800 hover:bg-gray-700 rounded-lg p-3 cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className="text-yellow-400">{item.icon}</div>
                <p>{item.label}</p>
              </div>
              <span className="text-gray-500">›</span>
            </div>
          ))}
        </div>
      ))}

      {/* Logout */}
      <div className="flex justify-center mt-4">
        <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 flex items-center space-x-2">
          <LogOut className="w-4 h-4" />
          <span>Log Out</span>
        </button>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-6 text-gray-400">
        <i className="fab fa-instagram text-2xl"></i>
        <i className="fab fa-youtube text-2xl"></i>
        <i className="fab fa-facebook text-2xl"></i>
        <i className="fab fa-pinterest text-2xl"></i>
      </div>
    </div>
  );
}
