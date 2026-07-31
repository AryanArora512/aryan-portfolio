import { Project } from "@/types/project";

export const expenseManagement: Project = {
  slug: "expense-management",
  title: "Expense Management App",
  confidenceLevel: "Production",
  category: "Production App",
  businessProblem:
    "Users needed a feature-rich expense management app to track and manage their finances efficiently across a global audience.",
  technicalProblem:
    "Implementing localization for multiple languages and ensuring seamless integration of language resources for various user interfaces.",
  architectureDiagramId: "expense-architecture",
  technologies: ["Flutter", "Dart", "Localization API"],
  engineeringDecisions: [
    {
      decision: "Comprehensive Localization Strategy",
      rationale: "To enhance the app's accessibility to a global audience, multiple languages were integrated natively.",
      tradeoffs: ["Requires ongoing maintenance of translation files for every new feature."]
    }
  ],
  performance: "Ensured seamless UI transitions when switching between different languages.",
  security: "Secured user financial data locally and during any synchronization.",
  scalability: "Designed the localization system to easily accommodate additional languages in the future.",
  screenshots: {
    hero: "/images/projects/expense/hero.png",
  },
  lessonsLearned: {
    wentWell: ["Localization significantly improved the user experience for non-English speakers."],
    wouldChange: ["Automate the translation pipeline to reduce manual updates."],
    techDebt: ["Some hardcoded strings remain in legacy components that need refactoring."],
    future: ["Implement multi-currency support alongside localization."],
  },
  engineeringImpact: ["Expanded the app's reach to a global audience and improved accessibility."],
  lastUpdated: "2026-07-31",
};
