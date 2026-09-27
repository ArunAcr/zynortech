"use client";
import { useState } from "react";
import { Play } from "lucide-react";
import { portfolio, portfolioFilters } from "@/lib/site";

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const items = active === "All" ? portfolio : portfolio.filter((p) => p.category === active);
  return (
    <section id="portfolio" className="bg-ink py-12 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-bold">Our Portfolio</h2>
        <div className="mt-5 flex flex-wrap justify-center gap-2" role="tablist">
          {portfolioFilters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              aria-pressed={active === f}
              className={`rounded-full border px-4 py-1 text-xs ${active === f ? "border-brand bg-brand" : "border-brand/50"}`}
            >
              {f}
            </button>
          ))}
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-5">
          {items.map((p) => (
            <li key={p.title}>
              <a
                href={p.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Watch ${p.title} on Instagram`}
                className="group relative block aspect-[4/5] overflow-hidden rounded-lg bg-deep p-3 text-sm text-brand"
              >
                {/* TODO: swap for the real video thumbnail via next/image */}
                <span className="relative z-10">{p.tagline}</span>
                <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/40">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-lg transition group-hover:scale-110">
                    <Play className="ml-0.5 h-5 w-5 fill-ink text-ink" aria-hidden="true" />
                  </span>
                </span>
              </a>
              <p className="mt-2 text-center text-xs">{p.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
