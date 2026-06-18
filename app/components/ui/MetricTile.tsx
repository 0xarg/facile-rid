import type { ReactNode } from "react";
import { cn } from "@/app/lib/cn";

/**
 * Apple-Health "summary tile" — a clean white rounded card with a small red
 * eyebrow/icon, a large value, and a caption. Compose several inside
 * `MetricGrid` for a dashboard-style row.
 */
export function MetricTile({
  value,
  label,
  icon,
  className,
}: {
  value: ReactNode;
  label: ReactNode;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "shadow-health flex flex-col gap-1 rounded-3xl border border-black/[0.06] bg-white p-5 sm:p-6",
        className
      )}
    >
      {icon ? (
        <span className="mb-1 inline-flex size-9 items-center justify-center rounded-full bg-[#e5242a]/[0.08] text-[#e5242a]">
          {icon}
        </span>
      ) : null}
      <span className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {value}
      </span>
      <span className="text-sm leading-snug text-foreground/55">{label}</span>
    </div>
  );
}

/** Responsive grid wrapper for a row of MetricTiles. */
export function MetricGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3", className)}>
      {children}
    </div>
  );
}
