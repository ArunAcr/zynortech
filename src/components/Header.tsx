"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { legalNav, nav } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 text-gray-900 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" onClick={() => setOpen(false)}>
          <Image src="/images/zyno_logo_full.png" alt="ZynorTech" width={1160} height={341} className="h-9 w-auto" priority />
        </Link>

        <nav aria-label="Main" className="hidden gap-6 text-sm lg:flex">
          {nav.map((n) => (
            <Link key={n.label} href={n.href} className="hover:text-brand">{n.label}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact" className="hidden rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark sm:block">
            Get Free Consultation
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 lg:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-gray-100 bg-white px-4 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {[...nav, ...legalNav].map((n) => (
              <li key={n.label} className="border-b border-gray-100">
                <Link href={n.href} onClick={() => setOpen(false)} className="block py-3 text-sm hover:text-brand">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-brand px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-brand-dark"
          >
            Get Free Consultation
          </Link>
        </nav>
      )}
    </header>
  );
}
