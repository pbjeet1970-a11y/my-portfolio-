import React, { useState } from 'react';
import { skillsData, softwareTools } from '../data/profileData';
import { SkillItem } from '../types';
import { motion, useInView } from 'motion/react';
import { AnimatedCounter } from './AnimatedCounter';
import {
  Palette,
  Film,
  Share2,
  ShoppingBag,
  ShieldCheck,
  PenTool,
  Sparkles,
  Users,
  Trello,
  Cpu,
  Layers,
  CheckCircle,
  BarChart2
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'design' | 'media' | 'management' | 'tech'>('all');
  const sectionRef = React.useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  const getSkillIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="w-5 h-5" />;
      case 'Film':
        return <Film className="w-5 h-5" />;
      case 'Share2':
        return <Share2 className="w-5 h-5" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'PenTool':
        return <PenTool className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'Trello':
        return <Trello className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 bg-slate-50 dark:bg-[#0b1329]/60 relative overflow-hidden border-y border-slate-200/80 dark:border-blue-950/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200/80 dark:border-blue-800 text-blue-900 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <BarChart2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Core Competencies & Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            My Skills
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            Interactive breakdown of proficiency across graphics design, video production, digital workflows, and modern AI toolkits.
          </p>
          <div className="w-16 h-1 bg-[#0f2b5c] dark:bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All 9 Core Skills' },
            { id: 'design', label: 'Design & Stock' },
            { id: 'tech', label: 'AI & Tools' },
            { id: 'management', label: 'Management & Rules' },
            { id: 'media', label: 'Media & Writing' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-[#0f2b5c] text-white dark:bg-blue-600 dark:text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 9 Core Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              id={`skill-card-${skill.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white dark:bg-[#070d18] p-6 rounded-2xl border border-slate-200/90 dark:border-blue-900/40 shadow-xs hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Icon, Name, Percentage */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-800 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 border border-blue-100 dark:border-blue-900/50">
                      {getSkillIcon(skill.iconName)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xl font-extrabold text-[#0f2b5c] dark:text-blue-400">
                      <AnimatedCounter
                        target={skill.percentage}
                        trigger={isInView}
                        delay={index * 0.08}
                        duration={1.2}
                        suffix="%"
                      />
                    </span>
                  </div>
                </div>

                {/* Animated Progress Bar */}
                <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-3 p-0.5 border border-slate-200/50 dark:border-slate-800">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                    transition={{ duration: 1.2, delay: index * 0.1, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-[#0f2b5c] via-blue-600 to-sky-500 dark:from-blue-600 dark:via-blue-500 dark:to-sky-400 shadow-xs"
                  />
                </div>

                {/* Skill Description */}
                {skill.description && (
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                )}
              </div>

              {/* Bottom Subtle Pill */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1 font-medium">
                  <CheckCircle className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                  Verified Skill
                </span>
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  {skill.percentage >= 80 ? 'Master / Advanced' : skill.percentage >= 65 ? 'Proficient' : 'Core Working Knowledge'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Software & Toolkits Showcase */}
        <div className="bg-white dark:bg-[#070d18] rounded-3xl p-8 border border-slate-200/90 dark:border-blue-900/40 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Primary Software & Creative Toolkits</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Industry-standard suites used daily for commercial graphics, video editing, and AI synthesis.
              </p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-900 shrink-0">
              Modern Tech Stack
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {softwareTools.map((tool, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 flex items-center justify-between hover:border-blue-400 dark:hover:border-blue-600 transition-colors shadow-2xs"
              >
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    {tool.name}
                  </div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                    {tool.category}
                  </span>
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${
                  tool.level === 'Advanced'
                    ? 'bg-blue-50 text-blue-900 border-blue-300 dark:bg-blue-950/90 dark:text-blue-200 dark:border-blue-800'
                    : 'bg-slate-100 text-slate-800 border-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700'
                }`}>
                  {tool.level}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
