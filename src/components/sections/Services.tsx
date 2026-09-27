import Link from "next/link";
import { services } from "@/lib/site";
import ServiceIcon from "@/components/ServiceIcon";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-14">
      <h2 className="text-center text-3xl font-bold">Our Services</h2>
      <p className="mt-2 text-center text-sm text-gray-600">Complete digital solutions to grow your brand online</p>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {services.map((s) => (
          <li key={s.slug}>
            <Link
              href={`/services/${s.slug}`}
              className="block h-full rounded-xl border border-gray-100 p-5 shadow-sm transition hover:border-brand hover:shadow-md"
            >
              <span className="mb-3 block"><ServiceIcon title={s.title} /></span>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.text}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
