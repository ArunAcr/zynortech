import Link from "next/link";
import { services } from "@/lib/site";
import ServiceIcon from "@/components/ServiceIcon";
import Reveal from "@/components/Reveal";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-14">
      <Reveal>
        <h2 className="text-center text-3xl font-bold">Our Services</h2>
        <p className="mt-2 text-center text-sm text-gray-600">Complete digital solutions to grow your brand online</p>
      </Reveal>
      <ul className="mt-10 flex flex-wrap justify-center gap-4">
        {services.map((s, i) => (
          <Reveal
            key={s.slug}
            as="li"
            delay={(i % 4) * 80}
            className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]"
          >
            <Link
              href={`/services/${s.slug}`}
              className="block h-full rounded-xl border border-gray-100 p-5 shadow-sm transition hover:border-brand hover:shadow-md"
            >
              <span className="mb-3 block"><ServiceIcon title={s.title} /></span>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.text}</p>
            </Link>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
