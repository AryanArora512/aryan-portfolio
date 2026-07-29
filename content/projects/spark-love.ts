import { Project } from "@/types/project";

export const sparkLove: Project = {
  slug: "spark-love",
  title: "Spark Love",
  confidenceLevel: "Client Work",
  category: "Flagship",
  businessProblem:
    "A niche dating platform required a complete rewrite of their legacy application. They needed a high-performance, real-time matching and messaging system that could scale to handle thousands of concurrent active users, along with an intuitive cross-platform mobile experience.",
  technicalProblem:
    "Real-time geo-spatial querying for proximity-based matching combined with high-throughput WebSocket messaging for chat requires significant database indexing and memory optimization to prevent read latency from stalling the main application loops.",
  architectureDiagramId: "dating-platform",
  technologies: ["Flutter", "Node.js", "MongoDB", "Socket.IO", "Redis", "Firebase", "GCP"],
  engineeringDecisions: [
    {
      decision: "Redis Geospatial Indexes for Proximity Matching",
      rationale: "Querying MongoDB for thousands of complex location queries per second caused severe CPU spikes. Offloading pure proximity queries to Redis `GEOSEARCH` reduced matching latency from 200ms to <10ms.",
      tradeoffs: ["Requires syncing location state between MongoDB (source of truth) and Redis (ephemeral query layer)."],
    },
    {
      decision: "Flutter for Mobile Client",
      rationale: "The client required identical feature parity across iOS and Android with complex swipe animations. Flutter's canvas-based rendering guaranteed 60fps animations regardless of the underlying OS UI toolkit.",
      tradeoffs: ["Slightly larger app bundle size compared to native Swift/Kotlin implementations."],
    },
    {
      decision: "Socket.IO with Redis Adapter for Messaging",
      rationale: "To handle horizontally scaled Node.js instances, WebSocket connections needed to share state. The Redis Adapter allows events emitted on Node instance A to reach a client connected to Node instance B.",
      tradeoffs: ["Redis becomes a central point of failure for real-time messaging."],
    }
  ],
  performance: "Optimized Flutter rendering pipeline achieves consistent 60fps during complex deck-swiping animations. Backend latency for match computation remains under 50ms at peak load.",
  security: "All API routes secured via stateless JWTs. Chat payloads are sanitized to prevent injection attacks.",
  scalability: "Stateless Node.js backend scales horizontally behind a GCP load balancer, utilizing Redis for pub/sub messaging synchronization.",
  screenshots: {
    hero: "/images/projects/spark-love/hero.png",
  },
  lessonsLearned: {
    wentWell: ["Flutter animations provided exactly the premium feel the client desired.", "Redis geo-indexing proved highly effective for scale."],
    wouldChange: ["Should have used PostgreSQL with PostGIS from the start instead of Mongo/Redis hybrid, reducing architectural complexity.", "More granular caching on user profiles."],
    techDebt: ["Some older MongoDB aggregation pipelines are overly complex.", "Notification delivery logic is tightly coupled to the chat service."],
    future: ["Migrate primary matching logic to a dedicated microservice.", "Implement end-to-end encryption for private chats."],
  },
  engineeringImpact: ["Delivered a production-ready application that replaced a failing legacy system.", "Implemented scalable real-time chat architecture."],
  lastUpdated: "2026-07-28",
};
