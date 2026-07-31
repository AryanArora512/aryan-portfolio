import { Project } from "@/types/project";

export const uncleLau: Project = {
  slug: "unclelau",
  title: "UncleLau Service Platform",
  confidenceLevel: "Client Work",
  category: "Flagship",
  businessProblem:
    "A service company needed a comprehensive suite of applications (Customer, Technician, and Partner) to manage bookings, track services, and handle operations.",
  technicalProblem:
    "Building three interconnected applications with real-time syncing, GPS navigation, and live chat, while maintaining a unified backend architecture.",
  architectureDiagramId: "unclelau-architecture",
  technologies: ["Flutter", "Dart", "Firebase", "Google Maps SDK", "WebSocket"],
  engineeringDecisions: [
    {
      decision: "Three Distinct Applications",
      rationale: "Separated Customer, Technician, and Partner apps to provide tailored features and reduce bloat in a single monolithic app.",
      tradeoffs: ["Increases development overhead and requires synchronized release cycles."]
    },
    {
      decision: "Integrated GPS and Live Chat",
      rationale: "Essential for technician tracking and seamless customer-technician communication, improving service reliability.",
      tradeoffs: ["Battery drain concerns for the technician app requiring optimized background location tracking."]
    }
  ],
  performance: "Optimized map rendering and efficient socket connections ensure real-time status updates without significant battery drain.",
  security: "Implemented role-based access control to ensure data isolation between customers, technicians, and partners.",
  scalability: "Backend architecture designed to handle a high volume of concurrent real-time tracking requests.",
  screenshots: {
    hero: "/images/projects/unclelau/hero.png",
  },
  lessonsLearned: {
    wentWell: ["Separating the apps allowed for specialized user experiences and faster iterations for specific user roles."],
    wouldChange: ["Implement a unified shared package for common UI components and models to reduce code duplication."],
    techDebt: ["Some shared business logic is currently duplicated across the three codebases."],
    future: ["Introduce AI-based scheduling and route optimization for technicians."],
  },
  engineeringImpact: ["Delivered a complete digital ecosystem that streamlined service operations and improved customer satisfaction."],
  lastUpdated: "2026-07-31",
};
