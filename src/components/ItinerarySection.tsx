"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import { singleDayItinerary, threeDayItinerary } from "@/data/itinerary";
import EditableImage from "./editor/EditableImage";

const typeColors: Record<string, string> = {
  arrival: "bg-[#00B5C5]",
  water: "bg-[#1B6CA8]",
  dining: "bg-[#F6C90E]",
  rest: "bg-[#48BB78]",
  experience: "bg-[#F6C90E]",
  departure: "bg-[#E8D5A3]",
};

const typeLabels: Record<string, string> = {
  arrival: "Arrival",
  water: "Water Activity",
  dining: "Dining",
  rest: "Rest & Relax",
  experience: "Experience",
  departure: "Departure",
};

const dayThemes: Record<string, string> = {
  ocean: "from-[#0E4D8B] to-[#1B6CA8]",
  teal: "from-[#00B5C5] to-[#00D4E8]",
  jungle: "from-[#2D7A4F] to-[#48BB78]",
};

export default function ItinerarySection() {
  const [view, setView] = useState<"day" | "3day">("day");

  return (
    <section id="itinerary" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <SectionHeader
            eyebrow="Sample Itinerary"
            title="A Day Built Around Shared Wonder"
            description="Use this concierge-style sample itinerary to shape a family day that feels both magical and manageable, then personalize every stop at your own pace."
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 overflow-hidden rounded-3xl border border-[#E8D5A3]/40 shadow-lg"
        >
          <EditableImage
            contentKey="itineraryImage"
            className="h-52 w-full object-cover sm:h-64"
          />
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <div
            role="tablist"
            aria-label="Itinerary view"
            className="flex bg-[#F0FBFA] rounded-xl p-1 gap-1"
          >
            <button
              role="tab"
              aria-selected={view === "day"}
              onClick={() => setView("day")}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                view === "day"
                  ? "bg-[#1B6CA8] text-white shadow-sm"
                  : "text-[#0A1628]/60 hover:text-[#0A1628]"
              }`}
            >
              Day View
            </button>
            <button
              role="tab"
              aria-selected={view === "3day"}
              onClick={() => setView("3day")}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                view === "3day"
                  ? "bg-[#1B6CA8] text-white shadow-sm"
                  : "text-[#0A1628]/60 hover:text-[#0A1628]"
              }`}
            >
              3-Day View
            </button>
          </div>
        </motion.div>

        <div className="mt-12">
          <AnimatePresence mode="wait">
            {view === "day" ? (
              <motion.div
                key="day"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.35 }}
              >
                {/* Single day timeline */}
                <div className="relative max-w-3xl mx-auto">
                  {/* Vertical line */}
                  <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-[#E8D5A3]/60 hidden sm:block" aria-hidden="true" />

                  <ol className="flex flex-col gap-0">
                    {singleDayItinerary.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.06 }}
                        className="flex gap-5 sm:gap-6 pb-6"
                      >
                        {/* Icon dot */}
                        <div className="flex flex-col items-center gap-0 shrink-0">
                          <div
                            className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-sm ${typeColors[item.type] ?? "bg-gray-400"}`}
                          >
                            <span role="img" aria-label={typeLabels[item.type]}>{item.icon}</span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 pt-1 pb-2 border-b border-[#E8D5A3]/40">
                          <div className="flex flex-wrap items-baseline gap-2 mb-1">
                            <span className="text-xs font-bold text-[#1B6CA8] uppercase tracking-wide">
                              {item.time}
                            </span>
                            <span className="text-xs text-[#0A1628]/40 px-2 py-0.5 bg-[#F0FBFA] rounded-md">
                              {typeLabels[item.type]}
                            </span>
                          </div>
                          <h3 className="text-base font-bold text-[#0A1628] mb-1">
                            {item.activity}
                          </h3>
                          <p className="text-sm text-[#0A1628]/60 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </motion.li>
                    ))}
                  </ol>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="3day"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
              >
                {/* 3-day view */}
                <div className="grid lg:grid-cols-3 gap-6">
                  {threeDayItinerary.map((day, dayIndex) => (
                    <motion.div
                      key={day.day}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: dayIndex * 0.1 }}
                      className="rounded-2xl overflow-hidden border border-[#E8D5A3]/40 shadow-sm"
                    >
                      {/* Day header */}
                      <div className={`bg-gradient-to-r ${dayThemes[day.theme] ?? dayThemes.ocean} p-5`}>
                        <p className="text-white/70 text-sm font-semibold uppercase tracking-wide">
                          {day.day}
                        </p>
                        <p className="text-white text-xl font-bold mt-0.5">
                          {day.label}
                        </p>
                      </div>

                      {/* Day items */}
                      <ol className="p-5 flex flex-col gap-4 bg-white">
                        {day.items.map((item, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="text-xl shrink-0 mt-0.5" role="img" aria-label={typeLabels[item.type]}>
                              {item.icon}
                            </span>
                            <div>
                              <p className="text-xs font-semibold text-[#1B6CA8] uppercase tracking-wide mb-0.5">
                                {item.time}
                              </p>
                              <p className="text-sm font-bold text-[#0A1628] mb-1">
                                {item.activity}
                              </p>
                              <p className="text-xs text-[#0A1628]/60 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
