"use client";

import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-gray-700">Dashboard</h2>
      <nav className="flex flex-col gap-2">
        <Link href="#profile" className="hover:bg-gray-200 p-2 rounded">
          Profile
        </Link>
        <Link href="#stats" className="hover:bg-gray-200 p-2 rounded">
          Stats
        </Link>
        <Link href="#edit" className="hover:bg-gray-200 p-2 rounded">
          Edit Profile
        </Link>
        <Link href="#reviews" className="hover:bg-gray-200 p-2 rounded">
          Reviews
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
