import { motion } from "framer-motion";

interface CardProps {
  title: string;
  icon: string;
}

export default function DashboardCard({ title, icon }: CardProps) {
  return (
    <motion.div
      className="bg-[#121212] border border-gray-800 rounded-2xl p-5 text-center shadow-lg"
      animate={{ borderColor: ["#333", "#ff3b3b", "#3baaff", "#333"] }}
      transition={{ duration: 5, repeat: Infinity }}
    >
      <div className="text-2xl mb-2">{icon}</div>
      <p className="text-sm">{title}</p>
    </motion.div>
  );
}
