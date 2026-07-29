import { Project } from "@/types/project";

export const rapidusShare: Project = {
  slug: "rapidus-share",
  title: "Rapidus Share",
  confidenceLevel: "Personal Product",
  category: "Flagship",
  businessProblem:
    "File transfer tools (WeTransfer, Google Drive) require accounts, impose size limits, and route all traffic through central servers — creating unnecessary cost and latency. The goal was a zero-account, link-based transfer system.",
  technicalProblem:
    "WebRTC ICE negotiation on symmetric NAT (common in mobile CGNAT networks) fails approximately 30% of the time in real-world conditions, making a pure P2P solution unreliable for a general audience.",
  architectureDiagramId: "realtime",
  technologies: ["WebRTC", "Socket.IO", "React", "Next.js", "FastAPI", "PostgreSQL", "Cloudflare R2", "Python"],
  engineeringDecisions: [
    {
      decision: "WebRTC DataChannel over WebSocket for data transfer",
      rationale: "WebSocket routes all bytes through the server (bandwidth cost scales with usage). WebRTC DataChannel after ICE establishes a direct peer-to-peer path — zero server bandwidth for successful connections.",
      tradeoffs: ["Requires complex signaling and ICE negotiation fallback logic."],
    },
    {
      decision: "Cloudflare R2 over AWS S3 for fallback storage",
      rationale: "R2 has zero egress fees. For a file transfer product where the fallback path can move gigabytes per session, egress cost is a direct unit economics concern.",
      tradeoffs: ["Slightly higher latency than S3 in certain edge regions, but unit economics win out."],
    },
    {
      decision: "Socket.IO over raw WebSocket for signaling",
      rationale: "Socket.IO provides automatic reconnection, room management, and event acknowledgements. For a signaling server where a dropped ICE message means a failed connection, reliability outweighs the minimal overhead difference.",
      tradeoffs: ["Heavier client bundle and slight abstraction over raw WebSocket frames."],
    },
    {
      decision: "OPFS (Origin Private File System) for chunk buffering",
      rationale: "Writing incoming DataChannel chunks to memory causes browser OOM crashes on files above ~200MB. OPFS writes directly to disk, allowing reliable transfer of 500MB+ files without memory pressure.",
      tradeoffs: ["Requires newer browser APIs and strict secure contexts (HTTPS)."],
    }
  ],
  performance: "Achieves near gigabit local transfer speeds over LAN via direct P2P. Cloud fallback sustains 50-80Mbps depending on client network.",
  security: "Optional session passwords stored as bcrypt hashes. Presigned R2 URLs expire after 15 minutes. Session codes verified server-side.",
  scalability: "Socket.IO signaling is currently stateful. Horizontal scaling requires Redis Pub/Sub integration.",
  screenshots: {
    hero: "/images/projects/rapidus-share/hero.png",
  },
  lessonsLearned: {
    wentWell: ["OPFS implementation completely resolved previous OOM crashes on large files.", "R2 integration proved exactly as cost-effective as modeled."],
    wouldChange: ["Would use UUIDs instead of 6-digit session codes if anticipating massive concurrent global usage to avoid collisions.", "Add Redis Pub/Sub from day one for the signaling server."],
    techDebt: ["Stateful Socket.IO rooms.", "ICE timeout detection is largely a heuristic based on browser event timings."],
    future: ["Implement multi-file zip streaming.", "Add WebTorrent protocol support as an alternative fallback."],
  },
  engineeringImpact: ["Built a robust, zero-cost (bandwidth) direct transfer engine.", "Deep dive into WebRTC internals and NAT traversal."],
  relatedSystems: ["realtime-signaling-server"],
  lastUpdated: "2026-07-28",
};
