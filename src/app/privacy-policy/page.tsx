import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects your information.`,
  alternates: { canonical: "/privacy-policy" },
};

const LAST_UPDATED = "September 28, 2026";

export default function Page() {
  return (
    <>
      <PageHeader title="Privacy Policy" subtitle={`Last updated: ${LAST_UPDATED}`} />
      <article className="mx-auto max-w-3xl space-y-8 px-4 py-14 text-gray-600">
        <p>
          {site.name} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your privacy. This policy explains
          what information we collect through our website and services, how we use it, and the choices you have.
          By using our website or engaging our services, you agree to the practices described here.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">1. Information We Collect</h2>
          <ul className="mt-3 space-y-2">
            <li>• Contact details you submit through our forms or WhatsApp, such as your name, phone number, email and business details.</li>
            <li>• Messages and enquiry content you send us.</li>
            <li>• Basic technical data (like browser type and approximate location) collected automatically when you visit the site.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">2. How We Use Your Information</h2>
          <ul className="mt-3 space-y-2">
            <li>• To respond to enquiries and provide quotes or consultations.</li>
            <li>• To deliver the marketing, design, development or content services you engage us for.</li>
            <li>• To send updates about your project, and occasionally about our services, if you&apos;ve agreed to that.</li>
            <li>• To improve our website and services.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">3. Cookies &amp; Analytics</h2>
          <p className="mt-3">
            Our website may use cookies or similar technologies to remember preferences and understand how visitors
            use the site. You can disable cookies in your browser settings; some features may work differently as a
            result.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">4. Sharing of Information</h2>
          <p className="mt-3">
            We don&apos;t sell your personal information. We may share it with trusted service providers who help us
            run our business (for example, ad platforms when running campaigns on your behalf, or hosting providers),
            and only as needed to deliver our services or where required by law.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">5. Data Security</h2>
          <p className="mt-3">
            We take reasonable steps to protect your information, but no method of storage or transmission over the
            internet is completely secure, and we can&apos;t guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">6. Your Rights</h2>
          <p className="mt-3">
            You can ask us to access, correct or delete the personal information we hold about you at any time by
            contacting us using the details below.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">7. Third-Party Links</h2>
          <p className="mt-3">
            Our website may link to third-party sites (like Instagram or WhatsApp). We aren&apos;t responsible for
            the privacy practices of those sites.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">8. Changes to This Policy</h2>
          <p className="mt-3">
            We may update this policy from time to time. Changes will be posted on this page with a new
            &quot;last updated&quot; date.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">9. Contact Us</h2>
          <p className="mt-3">
            Questions about this policy? Reach us at{" "}
            <a href={`mailto:${site.email}`} className="text-brand underline underline-offset-2">{site.email}</a>{" "}
            or {site.phone}.
          </p>
        </section>
      </article>
    </>
  );
}
