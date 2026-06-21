const hardwareItems = [
  "NFC CHIP EMBEDDED",
  "BRUSHED METAL OPTION",
  "LASER QR FALLBACK",
  "SHIPS IN 2–3 DAYS",
  "MATTE & METAL FINISH",
  "30-DAY RETURNS",
  "WORKS ON ANY PHONE",
  "AEROSPACE ALUMINIUM",
];

const softwareItems = [
  "FREE DIGITAL PROFILE",
  "REAL-TIME ANALYTICS",
  "UPDATE LINKS ANYTIME",
  "CUSTOM VANITY URL",
  "TAP TRACKING",
  "NO APP REQUIRED",
  "INSTANT UPDATES",
  "10,000+ PROFESSIONALS",
];

function Track({ items, separator = "✦" }: { items: string[]; separator?: string }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden>
      {items.map((label) => (
        <span key={label} className="flex items-center">
          <span className="px-5 text-[10px] font-semibold uppercase tracking-[0.15em] text-foreground/25">
            {label}
          </span>
          <span className="text-[9px] text-foreground/12">{separator}</span>
        </span>
      ))}
    </div>
  );
}

export function MarqueeStrip() {
  return (
    <div
      className="overflow-hidden border-y border-border bg-foreground/[0.02]"
      aria-hidden
    >
      {/* rail 1 — hardware benefits, left-to-right */}
      <div className="flex w-max animate-marquee py-2.5">
        <Track items={hardwareItems} />
        <Track items={hardwareItems} />
      </div>

      {/* rail 2 — software benefits, right-to-left */}
      <div className="flex w-max animate-marquee-reverse border-t border-border/60 py-2.5">
        <Track items={softwareItems} separator="·" />
        <Track items={softwareItems} separator="·" />
      </div>
    </div>
  );
}
