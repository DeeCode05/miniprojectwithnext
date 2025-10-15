import React from "react";

interface Booking {
  id: number;
  customerName: string;
  service: string;
  date: string;
  status: string;
}

interface Props {
  booking: Booking;
}

const BookingCard: React.FC<Props> = ({ booking }) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-lg border hover:shadow-xl transition relative overflow-hidden">
      <h2 className="text-xl font-semibold mb-2">{booking.service}</h2>
      <p>
        <strong>Customer:</strong> {booking.customerName}
      </p>
      <p>
        <strong>Date:</strong> {booking.date}
      </p>
      <p>
        <strong>Status:</strong>{" "}
        <span
          className={`px-2 py-1 rounded-full text-sm ${
            booking.status === "Completed"
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {booking.status}
        </span>
      </p>
      <button className="mt-3 bg-[#e61717] text-white px-4 py-2 rounded-lg hover:bg-black transition">
        View Details
      </button>

      {/* Optional: Blurry animated card effect */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#a8c6d8] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
    </div>
  );
};

export default BookingCard;
