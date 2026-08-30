import React from 'react';
import { profileData, skillsData, softwareTools } from '../data/profileData';
import { X, Download, Printer, CheckCircle, Mail, Phone, MapPin, Award, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedCounter } from './AnimatedCounter';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

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

        {/* Modal Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-white dark:bg-[#0b1329] rounded-3xl border border-slate-200 dark:border-blue-900/60 shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/70">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-900 dark:text-blue-300">
                Curriculum Vitae
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Official Profile Summary
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="p-2 rounded-xl text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                title="Print or Save as PDF"
              >
                <Printer className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Document Content */}
          <div className="overflow-y-auto p-6 sm:p-10 space-y-6 text-left">
            
            {/* Top Identity Block */}
            <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {profileData.name}
              </h2>
              <div className="text-lg font-bold text-blue-600 dark:text-blue-400 mt-1">
                {profileData.profession} & Digital Creative Specialist
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {profileData.tagline}
              </p>

              <div className="flex flex-wrap gap-4 mt-4 text-xs text-slate-600 dark:text-slate-300">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-blue-500" />
                  {profileData.email}
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-blue-500" />
                  {profileData.phone}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-500" />
                  {profileData.location}
                </span>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                Executive Profile Summary
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {profileData.aboutText1} {profileData.aboutText2}
              </p>
            </div>

            {/* Core Competencies & Skills */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                Core Competencies & Verified Proficiency
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {skillsData.map((s) => (
                  <div key={s.id} className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs">
                    <div className="font-bold text-slate-900 dark:text-white flex items-center justify-between">
                      <span>{s.name}</span>
                      <span className="text-blue-600 dark:text-blue-400 font-extrabold">
                        <AnimatedCounter target={s.percentage} duration={1} suffix="%" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Software Proficiency */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2.5">
                Creative Software & Technical Toolsets
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {softwareTools.map((t) => (
                  <span key={t.name} className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-800 dark:text-slate-200">
                    {t.name} ({t.level})
                  </span>
                ))}
              </div>
            </div>

            {/* Major Venture */}
            <div className="p-4 rounded-2xl bg-blue-50/80 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 text-xs text-slate-700 dark:text-blue-200">
              <div className="font-bold text-blue-900 dark:text-blue-300 text-sm mb-1">
                Founder & Lead Designer — Medha Exam Academy
              </div>
              <p className="leading-relaxed">
                Created the comprehensive educational platform and testing suite tailored for government job preparation and competitive examination practice with 10,000+ real question bank assets.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
              <span className="text-xs text-slate-400">
                Last updated: 2026 • Verified Profile
              </span>
              <button
                onClick={handlePrint}
                className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-[#0f2b5c] hover:bg-blue-800 dark:bg-blue-600 transition-colors flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save / Print PDF</span>
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
