import Image from "next/image";

export default function HeroVisual() {
  return (
    <div className="relative animate-fade-in-up">
      <div className="absolute inset-4 -z-10 rounded-3xl bg-brand/30 blur-2xl animate-pulse-glow" aria-hidden="true" />
      <div className="relative aspect-square overflow-hidden rounded-3xl animate-float">
        <Image
          src="/images/hero-illustration.png"
          alt="Digital marketing network illustration connecting social media, search and growth icons"
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
