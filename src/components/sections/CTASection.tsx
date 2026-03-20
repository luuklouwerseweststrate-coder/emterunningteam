"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="py-24 bg-emte-green relative overflow-hidden">
      {/* Decorative circles */}
      <motion.div
        className="absolute -top-20 -right-20 w-80 h-80 border border-white/10 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -bottom-10 -left-10 w-60 h-60 border border-emte-yellow/10 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Klaar om mee te{" "}
            <span className="text-emte-yellow">doen?</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            Of je nu wilt meelopen, meedrinken of allebei, we horen graag
            van je. Het enige wat je nodig hebt is een paar hardloopschoenen
            en een gezonde dorst.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" href="/contact">
              Neem Contact Op
            </Button>
            <Button variant="outline" size="lg" href="/sponsoren">
              <span className="text-white">Word Sponsor</span>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
