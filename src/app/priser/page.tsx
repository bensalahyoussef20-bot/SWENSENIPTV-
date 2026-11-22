import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import TrustBadges from "@/components/TrustBadges";
import JsonLd from "@/components/JsonLd";
import { devices, plans, schemaIds, siteConfig, waLinks } from "@/lib/data";
import { pageOpenGraph } from "@/lib/seo";

// Lowest monthly price across the plans, used in the title, description and FAQ.
const lowestPerMonth = Math.min(...plans.map((p) => p.perMonth));

const title = `IPTV-abonnemang och pris från ${lowestPerMonth} kr/mån`;
const description = `Köp IPTV-abonnemang på 3, 6 eller 12 månader från ${lowestPerMonth} kr/mån. Ingen bindningstid – beställ via WhatsApp eller testa gratis först.`;

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
    "IPTV-abonnemang med kanaler, filmer och serier i HD och 4K – 3, 6 eller 12 månader utan bindningstid.",
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
// Cost of a full year when the same period is bought again (12 / months times).
const plansWithYear = plansByPrice.map((plan) => {
  const months = Number.parseInt(plan.duration, 10);
  const times = 12 / months;
  return { ...plan, months, times, yearTotal: times * plan.price };
});
const twelveMonths = plansWithYear.find((p) => p.months === 12);
const shorterPerMonth = Math.max(
  ...plansWithYear.filter((p) => p.months !== 12).map((p) => p.perMonth),
);
const highestPerMonth = Math.max(...plans.map((p) => p.perMonth));
const linkClass = "text-primary hover:underline";

export default function Page() {
  return (
    <>
      <JsonLd data={productJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Header />
      <main id="main-content" className="flex-1">
        <PricingSection headingLevel={1} title="Köpa IPTV – abonnemang och priser" />
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
              12 månader ger det lägsta priset per månad. Hur du räknar ut
              månadspriset och vad ett helt år kostar visar vi i guiden{" "}
              <Link href="/blog/vad-kostar-iptv" className={linkClass}>
                Vad kostar IPTV?
              </Link>
              .
            </p>

            <h2 className="mt-14 text-2xl font-bold">
              Prisjämförelse: totalpris och pris per månad
            </h2>
            <p className="mt-4 text-muted">
              Så här mycket kostar varje period – och vad det blir över ett
              helt år om du köper samma period flera gånger:
            </p>
            <div className="mt-4 overflow-x-auto rounded-2xl border border-border">
              <table className="w-full text-left text-sm">
                <thead className="bg-surface">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">Period</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Totalpris</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Per månad</th>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Kostnad för 12 månader
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {plansWithYear.map((plan) => (
                    <tr key={plan.id} className="border-t border-border">
                      <th scope="row" className="px-4 py-3 font-semibold">
                        {plan.months} månader
                      </th>
                      <td className="px-4 py-3 text-muted">{plan.price} kr</td>
                      <td className="px-4 py-3 text-muted">cirka {plan.perMonth} kr</td>
                      <td className="px-4 py-3 text-muted">
                        {plan.yearTotal} kr
                        {plan.times > 1 && ` (${plan.times} × ${plan.price} kr)`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="mt-14 text-2xl font-bold">Så köper du IPTV – steg för steg</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-muted">
              <li>Välj den period som passar dig bland abonnemangen ovan.</li>
              <li>
                Klicka på knappen för abonnemanget – den öppnar WhatsApp med
                ett färdigt meddelande.
              </li>
              <li>
                Vi skickar dina inloggningsuppgifter – Xtream Codes, M3U-länk
                eller aktivering via MAC-adress.
              </li>
              <li>
                Installera appen på din enhet med hjälp av vår{" "}
                <Link href="/installera" className={linkClass}>
                  installationsguide
                </Link>
                .
              </li>
            </ol>
            <p className="mt-4 text-muted">
              Inför köpet kan du också gå igenom vår{" "}
              <Link href="/blog/kopa-iptv" className={linkClass}>
                checklista för att köpa IPTV
              </Link>
              .
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

            <h2 className="mt-14 text-2xl font-bold">Titta på flera enheter samtidigt</h2>
            <p className="mt-4 text-muted">
              Vill du titta på fler enheter samtidigt tillkommer en extra
              kostnad.{" "}
              <a
                href={waLinks.buyNow}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Kontakta oss via WhatsApp
              </a>{" "}
              så får du ett pris.
            </p>

            <h2 className="mt-14 text-2xl font-bold">Det här ingår inte i priset</h2>
            <p className="mt-4 text-muted">
              IPTV-appen ingår inte i abonnemanget. Vissa appar är gratis,
              medan andra kräver en licens eller betald uppgradering från
              apputvecklaren – till exempel Smart IPTV, IBO Player och TiviMate
              Premium. Den kostnaden betalas direkt till apputvecklaren. Läs
              mer i guiderna om{" "}
              <Link href="/blog/smart-iptv-app" className={linkClass}>
                Smart IPTV-appen
              </Link>{" "}
              och{" "}
              <Link href="/blog/tivimate" className={linkClass}>
                TiviMate
              </Link>
              .
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
              <Link href="/testa-gratis" className={linkClass}>
                gratis testperiod
              </Link>{" "}
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
            <h3 className="mt-8 font-semibold">Hur köper jag IPTV?</h3>
            <p className="mt-2 text-muted">
              Välj period, klicka på knappen för abonnemanget och skicka
              meddelandet i WhatsApp. Vi skickar sedan dina
              inloggningsuppgifter och hjälper dig att komma igång.
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
            <h3 className="mt-8 font-semibold">
              Kostar det extra att titta på flera enheter samtidigt?
            </h3>
            <p className="mt-2 text-muted">
              Ja, fler samtidiga enheter kostar extra. Kontakta oss via
              WhatsApp så får du ett pris.
            </p>
            <h3 className="mt-8 font-semibold">Ingår IPTV-appen i priset?</h3>
            <p className="mt-2 text-muted">
              Nej. Appen kommer från en apputvecklare. Vissa appar är gratis,
              medan andra kräver en egen licens som betalas till
              apputvecklaren.
            </p>
            <h3 className="mt-8 font-semibold">Vad skiljer 3, 6 och 12 månader?</h3>
            <p className="mt-2 text-muted">
              Främst priset per månad: 12 månader ger lägst pris, cirka{" "}
              {twelveMonths?.perMonth ?? lowestPerMonth} kr/mån, mot cirka{" "}
              {shorterPerMonth} kr/mån för 3 och 6 månader. Längre perioder
              innehåller också fler förmåner, som du ser i korten ovan.
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
              . Inför köpet kan du också gå igenom vår{" "}
              <Link href="/blog/kopa-iptv" className={linkClass}>
                checklista för att köpa IPTV
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
