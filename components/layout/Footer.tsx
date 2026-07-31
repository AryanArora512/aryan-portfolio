"use client";

import * as React from "react";
import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030510] overflow-hidden pt-32 pb-8 border-t border-white/5">
      {/* Decorative gradient for CTA */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.1),transparent_70%)]" aria-hidden="true" />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Massive CTA Section */}
        <div className="flex flex-col items-center justify-center text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Let's build something <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">extraordinary.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mb-10"
          >
            Have a project in mind or just want to say hi? I'm always open to discussing new opportunities, architecture challenges, or mobile app ideas.
          </motion.p>
          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:aroraaryan512@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-white text-slate-950 px-8 py-4 text-base font-bold shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all"
          >
            Say Hello <ArrowUpRight size={20} />
          </motion.a>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 pt-16 border-t border-white/5">
          {/* Brand & Version */}
          <div className="md:col-span-1">
            <Link href="/" className="text-white font-display text-xl font-bold tracking-tight">
              A.
            </Link>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              Crafting premium mobile experiences, realtime systems, and robust enterprise software architectures.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-5">Engineering</h3>
            <ul className="space-y-4">
              <li><Link href="/projects" className="text-sm text-slate-400 hover:text-cyan-300 transition-colors">Projects</Link></li>
              <li><Link href="/systems" className="text-sm text-slate-400 hover:text-cyan-300 transition-colors">Systems</Link></li>
              <li><Link href="/architecture" className="text-sm text-slate-400 hover:text-cyan-300 transition-colors">Architecture</Link></li>
            </ul>
          </div>

          {/* Writing & About */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-5">Content</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-sm text-slate-400 hover:text-cyan-300 transition-colors">About Me</Link></li>
              <li><Link href="/about" className="text-sm text-slate-400 hover:text-cyan-300 transition-colors">Resume</Link></li>
              <li><Link href="/writing" className="text-sm text-slate-400 hover:text-cyan-300 transition-colors">Articles</Link></li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-5">Connect</h3>
            <ul className="space-y-4">
              <li>
                <a href="https://github.com/AryanArora512" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/aryan-arora512" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-mono">
            &copy; {currentYear} Aryan Arora.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500 font-mono">
            <span>Built with Next.js & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
