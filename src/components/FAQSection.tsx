"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import { faqs } from "@/data/faqs";

function FAQItem({ faq, isOpen, onToggle }: {
  faq: (typeof faqs)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-[#E8D5A3]/40 rounded-2xl overflow-hidden">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-[#F8FFFE] transition-colors"
      >
        <span className="text-base font-semibold text-[#0A1628] leading-snug pr-4">
          {faq.question}
        </span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full bg-[#1B6CA8]/10 flex items-center justify-center text-[#1B6CA8] font-bold transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${faq.id}`}
            role="region"
            aria-label={faq.question}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 bg-white border-t border-[#E8D5A3]/30">
              {faq.category && (
                <span className="inline-block text-xs font-semibold text-[#00B5C5] uppercase tracking-wider mb-3">
                  {faq.category}
                </span>
              )}
              <p className="text-sm sm:text-base text-[#0A1628]/70 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  const half = Math.ceil(faqs.length / 2);
  const col1 = faqs.slice(0, half);
  const col2 = faqs.slice(half);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F0FBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <SectionHeader
            eyebrow="Common Questions"
            title="Everything You Need to Know"
            description="We've gathered the most common questions from families planning their Aulani visit. Can't find your answer? Our resort concierge team is always happy to help."
          />
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            {col1.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => toggle(faq.id)}
              />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {col2.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => toggle(faq.id)}
              />
            ))}
          </div>
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-[#0A1628]/60 text-sm">
            Still have questions?{" "}
            <a
              href="https://www.disneyaulani.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1B6CA8] font-semibold hover:underline"
            >
              Contact Aulani Guest Services →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
