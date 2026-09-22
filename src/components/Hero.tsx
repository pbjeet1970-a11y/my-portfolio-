import React from 'react';
import { profileData } from '../data/profileData';
import { SocialLinks } from './SocialLinks';
import { ArrowRight, Mail, Sparkles, Layers, ShieldCheck, Download } from 'lucide-react';
import { motion } from 'motion/react';
import { navigateToRoute } from '../utils/router';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollTo = (targetId: string) => {
    navigateToRoute(`/${targetId}`, true);
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-16 lg:pt-40 lg:pb-24 flex items-center overflow-hidden subtle-mesh-light dark:subtle-mesh-dark"
    >
      {/* Subtle Background Glow Spheres */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-400/15 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-sky-300/15 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status / Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/80 border border-blue-200/80 dark:border-blue-800/80 text-blue-900 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Creative & Design Projects</span>
            </div>

            {/* Main Name & Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-2">
              {profileData.name}
            </h1>

            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#0f2b5c] via-blue-700 to-sky-600 dark:from-blue-400 dark:via-sky-300 dark:to-blue-200 bg-clip-text text-transparent mb-4">
              {profileData.profession}
            </div>

            {/* Professional Tagline */}
            <div className="text-base sm:text-lg font-medium text-slate-700 dark:text-blue-200/90 mb-5 max-w-2xl flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-800 dark:text-slate-200">
                Creative Designer
              </span>
              <span className="text-slate-400">•</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-800 dark:text-slate-200">
                Video Editor
              </span>
              <span className="text-slate-400">•</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-800 dark:text-slate-200">
                AI Enthusiast
              </span>
              <span className="text-slate-400">•</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-800 dark:text-slate-200">
                Digital Professional
              </span>
            </div>

            {/* Demo Intro Text */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-xl">
              {profileData.bioIntro}
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                id="hero-cta-portfolio"
                onClick={() => scrollTo('portfolio')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-white bg-[#0f2b5c] hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>View My Portfolio</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-cta-contact"
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-white bg-white dark:bg-slate-800/90 hover:bg-slate-50 dark:hover:bg-slate-700/80 border border-slate-300 dark:border-blue-900/60 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Contact Me</span>
              </button>

              {onOpenResume && (
                <button
                  id="hero-cta-resume"
                  onClick={onOpenResume}
                  className="px-4 py-3.5 text-sm font-medium text-slate-600 hover:text-blue-700 dark:text-slate-400 dark:hover:text-blue-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="View Profile Overview & Credentials"
                >
                  <Download className="w-4 h-4" />
                  <span>Resume / Bio</span>
                </button>
              )}
            </div>

            {/* Social Media Integration in Hero */}
            <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80 w-full">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-3">
                Connect on Social Networks:
              </span>
              <SocialLinks variant="hero" />
            </div>
          </motion.div>

          {/* Right Column: Profile Visual Frame with Subtle Blue Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              
              {/* Decorative Background Frame Elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-sky-400 rounded-3xl rotate-3 opacity-20 dark:opacity-30 blur-lg" />
              <div className="absolute -inset-1.5 bg-gradient-to-br from-[#0f2b5c] via-blue-600 to-sky-400 rounded-3xl opacity-30 dark:opacity-60 blur-xs" />

              {/* Main Photo Card Container */}
              <div
                id="hero-profile-card"
                className="relative bg-white dark:bg-[#0b1329] p-3.5 sm:p-4 rounded-3xl border border-blue-100 dark:border-blue-900/60 deep-blue-glow overflow-hidden group"
              >
                {/* Photo Frame */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200/90 dark:border-blue-950 shadow-inner">
                  <img
                    src={profileData.avatarUrl}
                    alt={`${profileData.name} - ${profileData.profession}`}
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />

                  {/* On-image Compact Tag positioned cleanly at the bottom */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 sm:p-3 rounded-xl bg-white/95 dark:bg-[#070d18]/95 backdrop-blur-md border border-slate-200/80 dark:border-blue-900/50 shadow-md text-left">
                    <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center justify-between">
                      <span>{profileData.name}</span>
                      <span className="text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-900 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
                        Active Pro
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 font-medium truncate mt-0.5">
                      Graphics Designer & Visual Specialist
                    </p>
                  </div>
                </div>

                {/* Floating Badge 1: Experience */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -left-4 sm:-left-6 bg-white dark:bg-slate-900 p-3 rounded-2xl shadow-lg border border-slate-200 dark:border-blue-900/60 flex items-center gap-3 z-20"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-base font-extrabold text-slate-900 dark:text-white leading-none">
                      {profileData.yearsOfExperience}+ Years
                    </div>
                    <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                      Creative Experience
                    </div>
                  </div>
                </motion.div>

                {/* Floating Badge 2: Medha Exam Badge */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -bottom-3 -right-3 sm:-right-4 bg-white dark:bg-slate-900 py-2.5 px-3.5 rounded-2xl shadow-lg border border-slate-200 dark:border-blue-900/60 flex items-center gap-2.5 z-20 cursor-pointer"
                  onClick={() => scrollTo('medha-exam')}
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      Medha Exam
                    </div>
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                      Educational Academy
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
