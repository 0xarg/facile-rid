import Image from "next/image";
import { Reveal } from "@/app/components/motion/Reveal";
import { cn } from "@/app/lib/cn";

type Step = {
  image: string;
  alt: string;
  ordinal: string;
  tag: "Hardware" | "Software" | "Both";
  title: string;
  description: string;
  bg: string;
};

const steps: Step[] = [
  {
    image: "/how-it-works/order-your-card.png",
    alt: "Facile NFC smart card on a phone case",
    ordinal: "01",
    tag: "Hardware",
    title: "Order your card",
    description:
      "Pick matte PVC or brushed aluminum metal. Your card is precision-cut with an embedded NFC chip and a laser-engraved QR backup. Ships to your door in 2–3 days.",
    bg: "bg-background",
  },
  {
    image: "/how-it-works/customize-profile.png",
    alt: "Facile digital profile dashboard on a phone",
    ordinal: "02",
    tag: "Software",
    title: "Build your profile",
    description:
      "Add your contact details, social handles, portfolio, payment links — anything. Edit anytime from your dashboard. Changes go live in under 2 seconds, everywhere.",
    bg: "bg-panel",
  },
  {
    image: "/how-it-works/tap-share.png",
    alt: "Tapping Facile card to an iPhone — profile opens instantly",
    ordinal: "03",
    tag: "Both",
    title: "Tap & share",
    description:
      "Hold the card to any phone. The NFC chip opens your profile in the browser in under a second — no app, no friction, no follow-up needed. Your card just works.",
    bg: "bg-background",
  },
];

const tagStyles = {
  Hardware: "bg-[#0a0a0a]/6 text-[#0a0a0a]/45",
  Software: "bg-[#e5242a]/8 text-[#e5242a]/65",
  Both: "bg-[#e5242a]/8 text-[#e5242a]/65",
};

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-label="How Facile RID works">
      {/* section header */}
      <div className="bg-background px-5 pb-0 pt-24 text-center sm:px-8 sm:pt-32">
        <Reveal>
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#b3b0a8]">
            How it works
          </span>
          <h2 className="font-display mt-4 text-[44px] font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-[56px]">
            Up and running in{" "}
            <span className="text-gradient">three steps</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-foreground/55">
            From unboxing to your first tap — it takes about five minutes.
          </p>
        </Reveal>
      </div>

      {/* alternating full-bleed steps */}
      {steps.map((step, i) => {
        const isEven = i % 2 === 0;
        return (
          <div key={step.title} className={cn("py-20 sm:py-24", step.bg)}>
            <div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">

              {/* image side */}
              <Reveal
                delay={0.05}
                className={cn(
                  "relative",
                  isEven ? "lg:order-1" : "lg:order-2"
                )}
              >
                {/* large ordinal number backdrop */}
                <span
                  aria-hidden
                  className="section-number pointer-events-none absolute -left-2 -top-8 select-none opacity-[0.035]"
                >
                  {step.ordinal}
                </span>

                <div className="relative mx-auto aspect-square w-full max-w-[460px] overflow-hidden rounded-3xl bg-[#f0efeb] shadow-[0_32px_80px_rgba(0,0,0,0.14)]">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="(min-width: 1024px) 46vw, 90vw"
                    className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  />
                </div>
              </Reveal>

              {/* copy side */}
              <Reveal
                delay={0.1}
                className={cn(
                  "flex flex-col",
                  isEven ? "lg:order-2" : "lg:order-1"
                )}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "inline-flex rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em]",
                      tagStyles[step.tag]
                    )}
                  >
                    {step.tag}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#c5c2ba]">
                    Step {step.ordinal}
                  </span>
                </div>

                <h3 className="font-display mt-5 text-[38px] font-extrabold leading-[1.04] tracking-tight text-foreground sm:text-[48px]">
                  {step.title}
                </h3>

                <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-foreground/60">
                  {step.description}
                </p>
              </Reveal>
            </div>
          </div>
        );
      })}
    </section>
  );
}
