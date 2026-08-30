import React from 'react';
import { highlightCards } from '../data/profileData';
import { Award, Layers, Briefcase, BookOpen, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const Highlights: React.FC = () => {
  const getHighlightIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6" />;
      case 'Layers':
        return <Layers className="w-6 h-6" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="highlights" className="py-20 bg-white dark:bg-[#070d18] relative overflow-hidden border-t border-slate-200 dark:border-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200/80 dark:border-blue-800 text-blue-900 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Key Pillars</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Highlights
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            Distinctive hallmarks defining my career as a graphics designer, digital coordinator, and tech innovator.
          </p>
          <div className="w-16 h-1 bg-[#0f2b5c] dark:bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* 5 Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {highlightCards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0b1329] border border-slate-200/90 dark:border-blue-900/40 shadow-xs hover:shadow-md hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950 text-[#0f2b5c] dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 border border-blue-100 dark:border-blue-900/50">
                    {getHighlightIcon(card.icon)}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100/70 dark:bg-blue-950/70 text-blue-900 dark:text-blue-300">
                    {card.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {card.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center gap-1 text-[11px] font-semibold text-blue-600 dark:text-blue-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Pillar</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
