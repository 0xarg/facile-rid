import { FaqHero } from "@/app/components/sections/faq-page/FaqHero";
import { FaqProductStrip } from "@/app/components/sections/faq-page/FaqProductStrip";
import { FaqAccordion } from "@/app/components/sections/faq-page/FaqAccordion";
import { FaqContact } from "@/app/components/sections/faq-page/FaqContact";

export const metadata = {
  title: "FAQ — NFC Cards, Digital Profiles & Shipping",
  description:
    "Answers to common questions about Facile RID NFC smart cards: how NFC works, profile setup, shipping times, returns, compatibility, and more.",
};

export default function FaqPage() {
  return (
    <>
      <FaqHero />
      <FaqProductStrip />
      <FaqAccordion />
      <FaqContact />
    </>
  );
}
