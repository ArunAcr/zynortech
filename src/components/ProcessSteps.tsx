import { Award, BarChart3, Rocket, Search, Target, type LucideIcon } from "lucide-react";
import { processSteps } from "@/lib/site";

const icons: LucideIcon[] = [Search, Target, Rocket, BarChart3, Award];

export default function ProcessSteps({ compact = false, dark = false }: { compact?: boolean; dark?: boolean }) {
  // Compact (used inside the small WhyUs badge panel): a tight numbered list.
  if (compact) {
    return (
      <div>
        <h2 className={`text-lg font-bold ${dark ? "text-white" : ""}`}>Our Process</h2>
        <ol className="mt-4 space-y-3">
          {processSteps.map((step, i) => (
            <li key={step.title} className={`flex items-center gap-3 text-sm ${dark ? "text-gray-200" : ""}`}>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-semibold text-brand ${
                  dark ? "bg-white/10" : "bg-brand/10"
                }`}
              >
                {i + 1}
              </span>
              {step.title}
            </li>
          ))}
        </ol>
      </div>
    );
  }

  // Full size (used on the Services page): a connected vertical timeline
  // with an icon and short description per step.
  return (
    <div>
      <h2 className={`text-2xl font-bold ${dark ? "text-white" : ""}`}>Our Process</h2>
      <ol className="relative mt-6 space-y-8">
        <div
          className={`absolute left-6 top-2 bottom-2 w-px ${dark ? "bg-white/15" : "bg-gray-200"}`}
          aria-hidden="true"
        />
        {processSteps.map((step, i) => {
          const Icon = icons[i] ?? Award;
          return (
            <li key={step.title} className="relative flex gap-5">
              <span
                className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-brand font-semibold text-brand ${
                  dark ? "bg-ink" : "bg-white"
                }`}
              >
                <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <div className="pt-1.5">
                <p className={`text-xs font-semibold uppercase tracking-widest text-brand`}>
                  Step {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className={`mt-0.5 font-semibold ${dark ? "text-white" : "text-gray-900"}`}>{step.title}</h3>
                <p className={`mt-1 text-sm ${dark ? "text-gray-300" : "text-gray-600"}`}>{step.text}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
