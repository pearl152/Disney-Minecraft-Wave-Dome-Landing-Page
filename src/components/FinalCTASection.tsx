"use client";

import { motion } from "framer-motion";

export default function FinalCTASection() {
  return (
    <section className="py-24 lg:py-32 bg-[#0A1628] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pixel-pattern opacity-20 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00B5C5]/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1B6CA8]/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#00B5C5] to-[#1B6CA8] flex items-center justify-center text-5xl shadow-2xl glow-pulse">
              💎
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-lg bg-[#F6C90E] flex items-center justify-center text-base shadow-lg">
              ✨
            </div>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
        >
           The Next Chapter in Your
           <span className="block text-[#00D4E8]">Family&apos;s Memory Story</span>
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto"
        >
           This concept is more than a water attraction — it&apos;s an invitation to laugh together, discover together, and end the day with stories your family will retell for years.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://www.disneyaulani.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00B5C5] hover:bg-[#00D4E8] text-white font-bold text-base rounded-xl transition-all shadow-lg shadow-[#00B5C5]/30 hover:shadow-[#00D4E8]/30 hover:-translate-y-0.5"
          >
             Start Planning Your Stay →
          </a>
          <a
            href="#brochure"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-base rounded-xl border border-white/20 hover:border-white/40 transition-all hover:-translate-y-0.5"
          >
            🖨️ Download Brochure
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-white/50"
        >
          <span>✅ Included with Resort Stay</span>
          <span>✅ All Ages Welcome</span>
          <span>✅ Only at Aulani</span>
          <span>✅ Disney Magic + Minecraft Wonder</span>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,30 C360,0 720,60 1080,30 C1260,15 1380,30 1440,30 L1440,60 L0,60 Z"
            fill="rgba(0,212,232,0.08)"
          />
        </svg>
      </div>
    </section>
  );
}
