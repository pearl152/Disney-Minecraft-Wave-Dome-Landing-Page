"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import { safetyPanels } from "@/data/safety";

const accentMap: Record<string, string> = {
  teal: "border-[#00B5C5]/30 bg-[#00B5C5]/5",
  ocean: "border-[#1B6CA8]/30 bg-[#1B6CA8]/5",
  gold: "border-[#F6C90E]/40 bg-[#F6C90E]/5",
  jungle: "border-[#2D7A4F]/30 bg-[#2D7A4F]/5",
  sand: "border-[#E8D5A3] bg-[#FDF8EE]",
};

const headerAccentMap: Record<string, string> = {
  teal: "text-[#00B5C5]",
  ocean: "text-[#1B6CA8]",
  gold: "text-[#C9A40B]",
  jungle: "text-[#2D7A4F]",
  sand: "text-[#8B6914]",
};

const dotAccentMap: Record<string, string> = {
  teal: "bg-[#00B5C5]",
  ocean: "bg-[#1B6CA8]",
  gold: "bg-[#F6C90E]",
  jungle: "bg-[#2D7A4F]",
  sand: "bg-[#E8D5A3]",
};

export default function SafetySection() {
  return (
    <section id="safety" className="py-20 lg:py-28 bg-[#F8FFFE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <SectionHeader
            eyebrow="Guest Guidance"
            title="Plan with Confidence"
            description="Everything your family needs to know before you arrive — so you can focus entirely on the experience once you're there."
          />
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {safetyPanels.map((panel, index) => (
            <motion.div
              key={panel.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`rounded-2xl p-6 border ${accentMap[panel.accentColor] ?? accentMap.ocean}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl" role="img" aria-label={panel.title}>
                  {panel.icon}
                </span>
                <h3
                  className={`text-base font-bold ${headerAccentMap[panel.accentColor] ?? headerAccentMap.ocean}`}
                >
                  {panel.title}
                </h3>
              </div>
              <ul className="flex flex-col gap-2.5" role="list">
                {panel.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[#0A1628]/70 leading-relaxed">
                    <span
                      className={`mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full ${dotAccentMap[panel.accentColor] ?? dotAccentMap.ocean}`}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Reassurance banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 rounded-2xl bg-[#0A1628] p-8 text-center"
        >
          <p className="text-white/80 text-base max-w-2xl mx-auto leading-relaxed">
            <span className="text-[#00D4E8] font-semibold">Every detail has been thought through.</span>{" "}
            From Cast Member lifeguard rotations to sensory-friendly morning hours, we&apos;ve designed this experience to make every family feel safe, seen, and supported.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="text-sm text-white/60 px-4 py-2 bg-white/10 rounded-lg">
              🦺 Certified Lifeguards
            </span>
            <span className="text-sm text-white/60 px-4 py-2 bg-white/10 rounded-lg">
              ♿ ADA Accessible
            </span>
            <span className="text-sm text-white/60 px-4 py-2 bg-white/10 rounded-lg">
              🏥 First Aid On-Site
            </span>
            <span className="text-sm text-white/60 px-4 py-2 bg-white/10 rounded-lg">
              💧 Reef-Safe Policy
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
