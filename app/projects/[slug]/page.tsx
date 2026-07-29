import { notFound } from "next/navigation";
import { getProjectBySlug, allProjects } from "@/content/projects";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allProjects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);
  if (!project) return {};

  return {
    title: `${project.title} | Case Study | Aryan Arora`,
    description: project.businessProblem,
    keywords: [...project.technologies, "Software Architecture", "Case Study"],
    openGraph: {
      title: `${project.title} | Case Study`,
      description: project.businessProblem,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: project.title,
      description: project.businessProblem,
    },
  };
}

export default async function ProjectCaseStudy({ params }: Props) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    applicationCategory: project.category,
    operatingSystem: "Any",
    description: project.businessProblem,
    author: {
      "@type": "Person",
      name: "Aryan Arora",
      url: "https://aryan-arora-dev.vercel.app",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="py-24 lg:py-32">
        <Section>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to all projects
          </Link>

          <header className="mb-16 md:mb-24">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="outline">{project.confidenceLevel}</Badge>
              <span className="text-sm text-slate-500 uppercase tracking-widest">{project.category}</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-8 tracking-tight">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 mb-10">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-cyanGlow/10 px-5 py-2.5 text-sm font-semibold text-cyan-300 transition hover:bg-cyanGlow/20"
                >
                  <ExternalLink size={16} />
                  Live Deployment
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  Source Code
                </a>
              )}
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 lg:gap-24">
            <div className="space-y-16">
              <section>
                <h2 className="text-2xl font-display font-semibold text-white mb-6">Business Problem</h2>
                <p className="text-slate-300 leading-relaxed text-lg">{project.businessProblem}</p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-white mb-6">Technical Challenge</h2>
                <p className="text-slate-300 leading-relaxed text-lg">{project.technicalProblem}</p>
              </section>

              {project.architectureDiagramId && (
                <section>
                  <h2 className="text-2xl font-display font-semibold text-white mb-6">Architecture & Systems</h2>
                  <div className="p-8 bg-slateNight rounded-2xl border border-white/10">
                    <p className="text-slate-300 text-sm overflow-x-auto whitespace-pre-wrap">
                      Architecture visual mapped to diagram ID: {project.architectureDiagramId}
                    </p>
                  </div>
                </section>
              )}

              <section>
                <h2 className="text-2xl font-display font-semibold text-white mb-8">Architectural Decisions</h2>
                <div className="grid gap-6">
                  {project.engineeringDecisions.map((decision, idx) => (
                    <div key={idx} className="surface-panel p-6 rounded-2xl">
                      <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-3">
                        <span className="text-cyanGlow/50 font-mono text-sm">0{idx + 1}</span>
                        {decision.decision}
                      </h3>
                      <p className="text-slate-400 leading-relaxed mb-4">{decision.rationale}</p>
                      
                      {decision.tradeoffs && decision.tradeoffs.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-white/5">
                          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Tradeoffs</h4>
                          <ul className="space-y-2">
                            {decision.tradeoffs.map((tradeoff, i) => (
                              <li key={i} className="flex gap-2 text-slate-400 text-sm">
                                <span className="shrink-0 mt-1 h-1 w-1 rounded-full bg-orange-400/60" />
                                <span>{tradeoff}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-white mb-6">Lessons Learned & Reflection</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  {project.lessonsLearned.wentWell.length > 0 && (
                    <div className="surface-panel p-6 rounded-2xl">
                      <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-4">What Went Well</h3>
                      <ul className="space-y-3">
                        {project.lessonsLearned.wentWell.map((lesson, idx) => (
                          <li key={idx} className="flex gap-3 text-slate-300 text-sm">
                            <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400/60" />
                            <span className="leading-relaxed">{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.lessonsLearned.wouldChange.length > 0 && (
                    <div className="surface-panel p-6 rounded-2xl">
                      <h3 className="text-sm font-bold text-orange-400 uppercase tracking-wider mb-4">What I&apos;d Change</h3>
                      <ul className="space-y-3">
                        {project.lessonsLearned.wouldChange.map((lesson, idx) => (
                          <li key={idx} className="flex gap-3 text-slate-300 text-sm">
                            <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-400/60" />
                            <span className="leading-relaxed">{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            </div>

            <aside>
              <div className="sticky top-24 surface-panel p-6 rounded-2xl space-y-8">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-4">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <Badge key={tech} variant="mono" className="bg-white/5 border-white/10 text-slate-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {(project.security || project.performance || project.scalability) && (
                  <div className="pt-8 border-t border-white/5 space-y-6">
                    {project.security && (
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-2">Security</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">{project.security}</p>
                      </div>
                    )}
                    {project.performance && (
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-2">Performance</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">{project.performance}</p>
                      </div>
                    )}
                    {project.scalability && (
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-2">Scalability</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">{project.scalability}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </aside>
          </div>
        </Section>
      </article>
    </>
  );
}
