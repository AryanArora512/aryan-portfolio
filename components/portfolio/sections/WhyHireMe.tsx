import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

import { motion } from "framer-motion";

export function WhyHireMe() {
  const points = [
    {
      title: "Flutter & Cross-Platform Mastery",
      description: "I build high-performance mobile applications that feel native on both iOS and Android. I focus on custom libraries, optimized state management, and pixel-perfect UIs.",
    },
    {
      title: "End-to-End Product Execution",
      description: "I don't just write code; I architect the whole system. From seamless REST API integrations to backend database structures, I ensure the entire stack is rock-solid.",
    },
    {
      title: "Performance & Reliability First",
      description: "I prioritize release quality, memory leak prevention, and smooth 60fps animations. When I ship, I consider edge cases, offline handling, and the ultimate user experience.",
    },
    {
      title: "Pragmatic Engineering",
      description: "I choose technologies based on team constraints and business goals, not hype. I write maintainable, well-documented code that scales with the product.",
    },
  ];

  return (
    <Section className="py-24 lg:py-32 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.05),transparent_50%)]" aria-hidden="true" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-4xl font-semibold text-white mb-6 leading-tight">
            Why you should <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">hire me</span>
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl">
            I bring a product engineering mindset to mobile development. I care deeply about the user experience, but I know that a great UX requires a rock-solid, scalable architecture beneath the surface.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-white to-slate-200 px-8 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:scale-105 hover:shadow-lg hover:shadow-white/10"
          >
            View Full Journey
          </Link>
        </motion.div>
        
        <div className="grid gap-4">
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="surface-panel p-6 rounded-2xl transition-all duration-300 group cursor-default"
            >
              <div className="flex gap-4">
                <div className="mt-1 h-6 w-6 shrink-0 rounded-full bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                  <CheckCircle2 className="text-cyan-400" size={14} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-300 transition-colors">{point.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{point.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
