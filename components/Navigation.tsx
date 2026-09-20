"use client"; // Required because we are using React state and click events for the theme toggle

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { siteConfig } from '../config/siteConfig';

// Automatically handles the repo sub-path on GitHub Pages while keeping local dev clean
const basePath = process.env.NODE_ENV === 'production' ? '/TheVirtualChemistry' : '';

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevents hydration mismatch errors by waiting until the component is mounted on the client
  useEffect(() => setMounted(true), []);

  const navLinks = [
    { name: 'Home', href: '/', show: siteConfig.features.home },
    { name: 'CV', href: '/cv', show: siteConfig.features.cv },
    { name: 'Research', href: '/research', show: siteConfig.features.research },
    { name: 'Publications', href: '/publications', show: siteConfig.features.publications },
    { name: 'Blog & Tutorials', href: '/blog-and-tutorials', show: siteConfig.features.blogAndTutorials },
    { name: 'Team', href: '/team', show: siteConfig.features.team },
    { name: 'News', href: '/news', show: siteConfig.features.news },
    { name: 'Contact', href: '/contact-and-opportunities', show: siteConfig.features.contactAndOpportunities },
  ];

  return (
    <nav className="bg-slate-50 dark:bg-[#0f172a] text-slate-900 dark:text-white p-4 shadow-md dark:shadow-lg border-b border-slate-200 dark:border-blue-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-2">
        
        {/* Main Title with Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image 
            src={`${basePath}/TVC_home_border.png`}
            alt="TVC Logo" 
            width={40} 
            height={40} 
            className="w-10 h-10 rounded-md object-contain drop-shadow-sm dark:drop-shadow-[0_0_5px_rgba(96,165,250,0.5)] transition-all"
          />
          <span className="font-bold text-2xl tracking-wider text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
            {siteConfig.name}
          </span>
        </Link>

        {/* Links & Theme Toggle Container */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          
          {/* Children Tabs */}
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks
              .filter((link) => link.show)
              .map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-blue-700 dark:text-blue-400 text-lg font-semibold hover:text-blue-900 dark:hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
          </ul>

          {/* Light/Dark Mode Toggle Button */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle Dark Mode"
              className="flex items-center justify-center p-2.5 rounded-full bg-slate-200 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 hover:bg-slate-300 dark:hover:bg-blue-800/60 border border-transparent dark:border-blue-800/50 transition-all shadow-sm"
            >
              {theme === 'dark' ? (
                // Sun Icon
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                // Moon Icon
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          )}
        </div>

      </div>
    </nav>
  );
}
