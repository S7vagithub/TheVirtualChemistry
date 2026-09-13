import Image from "next/image";

export default function Research() {
  return (
    <div className="space-y-16 mt-8 fade-in max-w-6xl">
      
      {/* Page Header */}
      <div className="border-b border-blue-900/50 pb-6">
        <h1 className="text-4xl font-bold tracking-tight text-white mb-2">
          Research Themes & Expertise
        </h1>
        <p className="text-lg text-blue-300 max-w-3xl">
          Advancing the understanding of complex molecular systems through high-level electronic structure theory, molecular dynamics, and multiscale QM/MM methodologies.
        </p>
      </div>

      <div className="space-y-16 text-slate-300">

        {/* =========================================
            BROAD TOPIC 1: ELECTRONIC STRUCTURE
        ========================================= */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6 border-b-2 border-blue-900/30 pb-2 inline-block">
            I. Electronic Structure Theory
          </h2>
          <div className="space-y-8">
            
            {/* Sub-Topic: Spectroscopy & Photochemistry */}
            <section className="bg-[#0f172a] rounded-xl border border-blue-900/30 overflow-hidden hover:border-blue-500/50 transition-colors">
              <div className="flex flex-col md:flex-row">
                <div className="order-2 md:order-1 p-8 md:w-1/2 flex flex-col space-y-4 border-t md:border-t-0 border-blue-900/30">
                  <h3 className="text-2xl font-semibold text-white">
                    Spectroscopy, Photochemistry & Photophysics
                  </h3>
                  <p className="leading-relaxed text-slate-300">
                    Investigated light-induced molecular processes using excited-state quantum chemistry and computational photochemistry, focusing on vibronic coupling, nonadiabatic dynamics, and spin–orbit interactions in organic chromophores and transition metal complexes through TDDFT, MCTDH, and surface hopping simulations.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2 mt-auto">
                    {["LISCO", "ISC", "Fluorescence", "Phophorescence", "FRET", "ESIPT"].map(kw => (
                      <span key={kw} className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs font-mono border border-blue-800/50">{kw}</span>
                    ))}
                  </div>
                </div>
                {/* Auto-scaling Image Box */}
                <div className="order-1 md:order-2 bg-[#020617] md:w-1/2 p-4 md:p-6 flex flex-col items-center justify-center md:border-l border-blue-900/30">
                  <Image 
                    src="/research_topic_images/spectroscopy.png" 
                    alt="Spectroscopy and Photochemistry" 
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </section>

            {/* Sub-Topic: Reaction Mechanisms */}
            <section className="bg-[#0f172a] rounded-xl border border-blue-900/30 overflow-hidden hover:border-blue-500/50 transition-colors">
              <div className="flex flex-col md:flex-row">
                <div className="order-2 md:order-1 p-8 md:w-1/2 flex flex-col space-y-4 border-t md:border-t-0 border-blue-900/30">
                  <h3 className="text-2xl font-semibold text-white">
                    Elucidation of Reaction Mechanisms
                  </h3>
                  <p className="leading-relaxed text-slate-300">
                    Unraveling complex chemical transformations by mapping potential energy surfaces (PES). This involves identifying critical transition states, computing reaction kinetics, and understanding the thermodynamic feasibility of catalytic and synthetic organic pathways, biomolecular enzymatic reaction etc.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2 mt-auto">
                    {["Reaction Mechanism", "Rate Theory - TST/NA-TST", "Intrinsic Reaction Coordinate (IRC)", "Transition States", "MEP"].map(kw => (
                      <span key={kw} className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs font-mono border border-blue-800/50">{kw}</span>
                    ))}
                  </div>
                </div>
                {/* Auto-scaling Image Box */}
                <div className="order-1 md:order-2 bg-[#020617] md:w-1/2 p-4 md:p-6 flex flex-col items-center justify-center md:border-l border-blue-900/30">
                  <Image 
                    src="/research_topic_images/reaction.png" 
                    alt="Elucidation of Reaction Mechanisms" 
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>


        {/* =========================================
            BROAD TOPIC 2: MOLECULAR DYNAMICS
        ========================================= */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6 border-b-2 border-blue-900/30 pb-2 inline-block">
            II. Molecular Dynamics
          </h2>
          <div className="space-y-8">
            
            {/* Sub-Topic: Development of Non-conventional Force Fields */}
            <section className="bg-[#0f172a] rounded-xl border border-blue-900/30 overflow-hidden hover:border-blue-500/50 transition-colors">
              <div className="flex flex-col md:flex-row">
                <div className="order-2 md:order-1 p-8 md:w-1/2 flex flex-col space-y-4 border-t md:border-t-0 border-blue-900/30">
                  <h3 className="text-2xl font-semibold text-white">
                    Development of Non-Conventional Force Fields
                  </h3>
                  <p className="leading-relaxed text-slate-300">
                    Designing and parameterizing highly accurate, customized force fields to bridge classical mechanics with specialized chemical environments. This includes developing topologies for non-heme metalloproteins and unique functionalized organic molecules.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2 mt-auto">
                    {["Force Field Parameterization", "Classical MD", "Metalloproteins", "QM-MM Hessian Fitting"].map(kw => (
                      <span key={kw} className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs font-mono border border-blue-800/50">{kw}</span>
                    ))}
                  </div>
                </div>
                {/* Auto-scaling Image Box */}
                <div className="order-1 md:order-2 bg-[#020617] md:w-1/2 p-4 md:p-6 flex flex-col items-center justify-center md:border-l border-blue-900/30">
                  <Image 
                    src="/research_topic_images/forcefield.png" 
                    alt="Development of Non-Conventional Force Fields" 
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </section>

            {/* Sub-Topic: Protein-Ligand Interaction */}
            <section className="bg-[#0f172a] rounded-xl border border-blue-900/30 overflow-hidden hover:border-blue-500/50 transition-colors">
              <div className="flex flex-col md:flex-row">
                <div className="order-2 md:order-1 p-8 md:w-1/2 flex flex-col space-y-4 border-t md:border-t-0 border-blue-900/30">
                  <h3 className="text-2xl font-semibold text-white">
                    MD for Protein-Ligand Interactions
                  </h3>
                  <p className="leading-relaxed text-slate-300">
                    Executing extended timescale molecular dynamics simulations to analyze binding affinities, and the structural stability of biomolecular complexes within explicit cellular environments.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2 mt-auto">
                    {["Binding Free Energy", "Conformational Dynamics", "Drug Design"].map(kw => (
                      <span key={kw} className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs font-mono border border-blue-800/50">{kw}</span>
                    ))}
                  </div>
                </div>
                {/* Auto-scaling Image Box */}
                <div className="order-1 md:order-2 bg-[#020617] md:w-1/2 p-4 md:p-6 flex flex-col items-center justify-center md:border-l border-blue-900/30">
                  <Image 
                    src="/research_topic_images/protein_ligand_interaction.png" 
                    alt="MD for Protein-Ligand Interactions" 
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>


        {/* =========================================
            BROAD TOPIC 3: HYBRID QM/MM
        ========================================= */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6 border-b-2 border-blue-900/30 pb-2 inline-block">
            III. Hybrid QM/MM Methods
          </h2>
          <div className="space-y-8">
            
            {/* Sub-Topic: Enzymatic Reactions in Proteins */}
            <section className="bg-[#0f172a] rounded-xl border border-blue-900/30 overflow-hidden hover:border-blue-500/50 transition-colors">
              <div className="flex flex-col md:flex-row">
                <div className="order-2 md:order-1 p-8 md:w-1/2 flex flex-col space-y-4 border-t md:border-t-0 border-blue-900/30">
                  <h3 className="text-2xl font-semibold text-white">
                    Photochemical Reactions in Proteins
                  </h3>
                  <p className="leading-relaxed text-slate-300">
                    Bridging the gap between quantum accuracy and environmental realism by embedding active-site quantum mechanics within a classical biological structure to study enzyme catalysis and photo-isomerization accurately.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2 mt-auto">
                    {["QM/MM", "Excited States", "Electrostatic Embedding", "Enzyme Catalysis", "Photo-isomerization"].map(kw => (
                      <span key={kw} className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs font-mono border border-blue-800/50">{kw}</span>
                    ))}
                  </div>
                </div>
                {/* Auto-scaling Image Box */}
                <div className="order-1 md:order-2 bg-[#020617] md:w-1/2 p-4 md:p-6 flex flex-col items-center justify-center md:border-l border-blue-900/30">
                  <Image 
                    src="/research_topic_images/hybrid_qmmm.png" 
                    alt="Hybrid QM/MM Methods" 
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </section> 
          </div>
        </div>

      </div>
    </div>
  );
}
