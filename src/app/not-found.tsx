import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="mt-3 text-gray-600">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <Link href="/" className="mt-6 inline-block rounded-full bg-brand px-6 py-2.5 font-semibold text-white">Back to Home</Link>
    </section>
  );
}
