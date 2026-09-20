import type { Metadata } from "next";
import "./globals.css";
import "katex/dist/katex.min.css";
import Navigation from "@/components/Navigation";
import ConstellationBackground from "@/components/ConstellationBackground";
import { Providers } from "./providers"; // Import our new provider

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
    // suppressHydrationWarning is strictly required by next-themes
    <html lang="en" suppressHydrationWarning>
      {/* Set base body colors for both themes with smooth transitions */}
      <body className="bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-100 antialiased transition-colors duration-300">
        
        <Providers>
          {/* Interactive Constellation Background */}
          <ConstellationBackground />

          <div className="relative flex flex-col min-h-screen w-full max-w-[100vw] overflow-x-hidden">
            
            {/* Abstract Background Glow - lighter blue in light mode, dark blue in dark mode */}
            <div className="absolute top-0 left-1/2 w-full max-w-[1000px] h-[500px] bg-blue-200/50 dark:bg-blue-900/20 rounded-full blur-[120px] -translate-x-1/2 -z-10 pointer-events-none transition-colors duration-300"></div>

            {/* Navigation */}
            <div className="relative z-50 w-full">
              <Navigation />
            </div>
            
            {/* Main Content Area */}
            <main className="flex-grow max-w-7xl mx-auto w-full p-4 md:p-8 relative z-10">
              {children}
            </main>

            {/* Footer */}
            <footer className="relative z-50 text-center text-sm text-slate-600 dark:text-slate-500 py-6 border-t border-slate-200 dark:border-blue-900/30 mt-auto w-full bg-slate-50 dark:bg-[#020617] transition-colors duration-300">
              © {new Date().getFullYear()} Suvadip Samanta. Theoretical & Computational Chemistry.
            </footer>
            
          </div>
        </Providers>
        
      </body>
    </html>
  );
}
