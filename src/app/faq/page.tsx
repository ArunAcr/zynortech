import type { Metadata } from "next";
import Faq from "@/components/sections/Faq";
import CtaStrip from "@/components/sections/CtaStrip";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about our digital marketing services.",
  alternates: { canonical: "/faq" },
};

export default function Page() {
  return (
    <>
      <Faq />
      <CtaStrip />
    </>
  );
}
