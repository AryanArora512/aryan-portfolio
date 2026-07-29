import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aryan Arora | Software Engineer",
  description:
    "Aryan Arora is a software engineer building full-stack products, AI-enabled experiences, real-time systems, and production-grade software for startups and businesses.",
  metadataBase: new URL("https://aryan-arora-dev.vercel.app"),
  keywords: [
    "Aryan Arora",
    "Software Engineer",
    "Full Stack Engineer",
    "Product Engineer",
    "AI Engineer",
    "Next.js developer",
    "FastAPI developer",
    "React engineer",
    "Realtime systems engineer",
    "Engineering portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Aryan Arora | Software Engineer",
    description:
      "Full-stack products, AI-enabled experiences, realtime systems, and production-grade software shaped with product and engineering rigor.",
    siteName: "aryan-portfolio",
    type: "website",
    url: "https://aryan-arora-dev.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Arora | Software Engineer",
    description:
      "Software engineer building full-stack products, AI workflows, realtime systems, and production-ready user experiences.",
  },
  icons: {
    icon: "/icon",
    apple: "/apple-icon",
  },
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slateNight text-white antialiased flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aryan Arora",
              url: "https://aryan-arora-dev.vercel.app",
              jobTitle: "Software Engineer",
              sameAs: [
                "https://github.com/AryanArora512",
                "https://www.linkedin.com/in/aryan-arora-09435b233/",
                "https://x.com/aryanarora512"
              ],
            }),
          }}
        />
        <Navbar />
        <main className="flex-1 mt-16 lg:mt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
