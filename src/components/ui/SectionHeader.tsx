"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className = "",
}: SectionHeaderProps) {
  const alignClasses = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = light ? "text-white" : "text-[#0A1628]";
  const descColor = light ? "text-white/70" : "text-[#0A1628]/60";
  const eyebrowColor = light ? "text-[#00D4E8]" : "text-[#1B6CA8]";
  const dividerColor = light ? "bg-[#00D4E8]" : "bg-[#1B6CA8]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${alignClasses} ${className}`}
    >
      {eyebrow && (
        <p className={`text-sm font-semibold tracking-widest uppercase mb-3 ${eyebrowColor}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${titleColor}`}>
        {title}
      </h2>
      {align === "center" && (
        <div className={`mt-4 mx-auto h-1 w-16 rounded-full ${dividerColor}`} />
      )}
      {description && (
        <p className={`mt-5 text-lg leading-relaxed ${descColor}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
