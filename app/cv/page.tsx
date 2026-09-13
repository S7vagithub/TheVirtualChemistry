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


import Link from "next/link";

export default function CV() {
  return (
    <div className="space-y-12 mt-8 fade-in max-w-4xl">
      
      {/* Page Header */}
      <div className="border-b border-blue-900/50 pb-6">
        <h1 className="text-4xl font-bold tracking-tight text-white mb-2">
          Curriculum Vitae
        </h1>
        <p className="text-lg text-blue-300">
          Suvadip Samanta • Computational and Theoretical Chemistry
        </p>
      </div>

      <div className="space-y-10 text-slate-300">
        
        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6 border-b border-blue-900/30 pb-2">
            Education
          </h2>
          <div className="space-y-6">
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                <h3 className="text-lg font-medium text-blue-100">Ph.D. in Chemistry</h3>
                <span className="text-sm text-blue-400 font-mono">[2023-Present]</span>
              </div>
              <p className="text-slate-400">Indian Institute of Science Education and Research (IISER), Tirupati, AP, India </p>
            </div>
            
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                <h3 className="text-lg font-medium text-blue-100">M.Sc. in Chemistry</h3>
                <span className="text-sm text-blue-400 font-mono">[2020-2022]</span>
              </div>
              <p className="text-slate-400">Indian Institute of Technology (IIT), Bhubaneswar, Odissa, India </p>
            </div>
            
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                <h3 className="text-lg font-medium text-blue-100">B.Sc. in Chemistry</h3>
                <span className="text-sm text-blue-400 font-mono">[2017-2020]</span>
              </div>
              <p className="text-slate-400">Haldia Govt. College (Vidyasagar University), Haldia, WB, India </p>
            </div>
          </div>
        </section>

        {/* Research Experience Section */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6 border-b border-blue-900/30 pb-2">
            Research Experience
          </h2>
          <div className="space-y-8">
          
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                <h3 className="text-lg font-medium text-blue-100">PhD Thesis</h3>
                <span className="text-sm text-blue-400 font-mono">Aug 2023 - Present</span>
              </div>
              <p className="text-slate-400 mb-2">IISER Tirupati</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-300 ml-2">
                  <li>Investigated the effect of external solvent and protein on thermal isomerisation of a Serotonin-fused-azobenzene derivative.</li>
                  <li>Developed a non-conventional forcefield for non-Heme metalloproteins.</li>
                  <li>Studied the thermodynamics and the kinetics of the Tetrahydrobiopterin regeneration process.
                                    <Link href="/publications" className="text-blue-400 hover:text-blue-200 underline underline-offset-4 decoration-blue-900/50 transition-colors">
                    [View Publication]
                  </Link>
                  </li>
                  <li>Studied the Light Induced Spin CrossOver (LISCO) mechanism and magnetic properties of Fe(II)complex.
                                    <Link href="/publications" className="text-blue-400 hover:text-blue-200 underline underline-offset-4 decoration-blue-900/50 transition-colors">
                    [View Publication]
                  </Link>
                  </li>
              </ul>
            </div>
            
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                <h3 className="text-lg font-medium text-blue-100">Project Assistant-I</h3>
                <span className="text-sm text-blue-400 font-mono">July 2022 - July 2023</span>
              </div>
              <p className="text-slate-400 mb-2">IISER Tirupati</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-300 ml-2">
                <li>
                  Investigated solvation-dependent fluorescence mechanisms of Fluorescein via excited state calculations.{' '}
                  <Link href="/publications" className="text-blue-400 hover:text-blue-200 underline underline-offset-4 decoration-blue-900/50 transition-colors">
                    [View Publication]
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                <h3 className="text-lg font-medium text-blue-100">Master's Researcher</h3>
                <span className="text-sm text-blue-400 font-mono">Aug 2021 – May 2022</span>
              </div>
              <p className="text-slate-400 mb-2">IIT Bhubaneswar</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-300 ml-2">
                <li>
                  Quantum chemical elucidations of modified Friedel-Crafts reactions (Master's Thesis).{' '}

                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* Technical & Computational Expertise Section */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6 border-b border-blue-900/30 pb-2">
            Technical & Computational Expertise
          </h2>
          <ul className="space-y-4 text-slate-300">
            <li className="bg-[#0f172a] p-4 rounded-lg border border-blue-900/30 hover:border-blue-700/50 transition-colors">
              <strong className="text-white block mb-1 text-lg">Systems & Programming</strong>
              <span className="text-sm">Linux, Python, Julia, Fortran, Bash Scripting</span>
            </li>
            <li className="bg-[#0f172a] p-4 rounded-lg border border-blue-900/30 hover:border-blue-700/50 transition-colors">
              <strong className="text-white block mb-1 text-lg">Quantum Mechanics (QM)</strong>
              <span className="text-sm">Gaussian, ORCA, NWChem, BAGEL, OpenMolcas, Molpro</span>
            </li>
            <li className="bg-[#0f172a] p-4 rounded-lg border border-blue-900/30 hover:border-blue-700/50 transition-colors">
              <strong className="text-white block mb-1 text-lg">Molecular Mechanics (MM)</strong>
              <span className="text-sm">CHARMM, GROMACS, AMBER</span>
            </li>
            <li className="bg-[#0f172a] p-4 rounded-lg border border-blue-900/30 hover:border-blue-700/50 transition-colors">
              <strong className="text-white block mb-1 text-lg">Hybrid QM/MM Interfaces</strong>
              <span className="text-sm">CHARMM-G09, ChemShell, QwikMD (VMD/NAMD/ORCA), GROMACS-CP2K</span>
            </li>
            <li className="bg-[#0f172a] p-4 rounded-lg border border-blue-900/30 hover:border-blue-700/50 transition-colors">
              <strong className="text-white block mb-1 text-lg">Molecular Dynamics</strong>
              <span className="text-sm">Newton-X, SHARC-md, MCTDH </span>
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
}
