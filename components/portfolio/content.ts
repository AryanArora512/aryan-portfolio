// ─── Navigation ─────────────────────────────────────────────────────────────

export type NavItem = { label: string; href: string };

export const siteUrl = "https://aryan-arora-dev.vercel.app";

export const bookingUrl =
  process.env.NEXT_PUBLIC_BOOKING_URL ||
  "mailto:aroraaryan512@gmail.com?subject=Book%20a%2015-minute%20discovery%20call";

export const navItems: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "System Design", href: "#system-design" },
  { label: "Contact", href: "#contact" },
];

// ─── Trust Bar ───────────────────────────────────────────────────────────────

export type ProofMetric = { value: string; label: string };

export const proofMetrics: ProofMetric[] = [
  { value: "2+", label: "Years in production engineering" },
  { value: "3", label: "Flagship products shipped to real users" },
  { value: "10+", label: "Technologies in active production use" },
  { value: "2", label: "AI systems with LLM integration" },
  { value: "1", label: "Realtime P2P platform (WebRTC)" },
  { value: "∞", label: "Problems debugged at 2am" },
];

// ─── Skills ──────────────────────────────────────────────────────────────────

export type SkillCategory = { label: string; technologies: string[] };

export const skillCategories: SkillCategory[] = [
  {
    label: "Production Expert",
    technologies: [
      "Flutter",
      "Dart",
      "Python",
      "FastAPI",
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
    ],
  },
  {
    label: "Production Capable",
    technologies: [
      "WebRTC",
      "Socket.IO",
      "Docker",
      "Firebase",
      "OpenAI API",
      "Gemini API",
      "Cloudflare R2",
      "Tailwind CSS",
    ],
  },
  {
    label: "Currently Learning / Exploring",
    technologies: [
      "Rust",
      "Go",
      "Distributed Systems Architecture",
      "LLM Agents",
      "WebGPU",
    ],
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────

export type Experience = {
  id: string;
  company: string;
  period: string;
  title: string;
  type: "work" | "current";
  summary: string;
  bullets: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    id: "bluetris",
    company: "Bluetris Technologies",
    period: "April 2025 – Present",
    title: "Software Engineer",
    type: "current",
    summary:
      "Owning product and engineering across enterprise systems, AI-enabled mobile experiences, and client-facing software.",
    bullets: [
      "Architected and shipped the Enterprise HRMS end-to-end — React web dashboard, Flutter mobile app, FastAPI backend, PostgreSQL, and Docker deployment — now in active production use at a paying enterprise client.",
      "Owned API design across all three product surfaces: authentication middleware, RBAC enforcement, and data access patterns built with defence-in-depth (route-level + query-level permission checks).",
      "Built the AI mobile application's prompt orchestration layer — multi-turn context management, structured output validation via Pydantic, and graceful fallback handling for LLM edge cases.",
      "Led architectural decisions on database schema design (JSONB for flexible itinerary data, normalised relational tables for business entities) and deployment strategy (Docker Compose for client-operable infrastructure).",
    ],
    stack: ["React", "FastAPI", "Flutter", "PostgreSQL", "Docker", "Python", "OpenAI"],
  },
  {
    id: "deorwine",
    company: "Deorwine Infotech",
    period: "Dec 2023 – Apr 2025",
    title: "Software Engineer",
    type: "work",
    summary:
      "Built and maintained production mobile applications across multiple client projects with emphasis on integrations, performance, and release quality.",
    bullets: [
      "Shipped 4 Flutter applications to Google Play Store — integrated Firebase, REST APIs, Razorpay payment gateway, Google Maps SDK, and multi-language localisation.",
      "Reduced crash rate on the primary application by diagnosing and fixing memory leaks in StreamController subscriptions that were not cancelled on widget disposal.",
      "Implemented real-time chat and push notification features using Firebase Cloud Messaging and Firestore listeners across two production applications.",
      "Maintained release quality under delivery pressure by building reusable widget libraries and standardising state management patterns across the team.",
    ],
    stack: ["Flutter", "Firebase", "REST APIs", "Razorpay", "Google Maps", "Dart"],
  },
];

export type Education = {
  id: string;
  degree: string;
  institution: string;
  period: string;
};

export const education: Education[] = [
  {
    id: "mca",
    degree: "Master's of Computer Application (MCA)",
    institution: "University Of Rajasthan Management and Technical Campus, Kota",
    period: "Aug 2023 – Aug 2025",
  },
  {
    id: "bca",
    degree: "Bachelor of Computer Application (BCA)",
    institution: "University of Rajasthan, Jaipur",
    period: "Jul 2020 – Aug 2023",
  },
];

// ─── Architecture Diagrams ────────────────────────────────────────────────────

export type ArchNode = {
  id: string;
  label: string;
  sublabel: string;
  type: "client" | "server" | "db" | "service" | "cloud" | "ai";
  col: number; // 0-indexed column in grid
  row: number; // 0-indexed row in grid
};

export type ArchEdge = {
  from: string;
  to: string;
  label?: string;
};

export type ArchitectureDiagram = {
  id: string;
  title: string;
  description: string; // for SVG <desc> / screen readers
  nodes: ArchNode[];
  edges: ArchEdge[];
};

export const architectureDiagrams: ArchitectureDiagram[] = [
  {
    id: "fullstack",
    title: "Full-Stack Product Architecture",
    description:
      "Next.js client sends requests to FastAPI backend which authenticates via JWT, queries PostgreSQL, and is deployed via Docker Compose on the host server.",
    nodes: [
      { id: "nextjs", label: "Next.js", sublabel: "Server Components for SEO", type: "client", col: 0, row: 0 },
      { id: "react", label: "React SPA", sublabel: "Admin / advisor portals", type: "client", col: 0, row: 1 },
      { id: "fastapi", label: "FastAPI", sublabel: "Async, concurrent LLM streams", type: "server", col: 1, row: 0 },
      { id: "jwt", label: "JWT + RBAC", sublabel: "Route + query-level guards", type: "service", col: 1, row: 1 },
      { id: "postgres", label: "PostgreSQL", sublabel: "JSONB for flexible schemas", type: "db", col: 2, row: 0 },
      { id: "docker", label: "Docker Compose", sublabel: "Client-operable, no K8s", type: "cloud", col: 2, row: 1 },
    ],
    edges: [
      { from: "nextjs", to: "fastapi", label: "REST" },
      { from: "react", to: "fastapi", label: "REST" },
      { from: "fastapi", to: "jwt" },
      { from: "fastapi", to: "postgres" },
      { from: "docker", to: "fastapi", label: "hosts" },
      { from: "docker", to: "postgres", label: "hosts" },
    ],
  },
  {
    id: "realtime",
    title: "Realtime P2P Transfer (Rapidus Share)",
    description:
      "Browser peers connect via Socket.IO signaling. On ICE success they transfer directly via WebRTC DataChannel. On ICE failure after 8 seconds, the system falls back to Cloudflare R2 cloud storage with presigned URLs.",
    nodes: [
      { id: "sender", label: "Sender Browser", sublabel: "WebRTC + OPFS buffering", type: "client", col: 0, row: 0 },
      { id: "receiver", label: "Receiver Browser", sublabel: "Streams directly from peer", type: "client", col: 2, row: 0 },
      { id: "signaling", label: "Socket.IO Server", sublabel: "Signaling, rooms, reconnect", type: "server", col: 1, row: 0 },
      { id: "webrtc", label: "WebRTC DataChannel", sublabel: "Zero server bandwidth", type: "service", col: 1, row: 1 },
      { id: "r2", label: "Cloudflare R2", sublabel: "Zero egress fees; fallback", type: "cloud", col: 1, row: 2 },
    ],
    edges: [
      { from: "sender", to: "signaling", label: "ICE offer" },
      { from: "signaling", to: "receiver", label: "ICE answer" },
      { from: "sender", to: "webrtc", label: "P2P success" },
      { from: "webrtc", to: "receiver" },
      { from: "sender", to: "r2", label: "fallback (8s timeout)" },
      { from: "r2", to: "receiver", label: "presigned URL" },
    ],
  },
  {
    id: "ai-pipeline",
    title: "AI Prompt Pipeline (OzRabas Itinerary Engine)",
    description:
      "User input goes through a clarification step, then OpenAI function calling with a strict JSON schema, Pydantic validation, database storage, and server-side PDF rendering.",
    nodes: [
      { id: "input", label: "User Input", sublabel: "Destination, dates, preferences", type: "client", col: 0, row: 0 },
      { id: "clarify", label: "Clarification Step", sublabel: "Reduces hallucination rate", type: "service", col: 1, row: 0 },
      { id: "openai", label: "OpenAI Function Calling", sublabel: "Schema-enforced JSON output", type: "ai", col: 2, row: 0 },
      { id: "pydantic", label: "Pydantic Validation", sublabel: "Guards DB from malformed AI output", type: "server", col: 2, row: 1 },
      { id: "db", label: "PostgreSQL", sublabel: "JSONB itinerary storage", type: "db", col: 1, row: 1 },
      { id: "pdf", label: "PDF Engine", sublabel: "Server-side for pixel accuracy", type: "service", col: 0, row: 1 },
    ],
    edges: [
      { from: "input", to: "clarify" },
      { from: "clarify", to: "openai", label: "structured prompt" },
      { from: "openai", to: "pydantic", label: "JSON response" },
      { from: "pydantic", to: "db", label: "validated data" },
      { from: "db", to: "pdf", label: "itinerary record" },
    ],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export type TechDecision = { decision: string; rationale: string };

export type Project = {
  id: string;
  title: string;
  tagline: string;
  category: string;
  featured?: boolean;
  isPrivate?: boolean;
  githubUrl?: string;
  liveUrl?: string;

  // Legacy fields preserved for JSON-LD in portfolio-page.tsx
  summary: string;
  role: string;
  stack: string[];
  highlights: string[];
  architecture: string;
  impact: string;

  // Case study fields
  problem: string;
  technicalProblem: string;
  techDecisions: TechDecision[];
  biggestChallenge: string;
  tradeoffs: string[];
  security: string;
  lessonsLearned: string[];
  diagramId?: string; // links to architectureDiagrams[].id
};

export const flagshipProjects: Project[] = [
  {
    id: "rapidus-share",
    title: "Rapidus Share",
    tagline: "Browser-native P2P file transfer with WebRTC, Socket.IO, and Cloudflare R2 fallback.",
    category: "Realtime Systems · P2P Networking",
    featured: true,
    isPrivate: false,
    diagramId: "realtime",

    // Legacy (JSON-LD)
    summary:
      "A browser-based file transfer platform using WebRTC DataChannel for direct peer-to-peer transfers, with transparent Cloudflare R2 fallback when P2P negotiation fails.",
    role: "Sole engineer — architecture, protocol design, backend, frontend, deployment.",
    stack: ["WebRTC", "Socket.IO", "React", "Next.js", "FastAPI", "PostgreSQL", "Cloudflare R2", "Python"],
    highlights: [
      "ICE negotiation fallback with 8-second timeout detection for symmetric NAT environments.",
      "Cloudflare R2 over S3 — zero egress fees for the fallback transfer path.",
      "OPFS (Origin Private File System) for large-file buffering without browser OOM crashes.",
    ],
    architecture:
      "React frontend, Socket.IO signaling server, WebRTC DataChannel for P2P, Cloudflare R2 presigned URL fallback, FastAPI backend, PostgreSQL for session storage.",
    impact:
      "Demonstrates production-grade realtime engineering: protocol selection, failure mode handling, cost-aware infrastructure, and browser API depth.",

    // Case study
    problem:
      "File transfer tools (WeTransfer, Google Drive) require accounts, impose size limits, and route all traffic through central servers — creating unnecessary cost and latency. The goal was a zero-account, link-based transfer system.",
    technicalProblem:
      "WebRTC ICE negotiation on symmetric NAT (common in mobile CGNAT networks) fails approximately 30% of the time in real-world conditions, making a pure P2P solution unreliable for a general audience.",
    techDecisions: [
      {
        decision: "WebRTC DataChannel over WebSocket for data transfer",
        rationale:
          "WebSocket routes all bytes through the server (bandwidth cost scales with usage). WebRTC DataChannel after ICE establishes a direct peer-to-peer path — zero server bandwidth for successful connections. The cost difference at scale is the deciding factor.",
      },
      {
        decision: "Cloudflare R2 over AWS S3 for fallback storage",
        rationale:
          "R2 has zero egress fees. For a file transfer product where the fallback path can move gigabytes per session, egress cost is a direct unit economics concern. S3 charges $0.09/GB egress; R2 charges $0.",
      },
      {
        decision: "Socket.IO over raw WebSocket for signaling",
        rationale:
          "Socket.IO provides automatic reconnection, room management, and event acknowledgements. For a signaling server where a dropped ICE message means a failed connection, reliability outweighs the minimal overhead difference.",
      },
      {
        decision: "OPFS (Origin Private File System) for chunk buffering",
        rationale:
          "Writing incoming DataChannel chunks to memory causes browser OOM crashes on files above ~200MB. OPFS writes directly to disk, allowing reliable transfer of 500MB+ files without memory pressure.",
      },
      {
        decision: "Continuous P2P sharing & incremental updates",
        rationale: "Refactored local selection logic allows appending new files to an active P2P session without re-initialization. Backend persistence and signaling via the `/sessions/{code}/files` API allow peers to discover newly added files in real-time.",
      }
    ],
    biggestChallenge:
      "ICE timeout detection. The browser's ICE state machine transitions to `disconnected` before `failed`. Triggering fallback on `disconnected` produced false positives on momentary network hiccups. Triggering only on `failed` added 30 seconds of lag per failed session. Solution: a custom 8-second timer that starts on `disconnected` and initiates R2 fallback if the connection does not recover to `connected`.",
    tradeoffs: [
      "TURN relay fallback adds ~40ms latency over direct P2P — acceptable for reliability across all network conditions.",
      "6-digit session codes are convenient but cap concurrent sessions at ~1 million. Sufficient for current scale; would switch to UUIDs at production traffic.",
      "Socket.IO signaling server is stateful (in-memory room state). Does not scale horizontally without Redis Pub/Sub — documented as a known architectural gap.",
    ],
    security:
      "Optional session passwords stored as bcrypt hashes in PostgreSQL. Presigned R2 URLs expire after 15 minutes with no direct credential exposure. Session codes verified server-side before issuing any presigned URL. Automated background tasks prune expired sessions and orphaned R2 files.",
    lessonsLearned: [
      "ICE state machine behaviour differs between Chrome, Safari, and Firefox in ways the WebRTC spec does not fully document. Browser-specific ICE timeout testing required real devices on mobile networks — emulators were insufficient.",
      "Would add Redis Pub/Sub for signaling from day one if rebuilding. Horizontal scaling of stateful WebSocket servers without a message broker is a structural gap that becomes expensive to fix post-launch.",
    ],
  },
  {
    id: "ozrabas",
    title: "OzRabas",
    tagline: "AI-powered luxury travel platform with itinerary generation, CRM, and three-portal architecture.",
    category: "AI Product · B2B SaaS",
    featured: true,
    isPrivate: true,
    diagramId: "ai-pipeline",

    // Legacy (JSON-LD)
    summary:
      "A B2B travel platform for luxury travel agencies — AI itinerary generation, CRM, client portal, advisor portal, and admin operations in one integrated system.",
    role: "Product engineer across frontend, backend, AI orchestration, admin workflows, and PDF generation.",
    stack: ["React", "Next.js", "FastAPI", "PostgreSQL", "OpenAI", "Gemini", "Pydantic", "Docker", "Python"],
    highlights: [
      "Enforced structured LLM output via OpenAI function calling + Pydantic validation to eliminate non-deterministic JSON schema violations.",
      "JSONB fields in PostgreSQL for itinerary content — schema flexibility without breaking normalised business entities.",
      "Server-side PDF generation for pixel-accurate branded travel proposals.",
    ],
    architecture:
      "Three separate React portals (customer, advisor, admin) sharing one FastAPI backend. PostgreSQL with JSONB for itinerary data. OpenAI function calling for structured itinerary output. Server-side PDF rendering. Docker deployment.",
    impact:
      "Shows ability to connect AI capability to real product architecture: multi-portal design, RBAC, structured LLM output, and business-grade document generation.",

    // Case study
    problem:
      "Luxury travel advisors spend 60–70% of their time on proposal writing and manual itinerary assembly. The platform automates this while producing branded, professional output that advisors can review and send to clients.",
    technicalProblem:
      "LLM output for travel itineraries is non-deterministic. Early prompts produced differently structured JSON on each call, breaking the downstream PDF rendering pipeline with schema mismatches.",
    techDecisions: [
      {
        decision: "OpenAI function calling over prompt-based JSON extraction",
        rationale:
          "Prompt instructions like 'respond in JSON' are unreliable in production — the model sometimes adds prose before or after the JSON block. Function calling with a defined schema forces the model to produce a structured response or return an error that can be caught and retried. This is non-negotiable for any system where AI output feeds downstream logic.",
      },
      {
        decision: "FastAPI over Django for the API backend",
        rationale:
          "Django's ORM and admin panel are powerful but add significant overhead for a pure JSON API serving concurrent LLM streaming responses. FastAPI's async-native design handles multiple simultaneous streaming requests without thread pool exhaustion.",
      },
      {
        decision: "JSONB fields in PostgreSQL for itinerary content",
        rationale:
          "Travel itinerary structures vary significantly per destination type, trip duration, and client preferences. JSONB allows schema evolution during development without running migrations on itinerary content, while keeping all business entities (bookings, clients, invoices) in normalised relational tables.",
      },
      {
        decision: "Three separate portal frontends over a single monolithic UI",
        rationale:
          "Customer, advisor, and admin UX requirements are fundamentally different — different navigation patterns, data access levels, and interaction densities. A single app with role-based UI switching would produce a more complex codebase than three focused apps sharing one API.",
      },
      {
        decision: "Server-side PDF generation over client-side (jsPDF)",
        rationale:
          "Early prototype used browser-based PDF. Font rendering was inconsistent, page breaks were inaccurate, and embedded images had resolution issues. Moving to server-side generation produced pixel-accurate branded proposals but added server rendering overhead — acceptable tradeoff for output quality.",
      },
    ],
    biggestChallenge:
      "Prompt reliability at edge cases. The first 200 generated itineraries exposed cases where the model changed output structure for ambiguous destination inputs (e.g., 'Dubai' vs 'UAE' produced different nesting). Fixed by adding a multi-step prompting flow: clarification → outline → detail → validation, with each step's output validated by Pydantic before proceeding to the next.",
    tradeoffs: [
      "JSONB for itinerary data: flexible for iteration, but complex ad-hoc queries require GIN indexing and `->>'field'` syntax. The tradeoff favours development velocity over query simplicity.",
      "Three separate portal frontends increase maintenance surface area. Justified because the UX requirements are structurally different, not just permission-different.",
      "Server-side PDF adds rendering latency (~2–3 seconds per document). Acceptable for a batch output workflow; would be unacceptable for real-time preview.",
    ],
    security:
      "JWT with 15-minute access tokens and 7-day refresh token rotation. RBAC enforced at FastAPI dependency injection layer and re-validated inside the service layer before any database query executes. Admin-only endpoints verify `is_admin` flag independently of JWT claims.",
    lessonsLearned: [
      "Ship the PDF engine early. It was the last component built and turned out to be the hardest. Font embedding, page breaks, and image resolution require significant iteration. Never leave a hard rendering dependency for the final sprint.",
      "Structured output via function calling is non-negotiable for any AI system that feeds downstream logic. The schema enforcement investment pays back in production stability within the first week of real usage.",
    ],
  },
  {
    id: "enterprise-hrms",
    title: "Enterprise HRMS",
    tagline: "Production HRMS with payroll, attendance, leave, RBAC — deployed across web and mobile for a live enterprise client.",
    category: "Enterprise Software",
    isPrivate: true,
    diagramId: "fullstack",

    // Legacy (JSON-LD)
    summary:
      "A production HRMS covering employee management, attendance, payroll, leave workflows, and RBAC — deployed as React web dashboard, Flutter mobile app, FastAPI backend, and Docker infrastructure.",
    role: "Sole engineer — architecture, implementation, and deployment for a paying enterprise client at Bluetris Technologies.",
    stack: ["React", "FastAPI", "Flutter", "PostgreSQL", "Docker", "Python", "SQLAlchemy", "JWT"],
    highlights: [
      "RBAC enforced at both route middleware and query level — defence-in-depth against permission bypass.",
      "JWT with short-lived access tokens and refresh rotation enabling offline auth state on the Flutter mobile client.",
      "Docker Compose deployment chosen over Kubernetes for client-operable infrastructure without DevOps dependency.",
    ],
    architecture:
      "React web dashboard and Flutter mobile app sharing one FastAPI backend. PostgreSQL for all business data. Docker Compose for deployment. JWT for authentication with refresh token rotation.",
    impact:
      "Demonstrates enterprise-grade production engineering: RBAC design, payroll calculation accuracy, offline mobile support, and pragmatic infrastructure decisions under real client constraints.",

    // Case study
    problem:
      "The client was managing 200+ employee records across Excel sheets and a legacy system with no mobile access. Payroll calculations were manual and error-prone. The replacement needed strict data access controls across multiple departments.",
    technicalProblem:
      "Payroll calculation correctness at edge cases: mid-month joins, multiple pay rates for the same employee, retroactive leave adjustments affecting already-processed payroll periods.",
    techDecisions: [
      {
        decision: "Flutter for mobile over React Native",
        rationale:
          "The client required offline attendance marking — employees in low-connectivity facilities need to mark attendance without a network connection. Flutter's local database support (Hive) and its ability to run full application logic offline was the deciding factor. React Native's offline story requires more third-party dependencies.",
      },
      {
        decision: "Docker Compose over Kubernetes for deployment",
        rationale:
          "The client's IT infrastructure did not support managed Kubernetes, and no one on the client team could operate K8s. Docker Compose on a single VM provided deployment predictability that the client team could understand, restart, and troubleshoot without external DevOps support. A theoretically better K8s setup that the client cannot operate is worse infrastructure.",
      },
      {
        decision: "JWT with refresh rotation over session-based auth",
        rationale:
          "Session-based auth is simpler but the Flutter mobile client requires offline-capable auth state. JWT tokens can be validated locally against the public key without a network round-trip on every screen. Refresh rotation with a sliding 7-day expiry balances security and usability for field workers.",
      },
      {
        decision: "RBAC at both middleware and query level",
        rationale:
          "A single point of RBAC enforcement (route middleware only) is a single point of failure. If a route guard is bypassed by a routing bug or a new developer adding an unprotected endpoint, database queries would still succeed without checking permissions. Defence-in-depth: role is verified at the FastAPI dependency, then re-validated in the service layer before the DB query.",
      },
    ],
    biggestChallenge:
      "Payroll calculation accuracy at edge cases. Built an explicit calculation engine with test cases for every known edge case (mid-month join, multiple rates, retroactive leave) before touching production payroll data. Running the new engine in parallel with the old manual process for two pay periods before cutover.",
    tradeoffs: [
      "Single-VM Docker Compose: no horizontal scaling, single point of failure. Acceptable for the client's current 200-employee scale; would migrate to managed container service at 1,000+ employees.",
      "Offline sync on Flutter: when an employee marks attendance offline and online simultaneously, last-write-wins with a server timestamp. Simple but can produce conflicts during network reconnection in poor connectivity areas.",
    ],
    security:
      "JWT access tokens expire in 15 minutes. Refresh tokens stored in secure storage (Flutter Secure Storage / httpOnly cookies on web). RBAC verified at both dependency injection and service layer. All payroll endpoints require `role: admin` claim validation.",
    lessonsLearned: [
      "Enterprise clients change requirements mid-build at a higher rate than product companies. Design the data model for extensibility from day one — adding a column to `employees` is cheap; restructuring a payment table with 6 months of payroll history is expensive and risky.",
      "Offline sync is harder than it looks. The conflict resolution strategy (last-write-wins with server timestamp) was chosen for simplicity but is wrong for high-conflict scenarios. A proper CRDT or operational transform approach would be correct at scale.",
    ],
  },
];

// ─── Contact Form ─────────────────────────────────────────────────────────────

export type FormValues = {
  fullName: string;
  email: string;
  company: string;
  opportunityType: string;
  description: string;
  phone: string;
};

export type FormErrors = Partial<Record<keyof FormValues | "file", string>>;

export const opportunityTypes = [
  "Full-Time Role",
  "Freelance / Contract",
  "Collaboration",
  "Just saying hi",
];

export const initialFormValues: FormValues = {
  fullName: "",
  email: "",
  company: "",
  opportunityType: "Full-Time Role",
  description: "",
  phone: "",
};

// ─── FAQ (preserved for JSON-LD) ─────────────────────────────────────────────

export type FaqItem = { question: string; answer: string };

export const faqItems: FaqItem[] = [
  {
    question: "What roles is this portfolio optimized for?",
    answer:
      "Software Engineer, Full-Stack Engineer, Product Engineer, AI Engineer, and backend-heavy roles where system design, architectural ownership, and production shipping matter.",
  },
  {
    question: "Do you only do mobile development?",
    answer:
      "No. Mobile is one part of the profile. The core positioning is cross-functional product engineering across backend systems, web frontends, realtime infrastructure, and AI product features.",
  },
  {
    question: "Do you take freelance and product consulting work?",
    answer:
      "Yes — for serious product builds where engineering ownership, architecture quality, and production reliability matter. Not for small task-based work.",
  },
  {
    question: "What makes your engineering approach different?",
    answer:
      "I optimise for correctness, maintainability, and operational clarity — not just feature completion. I document architectural decisions, acknowledge tradeoffs explicitly, and design systems for the team and constraints that will operate them.",
  },
];

// ─── Legacy exports (preserved for portfolio-page.tsx JSON-LD) ───────────────

export type ProofMetricLegacy = ProofMetric;
export type CapabilityLegacy = { title: string; description: string; icon: string; tone: string };
// Backward-compat type aliases used by shared.tsx and sections.tsx
export type Capability = { title: string; description: string; icon: "stack" | "frontend" | "backend" | "data" | "realtime" | "ai"; tone: "slate" | "cyan" | "emerald" };
export type CredibilityPillar = { title: string; description: string };
export type ProcessStep = { title: string; description: string };
export type WritingTopic = { title: string; description: string };
export type FaqItemLegacy = FaqItem;

// Dummy legacy exports to prevent breaking portfolio-page.tsx imports
export const projectTypes = opportunityTypes;
export const budgetOptions: string[] = [];
export const timelineOptions: string[] = [];
export const processSteps = [
  {
    title: "Understand the product and constraints",
    description:
      "I start by clarifying the business goal, user workflow, system constraints, and what actually needs to feel excellent.",
  },
  {
    title: "Shape the system before scaling the code",
    description:
      "Architecture, data boundaries, and implementation structure come before feature work — so the codebase can hold up later.",
  },
  {
    title: "Ship with ownership",
    description:
      "Clean delivery, strong communication, and software that is stable, intentional, and ready for real use.",
  },
];
export const writingTopics = [
  { title: "Architecture notes", description: "FastAPI services, realtime flows, system boundaries." },
  { title: "AI product thinking", description: "Prompt design, structured output, LLM workflows." },
  { title: "Engineering craft", description: "Delivery quality, product judgment, and maintainability." },
];
export const credibilityPillars = [
  { title: "Production software mindset", description: "Optimize for release quality, not just feature completion." },
  { title: "Cross-functional engineering", description: "Move between frontend, backend, mobile, and AI comfortably." },
  { title: "AI product execution", description: "Translate LLM capabilities into real product outcomes." },
];
export const capabilities: Capability[] = [
  { title: "Product engineering", description: "From requirements to system shape.", icon: "stack" as const, tone: "slate" as const },
  { title: "Frontend systems", description: "React, Next.js, and deliberate UX.", icon: "frontend" as const, tone: "cyan" as const },
  { title: "Backend architecture", description: "FastAPI, Python, maintainable APIs.", icon: "backend" as const, tone: "emerald" as const },
  { title: "Data and operations", description: "PostgreSQL, dashboards, business logic.", icon: "data" as const, tone: "slate" as const },
  { title: "Realtime and P2P", description: "Socket.IO, WebRTC, low-latency flows.", icon: "realtime" as const, tone: "cyan" as const },
  { title: "AI-enabled experiences", description: "LLM workflows and prompt engineering.", icon: "ai" as const, tone: "emerald" as const },
];
