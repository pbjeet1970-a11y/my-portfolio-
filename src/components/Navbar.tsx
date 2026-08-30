import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { profileData } from '../data/profileData';
import { SocialLinks } from './SocialLinks';

interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Medha Exam', href: '#medha-exam', badge: 'Academy' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section spy
      const sections = ['home', 'about', 'skills', 'portfolio', 'medha-exam', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 bg-white/85 dark:bg-[#070d18]/90 backdrop-blur-md shadow-md border-b border-slate-200/60 dark:border-blue-950/60'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            id="brand-logo"
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="group flex items-center gap-3 cursor-pointer focus:outline-none"
            aria-label="Prosenjit Biswas Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0f2b5c] to-blue-700 dark:from-blue-600 dark:to-blue-900 flex items-center justify-center text-white font-bold text-base shadow-sm group-hover:scale-105 transition-transform duration-200 border border-blue-400/20">
              <span>PB</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {profileData.name}
              </span>
              <span className="text-xs font-medium text-slate-500 dark:text-blue-300/80 -mt-0.5">
                {profileData.profession}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" aria-label="Main Navigation" className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/60 p-1.5 rounded-2xl border border-slate-200/80 dark:border-blue-950/60 backdrop-blur-xs">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  id={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-white dark:bg-blue-600 text-blue-900 dark:text-white shadow-xs font-semibold'
                      : 'text-slate-600 hover:text-blue-800 dark:text-slate-300 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 font-semibold uppercase tracking-wider border border-blue-200 dark:border-blue-800">
                      {item.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Theme Switcher & Contact Button */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <ThemeToggle />

            <a
              id="nav-cta-btn"
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-[#0f2b5c] hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 active:scale-95"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Mobile Menu Trigger */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden fixed inset-x-0 top-[60px] bg-white dark:bg-[#0b1329] border-b border-slate-200 dark:border-blue-950/80 shadow-2xl px-6 py-6 transition-all duration-300 z-50"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  id={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-900 dark:bg-blue-950/80 dark:text-blue-300 font-semibold'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 font-medium">
                      {item.badge}
                    </span>
                  )}
                </a>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
              <a
                id="mobile-nav-cta"
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="w-full py-3 text-center text-sm font-semibold text-white bg-[#0f2b5c] dark:bg-blue-600 rounded-xl shadow-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="pt-2">
                <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">
                  Social Channels
                </span>
                <SocialLinks variant="compact" />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
