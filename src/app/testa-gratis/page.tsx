import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { plans, siteConfig, waLinks } from "@/lib/data";
import { pageOpenGraph } from "@/lib/seo";

const title = "Testa IPTV gratis – starta din testperiod";
const description =
  "Testa IPTV Sverige gratis innan du köper. Starta en kostnadsfri testperiod via WhatsApp och se hur det fungerar på din TV, mobil eller dator.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/testa-gratis" },
  openGraph: pageOpenGraph("/testa-gratis", title, description),
};

const pageUrl = `${siteConfig.url}/testa-gratis`;

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Testa gratis", item: pageUrl },
  ],
};

// Prices are read from the plans, so the page always matches /priser.
const plansByLength = [...plans]
  .map((plan) => ({ ...plan, months: Number.parseInt(plan.duration, 10) }))
  .sort((a, b) => a.months - b.months);
const lowestPerMonth = Math.min(...plans.map((p) => p.perMonth));

const devices = [
  { device: "Samsung Smart TV", app: "IBO Player eller Smart IPTV", guide: "IPTV på Samsung Smart TV", href: "/blog/iptv-samsung-smart-tv" },
  { device: "LG Smart TV", app: "Smart IPTV", guide: "IPTV på LG Smart TV", href: "/blog/iptv-lg-smart-tv" },
  { device: "Fire TV Stick", app: "TiviMate eller IPTV Smarters", guide: "IPTV på Fire TV Stick", href: "/blog/iptv-fire-tv-stick" },
  { device: "Android TV och Google TV", app: "TiviMate eller IPTV Smarters", guide: "IPTV på Android TV och Google TV", href: "/blog/iptv-android-tv" },
  { device: "Apple TV, iPhone och iPad", app: "Smarters Player Lite", guide: "IPTV på Apple TV och iPhone", href: "/blog/iptv-apple-tv-iphone" },
];

const linkClass = "font-semibold text-primary hover:underline";
const ctaClass =
  "inline-block rounded-full bg-primary px-7 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105";

