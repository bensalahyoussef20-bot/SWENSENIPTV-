import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import JsonLd from "@/components/JsonLd";
import {
  contentCategories,
  devices,
  infoSection,
  installApps,
  siteConfig,
  waLinks,
} from "@/lib/data";
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

const linkClass = "text-primary hover:underline";

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <Header />
      <main id="main-content" className="flex-1">
        <BenefitsSection headingLevel={1} />

        <section className="py-16">
          <div className="container-shell max-w-3xl">
            <h2 className="text-2xl font-bold">Streaming i HD och 4K</h2>
            <p className="mt-4 text-muted">
              Med IPTV Sverige streamar du kanaler, filmer och serier i HD och
              4K via din vanliga internetuppkoppling. Hur jämn bilden blir beror
              på uppkopplingen – så här mycket behöver du minst:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
              {infoSection.speeds.map((s) => (
                <li key={s.quality}>
                  <span className="font-semibold text-foreground">{s.quality}:</span>{" "}
                  {s.speed}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-muted">
              Får du problem med bilden har vi samlat våra bästa tips i guiden{" "}
              <Link href="/blog/iptv-buffrar" className={linkClass}>
                IPTV buffrar? 8 sätt att få en stabil bild
              </Link>
              .
            </p>

            <h2 className="mt-14 text-2xl font-bold">Innehåll för hela familjen</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
              {contentCategories.map((c) => (
                <li key={c.label}>
                  <span className="font-semibold text-foreground">{c.label}</span>{" "}
                  – {c.description}
                </li>
              ))}
            </ul>

            <h2 className="mt-14 text-2xl font-bold">Fungerar på dina enheter</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
              {devices.map((d) => (
                <li key={d.title}>
                  <span className="font-semibold text-foreground">{d.title}</span>{" "}
                  – {d.description}
                </li>
              ))}
            </ul>

            <h2 className="mt-14 text-2xl font-bold">Enkel installation</h2>
            <p className="mt-4 text-muted">
              Du installerar en IPTV-app på din enhet och loggar in med
              uppgifterna du får av oss – Xtream Codes, M3U-länk eller
              aktivering via MAC-adress. I vår guide går vi igenom appar som{" "}
              {installApps.map((a) => a.name).join(", ")}. Läs hela{" "}
              <Link href="/installera" className={linkClass}>
                installationsguiden
              </Link>{" "}
              för din enhet.
            </p>

            <h2 className="mt-14 text-2xl font-bold">Support när du behöver den</h2>
            <p className="mt-4 text-muted">
              Vår support finns tillgänglig dygnet runt via WhatsApp och hjälper
              dig med beställning, installation och felsökning. Du kan också
              mejla oss på{" "}
              <a href={`mailto:${siteConfig.email}`} className={linkClass}>
                {siteConfig.email}
              </a>
              . Se alla sätt att{" "}
              <Link href="/kontakt" className={linkClass}>
                kontakta oss
              </Link>
              .
            </p>

            <h2 className="mt-14 text-2xl font-bold">Flexibla abonnemang utan bindningstid</h2>
            <p className="mt-4 text-muted">
              Du väljer mellan 3, 6 eller 12 månader och binder dig inte längre
              än så. Jämför perioderna på vår{" "}
              <Link href="/priser" className={linkClass}>
                prissida
              </Link>
              , eller börja med en{" "}
              <a
                href={waLinks.freeTrial}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                gratis testperiod
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
