import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/app/components/ui/Container";
import { Card } from "@/app/components/ui/Card";
import { Reveal } from "@/app/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/app/components/motion/Stagger";
import { ActivityRing } from "@/app/components/ui/ActivityRing";
import { cn } from "@/app/lib/cn";

/* ── shared card shell ───────────────────────────────────────────────── */

function BentoCard({
  tag,
  className,
  children,
}: {
  tag: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <StaggerItem className={cn("h-full", className)}>
      <Card
        tone="panel"
        className="group/card flex h-full flex-col gap-3 overflow-hidden rounded-[22px] bg-[#f7f6f2] p-7 transition duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.14)]"
      >
        <p className="text-[10px] font-semibold uppercase leading-none tracking-[0.18em] text-[#b3b0a8]">
          {tag}
        </p>
        {children}
      </Card>
    </StaggerItem>
  );
}

/* ── card product photo — real render on an iPhone ───────────────────── */

function CardVisual() {
  return (
    <div className="relative mt-2 flex flex-1 items-end justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#f0efeb] to-[#e6e4dd]">
      <Image
        src="/devices/phone-cards.png"
        alt="Facile card attached to the back of an iPhone, ready to tap"
        width={760}
        height={520}
        sizes="(min-width: 1024px) 540px, 90vw"
        className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover/card:scale-[1.03]"
      />
    </div>
  );
}

/* ── icons ───────────────────────────────────────────────────────────── */

function Icon({ d }: { d: string | string[] }) {
  const paths = Array.isArray(d) ? d : [d];
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#e5242a"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {paths.map((p, i) => <path key={i} d={p} />)}
    </svg>
  );
}

function IconChip({ children }: { children: ReactNode }) {
  return (
    <span className="flex size-10 items-center justify-center rounded-xl border border-[#e5242a]/12 bg-[#e5242a]/[0.07]">
      {children}
    </span>
  );
}

/* ── section ─────────────────────────────────────────────────────────── */

const ANALYTICS_BARS = [18, 32, 27, 52, 40, 68, 48, 74, 60, 85, 63, 100];

/* ── ecosystem journey card ──────────────────────────────────────────── */

function EcosystemCard() {
  const steps = [
    {
      icon: "📦",
      label: "Card ships",
      sub: "Matte or metal, 2–3 days",
      tag: "Hardware",
    },
    {
      icon: "📱",
      label: "Tap any phone",
      sub: "NFC or QR, zero friction",
      tag: "Hardware",
    },
    {
      icon: "🔗",
      label: "Profile opens",
      sub: "Your links, socials, contact",
      tag: "Software",
    },
    {
      icon: "📊",
      label: "See analytics",
      sub: "Taps, clicks, locations",
      tag: "Software",
    },
  ];

  return (
    <StaggerItem className="sm:col-span-2 lg:col-span-4">
      <Card
        tone="panel"
        className="overflow-hidden rounded-[22px] bg-[#f7f6f2] p-7"
      >
        <p className="text-[10px] font-semibold uppercase leading-none tracking-[0.18em] text-[#b3b0a8]">
          The full journey
        </p>
        <h3 className="mt-3 text-[20px] font-bold tracking-tight text-[#0a0a0a]">
          Card arrives. Profile goes live. You stay in control.
        </h3>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.label} className="relative flex flex-col gap-2">
              {/* connector line */}
              {i < steps.length - 1 && (
                <div
                  aria-hidden
                  className="absolute left-[calc(100%_+_6px)] top-5 hidden h-px w-[calc(100%_-_12px)] bg-black/[0.07] sm:block"
                  style={{ transform: "translateX(-50%)" }}
                />
              )}
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xl shadow-[0_1px_4px_rgba(0,0,0,0.08)]">
                {step.icon}
              </div>
              <p className="text-[13px] font-semibold leading-snug text-[#0a0a0a]">
                {step.label}
              </p>
              <p className="text-[11px] leading-relaxed text-[#888]">
                {step.sub}
              </p>
              <span
                className={cn(
                  "mt-auto inline-flex w-fit rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.1em]",
                  step.tag === "Hardware"
                    ? "bg-[#0a0a0a]/6 text-[#0a0a0a]/50"
                    : "bg-[#e5242a]/8 text-[#e5242a]/70"
                )}
              >
                {step.tag}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </StaggerItem>
  );
}

