import { Project } from "@/types/project";

export const aiMobileApp: Project = {
  slug: "ai-mobile-app",
  title: "AI Itinerary Generator",
  confidenceLevel: "Experimental",
  category: "Production App",
  businessProblem:
    "Planning travel itineraries manually is time-consuming and often generic. The goal was to leverage Large Language Models (LLMs) to generate highly personalized, hour-by-hour travel itineraries based on complex user preferences, budget, and real-world geographical constraints.",
  technicalProblem:
    "LLMs inherently generate non-deterministic, unstructured text. Translating this raw output into a strictly typed, UI-renderable itinerary model on a mobile client without the app crashing due to malformed JSON required building a robust parsing and validation pipeline.",
  architectureDiagramId: "ai-pipeline",
  technologies: ["Flutter", "FastAPI", "OpenAI API", "Pydantic", "PostgreSQL"],
  engineeringDecisions: [
    {
      decision: "OpenAI Function Calling (Tools) over Raw Prompting",
      rationale: "Prompting an LLM to 'output JSON' often results in markdown wrappers or hallucinated keys that crash the Flutter client. Using OpenAI's native Tools API forces the model to adhere strictly to a predefined schema.",
      tradeoffs: ["Function calling schemas consume more context tokens, slightly increasing API costs."],
    },
    {
      decision: "FastAPI Backend Intermediary",
      rationale: "Calling the OpenAI API directly from the Flutter client exposes the API key and forces the client to handle parsing errors. A FastAPI backend acts as a secure proxy, parsing the OpenAI response into strict Pydantic models before returning sanitized JSON to the mobile app.",
      tradeoffs: ["Requires maintaining and hosting a separate backend service instead of a purely serverless client-side architecture."],
    },
    {
      decision: "Flutter for the Mobile Client",
      rationale: "To reach both iOS and Android users quickly with a highly customized UI (draggable timeline events, interactive maps), Flutter's unified codebase drastically reduced time-to-market.",
      tradeoffs: ["Native map integration in Flutter (Google Maps) requires careful state management to prevent memory leaks across screens."],
    }
  ],
  performance: "End-to-end itinerary generation takes ~8 seconds (bottlenecked by OpenAI API). The Flutter client uses optimistic UI loading states to mask this latency.",
  security: "OpenAI API keys are securely stored in backend environment variables. The API is protected by rate-limiting middleware to prevent abuse.",
  scalability: "FastAPI's asynchronous handlers allow a single worker to manage hundreds of concurrent, long-running OpenAI requests without blocking the event loop.",
  screenshots: {
    hero: "/images/projects/ai-mobile-app/hero.png",
  },
  lessonsLearned: {
    wentWell: ["The FastAPI/Pydantic combination successfully caught 100% of malformed LLM outputs before they ever reached the mobile client.", "Flutter's state management easily handled the complex nested state of a multi-day itinerary."],
    wouldChange: ["Implement streaming responses (Server-Sent Events) so the user sees the itinerary being typed out, drastically improving perceived latency."],
    techDebt: ["Location geocoding is currently performed synchronously during the generation pipeline, increasing total wait time."],
    future: ["Integrate real-time flight and hotel pricing APIs.", "Allow users to collaboratively edit the itinerary in real-time."],
  },
  engineeringImpact: ["Successfully bridged the gap between non-deterministic AI generation and deterministic mobile UI rendering.", "Established a reusable Python pipeline for structured AI outputs."],
  lastUpdated: "2026-07-28",
};
