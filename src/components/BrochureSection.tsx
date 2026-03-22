"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "The Experience",
    items: [
      "Indoor wave dome, climate-controlled environment",
      "Minecraft-themed biome design, Disney storytelling",
      "5 distinct biome zones with unique wave characters",
      "12 interactive feature areas throughout the dome",
      "24 hidden discoverable story moments",
    ],
  },
  {
    title: "Guest Information",
    items: [
      "Open daily 9:00 AM – 6:00 PM (peak hours extended)",
      "Included with Aulani resort stay admission",
      "Day guest passes available (subject to availability)",
      "Zero-depth entry, accessible to all abilities",
      "Complimentary life jackets in all sizes",
    ],
  },
  {
    title: "Safety & Guidelines",
    items: [
      "Certified lifeguards on duty at all times",
      "Color-coded wave intensity zones clearly marked",
      "Children under 12 require adult supervision in water",
      "48\"+ or life jacket required in Central Surge zone",
      "Reef-safe sunscreen required (available on-site)",
    ],
  },
  {
    title: "Planning Essentials",
    items: [
      "Pack: swimwear, water shoes, reef-safe sunscreen",
      "Resort guest early access from 9:00 AM",
      "Lockers available near dome entrance",
      "Poolside dining and beverage service available",
      "Character experience packages: book 60–90 days ahead",
    ],
  },
];

export default function BrochureSection() {
  const handlePrint = () => window.print();

  return (
    <section id="brochure" className="py-20 lg:py-28 bg-[#F8FFFE]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-[#1B6CA8] mb-3">
            Quick Reference
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628]">
            Your At-a-Glance Guide
          </h2>
          <p className="mt-3 text-[#0A1628]/60 max-w-xl mx-auto">
            Everything you need to know, all in one place. Print this page or
            save it to your phone before your visit.
          </p>
          <button
            onClick={handlePrint}
            className="no-print mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#1B6CA8] hover:bg-[#0E4D8B] text-white font-semibold text-sm rounded-xl transition-colors shadow-md"
            aria-label="Print brochure"
          >
            🖨️ Print This Page
          </button>
        </motion.div>

        {/* Brochure layout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="print-section rounded-3xl border-2 border-[#1B6CA8]/20 overflow-hidden shadow-xl"
        >
          {/* Brochure header */}
          <div className="bg-gradient-to-r from-[#0A1628] to-[#0E4D8B] px-8 py-10 text-center">
            <div className="text-4xl mb-3" aria-hidden="true">💎</div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Minecraft Wave Dome
            </h3>
            <p className="text-[#00D4E8] font-semibold mt-1">
              Aulani, A Disney Resort & Spa · Ko Olina, Hawaiʻi
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {["Family-Friendly", "Indoor", "All Ages", "Disney Magic", "Minecraft World"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold text-[#0A1628] bg-[#00D4E8]/80 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Content grid */}
          <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#E8D5A3]/40 bg-white">
            {sections.map((section, index) => (
              <div
                key={section.title}
                className={`p-6 ${index >= 2 ? "border-t border-[#E8D5A3]/40" : ""}`}
              >
                <h4 className="text-sm font-bold text-[#1B6CA8] uppercase tracking-widest mb-4">
                  {section.title}
                </h4>
                <ul className="flex flex-col gap-2" role="list">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#0A1628]/70 leading-relaxed">
                      <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#00B5C5]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Brochure footer */}
          <div className="bg-[#0A1628] px-8 py-5 text-center">
            <p className="text-white/60 text-xs">
              Information subject to change. Visit{" "}
              <span className="text-[#00D4E8]">disneyaulani.com</span>{" "}
              for current schedules, pricing, and reservations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
