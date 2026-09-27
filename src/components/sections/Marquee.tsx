import { Camera } from "lucide-react";
import { services } from "@/lib/site";
import { icons } from "@/components/ServiceIcon";

// Decorative capability ticker — the same services are the real content on
// the Services section below, so this strip is hidden from screen readers.
export default function Marquee() {
  const track = [...services, ...services];
  return (
    <div className="group overflow-hidden bg-brand py-3" role="presentation" aria-hidden="true">
      <div className="flex w-max list-none animate-marquee items-center gap-10 group-hover:[animation-play-state:paused]">
        {track.map((s, i) => {
          const Icon = icons[s.title] ?? Camera;
          return (
            <span key={i} className="flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-white">
              <Icon className="h-4 w-4" aria-hidden="true" />
              {s.title}
            </span>
          );
        })}
      </div>
    </div>
  );
}
