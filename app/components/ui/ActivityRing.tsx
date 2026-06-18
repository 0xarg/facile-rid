"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/app/lib/cn";

/**
 * Apple-Health "move ring" motif — concentric red rings that draw in on mount.
 * Each ring is a stroked circle; `progress` (0–1) sets how far it sweeps.
 * Purely decorative by default; pass `label`/`value` for a centered readout.
 */
type Ring = { progress: number; color: string };

const DEFAULT_RINGS: Ring[] = [
  { progress: 0.82, color: "#e5242a" },
  { progress: 0.66, color: "#ff5b5f" },
  { progress: 0.5, color: "#ff8a8d" },
];

export function ActivityRing({
  size = 160,
  rings = DEFAULT_RINGS,
  strokeWidth = 12,
  gap = 6,
  label,
  value,
  className,
}: {
  size?: number;
  rings?: Ring[];
  strokeWidth?: number;
  gap?: number;
  label?: ReactNode;
  value?: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const center = size / 2;

  return (
    <div
      className={cn("relative inline-grid place-items-center", className)}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90"
        aria-hidden
      >
        {rings.map((ring, i) => {
          const r = center - strokeWidth / 2 - i * (strokeWidth + gap);
          if (r <= 0) return null;
          const circumference = 2 * Math.PI * r;
          const dash = circumference * ring.progress;
          return (
            <g key={i}>
              {/* track */}
              <circle
                cx={center}
                cy={center}
                r={r}
                fill="none"
                stroke={ring.color}
                strokeOpacity={0.14}
                strokeWidth={strokeWidth}
              />
              {/* progress */}
              <motion.circle
                cx={center}
                cy={center}
                r={r}
                fill="none"
                stroke={ring.color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDasharray={`${dash} ${circumference}`}
                initial={reduce ? false : { strokeDasharray: `0 ${circumference}` }}
                whileInView={
                  reduce ? undefined : { strokeDasharray: `${dash} ${circumference}` }
                }
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 1.1, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              />
            </g>
          );
        })}
      </svg>
      {(value || label) && (
        <div className="absolute inset-0 grid place-items-center text-center">
          <div>
            {value ? (
              <div className="font-display text-2xl font-bold tracking-tight text-foreground">
                {value}
              </div>
            ) : null}
            {label ? (
              <div className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground/50">
                {label}
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
