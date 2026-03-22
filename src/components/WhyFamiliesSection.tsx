"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";

const benefits = [
  {
    icon: "👶",
    title: "Every Age Welcomed",
    description:
      "Toddler shallows, gradual depth progression, and dynamic surge zones mean the youngest to the oldest family member always has the perfect spot.",
    stat: "Ages 2+",
  },
  {
    icon: "🏠",
    title: "Indoor Climate Comfort",
    description:
      "The dome's climate-controlled environment means no worrying about sun exposure, overheating, or unexpected Hawaiian rain showers.",
    stat: "Indoor & Shaded",
  },
  {
    icon: "⏱️",
    title: "Flexible Pacing",
    description:
      "Stay for 90 minutes or all day. With so much to explore, families naturally drift through zones at their own rhythm without feeling rushed.",
    stat: "Your Schedule",
  },
  {
    icon: "📖",
    title: "Story That Grows With You",
    description:
      "Young children love the bright colors and gentle waves. Older kids and teens dive deep into the Minecraft narrative layers and hidden discoveries.",
    stat: "Multi-Layer Story",
  },
  {
    icon: "📷",
    title: "Built for Family Photos",
    description:
      "Dramatic backdrops, golden light, and iconic Minecraft architectural elements make every corner a stunning photo opportunity.",
    stat: "Insta-Worthy",
  },
  {
    icon: "🤲",
    title: "Parents Participate, Not Just Watch",
    description:
      "Designed so adults are fully in the experience — no standing at the edge watching. Parents and kids discover the world together, side by side.",
    stat: "Together Always",
  },
];

const stats = [
  { value: "All Ages", label: "Welcome in Every Zone" },
  { value: "Indoor", label: "Climate Comfort Year-Round" },
  { value: "12 Zones", label: "Distinct Experience Areas" },
  { value: "24", label: "Hidden Story Discoveries" },
];

export default function WhyFamiliesSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <SectionHeader
            eyebrow="Family-Centered"
            title="Plan the Moments They&apos;ll Remember Most"
            description="Every design decision supports shared discovery, relaxed pacing, and confidence for parents who want vacation days to feel both magical and effortless."
          />
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl p-6 bg-[#F8FFFE] border border-[#E8D5A3]/40 hover:border-[#00B5C5]/40 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              {/* Stat badge */}
              <div className="absolute top-4 right-4">
                <span className="text-xs font-bold text-[#1B6CA8] bg-[#1B6CA8]/10 px-2 py-1 rounded-lg">
                  {benefit.stat}
                </span>
              </div>

              <span className="text-3xl mb-4 block" role="img" aria-label={benefit.title}>
                {benefit.icon}
              </span>
              <h3 className="text-base font-bold text-[#0A1628] mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-[#0A1628]/60 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats highlights row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 rounded-2xl bg-gradient-to-r from-[#0E4D8B] to-[#1B6CA8] p-8"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Emotional close */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center max-w-2xl mx-auto"
        >
          <p className="text-lg text-[#0A1628]/70 leading-relaxed">
             Vacation memories are built in moments of shared wonder. This concept is crafted to help families feel present with each other — from first splash through evening storytelling.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
