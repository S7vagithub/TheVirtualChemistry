"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Automatically handles the repo sub-path on GitHub Pages while keeping local dev clean
const basePath = process.env.NODE_ENV === 'production' ? '/TheVirtualChemistry' : '';

// We store the publications here so the search bar can filter them easily
const publicationsData = [
  {
    id: "spin-crossover",
    year: "2026",
    title: <>Computational Insights Into Light-Induced Spin Crossover and Magnetic Properties of [Fe<sup>II</sup>(Tp)(CN)<sub>3</sub>]<sup>-2</sup> Complex</>,
    // Updated author highlight to support light/dark mode
    authors: <><strong className="text-blue-700 dark:text-blue-300 transition-colors">S Samanta</strong>, S Ray, P Mondal</>,
    journal: "Advanced Theory and Simulations",
    citation: "9 (2), e01684",
    link: "https://doi.org/10.1002/adts.202501684",
    image: `${basePath}/toc_lisco.png`,
    searchString: "computational insights into light-induced spin crossover magnetic properties s samanta ray mondal advanced theory simulations",
  },
  {
    id: "biopterin",
    year: "2024",
    title: "A Comprehensive Computational Study on the Thermodynamics and Kinetics of Tetrahydrobiopterin Regeneration Process",
    authors: <><strong className="text-blue-700 dark:text-blue-300 transition-colors">S Samanta</strong>, P Mondal</>,
    journal: "ChemPhysChem",
    citation: "25 (19), e202400401",
    link: "https://doi.org/10.1002/cphc.202400401",
    image: `${basePath}/toc_biop.jpg`,
    searchString: "comprehensive computational study thermodynamics kinetics tetrahydrobiopterin regeneration s samanta mondal chemphyschem",
  },
  {
    id: "fluorescein",
    year: "2024",
    title: "Unraveling the mystery of solvation-dependent fluorescence of fluorescein dianion using computational study",
    authors: <>A Roy, <strong className="text-blue-700 dark:text-blue-300 transition-colors">S Samanta</strong>, S Ray, P Mondal</>,
    journal: "The Journal of Chemical Physics",
    citation: "160 (3)",
    link: "https://doi.org/10.1063/5.0180218",
    image: `${basePath}/toc_fluorescein.jpeg`,
    searchString: "unraveling mystery solvation-dependent fluorescence fluorescein dianion a roy s samanta ray mondal journal chemical physics",
  }
];

export default function Publications() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openYears, setOpenYears] = useState<Record<string, boolean>>({
    "2026": true,
    "2024": true,
  });

  const toggleYear = (year: string) => {
    setOpenYears((prev) => ({ ...prev, [year]: !prev[year] }));
  };

  // Filter the publications based on what is typed in the search bar
  const filteredPubs = publicationsData.filter((pub) =>
    pub.searchString.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group the filtered results back into their years
  const groupedPubs = filteredPubs.reduce((acc, pub) => {
    if (!acc[pub.year]) acc[pub.year] = [];
    acc[pub.year].push(pub);
    return acc;
  }, {} as Record<string, typeof publicationsData>);

  // Sort years in descending order (newest first)
  const years = Object.keys(groupedPubs).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="space-y-12 mt-8 fade-in max-w-5xl relative z-10">
      
      {/* Page Header with Search Widget */}
      <div className="border-b border-slate-200 dark:border-blue-900/50 pb-6 flex flex-col md:flex-row md:justify-between md:items-end gap-4 transition-colors">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors">
          Publications
        </h1>
        
        {/* The Search Bar */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search authors, titles, or journals..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border border-slate-300 dark:border-blue-900/50 rounded-lg py-2.5 pl-10 pr-4 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm"
          />
          <svg className="absolute left-3 top-3 w-4 h-4 text-slate-400 dark:text-slate-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Render the grouped publications */}
      <div className="space-y-10">
        {years.length === 0 ? (
          <p className="text-slate-500 dark:text-slate-400 text-center py-8 transition-colors">No publications found matching "{searchTerm}".</p>
        ) : (
          years.map((year) => {
            // Force the accordion open if the user is actively searching
            const isYearOpen = searchTerm.length > 0 ? true : openYears[year];

            return (
              <div key={year}>
                {/* Year Header / Toggle Button */}
                <button 
                  onClick={() => toggleYear(year)}
                  className="w-full flex justify-between items-center py-4 border-b-2 border-slate-200 dark:border-blue-900/50 hover:border-blue-400 dark:hover:border-blue-400 transition-colors group"
                >
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-200 transition-colors">{year}</h2>
                  <svg 
                    className={`w-8 h-8 text-blue-600 dark:text-blue-400 transform transition-transform duration-300 ${isYearOpen ? 'rotate-180' : 'rotate-0'}`} 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Collapsible Content */}
                <div className={`space-y-6 overflow-hidden transition-all duration-500 ease-in-out ${isYearOpen ? 'max-h-[3000px] opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}`}>
                  {groupedPubs[year].map((pub) => (
                    <section key={pub.id} id={pub.id} className="bg-white/85 dark:bg-[#0f172a]/85 backdrop-blur-md rounded-xl border border-slate-200 dark:border-blue-900/30 overflow-hidden hover:border-blue-400 dark:hover:border-blue-500/50 transition-all shadow-xl dark:shadow-2xl group">
                      <div className="flex flex-col md:flex-row">
                        <div className="p-6 md:w-2/3 flex flex-col space-y-3">
                          <h3 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-200 transition-colors">
                            {pub.title}
                          </h3>
                          <p className="text-slate-700 dark:text-slate-400 transition-colors">
                            {pub.authors}
                          </p>
                          <p className="text-sm font-mono text-slate-600 dark:text-slate-500 transition-colors">
                            <span className="text-blue-700 dark:text-blue-400 font-semibold transition-colors">{pub.journal}</span> {pub.citation}
                          </p>
                          <div className="pt-2 mt-auto">
                            <Link 
                              href={pub.link} 
                              target="_blank"
                              className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-800 dark:text-white bg-blue-50 dark:bg-blue-900/50 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900/50 border border-blue-200 dark:border-blue-700/50 transition-all"
                            >
                              DOI ↗
                            </Link>
                          </div>
                        </div>
                        {/* TOC Image */}
                        <div className="bg-slate-50/50 dark:bg-[#020617] md:w-1/3 p-4 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-slate-200 dark:border-blue-900/30 transition-colors">
                          <div className="relative w-full h-48 md:h-full min-h-[180px]">
                            <Image 
                              src={pub.image} 
                              alt={`TOC Graphic for ${pub.journal} paper`} 
                              fill 
                              className="object-contain p-2 drop-shadow-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </section>
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
