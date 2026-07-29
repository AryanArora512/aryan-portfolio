import { Metadata } from "next";
import { systems } from "@/content/systems";
import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Reusable Systems & Engineering Assets | Aryan Arora",
  description: "Internal SDKs, frameworks, and authentication layers built to accelerate product development.",
};

export default function SystemsPage() {
  return (
    <div className="pb-24">
      <Section className="pt-32 pb-16 border-b border-white/5 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.05),transparent_70%)]">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
          Reusable Systems
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl">
          Engineering assets, internal SDKs, and architectural patterns abstracted from production applications to accelerate future builds.
        </p>
      </Section>

      <Section className="py-16">
        <div className="space-y-12">
          {systems.map((sys) => (
            <Card key={sys.slug} className="bg-slateNight border-white/10 p-0 overflow-hidden">
              <div className="p-8 lg:p-10">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <Badge variant="secondary">{sys.category}</Badge>
                  <span className="text-sm font-mono text-slate-500">Last updated: {sys.lastUpdated}</span>
                </div>
                
                <h2 className="font-display text-2xl font-semibold text-white mb-4">{sys.title}</h2>
                <p className="text-slate-300 mb-8 max-w-3xl leading-relaxed">{sys.purpose}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8 border-t border-white/5">
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Architecture</h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-6">{sys.architecture}</p>
                    
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Dependencies</h3>
                    <div className="flex flex-wrap gap-2">
                      {sys.dependencies.map(dep => <Badge key={dep} variant="mono">{dep}</Badge>)}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-3">Lessons & Outcomes</h3>
                    <ul className="list-disc list-inside text-sm text-slate-400 space-y-2 mb-6">
                      {sys.lessons.map((lesson, idx) => <li key={idx}>{lesson}</li>)}
                    </ul>
                    
                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Used In</h3>
                    <div className="flex flex-wrap gap-2">
                      {sys.relatedProjects.map(proj => <Badge key={proj} variant="outline">{proj}</Badge>)}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
