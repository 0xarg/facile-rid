import { Suspense } from "react";
import { ProductsHero } from "@/app/components/sections/products/ProductsHero";
import { ProductGrid } from "@/app/components/sections/products/ProductGrid";

export const metadata = {
  title: "Shop NFC Smart Cards — Matte, Metal & Bundles",
  description:
    "Browse the full Facile RID collection: matte NFC cards, brushed metal cards, smart bands, and bundles. Every product ships with a free digital profile. From $29.",
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <Suspense fallback={null}>
        <ProductGrid />
      </Suspense>
    </>
  );
}
