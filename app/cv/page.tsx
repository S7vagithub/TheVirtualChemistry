import Link from "next/link";

export default function CV() {
  return (
    <div className="w-full max-w-5xl mx-auto py-8 md:py-12 relative z-10 fade-in">
      
      {/* The Glassmorphism Shield Wrapper */}
      <div className="bg-white/85 dark:bg-[#0f172a]/85 backdrop-blur-lg p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-blue-900/50 shadow-xl dark:shadow-2xl transition-colors">
        
        {/* Page Header */}
        <div className="border-b border-slate-200 dark:border-blue-900/50 pb-6 mb-10 transition-colors">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-2 transition-colors">
            Curriculum Vitae
          </h1>
          <p className="text-lg md:text-xl text-blue-700 dark:text-blue-300 transition-colors">
            Suvadip Samanta • The Virtual Chemistry
          </p>
        </div>

        <div className="space-y-12 text-slate-700 dark:text-slate-300 transition-colors">
          
          {/* Education Section */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-blue-900/30 pb-2 transition-colors">
              Education
            </h2>
            <div className="space-y-8">
              
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                  <h3 className="text-xl font-medium text-blue-800 dark:text-blue-100 transition-colors">Ph.D. in Chemistry</h3>
                  <span className="mt-2 md:mt-0 text-sm text-blue-700 dark:text-blue-400 font-mono bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded-full transition-colors">
                    [2023-Present]
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 transition-colors">Indian Institute of Science Education and Research (IISER), Tirupati, AP, India</p>
              </div>
              
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                  <h3 className="text-xl font-medium text-blue-800 dark:text-blue-100 transition-colors">M.Sc. in Chemistry</h3>
                  <span className="mt-2 md:mt-0 text-sm text-blue-700 dark:text-blue-400 font-mono bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded-full transition-colors">
                    [2020-2022]
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 transition-colors">Indian Institute of Technology (IIT), Bhubaneswar, Odisha, India</p>
              </div>
              
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                  <h3 className="text-xl font-medium text-blue-800 dark:text-blue-100 transition-colors">B.Sc. in Chemistry</h3>
                  <span className="mt-2 md:mt-0 text-sm text-blue-700 dark:text-blue-400 font-mono bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded-full transition-colors">
                    [2017-2020]
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 transition-colors">Haldia Govt. College (Vidyasagar University), Haldia, WB, India</p>
              </div>
              
            </div>
          </section>

          {/* Research Experience Section */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-blue-900/30 pb-2 transition-colors">
              Research Experience
            </h2>
            <div className="space-y-8">
              
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <div>
                    <h3 className="text-xl font-medium text-blue-800 dark:text-blue-100 transition-colors">PhD Thesis</h3>
                    <p className="text-slate-600 dark:text-slate-400 transition-colors">IISER Tirupati</p>
                  </div>
                  <span className="mt-2 md:mt-0 text-sm text-blue-700 dark:text-blue-400 font-mono bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded-full transition-colors">
                    Aug 2023 - Present
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-2 mt-3 transition-colors">
                  <li>Investigated the effect of external solvent and protein on thermal isomerisation of a Serotonin-fused-azobenzene derivative.</li>
                  <li>Developed a non-conventional forcefield for non-Heme metalloproteins.</li>
                  <li>
                    Studied the thermodynamics and the kinetics of the Tetrahydrobiopterin regeneration process.{" "}
                    <Link href="/publications" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 underline underline-offset-4 decoration-blue-300 dark:decoration-blue-900/50 transition-colors">
                      [View Publication]
                    </Link>
                  </li>
                  <li>
                    Studied the Light Induced Spin CrossOver (LISCO) mechanism and magnetic properties of Fe(II)complex.{" "}
                    <Link href="/publications" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 underline underline-offset-4 decoration-blue-300 dark:decoration-blue-900/50 transition-colors">
                      [View Publication]
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <div>
                    <h3 className="text-xl font-medium text-blue-800 dark:text-blue-100 transition-colors">Project Assistant-I</h3>
                    <p className="text-slate-600 dark:text-slate-400 transition-colors">IISER Tirupati</p>
                  </div>
                  <span className="mt-2 md:mt-0 text-sm text-blue-700 dark:text-blue-400 font-mono bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded-full transition-colors">
                    July 2022 - July 2023
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-2 mt-3 transition-colors">
                  <li>
                    Investigated solvation-dependent fluorescence mechanisms of Fluorescein via excited state calculations.{" "}
                    <Link href="/publications" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 underline underline-offset-4 decoration-blue-300 dark:decoration-blue-900/50 transition-colors">
                      [View Publication]
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <div>
                    <h3 className="text-xl font-medium text-blue-800 dark:text-blue-100 transition-colors">Master's Researcher</h3>
                    <p className="text-slate-600 dark:text-slate-400 transition-colors">IIT Bhubaneswar</p>
                  </div>
                  <span className="mt-2 md:mt-0 text-sm text-blue-700 dark:text-blue-400 font-mono bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded-full transition-colors">
                    Aug 2021 – May 2022
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-2 mt-3 transition-colors">
                  <li>Quantum chemical elucidations of modified Friedel-Crafts reactions (Master's Thesis).</li>
                </ul>
              </div>

            </div>
          </section>

          {/* Technical & Computational Expertise Section */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-blue-900/30 pb-2 transition-colors">
              Technical & Computational Expertise
            </h2>
            <ul className="space-y-4 text-slate-700 dark:text-slate-300">
              <li className="bg-slate-50/80 dark:bg-[#0f172a]/60 backdrop-blur-sm p-4 rounded-xl border border-slate-200 dark:border-blue-900/30 hover:border-blue-400 dark:hover:border-blue-700/50 transition-all shadow-sm dark:shadow-md">
                <strong className="text-blue-800 dark:text-blue-100 block mb-1 text-lg font-medium transition-colors">Systems & Programming</strong>
                <span className="text-slate-600 dark:text-slate-400 transition-colors">Linux, Python, Julia, Fortran, Bash Scripting</span>
              </li>
              <li className="bg-slate-50/80 dark:bg-[#0f172a]/60 backdrop-blur-sm p-4 rounded-xl border border-slate-200 dark:border-blue-900/30 hover:border-blue-400 dark:hover:border-blue-700/50 transition-all shadow-sm dark:shadow-md">
                <strong className="text-blue-800 dark:text-blue-100 block mb-1 text-lg font-medium transition-colors">Quantum Mechanics (QM)</strong>
                <span className="text-slate-600 dark:text-slate-400 transition-colors">Gaussian, ORCA, NWChem, BAGEL, OpenMolcas, Molpro</span>
              </li>
              <li className="bg-slate-50/80 dark:bg-[#0f172a]/60 backdrop-blur-sm p-4 rounded-xl border border-slate-200 dark:border-blue-900/30 hover:border-blue-400 dark:hover:border-blue-700/50 transition-all shadow-sm dark:shadow-md">
                <strong className="text-blue-800 dark:text-blue-100 block mb-1 text-lg font-medium transition-colors">Molecular Mechanics (MM)</strong>
                <span className="text-slate-600 dark:text-slate-400 transition-colors">CHARMM, GROMACS, AMBER</span>
              </li>
              <li className="bg-slate-50/80 dark:bg-[#0f172a]/60 backdrop-blur-sm p-4 rounded-xl border border-slate-200 dark:border-blue-900/30 hover:border-blue-400 dark:hover:border-blue-700/50 transition-all shadow-sm dark:shadow-md">
                <strong className="text-blue-800 dark:text-blue-100 block mb-1 text-lg font-medium transition-colors">Hybrid QM/MM Interfaces</strong>
                <span className="text-slate-600 dark:text-slate-400 transition-colors">CHARMM-G09, ChemShell, QwikMD (VMD/NAMD/ORCA), GROMACS-CP2K</span>
              </li>
              <li className="bg-slate-50/80 dark:bg-[#0f172a]/60 backdrop-blur-sm p-4 rounded-xl border border-slate-200 dark:border-blue-900/30 hover:border-blue-400 dark:hover:border-blue-700/50 transition-all shadow-sm dark:shadow-md">
                <strong className="text-blue-800 dark:text-blue-100 block mb-1 text-lg font-medium transition-colors">Molecular Dynamics</strong>
                <span className="text-slate-600 dark:text-slate-400 transition-colors">Newton-X, SHARC-md, MCTDH</span>
              </li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
