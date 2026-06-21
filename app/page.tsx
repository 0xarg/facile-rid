import type { Metadata } from "next";
import { Hero } from "./components/sections/Hero";
import { MarqueeStrip } from "./components/sections/MarqueeStrip";
import { Bento } from "./components/sections/Bento";
import { HowItWorks } from "./components/sections/HowItWorks";
import { Pricing } from "./components/sections/Pricing";
import { Testimonials } from "./components/sections/Testimonials";
import { FAQ } from "./components/sections/FAQ";
import { FinalCTA } from "./components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "NFC Smart Card & Free Digital Profile | Facile RID",
  description:
    "Tap your Facile NFC card on any phone to share your contact, links, and socials in 0.3s. Free digital profile, real-time analytics, matte or metal. Ships in 2–3 days.",
  openGraph: {
    title: "One tap. Unforgettable. | Facile RID NFC Smart Cards",
    description:
      "The card that ships to your door. The profile that updates from anywhere. 10,000+ professionals use Facile daily.",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <Bento />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
