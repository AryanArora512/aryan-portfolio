"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { experiences } from "../content";

export function Experience() {
  const [openId, setOpenId] = useState<string | null>("bluetris");
  const reduced = useReducedMotion();

  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-24 lg:py-32">
      <div className="section-shell">
        <header className="mb-14">
          <p className="section-eyebrow">Career Progression</p>
          <h2 id="experience-heading" className="section-heading mt-4">
            Engineering Journey
          </h2>
          <p className="section-copy mt-5">
            Documenting the scale of impact and systems built at each role.
          </p>
        </header>

        <div className="relative flex flex-col gap-0">
          {/* Timeline spine */}
          <div
            className="absolute left-[19px] top-5 bottom-5 w-px bg-gradient-to-b from-white/20 via-white/8 to-transparent"
            aria-hidden="true"
          />

          {experiences.map((exp, idx) => {
            const isOpen = openId === exp.id;
            const isLast = idx === experiences.length - 1;
            const cardId = `exp-${exp.id}`;
            const titleId = `exp-title-${exp.id}`;

            return (
              <motion.div
                key={exp.id}
                initial={reduced ? {} : { opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={`relative pl-12 ${!isLast ? "pb-8" : ""}`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border ${
                    exp.type === "current"
                      ? "border-cyan-400/30 bg-cyan-400/10"
                      : "border-white/10 bg-white/[0.04]"
                  }`}
                  aria-hidden="true"
                >
                  {exp.type === "current" ? (
                    <span className="pulse-dot h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  ) : (
                    <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                  )}
                </div>

                {/* Card */}
                <div className="surface-panel rounded-2xl">
                  {/* Header — always visible */}
                  <button
                    onClick={() => setOpenId(isOpen ? null : exp.id)}
                    aria-expanded={isOpen}
                    aria-controls={cardId}
                    className="w-full p-5 sm:p-6 text-left"
                    id={titleId}
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="font-display text-base font-semibold text-white sm:text-lg">
                          {exp.title}
                        </p>
                        <p className="mt-0.5 text-sm text-slate-400">
                          {exp.company}{" "}
                          {exp.type === "current" && (
                            <span className="ml-1.5 rounded-full bg-cyan-400/12 px-2 py-0.5 text-[10px] font-medium text-cyan-300">
                              Current
                            </span>
                          )}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-slate-500">{exp.period}</span>
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          aria-hidden="true"
                        >
                          <ChevronIcon />
                        </motion.span>
                      </div>
                    </div>

                    {/* Stack badges — always visible */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {exp.stack.map((tech) => (
                        <span key={tech} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </button>

                  {/* Expandable body — always in DOM */}
                  <motion.div
                    id={cardId}
                    role="region"
                    aria-labelledby={titleId}
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={
                      reduced
                        ? { duration: 0 }
                        : {
                            height: { duration: 0.3, ease: [0.45, 0, 0.55, 1] },
                            opacity: { duration: 0.2, delay: isOpen ? 0.05 : 0 },
                          }
                    }
                    style={{ overflow: "hidden" }}
                  >
                    <div className="border-t border-white/7 px-5 pb-6 pt-5 sm:px-6">
                      <p className="mb-4 text-sm italic text-slate-400">{exp.summary}</p>
                      <ul className="flex flex-col gap-3" aria-label="Responsibilities and achievements">
                        {exp.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3 text-sm leading-7 text-slate-300">
                            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/60" aria-hidden="true" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ChevronIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
