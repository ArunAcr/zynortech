"use client";
import { useEffect, useState } from "react";

type Group = { id: string; label: string };

// Sticky bar's own height (approx: header ~64px + this nav's ~56px) — the
// line a section has to cross to count as "current".
const ACTIVATION_OFFSET = 140;

// Segmented tab bar with a scroll-spy active state — highlights whichever
// category section the visitor has scrolled to. Tracks raw scroll position
// (rather than IntersectionObserver ratios) so it stays accurate even
// though the sections are very different heights.
export default function ServiceCategoryNav({ groups }: { groups: readonly Group[] }) {
  const [active, setActive] = useState(groups[0]?.id);

  useEffect(() => {
    const ids = groups.map((g) => g.id);

    function onScroll() {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - ACTIVATION_OFFSET <= 0) {
          current = id;
        }
      }
      setActive(current);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [groups]);

  return (
    <nav aria-label="Jump to a service category" className="sticky top-16 z-30 border-b bg-white/95 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-7xl justify-center px-4">
        <div className="inline-flex flex-wrap justify-center gap-1 rounded-full bg-gray-100 p-1">
          {groups.map((g) => {
            const isActive = active === g.id;
            return (
              <a
                key={g.id}
                href={`#${g.id}`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => setActive(g.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive ? "bg-brand text-white shadow-sm" : "text-gray-600 hover:text-brand"
                }`}
              >
                {g.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
