export interface Project {
  slug: string;
  title: string;
  confidenceLevel: "Production" | "Client Work" | "Personal Product" | "Experimental" | "Open Source";
  category: "Flagship" | "Production App";
  businessProblem: string;
  technicalProblem: string;
  architectureDiagramId?: string;
  technologies: string[];
  engineeringDecisions: { decision: string; rationale: string; tradeoffs: string[] }[];
  performance?: string;
  security?: string;
  scalability?: string;
  screenshots: {
    hero?: string;
    desktop?: string;
    mobile?: string;
    admin?: string;
    flow?: string;
  };
  lessonsLearned: {
    wentWell: string[];
    wouldChange: string[];
    techDebt: string[];
    future: string[];
  };
  engineeringImpact: string[];
  relatedSystems?: string[];
  lastUpdated: string;
  github?: string;
  demo?: string;
}
