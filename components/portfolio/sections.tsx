"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import {
  bookingUrl,
  budgetOptions,
  capabilities,
  credibilityPillars,
  experiences,
  faqItems,
  flagshipProjects,
  initialFormValues,
  navItems,
  processSteps,
  projectTypes,
  proofMetrics,
  timelineOptions,
  type FormValues,
  writingTopics,
} from "./content";
import {
  ActionCard,
  BulletList,
  CapabilityIcon,
  ChatIcon,
  ContactPill,
  FormField,
  OutlineButton,
  PrimaryButton,
  ProofCard,
  ProjectStat,
  SectionIntro,
  SelectField,
} from "./shared";

type FormErrors = Partial<Record<keyof FormValues | "file", string>>;

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export function PortfolioShell() {
  const [isLoaded, setIsLoaded] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsLoaded(true);
      return;
    }

    const timer = window.setTimeout(() => setIsLoaded(true), 220);
    return () => window.clearTimeout(timer);
  }, [prefersReducedMotion]);

  return (
    <>
      <AnimatePresence>
        {!isLoaded ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[90] flex items-center justify-center bg-[#060816]"
            exit={{ opacity: 0, transition: { duration: 0.18 } }}
          >
            <div className="flex flex-col items-center gap-5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/75" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              </div>
              <p className="font-display text-xs uppercase tracking-[0.34em] text-slate-400">
                Aryan Arora
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <main className="relative overflow-x-clip pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_32%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[720px] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent)] opacity-40" />
        <Navbar />
        <Hero />
        <Credibility />
        <FlagshipWork />
        <Capabilities />
        <ExperienceTimeline />
        <WritingSection />
        <ProcessSection />
        <FaqSection />
        <ContactSection />
        <FloatingWhatsApp />
        <MobileStickyCTA />
      </main>
    </>
  );
}

function Navbar() {
  return (
    <motion.header
      initial={{ y: -14, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-white/6 bg-[#060816]/78 backdrop-blur-2xl"
    >
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
            <span className="font-display text-sm font-semibold tracking-[0.2em] text-white">AA</span>
          </div>
          <div>
            <p className="font-display text-sm font-medium text-white">Aryan Arora</p>
            <p className="text-xs text-slate-400">Software Engineer · Product Engineer · AI Engineer</p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition duration-200 hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <a
            href={bookingUrl}
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white transition duration-200 hover:border-white/16 hover:bg-white/[0.06]"
          >
            Book a Call
          </a>
          <a
            href="#contact"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition duration-200 hover:bg-slate-100"
          >
            Contact
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
        <div className="grid items-start gap-10 pb-20 pt-10 lg:grid-cols-[1.08fr_0.92fr] lg:pb-28 lg:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              Building production software at Bluetris Technologies
            </div>

            <h1 className="font-display mt-7 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Software engineer building full-stack, AI-enabled, and real-time products that feel production-ready from day one.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              I work across React, FastAPI, Flutter, PostgreSQL, Docker, WebRTC, and AI workflows to ship software that is technically credible, product-aware, and usable in the real world.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <PrimaryButton href="#projects">View Flagship Work</PrimaryButton>
              <OutlineButton href="#experience" tone="accent">
                See Experience
              </OutlineButton>
              <OutlineButton href="#contact">Discuss a Role or Product</OutlineButton>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
              {["Full-Stack Delivery", "AI Product Work", "Realtime Systems", "Freelance Available"].map((item) => (
                <div key={item} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {proofMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  <ProofCard value={metric.value} label={metric.label} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 22, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="surface-panel rounded-[32px] p-6 sm:p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-slate-300">Current focus</p>
                <h2 className="font-display mt-2 text-2xl font-semibold tracking-tight text-white">
                  Product systems, AI workflows, and engineering quality
                </h2>
              </div>
              <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
                2026
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <ProjectStat
                label="Current work"
                value="Enterprise HRMS, AI mobile application work, client projects, architecture decisions, product suggestions"
              />
              <ProjectStat
                label="Best fit"
                value="Product teams, startups, recruiters, founders, and businesses who want engineering depth with product judgment"
              />
              <ProjectStat
                label="Core stack"
                value="React, FastAPI, Python, Flutter, PostgreSQL, Docker, WebRTC, Socket.IO, LLM workflows"
              />
            </div>

            <div className="mt-8 grid gap-4 rounded-[28px] border border-white/8 bg-white/[0.02] p-5 sm:grid-cols-2">
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
              <ContactPill label="Response" value="Usually within 24 hours" href="#contact" />
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Credibility() {
  return (
    <section className="py-18 sm:py-24">
      <div className="section-shell">
        <SectionIntro
          eyebrow="Positioning"
          title="This portfolio is designed to communicate engineering quality, not just design taste."
          copy="The strongest signal is not aesthetic alone. It is the combination of product judgment, systems thinking, ownership, and software that looks ready for production."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {credibilityPillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="surface-panel rounded-[30px] p-6"
            >
              <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">0{index + 1}</p>
              <h3 className="font-display mt-4 text-2xl font-semibold tracking-tight text-white">
                {pillar.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{pillar.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FlagshipWork() {
  return (
    <section id="projects" className="py-18 sm:py-24">
      <div className="section-shell">
        <SectionIntro
          eyebrow="Flagship Work"
          title="Selected products that position the work like software, not portfolio filler."
          copy="Each project is framed around role, architecture, engineering shape, and why it matters to the product or business."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {flagshipProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.48, delay: index * 0.05 }}
              className={`surface-panel overflow-hidden rounded-[34px] p-6 sm:p-7 ${
                project.featured ? "lg:col-span-2" : ""
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-slate-300">
                      {project.category}
                    </span>
                    {project.featured ? (
                      <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-emerald-100">
                        Flagship
                      </span>
                    ) : null}
                  </div>
                  <h3 className="font-display mt-5 text-3xl font-semibold tracking-tight text-white">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">{project.summary}</p>
                </div>
                <div className="rounded-[26px] border border-white/8 bg-white/[0.02] p-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Role</p>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-slate-200">{project.role}</p>
                </div>
              </div>

              <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[28px] border border-white/8 bg-white/[0.025] p-5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Architecture snapshot</p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{project.architecture}</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <ProjectStat label="Impact" value={project.impact} />
                    <ProjectStat label="Stack" value={project.stack.join(" · ")} />
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/8 bg-black/20 p-5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Why it matters</p>
                  <div className="mt-4">
                    <BulletList items={project.highlights} />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="py-18 sm:py-24">
      <div className="section-shell">
        <SectionIntro
          eyebrow="Capabilities"
          title="Engineering strengths across product surface, system design, and applied AI."
          copy="This is the combination that lets me contribute beyond isolated tasks and ship software with stronger end-to-end coherence."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((capability, index) => (
            <motion.article
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="surface-panel rounded-[30px] p-6"
            >
              <CapabilityIcon icon={capability.icon} tone={capability.tone} />
              <h3 className="font-display mt-5 text-2xl font-semibold tracking-tight text-white">
                {capability.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{capability.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceTimeline() {
  return (
    <section id="experience" className="py-18 sm:py-24">
      <div className="section-shell">
        <SectionIntro
          eyebrow="Experience"
          title="Experience framed around ownership, systems, and shipping real products."
          copy="The emphasis here is not just chronology. It is what kind of software I have worked on, what I owned, and what that signals to teams hiring for engineering quality."
        />

        <div className="mt-10 space-y-6">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.company}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="surface-panel rounded-[32px] p-6 sm:p-7"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">{experience.period}</p>
                  <h3 className="font-display mt-3 text-3xl font-semibold tracking-tight text-white">
                    {experience.company}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-cyan-100">{experience.title}</p>
                  <p className="mt-5 text-sm leading-7 text-slate-300">{experience.summary}</p>
                  <div className="mt-5">
                    <BulletList items={experience.bullets} />
                  </div>
                </div>

                <div className="w-full max-w-md rounded-[26px] border border-white/8 bg-white/[0.02] p-5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Stack and focus</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.stack.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WritingSection() {
  return (
    <section id="writing" className="py-18 sm:py-24">
      <div className="section-shell">
        <SectionIntro
          eyebrow="Writing Surface"
          title="This portfolio is being shaped to support technical writing, case studies, and engineering notes."
          copy="Instead of pretending a blog already exists, this section establishes the themes and expertise areas the writing surface will cover as the site grows."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {writingTopics.map((topic, index) => (
            <motion.article
              key={topic.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="surface-panel rounded-[30px] p-6"
            >
              <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Future topic</p>
              <h3 className="font-display mt-4 text-2xl font-semibold tracking-tight text-white">
                {topic.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{topic.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="py-18 sm:py-24">
      <div className="section-shell">
        <SectionIntro
          eyebrow="How I Work"
          title="Clear product thinking, deliberate system shaping, and clean delivery."
          copy="Good engineering collaboration is not only about code. It is about clarity, trust, and decisions that reduce downstream chaos."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="surface-panel rounded-[30px] p-6"
            >
              <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Step 0{index + 1}</p>
              <h3 className="font-display mt-4 text-2xl font-semibold tracking-tight text-white">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="py-18 sm:py-24">
      <div className="section-shell">
        <SectionIntro
          eyebrow="FAQ"
          title="Questions the portfolio should answer before the first conversation starts."
          copy="This keeps the site useful to recruiters, founders, and freelance leads while also supporting structured search visibility."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {faqItems.map((item, index) => (
            <motion.article
              key={item.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="surface-panel rounded-[30px] p-6"
            >
              <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
                {item.question}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.answer}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [values, setValues] = useState(initialFormValues);
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
      nextErrors.description = "Please add more context so I can understand the scope clearly.";
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
      formData.append("projectType", values.opportunityType);
      formData.append("budget", "");
      formData.append("timeline", "");
      formData.append("description", values.description.trim());
      formData.append("company", values.company.trim());

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

      setSuccessMessage(result.message || "Thanks. I’ll get back to you within 24 hours.");
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
    <section id="contact" className="pb-28 pt-18 sm:pb-24 sm:pt-24">
      <div className="section-shell">
        <div className="surface-panel rounded-[36px] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-between">
              <div>
                <SectionIntro
                  eyebrow="Contact"
                  title="Built for serious opportunities, not generic inquiries."
                  copy="Use this for engineering roles, freelance product work, AI feature collaborations, or product conversations where software quality actually matters."
                />

                <div className="mt-8 grid gap-4">
                  <ActionCard
                    title="Email"
                    subtitle="Best for role discussions, detailed product briefs, and longer context."
                    href="mailto:aroraaryan512@gmail.com"
                    label="aroraaryan512@gmail.com"
                  />
                  <ActionCard
                    title="WhatsApp"
                    subtitle="Best for faster discussions, quick alignment, and urgent product conversations."
                    href="https://wa.me/919928496590?text=Hi%20Aryan%2C%20I%20want%20to%20discuss%20a%20software%20project."
                    label="+91 9928496590"
                  />
                  <ActionCard
                    title="Book a Call"
                    subtitle="Useful when a role, product build, or consulting discussion is easier to align live."
                    href={bookingUrl}
                    label="15-minute discovery call"
                  />
                </div>
              </div>

              <div className="mt-8 rounded-[28px] border border-white/8 bg-white/[0.02] p-5">
                <p className="text-sm font-semibold text-white">What this form is optimized for</p>
                <div className="mt-4">
                  <BulletList
                    items={[
                      "Qualified freelance leads with product, budget, and timeline context",
                      "Recruiter outreach for roles involving full-stack, AI, product, or mobile engineering",
                      "Conversations where architecture, ownership, and production quality are important",
                    ]}
                  />
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-[30px] border border-white/8 bg-black/20 p-5 shadow-soft sm:p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-display text-2xl font-semibold tracking-tight text-white">
                    Start the conversation
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Serious messages usually get a response within 24 hours.
                  </p>
                </div>
                <div className="hidden rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-100 sm:block">
                  Open to roles and product work
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

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <FormField
                  label="Phone / WhatsApp"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  placeholder="+91 ..."
                  error={errors.phone}
                />
                <FormField
                  label="Company"
                  name="company"
                  value={values.company}
                  onChange={handleChange}
                  placeholder="Company or team name"
                  error={errors.company}
                />
              </div>

              <div className="mt-4">
                <SelectField
                  label="Type of Opportunity"
                  name="opportunityType"
                  value={values.opportunityType}
                  onChange={handleChange}
                  options={projectTypes}
                />
              </div>

              <div className="mt-4 hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  autoComplete="off"
                  tabIndex={-1}
                  onChange={() => undefined}
                />
              </div>

              <div className="mt-4">
                <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="description">
                  Context <span className="text-cyan-200">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={7}
                  value={values.description}
                  onChange={handleChange}
                  placeholder="Describe the role, product, feature, system, or problem you want help with."
                  className={`w-full rounded-2xl border bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:bg-white/[0.06] ${
                    errors.description
                      ? "border-rose-400/60"
                      : "border-white/10 focus:border-cyan-300/40"
                  }`}
                />
                <p className="mt-2 text-xs text-slate-500">
                  Helpful details: stage, users, team size, technical stack, deadlines, and current blockers.
                </p>
                {errors.description ? (
                  <p className="mt-2 text-sm text-rose-300">{errors.description}</p>
                ) : null}
              </div>

              <div className="mt-4">
                <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="attachment">
                  Attachment
                </label>
                <label
                  htmlFor="attachment"
                  className={`flex cursor-pointer items-center justify-between gap-4 rounded-2xl border px-4 py-4 text-sm transition ${
                    errors.file
                      ? "border-rose-400/60 bg-rose-400/6"
                      : "border-white/10 bg-white/[0.04] hover:bg-white/[0.06]"
                  }`}
                >
                  <div>
                    <p className="font-medium text-white">
                      {selectedFile ? selectedFile.name : "Upload requirements, docs, wireframes, or references"}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">Accepted size up to 5MB</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
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
                <div className="mt-5 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-4 py-3 text-sm text-emerald-100">
                  {successMessage}
                </div>
              ) : null}

              {serverError ? (
                <div className="mt-5 rounded-2xl border border-rose-400/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">
                  {serverError}
                </div>
              ) : null}

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                <OutlineButton href={bookingUrl} tone="accent">
                  Book a 15-minute Call
                </OutlineButton>
                <OutlineButton href="mailto:aroraaryan512@gmail.com">Email Directly</OutlineButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919928496590?text=Hi%20Aryan%2C%20I%20want%20to%20discuss%20a%20software%20project."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 hidden items-center gap-3 rounded-full border border-emerald-300/20 bg-[#0d1a16]/85 px-4 py-3 text-sm font-semibold text-emerald-50 shadow-[0_18px_45px_rgba(0,0,0,0.32)] backdrop-blur-xl md:flex"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-300 text-slate-950">
        <ChatIcon />
      </span>
      WhatsApp
    </a>
  );
}

function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-40 px-4 sm:hidden">
      <div className="surface-panel mx-auto flex max-w-md items-center justify-between gap-3 rounded-full px-4 py-3">
        <div>
          <p className="text-xs text-slate-400">Open to roles and product work</p>
          <p className="text-sm font-semibold text-white">Talk about your team or product</p>
        </div>
        <a
          href="#contact"
          className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-slate-950"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
