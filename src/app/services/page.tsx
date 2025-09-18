
"use client";

import { Description } from "@mui/icons-material";
import { motion } from "framer-motion";
import {
  FaBolt,
  FaBroom,
  FaTools,
  FaPaintRoller,
  FaShower,
  FaMusic,
  FaSprayCan,
  FaSnowflake,
  FaUtensils,
  FaSpa,
  FaPallet,
  FaChalkboardTeacher,
  FaTint,
  FaTemperatureLow,
} from "react-icons/fa";
import { FaScissors } from "react-icons/fa6";

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
  {
    title: "Dancer",
    description: "Classical Indian, Hip-hop, freestyle & various other styles.",
    icon: <FaMusic className="text-[#e61717] text-5xl" />,
  },
  {
    title: "Maids",
    description: "Get quick deep cleaning, dusting, mopping services at ease.",
    icon: <FaSprayCan className="text-[#e61717] text-5xl" />,
  },
  {
    title: "AC Repairers",
    description:
      "Cleaning filters, thermostat checking, refilling refrigerant.",
    icon: <FaSnowflake className="text-[#e61717] text-5xl" />,
  },
  {
    title: "Fridge Repairer",
    description:
      "Fixes cooling issues, replaces faulty parts, and ensures your fridge runs efficiently.",
    icon: <FaTemperatureLow className="text-[#e61717] text-5xl" />,
  },
  {
    title: "Cooks",
    description:
      "Prepares meals, follows recipes, and ensures tasty and hygienic food.",
    icon: <FaUtensils className="text-[#e61717] text-5xl" />,
  },
  {
    title: "Beauticians",
    description:
      "Offers beauty treatments including hair, skin, and makeup services.",
    icon: <FaSpa className="text-[#e61717] text-5xl" />,
  },
  {
    title: "Tailors",
    description: "Alters, mends, and customizes clothes to fit perfectly.",
    icon: <FaScissors className="text-[#e61717] text-5xl" />,
  },
  {
    title: "RO Technicians",
    description:
      "Installs, repairs, and maintains water purification systems for clean drinking water.",
    icon: <FaTint className="text-[#e61717] text-5xl" />,
  },
  {
    title: "Tutors",
    description:
      "Provides personalized lessons and guidance to help students learn effectively.",
    icon: <FaChalkboardTeacher className="text-[#e61717] text-5xl" />,
  },
  {
    title: "Decorators",
    description:
      "Designs and decorates spaces for events or homes to make them visually appealing.",
    icon: <FaPallet className="text-[#e61717] text-5xl" />,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="text-center py-16 bg-gradient-to-r from-[#a8c6d8]  to-white">
        <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Choose from trusted professionals near you. Fast, reliable, and
          affordable service at your doorstep.
        </p>
      </section>

      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1, y: -10 }}
              viewport={{ once: true }}
              className="bg-[#fff0f0] shadow-lg rounded-2xl p-8 text-center border border-gray-200 hover:shadow-xl transition"
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
