import type { ChangeEvent, ReactNode } from "react";

import type { Capability, FormValues } from "./content";

export function SectionIntro({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-heading mt-4">{title}</h2>
      {copy ? <p className="section-copy mt-5">{copy}</p> : null}
    </div>
  );
}

export function CapabilityIcon({ icon, tone }: Pick<Capability, "icon" | "tone">) {
  const toneClass =
    tone === "cyan"
      ? "border-cyan-400/20 bg-cyan-400/8 text-cyan-100"
      : tone === "emerald"
        ? "border-emerald-400/20 bg-emerald-400/8 text-emerald-100"
        : "border-white/10 bg-white/[0.04] text-white";

  return (
    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${toneClass}`}>
      {icon === "stack" ? <StackIcon /> : null}
      {icon === "frontend" ? <FrontendIcon /> : null}
      {icon === "backend" ? <BackendIcon /> : null}
      {icon === "data" ? <DataIcon /> : null}
      {icon === "realtime" ? <RealtimeIcon /> : null}
      {icon === "ai" ? <AiIcon /> : null}
    </div>
  );
}

export function ProofCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="surface-panel rounded-3xl p-5">
      <div className="font-display text-2xl font-semibold tracking-tight text-white">{value}</div>
      <p className="mt-2 text-sm leading-6 text-slate-300">{label}</p>
    </div>
  );
}

export function ProjectStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
      <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">{label}</p>
      <p className="mt-2 text-sm leading-6 text-slate-200">{value}</p>
    </div>
  );
}

export function ContactPill({
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
      className="surface-panel rounded-2xl p-4 transition duration-200 hover:border-white/16 hover:bg-white/[0.06]"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">{label}</p>
      <p className="mt-2 text-sm font-medium text-white">{value}</p>
    </a>
  );
}

export function ActionCard({
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
      className="surface-panel rounded-[28px] p-5 transition duration-200 hover:-translate-y-0.5 hover:border-white/16 hover:bg-white/[0.06]"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      <p className="font-display text-lg font-semibold tracking-tight text-white">{title}</p>
      <p className="mt-2 text-sm leading-7 text-slate-300">{subtitle}</p>
      <p className="mt-4 text-sm font-medium text-cyan-100">{label}</p>
    </a>
  );
}

export function FormField({
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
        className={`w-full rounded-2xl border bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:bg-white/[0.06] ${
          error ? "border-rose-400/60" : "border-white/10 focus:border-cyan-300/40"
        }`}
      />
      {error ? <p className="mt-2 text-sm text-rose-300">{error}</p> : null}
    </div>
  );
}

export function SelectField({
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
        className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/40 focus:bg-white/[0.06]"
      >
        {options.map((option) => (
          <option key={option} value={option} className="bg-[#0d1224] text-white">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-sm leading-7 text-slate-300">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-200" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function StackIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3L20 7.5L12 12L4 7.5L12 3Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5.5 11.5L12 15L18.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5.5 15.5L12 19L18.5 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function FrontendIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="4.5" width="17" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.5 10L6.5 12L8.5 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.5 10L17.5 12L15.5 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.8 9L11.2 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function BackendIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="4" y="14" width="16" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 7H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 17H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 7H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 17H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function DataIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <ellipse cx="12" cy="6" rx="7" ry="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 6V12C5 13.7 8.1 15 12 15C15.9 15 19 13.7 19 12V6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 12V18C5 19.7 8.1 21 12 21C15.9 21 19 19.7 19 18V12" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function RealtimeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 12H7L10 7L14 17L17 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AiIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3L13.8 8.2L19 10L13.8 11.8L12 17L10.2 11.8L5 10L10.2 8.2L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M18 3V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19.5 4.5H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ChatIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 18L3 21V6C3 4.9 3.9 4 5 4H19C20.1 4 21 4.9 21 6V16C21 17.1 20.1 18 19 18H7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M8 10H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 14H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function OutlineButton({
  href,
  children,
  tone = "default",
}: {
  href: string;
  children: ReactNode;
  tone?: "default" | "accent";
}) {
  const toneClass =
    tone === "accent"
      ? "border-cyan-300/20 bg-cyan-300/8 text-cyan-50 hover:border-cyan-300/35 hover:bg-cyan-300/12"
      : "border-white/10 bg-white/[0.04] text-white hover:border-white/16 hover:bg-white/[0.06]";

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full border px-6 py-3.5 text-sm font-semibold transition duration-200 ${toneClass}`}
    >
      {children}
    </a>
  );
}

export function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-100"
    >
      {children}
    </a>
  );
}
