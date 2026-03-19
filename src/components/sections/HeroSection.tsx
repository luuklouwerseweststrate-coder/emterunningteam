"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-emte-green-dark">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emte-yellow rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emte-green-light rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emte-yellow rounded-full blur-3xl opacity-20" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold tracking-wider uppercase bg-emte-yellow/10 text-emte-yellow rounded-full border border-emte-yellow/20">
            Hardlopen met Ambitie
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight tracking-tight"
        >
          EMTÉ{" "}
          <span className="text-emte-yellow">Running</span>
          <br />
          Team
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
        >
          Eén team, één doel: samen sneller, sterker en verder komen.
          Van recreatieve kilometers tot ambitieuze wedstrijden — wij lopen
          als één.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="secondary" size="lg" href="/team">
            Ontdek het Team
          </Button>
          <Button variant="outline" size="lg" href="/evenementen">
            <span className="text-white border-white hover:bg-white hover:text-emte-green">
              Bekijk Evenementen
            </span>
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5"
          >
            <motion.div className="w-1.5 h-3 bg-emte-yellow rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
