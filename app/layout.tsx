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
    "Premium portfolio of Aryan Arora, a Flutter specialist building scalable mobile apps, full-stack systems, and real-time products for ambitious businesses.",
  openGraph: {
    title: "Aryan Arora | Full Stack Mobile App Developer",
    description:
      "Scalable mobile apps, real-time systems, and high-performance full-stack products for growing businesses.",
    siteName: "aryan-portfolio",
    type: "website",
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
