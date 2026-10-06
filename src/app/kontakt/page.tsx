import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { siteConfig, waLinks } from "@/lib/data";
import { pageOpenGraph } from "@/lib/seo";
import { HeadsetIcon, ClockIcon } from "@/components/icons";

const title = "Kontakt";
const description =
  "Kontakta Sweden IPTV via WhatsApp eller e-post. Support dygnet runt och snabb hjälp med beställning eller installation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/kontakt" },
  openGraph: pageOpenGraph("/kontakt", title, description),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Kontakt",
      item: `${siteConfig.url}/kontakt`,
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <Header />
      <main id="main-content" className="flex-1">
        <section className="py-16">
          <div className="container-shell max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Kontakt
            </span>
            <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Vi finns här för dig
            </h1>
            <p className="mt-4 text-muted">
              Har du frågor om ditt abonnemang, installation eller vill starta
              en gratis testperiod? Hör av dig så svarar vi snabbt.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <a
                href={waLinks.support}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/50"
              >
                <HeadsetIcon className="h-6 w-6 text-primary" />
                <span className="font-semibold">WhatsApp-support</span>
                <span className="text-sm text-muted">Snabbast svar, dygnet runt</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/50"
              >
                <ClockIcon className="h-6 w-6 text-primary" />
                <span className="font-semibold">E-post</span>
                <span className="text-sm text-muted">{siteConfig.email}</span>
              </a>
            </div>
          </div>
        </section>

        <section className="border-t border-border py-16">
          <div className="container-shell max-w-3xl">
            <h2 className="text-2xl font-bold">Så kan vi hjälpa dig</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
              <li>Frågor innan du väljer abonnemang</li>
              <li>Starta en gratis testperiod</li>
              <li>Beställning och aktivering</li>
              <li>Hjälp med installation på din enhet</li>
              <li>Felsökning om bilden buffrar eller inloggningen inte fungerar</li>
            </ul>

            <h2 className="mt-14 text-2xl font-bold">Kontakta oss via WhatsApp</h2>
            <p className="mt-4 text-muted">
              WhatsApp är det snabbaste sättet att nå oss. Där sköter vi
              beställning, aktivering och support, och vår support finns
              tillgänglig dygnet runt. Efter beställningen skickar vi dina
              aktiverings- och inloggningsuppgifter direkt i chatten.
            </p>

            <h2 className="mt-14 text-2xl font-bold">Bra att skicka med</h2>
            <p className="mt-4 text-muted">
              Vi kan hjälpa dig snabbare om du berättar:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
              <li>Vilken enhet och vilken app du använder</li>
              <li>Vad du vill ha hjälp med, till exempel beställning eller installation</li>
              <li>Vilken kanal det gäller och ungefär när det händer, om något inte fungerar</li>
              <li>Resultatet från en hastighetsmätning, om bilden buffrar</li>
            </ul>

            <h2 className="mt-14 text-2xl font-bold">E-post</h2>
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

            <h2 className="mt-14 text-2xl font-bold">Hitta svar direkt</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
              <li>
                <Link href="/installera" className="text-primary hover:underline">
                  Installationsguide för Smart TV, Firestick, Apple TV och fler enheter
                </Link>
              </li>
              <li>
                <Link href="/blog/iptv-buffrar" className="text-primary hover:underline">
                  IPTV buffrar? 8 sätt att få en stabil bild
                </Link>
              </li>
              <li>
                <Link href="/priser" className="text-primary hover:underline">
                  Priser och abonnemang
                </Link>
              </li>
              <li>
                <Link href="/om-oss" className="text-primary hover:underline">
                  Om Sweden IPTV och hur tjänsten fungerar
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <CtaSection headingLevel={2} />
      </main>
      <Footer />
    </>
  );
}
