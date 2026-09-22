import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Användarvillkor",
  description: `Villkor för att använda ${siteConfig.name}s tjänster.`,
};

export default function Page() {
  return (
    <LegalPage title="Användarvillkor" updated="22 september 2026">
      <p>
        Genom att beställa eller använda tjänster från {siteConfig.name}{" "}
        (&quot;tjänsten&quot;) godkänner du dessa användarvillkor. Läs dem
        noggrant innan du gör en beställning.
      </p>

      <h2>Tjänstens omfattning</h2>
      <p>
        {siteConfig.name} tillhandahåller åtkomst till en IPTV-streamingtjänst
        under den abonnemangsperiod du väljer (3, 6 eller 12 månader). Utbudet
        av kanaler, filmer och serier kan ändras över tid beroende på
        tillgänglighet från våra leverantörer.
      </p>

      <h2>Beställning och betalning</h2>
      <ul>
        <li>
          Beställningar bekräftas via WhatsApp och aktiveras normalt inom 5
          minuter efter genomförd betalning.
        </li>
        <li>Priser anges i svenska kronor (SEK) och inkluderar tillämplig moms.</li>
        <li>
          Det finns inga bindningstider – ditt abonnemang upphör automatiskt
          när den valda perioden löper ut om du inte förnyar det.
        </li>
      </ul>

      <h2>Användarens ansvar</h2>
      <ul>
        <li>
          Du ansvarar för att din internetuppkoppling är tillräcklig för
          streaming i den kvalitet du valt.
        </li>
        <li>
          Inloggningsuppgifter är personliga och får inte delas eller
          vidareförsäljas till tredje part.
        </li>
        <li>
          Det är ditt ansvar att säkerställa att din användning av tjänsten
          följer gällande lagstiftning i det land där du befinner dig.
        </li>
      </ul>

      <h2>Ångerrätt och återbetalning</h2>
      <p>
        Vi erbjuder en gratis testperiod så att du kan pröva tjänsten innan du
        köper ett abonnemang. Vid problem med tjänsten som inte kan lösas av
        vår support inom rimlig tid kan återbetalning erbjudas enligt vår
        pengarna-tillbaka-garanti – kontakta support för att diskutera ditt
        specifika fall.
      </p>

      <h2>Ansvarsbegränsning</h2>
      <p>
        Tjänsten tillhandahålls &quot;i befintligt skick&quot;. Vi strävar
        efter hög drifttillgänglighet men kan inte garantera avbrottsfri
        streaming, eftersom detta delvis beror på faktorer utanför vår
        kontroll (t.ex. din internetuppkoppling eller tredjepartsleverantörer).
      </p>

      <h2>Uppsägning</h2>
      <p>
        Vi förbehåller oss rätten att stänga av eller säga upp konton som
        missbrukar tjänsten, delar inloggningsuppgifter otillåtet eller
        bryter mot dessa villkor.
      </p>

      <h2>Ändringar av villkoren</h2>
      <p>
        Vi kan uppdatera dessa användarvillkor från tid till annan. Väsentliga
        ändringar meddelas via e-post eller på webbplatsen.
      </p>

      <h2>Kontakt</h2>
      <p>
        Frågor om dessa villkor besvaras på{" "}
        <a href={`mailto:${siteConfig.email}`} className="underline">
          {siteConfig.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
