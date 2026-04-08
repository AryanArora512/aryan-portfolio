import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aryan Arora | Full Stack Mobile App Developer",
  description:
    "Aryan Arora is a Full Stack Mobile App Developer and Flutter specialist building scalable mobile apps, full-stack systems, dashboards, APIs, and real-time products for startups and businesses.",
  metadataBase: new URL("https://aryan-arora-dev.vercel.app"),
  keywords: [
    "Aryan Arora",
    "Flutter developer",
    "Full stack mobile app developer",
    "Next.js developer",
    "FastAPI developer",
    "Freelance app developer India",
    "Realtime app developer",
    "Mobile app developer portfolio",
    "Flutter freelancer",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Aryan Arora | Full Stack Mobile App Developer",
    description:
      "Scalable mobile apps, real-time systems, dashboards, and high-performance full-stack products for startups and growing businesses.",
    siteName: "aryan-portfolio",
    type: "website",
    url: "https://aryan-arora-dev.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Arora | Full Stack Mobile App Developer",
    description:
      "Flutter specialist building scalable apps, real-time systems, and full-stack products for startups and businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} bg-slateNight text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