export function Bento() {
  return (
    <section id="features-overview" className="bg-panel py-24 text-panel-foreground sm:py-32">
      <Container size="full">
        {/* header */}
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#b3b0a8]">
              Everything in one
            </span>
            <h2 className="font-display mt-4 text-[52px] font-extrabold leading-[1.02] tracking-tight text-panel-foreground sm:text-[64px] md:text-[72px]">
              The card.
              <br />The{" "}
              <span className="text-gradient">profile</span>.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-panel-muted">
              Two products that act like one. The card you hand over, the
              profile you control.
            </p>
          </div>
        </Reveal>

        {/* bento grid */}
        <Stagger className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* THE CARD — big card, spans 2 cols + 2 rows */}
          <BentoCard
            tag="The card"
            className="sm:col-span-2 lg:col-span-2 lg:row-span-2 lg:min-h-[460px]"
          >
            <h3 className="text-[26px] font-bold leading-tight tracking-tight text-[#0a0a0a]">
              Tap. They have everything.
            </h3>
            <p className="max-w-[340px] text-sm leading-relaxed text-[#777]">
              Embedded NFC chip. Laser-engraved QR fallback. Works on every
              iPhone and Android — opens in any browser, zero friction.
            </p>
            <CardVisual />
          </BentoCard>

          {/* ZERO FRICTION */}
          <BentoCard tag="Zero friction">
            <IconChip>
              <Icon d={["M5 12.55a11 11 0 0 1 14 0","M1.42 9a16 16 0 0 1 21.16 0","M8.53 16.11a6 6 0 0 1 6.95 0","M12 20h.01"]} />
            </IconChip>
            <h3 className="mt-1 text-xl font-bold tracking-tight text-[#0a0a0a]">
              No app. Ever.
            </h3>
            <p className="text-[13px] leading-relaxed text-[#777]">
              Opens in Safari or Chrome. No download. No signup.
            </p>
          </BentoCard>

          {/* SPEED */}
          <BentoCard tag="Speed">
            <div className="flex flex-1 flex-col items-center justify-center gap-3 py-2">
              <ActivityRing size={120} strokeWidth={10} gap={4} value="0.8s" label="To open" />
              <p className="text-center text-[13px] leading-snug text-[#777]">
                Profile opens in under a second.
              </p>
            </div>
          </BentoCard>

          {/* THE PROFILE — wide card, spans 2 cols */}
          <BentoCard tag="The profile" className="sm:col-span-2 lg:col-span-2">
            <div className="flex flex-1 items-start gap-5">
              <div className="flex-1">
                <h3 className="text-[22px] font-bold leading-snug tracking-tight text-[#0a0a0a]">
                  Your link in bio. Finally worth sharing.
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#777]">
                  Add links, social handles, portfolio, payment links —
                  anything. Update anytime from your dashboard.
                </p>
              </div>
              {/* phone mockup */}
              <div className="hidden h-[140px] w-20 shrink-0 rounded-[14px] border border-black/10 bg-[#f0eee8] p-[7px] sm:flex sm:flex-col sm:gap-[3px]">
                <span className="h-2.5 w-full rounded bg-black/[0.07]" />
                <span className="h-[7px] w-3/4 rounded bg-black/5" />
                <span className="h-[7px] w-3/5 rounded bg-black/5" />
                <span className="h-[7px] w-2/3 rounded bg-black/5" />
                <span className="h-[7px] w-1/2 rounded bg-black/5" />
                <span className="mt-1 h-[22px] w-full rounded-md bg-[#e5242a]/[0.12]" />
                <span className="h-[22px] w-full rounded-md bg-[#ff8a8d]/[0.07]" />
              </div>
            </div>
          </BentoCard>

          {/* ALWAYS CURRENT */}
          <BentoCard tag="Always current">
            <IconChip>
              <Icon d={["M21 2v6h-6","M3 12a9 9 0 0 1 15-6.7L21 8","M3 22v-6h6","M21 12a9 9 0 0 1-15 6.7L3 16"]} />
            </IconChip>
            <h3 className="mt-1 text-lg font-bold tracking-tight text-[#0a0a0a]">
              Update once. Everywhere.
            </h3>
            <p className="text-xs leading-relaxed text-[#777]">
              Change your profile any time. Your physical card always shows the
              latest.
            </p>
          </BentoCard>

          {/* BACKUP */}
          <BentoCard tag="Backup">
            <IconChip>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e5242a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <path d="M14 14h3v3" />
                <path d="M21 14v7h-7v-3" />
              </svg>
            </IconChip>
            <h3 className="mt-1 text-lg font-bold tracking-tight text-[#0a0a0a]">
              No NFC? QR.
            </h3>
            <p className="text-xs leading-relaxed text-[#777]">
              Every card ships with a laser-engraved QR. Works on any camera
              app.
            </p>
          </BentoCard>

          {/* COMPATIBILITY */}
          <BentoCard tag="Compatibility">
            <IconChip>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e5242a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="5" y="2" width="14" height="20" rx="2.5" />
                <path d="M11 18h2" />
              </svg>
            </IconChip>
            <h3 className="mt-1 text-lg font-bold tracking-tight text-[#0a0a0a]">
              Every phone.
            </h3>
            <p className="text-xs leading-relaxed text-[#777]">
              iPhone, Android, or anything with a camera. No exceptions.
            </p>
          </BentoCard>

          {/* ANALYTICS — taller card */}
          <BentoCard tag="Analytics" className="lg:row-span-2">
            <IconChip>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e5242a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
            </IconChip>
            <h3 className="mt-1 text-xl font-bold tracking-tight text-[#0a0a0a]">
              Know who&apos;s connecting.
            </h3>
            <p className="text-[13px] leading-relaxed text-[#777]">
              Real-time tap tracking, link clicks, and locations. Clean, private
              dashboard.
            </p>
            <div className="mt-auto rounded-[10px] bg-[#efede7] px-3 pb-1 pt-3">
              <p className="text-[10px] uppercase tracking-[0.09em] text-[#aaa]">
                Taps / 12 weeks
              </p>
              <div className="mt-2 flex h-[60px] items-end gap-[3px]">
                {ANALYTICS_BARS.map((h, i) => (
                  <div
                    key={i}
                    className={cn("flex-1 rounded-t-[3px]", i >= 9 ? "animate-bar" : "")}
                    style={{
                      height: `${h}%`,
                      animationDelay: `${i * 0.06}s`,
                      backgroundImage:
                        i >= 9
                          ? "linear-gradient(to bottom, #e5242a, rgba(229,36,42,0.35))"
                          : undefined,
                      backgroundColor: i >= 9 ? undefined : "rgba(0,0,0,0.07)",
                    }}
                  />
                ))}
              </div>
            </div>
          </BentoCard>

          {/* ECOSYSTEM JOURNEY — full width bottom card */}
          <EcosystemCard />
        </Stagger>
      </Container>
    </section>
  );
}
