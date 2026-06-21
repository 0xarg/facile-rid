import { Container } from "@/app/components/ui/Container";
import { Media } from "@/app/components/ui/Media";
import { Button } from "@/app/components/ui/Button";
import { MetricGrid, MetricTile } from "@/app/components/ui/MetricTile";
import { Reveal } from "@/app/components/motion/Reveal";
import { Float } from "@/app/components/motion/Float";

const stats = [
  { value: "1 tap", label: "to share everything" },
  { value: "No app", label: "works on every phone" },
  { value: "QR backup", label: "laser-engraved" },
];

/**
 * Apple-minimal products hero. A centered editorial column — quiet eyebrow,
 * large display headline with a gradient accent word, one line of subcopy, and
 * a CTA pair — sits above a single large floating hero render with a soft
 * accent bloom. A thin hairline-divided stat row closes the section.
 */
export function ProductsHero() {
  return (
    <section className="relative overflow-hidden bg-background text-foreground">
      {/* Ambient accent bloom */}
      <div
        aria-hidden
        className="glow-red pointer-events-none absolute inset-x-0 top-0 -z-0 h-[600px]"
      />

      <Container size="lg" className="relative py-28 sm:py-32 lg:py-36">
        {/* Centered copy */}
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/45">
            <span aria-hidden className="size-1.5 rounded-full bg-accent" />
            The Facile collection
          </span>

          <h1 className="mt-7 text-balance font-display text-[60px] font-extrabold leading-[0.96] tracking-[-0.04em] text-[#0a0a0a] sm:text-[76px] md:text-[88px]">
            Carry one card.
            <br />
            Share <span className="text-gradient">everything</span>.
          </h1>

          <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-foreground/55">
            Matte, metal, or worn on your wrist — every Facile card ships with
            NFC, laser QR, and a free digital profile. No app required.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button href="#collection" variant="primary" size="lg">
              Browse the collection
            </Button>
            <Button href="/features" variant="secondary" size="lg">
              How it works
            </Button>
          </div>
        </Reveal>

        {/* Hero visual */}
        <Reveal delay={0.12} className="relative mt-16 sm:mt-20">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-[640px]">
            <div
              aria-hidden
              className="absolute inset-x-10 bottom-6 top-10 -z-0 rounded-[3rem] bg-accent/[0.1] blur-[120px]"
            />
            <Float amount={14} duration={7} className="relative size-full">
              <Media
                src="/images/phone-card.png"
                alt="Facile NFC card on the back of an iPhone"
                fill
                priority
                sizes="(min-width: 1024px) 640px, 90vw"
                className="object-contain drop-shadow-[0_50px_90px_rgba(0,0,0,0.6)]"
              />
            </Float>
          </div>
        </Reveal>

        {/* Apple-Health metric tiles */}
        <Reveal delay={0.2}>
          <MetricGrid className="mx-auto mt-16 max-w-2xl sm:mt-20">
            {stats.map((s) => (
              <MetricTile key={s.value} value={s.value} label={s.label} />
            ))}
          </MetricGrid>
        </Reveal>
      </Container>
    </section>
  );
}
