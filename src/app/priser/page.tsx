import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import TrustBadges from "@/components/TrustBadges";
import JsonLd from "@/components/JsonLd";
import { plans, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Priser",
  description:
    "Se priser för IPTV Sverige: 3, 6 eller 12 månaders IPTV abonnemang. Inga bindningstider, direkt aktivering och support dygnet runt.",
  alternates: { canonical: "/priser" },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "IPTV Sverige",
  brand: siteConfig.name,
  description:
    "IPTV-abonnemang med över 20 000 kanaler, filmer och serier i HD och 4K.",
  offers: plans.map((plan) => ({
    "@type": "Offer",
    name: plan.duration,
    price: plan.price,
    priceCurrency: "SEK",
    availability: "https://schema.org/InStock",
  })),
};

export default function Page() {
  return (
    <>
      <JsonLd data={productJsonLd} />
      <Header />
      <main id="main-content" className="flex-1">
        <PricingSection headingLevel={1} />
        <TrustBadges />
      </main>
      <Footer />
    </>
  );
}
