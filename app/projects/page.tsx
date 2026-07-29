import { Metadata } from "next";
import { allProjects } from "@/content/projects";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Flagship Projects | Aryan Arora",
  description: "Architecture, engineering decisions, and case studies of my flagship products and systems.",
};

export default function ProjectsIndexPage() {
  const flagships = allProjects.filter(p => p.category === "Flagship");
  const productionApps = allProjects.filter(p => p.category === "Production App");

  const renderProjectGrid = (projects: typeof allProjects) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {projects.map(project => (
        <Link key={project.slug} href={`/projects/${project.slug}`} className="group block h-full">
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
                {project.technologies.length > 4 && (
                  <Badge variant="mono">+{project.technologies.length - 4}</Badge>
                )}
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="pb-24">
      <Section className="pt-32 pb-16 border-b border-white/5 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.05),transparent_70%)]">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
          Engineering Case Studies
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl">
          Deep dives into the architecture, technical tradeoffs, and lessons learned from building production software and AI platforms.
        </p>
      </Section>

      <Section className="py-16">
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
            <span className="w-8 h-[1px] bg-cyanGlow" />
            Flagship Systems
          </h2>
          {renderProjectGrid(flagships)}
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
            <span className="w-8 h-[1px] bg-emeraldGlow" />
            Production Apps
          </h2>
          {renderProjectGrid(productionApps)}
        </div>
      </Section>
    </div>
  );
}
