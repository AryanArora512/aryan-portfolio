import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export function WhyHireMe() {
  const points = [
    {
      title: "Production Software Mindset",
      description: "I don't just build features; I optimize for release quality, edge cases, and maintainability. When I ship, I consider the on-call engineer.",
    },
    {
      title: "Cross-Functional Engineering",
      description: "I move comfortably between frontend, backend, mobile, and AI. I architect the whole system, not just an isolated component.",
    },
    {
      title: "AI Product Execution",
      description: "I translate raw LLM capabilities into stable, deterministic product outcomes using structured output and strict validation.",
    },
    {
      title: "Pragmatic Architecture",
      description: "I choose technologies based on team constraints and business goals, not hype. Sometimes Docker Compose on a VM is better than a Kubernetes cluster the client can't manage.",
    },
  ];

  return (
    <Section className="py-24 lg:py-32 bg-white/[0.01] border-y border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-3xl font-semibold text-white mb-6">Why you should hire me</h2>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
            I bring a product engineering mindset to technical teams. I care deeply about the user experience, but I know that a great UX requires a rock-solid, scalable backend architecture.
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            Download Full Resume
          </a>
        </div>
        
        <div className="grid gap-4">
          {points.map((point, idx) => (
            <Card key={idx} className="bg-slateNight border-white/10 hover:border-cyanGlow/50 transition-colors">
              <CardContent className="p-6 flex gap-4">
                <CheckCircle2 className="text-cyanGlow shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="text-white font-semibold mb-2">{point.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{point.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
