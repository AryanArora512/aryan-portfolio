import { Metadata } from "next";
import { techRadar, currentFocus } from "@/content/now";
import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Now | Aryan Arora",
  description: "What I'm currently building, learning, and exploring.",
};

export default function NowPage() {
  return (
    <div className="pb-24">
      <Section className="pt-32 pb-16 border-b border-white/5 bg-[radial-gradient(ellipse_at_top,rgba(52,211,153,0.05),transparent_70%)]">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
          What I&apos;m doing now
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl">
          A snapshot of my current focus, the technologies I use in production, and the systems I&apos;m exploring. Updated July 2026.
        </p>
      </Section>

      <Section className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-cyanGlow" />
              Current Focus
            </h2>
            <Card className="bg-slateNight">
              <CardContent className="p-8">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Building</h3>
                <ul className="space-y-3 mb-8">
                  {currentFocus.building.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-slate-300">
                      <span className="text-cyanGlow shrink-0">→</span> {item}
                    </li>
                  ))}
                </ul>
                
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Learning</h3>
                <ul className="space-y-3">
                  {currentFocus.learning.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-slate-300">
                      <span className="text-emeraldGlow shrink-0">→</span> {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-emeraldGlow" />
              Tech Radar
            </h2>
            <Card className="bg-slateNight h-full">
              <CardContent className="p-8 space-y-8">
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Using in Production</h3>
                  <div className="flex flex-wrap gap-2">
                    {techRadar.usingInProduction.map(tech => <Badge key={tech} variant="default">{tech}</Badge>)}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Deepening Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {techRadar.learning.map(tech => <Badge key={tech} variant="outline" className="text-cyanGlow border-cyanGlow/30 bg-cyanGlow/5">{tech}</Badge>)}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Actively Exploring</h3>
                  <div className="flex flex-wrap gap-2">
                    {techRadar.exploring.map(tech => <Badge key={tech} variant="outline" className="text-emeraldGlow border-emeraldGlow/30 bg-emeraldGlow/5">{tech}</Badge>)}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}
