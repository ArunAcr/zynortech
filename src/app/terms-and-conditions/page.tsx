import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-bold">Terms & Conditions</h1>
      <p className="mt-4 text-gray-600">Content to be added.</p>
    </article>
  );
}
