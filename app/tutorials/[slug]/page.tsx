import Link from "next/link";
import postsMetadata from "@/content/posts_metadata.json";

// Automatically handles the repo sub-path on GitHub Pages
const basePath = process.env.NODE_ENV === 'production' ? '/TheVirtualChemistry' : '';

export async function generateStaticParams() {
  return postsMetadata.map((post) => ({
    slug: post.slug,
  }));
}

export default async function TutorialPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const post = postsMetadata.find((p) => p.slug === slug);

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 relative z-10 fade-in">
      
      {/* Back Button */}
      <div className="mb-6">
        <Link
          href="/blog-and-tutorials"
          className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
        >
          &larr; Back to Blog & Tutorials
        </Link>
      </div>

      {/* Main Glassmorphism Article Card */}
      <article className="bg-white/85 dark:bg-[#0f172a]/85 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-blue-900/30 shadow-xl dark:shadow-2xl transition-all">
        
        {post && (
          <header className="border-b border-slate-200 dark:border-blue-900/50 pb-6 mb-6 transition-colors">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-3">
              <span>{post.date}</span>
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-slate-100 dark:bg-blue-950/60 px-2.5 py-0.5 rounded-full text-blue-700 dark:text-blue-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-2 transition-colors">
              {post.title}
            </h1>
          </header>
        )}

        {/* Native PDF Embed */}
        <div className="w-full h-[80vh] rounded-xl overflow-hidden border border-slate-200 dark:border-blue-900/50 shadow-inner">
          <iframe 
            src={`${basePath}/compiled_tutorials/${slug}.pdf`} 
            title={post?.title || "Tutorial PDF"}
            className="w-full h-full bg-slate-100 dark:bg-slate-900"
          />
        </div>

      </article>
    </div>
  );
}
