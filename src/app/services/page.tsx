import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ServiceIcon from "@/components/ServiceIcon";
import ServiceCategoryNav from "@/components/ServiceCategoryNav";
import OurProcess from "@/components/sections/OurProcess";
import Faq from "@/components/sections/Faq";
import CtaStrip from "@/components/sections/CtaStrip";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Digital Marketing Services",
  description:
    "Social media management, Instagram growth, Meta and Google Ads, website development, mobile app development, video production, branding and design.",
  alternates: { canonical: "/services" },
};

const groups = [
  {
    id: "marketing",
    label: "Marketing & Growth",
    blurb: "Get found, get followed, get chosen.",
    bg: "bg-white",
  },
  {
    id: "build",
    label: "Build & Tech",
    blurb: "Websites and apps that do the selling for you.",
    bg: "bg-gray-50",
  },
  {
    id: "creative",
    label: "Creative & Content",
    blurb: "Visuals and stories that make people stop scrolling.",
    bg: "bg-white",
  },
] as const;

export default function Page() {
  return (
    <>
      <PageHeader title="Our Services" subtitle="Everything your brand needs to grow online, under one roof." />

      <ServiceCategoryNav groups={groups} />

      {groups.map((g) => (
        <section key={g.id} id={g.id} className={`scroll-mt-32 py-14 ${g.bg}`}>
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-2xl font-bold">{g.label}</h2>
            <p className="mt-2 text-sm text-gray-600">{g.blurb}</p>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.filter((s) => s.category === g.id).map((s) => (
                <li key={s.slug} className="flex flex-col rounded-2xl border border-gray-100 p-6 shadow-sm transition hover:border-brand hover:shadow-md">
                  <ServiceIcon title={s.title} size="lg" />
                  <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{s.text}</p>
                  <ul className="mt-4 space-y-1.5 text-xs text-gray-500">
                    {s.includes.slice(0, 3).map((i) => (
                      <li key={i} className="flex gap-1.5">
                        <span className="text-brand">✓</span>{i}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${s.slug}`}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:gap-2"
                  >
                    Learn more <ArrowRight className="h-4 w-4 transition-all" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <OurProcess />
      <Faq />
      <CtaStrip />
    </>
  );
}
