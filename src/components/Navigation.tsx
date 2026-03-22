"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Features", href: "#features" },
  { label: "Safety", href: "#safety" },
  { label: "FAQ", href: "#faq" },
  { label: "Itinerary", href: "#itinerary" },
  { label: "Brochure", href: "#brochure" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A1628]/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group"
          aria-label="Minecraft Wave Dome home"
        >
          {/* Pixel diamond icon */}
          <span className="text-2xl select-none" aria-hidden="true">
            💎
          </span>
          <span className="font-bold text-white text-sm sm:text-base leading-tight">
            Minecraft{" "}
            <span className="text-[#00D4E8]">Wave Dome</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#itinerary"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-[#00B5C5] hover:bg-[#00D4E8] text-white font-semibold text-sm rounded-xl transition-colors shadow-md"
        >
          Plan Your Stay
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-white hover:text-[#00D4E8] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#0A1628]/95 backdrop-blur-md border-t border-white/10 overflow-hidden"
          >
            <ul className="px-4 py-4 flex flex-col gap-1" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg text-sm font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="#itinerary"
                  onClick={handleLinkClick}
                  className="block text-center px-4 py-3 bg-[#00B5C5] hover:bg-[#00D4E8] text-white font-semibold text-sm rounded-xl transition-colors"
                >
                  Plan Your Stay
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
