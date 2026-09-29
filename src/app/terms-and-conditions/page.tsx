import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The terms that apply when you use ${site.name}'s website or services.`,
  alternates: { canonical: "/terms-and-conditions" },
};

const LAST_UPDATED = "September 28, 2026";

export default function Page() {
  return (
    <>
      <PageHeader title="Terms & Conditions" subtitle={`Last updated: ${LAST_UPDATED}`} />
      <article className="mx-auto max-w-3xl space-y-8 px-4 py-14 text-gray-600">
        <p>
          These terms govern your use of the {site.name} website and any services you engage us for. By using our
          website, submitting an enquiry, or working with us, you agree to these terms.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">1. Our Services</h2>
          <p className="mt-3">
            We provide digital marketing and related services, including social media management, Instagram growth,
            Meta and Google Ads, website and mobile app development, video production, content creation, branding
            and graphic design. The exact scope, deliverables, timeline and cost for any project are agreed with you
            separately before work begins.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">2. Client Responsibilities</h2>
          <p className="mt-3">
            To deliver good results, we rely on you to provide accurate information, timely feedback, and access to
            any accounts, assets or approvals we need (for example, ad accounts, brand assets or website access).
            Delays on your end may affect project timelines.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">3. Payments</h2>
          <p className="mt-3">
            Pricing, payment schedules and any advance payments are agreed with you before a project starts. Ad
            spend for Meta or Google campaigns is separate from our service fees unless stated otherwise.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">4. Intellectual Property</h2>
          <p className="mt-3">
            Once a project is paid for in full, final deliverables (such as designs, content or website code) created
            specifically for you become yours to use. We may retain the right to showcase completed work in our
            portfolio unless you ask us not to.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">5. Confidentiality</h2>
          <p className="mt-3">
            We treat information you share with us about your business as confidential, and won&apos;t share it with
            third parties except where necessary to deliver our services.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">6. Limitation of Liability</h2>
          <p className="mt-3">
            While we work to deliver the best possible results, marketing outcomes (like leads, sales or rankings)
            depend on many factors outside our control, and we can&apos;t guarantee specific results. We aren&apos;t
            liable for indirect or consequential losses arising from our services.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">7. Termination</h2>
          <p className="mt-3">
            Either party may end an ongoing engagement with reasonable written notice. You remain responsible for
            payment of work completed up to the termination date.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">8. Governing Law</h2>
          <p className="mt-3">
            These terms are governed by the laws of India, and any disputes will be subject to the jurisdiction of
            the courts in {site.address.locality}, {site.address.region}.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">9. Changes to These Terms</h2>
          <p className="mt-3">
            We may update these terms from time to time. Changes will be posted on this page with a new
            &quot;last updated&quot; date.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">10. Contact Us</h2>
          <p className="mt-3">
            Questions about these terms? Reach us at{" "}
            <a href={`mailto:${site.email}`} className="text-brand underline underline-offset-2">{site.email}</a>{" "}
            or {site.phone}.
          </p>
        </section>
      </article>
    </>
  );
}
