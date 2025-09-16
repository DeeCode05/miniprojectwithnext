"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const steps = [
  {
    title: "Choose a Service",
    description: "Pick from electricians, plumbers, carpenters, and more.",
  },
  {
    title: "Book Instantly",
    description: "Select your time slot and confirm your booking in seconds.",
  },
  {
    title: "Track Progress",
    description: "Stay updated while your service professional is on the way.",
  },
  {
    title: "Job Completed",
    description:
      "Enjoy fast, reliable service — pay securely after completion.",
  },
];

// Variants for card animation
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// Variants for line animation
const lineVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: { scaleX: 1, opacity: 1 },
};

export default function HowItWorks() {
  const [visibleIndex, setVisibleIndex] = useState(-1);

  // Auto play animation: reveal one card every 1s
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setVisibleIndex(i);
      i = (i + 1) % (steps.length + 1); // restart after last
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 bg-[#e5ebeb] overflow-x-auto">
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

      <div className="flex items-center justify-start gap-6 max-w-7xl mx-auto px-4 flex-nowrap">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {/* Step Card */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={visibleIndex >= index ? "visible" : "hidden"}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-white shadow-xl rounded-2xl p-6 w-64 text-center transition-all duration-300 hover:shadow-[#e61717]/50 shrink-0"
            >
              <h3 className="text-xl font-semibold mb-2 text-[#e61717]">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>

            {/* Animated Red dotted connector */}
            {index < steps.length - 1 && (
              <motion.div
                className="w-12 border-t-4 border-dotted border-[#e61717] origin-left"
                variants={lineVariants}
                initial="hidden"
                animate={visibleIndex > index ? "visible" : "hidden"}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
