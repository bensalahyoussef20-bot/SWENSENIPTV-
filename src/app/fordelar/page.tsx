import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";

export const metadata: Metadata = {
  title: "Fördelar",
  description:
    "Därför väljer tusentals svenskar IPTV Nordic: 20 000+ kanaler, ingen buffring, HD/4K-kvalitet, multi-screen och pengarna-tillbaka-garanti.",
  alternates: { canonical: "/fordelar" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <BenefitsSection headingLevel={1} />
      </main>
      <Footer />
    </>
  );
}
