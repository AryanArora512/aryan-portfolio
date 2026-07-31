"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const CORE_STACK = [
  "Python", "FastAPI", "React", "Next.js",
  "Flutter", "WebRTC", "PostgreSQL", "Docker", "OpenAI",
];

export function Hero() {
  const reduced = useReducedMotion();

  const fadeUp = (delay = 0) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: "easeOut" as const },
        };

  return (
    <section id="top" className="relative pt-10 sm:pt-16" aria-label="Introduction">
      {/* Background radial accent */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.045),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="section-shell pb-24 pt-12 lg:pb-32 lg:pt-20">
        <div className="max-w-5xl">
          {/* Status */}
          <motion.div {...fadeUp(0)}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-300">
              <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
              Currently at Bluetris Technologies
            </div>
          </motion.div>

          {/* H1 — primary headline */}
          <motion.h1
            {...fadeUp(0.05)}
            className="font-display mt-7 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            Crafting Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Mobile Experiences</span> & Robust Architectures.
          </motion.h1>

          {/* Tech stack — ATS keywords, visible text */}
          <motion.p
            {...fadeUp(0.1)}
            className="mt-6 font-mono text-sm text-slate-400 sm:text-base flex flex-wrap gap-2 items-center"
            aria-label="Core technologies"
          >
            {CORE_STACK.map(tech => (
              <span key={tech} className="tech-badge bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-default">{tech}</span>
            ))}
          </motion.p>

          {/* Body copy */}
          <motion.p
            {...fadeUp(0.14)}
            className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
          >
            I am a Software Engineer specializing in Flutter and full-stack development. I focus on bridging the gap between pixel-perfect UI, seamless cross-platform performance, and highly scalable enterprise backends.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.18)}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            {/* Primary — resume download */}
            <Link href="/about" aria-label="View Aryan Arora's resume" passHref legacyBehavior>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:shadow-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#030510]"
              >
                View Resume
              </motion.a>
            </Link>

            {/* Secondary — view projects */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-white transition duration-200 hover:border-white/30 hover:bg-white/[0.1]"
            >
              View Projects
            </motion.a>

            {/* Tertiary — icon links */}
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/AryanArora512"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition duration-200 hover:border-white/30 hover:text-white hover:bg-white/10"
            >
              <GitHubIcon />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com/in/aryan-arora512"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition duration-200 hover:border-white/30 hover:text-white hover:bg-white/10"
            >
              <LinkedInIcon />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
