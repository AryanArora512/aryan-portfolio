"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { TrustBar } from "./sections/TrustBar";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Experience } from "./sections/Experience";
import { SystemDesign } from "./sections/SystemDesign";
import { WhyHireMe } from "./sections/WhyHireMe";
import { Contact } from "./sections/Contact";

export function PortfolioShell() {
  const [isLoaded, setIsLoaded] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsLoaded(true);
      return;
    }
    const timer = window.setTimeout(() => setIsLoaded(true), 180);
    return () => window.clearTimeout(timer);
  }, [prefersReducedMotion]);

  return (
    <>
      {/* Entry loader — exits immediately on prefers-reduced-motion */}
      <AnimatePresence>
        {!isLoaded ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[90] flex items-center justify-center bg-[#060816]"
            exit={{ opacity: 0, transition: { duration: 0.16 } }}
            aria-hidden="true"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/75" />
                <span className="h-2 w-2 rounded-full bg-white/35" />
                <span className="h-2 w-2 rounded-full bg-white/15" />
              </div>
              <p className="font-display text-xs uppercase tracking-[0.34em] text-slate-400">
                Aryan Arora
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <main className="relative overflow-x-clip pb-20">
        {/* Background top gradient */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[700px] bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.04),transparent_60%)]"
          aria-hidden="true"
        />

        <Hero />
        <WhyHireMe />
        <TrustBar />
        <Projects />
        <Skills />
        <Experience />
        <SystemDesign />
        <Contact />
      </main>
    </>
  );
}
