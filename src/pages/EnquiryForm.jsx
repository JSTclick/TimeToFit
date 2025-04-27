import React, { useState } from "react";
import axios from "axios";

// Taking from .env file
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await axios.post(`${API_BASE_URL}/enquiries`, formData);
      setStatus("Message sent successfully! Please check your email for confirmation.");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      setStatus(error.response?.data?.message || "Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-12 px-6 text-white">
      <div className="max-w-2xl mx-auto bg-[#1f1f1f] rounded-3xl p-10 shadow-2xl border border-yellow-400">
        <h2 className="text-4xl font-bold text-yellow-400 mb-10 text-center">
          Get in Touch
        </h2>

        <form onSubmit={sendEmail} className="space-y-8">
          {[
            { label: "Your Name", type: "text", name: "name" },
            { label: "Phone Number", type: "tel", name: "phone" },
            { label: "Email Address", type: "email", name: "email" },
          ].map((field, index) => (
            <div key={index} className="relative">
              <input
                type={field.type}
                name={field.name}
                required
                autoComplete="off"
                value={formData[field.name]}
                onChange={handleChange}
                className={`peer w-full bg-gray-800 text-white px-4 pt-6 pb-2 rounded-lg outline-none border border-gray-700 focus:ring-2 focus:ring-yellow-400 transition placeholder-transparent`}
                placeholder={field.label}
              />
              <label
                htmlFor={field.name}
                className="absolute left-4 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-yellow-400"
              >
                {field.label}
              </label>
            </div>
          ))}

          <div className="relative">
            <textarea
              name="message"
              rows="5"
              required
              autoComplete="off"
              value={formData.message}
              onChange={handleChange}
              className="peer w-full bg-gray-800 text-white px-4 pt-6 pb-2 rounded-lg outline-none border border-gray-700 focus:ring-2 focus:ring-yellow-400 transition placeholder-transparent"
              placeholder="Your Message"
            />
            <label
              htmlFor="message"
              className="absolute left-4 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-yellow-400"
            >
              Your Message
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-yellow-400 text-black font-bold py-3 rounded-lg transition-all shadow-md ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-300'
            }`}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {status && (
            <p className={`text-center mt-4 text-sm ${
              status.includes('successfully') ? 'text-green-400' : 'text-red-400'
            }`}>
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
