"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import {
  bookingUrl,
  initialFormValues,
  opportunityTypes,
  type FormErrors,
  type FormValues,
} from "../content";
import { FormField, SelectField, BulletList, ActionCard } from "../shared";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export function Contact() {
  const [values, setValues] = useState<FormValues>(initialFormValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [serverError, setServerError] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] ?? null;
    setSelectedFile(file);
    if (file && file.size > MAX_FILE_SIZE) {
      setErrors((prev) => ({ ...prev, file: "Please upload a file smaller than 5MB." }));
    } else {
      setErrors((prev) => ({ ...prev, file: undefined }));
    }
  }

  function validateForm(): boolean {
    const nextErrors: FormErrors = {};

    if (!values.fullName.trim()) {
      nextErrors.fullName = "Full name is required.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!values.description.trim()) {
      nextErrors.description = "A brief message is required.";
    } else if (values.description.trim().length < 20) {
      nextErrors.description = "Please add a bit more context.";
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

    if (!validateForm()) return;

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

      setSuccessMessage(result.message || "Thanks — I'll get back to you within 24 hours.");
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
    <section id="contact" aria-labelledby="contact-heading" className="pb-28 pt-24 sm:pb-32">
      <div className="section-shell">
        <div className="surface-panel rounded-[36px] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left — availability and contact info */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="section-eyebrow">Contact</p>
                <h2
                  id="contact-heading"
                  className="section-heading mt-4 text-2xl sm:text-3xl"
                >
                  Let&apos;s talk.
                </h2>
                <p className="section-copy mt-4">
                  Open to full-time engineering roles, remote and hybrid. Also available for
                  serious freelance product builds. Replies within 24 hours.
                </p>
              </div>

              {/* Availability badge */}
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/8 px-4 py-2 text-sm text-emerald-200">
                <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                Open to opportunities
              </div>

              {/* Contact links */}
              <div className="grid gap-3">
                <ActionCard
                  title="Email"
                  subtitle="Best for role discussions and detailed project context."
                  href="mailto:aroraaryan512@gmail.com"
                  label="aroraaryan512@gmail.com"
                />
                <ActionCard
                  title="WhatsApp"
                  subtitle="For faster discussion or urgent conversations."
                  href="https://wa.me/919928496590?text=Hi%20Aryan%2C%20I%20want%20to%20discuss%20a%20software%20project."
                  label="+91 9928496590"
                />
                <ActionCard
                  title="Book a 15-minute Call"
                  subtitle="Useful when a live conversation is easier."
                  href={bookingUrl}
                  label="Schedule a call"
                />
              </div>

              {/* What I'm looking for */}
              <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-5">
                <p className="mb-3 text-sm font-semibold text-white">Looking for</p>
                <BulletList
                  items={[
                    "Full-time Software or Product Engineer roles (remote preferred)",
                    "Freelance product builds: backend-heavy, AI, or realtime systems",
                    "Collaborations where architecture and quality matter",
                  ]}
                />
              </div>
            </div>

            {/* Right — contact form */}
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
              className="rounded-[28px] border border-white/8 bg-black/20 p-5 sm:p-6"
            >
              <p className="font-display text-xl font-semibold tracking-tight text-white">
                Start the conversation
              </p>
              <p className="mt-1.5 text-sm text-slate-400">
                Serious messages get a reply within 24 hours.
              </p>

              {/* Honeypot — hidden from real users and screen readers */}
              <div className="hidden" aria-hidden="true" tabIndex={-1}>
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

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <FormField
                  label="Full Name"
                  name="fullName"
                  value={values.fullName}
                  onChange={(e) => handleChange(e)}
                  placeholder="Your full name"
                  required
                  error={errors.fullName}
                />
                <FormField
                  label="Email Address"
                  name="email"
                  value={values.email}
                  onChange={(e) => handleChange(e)}
                  placeholder="you@company.com"
                  type="email"
                  required
                  error={errors.email}
                />
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <FormField
                  label="Company / Org (optional)"
                  name="company"
                  value={values.company}
                  onChange={(e) => handleChange(e)}
                  placeholder="Company name"
                  error={errors.company}
                />
                <SelectField
                  label="Type of Opportunity"
                  name="opportunityType"
                  value={values.opportunityType}
                  onChange={(e) => handleChange(e)}
                  options={opportunityTypes}
                />
              </div>

              <div className="mt-4">
                <label
                  className="mb-2 block text-sm font-medium text-slate-200"
                  htmlFor="description"
                >
                  Message <span className="text-cyan-300" aria-label="required">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={6}
                  value={values.description}
                  onChange={handleChange}
                  placeholder="What role, project, or collaboration are you reaching out about?"
                  aria-required="true"
                  aria-describedby={errors.description ? "description-error" : undefined}
                  className={`w-full rounded-2xl border bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:bg-white/[0.06] ${
                    errors.description
                      ? "border-rose-400/60"
                      : "border-white/10 focus:border-cyan-300/40"
                  }`}
                />
                {errors.description ? (
                  <p id="description-error" role="alert" className="mt-2 text-sm text-rose-300">
                    {errors.description}
                  </p>
                ) : null}
              </div>

              {/* File attachment */}
              <div className="mt-4">
                <label
                  className="mb-2 block text-sm font-medium text-slate-200"
                  htmlFor="attachment"
                >
                  Attachment <span className="text-slate-500">(optional)</span>
                </label>
                <label
                  htmlFor="attachment"
                  className={`flex cursor-pointer items-center justify-between gap-4 rounded-2xl border px-4 py-4 text-sm transition ${
                    errors.file
                      ? "border-rose-400/60 bg-rose-400/6"
                      : "border-white/10 bg-white/[0.04] hover:bg-white/[0.06]"
                  }`}
                >
                  <span className="text-slate-400">
                    {selectedFile ? selectedFile.name : "Resume, brief, or wireframe"}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
                    Choose
                  </span>
                </label>
                <input
                  id="attachment"
                  name="attachment"
                  type="file"
                  onChange={handleFileChange}
                  className="sr-only"
                  aria-label="Upload attachment"
                />
                <p className="mt-1.5 text-xs text-slate-500">Max 5MB</p>
                {errors.file ? (
                  <p role="alert" className="mt-2 text-sm text-rose-300">{errors.file}</p>
                ) : null}
              </div>

              {/* Success / error messages */}
              {successMessage ? (
                <div
                  role="status"
                  className="mt-5 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-4 py-3 text-sm text-emerald-100"
                >
                  {successMessage}
                </div>
              ) : null}

              {serverError ? (
                <div
                  role="alert"
                  className="mt-5 rounded-2xl border border-rose-400/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-200"
                >
                  {serverError}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                aria-disabled={isSubmitting}
                className="mt-5 w-full rounded-full bg-white py-3.5 text-sm font-semibold text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending…" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp — desktop */}
      <a
        href="https://wa.me/919928496590?text=Hi%20Aryan%2C%20I%20want%20to%20discuss%20a%20software%20project."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 hidden items-center gap-3 rounded-full border border-emerald-300/20 bg-[#0d1a16]/85 px-4 py-3 text-sm font-semibold text-emerald-50 shadow-[0_18px_45px_rgba(0,0,0,0.32)] backdrop-blur-xl md:flex"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400 text-slate-950" aria-hidden="true">
          <WhatsAppIcon />
        </span>
        WhatsApp
      </a>

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-4 z-40 px-4 sm:hidden">
        <div className="surface-panel mx-auto flex max-w-md items-center justify-between gap-3 rounded-full px-4 py-3">
          <div>
            <p className="text-xs text-slate-400">Open to roles and product work</p>
            <p className="text-sm font-semibold text-white">Aryan Arora</p>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-slate-950"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 18L3 21V6C3 4.9 3.9 4 5 4H19C20.1 4 21 4.9 21 6V16C21 17.1 20.1 18 19 18H7Z" />
    </svg>
  );
}
