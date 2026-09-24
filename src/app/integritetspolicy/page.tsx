import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description: `Hur ${siteConfig.name} samlar in, använder och skyddar dina personuppgifter.`,
  alternates: { canonical: "/integritetspolicy" },
};

export default function Page() {
  return (
    <LegalPage title="Integritetspolicy" updated="22 september 2026">
      <p>
        Denna integritetspolicy beskriver hur {siteConfig.name} (&quot;vi&quot;,
        &quot;oss&quot;) samlar in, använder och skyddar dina personuppgifter när
        du besöker vår webbplats {siteConfig.domain} eller kontaktar oss via
        WhatsApp eller e-post.
      </p>

      <h2>Vilka uppgifter vi samlar in</h2>
      <ul>
        <li>Namn och kontaktuppgifter du lämnar via WhatsApp eller e-post.</li>
        <li>
          Betalningsrelaterad information som krävs för att slutföra ett köp
          (hanteras av vår betalningspartner, inte lagrad av oss direkt).
        </li>
        <li>
          Teknisk information som IP-adress, webbläsartyp och besöksstatistik
          via cookies, se vår{" "}
          <a
            href="/cookies"
            className="underline decoration-primary/60 underline-offset-2"
          >
            cookiepolicy
          </a>
          .
        </li>
      </ul>

      <h2>Hur vi använder dina uppgifter</h2>
      <ul>
        <li>För att leverera och administrera ditt IPTV-abonnemang.</li>
        <li>För att kommunicera med dig om din beställning och support.</li>
        <li>För att förbättra vår webbplats och våra tjänster.</li>
        <li>För att uppfylla rättsliga och bokföringsmässiga skyldigheter.</li>
      </ul>

      <h2>Delning med tredje part</h2>
      <p>
        Vi delar endast dina uppgifter med tredje part när det krävs för att
        leverera tjänsten (t.ex. betalningsleverantörer och WhatsApp/Meta för
        kommunikation), eller när vi är skyldiga att göra det enligt lag. Vi
        säljer aldrig dina personuppgifter till tredje part.
      </p>

      <h2>Dina rättigheter</h2>
      <p>
        Enligt EU:s dataskyddsförordning (GDPR) har du rätt att begära
        tillgång till, rättelse av eller radering av dina personuppgifter, samt
        att invända mot eller begränsa vår behandling av dem. Kontakta oss på{" "}
        <a href={`mailto:${siteConfig.email}`} className="underline">
          {siteConfig.email}
        </a>{" "}
        för att utöva dina rättigheter.
      </p>

      <h2>Lagringstid</h2>
      <p>
        Vi sparar dina uppgifter endast så länge det är nödvändigt för att
        uppfylla de syften som beskrivs i denna policy, eller så länge lagen
        kräver.
      </p>

      <h2>Kontakt</h2>
      <p>
        Har du frågor om denna integritetspolicy? Kontakta oss på{" "}
        <a href={`mailto:${siteConfig.email}`} className="underline">
          {siteConfig.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
