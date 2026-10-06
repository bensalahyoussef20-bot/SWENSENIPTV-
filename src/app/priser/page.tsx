import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import TrustBadges from "@/components/TrustBadges";
import JsonLd from "@/components/JsonLd";
import { devices, plans, schemaIds, siteConfig, waLinks } from "@/lib/data";
import { pageOpenGraph } from "@/lib/seo";

const title = "Priser";
const description =
  "Se priser för IPTV Sverige: 3, 6 eller 12 månaders IPTV abonnemang. Inga bindningstider, direkt aktivering och support dygnet runt.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/priser" },
  openGraph: pageOpenGraph("/priser", title, description),
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

const plansByPrice = [...plans].sort((a, b) => a.price - b.price);
const lowestPerMonth = Math.min(...plans.map((p) => p.perMonth));
const highestPerMonth = Math.max(...plans.map((p) => p.perMonth));
const linkClass = "text-primary hover:underline";

export default function Page() {
  return (
    <>
      <JsonLd data={productJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Header />
      <main id="main-content" className="flex-1">
        <PricingSection headingLevel={1} />
        <TrustBadges />

        <section className="py-16">
          <div className="container-shell max-w-3xl">
            <h2 className="text-2xl font-bold">Så fungerar våra IPTV-abonnemang</h2>
            <p className="mt-4 text-muted">
              Hos Sweden IPTV väljer du själv hur länge du vill ha tjänsten. Du
              betalar ett totalpris för hela perioden, och det finns ingen
              bindningstid eller dolda avgifter. Så här ser perioderna ut:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
              {plansByPrice.map((plan) => (
                <li key={plan.id}>
                  <span className="font-semibold text-foreground">
                    {plan.duration}:
                  </span>{" "}
                  {plan.price} kr totalt, cirka {plan.perMonth} kr/mån
                </li>
              ))}
            </ul>
            <p className="mt-4 text-muted">
              12 månader ger det lägsta priset per månad.
            </p>

            <h2 className="mt-14 text-2xl font-bold">Det här ingår i abonnemanget</h2>
            <p className="mt-4 text-muted">
              Exakt vad som ingår i varje period ser du i korten ovan.
              Gemensamt för alla IPTV-abonnemang är:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
              <li>Sport, filmer och serier</li>
              <li>HD- och 4K-kvalitet</li>
              <li>Fungerar på alla vanliga enheter</li>
              <li>Support via WhatsApp dygnet runt</li>
              <li>Ingen bindningstid</li>
            </ul>
            <p className="mt-4 text-muted">
              Med 12 månader får du även full VOD-tillgång, premiumsupport och
              direkt aktivering. 6 månader inkluderar prioriterad support.
            </p>

            <h2 className="mt-14 text-2xl font-bold">Fungerar på dina enheter</h2>
            <p className="mt-4 text-muted">
              Abonnemanget fungerar på{" "}
              {devices.map((d) => d.title).join(", ")}. Hur du kommer igång på
              din enhet visar vi steg för steg i vår{" "}
              <Link href="/installera" className={linkClass}>
                installationsguide
              </Link>
              .
            </p>

            <h2 className="mt-14 text-2xl font-bold">Aktivering och gratis test</h2>
            <p className="mt-4 text-muted">
              Du beställer genom att kontakta oss via WhatsApp. Efter
              beställningen skickar vi dina aktiverings- och
              inloggningsuppgifter – Xtream Codes, M3U-länk eller aktivering via
              MAC-adress – och de flesta abonnemang är aktiva inom 5 minuter.
            </p>
            <p className="mt-4 text-muted">
              Vill du testa först? Börja med en{" "}
              <a
                href={waLinks.freeTrial}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                gratis testperiod
              </a>{" "}
              och kontrollera att streamingen fungerar med din uppkoppling
              innan du väljer abonnemang.
            </p>

            <h2 className="mt-14 text-2xl font-bold">Vanliga frågor om priser</h2>
            <h3 className="mt-8 font-semibold">Vad kostar IPTV Sverige per månad?</h3>
            <p className="mt-2 text-muted">
              Priset per månad beror på perioden du väljer: från{" "}
              {lowestPerMonth} kr/mån med 12 månader till {highestPerMonth}{" "}
              kr/mån med 3 eller 6 månader.
            </p>
            <h3 className="mt-8 font-semibold">Finns det någon bindningstid?</h3>
            <p className="mt-2 text-muted">
              Nej. Du väljer en period, och det finns inga bindningstider eller
              dolda avgifter.
            </p>
            <h3 className="mt-8 font-semibold">Kan jag testa innan jag betalar?</h3>
            <p className="mt-2 text-muted">
              Ja. Kontakta oss via WhatsApp så startar vi en gratis testperiod,
              så att du kan kontrollera att allt fungerar med din enhet och
              uppkoppling.
            </p>
            <h3 className="mt-8 font-semibold">Hur snabbt kommer jag igång?</h3>
            <p className="mt-2 text-muted">
              De flesta abonnemang är aktiva inom 5 minuter efter beställningen.
            </p>
            <h3 className="mt-8 font-semibold">Vilket abonnemang ska jag välja?</h3>
            <p className="mt-2 text-muted">
              Vill du ha lägst pris per månad är 12 månader det mest prisvärda
              alternativet. Vill du prova under en kortare period passar 3
              månader. Är du osäker kan du börja med en gratis testperiod, eller
              läsa mer{" "}
              <Link href="/om-oss" className={linkClass}>
                om hur tjänsten fungerar
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
