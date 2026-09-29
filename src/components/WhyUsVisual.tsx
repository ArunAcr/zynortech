import { ShieldCheck } from "lucide-react";
import ProcessSteps from "@/components/ProcessSteps";

// Trust badge + process panel (no stock photo) so the visual stays honest.
export default function WhyUsVisual() {
  return (
    <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-deep via-ink to-black p-8 lg:max-w-none">
      <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-brand/25 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-14 -left-10 h-56 w-56 rounded-full bg-brand/15 blur-3xl" aria-hidden="true" />

      <div className="relative flex flex-col items-center gap-8">
        <span
          className="flex h-24 w-24 animate-float items-center justify-center rounded-full border-2 border-brand bg-ink"
          style={{ boxShadow: "0 0 30px var(--brand)" }}
        >
          <ShieldCheck className="h-11 w-11 text-brand" aria-hidden="true" />
        </span>

        <div className="w-full">
          <ProcessSteps compact dark />
        </div>
      </div>
    </div>
  );
}
