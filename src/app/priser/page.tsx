import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import TrustBadges from "@/components/TrustBadges";
import JsonLd from "@/components/JsonLd";
import { plans, schemaIds, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Priser",
  description:
    "Se priser för IPTV Sverige: 3, 6 eller 12 månaders IPTV abonnemang. Inga bindningstider, direkt aktivering och support dygnet runt.",
  alternates: { canonical: "/priser" },
};

const pageUrl = `${siteConfig.url}/priser`;

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "IPTV Sverige",
  url: pageUrl,
  image: `${siteConfig.url}/opengraph-image`,
  brand: { "@type": "Brand", name: siteConfig.name },
  description:
    "IPTV-abonnemang med över 20 000 kanaler, filmer och serier i HD och 4K.",
  offers: plans.map((plan) => ({
    "@type": "Offer",
    name: plan.duration,
    price: plan.price,
    priceCurrency: "SEK",
    availability: "https://schema.org/InStock",
    url: pageUrl,
    seller: { "@id": schemaIds.organization },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Priser", item: pageUrl },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={productJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Header />
      <main id="main-content" className="flex-1">
        <PricingSection headingLevel={1} />
        <TrustBadges />
      </main>
      <Footer />
    </>
  );
}
