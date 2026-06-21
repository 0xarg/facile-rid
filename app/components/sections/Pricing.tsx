import Image from "next/image";
import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { Button } from "@/app/components/ui/Button";
import { Badge } from "@/app/components/ui/Badge";
import { Reveal } from "@/app/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/app/components/motion/Stagger";
import { cn } from "@/app/lib/cn";

type Plan = {
  name: string;
  tagline: string;
  price: string;
  features: string[];
  image: { src: string; alt: string };
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "Standard Card",
    tagline: "Matte PVC. NFC and QR.",
    price: "From $29",
    features: ["Embedded NFC chip", "Laser QR backup", "Free digital profile"],
    image: { src: "/pricing/standard-card.png", alt: "Standard matte PVC NFC card" },
  },
  {
    name: "Metal Card",
    tagline: "Brushed metal. Heavy. Lasting.",
    price: "From $49",
    features: ["Brushed aluminum finish", "Laser-engraved QR", "Unlimited profile pages"],
    image: { src: "/devices/hero-card.png", alt: "Brushed aluminum NFC smart card with QR code" },
    featured: true,
  },
  {
    name: "Premium Bundle",
    tagline: "Two cards. Every finish.",
    price: "From $79",
    features: ["Two cards included", "All finishes available", "Priority support"],
    image: { src: "/pricing/premium-bundle.png", alt: "Premium bundle of two NFC cards" },
  },
];

const included = [
  {
    label: "Embedded NFC",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M5 12.55a11 11 0 0 1 14 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <circle cx="12" cy="20" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Free Profile",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    label: "Analytics",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    label: "Free Shipping",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M1 3h15v13H1z" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
];

function CheckIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-panel text-panel-foreground py-20 sm:py-28"
    >
      <Container size="full">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Pricing"
            title={
              <span className="font-display">
                Choose your <span className="text-gradient">card</span>.
              </span>
            }
            description="Standard, Metal, or both. Every card ships with a free digital profile and lifetime analytics — no subscription, ever."
          />
        </Reveal>

        <Stagger className="mx-auto mt-12 grid max-w-[1280px] grid-cols-1 gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <StaggerItem key={plan.name} className="h-full">
              {plan.featured ? (
                /* ── dark featured card ─────────────────────────────── */
                <div
                  className="group relative flex h-full flex-col rounded-2xl p-6 transition-transform duration-300 ease-out hover:-translate-y-1.5 sm:p-8"
                  style={{
                    background:
                      "linear-gradient(#0f0f0f, #0f0f0f) padding-box, linear-gradient(135deg, #e5242a, rgba(229,36,42,0.35)) border-box",
                    border: "1.5px solid transparent",
                  }}
                >
                  <Badge
                    tone="solid"
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 text-[10px] font-semibold uppercase tracking-[0.12em]"
                  >
                    Most popular
                  </Badge>

                  <div className="mb-6 h-[240px] w-full overflow-hidden rounded-xl bg-[#1a1a1a]">
                    <Image
                      src={plan.image.src}
                      alt={plan.image.alt}
                      width={600}
                      height={400}
                      className="h-full w-full object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                  </div>

                  <h3 className="text-lg font-semibold tracking-tight text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-1.5 text-[13px] text-white/45">
                    {plan.tagline}
                  </p>

                  <ul className="mt-4 flex flex-col gap-2">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-[13px] text-white/65"
                      >
                        <span className="shrink-0 text-[#e5242a]">
                          <CheckIcon />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-xl font-bold tracking-tight text-white">
                      {plan.price}
                    </span>
                    <a
                      href="/products"
                      className="inline-flex h-9 items-center gap-1.5 rounded-full bg-white px-5 text-[13px] font-semibold text-[#0a0a0a] shadow-[0_4px_16px_rgba(255,255,255,0.15)] transition hover:opacity-90"
                    >
                      Shop now
                      <ArrowIcon />
                    </a>
                  </div>
                </div>
              ) : (
                /* ── light card ─────────────────────────────────────── */
                <div
                  className="glass group relative flex h-full flex-col rounded-2xl p-6 transition-transform duration-300 ease-out hover:-translate-y-1.5 sm:p-8"
                >
                  <div className="mb-6 h-[240px] w-full overflow-hidden rounded-xl bg-[#f5f4f0]">
                    <Image
                      src={plan.image.src}
                      alt={plan.image.alt}
                      width={600}
                      height={400}
                      className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                  </div>

                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {plan.name}
                  </h3>
                  <p className="mt-1.5 text-[13px] text-foreground/50">
                    {plan.tagline}
                  </p>

                  <ul className="mt-4 flex flex-col gap-2">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-[13px] text-foreground/65"
                      >
                        <span className="shrink-0 text-foreground/60">
                          <CheckIcon />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex items-center justify-between border-t border-border pt-5">
                    <span className="text-xl font-bold tracking-tight">
                      {plan.price}
                    </span>
                    <Button href="/products" variant="primary" size="sm" className="group/btn px-6">
                      Shop now
                      <ArrowIcon />
                    </Button>
                  </div>
                </div>
              )}
            </StaggerItem>
          ))}
        </Stagger>

        {/* "What's included" row */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 max-w-[1280px]">
            <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b3b0a8]">
              Included with every card
            </p>
            <div className="flex flex-wrap items-center justify-center divide-x divide-border rounded-2xl border border-border bg-white px-2 py-4">
              {included.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 px-6 py-2 text-foreground/55"
                >
                  {item.icon}
                  <span className="text-[13px] font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 text-center text-[13px] text-panel-muted">
            Need cards for your whole team?{" "}
            <a
              href="/products"
              className="text-panel-foreground underline underline-offset-2 transition-opacity hover:opacity-80"
            >
              See bulk pricing →
            </a>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
