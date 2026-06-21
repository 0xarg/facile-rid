"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/app/components/ui/Button";

const EASE = [0.22, 1, 0.36, 1] as const;

function ArrowIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function FinalCTA() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] text-white">
      {/* subtle red ambient behind */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-0 size-[700px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-[#e5242a]/[0.07] blur-[140px]"
      />

      {/* decorative card in background */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-60px] top-1/2 -z-0 w-[340px] -translate-y-1/2 rotate-[18deg] opacity-[0.07] sm:right-[-20px] lg:right-[8%] lg:opacity-[0.1]"
      >
        <Image
          src="/cards/hero-card.png"
          alt=""
          width={400}
          height={400}
          className="h-auto w-full"
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-[800px] flex-col items-center px-5 py-28 text-center sm:px-8 lg:py-36">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 32 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex flex-col items-center"
        >
          {/* floating card */}
          <motion.div
            animate={reduce ? undefined : { y: [0, -14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/cards/hero-card.png"
              alt="Facile matte black NFC smart card"
              width={360}
              height={360}
              sizes="(min-width: 640px) 280px, 65vw"
              className="h-auto w-[220px] drop-shadow-[0_40px_80px_rgba(229,36,42,0.25)] sm:w-[260px]"
            />
          </motion.div>

          <h2 className="font-display mt-14 text-balance text-[52px] font-extrabold leading-[0.96] tracking-[-0.04em] text-white sm:text-[72px] lg:text-[88px]">
            Your last business card.
          </h2>

          <p className="mt-6 max-w-sm text-pretty text-lg leading-relaxed text-white/45">
            Ships to your door in 2–3 days.
            <br />
            Your profile lives online, forever.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            {/* white-fill primary on dark background */}
            <a
              href="/products"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-[#0a0a0a] shadow-[0_8px_28px_rgba(255,255,255,0.15)] transition hover:opacity-90"
            >
              Shop Cards
              <ArrowIcon />
            </a>
            {/* ghost secondary */}
            <a
              href="/features"
              className="inline-flex h-12 items-center rounded-full border border-white/20 px-7 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
            >
              Create Free Profile
            </a>
          </div>

          <p className="mt-8 text-[12px] text-white/25">
            No subscription · 30-day returns · Free shipping over $50
          </p>
        </motion.div>
      </div>
    </section>
  );
}
