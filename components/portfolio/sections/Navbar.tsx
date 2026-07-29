"use client";

import { motion, useReducedMotion } from "framer-motion";
import { navItems } from "../content";

export function Navbar() {
  const reduced = useReducedMotion();

  const variants = reduced
    ? { hidden: {}, visible: {} }
    : { hidden: { y: -14, opacity: 0 }, visible: { y: 0, opacity: 1 } };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-white/6 bg-[#060816]/80 backdrop-blur-2xl"
    >
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-3 focus-visible:rounded-xl">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
            <span className="font-display text-sm font-semibold tracking-[0.2em] text-white">AA</span>
          </div>
          <div className="hidden sm:block">
            <p className="font-display text-sm font-medium text-white">Aryan Arora</p>
            <div className="flex items-center gap-1.5">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              <p className="text-xs text-slate-400">Bluetris Technologies</p>
            </div>
          </div>
        </a>

        {/* Nav links */}
        <nav
          className="hidden items-center gap-6 text-sm text-slate-400 lg:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition duration-150 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Resume CTA — always visible */}
        <a
          href="/resume.pdf"
          download
          aria-label="Download Aryan Arora's resume as PDF"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white transition duration-200 hover:border-white/16 hover:bg-white/[0.07]"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 3v13M7 12l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 20h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          Resume
        </a>
      </div>
    </motion.header>
  );
}
