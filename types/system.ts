export interface ReusableSystem {
  slug: string;
  title: string;
  category: "SDK" | "Framework" | "Authentication" | "Infrastructure" | "Library";
  purpose: string;
  architecture: string;
  apiDesign?: string;
  dependencies: string[];
  relatedProjects: string[]; // Project slugs
  lessons: string[];
  lastUpdated: string;
  github?: string;
}
