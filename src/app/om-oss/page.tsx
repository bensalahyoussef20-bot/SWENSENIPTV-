import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { devices, siteConfig, waLinks } from "@/lib/data";

const title = "Om oss";
const description =
  "Lär känna Sweden IPTV: hur tjänsten fungerar, support via WhatsApp, vilka enheter som stöds och hur aktiveringen av ditt IPTV Sverige-abonnemang går till.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/om-oss" },
  openGraph: {
    title: "Om Sweden IPTV",
    description,
    url: "/om-oss",
    images: "/opengraph-image",
    siteName: siteConfig.name,
    locale: "sv_SE",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Om oss",
      item: `${siteConfig.url}/om-oss`,
    },
  ],
};

const activationSteps = [
  "Kontakta oss via WhatsApp och berätta vilket abonnemang du vill ha – 3, 6 eller 12 månader – eller be om en gratis testperiod.",
  "Berätta vilken enhet du ska titta på, så att vi kan skicka rätt typ av uppgifter: Xtream Codes, M3U-länk eller aktivering via MAC-adress.",
  "Efter din beställning skickar vi dina aktiverings- och inloggningsuppgifter.",
  "Följ installationsguiden för din enhet och börja titta. De flesta är igång inom några minuter.",
];

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <JsonLd data={breadcrumbJsonLd} />
        <section className="py-16">
          <div className="container-shell max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Om oss
            </span>
            <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Om Sweden IPTV
            </h1>
            <p className="mt-4 text-muted">
              Sweden IPTV är en IPTV-tjänst för tittare i Sverige. Vi erbjuder
              IPTV Sverige-abonnemang med sport, filmer, serier, nyheter och
              barnkanaler i HD och 4K, som du streamar via din vanliga
              internetuppkoppling – utan parabol, kabel-TV eller
              bindningstid.
            </p>
            <p className="mt-4 text-muted">
              Vårt mål är att göra det enkelt att komma igång. Därför sköter vi
              beställning, aktivering och support direkt via WhatsApp, så att
              du får hjälp anpassad efter just din enhet.
            </p>

            <h2 className="mt-14 text-2xl font-bold">Hur vi fungerar</h2>
            <p className="mt-4 text-muted">
              IPTV står för Internet Protocol Television. I stället för att
              signalen kommer via antenn eller kabel strömmas kanalerna över
              internet till en app eller box på din enhet. Du behöver en stabil
              uppkoppling – vi rekommenderar minst 10 Mbit/s för HD och 25
              Mbit/s för 4K.
            </p>
            <p className="mt-4 text-muted">
              Du väljer själv hur länge du vill ha tjänsten – 3, 6 eller 12
              månader – utan bindningstid och utan dolda avgifter. Se alla
              alternativ på{" "}
              <Link href="/priser" className="text-primary hover:underline">
                prissidan
              </Link>
              .
            </p>

            <h2 className="mt-14 text-2xl font-bold">WhatsApp-support</h2>
            <p className="mt-4 text-muted">
              All kontakt med oss sker enklast via WhatsApp. Där kan du ställa
              frågor innan du beställer, starta en gratis testperiod, få hjälp
              med installationen eller lösa problem med ditt abonnemang. Vår
              support finns tillgänglig dygnet runt och svarar på svenska.
            </p>
            <p className="mt-4 text-muted">
              Föredrar du e-post når du oss på{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-primary hover:underline"
              >
                {siteConfig.email}
              </a>
              .
            </p>
            <a
              href={waLinks.support}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105"
            >
              Kontakta support på WhatsApp
            </a>

            <h2 className="mt-14 text-2xl font-bold">Enheter som stöds</h2>
            <p className="mt-4 text-muted">
              Sweden IPTV fungerar på de flesta moderna enheter:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
              {devices.map((d) => (
                <li key={d.title}>
                  <span className="font-semibold text-foreground">
                    {d.title}
                  </span>{" "}
                  – {d.description}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-muted">
              Steg-för-steg-instruktioner för varje enhet hittar du i vår{" "}
              <Link href="/installera" className="text-primary hover:underline">
                installationsguide
              </Link>
              .
            </p>

            <h2 className="mt-14 text-2xl font-bold">Aktiveringsprocess</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-muted">
              {activationSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </section>

        <CtaSection headingLevel={2} />
      </main>
      <Footer />
    </>
  );
}
