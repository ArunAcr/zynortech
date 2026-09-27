import Link from "next/link";
import ProcessSteps from "@/components/ProcessSteps";

export default function OurProcess() {
  return (
    <section className="bg-ink py-14 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:items-start">
        <ProcessSteps dark />

        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <h3 className="text-xl font-bold">How We Work With You</h3>
          <p className="mt-3 text-gray-300">
            Whichever service you start with — ads, content, a website or your whole online presence — it runs
            through the same process above, backed by a team that keeps you in the loop at every step.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-gray-200">
            <li className="flex gap-2"><span className="text-brand">✓</span> A dedicated point of contact, not a support queue</li>
            <li className="flex gap-2"><span className="text-brand">✓</span> Clear monthly reports on what&apos;s actually working</li>
            <li className="flex gap-2"><span className="text-brand">✓</span> Flexible engagements, no long lock-in contracts</li>
            <li className="flex gap-2"><span className="text-brand">✓</span> One team across marketing, design and development</li>
          </ul>
          <Link href="/contact" className="mt-6 inline-block rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark">
            Start a Project
          </Link>
        </div>
      </div>
    </section>
  );
}
