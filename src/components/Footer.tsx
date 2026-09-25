import Link from "next/link";
import { footerNavLinks, legalLinks, siteConfig } from "@/lib/data";
import Logo from "@/components/Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/40 py-14">
      <div className="container-shell grid gap-10 sm:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-muted">
            Din premiumtjänst för IPTV Sverige med tusentals
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
            {footerNavLinks.map((link) => (
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
