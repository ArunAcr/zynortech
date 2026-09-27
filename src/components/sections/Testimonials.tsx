"use client";
import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/site";

const AUTOPLAY_MS = 4000;

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (paused || reduceMotion.current) return;
    const id = setInterval(() => setActive((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, count]);

  const current = testimonials[active];

  return (
    <section className="relative overflow-hidden bg-gray-50 py-16">
      <div className="relative mx-auto max-w-2xl px-4 text-center">
        <h2 className="text-3xl font-bold">What People Say</h2>
        <p className="mt-4 text-sm text-gray-600 spacing-4">
          Discover what our satisfied clients have to <span className="block">say about their experience working with us.</span>
        </p>
      </div>

      

      <div
        className="relative mx-auto mt-10 max-w-4xl rounded-2xl bg-white px-8 py-10 shadow-xl sm:px-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="grid gap-8 sm:grid-cols-[auto_1fr]">
          <ul
            role="tablist"
            aria-label="Choose a testimonial"
            className="relative flex shrink-0 flex-col gap-5 border-l-2 border-dashed border-brand/30 pl-5 sm:w-52"
          >
            {testimonials.map((t, i) => {
              const isActive = i === active;
              return (
                <li key={t.name} className={i % 2 ? "sm:translate-x-3" : undefined}>
                  <button
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(i)}
                    className="-ml-[calc(1.25rem+1px)] flex items-center gap-3 rounded-lg py-1 pl-[calc(1.25rem+1px)] pr-2 text-left transition"
                  >
                    <span
                      className={`flex shrink-0 items-center justify-center rounded-full font-bold text-white transition-all ${
                        isActive ? "h-12 w-12 bg-brand text-base" : "h-9 w-9 bg-gray-300 text-xs"
                      }`}
                    >
                      {t.name.charAt(0)}
                    </span>
                    <span>
                      <span className={`block text-sm ${isActive ? "font-semibold text-gray-900" : "text-gray-400"}`}>
                        {t.name}
                      </span>
                      <span className={`flex items-center gap-1 text-xs ${isActive ? "text-brand" : "text-gray-300"}`}>
                        ★★★★★
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div key={active} className="animate-fade-in-up self-center">
            <Quote className="h-8 w-8 text-brand/20" aria-hidden="true" />
            <blockquote className="mt-2 font-serif text-lg italic leading-relaxed text-gray-800 sm:text-xl">
              {current.quote}
            </blockquote>
            <p className="mt-4 text-sm text-gray-500">{current.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
