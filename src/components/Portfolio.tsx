import React, { useState } from 'react';
import { portfolioProjects, portfolioCategories } from '../data/portfolioData';
import { PortfolioProject } from '../types';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, FolderGit2, Eye, Sparkles, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filteredProjects = activeCategory === 'all'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.filterCategory === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-[#070d18] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200/80 dark:border-blue-800 text-blue-900 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Creative Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            My Portfolio
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            A curated selection of graphics design, branding identities, social media campaigns, AI visuals, and digital projects.
          </p>
          <div className="w-16 h-1 bg-[#0f2b5c] dark:bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {portfolioCategories.map((cat) => (
            <button
              key={cat.id}
              id={`portfolio-filter-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#0f2b5c] text-white dark:bg-blue-600 dark:text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden bg-white dark:bg-[#0b1329] border border-slate-200/90 dark:border-blue-900/40 shadow-sm hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container with Zoom Effect */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={project.thumbnail || project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Category Pill on Image */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-white/95 dark:bg-[#070d18]/90 text-blue-900 dark:text-blue-300 backdrop-blur-md shadow-xs border border-white/20 dark:border-blue-900/40">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Quick Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070d18]/80 via-[#070d18]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-3 rounded-full bg-white/90 text-blue-900 hover:bg-white hover:scale-110 transition-all shadow-lg cursor-pointer"
                      title="Inspect Project"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1 mb-1.5">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tool Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tools.slice(0, 3).map((tool) => (
                        <span
                          key={tool}
                          className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                        >
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 3 && (
                        <span className="text-[10px] font-semibold px-1.5 py-0.5 text-slate-500">
                          +{project.tools.length - 3}
                        </span>
                      )}
                    </div>

                    {/* View Project Action Button */}
                    <button
                      id={`view-btn-${project.id}`}
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-blue-900 dark:text-blue-300 bg-blue-50 hover:bg-blue-100 dark:bg-slate-800/80 dark:hover:bg-blue-950/80 border border-blue-200/80 dark:border-blue-900/60 transition-all duration-200 flex items-center justify-center gap-2 group-hover:border-blue-400 cursor-pointer"
                    >
                      <span>View Project Details</span>
                      <ArrowUpRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Detail Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
