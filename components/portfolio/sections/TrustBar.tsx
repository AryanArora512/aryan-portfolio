import { proofMetrics } from "../content";

// Server Component — no client hooks needed
export function TrustBar() {
  return (
    <section aria-label="Proof metrics" className="border-y border-white/6 bg-white/[0.015]">
      <div className="section-shell py-10">
        <dl className="grid grid-cols-2 gap-px sm:grid-cols-3 lg:grid-cols-6">
          {proofMetrics.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col gap-1 px-4 py-5 first:pl-0 last:pr-0"
            >
              <dt className="font-display text-2xl font-semibold tracking-tight text-white">
                {metric.value}
              </dt>
              <dd className="text-xs leading-5 text-slate-400">{metric.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
