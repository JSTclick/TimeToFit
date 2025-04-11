import React, { useState } from "react";
// import emailjs from "emailjs-com"; // Uncomment after setting up

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Replace this block with actual EmailJS logic after setup
    // emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_PUBLIC_KEY")
    //   .then(() => {
    //     setStatus("Message sent successfully!");
    //     setFormData({ name: "", phone: "", email: "", message: "" });
    //   })
    //   .catch(() => {
    //     setStatus("Something went wrong. Please try again later.");
    //   });

    setStatus("Demo: Message sent successfully!");
    setFormData({ name: "", phone: "", email: "", message: "" });
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
            className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-300 transition-all shadow-md"
          >
            Send Message
          </button>

          {status && (
            <p className="text-center mt-4 text-sm text-green-400">{status}</p>
          )}
        </form>
      </div>
    </div>
  );
}
