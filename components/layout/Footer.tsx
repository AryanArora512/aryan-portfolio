import * as React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-slateNight pt-16 pb-8">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand & Version */}
          <div className="md:col-span-1">
            <Link href="/" className="text-white font-display text-xl font-semibold tracking-tight">
              Aryan Arora.
            </Link>
            <p className="mt-4 text-sm text-slate-400">
              Building AI platforms, realtime systems, enterprise software, and cross-platform mobile applications.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              v2.0 — Updated July 2026
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Engineering</h3>
            <ul className="space-y-3">
              <li><Link href="/projects" className="text-sm text-slate-400 hover:text-cyanGlow transition-colors">Flagship Projects</Link></li>
              <li><Link href="/systems" className="text-sm text-slate-400 hover:text-cyanGlow transition-colors">Reusable Systems</Link></li>
              <li><Link href="/architecture" className="text-sm text-slate-400 hover:text-cyanGlow transition-colors">Architecture Decisions</Link></li>
              <li><Link href="/now" className="text-sm text-slate-400 hover:text-cyanGlow transition-colors">Tech Radar</Link></li>
            </ul>
          </div>

          {/* Writing & About */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Content</h3>
            <ul className="space-y-3">
              <li><Link href="/writing" className="text-sm text-slate-400 hover:text-cyanGlow transition-colors">Technical Writing</Link></li>
              <li><Link href="/engineering/principles" className="text-sm text-slate-400 hover:text-cyanGlow transition-colors">Engineering Principles</Link></li>
              <li><Link href="/about" className="text-sm text-slate-400 hover:text-cyanGlow transition-colors">About & Experience</Link></li>
              <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-cyanGlow transition-colors">Resume (PDF)</a></li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:aroraaryan512@gmail.com" className="group flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                  <Mail size={16} className="text-slate-500 group-hover:text-cyanGlow transition-colors" />
                  Email
                </a>
              </li>
              <li>
                <a href="https://github.com/AryanArora512" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 group-hover:text-cyanGlow transition-colors"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/aryan-arora512" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 group-hover:text-cyanGlow transition-colors"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} Aryan Arora. Designed and built by me.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span>Built with Next.js & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
