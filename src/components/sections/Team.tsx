import Image from "next/image";
import { User } from "lucide-react";
import { team } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function Team() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <Reveal>
        <h2 className="text-center text-2xl font-bold">Meet the Team</h2>
        <p className="mt-2 text-center text-sm text-gray-600">The people behind your brand&apos;s growth.</p>
      </Reveal>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((t, i) => (
          <Reveal key={i} as="li" delay={(i % 3) * 80}>
            <div className="group h-80" style={{ perspective: "1200px" }}>
              <div
                tabIndex={0}
                className="relative h-full w-full cursor-pointer outline-none transition-transform duration-500 group-hover:[transform:rotateY(180deg)] group-focus-visible:[transform:rotateY(180deg)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-gray-100 p-6 text-center shadow-sm"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <span className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-brand/10 text-brand">
                    {t.image ? (
                      <Image src={t.image} alt={t.name} fill className="object-cover" />
                    ) : (
                      <User className="h-10 w-10" aria-hidden="true" />
                    )}
                  </span>
                  <p className="mt-4 font-semibold">{t.name}</p>
                  <p className="mt-1 text-sm text-gray-500">{t.role}</p>
                  <p className="mt-3 text-xs text-gray-400">Hover to read more</p>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-ink p-6 text-center text-white shadow-sm"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <p className="font-semibold">{t.name}</p>
                  <p className="mt-1 text-xs text-brand">{t.role}</p>
                  <p className="mt-3 text-xs leading-relaxed text-gray-300">{t.bio}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
