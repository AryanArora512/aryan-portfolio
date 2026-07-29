import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { experiences } from "@/components/portfolio/content";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About | Aryan Arora",
  description: "Career progression, experience, and background of Aryan Arora.",
};

export default function AboutPage() {
  return (
    <div className="pb-24">
      <Section className="pt-32 pb-16 border-b border-white/5 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.05),transparent_70%)]">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
          About & Experience
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl">
          I build products that require deep integration across frontend, backend, and infrastructure. My background spans AI applications, realtime networks, and enterprise HR systems.
        </p>
      </Section>

      <Section className="py-16">
        <h2 className="text-2xl font-semibold text-white mb-12">Engineering Journey</h2>
        
        <div className="relative flex flex-col gap-12">
          {/* Timeline spine */}
          <div
            className="absolute left-[19px] top-5 bottom-5 w-px bg-gradient-to-b from-white/20 via-white/8 to-transparent"
            aria-hidden="true"
          />

          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-12">
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

              <div className="surface-panel p-8 rounded-2xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">
                      {exp.title}
                    </h3>
                    <p className="text-slate-400">
                      {exp.company}
                    </p>
                  </div>
                  <Badge variant="outline" className="w-fit">{exp.period}</Badge>
                </div>
                
                <p className="text-slate-300 italic mb-6">{exp.summary}</p>
                
                <ul className="space-y-4 mb-8">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-4 text-slate-300 text-sm leading-relaxed">
                      <span className="shrink-0 mt-2 h-1 w-1 rounded-full bg-cyan-400/60" aria-hidden="true" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {exp.stack.map(tech => (
                    <Badge key={tech} variant="mono" className="bg-white/5 text-slate-300 border-white/10">{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
