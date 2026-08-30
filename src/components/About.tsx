import React from 'react';
import { profileData } from '../data/profileData';
import { Sparkles, CheckCircle2, ArrowRight, BookOpen, Layers, Lightbulb, Compass, Award } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { AnimatedCounter } from './AnimatedCounter';

interface AboutProps {
  onOpenResume?: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  const sectionRef = React.useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  const scrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const highlights = [
    { title: "Creativity & Visual Artistry", desc: "Crafting memorable visual identities with balanced color theory, precision typography, and layout mastery." },
    { title: "Continuous Learning", desc: "Constantly upgrading skills with evolving design paradigms, motion techniques, and cutting-edge digital mediums." },
    { title: "Modern AI & Tech Integration", desc: "Harnessing GenAI workflows to speed up conceptualization, prompt-driven art, and commercial production." },
    { title: "Business Growth Impact", desc: "Helping companies, startups, and academic platforms engage audiences and scale through cohesive digital media." }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white dark:bg-[#070d18] relative overflow-hidden">
      {/* Decorative Light Elements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200/80 dark:border-blue-800 text-blue-900 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Discover My Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-[#0f2b5c] dark:bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* 2-Column Modern Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Creative Visual Card & Experience Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* Layered Decorative Card */}
              <div className="relative rounded-3xl overflow-hidden bg-slate-50 dark:bg-[#0b1329] border border-slate-200/80 dark:border-blue-900/60 p-4 shadow-xl">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-5 bg-slate-200 dark:bg-slate-800">
                  <img
                    src={profileData.secondaryImageUrl}
                    alt={`${profileData.name} workspace and creative process`}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070d18]/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-600/90 backdrop-blur-xs inline-block mb-1">
                      Creative Studio
                    </span>
                    <h3 className="text-base font-bold text-white leading-tight">
                      Crafting Purposeful Visual Experiences
                    </h3>
                  </div>
                </div>

                {/* Stat Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 text-center">
                    <div className="text-2xl font-extrabold text-blue-900 dark:text-blue-400">
                      <AnimatedCounter
                        target={profileData.completedProjects}
                        trigger={isInView}
                        duration={1.4}
                        suffix="+"
                      />
                    </div>
                    <div className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-0.5">
                      Completed Projects
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 text-center">
                    <div className="text-2xl font-extrabold text-blue-900 dark:text-blue-400">
                      <AnimatedCounter
                        target={profileData.satisfiedClients}
                        trigger={isInView}
                        duration={1.4}
                        suffix="+"
                      />
                    </div>
                    <div className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-0.5">
                      Satisfied Clients
                    </div>
                  </div>
                </div>

                {/* Focus Quote */}
                <div className="mt-4 p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 text-xs text-slate-700 dark:text-blue-200/90 leading-relaxed italic flex items-start gap-2.5">
                  <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>"Great design is not just what looks good — it is how clearly it communicates value and inspires confidence."</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: About Narrative, Focus Areas & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="text-sm font-bold text-blue-600 dark:text-blue-400 tracking-wide uppercase mb-2">
              Who I Am & What I Believe
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-5 leading-tight">
              Passionate Graphics Designer & Digital Creator Crafting High-Impact Visuals
            </h3>

            {/* Editable Paragraph 1 */}
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              {profileData.aboutText1}
            </p>

            {/* Editable Paragraph 2 */}
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              {profileData.aboutText2}
            </p>

            {/* Highlighted Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-blue-950 flex flex-col gap-1 hover:border-blue-300 dark:hover:border-blue-800 transition-colors"
                >
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 pl-6 leading-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                id="about-cta-medha"
                onClick={() => scrollTo('medha-exam')}
                className="px-6 py-3 rounded-xl font-semibold text-white bg-[#0f2b5c] hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Medha Exam Academy</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="about-cta-skills"
                onClick={() => scrollTo('skills')}
                className="px-6 py-3 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
              >
                <span>Check My Skills</span>
              </button>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
