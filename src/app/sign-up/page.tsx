"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  type Role = "user" | "worker";
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState<Role>("user");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      alert("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password, role }),
      });

      const contentType = res.headers.get("content-type");

      if (res.ok) {
        const data = await res.json();
        alert(data.message);
        window.location.href = "/login";
      } else {
        if (contentType && contentType.includes("application/json")) {
          try {
            const errorData = await res.json();

            alert(errorData.message || "An error occurred");
          } catch (e) {
            const errorText = await res.text();
            console.error("Error Text:", errorText);
            alert("An unexpected error occurred. Please check the console.");
          }
        } else {
          const errorText = await res.text();
          console.error("Error Text:", errorText);
          alert("An unexpected error occurred. Please check the console.");
        }
      }
    } catch (error) {
      console.error("SIGNUP_ERROR:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center"
      style={{ backgroundImage: "url('./image/login.jpg')" }}
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
        <div className="flex items-center justify-center p-6">
          <form className="w-full space-y-4" onSubmit={handleSubmit}>
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-black mb-4">
              Sign Up
            </h2>

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e61717] bg-white/40 text-black placeholder-gray-800"
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e61717] bg-white/40 text-black placeholder-gray-800"
            />

            <select
              value={role}
              onChange={(e) => setRole(e.target.value as Role)}
              className="w-full p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e61717] bg-white/40 text-black"
            >
              <option value="user">User</option>
              <option value="worker">Worker</option>
            </select>

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
              disabled={loading}
              className="w-full py-3 rounded-lg bg-black text-white font-semibold hover:bg-[#e61717] transition disabled:opacity-50"
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>

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
