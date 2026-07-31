"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Architecture", href: "/architecture" },
  { label: "Systems", href: "/systems" },
  { label: "Writing", href: "/writing" },
  { label: "Now", href: "/now" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 bg-transparent"
      )}
    >
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 relative z-50">
        <div className={cn(
          "flex items-center justify-between h-14 lg:h-16 px-6 rounded-full transition-all duration-500",
          scrolled 
            ? "bg-[#0b1021]/90 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]" 
            : "bg-[#0f152e]/50 backdrop-blur-md border border-white/5"
        )}>
          {/* Logo */}
          <Link
            href="/"
            className="text-white font-display text-xl font-bold tracking-tight hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md"
          >
            A.
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400",
                  pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href))
                    ? "text-cyan-300 bg-white/5"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/about"
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md"
            >
              Resume
            </Link>
            <div className="w-px h-4 bg-white/20"></div>
            <Link
              href="/#contact"
              className="inline-flex h-9 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:shadow-cyan-500/40 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyanGlow rounded-md"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#030510]/95 backdrop-blur-2xl overflow-y-auto pt-24 pb-8">
          <nav className="flex flex-col px-6 gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-4 rounded-xl text-lg font-medium transition-colors",
                  pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href))
                    ? "bg-white/10 text-white"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-white/10 my-4" />
            <Link
              href="/about"
              className="px-4 py-4 rounded-xl text-lg font-medium text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
            >
              Resume
            </Link>
            <Link
              href="/#contact"
              className="mt-4 inline-flex h-12 items-center justify-center rounded-xl bg-white px-4 text-base font-medium text-slate-950 transition-colors hover:bg-slate-200"
            >
              Get in touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
