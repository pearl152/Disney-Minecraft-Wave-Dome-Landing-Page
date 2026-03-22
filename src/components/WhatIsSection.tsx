"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import Card from "./ui/Card";
import EditableImage from "./editor/EditableImage";

const features = [
  {
    icon: "🌊",
    title: "Story-Rich Water Play",
    description:
      "Every splash feels like a chapter unfolding. Distinctly themed zones reveal new discoveries as families explore side by side.",
  },
  {
    icon: "🌴",
    title: "Tropical Minecraft Biome Environment",
    description:
      "Lush tropical textures meet imaginative block-style architecture for an inviting blend of island beauty and playful creativity.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Family Exploration at Every Pace",
    description:
      "Calm shoreline coves, gentle family swells, and energetic surge areas let every age find a perfect rhythm.",
  },
  {
    icon: "🏛️",
    title: "Iconic Central Waterpark Temple",
    description:
      "A luminous geometric centerpiece anchors the dome and creates a signature photo moment framed for unforgettable family portraits.",
  },
  {
    icon: "🤝",
    title: "Shared Parent-Child Participation",
    description:
      "Designed for togetherness — no sidelines, no split experiences. Parents and kids discover each moment as one crew.",
  },
];

export default function WhatIsSection() {
  return (
    <section id="overview" className="relative py-20 lg:py-28 bg-[#F8FFFE] overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-20 bg-[radial-gradient(circle_at_top,_rgba(246,201,14,0.2),_transparent_72%)]" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <SectionHeader
            eyebrow="The Arrival"
            title="Step Into a World of Shared Discovery"
            description="A premium indoor aquatic adventure concept where tropical elegance and imaginative play meet in one emotionally warm, family-centered destination."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 max-w-3xl text-center"
          >
            <p className="text-base sm:text-lg text-[#0A1628]/60 leading-relaxed">
               Beneath a luminous dome, your family moves through playful biome-inspired spaces designed for connection. Soft discovery zones, interactive wave moments, and cinematic lighting transitions create a resort experience that feels both magical and practical for parents.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 overflow-hidden rounded-3xl border border-white/70 shadow-xl"
        >
          <EditableImage
            contentKey="overviewImage"
            className="h-64 w-full object-cover md:h-80"
          />
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={feature.title} variant="default" delay={index * 0.1}>
              <div className="flex flex-col gap-4">
                <span className="text-4xl" role="img" aria-label={feature.title}>
                  {feature.icon}
                </span>
                <h3 className="text-lg font-bold text-[#0A1628]">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#0A1628]/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}

          {/* Wide card spanning full width on large screens */}
          <div className="sm:col-span-2 lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="rounded-2xl p-8 bg-gradient-to-r from-[#0E4D8B] to-[#1B6CA8] text-white"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                <div className="text-5xl" aria-hidden="true">💎</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">
                     A Signature Resort Story Moment
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                     This concept is designed as a premium invitation to linger, laugh, and discover together. It blends concierge-level planning confidence with whimsical storytelling, giving families the freedom to choose calm moments or energetic adventure throughout the day.
                  </p>
                </div>
                <a
                  href="#features"
                  className="shrink-0 px-6 py-3 bg-[#00B5C5] hover:bg-[#00D4E8] text-white font-semibold text-sm rounded-xl transition-colors"
                >
                   Continue Exploring →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
