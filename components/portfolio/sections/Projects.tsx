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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link href={`/projects/${project.slug}`} className="group block h-full">
                <Card className="h-full bg-slateNight group-hover:border-cyanGlow/50 transition-colors">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="mb-4 flex items-center justify-between">
                      <Badge variant="outline">{project.confidenceLevel}</Badge>
                      <ArrowRight size={16} className="text-slate-500 group-hover:text-cyanGlow transition-colors group-hover:translate-x-1" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-white mb-3 group-hover:text-cyanGlow transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-400 line-clamp-3 mb-6 flex-grow">
                      {project.businessProblem}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                      {project.technologies.slice(0, 4).map(tech => (
                        <Badge key={tech} variant="mono">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
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
