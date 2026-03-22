"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";

const worldElements = [
  {
    icon: "⛰️",
    title: "Geometric Cliffs",
    description:
      "Towering pixel-cut cliff faces define the dome's perimeter, their sharp angular lines forming a dramatic silhouette against the soft interior lighting.",
    glow: "#00D4E8",
  },
  {
    icon: "✨",
    title: "Glowing Cave Textures",
    description:
      "Deep within the dome's shadowed alcoves, bioluminescent moss and crystal veins cast a gentle, ethereal blue-green glow across the cave walls.",
    glow: "#00D4E8",
  },
  {
    icon: "🟦",
    title: "Pixel-Styled Surfaces",
    description:
      "Every walkway, rock face, and architectural element faithfully reflects Minecraft's iconic 16×16 pixel aesthetic — instantly recognizable, beautifully realized.",
    glow: "#F6C90E",
  },
  {
    icon: "🏝️",
    title: "Interactive Shorelines",
    description:
      "The shoreline zones feature hidden pressure panels, sound triggers, and light activations that respond to guests walking and playing in the shallows.",
    glow: "#48BB78",
  },
  {
    icon: "🌊",
    title: "Biome Wave Experiences",
    description:
      "Each biome zone generates waves with a character unique to its theme — mesa zones have slow, rolling swells; jungle zones produce quick, playful splashes.",
    glow: "#1B6CA8",
  },
  {
    icon: "🔍",
    title: "Discoverable Moments",
    description:
      "Scattered throughout the dome are 24 hidden story beats — visual, audio, and tactile discoveries that reward curious families who explore off the main path.",
    glow: "#F6C90E",
  },
];

export default function StoryWorldSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#0A1628] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pixel-pattern opacity-30 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1B6CA8]/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00B5C5]/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <SectionHeader
            eyebrow="World Design"
            title="Enter a Newly Generated World"
            description="The moment you step through the Jungle Misting Grove entrance, you leave the resort behind and enter a living, breathing Minecraft biome — one that has never existed before, generated just for you."
            light
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 max-w-3xl mx-auto text-center text-base sm:text-lg text-white/60 leading-relaxed"
        >
          Imagine a coastal biome where pixel-cut cliffs meet a warm Hawaiian
          lagoon. Where cave crystals cast golden light onto wave-lapped shores.
          Where every corner hides a story waiting to be uncovered. The
          Minecraft Wave Dome is not a themed pool — it is an environment you
          inhabit, explore, and ultimately make your own.
        </motion.p>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {worldElements.map((element, index) => (
            <motion.div
              key={element.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group rounded-2xl p-6 bg-[#0F1F3D] border border-white/10 hover:border-[#00D4E8]/40 transition-all duration-300 hover:-translate-y-1"
              style={{ "--glow-color": element.glow } as React.CSSProperties}
            >
              {/* Glow corner accent */}
              <div
                className="absolute top-0 right-0 w-16 h-16 rounded-tr-2xl rounded-bl-2xl opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ background: `radial-gradient(circle at top right, ${element.glow}, transparent 70%)` }}
                aria-hidden="true"
              />

              <span className="text-3xl mb-4 block" role="img" aria-label={element.title}>
                {element.icon}
              </span>
              <h3 className="text-lg font-bold text-white mb-3">
                {element.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {element.description}
              </p>

              {/* Bottom accent line */}
              <div
                className="mt-5 h-0.5 w-12 rounded-full opacity-50"
                style={{ background: element.glow }}
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </div>

        {/* Divider quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="text-2xl sm:text-3xl font-bold text-white/90 italic max-w-3xl mx-auto leading-snug">
            &ldquo;No two visits feel the same. The world remembers where you&apos;ve been — and surprises you with what you haven&apos;t found yet.&rdquo;
          </p>
          <footer className="mt-4 text-[#00D4E8] text-sm font-medium">
            — Creative Vision, Minecraft Wave Dome Experience Team
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
