"use client";

import type { ReactNode } from "react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Skill = {
  title: string;
  description: string;
  icon: ReactNode;
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
  impact: string;
  tags: string[];
  featured?: boolean;
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
    description: "Production-grade mobile apps with clean architecture, polished UX, and maintainable code.",
    icon: <LayersIcon />,
  },
  {
    title: "Next.js & React",
    description: "Modern SaaS-style interfaces, dashboards, and fast web experiences built for business.",
    icon: <CodeWindowIcon />,
  },
  {
    title: "FastAPI & Flask",
    description: "High-performance backend systems, integrations, and scalable API design.",
    icon: <ServerIcon />,
  },
  {
    title: "Firebase & Supabase",
    description: "Reliable auth, databases, and realtime features for fast-moving product teams.",
    icon: <DatabaseIcon />,
  },
  {
    title: "WebSockets & WebRTC",
    description: "Low-latency communication, live sync, chat, and real-time product infrastructure.",
    icon: <PulseIcon />,
  },
  {
    title: "AI/ML Integrations",
    description: "Practical AI-powered features, automation pipelines, and smart product enhancements.",
    icon: <SparkIcon />,
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
      "Multi-role service platform for customers, technicians, and partners with business-grade operational flows.",
    impact:
      "Delivered real-time booking, live tracking, chat, analytics, and dashboards in a scalable architecture designed for actual business usage.",
    tags: ["Flutter", "FastAPI", "Realtime", "Dashboards", "Booking"],
    featured: true,
  },
  {
    title: "Sulaimania",
    summary:
      "Feature-rich Islamic application with prayer times, Quran access, Qibla compass, and localization.",
    impact:
      "Implemented offline support, audio playback, and location-aware features while keeping the app smooth and reliable.",
    tags: ["Flutter", "Offline", "Audio", "Localization", "Maps"],
  },
  {
    title: "Spark Love",
    summary:
      "Real-time interaction app built around fast feedback, fluid navigation, and engaging interfaces.",
    impact:
      "Focused on responsive UI behavior and performance optimization to keep the experience fast under active usage.",
    tags: ["Flutter", "Realtime", "UI/UX", "Performance"],
  },
  {
    title: "Rapidus Share",
    summary:
      "Cross-device file sharing system built for low latency and smooth communication between devices.",
    impact:
      "Engineered real-time transfer logic and networking flows for high-speed exchange with minimal friction.",
    tags: ["Realtime", "Cross-device", "Networking", "Low latency"],
  },
  {
    title: "CashCry",
    summary:
      "Scalable utility product with a clean app architecture and performance-focused implementation.",
    impact:
      "Structured for maintainability and consistent speed, making future iteration easier and safer.",
    tags: ["Flutter", "Architecture", "Optimization"],
  },
  {
    title: "Real-Time Chat System",
    summary:
      "Messaging platform with media sharing, push notifications, and reliable sync behavior.",
    impact:
      "Combined Firebase and WebSocket patterns to create low-latency communication with production-ready responsiveness.",
    tags: ["Firebase", "WebSockets", "Push", "Media"],
  },
];

