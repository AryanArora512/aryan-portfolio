import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Principles | Aryan Arora",
  description: "Core engineering principles, trade-offs, and philosophies that guide my software development process.",
};

const principles = [
  {
    title: "Correctness over convenience",
    description: "Features come and go, but data models are forever. Invest time in defining correct system boundaries, strict database schemas, and robust types early. It's cheaper to write code slowly than to fix a corrupted database in production.",
  },
  {
    title: "Explicit tradeoffs",
    description: "There are no perfect architectures, only justified tradeoffs. Documenting why a decision was made (e.g., choosing Docker Compose over Kubernetes for operational simplicity) is just as important as the code itself.",
  },
  {
    title: "Boring technology scales",
    description: "PostgreSQL, standard REST APIs, and simple Docker deployments solve 99% of business problems. Reserve 'innovative' tech only for domains where the innovation provides a direct, measurable product advantage (like using WebRTC for P2P transfers).",
  },
  {
    title: "Defence in depth",
    description: "Security is not a single checkpoint. Implement route-level authentication middleware, but re-validate authorization rules at the service layer and query level. Assume the outer layer will eventually fail.",
  },
  {
    title: "Design for the operator",
    description: "Software isn't just used; it has to be operated. When building systems, consider the on-call engineer, the client's IT team, and the debugging experience at 2 AM. Logs should be actionable, and infrastructure should match the team's operational maturity.",
  }
];

export default function EngineeringPrinciplesPage() {
  return (
    <div className="pb-24">
      <Section className="pt-32 pb-16 border-b border-white/5 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.05),transparent_70%)]">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
          Engineering Principles
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl">
          The mental models and philosophies that guide how I architect systems, write code, and make technical tradeoffs.
        </p>
      </Section>

      <Section className="py-16">
        <div className="grid gap-8 max-w-4xl mx-auto">
          {principles.map((principle, idx) => (
            <div key={idx} className="surface-panel p-8 rounded-2xl flex gap-6">
              <CheckCircle2 className="text-emerald-400 shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-display text-2xl font-semibold text-white mb-4">
                  {principle.title}
                </h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
