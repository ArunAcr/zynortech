import Image from "next/image";
import { clients } from "@/lib/site";

// See the TODO on the `clients` data — Instagram links are still a
// placeholder until each client's real URL is available.
// Repeated (an even number of times) so the track is wide enough to fill the
// row continuously — too few copies leaves a visible gap before it loops.
const REPEATS = 8;

export default function ClientLogos() {
  const track = Array.from({ length: REPEATS }, () => clients).flat();
  return (
    <div className="mt-10">
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Trusted by brands like</p>
      <div className="group relative mt-3 w-56 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div
          className="flex w-max animate-marquee items-center gap-4 group-hover:[animation-play-state:paused]"
          style={{ animationDuration: "18s" }}
        >
          {track.map((c, i) => (
            <a
              key={i}
              href={c.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${c.name} on Instagram`}
              title={c.name}
              className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white p-2 transition hover:border-brand"
            >
              <Image src={c.logo} alt={c.name} width={40} height={40} className="h-full w-full object-contain" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
