import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "mono";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const baseStyles = "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors";
  
  const variants = {
    default: "bg-surface-200 text-white hover:bg-surface-300",
    secondary: "bg-cyanGlow/10 text-cyanGlow hover:bg-cyanGlow/20",
    outline: "text-slate-300 border border-surface-200",
    mono: "font-mono font-medium text-[0.75rem] text-slate-300 bg-white/[0.04] border border-white/[0.08] rounded-[6px] px-2 py-1 tracking-normal hover:bg-white/[0.07] hover:border-white/[0.14]",
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props} />
  );
}

export { Badge };
