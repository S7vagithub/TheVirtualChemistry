export default function BlogAndTutorials() {
  return (
    <div className="space-y-12 mt-8 fade-in max-w-5xl">
      
      {/* Page Header */}
      <div className="border-b border-blue-900/50 pb-6">
        <h1 className="text-4xl font-bold tracking-tight text-white mb-2">
          Blog & Tutorials
        </h1>
        <p className="text-lg text-blue-300">
          Sharing knowledge, scripts, and computational workflows.
        </p>
      </div>

      {/* Temporary Placeholder Box */}
      <div className="text-slate-300 leading-relaxed max-w-3xl">
        <div className="bg-[#0f172a] p-8 rounded-xl border border-blue-900/30">
          <p className="italic text-slate-400">
            [Placeholder: A dynamic list of your Markdown/MDX files will automatically appear here once we set up the content reader.]
          </p>
        </div>
      </div>
      
    </div>
  );
}
