import { Clock, Headphones, Target, Users, Wallet, type LucideIcon } from "lucide-react";
import { whyUs } from "@/lib/site";
import WhyUsVisual from "@/components/WhyUsVisual";
import Reveal from "@/components/Reveal";

const icons: Record<string, LucideIcon> = {
  "Result Driven Strategies": Target,
  "Creative & Trusted Team": Users,
  "On-Time Delivery": Clock,
  "Affordable Packages": Wallet,
  "24/7 Support & Guidance": Headphones,
};

export default function WhyUs() {
  return (
    <section className="bg-ink py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[minmax(0,380px)_1fr] lg:items-start">
        <Reveal>
          <WhyUsVisual />
        </Reveal>
        <div>
          <Reveal>
            <h2 className="text-3xl font-bold">Why Choose Us?</h2>
            <p className="mt-2 text-sm text-gray-300">
              What sets ZynorTech apart, from strategy to delivery.
            </p>
          </Reveal>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {whyUs.map((w, i) => {
              const Icon = icons[w.title] ?? Target;
              return (
                <Reveal
                  key={w.title}
                  as="li"
                  delay={(i % 2) * 80}
                  className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand/15 text-brand">
                    <Icon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span>
                    <p className="font-semibold">{w.title}</p>
                    <p className="mt-1 text-sm text-gray-300">{w.text}</p>
                  </span>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
