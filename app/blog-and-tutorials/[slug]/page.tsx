// This tells Next.js what static pages to generate during the build process
export function generateStaticParams() {
  return [
    { slug: 'coming-soon' } // A dummy slug to satisfy the compiler
  ];
}

export default function PlaceholderPage() {
  return (
    <div className="flex items-center justify-center min-h-[50vh] mt-8 fade-in">
      <h1 className="text-3xl font-bold text-slate-300">
        Blog Post Coming Soon
      </h1>
    </div>
  );
}
