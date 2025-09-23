"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Data:", { username, password });
    alert(`Logging in with Username: ${username}`);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center"
      style={{ backgroundImage: "url('./image/login.jpg')" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 sm:w-4/5 lg:max-w-3xl rounded-2xl overflow-hidden shadow-xl bg-white/20 backdrop-blur-lg">
        <div className="bg-black bg-opacity-80 flex items-center justify-center p-6">
          <div className="text-white text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold">Welcome Back!</h2>
            <p className="text-sm sm:text-base">
              Login to continue using our services.
            </p>
            <p className="text-xs sm:text-sm">
              Fast and reliable service for your home needs.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center p-6 relative">
          <form className="w-full space-y-4" onSubmit={handleSubmit}>
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-black mb-4">
              Login
            </h2>

            <input
              type="text"
              placeholder="Username or Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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

            <div className="flex items-center justify-between text-sm">
              <a href="#" className="text-[#e61717] hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-black text-white font-semibold hover:bg-[#e61717] transition"
            >
              Login
            </button>

            <p className="text-center text-sm text-black/80 mt-2">
              New account?{" "}
              <Link href="/sign-up" className="text-[#e61717] hover:underline">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
