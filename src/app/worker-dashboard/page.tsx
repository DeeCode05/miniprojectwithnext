"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import ProfileCard from "@/components/ProfileCard";
import StatsCard from "@/components/StatsCard";
import EditProfile from "@/components/EditProfileForm";

const workerId = "worker_id_here"; // Replace with dynamic worker ID

const WorkerDashboard = () => {
  const stats = {
    totalBookings: 12,
    totalReviews: 5,
    rating: "4.5",
  };

  const profile = {
    fullName: "John Doe",
    email: "john@example.com",
    phone: "9876543210",
    skills: "Plumbing, Electrician",
    experience: "3 years",
    description: "Experienced in home repairs",
    profilePic: "",
  };

  return (
    <div className="flex bg-gray-300 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6 flex flex-col gap-6">
        <ProfileCard {...profile} />
        <StatsCard {...stats} />
        <EditProfile workerId={workerId} />
      </div>
    </div>
  );
};

export default WorkerDashboard;
