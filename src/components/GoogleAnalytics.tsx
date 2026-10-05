"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { CONSENT_EVENT, CONSENT_STORAGE_KEY } from "@/components/CookieConsent";

function hasAnalyticsConsent() {
  try {
    return window.localStorage.getItem(CONSENT_STORAGE_KEY) === "accepted";
  } catch {
    return false;
  }
}

// Google Analytics is only loaded after the visitor has accepted cookies in
// the cookie banner. Until then no gtag.js request is made at all.
export default function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    // One-time read of browser-only storage; consent can't be known during
    // server render.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (hasAnalyticsConsent()) setGranted(true);

    const onConsent = () => {
      if (hasAnalyticsConsent()) setGranted(true);
    };
    window.addEventListener(CONSENT_EVENT, onConsent);
    return () => window.removeEventListener(CONSENT_EVENT, onConsent);
  }, []);

  if (!granted) return null;

  return (
    <>
      <Script id="google-analytics-consent" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', {
            analytics_storage: 'granted',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied'
          });
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
    </>
  );
}
