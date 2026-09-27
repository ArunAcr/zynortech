"use client";
import { useState } from "react";
import { Plus, User } from "lucide-react";
import { faqJsonLd } from "@/lib/jsonld";
import { faqs, site } from "@/lib/site";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-gray-50 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-start">
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold text-brand">
            <span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" /> FAQs
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight">Frequently Asked Questions</h2>

          <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
              <User className="h-7 w-7" aria-hidden="true" />
            </span>
            <p className="mt-4 text-lg font-semibold">Book a 15 min call</p>
            <p className="mt-2 text-sm text-gray-600">
              Still have questions? Call with us for 15 min before you decide.
            </p>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 block rounded-full bg-brand py-2.5 text-center text-sm font-semibold text-white hover:bg-brand-dark"
            >
              Book a Free Call
            </a>
          </div>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = i === open;
            return (
              <div key={f.q} className="rounded-xl border bg-white p-5 shadow-sm">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 text-left font-medium"
                >
                  {f.q}
                  <Plus
                    className={`h-5 w-5 shrink-0 text-brand transition-transform ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && <p className="mt-3 text-sm text-gray-600">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </section>
  );
}
