"use client";
import { useState } from "react";
import Image from "next/image";
import { team, teamCategories } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function Team() {
  const [active, setActive] = useState<(typeof teamCategories)[number]>(teamCategories[0]);
  const members = team.filter((t) => t.category === active);

  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <Reveal className="text-center">
        <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-brand">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" /> Our Team
        </p>
        <h2 className="mt-3 text-3xl font-bold">Meet the People Behind ZynorTech</h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-gray-600">
          From strategy to execution, our team brings every project to life.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2" role="tablist">
          {teamCategories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={active === c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                active === c ? "border-brand bg-brand text-white" : "border-gray-200 text-gray-600 hover:border-brand hover:text-brand"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </Reveal>

      {members.length ? (
        <ul className="mt-10 flex flex-wrap justify-center gap-6">
          {members.map((t, i) => (
            <Reveal
              key={t.name}
              as="li"
              delay={(i % 4) * 80}
              className="w-[calc(50%-0.75rem)] sm:w-[calc(25%-1.125rem)]"
            >
              <div className="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition hover:border-brand hover:shadow-md">
                <div className="relative mx-auto aspect-square w-24 overflow-hidden rounded-full sm:w-28">
                  <Image src={t.image} alt={t.name} fill sizes="112px" className="object-cover" />
                </div>
                <p className="mt-4 font-semibold">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      ) : (
        <p className="mt-10 text-center text-sm text-gray-500">{active} coming soon.</p>
      )}
    </section>
  );
}
