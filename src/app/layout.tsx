import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileCtaBar from "@/components/MobileCtaBar";
import CookieConsent from "@/components/CookieConsent";
import PromoBar from "@/components/PromoBar";
import WelcomeOfferModal from "@/components/WelcomeOfferModal";
import JsonLd from "@/components/JsonLd";
import { siteConfig, whatsapp } from "@/lib/data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = siteConfig.url;
const gaMeasurementId = "G-R5TQF98W3V";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "IPTV Sverige | Bästa IPTV i HD & 4K | Sport, Filmer & Serier",
    template: "%s | IPTV Sverige",
  },
  description:
    "IPTV Sverige med över 20 000 kanaler, sport, filmer och serier i HD & 4K. Stabil streaming, snabb aktivering och gratis test. Starta idag!",
  keywords: [
    "IPTV",
    "IPTV Sverige",
    "IPTV Sweden",
    "Sweden IPTV",
    "IPTV abonnemang",
    "IPTV 4K",
  ],
  openGraph: {
    title: "IPTV Sverige – IPTV-abonnemang i HD och 4K för sport, filmer och serier",
    description:
      "Upptäck IPTV Sverige med ett premium IPTV-abonnemang i HD och 4K. Streama sport, filmer och serier i Sverige med stabil kvalitet, snabb installation och ett stort utbud av kanaler.",
    url: siteUrl,
    siteName: "Sweden IPTV",
    locale: "sv_SE",
    type: "website",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  alternateName: "IPTV Sverige",
  url: siteUrl,
  logo: `${siteUrl}/icon`,
  email: siteConfig.email,
  areaServed: "SE",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    telephone: `+${whatsapp.number}`,
    availableLanguage: ["sv"],
  },
  sameAs: [],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteUrl,
  inLanguage: "sv-SE",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="sv"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground pb-16 sm:pb-0">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaMeasurementId}');
          `}
        </Script>
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Hoppa till innehåll
        </a>
        <PromoBar />
        {children}
        <FloatingWhatsApp />
        <MobileCtaBar />
        <CookieConsent />
        <WelcomeOfferModal />
        <Analytics />
      </body>
    </html>
  );
}
