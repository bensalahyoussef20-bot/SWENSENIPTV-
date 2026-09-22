import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="sv"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
