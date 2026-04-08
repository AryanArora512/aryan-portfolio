"use client";

import type { ReactNode } from "react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Skill = {
  title: string;
  description: string;
  icon: ReactNode;
  iconClass: string;
};

type Experience = {
  company: string;
  period: string;
  title: string;
  points: string[];
  side: "left" | "right";
};

type Project = {
  title: string;
  summary: string;
  problem: string;
  solution: string;
  outcome: string;
  tags: string[];
  featured?: boolean;
};

type Benefit = {
  title: string;
  description: string;
};

type Engagement = {
  title: string;
  description: string;
};

type ProcessStep = {
  title: string;
  description: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
};

type FormErrors = Partial<Record<keyof FormValues | "file", string>>;

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const siteUrl = "https://aryan-arora-dev.vercel.app";
const bookingUrl =
  process.env.NEXT_PUBLIC_BOOKING_URL ||
  "mailto:aroraaryan512@gmail.com?subject=Book%20a%2015-minute%20discovery%20call";

const initialFormValues: FormValues = {
  fullName: "",
  email: "",
  phone: "",
  projectType: "Mobile App",
  budget: "₹50k–₹1L",
  timeline: "1 Month",
  description: "",
};

const skills: Skill[] = [
  {
    title: "Flutter & Dart",
    description: "Production-grade apps with polished UX, clean architecture, and long-term maintainability.",
    icon: <LayersIcon />,
    iconClass: "from-cyanGlow/25 via-cyanGlow/10 to-transparent text-cyan-100 border-cyanGlow/20",
  },
  {
    title: "Next.js & React",
    description: "Modern SaaS-style frontends, dashboards, landing pages, and full-stack web experiences.",
    icon: <CodeWindowIcon />,
    iconClass: "from-white/20 via-white/10 to-transparent text-white border-white/15",
  },
  {
    title: "FastAPI & Flask",
    description: "Reliable APIs, scalable services, business logic, and performance-focused backend systems.",
    icon: <ServerIcon />,
    iconClass: "from-emeraldGlow/25 via-emeraldGlow/10 to-transparent text-emerald-100 border-emeraldGlow/20",
  },
  {
    title: "Firebase & Supabase",
    description: "Realtime sync, auth, push workflows, and backend services that move products faster.",
    icon: <DatabaseIcon />,
    iconClass: "from-amber-300/25 via-amber-300/10 to-transparent text-amber-100 border-amber-200/20",
  },
  {
    title: "WebSockets & WebRTC",
    description: "Low-latency messaging, live tracking, communication features, and real-time user experiences.",
    icon: <PulseIcon />,
    iconClass: "from-violet-400/25 via-violet-400/10 to-transparent text-violet-100 border-violet-300/20",
  },
  {
    title: "AI/ML Integrations",
    description: "Practical AI-powered workflows, smart features, and useful automation inside real products.",
    icon: <SparkIcon />,
    iconClass: "from-fuchsia-400/25 via-fuchsia-400/10 to-transparent text-fuchsia-100 border-fuchsia-300/20",
  },
];

const benefits: Benefit[] = [
  {
    title: "Fast, focused delivery",
    description: "I keep scope clear, move quickly, and avoid wasting time on overengineering.",
  },
  {
    title: "Clean scalable code",
    description: "The goal is not just launch speed. It is maintainability when your product grows.",
  },
  {
    title: "Strong real-time expertise",
    description: "If your product needs chat, tracking, notifications, or live sync, this is a real strength.",
  },
  {
    title: "Business-first thinking",
    description: "I frame projects around user outcomes, product clarity, and shipping something valuable.",
  },
];

const engagements: Engagement[] = [
  {
    title: "MVP builds",
    description: "For founders who need a serious first version that looks credible and works reliably.",
  },
  {
    title: "App redesigns",
    description: "For products that need better UX, stronger performance, and cleaner technical structure.",
  },
  {
    title: "Realtime systems",
    description: "For chat, tracking, live updates, notifications, and other low-latency product flows.",
  },
  {
    title: "Dashboards & internal tools",
    description: "For business systems that need speed, clarity, and dependable day-to-day usability.",
  },
];

const processSteps: ProcessStep[] = [
  {
    title: "1. Scope & priorities",
    description: "We define the product goals, key screens, technical constraints, and delivery priorities.",
  },
  {
    title: "2. Build & iterate",
    description: "I ship in focused milestones so you can review progress instead of waiting blindly.",
  },
  {
    title: "3. Launch & support",
    description: "You get a polished deliverable, cleaner handoff, and support around launch stability.",
  },
];

