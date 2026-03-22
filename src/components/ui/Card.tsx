"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "dark" | "glow" | "warm";
  hover?: boolean;
  delay?: number;
}

export default function Card({
  children,
  className = "",
  variant = "default",
  hover = true,
  delay = 0,
}: CardProps) {
  const baseClasses =
    "rounded-2xl p-6 transition-all duration-300";

  const variantClasses: Record<string, string> = {
    default:
      "bg-white border border-[#E8D5A3]/40 shadow-sm hover:shadow-md",
    dark: "bg-[#0F1F3D] border border-[#00B5C5]/20 shadow-lg",
    glow: "bg-[#0F1F3D] border border-[#00D4E8]/30 shadow-lg hover:border-[#00D4E8]/60",
    warm: "bg-[#FDF8EE] border border-[#E8D5A3]/60 shadow-sm hover:shadow-md",
  };

  const hoverClasses = hover ? "hover:-translate-y-1" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`}
    >
      {children}
    </motion.div>
  );
}
