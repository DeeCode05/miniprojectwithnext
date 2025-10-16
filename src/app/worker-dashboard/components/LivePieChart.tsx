"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";

interface Metric {
  name: string;
  value: number;
}

const COLORS = ["#ff3b3b", "#3baaff", "#00c49f"];

export default function LivePieChart() {
  const [performanceData, setPerformanceData] = useState<Metric[]>([
    { name: "Booking Rate", value: 0 },
    { name: "Active Usage", value: 0 },
    { name: "Service Quality", value: 0 },
  ]);

  // Simulate live updates from backend every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPerformanceData([
        { name: "Booking Rate", value: Math.floor(Math.random() * 50) + 50 }, // 50–100%
        { name: "Active Usage", value: Math.floor(Math.random() * 70) + 30 }, // 30–100%
        { name: "Service Quality", value: Math.floor(Math.random() * 80) + 20 }, // 20–100%
      ]);
    }, 4000); // updates every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[300px]">
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Worker Performance Overview
      </h2>
      <div className="bg-[#121212] rounded-2xl p-4 border border-gray-800 shadow-lg animate-glow">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={performanceData as any}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={90}
              fill="#8884d8"
              dataKey="value"
              // @ts-ignore
              label={({ name, value }) => `${name}: ${value}%`}
            >
              {performanceData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#1a1a1a",
                border: "1px solid #333",
                color: "#fff",
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
