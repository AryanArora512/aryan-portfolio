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
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-slateNight/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-white font-display text-lg font-semibold tracking-tight hover:text-cyanGlow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyanGlow rounded-md"
          >
            Aryan Arora.
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyanGlow",
                  pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href))
                    ? "bg-white/10 text-white"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyanGlow rounded-md px-2 py-1"
            >
              Resume
            </a>
            <Link
              href="/#contact"
              className="inline-flex h-9 items-center justify-center rounded-full bg-white px-4 text-sm font-medium text-slate-950 transition-colors hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyanGlow"
            >
              Get in touch
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
        <div className="md:hidden fixed inset-0 top-[64px] z-40 bg-slateNight/95 backdrop-blur-xl border-t border-white/5 h-[calc(100vh-64px)] overflow-y-auto">
          <nav className="flex flex-col p-4 gap-2">
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
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-4 rounded-xl text-lg font-medium text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
            >
              Resume
            </a>
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
