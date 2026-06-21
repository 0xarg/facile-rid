import { ShopHero } from "@/app/components/sections/shops/ShopHero";
import { TrustRow } from "@/app/components/sections/shops/TrustRow";
import { Catalog } from "@/app/components/sections/shops/Catalog";
import { PopularRow } from "@/app/components/sections/shops/PopularRow";
import { ShopCta } from "@/app/components/sections/shops/ShopCta";

export const metadata = {
  title: "The Facile Store — NFC Cards, Metal & Bundles",
  description:
    "Every Facile card finish in one place. Matte PVC, brushed metal, smart bands, and bundle deals. Free profile + analytics included. Free shipping over $50.",
};

export default function ShopsPage() {
  return (
    <>
      <ShopHero />
      <TrustRow />
      <Catalog />
      <PopularRow />
      <ShopCta />
    </>
  );
}
