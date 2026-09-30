import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Architecture', href: '#architecture' },
  { name: 'CI/CD Pipeline', href: '#pipeline' },
  { name: 'Terminal', href: '#terminal' },
  { name: 'Dashboard', href: '#dashboard' },
  { name: 'Journey', href: '#journey' },
  { name: 'GitHub', href: '#github' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // ScrollSpy section detection
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07090e]/85 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group font-mono tracking-wider font-semibold text-lg text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg px-2 py-1"
        >
          <div className="relative">
            <img
              src={PERSONAL_INFO.avatarUrl}
              alt="Nishant"
              className="w-9 h-9 rounded-full object-cover border-2 border-cyan-400/80 group-hover:border-cyan-300 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-slate-900"></span>
          </div>
          <span className="flex items-center gap-1.5 text-base">
            <span className="text-cyan-400 font-bold">NISHANT</span>
            <span className="text-slate-600 font-normal">//</span>
            <span className="text-slate-400 text-xs tracking-widest uppercase font-mono hidden sm:inline-block">
              DEVOPS & CLOUD
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.name}
                href={item.href}
                className={`px-3 py-1.5 rounded-md text-xs font-mono font-medium transition-all ${
                  isActive
                    ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 shadow-[0_0_10px_rgba(0,240,255,0.15)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA / GitHub shortcut */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-xs font-mono text-slate-300 hover:text-cyan-300 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all"
          >
            <GithubIcon className="w-4 h-4 text-cyan-400" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0e17]/95 border-b border-slate-800/90 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-mono transition-all ${
                  isActive
                    ? 'text-cyan-400 bg-cyan-950/50 border border-cyan-500/40'
                    : 'text-slate-300 hover:bg-slate-800/60 hover:text-slate-100'
                }`}
              >
                {item.name}
              </a>
            );
          })}
          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between px-2">
            <span className="text-xs font-mono text-slate-400">DevOps Portfolio</span>
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:underline"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>@Nishant1707-ai</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
