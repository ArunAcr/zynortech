import Link from "next/link";
import { legalNav, nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-sm text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-white"><span className="text-brand">Z</span> {site.shortName}</p>
          <p className="mt-2">© {new Date().getFullYear()} ZYNORTECH. All Rights Reserved.</p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-2">
          {[...nav, ...legalNav].map((n) => (
            <Link key={n.label} href={n.href} className="hover:text-brand">{n.label}</Link>
          ))}
        </nav>
        <address className="not-italic space-y-2">
          <p className="font-semibold text-white">Contact Info</p>
          <p><a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a></p>
          <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
          <p>{site.address.locality}, {site.address.region}, India</p>
        </address>
      </div>
    </footer>
  );
}
