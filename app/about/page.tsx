import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { experiences, education } from "@/components/portfolio/content";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, User } from "lucide-react";
import * as motion from "framer-motion/client";

export const metadata: Metadata = {
  title: "About | Aryan Arora",
  description: "Career progression, experience, and background of Aryan Arora.",
};

export default function AboutPage() {
  return (
    <div className="pb-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.08),transparent_70%)] pointer-events-none" aria-hidden="true" />
      
      <Section className="pt-32 pb-16 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6"
        >
          About & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Experience</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-slate-400 max-w-2xl leading-relaxed"
        >
          I am a Mobile Application Developer specializing in Flutter, building products that require deep integration across frontend, backend, and robust architectures. My background spans building cross-platform applications, integrating complex APIs, and delivering high-quality, scalable solutions.
        </motion.p>
      </Section>

      <Section className="py-16 border-t border-white/5 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold text-white mb-10 flex items-center gap-3"
        >
          <div className="h-10 w-10 rounded-full bg-cyan-400/10 flex items-center justify-center">
            <User className="text-cyan-400" size={20} />
          </div>
          Who I Am
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="surface-panel p-8 md:p-10 rounded-3xl mb-24 max-w-4xl relative group"
        >
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
          <p className="text-slate-300 leading-relaxed mb-6 text-lg relative z-10">
            I am a Software Engineer specializing in building scalable products from end-to-end. While my core expertise lies in crafting pixel-perfect, high-performance mobile applications with Flutter, I routinely architect the entire stack—from Next.js web dashboards down to robust FastAPI backends and PostgreSQL databases.
          </p>
          <p className="text-slate-300 leading-relaxed text-lg relative z-10">
            My engineering philosophy centers around correctness, maintainability, and operational clarity. I don&apos;t just build features; I focus on the intricate details that make an app feel premium, ensuring that whether it&apos;s an AI-orchestration pipeline or a realtime WebRTC system, the architecture can handle real-world scale gracefully.
          </p>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold text-white mb-16 flex items-center gap-3"
        >
          <div className="h-10 w-10 rounded-full bg-violet-400/10 flex items-center justify-center">
            <Briefcase className="text-violet-400" size={20} />
          </div>
          Engineering Journey
        </motion.h2>
        
        <div className="relative flex flex-col gap-12 mb-24">
          {/* Timeline spine */}
          <div
            className="absolute left-[27px] top-5 bottom-5 w-px bg-gradient-to-b from-cyan-500/50 via-white/10 to-transparent"
            aria-hidden="true"
          />

          {experiences.map((exp, idx) => (
            <motion.div 
              key={exp.id} 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-16 md:pl-20"
            >
              <div
                className={`absolute left-0 top-1 flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#030510] ${
                  exp.type === "current"
                    ? "bg-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                    : "bg-slate-800"
                }`}
                aria-hidden="true"
              >
                {exp.type === "current" ? (
                  <Briefcase size={20} className="text-[#030510]" />
                ) : (
                  <Briefcase size={20} className="text-slate-400" />
                )}
              </div>

              <div className="surface-panel p-8 md:p-10 rounded-3xl group transition-all duration-300 hover:border-cyan-400/20 hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-slate-400 text-lg">
                      {exp.company}
                    </p>
                  </div>
                  <Badge variant="outline" className="w-fit bg-white/5 border-white/10 text-cyan-300 px-4 py-1.5">{exp.period}</Badge>
                </div>
                
                <p className="text-slate-300 italic mb-8 border-l-2 border-cyan-500/30 pl-4">{exp.summary}</p>
                
                <ul className="space-y-4 mb-8">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-4 text-slate-300 leading-relaxed">
                      <span className="shrink-0 mt-2.5 h-1.5 w-1.5 rounded-full bg-cyan-400" aria-hidden="true" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {exp.stack.map(tech => (
                    <span key={tech} className="tech-badge bg-black/20 border-white/5">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold text-white mb-12 flex items-center gap-3"
        >
          <div className="h-10 w-10 rounded-full bg-emerald-400/10 flex items-center justify-center">
            <GraduationCap className="text-emerald-400" size={20} />
          </div>
          Education
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, idx) => (
            <motion.div 
              key={edu.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="surface-panel p-8 rounded-3xl flex flex-col justify-between group hover:border-emerald-400/20 transition-all duration-300"
            >
              <div>
                <h3 className="font-display text-xl font-semibold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-slate-400 mb-8 leading-relaxed">{edu.institution}</p>
              </div>
              <Badge variant="outline" className="w-fit bg-white/5 border-white/10 text-slate-300">{edu.period}</Badge>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
