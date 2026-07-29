import { Section } from "@/components/ui/section";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[70vh]">
      <Section className="text-center max-w-lg">
        <h1 className="font-display text-8xl font-semibold tracking-tight text-white/20 mb-6">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Route Not Found
        </h2>
        <p className="text-slate-400 mb-8">
          The requested engineering asset or case study does not exist, or has been moved during the recent architectural shift.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-100 mx-auto"
        >
          <ArrowLeft size={16} />
          Return to Home
        </Link>
      </Section>
    </div>
  );
}
