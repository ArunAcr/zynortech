import Link from "next/link";
import { site, whatsappUrl } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function CtaStrip() {
  return (
    <section className="bg-ink py-6 text-white">
      <Reveal className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-4">
        <p className="font-serif text-xl font-bold">Let&apos;s Grow Your Brand Together!</p>
        <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="rounded-full bg-brand px-5 py-2 text-sm font-semibold">Call Now</a>
        <a href={whatsappUrl} className="rounded-full border border-brand px-5 py-2 text-sm font-semibold">WhatsApp</a>
        <Link href="/contact" className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black">Get Free Consultation</Link>
      </Reveal>
    </section>
  );
}
