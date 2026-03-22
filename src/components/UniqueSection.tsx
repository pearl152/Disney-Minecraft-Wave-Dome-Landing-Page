"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";

const differentiators = [
  {
    number: "01",
    icon: "📖",
    title: "Narrative Resort Water Architecture",
    description:
      "Most water attractions offer thrills. This concept offers chapters. Every zone is staged as a story beat, so families feel like active participants in the adventure.",
    vs: "Standard water parks: disconnected slides and pools with no story thread.",
    color: "ocean",
  },
  {
    number: "02",
    icon: "🎮",
    title: "A Familiar World Reimagined",
    description:
      "The creative language families already love is reimagined through warm resort storytelling, elevated design detail, and emotionally rich moments of togetherness.",
    vs: "Generic tropical theming: familiar but not personally meaningful.",
    color: "teal",
  },
  {
    number: "03",
    icon: "🏝️",
    title: "A Distinctive Destination Story",
    description:
      "This concept is framed as a destination-defining signature experience: tropical elegance, immersive fantasy worldbuilding, and family-ready planning confidence in one place.",
    vs: "Franchise experiences: replicated at dozens of locations worldwide.",
    color: "gold",
  },
];

export default function UniqueSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#0A1628] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pixel-pattern opacity-20 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#1B6CA8]/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <SectionHeader
            eyebrow="Signature Difference"
            title="Not Just a Pool — A Story You Step Into"
            light
          />
        </div>

        <div className="mt-16 flex flex-col gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start"
            >
              {/* Number */}
              <div className="lg:col-span-1 flex lg:justify-end pt-1">
                <span className="text-5xl font-black text-white/10 leading-none">
                  {item.number}
                </span>
              </div>

              {/* Icon + Title */}
              <div className="lg:col-span-4">
                <div className="flex items-start gap-4">
                  <span className="text-4xl mt-1" role="img" aria-label={item.title}>
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="lg:col-span-7">
                <p className="text-white/70 leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex items-start gap-2 p-3 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-[#F6C90E] text-sm font-semibold shrink-0">vs.</span>
                  <p className="text-white/40 text-sm leading-relaxed">{item.vs}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bold close statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center rounded-2xl bg-gradient-to-r from-[#00B5C5]/20 to-[#1B6CA8]/20 border border-[#00D4E8]/20 p-10"
        >
          <p className="text-2xl sm:text-3xl font-bold text-white leading-snug max-w-2xl mx-auto">
            The world has water parks. This concept offers a world.
          </p>
          <p className="mt-4 text-white/60 text-base max-w-xl mx-auto">
            Crafted as a premium resort invitation, this experience blends narrative depth, tropical fantasy, and practical family planning into one unforgettable destination.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
