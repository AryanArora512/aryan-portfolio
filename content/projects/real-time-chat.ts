import { Project } from "@/types/project";

export const realTimeChat: Project = {
  slug: "real-time-chat",
  title: "Real-Time Chat Component",
  confidenceLevel: "Production",
  category: "Production App",
  businessProblem:
    "Many applications require a reliable, low-latency messaging system with media support and instant notifications.",
  technicalProblem:
    "Implementing dual communication protocols (Firebase Realtime Database/Firestore and WebSocket) for low-latency messaging, along with secure media handling and FCM notifications.",
  architectureDiagramId: "chat-architecture",
  technologies: ["Flutter", "Dart", "Firebase Realtime Database", "Firestore", "WebSocket", "Firebase Storage", "FCM"],
  engineeringDecisions: [
    {
      decision: "Dual Communication Protocols",
      rationale: "Used both Firebase and WebSockets to ensure low-latency, reliable messaging with robust fallbacks.",
      tradeoffs: ["Increased complexity in managing connection states and message syncing."]
    }
  ],
  performance: "Optimized message pagination and caching to handle large chat histories smoothly.",
  security: "Enabled secure image, file, and audio sharing with Firebase Storage and strict security rules.",
  scalability: "Leveraged Firebase Cloud Messaging (FCM) for instant message delivery and scalable notifications.",
  screenshots: {
    hero: "/images/projects/chat/hero.png",
  },
  lessonsLearned: {
    wentWell: ["The dual protocol approach ensured high reliability even in poor network conditions."],
    wouldChange: ["Abstract the backend integration further to allow swapping Firebase for other BaaS providers easily."],
    techDebt: ["Local caching mechanism needs improvement for better offline support."],
    future: ["Implement end-to-end encryption for enhanced privacy."],
  },
  engineeringImpact: ["Provided a robust, reusable chat solution that significantly reduced time-to-market for messaging features."],
  lastUpdated: "2026-07-31",
};
