import Link from "next/link";
import { legalLinks, navLinks, siteConfig } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/40 py-14">
      <div className="container-shell grid gap-10 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
              TV
            </span>
            <span className="text-sm font-bold">{siteConfig.name}</span>
          </div>
          <p className="mt-4 text-sm text-muted">
            Din premiumtjänst för nordisk iptv — IPTV Nordic med tusentals
            kanaler i HD och 4K.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-4 inline-block text-sm text-muted hover:text-foreground"
          >
            ✉ {siteConfig.email}
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Navigering</h3>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <span className="text-sm text-muted">FAQ</span>
            </li>
            <li>
              <span className="text-sm text-muted">Support 24/7</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Legal</h3>
          <ul className="mt-4 space-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-shell mt-10 border-t border-border pt-6 text-center text-xs text-muted">
        © {year} {siteConfig.name}. Alla rättigheter förbehållna.
        <br />
        Byggd för enkel streaming i Sverige.
      </div>
    </footer>
  );
}
