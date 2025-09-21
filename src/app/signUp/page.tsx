"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Signup Data:", { phone, password });
    alert(`Account created with phone: ${phone}`);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center"
      style={{ backgroundImage: "url('./image/login.jpg')" }} // <-- replace with your image path
    >
      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 sm:w-4/5 lg:max-w-3xl rounded-2xl overflow-hidden shadow-xl bg-white/20 backdrop-blur-lg">
        <div className="bg-[#e61717] bg-opacity-90 flex items-center justify-center p-6">
          <div className="text-white text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold">Join UrbanSetGo</h2>
            <p className="text-sm sm:text-base">
              Create an account to book services instantly.
            </p>
            <p className="text-xs sm:text-sm">
              Quick, easy, and reliable signup.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex items-center justify-center p-6 relative">
          <form className="w-full space-y-4" onSubmit={handleSubmit}>
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-black mb-4">
              Sign Up
            </h2>

            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e61717] bg-white/40 text-black placeholder-gray-800"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e61717] bg-white/40 text-black placeholder-gray-800"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e61717] bg-white/40 text-black placeholder-gray-800"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-black text-white font-semibold hover:bg-[#e61717] transition"
            >
              Sign Up
            </button>

            {/* Login Link */}
            <p className="text-center text-sm text-black/80 mt-2">
              Already have an account?{" "}
              <Link href="/login" className="text-[#e61717] hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
