"use client";

import {
  experiences,
  faqItems,
  flagshipProjects,
  siteUrl,
} from "./portfolio/content";
import { PortfolioShell } from "./portfolio/shell";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aryan Arora",
    url: siteUrl,
    jobTitle: "Software Engineer",
    email: "mailto:aroraaryan512@gmail.com",
    telephone: "+91 9928496590",
    sameAs: ["https://www.linkedin.com/in/aryan-arora-4615b21ab/"],
    knowsAbout: [
      "Software engineering",
      "Product engineering",
      "Full-stack development",
      "AI product development",
      "React",
      "FastAPI",
      "Realtime systems",
      "Mobile engineering",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Aryan Arora Engineering",
    url: siteUrl,
    areaServed: "Worldwide",
    description:
      "Software engineering services focused on product systems, full-stack builds, AI-enabled features, realtime platforms, and production-grade software delivery.",
    founder: "Aryan Arora",
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Flagship engineering projects",
    itemListElement: flagshipProjects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      description: project.summary,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Professional experience",
    itemListElement: experiences.map((experience, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${experience.company} - ${experience.title}`,
      description: experience.summary,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PortfolioShell />
    </>
  );
}
