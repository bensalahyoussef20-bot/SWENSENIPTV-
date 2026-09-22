import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sweden IPTV | Nordic Streaming i 4K",
    template: "%s | Sweden IPTV",
  },
  description:
    "IPTV Nordic ger dig tusentals kanaler i HD och 4K direkt i TV:n. Enkel installation, stabil streaming och support dygnet runt. Starta din gratis testperiod idag.",
  keywords: [
    "IPTV",
    "IPTV Sverige",
    "Nordic IPTV",
    "IPTV Nordic",
    "Sweden IPTV",
    "Nordisk IPTV",
  ],
  openGraph: {
    title: "Sweden IPTV | Nordic Streaming i 4K",
    description:
      "Tusentals kanaler, filmer och serier i HD & 4K. Enkel installation på alla enheter och support 24/7.",
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
