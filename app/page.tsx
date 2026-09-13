// This is a minimal, error-free placeholder to satisfy Next.js's "is not a module" check.
// You can use this generic function for every blank page.tsx file for now.

export default function PlaceholderPage() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <h1 className="text-3xl font-bold text-slate-300">
        This Page is Currently Blank (TBD)
      </h1>
    </div>
  );
}


import Image from "next/image";

export default function Home() {
  return (
    // Adjusted min-h to center the content perfectly between the navbar and footer
    <div className="relative w-full flex items-center justify-center min-h-[70vh]">
      
      {/* 1. THE FULL-SCREEN BACKGROUND: Fixed to the viewport to eliminate all gaps and strips */}
      <div className="fixed inset-0 w-[100vw] h-[100vh] -z-20 pointer-events-none">
        <Image 
          src="/bg.png" 
          alt="Computational Chemistry Background" 
          fill 
          className="object-cover opacity-20"
          priority
        />
        {/* Smooth vertical fade so it blends flawlessly into the Navbar (top) and Footer (bottom) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]"></div>
      </div>

      {/* 2. Original Content Container */}
      <div className="fade-in flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full max-w-5xl mt-4 md:mt-0">
        
        {/* Logo Section */}
        <div className="shrink-0 z-10 w-full max-w-[280px] md:max-w-[360px] mx-auto md:mx-0">
          <Image 
            src="/TVC_home.png" 
            alt="The Virtual Chemistry Logo" 
            width={360} 
            height={360} 
            className="w-full h-auto rounded-xl drop-shadow-[0_0_25px_rgba(96,165,250,0.3)]"
            priority
          />
        </div>
        
        {/* Text Section with Glassmorphism Effect */}
        <div className="space-y-6 bg-[#0f172a]/60 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-blue-900/40 z-10 shadow-2xl w-full">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white text-center md:text-left">
            Welcome to TheVirtualChemistry
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed text-center md:text-left">
            Hi, I'm Suvadip Samanta, a Computational and Theoretical Chemistry PhD student. 
            This space is dedicated to my research, publications, and tutorials on Computational Chemistry.
          </p>
        </div>
        
      </div>
    </div>
  );
}
