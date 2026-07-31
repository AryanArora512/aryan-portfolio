"use client";

import { skillCategories } from "../content";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.03),transparent_70%)]" aria-hidden="true" />
      
      <div className="section-shell relative z-10">
        <header className="mb-14">
          <p className="section-eyebrow text-cyan-400">Technical Skills</p>
          <h2 id="skills-heading" className="section-heading mt-4">
            Technologies in production use
          </h2>
          <p className="section-copy mt-5">
            Every technology listed here has been used in a real, shipped product — not a
            tutorial or side experiment.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="surface-panel rounded-2xl p-6 group"
            >
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2.5" role="list" aria-label={`${category.label} technologies`}>
                {category.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="inline-flex items-center rounded-lg bg-white/5 px-3 py-1.5 text-sm font-medium text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white hover:border-cyan-400/30 transition-colors cursor-default shadow-sm"
                    role="listitem"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
