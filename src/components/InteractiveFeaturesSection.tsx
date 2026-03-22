"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import Badge from "./ui/Badge";
import { features } from "@/data/features";

const colorMap: Record<string, string> = {
  ocean: "bg-[#1B6CA8]/10 border-[#1B6CA8]/20 text-[#1B6CA8]",
  teal: "bg-[#00B5C5]/10 border-[#00B5C5]/20 text-[#00B5C5]",
  jungle: "bg-[#2D7A4F]/10 border-[#2D7A4F]/20 text-[#2D7A4F]",
  gold: "bg-[#F6C90E]/10 border-[#F6C90E]/30 text-[#C9A40B]",
  sand: "bg-[#E8D5A3]/30 border-[#E8D5A3] text-[#8B6914]",
};

const iconBgMap: Record<string, string> = {
  ocean: "bg-[#0E4D8B]/10",
  teal: "bg-[#00B5C5]/10",
  jungle: "bg-[#2D7A4F]/10",
  gold: "bg-[#F6C90E]/10",
  sand: "bg-[#E8D5A3]/30",
};

export default function InteractiveFeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-[#F0FBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <SectionHeader
            eyebrow="The Features"
            title="Explore Every Corner of the Dome"
            description="Twelve immersive zones and interactive features, each crafted to deliver a distinct moment of wonder. From towering lava waterfalls to hidden story alcoves, there's always something new to discover."
          />
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((feature, index) => {
            const colorClass = colorMap[feature.color ?? "ocean"];
            const iconBg = iconBgMap[feature.color ?? "ocean"];
            const badgeVariant = (feature.color ?? "ocean") as
              | "ocean"
              | "teal"
              | "gold"
              | "jungle"
              | "sand";

            return (
              <motion.article
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
                className={`rounded-2xl p-5 bg-white border hover:-translate-y-1 transition-all duration-300 ${colorClass}`}
                aria-label={feature.title}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0 ${iconBg}`}>
                    <span role="img" aria-label={feature.title}>{feature.icon}</span>
                  </div>
                  {feature.badge && (
                    <Badge variant={badgeVariant} size="sm">
                      {feature.badge}
                    </Badge>
                  )}
                </div>
                <h3 className="text-base font-bold text-[#0A1628] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#0A1628]/60 leading-relaxed">
                  {feature.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-[#0A1628]/60 mb-4">
            Plan your day around the features your family loves most.
          </p>
          <a
            href="#itinerary"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1B6CA8] hover:bg-[#0E4D8B] text-white font-semibold text-sm rounded-xl transition-colors shadow-md"
          >
            View Sample Itinerary →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
