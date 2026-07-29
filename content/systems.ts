import { ReusableSystem } from "@/types/system";

export const systems: ReusableSystem[] = [
  {
    slug: "flutter-chat-framework",
    title: "Flutter Chat Framework",
    category: "Framework",
    purpose: "An internal SDK/Framework for realtime messaging, abstracting Firebase/Socket.IO, state management, and offline storage.",
    architecture: "Layered architecture separating network transport (Firebase FCM / WebSockets) from local persistence (Hive) and UI state (Riverpod).",
    dependencies: ["Riverpod", "Hive", "Firebase Core"],
    relatedProjects: ["spark-love"],
    lessons: ["Abstracting the transport layer early makes it trivial to swap Firebase for WebSockets later."],
    lastUpdated: "2026-07-28",
  },
  {
    slug: "auth-layer",
    title: "Authentication Middleware Layer",
    category: "Authentication",
    purpose: "Standardized JWT handling with refresh token rotation and multi-level RBAC for FastAPI applications.",
    architecture: "FastAPI Dependency Injection used to parse JWTs, validate signatures, and attach user context to the request state before any route logic executes.",
    dependencies: ["FastAPI", "PyJWT", "Pydantic"],
    relatedProjects: ["ozrabas", "enterprise-hrms"],
    lessons: ["Enforcing RBAC at both the route middleware level and the service query level prevents catastrophic data leaks if a route is accidentally exposed."],
    lastUpdated: "2026-07-28",
  },
  {
    slug: "prompt-pipeline",
    title: "AI Prompt Orchestration Pipeline",
    category: "Library",
    purpose: "Manages multi-turn context, invokes OpenAI function calling, and strictly validates output schemas.",
    architecture: "Wraps the OpenAI client. Takes raw user input, structures it into an intermediate prompt, executes the LLM call with a defined JSON schema, and parses the result through Pydantic. Retries automatically on schema failure.",
    dependencies: ["OpenAI API", "Pydantic", "Python 3.10+"],
    relatedProjects: ["ozrabas", "ai-mobile-app"],
    lessons: ["LLM output is inherently non-deterministic. Strict runtime validation (Pydantic) is required before inserting any AI-generated data into a relational database."],
    lastUpdated: "2026-07-28",
  }
];
