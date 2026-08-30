import React from 'react';
import { profileData } from '../data/profileData';
import { SocialLinks } from './SocialLinks';
import { ArrowUp, Heart, Sparkles, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-slate-900 text-slate-200 dark:bg-[#050911] border-t border-slate-800 dark:border-blue-950/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Identity & Summary */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center text-white font-extrabold text-base shadow-sm">
                PB
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white tracking-tight">
                  {profileData.name}
                </h3>
                <div className="text-xs font-semibold text-blue-400">
                  {profileData.profession}
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              Empowering brands, businesses, and educational platforms with high-converting graphics, modern video editing, and strategic digital design.
            </p>

            <SocialLinks variant="footer" />
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 text-blue-400">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => scrollToSection(e, 'home')}
                  className="text-slate-400 hover:text-white transition-colors block py-0.5"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, 'about')}
                  className="text-slate-400 hover:text-white transition-colors block py-0.5"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={(e) => scrollToSection(e, 'skills')}
                  className="text-slate-400 hover:text-white transition-colors block py-0.5"
                >
                  My Skills
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => scrollToSection(e, 'portfolio')}
                  className="text-slate-400 hover:text-white transition-colors block py-0.5"
                >
                  My Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#medha-exam"
                  onClick={(e) => scrollToSection(e, 'medha-exam')}
                  className="text-slate-400 hover:text-white transition-colors block py-0.5 flex items-center gap-1.5"
                >
                  <span>Medha Exam</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-900 text-blue-200">Academy</span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="text-slate-400 hover:text-white transition-colors block py-0.5"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>

          {/* Educational Academy Spotlight */}
          <div className="md:col-span-4">
            <div className="p-5 rounded-2xl bg-slate-800/60 dark:bg-[#0b1329] border border-slate-700/80 dark:border-blue-900/50">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Featured Academy</span>
              </div>
              <h4 className="text-base font-bold text-white mb-1.5">
                Medha Exam Academy
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Specialized online platform for government job preparation and competitive MCQ practice exams.
              </p>
              <a
                id="footer-medha-link"
                href={profileData.medhaExamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 hover:underline"
              >
                <span>Visit pbjobexam.netlify.app</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 {profileData.name}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">
              Designed with Precision & Purpose
            </span>
            <button
              id="back-to-top-btn"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 dark:bg-slate-800 dark:hover:bg-blue-900 text-slate-300 hover:text-white transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-sm hover:-translate-y-0.5 active:translate-y-0"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
