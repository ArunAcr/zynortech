import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import ServiceIcon from "@/components/ServiceIcon";
import CtaStrip from "@/components/sections/CtaStrip";
import { services, site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: s.title,
    description: `${s.text} ${s.title} by ${site.name}, ${site.address.locality}.`,
    alternates: { canonical: `/services/${s.slug}` },
  };
}

export default async function Page({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== s.slug);

  return (
    <>
      <PageHeader title={s.title} subtitle={s.text} />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[2fr_1fr]">
        <div>
          <ServiceIcon title={s.title} size="lg" />
          <p className="mt-6 text-lg text-gray-700">{s.intro}</p>
          <h2 className="mt-8 text-xl font-bold">What&apos;s included</h2>
          <ul className="mt-4 space-y-2">
            {s.includes.map((i) => <li key={i}>✓ {i}</li>)}
          </ul>
          <Link href="/contact" className="mt-8 inline-block rounded-full bg-brand px-6 py-2.5 font-semibold text-white">
            Get a Free Consultation
          </Link>
        </div>
        <aside className="rounded-xl border p-5">
          <h2 className="font-semibold">Other services</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {others.map((o) => (
              <li key={o.slug}><Link href={`/services/${o.slug}`} className="hover:text-brand">{o.title}</Link></li>
            ))}
          </ul>
        </aside>
      </section>
      <CtaStrip />
    </>
  );
}
