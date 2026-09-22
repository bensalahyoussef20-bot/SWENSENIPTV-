import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cookiepolicy",
  description: `Hur ${siteConfig.name} använder cookies på webbplatsen.`,
};

export default function Page() {
  return (
    <LegalPage title="Cookiepolicy" updated="22 september 2026">
      <p>
        Vi använder cookies och liknande lagringstekniker för att webbplatsen
        ska fungera korrekt och för att förbättra din upplevelse. Denna sida
        förklarar vilka typer av cookies vi använder och varför.
      </p>

      <h2>Vad är cookies?</h2>
      <p>
        Cookies är små textfiler som sparas i din webbläsare när du besöker en
        webbplats. De gör det möjligt för webbplatsen att komma ihåg dina val
        och förbättra funktionaliteten.
      </p>

      <h2>Cookies vi använder</h2>
      <ul>
        <li>
          <strong>Nödvändiga cookies:</strong> krävs för att webbplatsen ska
          fungera, t.ex. för att komma ihåg ditt val i cookiebannern.
        </li>
        <li>
          <strong>Funktionella cookies:</strong> sparar dina inställningar för
          en bättre upplevelse vid återbesök.
        </li>
        <li>
          <strong>Analyscookies:</strong> hjälper oss förstå hur besökare
          använder webbplatsen, så att vi kan förbättra den. Dessa aktiveras
          endast om du godkänner dem.
        </li>
      </ul>

      <h2>Hantera dina cookieinställningar</h2>
      <p>
        Du kan när som helst ändra eller återkalla ditt samtycke genom att
        rensa cookies i din webbläsares inställningar och ladda om sidan,
        vilket visar cookiebannern på nytt. De flesta webbläsare tillåter dig
        även att blockera cookies helt, men det kan påverka webbplatsens
        funktionalitet.
      </p>

      <h2>Tredjepartscookies</h2>
      <p>
        När du klickar på en WhatsApp-länk på vår webbplats lämnar du
        {" "}
        {siteConfig.domain} och omfattas av WhatsApps/Metas egna
        cookie- och integritetspolicyer.
      </p>

      <h2>Kontakt</h2>
      <p>
        Frågor om vår användning av cookies? Kontakta oss på{" "}
        <a href={`mailto:${siteConfig.email}`} className="underline">
          {siteConfig.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
