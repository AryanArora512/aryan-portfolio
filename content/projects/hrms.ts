import { Project } from "@/types/project";

export const hrms: Project = {
  slug: "enterprise-hrms",
  title: "Enterprise HRMS",
  confidenceLevel: "Production",
  category: "Flagship",
  businessProblem:
    "The client was managing 200+ employee records across Excel sheets and a legacy system with no mobile access. Payroll calculations were manual and error-prone. The replacement needed strict data access controls across multiple departments.",
  technicalProblem:
    "Payroll calculation correctness at edge cases: mid-month joins, multiple pay rates for the same employee, retroactive leave adjustments affecting already-processed payroll periods.",
  architectureDiagramId: "fullstack",
  technologies: ["React", "FastAPI", "Flutter", "PostgreSQL", "Docker", "Python", "SQLAlchemy", "JWT"],
  engineeringDecisions: [
    {
      decision: "Flutter for mobile over React Native",
      rationale: "The client required offline attendance marking — employees in low-connectivity facilities need to mark attendance without a network connection. Flutter's local database support (Hive) and its ability to run full application logic offline was the deciding factor.",
      tradeoffs: ["Requires maintaining a separate dart codebase rather than sharing JS/TS with the web dashboard."],
    },
    {
      decision: "Docker Compose over Kubernetes for deployment",
      rationale: "The client's IT infrastructure did not support managed Kubernetes, and no one on the client team could operate K8s. Docker Compose on a single VM provided deployment predictability that the client team could understand.",
      tradeoffs: ["No horizontal scaling and single point of failure. Acceptable for the client's current 200-employee scale."],
    },
    {
      decision: "JWT with refresh rotation over session-based auth",
      rationale: "Session-based auth is simpler but the Flutter mobile client requires offline-capable auth state. JWT tokens can be validated locally against the public key without a network round-trip on every screen.",
      tradeoffs: ["Token revocation requires maintaining a blacklist or short expiry times."],
    },
    {
      decision: "RBAC at both middleware and query level",
      rationale: "A single point of RBAC enforcement (route middleware only) is a single point of failure. Defence-in-depth: role is verified at the FastAPI dependency, then re-validated in the service layer before the DB query.",
      tradeoffs: ["Slightly more verbose backend code for duplicate role checks."],
    }
  ],
  performance: "Backend easily handles payroll calculations for 200+ employees in seconds. Mobile app maintains 60fps on low-end Android devices.",
  security: "JWT access tokens expire in 15 minutes. Refresh tokens stored in secure storage. RBAC verified at both dependency injection and service layer.",
  scalability: "Docker Compose deployment on a single VM is sufficient for current scale. Data model is designed for extensibility.",
  screenshots: {
    hero: "/images/projects/enterprise-hrms/hero.png",
  },
  lessonsLearned: {
    wentWell: ["The explicit payroll calculation engine with rigorous edge-case testing ensured 100% accuracy at launch."],
    wouldChange: ["Offline sync conflict resolution strategy (last-write-wins) is simple but wrong for high-conflict scenarios. Would use a proper CRDT approach if rebuilding for scale."],
    techDebt: ["Simple last-write-wins sync logic."],
    future: ["Migrate to a managed container service at 1,000+ employees.", "Implement CRDTs for robust offline sync."],
  },
  engineeringImpact: ["Delivered a mission-critical enterprise system replacing manual processes.", "Ensured high data integrity and security for sensitive payroll data."],
  relatedSystems: ["auth-layer"],
  lastUpdated: "2026-07-28",
};
