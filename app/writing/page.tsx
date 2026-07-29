import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Writing | Aryan Arora",
  description: "Articles on architecture, AI pipelines, Flutter, and engineering lessons learned.",
};

const articles = [
  { slug: "lessons-webrtc-file-transfer", title: "Lessons from Building a WebRTC File Transfer System", date: "July 2026", category: "Architecture" },
  { slug: "designing-flutter-chat-framework", title: "Designing a Flutter Chat Framework", date: "May 2026", category: "Flutter" },
  { slug: "ai-pipeline-structured-outputs", title: "Building an AI Pipeline with Structured Outputs", date: "April 2026", category: "AI" },
  { slug: "authentication-patterns-i-reuse", title: "Authentication Patterns I Reuse", date: "February 2026", category: "Backend" },
];

export default function WritingPage() {
  return (
    <div className="pb-24">
      <Section className="pt-32 pb-16 border-b border-white/5 bg-[radial-gradient(ellipse_at_top,rgba(167,139,250,0.05),transparent_70%)]">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
          Engineering Writing
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mb-8">
          Thoughts on product engineering, system architecture, and lessons learned from shipping to production.
        </p>
      </Section>

      <Section className="py-16">
        <div className="grid grid-cols-1 gap-4">
          {articles.map((article) => (
            <Link key={article.slug} href={`/writing/${article.slug}`} className="group block">
              <Card className="bg-slateNight hover:bg-white/[0.02] transition-colors">
                <CardContent className="p-6 sm:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-slate-500">{article.date}</span>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">{article.category}</span>
                    </div>
                    <h2 className="text-lg font-semibold text-white group-hover:text-cyanGlow transition-colors">{article.title}</h2>
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
