import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get a free consultation from ${site.name}. Call, WhatsApp or send an enquiry.`,
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return (
    <>
      <PageHeader title="Contact Us" subtitle="We'd love to hear from you — reach out anytime." />
      <div className="bg-gray-50 px-4 py-14">
        <ContactForm />
      </div>
    </>
  );
}
