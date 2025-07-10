"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  index: number;
  isHighlighted?: boolean;
}

export default function PricingCard({
  title,
  description,
  price,
  features,
  index,
  isHighlighted = false,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`w-full max-w-xs md:max-w-[18rem] p-6 rounded-2xl shadow-md text-center transition-all duration-300
        ${isHighlighted ? "scale-105 hover:scale-110 border glow-shadow shadow-" : "border border-gray-100/10"}
        bg-background hover:scale-105 hover:shadow-lg`}
    >
      <div className="mb-4 flex justify-between">
      <h3 className="text-2xl font-semibold text-emerald-400 mb-1 text-left">{title}</h3>
      <p className="text-xl font-bold text-white mb-2">{price}</p>
      </div>
      <p className="text-sm text-left text-muted-foreground mb-4 border-b pb-4">{description}</p>
      <ul className="text-sm text-muted-foreground space-y-1 mb-6 text-left w-full max-w-xs mx-auto">
        {features.map((feature, i) => (
          <li key={i}>• {feature}</li>
        ))}
      </ul>
      <Button className={`mt-auto  text-white w-full ${isHighlighted ? "scale-105 bg-background pro_price_btn_shadow hover:bg-emerald-500/20" : "bg-background price_btn_shadow hover:bg-neutral-400/20"}`}>
        {title === "Free" ? "Start Free" : "Choose Plan"}
      </Button>
    </motion.div>
  );
}
