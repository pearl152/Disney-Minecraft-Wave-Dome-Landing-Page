"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import EditableImage from "./editor/EditableImage";

export default function GallerySection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FFFE] py-20 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,_rgba(0,181,197,0.18),_transparent_72%)]" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Memory Gallery"
          title="Where Family Play Becomes a Story"
          description="From first splashes to sunset smiles, these moments capture the warmth, wonder, and togetherness at the heart of your Wave Dome stay."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7"
          >
            <EditableImage
              contentKey="galleryImage1"
              className="h-72 w-full rounded-3xl border border-white/70 object-cover shadow-xl md:h-[26rem]"
            />
          </motion.div>
          <div className="md:col-span-5 grid gap-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <EditableImage
                contentKey="galleryImage2"
                className="h-40 w-full rounded-3xl border border-white/70 object-cover shadow-lg md:h-52"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
            >
              <EditableImage
                contentKey="galleryImage3"
                className="h-40 w-full rounded-3xl border border-white/70 object-cover shadow-lg md:h-52"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
