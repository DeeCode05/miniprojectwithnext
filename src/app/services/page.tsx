
"use client";

import { motion } from "framer-motion";
import {
  FaBolt,
  FaBroom,
  FaTools,
  FaPaintRoller,
  FaShower,
} from "react-icons/fa";

const services = [
  {
    title: "Electrician",
    description: "Wiring, repairs & reliable electrical installations.",
    icon: <FaBolt className="text-[#e61717] text-5xl" />,
  },
  {
    title: "House Cleaning",
    description: "Professional cleaning for your home & office.",
    icon: <FaBroom className="text-[#e61717] text-5xl" />,
  },
  {
    title: "Carpenter",
    description: "Furniture repair, assembly, and custom woodwork.",
    icon: <FaTools className="text-[#e61717] text-5xl" />,
  },
  {
    title: "Painter",
    description: "Interior & exterior painting with top quality finish.",
    icon: <FaPaintRoller className="text-[#e61717] text-5xl" />,
  },
  {
    title: "Plumber",
    description: "Leak fixes, installations & full plumbing solutions.",
    icon: <FaShower className="text-[#e61717] text-5xl" />,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-[#a8c6d8]  to-white">
        <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Choose from trusted professionals near you. Fast, reliable, and
          affordable service at your doorstep.
        </p>
      </section>

      {/* Services Grid */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-2xl p-8 text-center border border-gray-200 hover:shadow-xl transition"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h2 className="text-xl font-semibold mt-6">{service.title}</h2>
              <p className="text-gray-600 mt-3">{service.description}</p>
              <button className="mt-6 bg-[#000000] text-white px-5 py-2 rounded-xl hover:bg-[#e61717] transition">
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
