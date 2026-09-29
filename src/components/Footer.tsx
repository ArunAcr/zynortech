import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SiInstagram } from "react-icons/si";
import { legalNav, nav, services, site } from "@/lib/site";

const quickServices = services.slice(0, 6);

export default function Footer() {
  return (
    <footer className="bg-ink text-sm text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-bold text-white"><span className="text-brand">Z</span> {site.shortName}</p>
          <p className="mt-3 max-w-xs text-gray-400">
            A digital marketing agency in {site.address.locality} helping local brands grow online.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ZynorTech on Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-brand hover:text-white"
            >
              <SiInstagram className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with ZynorTech on WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-brand hover:text-white"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div>
          <p className="font-semibold text-white">Quick Links</p>
          <nav aria-label="Footer" className="mt-4 flex flex-col gap-2">
            {nav.map((n) => (
              <Link key={n.label} href={n.href} className="hover:text-brand">{n.label}</Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="font-semibold text-white">Services</p>
          <nav aria-label="Footer services" className="mt-4 flex flex-col gap-2">
            {quickServices.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="hover:text-brand">{s.title}</Link>
            ))}
          </nav>
        </div>

        <address className="not-italic">
          <p className="font-semibold text-white">Contact Info</p>
          <ul className="mt-4 space-y-3">
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-brand">{site.phone}</a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="hover:text-brand">{site.email}</a>
            </li>
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              {site.address.locality}, {site.address.region}, India
            </li>
          </ul>
        </address>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ZYNORTECH. All Rights Reserved.</p>
          <nav aria-label="Legal" className="flex gap-4">
            {legalNav.map((n) => (
              <Link key={n.label} href={n.href} className="hover:text-brand">{n.label}</Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
