"use client";

import React from "react";
import { useRoleGuard } from "@/hooks/useRoleGuard";
import { useSession } from "next-auth/react";
import BookingCard from "@/components/BookingCard";

const bookingsData = [
  {
    id: 1,
    customerName: "John Doe",
    service: "Plumbing",
    date: "2025-10-20",
    status: "Pending",
  },
  {
    id: 2,
    customerName: "Jane Smith",
    service: "Electrician",
    date: "2025-10-22",
    status: "Completed",
  },
  // Add more mock bookings or fetch from backend
];

export default function BookingsPage() {
  const { data: session } = useSession();
  useRoleGuard(["worker"]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Bookings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookingsData.map((booking) => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
      </div>
    </div>
  );
}
