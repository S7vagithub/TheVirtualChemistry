import Image from "next/image";

// Automatically handles the repo sub-path on GitHub Pages while keeping local dev clean
const basePath = process.env.NODE_ENV === 'production' ? '/TheVirtualChemistry' : '';

export default function Home() {
  return (
    <div className="relative w-full flex items-center justify-center min-h-[75vh]">
      
      {/* Full-Screen Background Image */}
      <div className="fixed inset-0 w-[100vw] h-[100vh] -z-20 pointer-events-none">
        <Image 
          src={`${basePath}/bg.png`} 
          alt="Computational Chemistry Background" 
          fill 
          // Lowered opacity slightly for light mode so it doesn't look muddy
          className="object-cover opacity-20 dark:opacity-40"
          priority
        />
        {/* The gradient now shifts from white in light mode to your dark blue in dark mode */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 dark:from-[#020617] via-transparent to-slate-50 dark:to-[#020617]"></div>
      </div>

      {/* Main Content Container */}
      <div className="fade-in grid grid-cols-1 md:grid-cols-2 items-stretch gap-8 w-full max-w-5xl mt-4 md:mt-0">
        
        {/* Logo Card */}
        <div className="z-10 w-full relative aspect-[481/340] bg-white/70 dark:bg-[#0f172a]/70 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-blue-900/40 shadow-xl dark:shadow-2xl overflow-hidden p-3 flex items-center justify-center">
          <Image 
            src={`${basePath}/TVC_home.png`} 
            alt="The Virtual Chemistry Logo" 
            fill
            // Standard shadow for light mode, glowing blue shadow for dark mode
            className="object-fill rounded-xl drop-shadow-lg dark:drop-shadow-[0_0_25px_rgba(96,165,250,0.3)]"
            priority
          />
        </div>
        
        {/* Text Card */}
        <div className="z-10 w-full aspect-[481/340] flex flex-col justify-center bg-white/70 dark:bg-[#0f172a]/70 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-blue-900/40 shadow-xl dark:shadow-2xl">
          <div className="space-y-4">
            {/* Text changes from dark slate (light mode) to white (dark mode) */}
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white text-center md:text-left">
              Welcome to TheVirtualChemistry
            </h1>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed text-center md:text-left">
              Hi, I&apos;m Suvadip Samanta, a Computational and Theoretical Chemistry PhD student. 
              This space is dedicated to my research, publications, and tutorials on Computational Chemistry.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
