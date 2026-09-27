export default function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-3 max-w-2xl text-gray-300">{subtitle}</p>}
      </div>
    </section>
  );
}
