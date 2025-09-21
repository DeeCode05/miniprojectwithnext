"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact Form Data:", { name, email, message });
    alert("Thank you for contacting us! Our team will reach you shortly.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/your-image.jpg')" }} // replace with your image
    >
      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 sm:w-4/5 lg:max-w-3xl rounded-2xl overflow-hidden shadow-xl bg-white/20 backdrop-blur-lg">
        
        {/* Left Column - Customer Care */}
        <div className="bg-[#e61717] bg-opacity-90 flex items-center justify-center p-6">
          <div className="text-white text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold">Customer Care</h2>
            <p className="text-sm sm:text-base">
              Need help? Reach out to us anytime.
            </p>
            <p>📞 Phone: +91 98765 43210</p>
            <p>✉ Email: support@urbansetgo.com</p>
            <p>⏰ Hours: Mon–Sat, 9:00 AM – 6:00 PM</p>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="flex items-center justify-center p-6 relative">
          <form className="w-full space-y-4" onSubmit={handleSubmit}>
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-black mb-4">
              Contact Us
            </h2>

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e61717] bg-white/40 text-black placeholder-gray-800"
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e61717] bg-white/40 text-black placeholder-gray-800"
            />

            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e61717] bg-white/40 text-black placeholder-gray-800 h-32 resize-none"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-black text-white font-semibold hover:bg-[#e61717] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
