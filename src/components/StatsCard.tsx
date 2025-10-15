"use client";

import React from "react";

interface StatsCardProps {
  totalBookings: number;
  totalReviews: number;
  rating: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  totalBookings,
  totalReviews,
  rating,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 grid grid-cols-3 text-center gap-4">
      <div>
        <h3 className="text-lg font-bold">{totalBookings}</h3>
        <p>Total Bookings</p>
      </div>
      <div>
        <h3 className="text-lg font-bold">{totalReviews}</h3>
        <p>Reviews</p>
      </div>
      <div>
        <h3 className="text-lg font-bold">{rating}</h3>
        <p>Rating</p>
      </div>
    </div>
  );
};

export default StatsCard;
