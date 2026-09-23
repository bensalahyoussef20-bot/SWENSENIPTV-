import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileCtaBar from "@/components/MobileCtaBar";
import CookieConsent from "@/components/CookieConsent";
import PromoBar from "@/components/PromoBar";
import SocialProofToast from "@/components/SocialProofToast";
import WelcomeOfferModal from "@/components/WelcomeOfferModal";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://swedeniptv.cc";
const gaMeasurementId = "G-R5TQF98W3V";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "IPTV Nordic | IPTV Sverige med HD och 4K för Sverige & Norden",
    template: "%s | IPTV Nordic",
  },
  description:
    "IPTV Nordic ger dig IPTV Sverige med tusentals kanaler i HD och 4K – inklusive sport, filmer, serier och underhållning för hela familjen. Köp IPTV i Sverige och i Norden med stabil streaming, enkel installation och bästa kvalitet.",
  keywords: [
    "IPTV",
    "IPTV Sverige",
    "Nordic IPTV",
    "IPTV Nordic",
    "Sweden IPTV",
    "Nordisk IPTV",
  ],
  openGraph: {
    title: "IPTV Nordic - IPTV Sverige i HD och 4K för sport, filmer och serier",
    description:
      "Upptäck IPTV Nordic för Sverige och Norden med tusentals kanaler i HD och 4K, inklusive sport, filmer, serier och live-tv. Snabb installation, stabil streaming och kvalitet du kan lita på.",
    url: siteUrl,
    siteName: "Sweden IPTV",
    locale: "sv_SE",
    type: "website",
  },
  alternates: {
    canonical: siteUrl,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteUrl,
  logo: `${siteUrl}/icon`,
  email: siteConfig.email,
  areaServed: "SE",
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
        <SocialProofToast />
        <WelcomeOfferModal />
        <Analytics />
      </body>
    </html>
  );
}