function TrialButton() {
  return (
    <a href={waLinks.freeTrial} target="_blank" rel="noopener noreferrer" className={ctaClass}>
      Starta gratis test via WhatsApp
    </a>
  );
}

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <JsonLd data={breadcrumbJsonLd} />
        <section className="py-16">
          <div className="container-shell max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Gratis test
            </span>
            <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Testa IPTV gratis innan du köper
            </h1>
            <p className="mt-4 text-muted">
              Hos IPTV Sverige kan du testa abonnemanget gratis under en
              begränsad period innan du bestämmer dig. Du startar testet via
              WhatsApp och behöver inte ange några kortuppgifter på
              webbplatsen. Under testet ser du själv hur bilden fungerar med
              din uppkoppling och på dina enheter.
            </p>
            <div className="mt-6">
              <TrialButton />
            </div>
            <p className="mt-3 text-xs text-muted">
              Ingen bindningstid · Support via WhatsApp dygnet runt
            </p>

            <h2 className="mt-14 text-2xl font-bold">Så startar du din gratis testperiod</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-muted">
              <li>
                Skicka ett meddelande till oss på WhatsApp – knappen ovan öppnar
                chatten med ett färdigt meddelande.
              </li>
              <li>
                Berätta vilken enhet du vill titta på, till exempel Smart TV,
                Fire TV Stick eller mobil.
              </li>
              <li>
                Du får dina uppgifter för testet – Xtream Codes, en M3U-länk
                eller aktivering via MAC-adress beroende på enhet – och kan
                börja titta.
              </li>
            </ol>

            <h2 className="mt-14 text-2xl font-bold">Vad du bör testa under testperioden</h2>
            <p className="mt-4 text-muted">
              Testperioden är det säkraste sättet att se hur IPTV fungerar
              hemma hos dig. Testa under verkliga förhållanden:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
              <li>Titta på kvällen, när fler är uppkopplade.</li>
              <li>Testa direktsänd sport, som ställer högst krav på en jämn ström.</li>
              <li>Testa på alla enheter du tänker använda.</li>
              <li>Jämför gärna wifi och nätverkskabel om du har möjlighet.</li>
            </ul>
            <p className="mt-4 text-muted">
              Mer om vad som avgör en jämn bild läser du i guiden{" "}
              <Link href="/blog/stabil-iptv" className={linkClass}>
                Stabil IPTV – vad avgör och hur testar du?
              </Link>
              .
            </p>

            <h2 className="mt-14 text-2xl font-bold">Fungerar på dina enheter</h2>
            <p className="mt-4 text-muted">
              Testet fungerar på samma enheter som abonnemanget. Så kommer du
              igång:
            </p>
            <div className="mt-4 overflow-x-auto rounded-2xl border border-border">
              <table className="w-full text-left text-sm">
                <thead className="bg-surface">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">Enhet</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Vanlig app</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Guide</th>
                  </tr>
                </thead>
                <tbody>
                  {devices.map((d) => (
                    <tr key={d.device} className="border-t border-border">
                      <th scope="row" className="px-4 py-3 font-semibold">{d.device}</th>
                      <td className="px-4 py-3 text-muted">{d.app}</td>
                      <td className="px-4 py-3">
                        <Link href={d.href} className={linkClass}>
                          {d.guide}
                        </Link>
                      </td>
                    </tr>
                  ))}
                  <tr className="border-t border-border">
                    <th scope="row" className="px-4 py-3 font-semibold">MAG-box</th>
                    <td className="px-4 py-3 text-muted">Aktivering via MAC-adress</td>
                    <td className="px-4 py-3 text-muted">Vi aktiverar boxen via WhatsApp</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-muted">
              Alla steg finns också i vår{" "}
              <Link href="/installera" className={linkClass}>
                installationsguide
              </Link>
              .
            </p>

            <h2 className="mt-14 text-2xl font-bold">Testperioden gäller abonnemanget – inte appen</h2>
            <p className="mt-4 text-muted">
              Det gratis testet gäller vårt IPTV-abonnemang. Själva IPTV-appen
              kommer från en apputvecklare, och vissa appar kräver en egen
              licens eller betald uppgradering – till exempel Smart IPTV och
              TiviMate Premium. Den kostnaden betalas till apputvecklaren och
              ingår inte i testet eller abonnemanget. Läs mer i guiderna om{" "}
              <Link href="/blog/smart-iptv-app" className={linkClass}>
                Smart IPTV-appen
              </Link>{" "}
              och{" "}
              <Link href="/blog/tivimate" className={linkClass}>
                TiviMate
              </Link>
              .
            </p>

            <h2 className="mt-14 text-2xl font-bold">Efter testet</h2>
            <p className="mt-4 text-muted">
              Är du nöjd väljer du ett abonnemang på 3, 6 eller 12 månader –
              från {lowestPerMonth} kr/mån och utan bindningstid:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
              {plansByLength.map((plan) => (
                <li key={plan.id}>
                  {plan.months} månader: {plan.price} kr
                </li>
              ))}
            </ul>
            <p className="mt-4 text-muted">
              Vad som ingår i varje period ser du på{" "}
              <Link href="/priser" className={linkClass}>
                prissidan
              </Link>
              .
            </p>

            <h2 className="mt-14 text-2xl font-bold">Vanliga frågor om gratis test</h2>
            <h3 className="mt-8 font-semibold">Kostar testperioden något?</h3>
            <p className="mt-2 text-muted">
              Nej. Testperioden är kostnadsfri, och du behöver inte ange några
              kortuppgifter på webbplatsen.
            </p>
            <h3 className="mt-8 font-semibold">Hur länge varar testperioden?</h3>
            <p className="mt-2 text-muted">
              Testet gäller under en begränsad period. Vi berättar vad som
              gäller när du startar testet via WhatsApp.
            </p>
            <h3 className="mt-8 font-semibold">Vilka enheter kan jag testa på?</h3>
            <p className="mt-2 text-muted">
              Du kan testa på samma enheter som abonnemanget fungerar på, till
              exempel Smart TV, Fire TV Stick, Android TV, Apple TV och mobil.
              I tabellen ovan ser du vilken app du behöver.
            </p>
            <h3 className="mt-8 font-semibold">Hur startar jag testet?</h3>
            <p className="mt-2 text-muted">
              Skicka ett meddelande till oss på WhatsApp. Knappen på den här
              sidan öppnar chatten med ett färdigt meddelande.
            </p>

            <h2 className="mt-14 text-2xl font-bold">Redo att testa?</h2>
            <p className="mt-4 text-muted">
              Starta din gratis testperiod nu – vår support når du via WhatsApp
              dygnet runt.
            </p>
            <div className="mt-6">
              <TrialButton />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
