"use client";

import { useEffect, useRef, useState } from "react";
import { waLinks, welcomeOffer } from "@/lib/data";

const SEEN_KEY = "swedeniptv-welcome-offer-seen";
const OPEN_DELAY_MS = 1500;

export default function WelcomeOfferModal() {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let alreadySeen = false;
    try {
      alreadySeen = Boolean(window.localStorage.getItem(SEEN_KEY));
    } catch {
      alreadySeen = false;
    }
    if (alreadySeen) return;

    const timer = setTimeout(() => {
      try {
        window.localStorage.setItem(SEEN_KEY, "1");
      } catch {
        // ignore — worst case it can show again next visit.
      }
      setOpen(true);
    }, OPEN_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-offer-title"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm rounded-3xl border border-border bg-surface p-6 text-center shadow-2xl shadow-black/50 sm:p-8"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Stäng"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-muted hover:bg-surface-2 hover:text-foreground"
        >
          ✕
        </button>

        <span className="inline-flex items-center gap-2 rounded-full bg-offer/15 px-3 py-1 text-xs font-semibold text-offer">
          {welcomeOffer.eyebrow}
        </span>

        <h2 id="welcome-offer-title" className="mt-4 text-2xl font-extrabold sm:text-3xl">
          {welcomeOffer.title}
        </h2>

        <p className="mt-3 text-sm text-muted">{welcomeOffer.description}</p>

        <div className="mt-6 rounded-2xl border border-border bg-surface-2 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            {welcomeOffer.planLabel}
          </p>
          <div className="mt-2 flex items-center justify-center gap-3">
            <span className="text-lg text-muted line-through">
              {welcomeOffer.originalPrice} kr
            </span>
            <span className="text-4xl font-extrabold text-gradient">
              {welcomeOffer.discountedPrice} kr
            </span>
          </div>
          <p className="mt-1 text-xs text-muted">
            totalt · ca {welcomeOffer.perMonth} kr/mån
          </p>
        </div>

        <a
          href={waLinks.welcomeOffer}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="mt-6 block rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105"
        >
          Utnyttja rabatten på WhatsApp
        </a>

        <button
          type="button"
          onClick={() => setOpen(false)}
          className="mt-3 text-xs text-muted underline decoration-border underline-offset-2 hover:text-foreground"
        >
          Nej tack, fortsätt utan rabatt
        </button>

        <p className="mt-4 text-[11px] text-muted">{welcomeOffer.disclaimer}</p>
      </div>
    </div>
  );
}
