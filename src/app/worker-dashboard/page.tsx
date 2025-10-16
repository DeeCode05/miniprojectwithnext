"use client";

import Sidebar from "./components/Sidebar";
import DashboardCard from "./components/DashboardCard";
import PieChart from "./components/LivePieChart";
import FeedbackList from "./components/FeedbackList";
import { mockEarnings, mockFeedback } from "./data/mockData";
import { motion } from "framer-motion";

export default function WorkerDashboard() {
  return (
    <div className="flex min-h-screen bg-[#0E0E0E] text-white">
      <Sidebar />
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">👋 Hello, Rahul!</h1>
          <div className="flex items-center gap-3">
            <button className="bg-blue-500 px-3 py-1 rounded-lg text-sm">
              Available
            </button>
            <button className="bg-gray-700 px-3 py-1 rounded-lg text-sm">
              Busy
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <DashboardCard title="View Today's Jobs" icon="📅" />
          <DashboardCard title="Check Earnings" icon="💰" />
          <DashboardCard title="Edit Profile" icon="✏️" />
          <DashboardCard title="Manage Services" icon="⚙️" />
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="bg-[#121212] rounded-2xl p-6 border border-gray-700 shadow-md"
            initial={{ borderColor: "#333" }}
            animate={{ borderColor: ["#333", "#ff3b3b", "#3baaff", "#333"] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <h2 className="text-lg mb-4">Earnings</h2>
            <PieChart />

            <button className="bg-red-500 mt-4 px-4 py-2 rounded-lg">
              Withdraw Earnings
            </button>
          </motion.div>

          <div className="bg-[#121212] rounded-2xl p-6 border border-gray-700 shadow-md">
            <h2 className="text-lg mb-4">Recent Feedback</h2>
            <FeedbackList feedback={mockFeedback} />
          </div>
        </div>
      </main>
    </div>
  );
}
