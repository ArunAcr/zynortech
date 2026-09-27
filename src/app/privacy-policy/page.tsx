import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy-policy" },
};

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-4 text-gray-600">Content to be added.</p>
    </article>
  );
}
