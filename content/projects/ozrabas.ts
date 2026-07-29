import { Project } from "@/types/project";

export const ozrabas: Project = {
  slug: "ozrabas",
  title: "OzRabas",
  confidenceLevel: "Client Work",
  category: "Flagship",
  businessProblem:
    "Luxury travel advisors spend 60–70% of their time on proposal writing and manual itinerary assembly. The platform automates this while producing branded, professional output that advisors can review and send to clients.",
  technicalProblem:
    "LLM output for travel itineraries is non-deterministic. Early prompts produced differently structured JSON on each call, breaking the downstream PDF rendering pipeline with schema mismatches.",
  architectureDiagramId: "ai-pipeline",
  technologies: ["React", "Next.js", "FastAPI", "PostgreSQL", "OpenAI", "Gemini", "Pydantic", "Docker", "Python"],
  engineeringDecisions: [
    {
      decision: "OpenAI function calling over prompt-based JSON extraction",
      rationale: "Prompt instructions like 'respond in JSON' are unreliable in production. Function calling with a defined schema forces the model to produce a structured response or return an error that can be caught and retried.",
      tradeoffs: ["Requires complex schema definition and limits compatibility with older or open-source models that lack robust function calling."],
    },
    {
      decision: "FastAPI over Django for the API backend",
      rationale: "Django's ORM and admin panel are powerful but add significant overhead for a pure JSON API serving concurrent LLM streaming responses. FastAPI's async-native design handles multiple simultaneous streaming requests without thread pool exhaustion.",
      tradeoffs: ["Required building a custom admin dashboard in React instead of using Django Admin."],
    },
    {
      decision: "JSONB fields in PostgreSQL for itinerary content",
      rationale: "Travel itinerary structures vary significantly per destination type, trip duration, and client preferences. JSONB allows schema evolution during development without running migrations on itinerary content, while keeping all business entities (bookings, clients, invoices) in normalised relational tables.",
      tradeoffs: ["Complex ad-hoc queries require GIN indexing and `->>'field'` syntax."],
    },
    {
      decision: "Three separate portal frontends over a single monolithic UI",
      rationale: "Customer, advisor, and admin UX requirements are fundamentally different — different navigation patterns, data access levels, and interaction densities. A single app with role-based UI switching would produce a more complex codebase.",
      tradeoffs: ["Increases maintenance surface area and requires shared UI component libraries to maintain visual consistency."],
    },
    {
      decision: "Server-side PDF generation over client-side (jsPDF)",
      rationale: "Browser-based PDF generation had inconsistent font rendering and inaccurate page breaks. Server-side generation produced pixel-accurate branded proposals.",
      tradeoffs: ["Adds rendering latency (~2–3 seconds per document) and server CPU overhead."],
    }
  ],
  performance: "Backend handles concurrent AI streams efficiently via async I/O. PDF rendering is queued to avoid blocking the main event loop.",
  security: "JWT with 15-minute access tokens and 7-day refresh token rotation. RBAC enforced at FastAPI dependency injection layer and re-validated inside the service layer.",
  scalability: "FastAPI nodes can be scaled horizontally. LLM API rate limits are the primary bottleneck, mitigated by request batching and aggressive caching of identical itineraries.",
  screenshots: {
    hero: "/images/projects/ozrabas/hero.png",
  },
  lessonsLearned: {
    wentWell: ["Structured output via function calling completely stabilized the AI pipeline.", "Separating the three portals prevented massive conditional UI logic."],
    wouldChange: ["Ship the PDF engine earlier. It was the hardest component and required significant iteration on font embedding and page breaks."],
    techDebt: ["Heavy reliance on OpenAI's specific function calling implementation makes switching to Anthropic or Gemini harder without an abstraction layer."],
    future: ["Implement a robust LLM provider abstraction layer.", "Add streaming PDF generation for faster TTFB on document requests."],
  },
  engineeringImpact: ["Built a robust, multi-portal architecture.", "Stabilized an AI pipeline for production use."],
  relatedSystems: ["prompt-pipeline", "auth-layer"],
  lastUpdated: "2026-07-28",
};
