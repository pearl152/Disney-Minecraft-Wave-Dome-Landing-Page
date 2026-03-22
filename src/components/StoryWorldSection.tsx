"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import EditableImage from "./editor/EditableImage";

const worldElements = [
  {
    icon: "⛰️",
    title: "Luminous Island Cliffs",
    description:
      "Layered cliff silhouettes frame the dome in warm cinematic contrast, balancing adventurous texture with elegant resort polish.",
    glow: "#00D4E8",
  },
  {
    icon: "✨",
    title: "Underwater Glow Chambers",
    description:
      "Ambient light wells and glowing textures add a dreamlike underwater ambience that feels immersive while remaining family-comfortable.",
    glow: "#00D4E8",
  },
  {
    icon: "🟦",
    title: "Imaginative Crafted Surfaces",
    description:
      "Walkways, stonework, and playful geometric architecture bring imaginative worldbuilding to life through a premium editorial lens.",
    glow: "#F6C90E",
  },
  {
    icon: "🏝️",
    title: "Interactive Discovery Shorelines",
    description:
      "Family-friendly shoreline cues, lighting reveals, and playful response elements reward exploration without overwhelming younger guests.",
    glow: "#48BB78",
  },
  {
    icon: "🌊",
    title: "Biome-Inspired Wave Journeys",
    description:
      "Each zone carries its own wave personality, from gentle floating rhythm to spirited bursts that invite laughter and repeat visits.",
    glow: "#1B6CA8",
  },
  {
    icon: "🔍",
    title: "Keepsake Discovery Moments",
    description:
      "Hidden reveal moments invite families to collect stories together, turning each return visit into a new memory-making chapter.",
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
            eyebrow="Story World"
            title="Where Family Play Becomes a Story"
            description="From first footsteps to final splash, each space is staged like a cinematic chapter designed to invite wonder, comfort, and connection."
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
          Imagine a tropical cove where gentle glow, curated sound, and immersive details guide your family through moments that feel both magical and easy to navigate. This is not simply a water attraction — it is a story-rich environment designed for meaningful shared discovery.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 overflow-hidden rounded-3xl border border-white/20 shadow-2xl"
        >
          <EditableImage
            contentKey="storyImage"
            className="h-64 w-full object-cover opacity-90 md:h-80"
          />
        </motion.div>

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
            &ldquo;No two family days unfold the same way. Each return brings a new moment to discover, a new laugh to share, and a new memory to keep.&rdquo;
          </p>
          <footer className="mt-4 text-[#00D4E8] text-sm font-medium">
            — Creative Concept Note
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
