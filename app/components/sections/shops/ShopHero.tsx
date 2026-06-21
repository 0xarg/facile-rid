import { Container } from "@/app/components/ui/Container";
import { Button } from "@/app/components/ui/Button";
import { Media } from "@/app/components/ui/Media";
import { Reveal } from "@/app/components/motion/Reveal";
import { Float, Tilt } from "@/app/components/motion/Float";

/** Dark hero for /shops — the store entrance, with a floating card render. */
export function ShopHero() {
  return (
    <section className="relative overflow-hidden bg-background pt-28 pb-20 text-foreground sm:pt-32 sm:pb-24">
      {/* ambient brand glow */}
      <div
        aria-hidden
        className="glow-red pointer-events-none absolute inset-x-0 top-0 -z-0 h-[600px]"
      />
      <Container size="xl" className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <Reveal className="flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-foreground/[0.04] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <span className="size-1.5 rounded-full bg-accent" />
              The Facile Store
            </span>
            <h1 className="mt-6 font-display text-[56px] font-extrabold leading-[0.96] tracking-[-0.04em] sm:text-[68px] md:text-[80px]">
              Every card.
              <br />
              Every finish.{" "}
              <span className="text-gradient">One profile</span>.
            </h1>
            <p className="mt-7 max-w-md text-balance text-lg leading-relaxed text-muted-foreground">
              Pick your finish, make it yours, and your digital profile goes
              live the second it lands in your hands. Cards, metal, bands —
              built to be tapped.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="#catalog" variant="primary" size="lg">
                Shop the lineup
              </Button>
              <Button href="#popular" variant="secondary" size="lg">
                See what&apos;s trending
              </Button>
            </div>
            <p className="mt-6 text-[13px] text-muted">
              From $29 · Free shipping over $50 · Profile live instantly
            </p>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <Float amount={14} duration={7}>
              <Tilt max={8} className="mx-auto w-full max-w-[480px]">
                <Media
                  src="/images/card.png"
                  alt="Facile NFC smart card, matte black, floating"
                  width={960}
                  height={960}
                  priority
                  sizes="(max-width: 1024px) 80vw, 480px"
                  className="h-auto w-full object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
                />
              </Tilt>
            </Float>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
