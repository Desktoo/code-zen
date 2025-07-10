"use client";

import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 0 20px #10b981 ", // emerald glow
      }}
      className="backdrop-blur-lg border border-gray-100/10 rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition-all duration-300"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </motion.div>
  );
}
