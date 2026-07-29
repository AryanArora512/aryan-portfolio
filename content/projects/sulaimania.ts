import { Project } from "@/types/project";

export const sulaimania: Project = {
  slug: "sulaimania",
  title: "Sulaimania",
  confidenceLevel: "Client Work",
  category: "Flagship",
  businessProblem:
    "An enterprise client needed a complete digital transformation of their archaic inventory and sales tracking systems. The previous workflow relied entirely on fragmented Excel sheets and manual data entry, leading to high error rates and zero real-time visibility into stock levels.",
  technicalProblem:
    "Building a unified enterprise resource planning (ERP) dashboard that could handle complex hierarchical data models (categories, sub-categories, variants), provide real-time updates across multiple terminals, and export complex reporting data while remaining highly secure.",
  architectureDiagramId: "enterprise-dashboard",
  technologies: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "TailwindCSS"],
  engineeringDecisions: [
    {
      decision: "Prisma ORM with PostgreSQL",
      rationale: "Enterprise inventory data is inherently relational (e.g., Products -> Variants -> Stock Movements). Prisma provided strict type safety end-to-end, catching schema mismatches at compile time rather than runtime.",
      tradeoffs: ["Prisma's heavy client bundle size, though acceptable for a Node.js backend."],
    },
    {
      decision: "Role-Based Access Control (RBAC) via Middleware",
      rationale: "Different employees needed granular access (e.g., Cashiers can only create sales, Managers can edit stock). An Express middleware layer intercepted all routes to validate JWTs and role permissions before hitting the controllers.",
      tradeoffs: ["Slightly increased latency per request due to permission validation checks."],
    },
    {
      decision: "React Single Page Application (SPA)",
      rationale: "The dashboard required complex state management (like multi-step checkout flows and dynamic reporting filters) that heavily benefited from a pure SPA architecture over server-rendered pages.",
      tradeoffs: ["Slower initial load time, which is acceptable for internal employee tools where subsequent interactions are instant."],
    }
  ],
  performance: "Dashboard load times under 2 seconds. API endpoints for standard CRUD operations respond in <50ms.",
  security: "Enforced strict JWT expiration, CSRF protection, and bcrypt password hashing. All database interactions are parameterized via Prisma to prevent SQL injection.",
  scalability: "Database normalized to 3NF to prevent update anomalies. Express servers deployed in a containerized environment to scale horizontally during peak business hours.",
  screenshots: {
    hero: "/images/projects/sulaimania/hero.png",
  },
  lessonsLearned: {
    wentWell: ["Prisma's migrations made iterative schema updates during the prototyping phase incredibly smooth.", "React context proved sufficient for global state, avoiding the need for heavy Redux boilerplate."],
    wouldChange: ["Implement Redis caching for the most commonly accessed reporting endpoints, which currently run expensive SQL aggregations on every load."],
    techDebt: ["Some complex SQL reporting queries are written using raw queries because Prisma's ORM syntax became too verbose."],
    future: ["Integrate automated barcode scanning via mobile clients.", "Implement webhook integrations for third-party logistics (3PL) providers."],
  },
  engineeringImpact: ["Digitized end-to-end inventory tracking, eliminating manual entry errors.", "Provided management with real-time business intelligence dashboards."],
  lastUpdated: "2026-07-28",
};
