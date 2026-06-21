"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/app/components/ui/Button";
import { Tilt } from "@/app/components/motion/Float";
import { ActivityRing } from "@/app/components/ui/ActivityRing";
import { MetricGrid, MetricTile } from "@/app/components/ui/MetricTile";

const EASE = [0.22, 1, 0.36, 1] as const;

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-transform group-hover:translate-x-0.5"
      aria-hidden
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

const METRICS = [
  { value: "10,000+", label: "professionals tapping daily" },
  { value: "0.3s", label: "to share everything" },
  { value: "Free", label: "digital profile, forever" },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-label="NFC smart card digital profile hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-background px-5 pt-20 pb-16 text-center sm:px-8"
    >
      {/* ambient glow behind the card */}
      <div
        aria-hidden
        className="glow-red pointer-events-none absolute inset-x-0 top-1/4 -z-0 h-[600px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 -z-0 size-[420px] translate-x-1/3 rounded-full bg-[#e5242a]/[0.06] blur-[130px]"
      />

      {/* eyebrow badge */}
      <motion.span
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="inline-flex items-center gap-2 rounded-full border border-border bg-foreground/[0.04] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/60"
      >
        <span className="size-1.5 rounded-full bg-[#e5242a]" aria-hidden />
        NFC smart card + digital profile
      </motion.span>

      {/* card visual */}
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.88, y: 24 }}
        animate={reduce ? undefined : { opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.95, delay: 0.06, ease: EASE }}
        className="relative z-10 mt-10 w-full max-w-[520px]"
      >
        <Tilt max={7} className="w-full">
          <motion.div
            animate={reduce ? undefined : { y: [0, -14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <Image
              src="/cards/hero-card.png"
              alt="Facile matte black NFC smart card with laser-engraved QR code"
              width={600}
              height={600}
              priority
              sizes="(min-width: 640px) 520px, 90vw"
              className="h-auto w-full drop-shadow-[0_60px_120px_rgba(0,0,0,0.7)]"
            />

            {/* profile preview chip — top left */}
            <motion.div
              initial={reduce ? false : { opacity: 0, x: -16, y: 8 }}
              animate={reduce ? undefined : { opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
              className="chip-glass absolute -left-4 top-[18%] flex items-center gap-2.5 px-3.5 py-2.5 sm:-left-8"
            >
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#e5242a] text-[11px] font-bold text-white">
                A
              </span>
              <div className="text-left">
                <p className="text-[11px] font-semibold leading-none text-[#0a0a0a]">
                  Alex M.
                </p>
                <p className="mt-0.5 text-[10px] leading-none text-[#777]">
                  facile.me/alex · 6 links
                </p>
              </div>
            </motion.div>

            {/* activity ring chip — right side */}
            <motion.div
              initial={reduce ? false : { opacity: 0, x: 16, y: 8 }}
              animate={reduce ? undefined : { opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85, ease: EASE }}
              className="chip-glass absolute -right-4 bottom-[18%] p-3 sm:-right-8"
            >
              <ActivityRing size={88} strokeWidth={8} gap={4} value="98%" label="Reach" />
            </motion.div>
          </motion.div>
        </Tilt>
      </motion.div>

      {/* headline */}
      <motion.h1
        initial={reduce ? false : { opacity: 0, y: 28 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.18, ease: EASE }}
        className="font-display mt-10 text-balance text-[64px] font-extrabold leading-[0.94] tracking-[-0.04em] text-foreground sm:text-[88px] lg:text-[112px]"
      >
        One tap.
        <br />
        <span className="text-gradient">Unforgettable.</span>
      </motion.h1>

      {/* sub-copy */}
      <motion.p
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.26, ease: EASE }}
        className="mt-6 max-w-[480px] text-pretty text-lg leading-relaxed text-foreground/60"
      >
        The card that ships to your door. The profile that updates from
        anywhere. Share everything in under a second — no app required.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.34, ease: EASE }}
        className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
      >
        <Button href="/products" variant="primary" size="lg" className="group">
          Order your card
          <ArrowIcon />
        </Button>
        <Button href="/#how-it-works" variant="secondary" size="lg">
          See how it works
        </Button>
      </motion.div>

      {/* metrics */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.42, ease: EASE }}
        className="mt-12 w-full max-w-lg"
      >
        <MetricGrid>
          {METRICS.map((m) => (
            <MetricTile key={m.label} value={m.value} label={m.label} />
          ))}
        </MetricGrid>
      </motion.div>
    </section>
  );
}
