import { waLinks } from "@/lib/data";

export default function FloatingWhatsApp() {
  const handleWhatsAppClick = () => {
    if (typeof window === "undefined") return;

    const gtag = (window as Window & {
      gtag?: (...args: unknown[]) => void;
    }).gtag;

    if (typeof gtag === "function") {
      gtag("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: "floating_whatsapp_button",
        link_url: waLinks.support,
      });
    }
  };

  return (
    <a
      href={waLinks.support}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Kontakta oss på WhatsApp"
      onClick={handleWhatsAppClick}
      className="fixed bottom-20 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl shadow-lg shadow-black/40 transition-transform hover:scale-110 sm:bottom-6 sm:right-6"
    >
      <span aria-hidden>💬</span>
    </a>
  );
}
