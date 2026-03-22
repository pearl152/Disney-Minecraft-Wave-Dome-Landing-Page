"use client";

import { motion } from "framer-motion";
import Badge from "./ui/Badge";
import EditableImage from "./editor/EditableImage";

const tags = [
  { label: "Family-Friendly", variant: "teal" as const },
  { label: "Indoor Water Attraction", variant: "ocean" as const },
  { label: "Story-Driven Experience", variant: "gold" as const },
  { label: "Parent Planning Essentials", variant: "jungle" as const },
  { label: "Aulani Signature Experience", variant: "sand" as const },
];

function DomeVisual() {
  return (
    <div className="relative w-full max-w-sm mx-auto" aria-hidden="true">
      {/* Outer dome shape */}
      <svg
        viewBox="0 0 400 320"
        className="w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Pixel grid overlay */}
        <defs>
          <pattern id="pixel-grid" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M 16 0 L 0 0 0 16" fill="none" stroke="rgba(0,212,232,0.12)" strokeWidth="0.5" />
          </pattern>
          <radialGradient id="domeGlow" cx="50%" cy="60%" r="50%">
            <stop offset="0%" stopColor="#00D4E8" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0A1628" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00B5C5" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0E4D8B" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Background */}
        <rect width="400" height="320" fill="#0A1628" rx="16" />
        <rect width="400" height="320" fill="url(#pixel-grid)" rx="16" />

        {/* Glow */}
        <ellipse cx="200" cy="190" rx="180" ry="130" fill="url(#domeGlow)" />

        {/* Geometric dome structure — pixelated semicircle */}
        <path
          d="M 60 240 L 60 160 L 80 120 L 120 80 L 160 56 L 200 48 L 240 56 L 280 80 L 320 120 L 340 160 L 340 240 Z"
          fill="none"
          stroke="rgba(0,212,232,0.5)"
          strokeWidth="2"
        />
        {/* Inner dome lines */}
        <path
          d="M 100 240 L 100 170 L 130 130 L 170 100 L 200 92 L 230 100 L 270 130 L 300 170 L 300 240"
          fill="none"
          stroke="rgba(0,212,232,0.25)"
          strokeWidth="1"
        />

        {/* Pixel cliff shapes */}
        <rect x="60" y="200" width="16" height="40" fill="rgba(45,122,79,0.7)" />
        <rect x="76" y="192" width="16" height="48" fill="rgba(45,122,79,0.5)" />
        <rect x="308" y="208" width="16" height="32" fill="rgba(45,122,79,0.7)" />
        <rect x="324" y="200" width="16" height="40" fill="rgba(45,122,79,0.5)" />

        {/* Water surface — animated wave suggestion */}
        <path
          d="M 60 220 Q 110 210 160 220 Q 210 230 260 220 Q 310 210 340 220 L 340 240 L 60 240 Z"
          fill="url(#waterGrad)"
          opacity="0.8"
        />

        {/* Central temple/structure */}
        <rect x="184" y="168" width="32" height="72" fill="rgba(27,108,168,0.8)" />
        <rect x="176" y="160" width="48" height="12" fill="rgba(0,181,197,0.7)" />
        <rect x="168" y="152" width="64" height="10" fill="rgba(0,212,232,0.5)" />

        {/* Diamond gem at top */}
        <polygon
          points="200,130 210,148 200,158 190,148"
          fill="#00D4E8"
          opacity="0.9"
        />
        <polygon
          points="200,130 210,148 200,142 190,148"
          fill="#F6C90E"
          opacity="0.7"
        />

        {/* Glowing dots / particles */}
        {[
          [130, 160], [270, 155], [155, 195], [245, 185], [200, 170],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="2" fill="#F6C90E" opacity="0.6" />
        ))}

        {/* Pixel grid on water */}
        <rect x="60" y="220" width="280" height="20" fill="url(#pixel-grid)" opacity="0.4" />
      </svg>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0A1628]"
      aria-label="Hero"
    >
      {/* Pixel pattern overlay */}
      <div className="absolute inset-0 pixel-pattern opacity-60 pointer-events-none" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0E4D8B]/45 to-[#0A1628] pointer-events-none" />
      <EditableImage
        contentKey="heroImage"
        className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-screen pointer-events-none"
        priority
      />
      <div className="sparkle-overlay absolute inset-0 pointer-events-none" />

      {/* Radial glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00B5C5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="h-px w-8 bg-[#00D4E8]" />
              <span className="text-[#00D4E8] text-sm font-semibold tracking-widest uppercase">
                 Storybook Resort Concept
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight"
            >
               Step Into a{" "}
               <span className="text-[#00D4E8]">World of Shared Discovery</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-lg sm:text-xl text-[#F6C90E] font-semibold"
            >
               A premium family invitation into tropical wonder
            </motion.p>

            {/* Positioning statement */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed max-w-lg"
            >
               Where warm island elegance meets imaginative worldbuilding — a cinematic indoor wave experience crafted for meaningful family memory-making.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#overview"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#00B5C5] hover:bg-[#00D4E8] text-white font-semibold text-sm rounded-xl transition-colors shadow-lg shadow-[#00B5C5]/25"
              >
                 Begin the Story
              </a>
              <a
                href="#itinerary"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl border border-white/20 hover:border-white/40 transition-all"
              >
                 Plan the Moments
              </a>
              <a
                href="#itinerary"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#F6C90E]/10 hover:bg-[#F6C90E]/20 text-[#F6C90E] font-semibold text-sm rounded-xl border border-[#F6C90E]/30 transition-all"
              >
                 View a Sample Day
              </a>
            </motion.div>

            {/* Reassurance tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {tags.map((tag) => (
                <Badge key={tag.label} variant={tag.variant} size="sm">
                  {tag.label}
                </Badge>
              ))}
            </motion.div>
          </div>

          {/* Visual dome */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:flex justify-center"
          >
            <div className="relative">
              <DomeVisual />
              <div className="absolute -bottom-4 -left-4 hidden md:block rounded-2xl border border-white/25 bg-white/10 px-4 py-3 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.2em] text-[#F6C90E] font-semibold">Tonight&apos;s feeling</p>
                <p className="text-sm font-semibold text-white">Cinematic glow, gentle waves, and shared laughter</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="wave-animate absolute bottom-0 left-0 w-[200%] h-full">
          <svg
            viewBox="0 0 1440 96"
            className="absolute bottom-0 w-full"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,48 C180,96 360,0 540,48 C720,96 900,0 1080,48 C1260,96 1440,0 1440,48 L1440,96 L0,96 Z"
              fill="#F8FFFE"
              opacity="0.08"
            />
          </svg>
          <svg
            viewBox="0 0 1440 96"
            className="absolute bottom-0 w-full"
            style={{ left: "50%" }}
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,48 C180,96 360,0 540,48 C720,96 900,0 1080,48 C1260,96 1440,0 1440,48 L1440,96 L0,96 Z"
              fill="#F8FFFE"
              opacity="0.08"
            />
          </svg>
        </div>
        <svg
          viewBox="0 0 1440 96"
          className="absolute bottom-0 w-full"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,64 C360,32 720,96 1080,64 C1260,48 1380,64 1440,64 L1440,96 L0,96 Z"
            fill="#F8FFFE"
          />
        </svg>
      </div>
    </section>
  );
}
