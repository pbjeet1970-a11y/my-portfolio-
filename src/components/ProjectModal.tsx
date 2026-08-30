import React, { useEffect } from 'react';
import { PortfolioProject } from '../types';
import { X, ExternalLink, Calendar, User, CheckCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#070d18]/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl bg-white dark:bg-[#0b1329] rounded-3xl border border-slate-200 dark:border-blue-900/60 shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Top Bar with Close Button */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-900 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                {project.category}
              </span>
              {project.year && (
                <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {project.year}
                </span>
              )}
            </div>

            <button
              id="project-modal-close"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
            
            {/* Project Image Banner */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title & Subtitle */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-base text-blue-700 dark:text-blue-300 font-medium mt-1">
                {project.subtitle}
              </p>
            </div>

            {/* Project Meta Info Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 text-xs">
              {project.client && (
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block font-medium">Client / Platform</span>
                  <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1 mt-0.5">
                    <User className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    {project.client}
                  </span>
                </div>
              )}
              <div>
                <span className="text-slate-500 dark:text-slate-400 block font-medium">Role</span>
                <span className="font-bold text-slate-900 dark:text-white mt-0.5 block">
                  Lead Designer & Art Director
                </span>
              </div>
              <div>
                <span className="text-slate-500 dark:text-slate-400 block font-medium">Category</span>
                <span className="font-bold text-slate-900 dark:text-white mt-0.5 block">
                  {project.category}
                </span>
              </div>
            </div>

            {/* In-depth Narrative */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                Project Overview & Execution
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Key Deliverables */}
            {project.deliverables && project.deliverables.length > 0 && (
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2.5">
                  Key Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tools Used */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2.5">
                Tools & Software Applied
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-blue-50 dark:bg-slate-800 text-blue-900 dark:text-blue-300 border border-blue-200/80 dark:border-slate-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Link if available */}
            {project.link && (
              <div className="pt-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-[#0f2b5c] hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500 transition-colors shadow-sm text-sm"
                >
                  <span>Open Live Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
