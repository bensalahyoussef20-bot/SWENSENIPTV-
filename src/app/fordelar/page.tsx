import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/data";
import { pageOpenGraph } from "@/lib/seo";

const title = "Fördelar";
const description =
  "Därför väljer tusentals svenskar IPTV Sverige: 20 000+ kanaler, ingen buffring, HD/4K-kvalitet, multi-screen och pengarna-tillbaka-garanti.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/fordelar" },
  openGraph: pageOpenGraph("/fordelar", title, description),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Fördelar",
      item: `${siteConfig.url}/fordelar`,
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <Header />
      <main id="main-content" className="flex-1">
        <BenefitsSection headingLevel={1} />
      </main>
      <Footer />
    </>
  );
}
