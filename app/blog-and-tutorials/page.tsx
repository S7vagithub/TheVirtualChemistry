"use client";

import { useState } from "react";
import Link from "next/link";
import postsMetadata from "@/content/posts_metadata.json"; // Your metadata file

export default function BlogAndTutorials() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Filter posts based on selected tag if user clicks one in the sidebar
  const filteredPosts = selectedTag 
    ? postsMetadata.filter(post => post.tags.includes(selectedTag))
    : postsMetadata;

  // Extract all unique tags for the Tag Cloud
  const allTags = Array.from(new Set(postsMetadata.flatMap(post => post.tags)));

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 relative z-10 fade-in">
      
      {/* Page Header */}
      <div className="border-b border-slate-200 dark:border-blue-900/50 pb-6 mb-10 transition-colors">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-2 transition-colors">
          Blog & Tutorials
        </h1>
        <p className="text-lg text-blue-700 dark:text-blue-300 transition-colors">
          Computational workflows, research notes, and step-by-step LaTeX guides.
        </p>
      </div>

      {/* Two-Column Academic Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* MAIN CONTENT AREA (Left 3 columns) */}
        <div className="lg:col-span-3 space-y-6">
          {selectedTag && (
            <div className="flex items-center justify-between bg-blue-50 dark:bg-blue-950/40 px-4 py-2 rounded-lg border border-blue-200 dark:border-blue-900/50">
              <span className="text-sm text-blue-800 dark:text-blue-300">
                Filtering by tag: <strong className="font-mono">#{selectedTag}</strong>
              </span>
              <button 
                onClick={() => setSelectedTag(null)}
                className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
              >
                Clear filter
              </button>
            </div>
          )}

          {filteredPosts.length === 0 ? (
            <div className="bg-white/85 dark:bg-[#0f172a]/85 backdrop-blur-md p-8 rounded-2xl border border-slate-200 dark:border-blue-900/30 text-center text-slate-500">
              No tutorials found with this tag.
            </div>
          ) : (
            filteredPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white/85 dark:bg-[#0f172a]/85 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-blue-900/30 shadow-xl dark:shadow-2xl hover:border-blue-400 dark:hover:border-blue-500/50 transition-all group"
              >
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-3">
                  <span>{post.date}</span>
                  <div className="flex gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="bg-slate-100 dark:bg-blue-950/60 px-2.5 py-0.5 rounded-full text-blue-700 dark:text-blue-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Link href={`/tutorials/${post.slug}`}>
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors mb-3">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {post.description}
                </p>

                <Link 
                  href={`/tutorials/${post.slug}`}
                  className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
                >
                  Read Tutorial &rarr;
                </Link>
              </article>
            ))
          )}
        </div>

        {/* ACADEMIC SIDEBAR (Right 1 column) */}
        <aside className="space-y-6">
          
          {/* Quick Navigation Box */}
          <div className="bg-white/85 dark:bg-[#0f172a]/85 backdrop-blur-md p-6 rounded-2xl border border-slate-200 dark:border-blue-900/30 shadow-xl">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-blue-900/30 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>
                <Link href="/cv" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  &rarr; Curriculum Vitae
                </Link>
              </li>
              <li>
                <Link href="/research" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  &rarr; Research Themes
                </Link>
              </li>
              <li>
                <Link href="/publications" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  &rarr; Publications Database
                </Link>
              </li>
            </ul>
          </div>

          {/* Tag Cloud Widget */}
          <div className="bg-white/85 dark:bg-[#0f172a]/85 backdrop-blur-md p-6 rounded-2xl border border-slate-200 dark:border-blue-900/30 shadow-xl">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-blue-900/30 pb-2">
              Tag Cloud
            </h3>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                  className={`text-xs font-mono px-3 py-1 rounded-lg transition-all border ${
                    selectedTag === tag 
                      ? "bg-blue-600 text-white border-blue-600 shadow-md" 
                      : "bg-slate-100 dark:bg-blue-950/50 text-slate-700 dark:text-blue-300 border-slate-200 dark:border-blue-900/40 hover:border-blue-500"
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          {/* Workflow Archive Widget */}
          <div className="bg-white/85 dark:bg-[#0f172a]/85 backdrop-blur-md p-6 rounded-2xl border border-slate-200 dark:border-blue-900/30 shadow-xl">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-blue-900/30 pb-2">
              Workflow Archive
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Archived computational scripts, constants, and raw input templates will appear here as entries grow.
            </p>
          </div>

        </aside>

      </div>
    </div>
  );
}
