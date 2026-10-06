import Link from "next/link";
import type { ReactNode } from "react";
import { legalLinks, siteConfig, waLinks } from "@/lib/data";
import Logo from "@/components/Logo";
import { HeadsetIcon, LockIcon } from "@/components/icons";

const quickLinks = [
  { label: "Hem", href: "/" },
  { label: "Priser", href: "/priser" },
  { label: "Fördelar", href: "/fordelar" },
  { label: "FAQ", href: "/#faq" },
  { label: "Kontakta oss", href: "/kontakt" },
  { label: "Om oss", href: "/om-oss" },
];

const guideLinks = [
  { label: "Installera IPTV", href: "/installera" },
  { label: "Blogg", href: "/blog" },
  { label: "Vad är IPTV?", href: "/blog/vad-ar-iptv" },
  { label: "IPTV buffrar", href: "/blog/iptv-buffrar" },
  { label: "Internethastighet för IPTV", href: "/blog/internethastighet-for-iptv" },
];

const linkClass =
  "group inline-flex items-center gap-2 py-1 text-sm text-muted transition-colors hover:text-foreground";

function Chevron() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 shrink-0 text-primary transition-transform group-hover:translate-x-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-semibold tracking-wide text-foreground">{title}</h3>
      <div className="mt-3 h-0.5 w-8 rounded-full bg-primary" aria-hidden />
      <div className="mt-5">{children}</div>
    </div>
  );
}

function LinkList({ label, links }: { label: string; links: { label: string; href: string }[] }) {
  return (
    <nav aria-label={label}>
      <ul className="space-y-1.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={linkClass}>
              <Chevron />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container-shell grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-10">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-5 text-sm leading-relaxed text-muted">
            Din premiumtjänst för IPTV Sverige med tusentals kanaler i HD och 4K.
          </p>
        </div>

        <FooterColumn title="Korta länkar">
          <LinkList label="Korta länkar" links={quickLinks} />
        </FooterColumn>

        <FooterColumn title="Instruktioner">
          <LinkList label="Instruktioner och guider" links={guideLinks} />
        </FooterColumn>

        <FooterColumn title="Kontakta oss">
          <ul className="space-y-4 text-sm">
            <li>
              <span className="block text-xs uppercase tracking-wide text-muted/80">E-post</span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-1 inline-block py-1 text-foreground/90 transition-colors hover:text-foreground"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={waLinks.support}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-1 font-medium text-[#25D366] transition-colors hover:text-[#4be084]"
              >
                <HeadsetIcon className="h-4 w-4" aria-hidden />
                WhatsApp Support
              </a>
            </li>
            <li className="inline-flex items-center gap-2 text-muted">
              <LockIcon className="h-4 w-4 text-primary" aria-hidden />
              Säker anslutning (SSL)
            </li>
          </ul>
        </FooterColumn>
      </div>

      <div className="border-t border-border/60">
        <div className="container-shell flex flex-col gap-4 py-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.name}. Alla rättigheter förbehållna.{" "}
            <span className="block sm:inline">Byggd för enkel streaming i Sverige.</span>
          </p>
          <nav aria-label="Juridisk information">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="py-1 transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-muted/80">IPTV Sverige | HD &amp; 4K | Support 24/7</p>
        </div>
      </div>
    </footer>
  );
}
