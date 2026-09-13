import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ConstellationBackground from "@/components/ConstellationBackground";

const basePath = process.env.NODE_ENV === 'production' ? '/TheVirtualChemistry' : '';

export const metadata: Metadata = {
  title: "TheVirtualChemistry",
  description: "Computational and Theoretical Chemistry by Suvadip",
  icons: {
    icon: `${basePath}/TVC_logo2.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#020617] text-slate-100 antialiased">
        
        {/* Interactive Constellation Background */}
        <ConstellationBackground />

        <div className="relative flex flex-col min-h-screen w-full max-w-[100vw] overflow-x-hidden">
          
          {/* Abstract Background Glow */}
          <div className="absolute top-0 left-1/2 w-full max-w-[1000px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] -translate-x-1/2 -z-10 pointer-events-none"></div>

          {/* Navigation */}
          <div className="relative z-50 w-full">
            <Navigation />
          </div>
          
          {/* Main Content Area */}
          <main className="flex-grow max-w-7xl mx-auto w-full p-4 md:p-8 relative z-10">
            {children}
          </main>

          {/* Footer */}
          <footer className="relative z-50 text-center text-sm text-slate-500 py-6 border-t border-blue-900/30 mt-auto w-full bg-[#020617]">
            © {new Date().getFullYear()} Suvadip Samanta. Theoretical & Computational Chemistry.
          </footer>
          
        </div>
      </body>
    </html>
  );
}
