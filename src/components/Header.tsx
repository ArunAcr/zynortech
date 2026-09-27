import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-ink/95 backdrop-blur text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-bold tracking-wide">
          <span className="text-brand">Z</span> {site.shortName}
        </Link>
        <nav aria-label="Main" className="hidden gap-6 text-sm lg:flex">
          {nav.map((n) => (
            <Link key={n.label} href={n.href} className="hover:text-brand">{n.label}</Link>
          ))}
        </nav>
        <Link href="/contact" className="rounded-full bg-brand px-4 py-2 text-sm font-semibold hover:bg-brand-dark">
          Get Free Consultation
        </Link>
      </div>
    </header>
  );
}
