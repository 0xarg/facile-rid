"use client";

import { motion, useReducedMotion } from "motion/react";
import { Media } from "@/app/components/ui/Media";
import { Button } from "@/app/components/ui/Button";
import { MetricGrid, MetricTile } from "@/app/components/ui/MetricTile";

const EASE = [0.22, 1, 0.36, 1] as const;

export function DevicesHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-background pt-20 sm:pt-24">
      {/* ambient glow */}
      <div
        aria-hidden
        className="glow-red pointer-events-none absolute inset-x-0 top-0 -z-0 h-[560px] opacity-70"
      />

      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-12 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-20">
        {/* product visual */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.92, rotate: -4 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: EASE }}
          className="relative order-2 mx-auto flex w-full max-w-[480px] justify-center lg:order-1"
        >
          <motion.div
            animate={reduce ? undefined : { y: [0, -16, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full"
          >
            <Media
              src="/devices/hero-card.png"
              alt="Facile NFC smart cards — matte and metal options with embedded NFC chip and laser-engraved QR code"
              width={560}
              height={560}
              priority
              sizes="(min-width: 1024px) 480px, 85vw"
              className="h-auto w-full drop-shadow-[0_50px_90px_rgba(0,0,0,0.6)]"
            />

            {/* profile preview chip */}
            <motion.div
              initial={reduce ? false : { opacity: 0, x: -12, y: 8 }}
              animate={reduce ? undefined : { opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: EASE }}
              className="chip-glass absolute -left-3 top-[22%] flex items-center gap-2.5 px-3 py-2.5 sm:-left-6"
            >
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#0a0a0a] text-[10px] font-bold text-white">
                J
              </span>
              <div className="text-left">
                <p className="text-[11px] font-semibold leading-none text-[#0a0a0a]">Jordan S.</p>
                <p className="mt-0.5 text-[10px] leading-none text-[#777]">facile.me/jordan</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* copy */}
        <div className="order-1 flex flex-col items-start text-left lg:order-2">
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-foreground/[0.04] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/55"
          >
            <span className="size-1.5 rounded-full bg-[#e5242a]" aria-hidden />
            NFC smart cards
          </motion.span>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.06, ease: EASE }}
            className="font-display mt-6 text-balance text-[56px] font-extrabold leading-[0.96] tracking-[-0.04em] text-foreground sm:text-[72px] lg:text-[84px]"
          >
            Your profile,
            <br />
            <span className="text-gradient">one tap away</span>.
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.14, ease: EASE }}
            className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-foreground/60"
          >
            The card arrives. The profile goes live. Smart NFC cards that
            instantly share your contact, portfolio, and social media — no apps
            required.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: EASE }}
            className="mt-9 flex flex-col items-start gap-3 sm:flex-row"
          >
            <Button href="/checkout?product=metal" variant="primary" size="lg" className="group">
              Order Your Card
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
            </Button>
            <Button href="#how-it-works" variant="secondary" size="lg">
              See How It Works
            </Button>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            className="mt-12 w-full max-w-lg"
          >
            <MetricGrid>
              <MetricTile value="0.1s" label="tap to share" />
              <MetricTile value="10k+" label="cards shipped" />
              <MetricTile value="Free" label="digital profile" />
            </MetricGrid>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