const faqItems: FaqItem[] = [
  {
    question: "What kind of freelance projects do you take on?",
    answer:
      "I work best on Flutter mobile apps, full-stack product builds, admin dashboards, real-time systems, and feature-heavy MVPs that need clean architecture and fast execution.",
  },
  {
    question: "Can you handle both frontend and backend?",
    answer:
      "Yes. I can handle Flutter apps, Next.js frontends, Python backend APIs, real-time integrations, and supporting product systems as part of one engagement.",
  },
  {
    question: "Do you work with startups and Indian-budget projects?",
    answer:
      "Yes. I work with startups, SaaS teams, and service businesses. Budget matters, so the form helps qualify timeline and scope early to keep discussions practical.",
  },
  {
    question: "How quickly do you respond?",
    answer:
      "Serious project inquiries usually get a response within 24 hours, often faster if the scope is already clear.",
  },
];

const experiences: Experience[] = [
  {
    company: "Bluetis Technology",
    period: "April 2025 - Present",
    title: "Full Stack Developer",
    side: "left",
    points: [
      "Building full-stack products with FastAPI, Flask, Next.js, and scalable Python services.",
      "Shipping AI and ML integrations inside real client-facing products and operational tools.",
      "Improving backend performance, API efficiency, and architecture for long-term scale.",
    ],
  },
  {
    company: "Deorwine Infotech",
    period: "Earlier Experience",
    title: "Flutter Developer",
    side: "right",
    points: [
      "Built high-performance Flutter apps using reusable components and clean architecture.",
      "Worked with REST APIs, Firebase, and GraphQL for complex business use cases.",
      "Focused on app responsiveness, maintainability, and feature delivery speed.",
    ],
  },
  {
    company: "Codezion Softwares",
    period: "Earlier Experience",
    title: "Android Developer",
    side: "left",
    points: [
      "Developed Android features in Java and integrated production APIs for app functionality.",
      "Built strong mobile engineering foundations around app structure and service integration.",
    ],
  },
];

const projects: Project[] = [
  {
    title: "UncleLau",
    summary:
      "A featured multi-role service platform built for customers, technicians, and partners in one scalable system.",
    problem:
      "The product needed coordinated bookings, live status visibility, communication, and operational control across multiple user types.",
    solution:
      "Built a real-time platform with booking flows, live tracking, chat, dashboards, and analytics using scalable mobile and backend architecture.",
    outcome:
      "Positioned the product like a serious business platform instead of a basic app, with stronger operational visibility and user flow continuity.",
    tags: ["Flutter", "FastAPI", "Realtime", "Dashboards", "Booking"],
    featured: true,
  },
  {
    title: "Sulaimania",
    summary:
      "A feature-rich Islamic app with prayer times, Quran access, compass tools, and localized user flows.",
    problem:
      "The app needed to support everyday usage reliably, even with audio, location-based features, and offline access involved.",
    solution:
      "Implemented offline-friendly flows, audio playback, localization, and location-aware experiences with a clean and responsive mobile UX.",
    outcome:
      "Created a smoother, more dependable product experience for repeat usage instead of a one-time utility app feel.",
    tags: ["Flutter", "Offline", "Audio", "Localization", "Maps"],
  },
  {
    title: "Spark Love",
    summary:
      "A real-time interaction app designed around responsive UI, engagement, and quick user feedback.",
    problem:
      "The product needed to feel smooth and immediate, where lag or awkward UX would reduce engagement quickly.",
    solution:
      "Focused on responsive interface patterns, performance tuning, and fluid interaction behavior across the core flows.",
    outcome:
      "Improved perceived app quality by keeping the experience fast, modern, and interaction-driven.",
    tags: ["Flutter", "Realtime", "UI/UX", "Performance"],
  },
  {
    title: "Rapidus Share",
    summary:
      "A cross-device sharing system designed for fast transfer and low-friction file movement.",
    problem:
      "The app needed low latency and smooth communication between devices to feel reliable in real usage.",
    solution:
      "Engineered real-time transfer logic and networking flows that supported faster exchange and better communication stability.",
    outcome:
      "Made the sharing experience feel more immediate and dependable, which is the main selling point of this kind of product.",
    tags: ["Realtime", "Cross-device", "Networking", "Low latency"],
  },
  {
    title: "CashCry",
    summary:
      "A scalable utility product built with cleaner architecture and a stronger focus on app reliability.",
    problem:
      "The app required an implementation that could stay maintainable over time without performance drifting as features expanded.",
    solution:
      "Structured the project around cleaner components, maintainable patterns, and performance-conscious implementation.",
    outcome:
      "Made future iteration safer and gave the product a stronger technical foundation for scale.",
    tags: ["Flutter", "Architecture", "Optimization"],
  },
  {
    title: "Real-Time Chat System",
    summary:
      "A messaging experience with media sharing, push notifications, and responsive sync behavior.",
    problem:
      "The app needed low-latency communication while still handling media, notifications, and consistency across users.",
    solution:
      "Used Firebase and WebSocket-based patterns to implement messaging, media workflows, and timely updates.",
    outcome:
      "Delivered a stronger communication layer that felt faster and more usable in active conversations.",
    tags: ["Firebase", "WebSockets", "Push", "Media"],
  },
];

