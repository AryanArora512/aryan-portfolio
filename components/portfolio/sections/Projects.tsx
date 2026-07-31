"use client";

import { motion } from "framer-motion";
import { allProjects } from "@/content/projects";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function Projects() {
  const flagships = allProjects.filter(p => p.category === "Flagship");

  return (
    <section id="work" aria-labelledby="work-heading" className="py-24 lg:py-32">
      <div className="section-shell">
        <header className="mb-14">
          <p className="section-eyebrow">Flagship Work</p>
          <h2 id="work-heading" className="section-heading mt-4 flex items-center justify-between">
            <span>Engineering case studies</span>
            <Link href="/projects" className="hidden sm:inline-flex items-center text-sm font-medium text-cyanGlow hover:text-cyan-300 transition-colors group">
              View all projects
              <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </h2>
          <p className="section-copy mt-5">
            Production systems built from the ground up. Each case study documents the problem, architectural decisions, tradeoffs, and outcomes.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {flagships.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="group h-full"
            >
              <Link href={`/projects/${project.slug}`} className="block h-full relative">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 to-violet-500 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-sm" aria-hidden="true" />
                <div className="surface-panel rounded-3xl h-full p-8 flex flex-col relative z-10 overflow-hidden">
                  <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl group-hover:bg-cyan-400/20 transition-colors duration-500" aria-hidden="true" />
                  
                  <div className="mb-6 flex items-center justify-between relative z-10">
                    <Badge variant="outline" className="bg-white/5 border-white/10 text-cyan-300">{project.confidenceLevel}</Badge>
                    <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-all duration-300">
                      <ArrowRight size={18} className="text-slate-400 group-hover:text-cyan-300 transition-colors group-hover:-rotate-45" />
                    </div>
                  </div>
                  
                  <h3 className="font-display text-2xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors relative z-10">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-slate-400 line-clamp-3 mb-8 flex-grow leading-relaxed relative z-10">
                    {project.businessProblem}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-white/5 relative z-10">
                    {project.technologies.slice(0, 4).map(tech => (
                      <span key={tech} className="tech-badge bg-black/20 border-white/5">{tech}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 sm:hidden">
          <Link href="/projects" className="inline-flex w-full justify-center items-center rounded-full bg-white/5 px-6 py-3 text-sm font-medium text-white border border-white/10 hover:bg-white/10 transition-colors">
            View all projects
          </Link>
        </div>
      </div>
    </section>
  );
}
