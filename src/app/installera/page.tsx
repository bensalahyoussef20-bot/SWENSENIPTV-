import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import {
  installApps,
  installGuideUpdated,
  installGuides,
  installTroubleshooting,
  siteConfig,
  waLinks,
} from "@/lib/data";

const title = "Installera IPTV: Guide för Smart TV, Firestick & Apple TV";
const description =
  "Så installerar du IPTV Sverige på Smart TV, Firestick, Android TV, Apple TV, MAG Box och mobil – med Xtream Codes, M3U-länk eller MAC-aktivering.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/installera" },
  openGraph: {
    title,
    description,
    url: "/installera",
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
      name: "Installera",
      item: `${siteConfig.url}/installera`,
    },
  ],
};

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <JsonLd data={breadcrumbJsonLd} />
        <section className="py-16">
          <div className="container-shell max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Installationsguide
            </span>
            <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Så installerar du IPTV Sverige – steg för steg
            </h1>
            <p className="mt-4 text-muted">
              Här visar vi hur du kommer igång med IPTV Sverige på Smart TV,
              Firestick, Android TV, Apple TV, MAG Box, mobil och surfplatta.
              Du behöver bara dina inloggningsuppgifter och rätt app för din
              enhet – de flesta är igång på under 10 minuter.
            </p>
            <p className="mt-2 text-xs text-muted">
              Senast uppdaterad: {installGuideUpdated}
            </p>

            <nav aria-label="Välj enhet" className="mt-8 flex flex-wrap gap-2">
              {installGuides.map((g) => (
                <a
                  key={g.id}
                  href={`#${g.id}`}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium transition-colors hover:border-primary/60"
                >
                  {g.title}
                </a>
              ))}
            </nav>

            <h2 className="mt-14 text-2xl font-bold">Innan du börjar</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
              <li>
                Dina aktiverings- och inloggningsuppgifter. Du beställer genom
                att kontakta oss via WhatsApp, och efter beställningen skickar
                vi dina uppgifter till dig. Beroende på vad du önskar vid
                beställningen får du antingen Xtream Codes (serveradress,
                användarnamn och lösenord) eller en M3U-länk.
              </li>
              <li>
                Använder du MAG Box eller en TV-app som aktiveras via MAC-adress
                skickar du i stället enhetens MAC-adress till oss, så aktiverar
                vi den åt dig.
              </li>
              <li>
                En stabil internetuppkoppling: minst 10 Mbit/s för HD och 25
                Mbit/s för 4K.
              </li>
              <li>
                En IPTV-app (behövs inte för MAG Box). Apparna nedan är
                fristående spelare från tredjepartsutvecklare – du väljer den
                som passar din enhet.
              </li>
            </ul>

            <h2 className="mt-14 text-2xl font-bold">Vilken app ska jag välja?</h2>
            <div className="mt-4 overflow-x-auto rounded-2xl border border-border">
              <table className="w-full text-left text-sm">
                <thead className="bg-surface">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">App</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Enheter</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Inloggning</th>
                  </tr>
                </thead>
                <tbody>
                  {installApps.map((app) => (
                    <tr key={app.name} className="border-t border-border">
                      <th scope="row" className="px-4 py-3 font-semibold">
                        {app.name}
                      </th>
                      <td className="px-4 py-3 text-muted">{app.devices}</td>
                      <td className="px-4 py-3 text-muted">{app.login}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {installGuides.map((g) => (
              <section key={g.id} id={g.id} className="mt-14 scroll-mt-24">
                <h2 className="text-2xl font-bold">Installera på {g.title}</h2>
                <p className="mt-3 text-muted">{g.intro}</p>
                {g.prep && (
                  <>
                    <h3 className="mt-6 font-semibold">Förberedelser</h3>
                    <ol className="mt-3 list-decimal space-y-2 pl-5 text-muted">
                      {g.prep.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  </>
                )}
                {g.methods.map((m) => (
                  <div key={m.app}>
                    <h3 className="mt-6 font-semibold">Med {m.app}</h3>
                    <ol className="mt-3 list-decimal space-y-2 pl-5 text-muted">
                      {m.steps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  </div>
                ))}
                {g.note && (
                  <p className="mt-6 rounded-2xl border border-border bg-surface p-4 text-sm text-muted">
                    {g.note}
                  </p>
                )}
              </section>
            ))}

            <h2 className="mt-14 text-2xl font-bold">Vanliga problem och lösningar</h2>
            <dl className="mt-4 space-y-5">
              {installTroubleshooting.map((t) => (
                <div key={t.problem}>
                  <dt className="font-semibold">{t.problem}</dt>
                  <dd className="mt-1 text-muted">{t.solution}</dd>
                </div>
              ))}
            </dl>

            <h2 className="mt-14 text-2xl font-bold">Behöver du hjälp?</h2>
            <p className="mt-4 text-muted">
              Vår support hjälper dig med installationen dygnet runt. Har du
              inget abonnemang än? Se våra{" "}
              <Link href="/priser" className="font-semibold text-primary hover:underline">
                priser och abonnemang
              </Link>{" "}
              eller{" "}
              <Link href="/kontakt" className="font-semibold text-primary hover:underline">
                kontakta oss
              </Link>
              .
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href={waLinks.installHelp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary px-7 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105"
              >
                Få hjälp med installation
              </a>
              <a
                href={waLinks.freeTrial}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-surface px-7 py-3 text-center text-sm font-semibold transition-colors hover:border-primary/60"
              >
                Starta gratis test
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
