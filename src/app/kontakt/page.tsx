import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import { siteConfig, waLinks } from "@/lib/data";
import { HeadsetIcon, ClockIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakta Sweden IPTV via WhatsApp eller e-post. Support dygnet runt och snabb hjälp med beställning eller installation.",
  alternates: { canonical: "/kontakt" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <section className="py-16">
          <div className="container-shell max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Kontakt
            </span>
            <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Vi finns här för dig
            </h1>
            <p className="mt-4 text-muted">
              Har du frågor om ditt abonnemang, installation eller vill starta
              en gratis testperiod? Hör av dig så svarar vi snabbt.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <a
                href={waLinks.support}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/50"
              >
                <HeadsetIcon className="h-6 w-6 text-primary" />
                <span className="font-semibold">WhatsApp-support</span>
                <span className="text-sm text-muted">Snabbast svar, dygnet runt</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/50"
              >
                <ClockIcon className="h-6 w-6 text-primary" />
                <span className="font-semibold">E-post</span>
                <span className="text-sm text-muted">{siteConfig.email}</span>
              </a>
            </div>
          </div>
        </section>

        <CtaSection headingLevel={2} />
      </main>
      <Footer />
    </>
  );
}
