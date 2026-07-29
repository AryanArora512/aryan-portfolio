import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Architecture Decision Records | Aryan Arora",
  description: "Detailed records of engineering decisions, tradeoffs, and rationale.",
};

const adrs = [
  { slug: "why-fastapi", title: "Why FastAPI over Django for AI Backends", date: "July 2026", status: "Accepted" },
  { slug: "webrtc-data-channels", title: "WebRTC DataChannel vs WebSockets for Large File Transfers", date: "June 2026", status: "Accepted" },
  { slug: "flutter-hive-local-first", title: "Hive vs SQLite for Local-First Flutter Apps", date: "April 2026", status: "Accepted" },
  { slug: "openai-structured-output", title: "Function Calling vs Prompt-Based JSON Extraction", date: "March 2026", status: "Accepted" },
];

export default function ArchitecturePage() {
  return (
    <div className="pb-24">
      <Section className="pt-32 pb-16 border-b border-white/5 bg-[radial-gradient(ellipse_at_top,rgba(244,114,182,0.05),transparent_70%)]">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
          Architecture Decision Records
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mb-8">
          A log of significant engineering decisions, detailing the problem, options considered, rationale, and accepted tradeoffs.
        </p>
      </Section>

      <Section className="py-16">
        <div className="grid grid-cols-1 gap-4">
          {adrs.map((adr) => (
            <Link key={adr.slug} href={`/architecture/${adr.slug}`} className="group block">
              <Card className="bg-slateNight hover:bg-white/[0.02] transition-colors">
                <CardContent className="p-6 sm:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-slate-500">{adr.date}</span>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400">{adr.status}</span>
                    </div>
                    <h2 className="text-lg font-semibold text-white group-hover:text-cyanGlow transition-colors">{adr.title}</h2>
                  </div>
                  <ArrowRight size={16} className="text-slate-500 group-hover:text-cyanGlow transition-colors group-hover:translate-x-1 shrink-0" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