const stats = [
  { value: "6+", label: "High-impact client projects showcased" },
  { value: "4+", label: "Years across mobile and full-stack development" },
  { value: "24h", label: "Response promise for qualified project inquiries" },
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const projectTypes = ["Mobile App", "Web App", "Full Stack", "AI/ML", "Other"];
const budgetOptions = ["₹10k–₹25k", "₹25k–₹50k", "₹50k–₹1L", "₹1L+"];
const timelineOptions = ["Urgent (1–2 weeks)", "1 Month", "2–3 Months"];

export function PortfolioPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoaded(true), 850);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
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
        <Skills />
        <Experience />
        <Projects />
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
              Available for premium freelance builds
            </div>

            <h1 className="font-display max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Building Scalable Mobile & Full Stack Apps
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              I build scalable mobile apps and real-time systems that perform. For founders and businesses, that means faster launches, polished user experience, and codebases that stay reliable as your product grows.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-white px-6 py-4 text-center text-sm font-semibold text-slate-950 shadow-soft transition hover:-translate-y-0.5"
              >
                Hire Me
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-4 text-center text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
              >
                Start a Project
              </a>
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
                    label="Core Offer"
                    value="Flutter apps, full-stack systems, real-time product architecture"
                    accent="from-cyanGlow/40 to-cyanGlow/5"
                  />
                  <MetricCard
                    label="Ideal Clients"
                    value="Startups, SaaS teams, service businesses, and product-focused founders"
                    accent="from-accent/40 to-accent/5"
                  />
                  <MetricCard
                    label="What You Get"
                    value="Premium UI, scalable backend thinking, faster execution, and cleaner delivery"
                    accent="from-emeraldGlow/40 to-emeraldGlow/5"
                  />
                </div>

                <div className="mt-8 grid gap-4 rounded-3xl border border-white/10 bg-black/20 p-5 sm:grid-cols-2">
                  <ContactPill
                    label="Email"
                    value="aroraaryan512@gmail.com"
                    href="mailto:aroraaryan512@gmail.com"
                  />
                  <ContactPill
                    label="Phone"
                    value="+91 9928496590"
                    href="tel:+919928496590"
                  />
                  <ContactPill
                    label="LinkedIn"
                    value="Connect professionally"
                    href="https://www.linkedin.com/in/aryan-arora-4615b21ab/"
                  />
                  <ContactPill label="Lead Time" value="Quick reply for serious inquiries" href="#contact" />
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
          className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-cyan-200">
              About
            </p>
            <h2 className="section-heading">More than a developer. A product-minded execution partner.</h2>
          </div>
          <div className="space-y-5">
            <p className="section-copy max-w-none">
              I work at the intersection of mobile apps, backend systems, and real-time infrastructure. My strongest edge is building products that look premium on the surface and stay stable underneath as usage grows.
            </p>
            <p className="section-copy max-w-none">
              Whether you need a customer-facing app, an internal dashboard, live communication features, or a full-stack product MVP, I help turn requirements into something launchable, scalable, and business-ready.
            </p>
          </div>
        </motion.div>
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
            The stack is flexible, but the outcome stays consistent: clean architecture, strong product UX, and engineering decisions made for long-term reliability.
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
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200">
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
          <h2 className="section-heading">Hands-on delivery across mobile products, APIs, and business systems.</h2>
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
          <h2 className="section-heading">Selected work that proves product thinking and execution quality.</h2>
          <p className="section-copy">
            The goal is not just code shipped. It is business workflows improved, user experiences polished, and systems built to handle real usage.
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
                  Product Build
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-300">{project.summary}</p>
              <p className="mt-4 text-sm leading-7 text-slate-200">{project.impact}</p>

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
                    Ready to launch a mobile app, full-stack platform, or real-time product? Share the essentials and I&apos;ll review your requirements personally. Serious project inquiries get a reply within 24 hours.
                  </p>

                  <div className="mt-8 grid gap-4">
                    <ActionCard
                      title="Email Shortcut"
                      subtitle="For detailed briefs, partnership discussions, and project scope documents."
                      href="mailto:aroraaryan512@gmail.com"
                      label="aroraaryan512@gmail.com"
                    />
                    <ActionCard
                      title="WhatsApp Quick Chat"
                      subtitle="For faster conversations, quick estimates, and project urgency."
                      href="https://wa.me/919928496590?text=Hi%20Aryan%2C%20I%20want%20to%20start%20a%20project."
                      label="+91 9928496590"
                    />
                    <ActionCard
                      title="LinkedIn"
                      subtitle="View profile credibility, background, and professional presence."
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
                      <span>Captures scope, budget, timeline, and context in one step.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyanGlow" />
                      <span>Makes serious client inquiries easier to qualify and respond to quickly.</span>
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
                      Share the details and I&apos;ll get back to you within 24 hours.
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
                    Include features, audience, constraints, and any existing tech if available.
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
        <a
          href="#contact"
          className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-slate-950"
        >
          Start Project
        </a>
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
    <a href={href} className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
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
      <path d="M5 6V12C5 13.6569 8.13401 15 12 15C15.866 15 19 13.6569 19 12V6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 12V18C5 19.6569 8.13401 21 12 21C15.866 21 19 19.6569 19 18V12" stroke="currentColor" strokeWidth="1.5" />
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