const stats = [
  { value: "Bluetis", label: "Currently building full-stack products professionally" },
  { value: "6+", label: "Selected projects across mobile, realtime, and product systems" },
  { value: "24h", label: "Response time for serious project inquiries" },
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Why Me", href: "#why-me" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const projectTypes = ["Mobile App", "Web App", "Full Stack", "AI/ML", "Other"];
const budgetOptions = ["₹10k–₹25k", "₹25k–₹50k", "₹50k–₹1L", "₹1L+"];
const timelineOptions = ["Urgent (1–2 weeks)", "1 Month", "2–3 Months"];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aryan Arora",
    url: siteUrl,
    jobTitle: "Full Stack Mobile App Developer",
    email: "mailto:aroraaryan512@gmail.com",
    telephone: "+91 9928496590",
    sameAs: ["https://www.linkedin.com/in/aryan-arora-4615b21ab/"],
    knowsAbout: [
      "Flutter development",
      "Next.js development",
      "FastAPI",
      "Realtime systems",
      "WebSockets",
      "Firebase",
      "AI integrations",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Aryan Arora Freelance Development",
    url: siteUrl,
    areaServed: "Worldwide",
    priceRange: "₹₹",
    description:
      "Freelance full stack mobile app development focused on Flutter apps, real-time systems, dashboards, APIs, and scalable product builds.",
    founder: "Aryan Arora",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export function PortfolioPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoaded(true), 850);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <AnimatePresence>
        {!isLoaded ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[90] flex items-center justify-center bg-slateNight"
            exit={{ opacity: 0, transition: { duration: 0.45 } }}
          >
            <div className="relative flex flex-col items-center gap-4">
              <motion.div
                className="h-20 w-20 rounded-full border border-white/10 bg-white/5"
                animate={{ rotate: 360 }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute h-20 w-20 rounded-full border-r border-t border-cyanGlow border-l-transparent border-b-transparent"
                animate={{ rotate: -360 }}
                transition={{ duration: 1.3, repeat: Infinity, ease: "linear" }}
              />
              <p className="font-display text-sm uppercase tracking-[0.34em] text-slate-300">
                Aryan Arora
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <main className="relative overflow-x-clip">
        <div className="pointer-events-none absolute inset-0 bg-mesh opacity-90" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[760px] grid-pattern mask-fade opacity-40" />

        <Navbar />
        <Hero />
        <About />
        <WhyMe />
        <EngagementSection />
        <Skills />
        <Experience />
        <Projects />
        <Process />
        <FaqSection />
        <Contact />
        <FloatingWhatsApp />
        <MobileStickyCTA />
      </main>
    </>
  );
}

function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-white/5 bg-slateNight/70 backdrop-blur-xl"
    >
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-glass">
            <span className="font-display text-base font-semibold">AA</span>
          </div>
          <div>
            <p className="font-display text-sm font-medium text-white">Aryan Arora</p>
            <p className="text-xs text-slate-400">Full Stack Mobile App Developer</p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden rounded-full border border-emeraldGlow/25 bg-emeraldGlow/10 px-4 py-2 text-xs font-medium text-emerald-200 sm:block">
            Available for Freelance
          </div>
          <a
            href="#contact"
            className="rounded-full border border-white/10 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
          >
            Start a Project
          </a>
        </div>
      </div>
    </motion.header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-10 sm:pt-16">
      <div className="section-shell">
        <div className="grid items-center gap-10 pb-16 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:pb-24 lg:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emeraldGlow shadow-[0_0_18px_rgba(52,211,153,0.8)]" />
              Currently at Bluetis Technology
            </div>

            <h1 className="font-display max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              I Build Scalable Mobile Apps & Real-Time Systems That Users Love
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Helping startups and businesses launch fast, reliable, and scalable mobile applications using Flutter and full-stack technologies. If you need a polished app that feels premium and performs under real usage, this is exactly what I do.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-white px-6 py-4 text-center text-sm font-semibold text-slate-950 shadow-soft transition hover:-translate-y-0.5"
              >
                Start Your Project
              </a>
              <a
                href={bookingUrl}
                className="rounded-full border border-cyanGlow/20 bg-cyanGlow/10 px-6 py-4 text-center text-sm font-semibold text-cyan-100 transition hover:border-cyanGlow/40 hover:bg-cyanGlow/15"
              >
                Book a 15-min Call
              </a>
              <a
                href="#projects"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-4 text-center text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
              >
                View Projects
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
              <TrustChip label="Freelance Available" />
              <TrustChip label="Flutter Specialist" />
              <TrustChip label="Full-Stack Delivery" />
              <TrustChip label="₹₹ Budget Friendly for Serious Projects" />
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  className="glass-panel rounded-3xl p-5 shadow-glass"
                >
                  <div className="font-display text-2xl font-semibold text-white">{stat.value}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 28 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="glow-border rounded-[32px]">
              <div className="glass-panel relative overflow-hidden rounded-[32px] p-6 shadow-glass sm:p-7">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyanGlow/70 to-transparent" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-cyan-200">Aryan Arora</p>
                    <h2 className="font-display mt-2 text-2xl font-semibold text-white">
                      Full Stack Mobile App Developer
                    </h2>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                    Flutter Specialist
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <MetricCard
                    label="Best Fit"
                    value="Startups, SaaS teams, service businesses, and product founders who need speed with quality."
                    accent="from-cyanGlow/40 to-cyanGlow/5"
                  />
                  <MetricCard
                    label="Core Offer"
                    value="Flutter apps, full-stack platforms, APIs, dashboards, chat systems, and real-time product flows."
                    accent="from-accent/40 to-accent/5"
                  />
                  <MetricCard
                    label="Why Clients Reach Out"
                    value="Clear communication, strong execution, cleaner code structure, and product-minded problem solving."
                    accent="from-emeraldGlow/40 to-emeraldGlow/5"
                  />
                </div>

                <div className="mt-8 grid gap-4 rounded-3xl border border-white/10 bg-black/20 p-5 sm:grid-cols-2">
                  <ContactPill
                    label="Email"
                    value="aroraaryan512@gmail.com"
                    href="mailto:aroraaryan512@gmail.com"
                  />
                  <ContactPill label="WhatsApp" value="+91 9928496590" href="https://wa.me/919928496590" />
                  <ContactPill
                    label="LinkedIn"
                    value="Professional profile"
                    href="https://www.linkedin.com/in/aryan-arora-4615b21ab/"
                  />
                  <ContactPill label="Response Time" value="Usually within 24 hours" href="#contact" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.65 }}
          className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]"
        >
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-cyan-200">
              About
            </p>
            <h2 className="section-heading">A developer who thinks in product outcomes, not just features.</h2>
          </div>
          <div className="space-y-5">
            <p className="section-copy max-w-none">
              I work across mobile apps, backend systems, and real-time product infrastructure. That means I can help take a product from idea to working experience without the usual gap between design ambition and technical execution.
            </p>
            <p className="section-copy max-w-none">
              Whether you need a customer-facing app, internal dashboard, live communication system, or a full-stack MVP, I focus on shipping software that feels trustworthy to users and manageable for the business behind it.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WhyMe() {
  return (
    <section id="why-me" className="py-16 sm:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-200">Why Work With Me</p>
          <h2 className="section-heading">The reasons clients choose me over a generic freelancer.</h2>
          <p className="section-copy">
            You are not just hiring someone to code screens. You are hiring someone to help make the product clearer, faster, and more dependable.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              className="glass-panel rounded-[28px] p-6 shadow-glass"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200">
                <CheckShieldIcon />
              </div>
              <h3 className="font-display text-xl font-semibold text-white">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EngagementSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-200">How I Can Help</p>
          <h2 className="section-heading">The kinds of projects I am most valuable on.</h2>
          <p className="section-copy">
            This gives potential clients faster clarity on where the fit is strongest and what type of work I handle best.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {engagements.map((engagement, index) => (
            <motion.div
              key={engagement.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="glass-panel rounded-[28px] p-6 shadow-glass"
            >
              <p className="font-display text-xl font-semibold text-white">{engagement.title}</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">{engagement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-200">Skills</p>
          <h2 className="section-heading">Technical depth across mobile, frontend, backend, and realtime.</h2>
          <p className="section-copy">
            The stack is flexible, but the outcome stays consistent: clean architecture, strong UX, and systems that can handle real usage without falling apart.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              className="glass-panel rounded-[28px] p-6 shadow-glass transition"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl border bg-gradient-to-br ${skill.iconClass}`}
              >
                {skill.icon}
              </div>
              <h3 className="font-display mt-5 text-xl font-semibold text-white">{skill.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-200">Experience</p>
          <h2 className="section-heading">Professional experience that adds trust, not just history.</h2>
        </div>

        <div className="relative mt-12 space-y-6 before:absolute before:bottom-0 before:left-4 before:top-2 before:w-px before:bg-gradient-to-b before:from-cyanGlow/60 before:to-transparent sm:before:left-1/2">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="relative grid gap-4 sm:grid-cols-2 sm:gap-10"
            >
              <div className={experience.side === "left" ? "sm:pr-10" : "sm:order-2 sm:pl-10"}>
                <div
                  className={`ml-10 text-sm text-slate-400 sm:ml-0 ${
                    experience.side === "left" ? "sm:text-right" : "sm:text-left"
                  }`}
                >
                  {experience.side === "left" ? experience.period : ""}
                </div>
              </div>

              <div
                className={`relative ml-10 sm:ml-0 ${
                  experience.side === "left" ? "sm:pl-10" : "sm:order-1 sm:pr-10"
                }`}
              >
                <div
                  className={`absolute top-5 h-4 w-4 rounded-full border border-cyanGlow/50 bg-slateNight shadow-[0_0_20px_rgba(34,211,238,0.7)] ${
                    experience.side === "left"
                      ? "-left-[2.05rem] sm:left-auto sm:right-full sm:mr-[1.08rem]"
                      : "-left-[2.05rem] sm:-left-[1.08rem]"
                  }`}
                />
                <div className="glass-panel rounded-[28px] p-6 shadow-glass">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-sm text-cyan-200">{experience.company}</p>
                      <h3 className="font-display mt-1 text-xl font-semibold text-white">
                        {experience.title}
                      </h3>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 sm:hidden">
                      {experience.period}
                    </div>
                  </div>
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                    {experience.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-cyanGlow" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div
                className={`hidden sm:block ${
                  experience.side === "left" ? "order-3" : "order-2 text-left"
                }`}
              >
                <div className="text-sm text-slate-400">
                  {experience.side === "right" ? experience.period : ""}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-200">Projects</p>
          <h2 className="section-heading">Projects positioned like solutions, not just portfolio entries.</h2>
          <p className="section-copy">
            Clients care about what problem was solved, how the solution was built, and why the product now feels stronger. That is how this work is framed.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              className={`glass-panel overflow-hidden rounded-[30px] p-6 shadow-glass ${
                project.featured ? "lg:col-span-7" : "lg:col-span-5"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  {project.featured ? (
                    <div className="mb-4 inline-flex rounded-full border border-emeraldGlow/25 bg-emeraldGlow/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-emerald-200">
                      Featured Project
                    </div>
                  ) : null}
                  <h3 className="font-display text-2xl font-semibold text-white">{project.title}</h3>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                  Client Solution
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-200">{project.summary}</p>

              <ProjectPreview title={project.title} tags={project.tags} featured={project.featured} />

              <div className="mt-6 space-y-4 rounded-[24px] border border-white/10 bg-black/20 p-5">
                <ProjectPoint label="Problem" value={project.problem} />
                <ProjectPoint label="Solution" value={project.solution} />
                <ProjectPoint label="Outcome" value={project.outcome} />
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-16 sm:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-200">Process</p>
          <h2 className="section-heading">Simple collaboration, clearer communication, fewer surprises.</h2>
          <p className="section-copy">
            A strong freelance experience is not only about code quality. It is also about clarity, progress visibility, and confidence during delivery.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="glass-panel rounded-[28px] p-6 shadow-glass"
            >
              <p className="font-display text-xl font-semibold text-white">{step.title}</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-200">FAQ</p>
          <h2 className="section-heading">Questions clients usually ask before reaching out.</h2>
          <p className="section-copy">
            This section helps both conversion and SEO by answering the questions that matter before the first message.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {faqItems.map((item, index) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-panel rounded-[28px] p-6 shadow-glass"
            >
              <h3 className="font-display text-xl font-semibold text-white">{item.question}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [values, setValues] = useState<FormValues>(initialFormValues);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [serverError, setServerError] = useState("");

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setServerError("");
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] ?? null;
    setSelectedFile(file);
    setErrors((current) => ({ ...current, file: undefined }));
    setServerError("");
  }

  function validateForm() {
    const nextErrors: FormErrors = {};

    if (!values.fullName.trim()) {
      nextErrors.fullName = "Full name is required.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!values.description.trim()) {
      nextErrors.description = "Project description is required.";
    } else if (values.description.trim().length < 30) {
      nextErrors.description = "Please share a bit more detail so I can understand the project.";
    }

    if (selectedFile && selectedFile.size > MAX_FILE_SIZE) {
      nextErrors.file = "Please upload a file smaller than 5MB.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSuccessMessage("");
    setServerError("");

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("fullName", values.fullName.trim());
      formData.append("email", values.email.trim());
      formData.append("phone", values.phone.trim());
      formData.append("projectType", values.projectType);
      formData.append("budget", values.budget);
      formData.append("timeline", values.timeline);
      formData.append("description", values.description.trim());

      if (selectedFile) {
        formData.append("attachment", selectedFile);
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong while submitting the form.");
      }

      setSuccessMessage(result.message || "Thanks! I’ll get back to you within 24 hours.");
      setValues(initialFormValues);
      setSelectedFile(null);
      setErrors({});
      event.currentTarget.reset();
    } catch (error) {
      setServerError(
        error instanceof Error ? error.message : "Unable to submit right now. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="pb-28 pt-16 sm:pb-24 sm:pt-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glow-border rounded-[34px]"
        >
          <div className="glass-panel rounded-[34px] p-6 shadow-glass sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-200">Contact</p>
                  <h2 className="section-heading mt-4">Let&apos;s Build Something Great</h2>
                  <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                    Ready to launch a mobile app, full-stack platform, or real-time product? Share your scope, budget, and timeline here so I can respond with more context and less back-and-forth.
                  </p>

                  <div className="mt-8 grid gap-4">
                    <ActionCard
                      title="Email Shortcut"
                      subtitle="Best for detailed briefs, business discussions, and longer project requirements."
                      href="mailto:aroraaryan512@gmail.com"
                      label="aroraaryan512@gmail.com"
                    />
                    <ActionCard
                      title="WhatsApp Quick Chat"
                      subtitle="Best for faster conversations, urgency checks, and quick project discussions."
                      href="https://wa.me/919928496590?text=Hi%20Aryan%2C%20I%20want%20to%20start%20a%20project."
                      label="+91 9928496590"
                    />
                    <ActionCard
                      title="LinkedIn"
                      subtitle="See professional profile credibility, experience, and direct networking access."
                      href="https://www.linkedin.com/in/aryan-arora-4615b21ab/"
                      label="Open LinkedIn"
                    />
                  </div>
                </div>

                <div className="mt-8 rounded-[28px] border border-white/10 bg-black/20 p-5">
                  <p className="text-sm font-semibold text-white">Why this form works well</p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyanGlow" />
                      <span>Captures scope, budget, timeline, and requirements in one step.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyanGlow" />
                      <span>Helps qualify serious client inquiries instead of vague “hi” messages.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyanGlow" />
                      <span>Your information is सुरक्षित and will not be shared.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="rounded-[30px] border border-white/10 bg-black/20 p-5 shadow-soft sm:p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-display text-2xl font-semibold text-white">Start Your Project</p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Serious inquiries get a reply within 24 hours.
                    </p>
                  </div>
                  <div className="hidden rounded-full border border-emeraldGlow/25 bg-emeraldGlow/10 px-3 py-1 text-xs font-medium text-emerald-200 sm:block">
                    Freelance Open
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <FormField
                    label="Full Name"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    error={errors.fullName}
                  />
                  <FormField
                    label="Email Address"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    type="email"
                    required
                    error={errors.email}
                  />
                </div>

                <div className="mt-4">
                  <FormField
                    label="Phone / WhatsApp Number"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    placeholder="+91 ..."
                    error={errors.phone}
                  />
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  <SelectField
                    label="Project Type"
                    name="projectType"
                    value={values.projectType}
                    onChange={handleChange}
                    options={projectTypes}
                  />
                  <SelectField
                    label="Project Budget"
                    name="budget"
                    value={values.budget}
                    onChange={handleChange}
                    options={budgetOptions}
                  />
                  <SelectField
                    label="Project Timeline"
                    name="timeline"
                    value={values.timeline}
                    onChange={handleChange}
                    options={timelineOptions}
                  />
                </div>

                <div className="mt-4">
                  <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="description">
                    Project Description <span className="text-cyan-200">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={7}
                    value={values.description}
                    onChange={handleChange}
                    placeholder="Tell me what you want to build, what stage you're at, and what outcome you want."
                    className={`w-full rounded-2xl border bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:bg-white/[0.07] ${
                      errors.description
                        ? "border-rose-400/70"
                        : "border-white/10 focus:border-cyanGlow/50"
                    }`}
                  />
                  <p className="mt-2 text-xs text-slate-500">
                    Include features, users, constraints, deadlines, or any existing system details.
                  </p>
                  {errors.description ? (
                    <p className="mt-2 text-sm text-rose-300">{errors.description}</p>
                  ) : null}
                </div>

                <div className="mt-4">
                  <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="attachment">
                    Optional File Upload
                  </label>
                  <label
                    htmlFor="attachment"
                    className={`flex cursor-pointer items-center justify-between gap-4 rounded-2xl border px-4 py-4 text-sm transition ${
                      errors.file
                        ? "border-rose-400/70 bg-rose-400/5"
                        : "border-white/10 bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <div>
                      <p className="font-medium text-white">
                        {selectedFile ? selectedFile.name : "Upload requirements, wireframes, or docs"}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">Accepted size up to 5MB</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                      Choose File
                    </span>
                  </label>
                  <input
                    id="attachment"
                    name="attachment"
                    type="file"
                    onChange={handleFileChange}
                    className="sr-only"
                  />
                  {errors.file ? <p className="mt-2 text-sm text-rose-300">{errors.file}</p> : null}
                </div>

                {successMessage ? (
                  <div className="mt-5 rounded-2xl border border-emeraldGlow/25 bg-emeraldGlow/10 px-4 py-3 text-sm text-emerald-200">
                    {successMessage}
                  </div>
                ) : null}

                {serverError ? (
                  <div className="mt-5 rounded-2xl border border-rose-400/25 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">
                    {serverError}
                    <div className="mt-3 flex flex-wrap gap-2">
                      <a
                        href="mailto:aroraaryan512@gmail.com"
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white"
                      >
                        Email Instead
                      </a>
                      <a
                        href="https://wa.me/919928496590?text=Hi%20Aryan%2C%20I%20want%20to%20start%20a%20project."
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white"
                      >
                        WhatsApp Instead
                      </a>
                    </div>
                  </div>
                ) : null}

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-full bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Submitting..." : "Start Your Project"}
                  </button>
                  <a
                    href={bookingUrl}
                    className="rounded-full border border-cyanGlow/20 bg-cyanGlow/10 px-6 py-4 text-center text-sm font-semibold text-cyan-100 transition hover:border-cyanGlow/40 hover:bg-cyanGlow/15"
                  >
                    Book a 15-min Call
                  </a>
                  <a
                    href="mailto:aroraaryan512@gmail.com"
                    className="rounded-full border border-white/10 bg-white/5 px-6 py-4 text-center text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
                  >
                    Email Directly
                  </a>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919928496590?text=Hi%20Aryan%2C%20I%20want%20to%20discuss%20a%20project."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 hidden items-center gap-3 rounded-full border border-emeraldGlow/25 bg-emeraldGlow/15 px-4 py-3 text-sm font-semibold text-emerald-100 shadow-glass backdrop-blur-xl transition hover:-translate-y-1 md:flex"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emeraldGlow text-slate-950">
        <ChatIcon />
      </span>
      WhatsApp Quick Chat
    </a>
  );
}

function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-40 px-4 sm:hidden">
      <div className="glass-panel mx-auto flex max-w-md items-center justify-between gap-3 rounded-full px-4 py-3 shadow-glass">
        <div>
          <p className="text-xs text-slate-400">Available for Freelance</p>
          <p className="text-sm font-semibold text-white">Start your project today</p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={bookingUrl}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-2.5 text-sm font-semibold text-white"
          >
            Call
          </a>
          <a
            href="#contact"
            className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-slate-950"
          >
            Start
          </a>
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
      <div className={`mb-4 h-1.5 w-24 rounded-full bg-gradient-to-r ${accent}`} />
      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{label}</p>
      <p className="mt-3 text-sm leading-7 text-slate-100">{value}</p>
    </div>
  );
}

function ProjectPreview({
  title,
  tags,
  featured,
}: {
  title: string;
  tags: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={`mt-6 overflow-hidden rounded-[26px] border border-white/10 ${
        featured ? "bg-gradient-to-br from-cyanGlow/15 via-white/5 to-accent/15" : "bg-white/[0.04]"
      }`}
    >
      <div className="grid min-h-[220px] gap-4 p-5 sm:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[22px] border border-white/10 bg-slateNight/70 p-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <span className="text-xs uppercase tracking-[0.24em] text-slate-500">Preview</span>
          </div>
          <div className="grid gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-medium text-white">{title}</p>
                <div className="rounded-full bg-emeraldGlow/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-200">
                  Live flow
                </div>
              </div>
              <div className="grid gap-2">
                <div className="h-2 rounded-full bg-white/10" />
                <div className="h-2 w-4/5 rounded-full bg-white/10" />
                <div className="h-16 rounded-2xl bg-gradient-to-r from-cyanGlow/20 via-white/5 to-accent/20" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="h-16 rounded-2xl bg-white/[0.05]" />
              <div className="h-16 rounded-2xl bg-white/[0.05]" />
              <div className="h-16 rounded-2xl bg-white/[0.05]" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="rounded-[22px] border border-white/10 bg-black/20 p-4">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Used In Build</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-[22px] border border-white/10 bg-black/20 p-4">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Product Feel</p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between rounded-2xl bg-white/[0.04] px-3 py-2.5">
                <span className="text-sm text-slate-300">Performance</span>
                <span className="text-sm font-medium text-white">High</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-white/[0.04] px-3 py-2.5">
                <span className="text-sm text-slate-300">Architecture</span>
                <span className="text-sm font-medium text-white">Scalable</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-white/[0.04] px-3 py-2.5">
                <span className="text-sm text-slate-300">User Experience</span>
                <span className="text-sm font-medium text-white">Premium</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectPoint({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.24em] text-cyan-200">{label}</p>
      <p className="mt-2 text-sm leading-7 text-slate-300">{value}</p>
    </div>
  );
}

function TrustChip({ label }: { label: string }) {
  return (
    <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2">{label}</div>
  );
}

function ContactPill({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{label}</p>
      <p className="mt-2 text-sm font-medium text-white">{value}</p>
    </a>
  );
}

function ActionCard({
  title,
  subtitle,
  href,
  label,
}: {
  title: string;
  subtitle: string;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      className="rounded-[24px] border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:bg-white/10"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      <p className="font-display text-lg font-semibold text-white">{title}</p>
      <p className="mt-2 text-sm leading-7 text-slate-300">{subtitle}</p>
      <p className="mt-4 text-sm font-medium text-cyan-200">{label}</p>
    </a>
  );
}

function FormField({
  label,
  name,
  placeholder,
  value,
  onChange,
  error,
  required,
  type = "text",
}: {
  label: string;
  name: keyof FormValues;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor={name}>
        {label}
        {required ? <span className="text-cyan-200"> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-2xl border bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:bg-white/[0.07] ${
          error ? "border-rose-400/70" : "border-white/10 focus:border-cyanGlow/50"
        }`}
      />
      {error ? <p className="mt-2 text-sm text-rose-300">{error}</p> : null}
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string;
  name: keyof FormValues;
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor={name}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-cyanGlow/50 focus:bg-white/[0.07]"
      >
        {options.map((option) => (
          <option key={option} value={option} className="bg-panel text-white">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function LayersIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3L21 8L12 13L3 8L12 3Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 12L12 16L19 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 16L12 20L19 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CodeWindowIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8.5 10L6.5 12L8.5 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 10L17.5 12L15.5 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12.8 9L11.2 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ServerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="4" y="14" width="16" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 7H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 17H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 7H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 17H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <ellipse cx="12" cy="6" rx="7" ry="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5 6V12C5 13.6569 8.13401 15 12 15C15.866 15 19 13.6569 19 12V6"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M5 12V18C5 19.6569 8.13401 21 12 21C15.866 21 19 19.6569 19 18V12"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function PulseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 12H7L10 7L14 17L17 12H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3L13.7 8.3L19 10L13.7 11.7L12 17L10.3 11.7L5 10L10.3 8.3L12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M18 3V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19.5 4.5H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 18L3 21V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V16C21 17.1046 20.1046 18 19 18H7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M8 10H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 14H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CheckShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3L19 6V11C19 16 15.5 19.5 12 21C8.5 19.5 5 16 5 11V6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 11.5L11.2 13.2L14.8 9.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
