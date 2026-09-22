import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DevicesSection from "@/components/DevicesSection";

export const metadata: Metadata = {
  title: "Installera",
  description:
    "Så installerar du IPTV Nordic på Smart TV, Apple TV, Android TV, Fire TV, MAG Box, mobil och surfplatta. Klart på 5 minuter.",
  alternates: { canonical: "/installera" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <DevicesSection headingLevel={1} />
      </main>
      <Footer />
    </>
  );
}
