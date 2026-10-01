import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eye, Handshake, Lightbulb, Mail, Target, type LucideIcon } from "lucide-react";
import { SiInstagram } from "react-icons/si";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Faq from "@/components/sections/Faq";
import CtaStrip from "@/components/sections/CtaStrip";
import WhyUs from "@/components/sections/WhyUs";
import Team from "@/components/sections/Team";
import { site, stats, values } from "@/lib/site";

const valueIcons: Record<string, LucideIcon> = {
  "Results First": Target,
  Transparent: Eye,
  Creative: Lightbulb,
  Reliable: Handshake,
};

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${site.name}, a digital marketing agency in ${site.address.locality} helping brands grow online.`,
  alternates: { canonical: "/about" },
};

export default function Page() {
  return (
    <>
      <PageHeader title="About ZynorTech" subtitle="A digital marketing agency helping local brands grow online." />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2">
        <Reveal>
          <h2 className="text-2xl font-bold">Who we are</h2>
          <p className="mt-3 text-gray-600">
            {site.name} is a digital marketing agency based in {site.address.locality}. We combine content, ads,
            websites and branding so small and growing businesses get one team for their whole online presence.
          </p>
          <p className="mt-3 text-gray-600">
            Our mission is simple: turn your online presence into leads, customers and long-term growth.
          </p>
          <Link href="/contact" className="mt-6 inline-block rounded-full bg-brand px-6 py-2.5 font-semibold text-white">
            Work With Us
          </Link>
        </Reveal>
        <Reveal delay={150} as="dl" className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border p-6 text-center">
              <dd className="text-3xl font-bold text-brand">{s.value}</dd>
              <dt className="mt-1 text-sm text-gray-600">{s.label}</dt>
            </div>
          ))}
        </Reveal>
      </section>
      <section className="bg-ink py-14 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-[240px_1fr]">
          <Reveal className="relative mx-auto aspect-square w-48 overflow-hidden rounded-3xl border border-white/10 sm:w-full">
            <Image
              src="/images/founder_img.png"
              alt="Founder of ZynorTech"
              fill
              sizes="(min-width: 768px) 240px, (min-width: 640px) 50vw, 192px"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={150}>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">Meet the Founder</p>
            <h2 className="mt-2 text-3xl font-bold">Sarmesh</h2>
            <p className="text-sm text-gray-300 mt-2">Founder &amp; CEO, {site.name}</p>
            <p className="mt-4 text-gray-300">
              As a digital creator and growth strategist, I’ve spent years in the trenches testing what truly moves the needle. I’ve seen firsthand how the right mix of organic influence, brand positioning, and aggressive digital execution can turn an unknown startup into a household name.

              Our growth at ZynorTech comes from one core principle: we don’t treat marketing as an expense; we treat it as an engine for enterprise value. When we partner with a brand, we don&rsquo;t just run ads—we dissect their business model, build a distinct market narrative, and unlock fresh distribution channels they never knew existed.
            </p>
            <blockquote className="mt-4 border-l-2 border-brand pl-4 font-serif italic text-gray-200">
              &ldquo;We believe every business deserves great marketing, not just the big ones.&rdquo;
            </blockquote>
            <div className="mt-6 flex gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Founder on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-brand hover:bg-white/20"
              >
                <SiInstagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email the founder"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-brand hover:bg-white/20"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
      <Team />
      <section className="bg-gray-50 py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl font-bold">Our Values</h2>
            <p className="mt-2 text-sm text-gray-600">The principles that guide every project we take on.</p>
            <ul className="mt-8 divide-y divide-gray-200 border-y border-gray-200">
              {values.map((v, i) => {
                const Icon = valueIcons[v.title] ?? Target;
                return (
                  <li key={v.title} className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center">
                    <span className="font-serif text-4xl font-bold text-brand/20 sm:w-16">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <Icon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-semibold">{v.title}</h3>
                      <p className="mt-1 text-sm text-gray-600">{v.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={150} className="rounded-2xl bg-white p-8 shadow-sm lg:mt-16">
            <h3 className="text-xl font-bold">Built Around Your Growth</h3>
            <p className="mt-3 text-gray-600">
              {site.name} started with a simple idea: growing brands shouldn&apos;t need to juggle five different
              freelancers to get their marketing right. We bring content, ads, websites, apps and branding under one
              roof, so nothing falls through the cracks between agencies.
            </p>
            <p className="mt-3 text-gray-600">
              Based in {site.address.locality}, we work closely with each client — understanding the business first,
              then building a plan around what actually moves the needle for them.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex gap-2"><span className="text-brand">✓</span> One team for your whole online presence</li>
              <li className="flex gap-2"><span className="text-brand">✓</span> Transparent reporting, always</li>
              <li className="flex gap-2"><span className="text-brand">✓</span> Growth measured in leads and sales, not just likes</li>
            </ul>
            <Link href="/contact" className="mt-6 inline-block rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white">
              Get to Know Us
            </Link>
          </Reveal>
        </div>
      </section>
      <WhyUs />
      <Faq />
      <CtaStrip />
    </>
  );
}
