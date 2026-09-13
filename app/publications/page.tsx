"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// 1. Statically import the TOC images
import tocLisco from "../public/toc_lisco.png";
import tocBiop from "../public/toc_biop.jpg";
import tocFluor from "../public/toc_fluorescein.jpeg";

const publicationsData = [
  {
    id: "spin-crossover",
    year: "2026",
    title: <>Computational Insights Into Light-Induced Spin Crossover and Magnetic Properties of [Fe<sup>II</sup>(Tp)(CN)<sub>3</sub>]<sup>-2</sup> Complex</>,
    authors: <><strong className="text-blue-300">S Samanta</strong>, S Ray, P Mondal</>,
    journal: "Advanced Theory and Simulations",
    citation: "9 (2), e01684",
    link: "https://doi.org/10.1002/adts.202501684",
    image: tocLisco, // 2. Use imported variable (no quotes!)
    searchString: "computational insights into light-induced spin crossover magnetic properties s samanta ray mondal advanced theory simulations",
  },
  {
    id: "biopterin",
    year: "2024",
    title: "A Comprehensive Computational Study on the Thermodynamics and Kinetics of Tetrahydrobiopterin Regeneration Process",
    authors: <><strong className="text-blue-300">S Samanta</strong>, P Mondal</>,
    journal: "ChemPhysChem",
    citation: "25 (19), e202400401",
    link: "https://doi.org/10.1002/cphc.202400401",
    image: tocBiop, // 2. Use imported variable
    searchString: "comprehensive computational study thermodynamics kinetics tetrahydrobiopterin regeneration s samanta mondal chemphyschem",
  },
  {
    id: "fluorescein",
    year: "2024",
    title: "Unraveling the mystery of solvation-dependent fluorescence of fluorescein dianion using computational study",
    authors: <>A Roy, <strong className="text-blue-300">S Samanta</strong>, S Ray, P Mondal</>,
    journal: "The Journal of Chemical Physics",
    citation: "160 (3)",
    link: "https://doi.org/10.1063/5.0180218",
    image: tocFluor, // 2. Use imported variable
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

  const filteredPubs = publicationsData.filter((pub) =>
    pub.searchString.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedPubs = filteredPubs.reduce((acc, pub) => {
    if (!acc[pub.year]) acc[pub.year] = [];
    acc[pub.year].push(pub);
    return acc;
  }, {} as Record<string, typeof publicationsData>);

  const years = Object.keys(groupedPubs).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="space-y-12 mt-8 fade-in max-w-5xl">
      <div className="border-b border-blue-900/50 pb-6 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
        <h1 className="text-4xl font-bold tracking-tight text-white">Publications</h1>
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search authors, titles, or journals..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#0f172a] border border-blue-900/50 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
          />
          <svg className="absolute left-3 top-3 w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <div className="space-y-10">
        {years.length === 0 ? (
          <p className="text-slate-400 text-center py-8">No publications found matching "{searchTerm}".</p>
        ) : (
          years.map((year) => {
            const isYearOpen = searchTerm.length > 0 ? true : openYears[year];

            return (
              <div key={year}>
                <button 
                  onClick={() => toggleYear(year)}
                  className="w-full flex justify-between items-center py-4 border-b-2 border-blue-900/50 hover:border-blue-400 transition-colors group"
                >
                  <h2 className="text-3xl font-bold text-white group-hover:text-blue-200 transition-colors">{year}</h2>
                  <svg 
                    className={`w-8 h-8 text-blue-400 transform transition-transform duration-300 ${isYearOpen ? 'rotate-180' : 'rotate-0'}`} 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={`space-y-6 overflow-hidden transition-all duration-500 ease-in-out ${isYearOpen ? 'max-h-[3000px] opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}`}>
                  {groupedPubs[year].map((pub) => (
                    <section key={pub.id} id={pub.id} className="bg-[#0f172a] rounded-xl border border-blue-900/30 overflow-hidden hover:border-blue-500/50 transition-colors group">
                      <div className="flex flex-col md:flex-row">
                        <div className="p-6 md:w-2/3 flex flex-col space-y-3">
                          <h3 className="text-xl font-semibold text-white group-hover:text-blue-200 transition-colors">{pub.title}</h3>
                          <p className="text-slate-400">{pub.authors}</p>
                          <p className="text-sm font-mono text-slate-500">
                            <span className="text-blue-400">{pub.journal}</span> {pub.citation}
                          </p>
                          <div className="pt-2 mt-auto">
                            <Link 
                              href={pub.link} 
                              target="_blank"
                              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-900/50 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-900/50 border border-blue-700/50 transition-all"
                            >
                              DOI ↗
                            </Link>
                          </div>
                        </div>
                        <div className="bg-[#020617] md:w-1/3 p-4 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-blue-900/30">
                          <div className="relative w-full h-48 md:h-full min-h-[180px]">
                            {/* 3. The Image component now accepts the imported variable! */}
                            <Image 
                              src={pub.image} 
                              alt={`TOC Graphic for ${pub.journal} paper`} 
                              fill 
                              className="object-contain p-2"
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
