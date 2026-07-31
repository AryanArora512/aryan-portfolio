import { Project } from "@/types/project";

export const loginComponent: Project = {
  slug: "login-component",
  title: "Versatile Login Component",
  confidenceLevel: "Open Source",
  category: "Production App",
  businessProblem:
    "Developers needed a versatile Flutter login component supporting both OTP and password-based authentication for easy reuse across projects.",
  technicalProblem:
    "Creating a modular design that securely integrates with various APIs while maintaining a consistent and customizable UI.",
  architectureDiagramId: "login-architecture",
  technologies: ["Flutter", "Dart", "Secure Storage", "REST APIs"],
  engineeringDecisions: [
    {
      decision: "Modular Component Design",
      rationale: "To allow the component to be easily dropped into any new or existing project with minimal configuration.",
      tradeoffs: ["Requires developers to strictly follow the provided API contract for the component."]
    }
  ],
  performance: "Optimized for quick rendering and seamless transitions between OTP and password screens.",
  security: "Implemented secure API integration and safe handling of authentication tokens.",
  scalability: "Can be extended to support biometric authentication and third-party OAuth providers.",
  screenshots: {
    hero: "/images/projects/login/hero.png",
  },
  lessonsLearned: {
    wentWell: ["The modular design significantly reduced development time for new projects."],
    wouldChange: ["Provide more out-of-the-box UI themes for quicker customization."],
    techDebt: ["Dependency on a specific state management solution limits broader adoption."],
    future: ["Add support for biometric authentication (FaceID/TouchID)."],
  },
  engineeringImpact: ["Standardized the authentication flow across multiple projects, improving security and reducing boilerplate code."],
  lastUpdated: "2026-07-31",
};
