import Link from "next/link";
import { site, stats } from "@/lib/site";
import HeroVisual from "@/components/HeroVisual";
import ClientLogos from "@/components/ClientLogos";

export default function Hero() {
  return (
    <section id="about" className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">Grow. Connect. Succeed.</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">
            We Build Brands <span className="block text-brand">Digitally</span>
          </h1>
          <p className="mt-4 max-w-md text-gray-300">
            From content to conversions – we handle it all. Let your brand shine online.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="rounded-full bg-brand px-6 py-2.5 font-semibold">Call Now</a>
            <a href={`https://wa.me/${site.whatsapp}`} className="rounded-full border border-brand px-6 py-2.5 font-semibold">WhatsApp</a>
            {/* <Link href="/contact" className="rounded-full bg-white px-6 py-2.5 font-semibold text-black">Get Free Consultation</Link> */}
          </div>
          {/* <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dd className="text-xl font-bold">{s.value}</dd>
                <dt className="text-xs text-gray-400">{s.label}</dt>
              </div>
            ))}
          </dl> */}
          <ClientLogos />
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
