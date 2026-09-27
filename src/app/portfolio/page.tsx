import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Portfolio from "@/components/sections/Portfolio";
import CtaStrip from "@/components/sections/CtaStrip";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Social media and website projects delivered by ZynorTech for local brands.",
  alternates: { canonical: "/portfolio" },
};

export default function Page() {
  return (
    <>
      <PageHeader title="Our Portfolio" subtitle="A look at the brands we've helped grow." />
      <Portfolio />
      <CtaStrip />
    </>
  );
}
