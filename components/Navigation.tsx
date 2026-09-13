import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '../config/siteConfig';

// Automatically handles the repo sub-path on GitHub Pages while keeping local dev clean
const basePath = process.env.NODE_ENV === 'production' ? '/TheVirtualChemistry' : '';

export default function Navigation() {
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
    <nav className="bg-[#0f172a] text-white p-4 shadow-lg border-b border-blue-900/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-2">
        
        {/* Main Title with Logo */}
        <Link href="/" className="flex items-center gap-3 group">
	<Image 
            src={`${basePath}/TVC_home_border.png`}
            alt="TVC Logo" 
            width={40} 
            height={40} 
            className="w-10 h-10 rounded-md object-contain drop-shadow-[0_0_5px_rgba(96,165,250,0.5)]"
          />
          <span className="font-bold text-2xl tracking-wider text-white group-hover:text-blue-300 transition-colors">
            {siteConfig.name}
          </span>
        </Link>

        {/* Children Tabs */}
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          {navLinks
            .filter((link) => link.show)
            .map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="text-blue-400 text-lg font-semibold hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
}
