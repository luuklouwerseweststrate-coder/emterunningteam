"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import WestkapelleTower from "@/components/ui/WestkapelleTower";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-emte-green-dark pt-44 sm:pt-48 pb-16">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emte-yellow rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emte-green-light rounded-full blur-3xl" />
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left side - Text content */}
          <div className="relative flex-1 text-center lg:text-left">
            {/* Tower silhouette behind text */}
            <div className="absolute right-0 top-0 bottom-0 flex items-center opacity-10 pointer-events-none hidden lg:block">
              <WestkapelleTower height={420} color="white" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold tracking-wider uppercase bg-emte-yellow/10 text-emte-yellow rounded-full border border-emte-yellow/20">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Westkapelle, Zeeland
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight"
            >
              EMTE{" "}
              <span className="text-emte-yellow">Running</span>
              <br />
              Team
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mt-6 text-lg md:text-xl text-white/70 max-w-xl leading-relaxed"
            >
              Zaterdag in de kroeg, zondag in de hardloopschoenen.
              Hybride atleten uit Westkapelle.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
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
          </div>

          {/* Right side - Team group photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="flex-1 w-full max-w-lg lg:max-w-none"
          >
            <div className="relative">
              {/* Yellow accent border */}
              <div className="absolute -inset-1 bg-gradient-to-br from-emte-yellow via-emte-yellow-light to-emte-yellow/40 rounded-2xl opacity-60 blur-sm" />
              <div className="relative rounded-2xl overflow-hidden border-2 border-emte-yellow/30">
                <Image
                  src="/images/team-group.jpeg"
                  alt="EMTE Running Team bij de finish van de 65 van Walcheren"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              {/* Badge overlay */}
              <div className="absolute -bottom-3 -right-3 bg-emte-yellow text-emte-green-dark px-4 py-2 rounded-xl font-bold text-sm shadow-lg">
                65 van Walcheren
              </div>
            </div>
            {/* Tower below photo on mobile */}
            <div className="mt-8 flex justify-center opacity-15 lg:hidden">
              <WestkapelleTower height={200} color="white" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="hidden lg:flex justify-center mt-16"
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
