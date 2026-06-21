import { Container } from "@/app/components/ui/Container";
import { Button } from "@/app/components/ui/Button";
import { Media } from "@/app/components/ui/Media";
import { Reveal } from "@/app/components/motion/Reveal";
import { Float, Tilt } from "@/app/components/motion/Float";

const stats: [string, string][] = [
  ["< 2s", "to update everywhere"],
  ["0", "apps to download"],
  ["1 tap", "to share it all"],
];

export function FeaturesHero() {
  return (
    <section className="relative overflow-hidden bg-background pb-20 pt-24 sm:pt-28">
      {/* ambient glow */}
      <div
        aria-hidden
        className="glow-red pointer-events-none absolute inset-x-0 top-0 -z-0 h-[600px] opacity-80"
      />

      <Container
        size="full"
        className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"
      >
        {/* copy */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-border bg-foreground/[0.04] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/55">
              All Features
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-display mt-6 text-balance text-[64px] font-extrabold leading-[0.96] tracking-[-0.04em] text-foreground sm:text-[80px] lg:text-[96px]">
              One tap.
              <br />
              <span className="text-gradient">Everything</span> you are.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-foreground/60">
              A matte or metal card you tap on any phone. A profile you control
              from anywhere — links, socials, contact, and live analytics. All
              connected, always current, no app to install.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
              <Button href="/products" variant="primary" size="lg">
                Shop Cards
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Button>
              <Button href="/#pricing" variant="secondary" size="lg">
                View Pricing
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="mt-12 grid w-full max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.map(([v, k]) => (
                <div key={k}>
                  <dt className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">
                    {v}
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-foreground/45">{k}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* visual */}
        <Reveal delay={0.08}>
          <Float amount={12} duration={7}>
            <Tilt
              max={7}
              className="relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden rounded-[28px] bg-[#e8e7e3] ring-1 ring-black/[0.06] shadow-[0_40px_100px_rgba(0,0,0,0.16)]"
            >
              {/* glow-red-sm behind image */}
              <div aria-hidden className="glow-red-sm pointer-events-none absolute inset-0 -z-0" />

              <Media
                src="/devices/phone-cards.png"
                alt="A matte black Facile NFC smart card adhered to the back of an iPhone, profile opens instantly on tap"
                fill
                priority
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="aspect-square object-cover"
              />

              {/* profile URL chip */}
              <div className="chip-glass absolute left-4 top-4 flex items-center gap-2 px-3 py-2">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#e5242a] text-[9px] font-bold text-white">
                  R
                </span>
                <p className="font-mono text-[11px] font-medium text-[#0a0a0a]">
                  facile.me/you
                </p>
              </div>

              {/* analytics chip */}
              <div className="chip-glass absolute bottom-4 right-4 flex items-center gap-2 px-3 py-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#e5242a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
                <div>
                  <p className="text-[11px] font-semibold leading-none text-[#0a0a0a]">47 taps today</p>
                  <p className="mt-0.5 text-[9px] leading-none text-[#e5242a]">↑ 23%</p>
                </div>
              </div>
            </Tilt>
          </Float>
        </Reveal>
      </Container>
    </section>
  );
}
