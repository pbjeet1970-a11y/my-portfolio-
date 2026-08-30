import React, { useState } from 'react';
import { medhaExamFeatures, profileData } from '../data/profileData';
import {
  GraduationCap,
  ExternalLink,
  CheckCircle2,
  BarChart3,
  HeartHandshake,
  LayoutDashboard,
  BookOpenCheck,
  RefreshCw,
  Maximize2,
  Sparkles,
  ShieldCheck,
  Award,
  Users,
  Timer,
  Play,
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { AnimatedCounter } from './AnimatedCounter';

export const MedhaExam: React.FC = () => {
  const sectionRef = React.useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });
  const [iframeKey, setIframeKey] = useState(0);
  const [activeTab, setActiveTab] = useState<'embed' | 'interactive'>('embed');
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const sampleQuestion = {
    exam: "BCS & Government Job Mock Test #42",
    subject: "General Knowledge & Digital Technology",
    question: "What is the primary visual brand identity strategy implemented by Medha Exam for optimal student retention?",
    options: [
      "Distracting neon animations and complex menus",
      "Deep Blue focused typography with distraction-free MCQ flow",
      "Low contrast gray palettes without progress metrics",
      "Randomized unorganized question lists"
    ],
    correct: 1,
    explanation: "Medha Exam adopts a scientific Deep Blue visual system that reduces eye fatigue during long test-taking sessions while keeping students focused on real-time timer and progress indicators."
  };

  const handleSelectOption = (idx: number) => {
    setSelectedAnswer(idx);
    setShowResult(true);
  };

  const resetInteractive = () => {
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5" />;
      case 'LayoutDashboard':
        return <LayoutDashboard className="w-5 h-5" />;
      case 'BookOpenCheck':
        return <BookOpenCheck className="w-5 h-5" />;
      default:
        return <GraduationCap className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="medha-exam"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-slate-50 via-blue-50/40 to-slate-50 dark:from-[#070d18] dark:via-[#0b1329] dark:to-[#070d18] relative overflow-hidden border-t border-slate-200 dark:border-blue-950"
    >
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-sky-400/10 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Featured Academy Emphasis */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950 border border-blue-300 dark:border-blue-700 text-blue-900 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Featured Educational Academy Project</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Medha Exam
          </h2>
          
          <p className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-700 to-sky-600 dark:from-blue-400 dark:to-sky-300 bg-clip-text text-transparent mt-1">
            Our Educational Academy
          </p>

          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Medha Exam is an innovative digital academy and testing portal founded and designed to empower students and job aspirants with real examination simulations, deep diagnostic analytics, and competitive readiness.
          </p>
          
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#0f2b5c] to-blue-600 dark:from-blue-500 dark:to-sky-400 mx-auto mt-5 rounded-full" />
        </div>

        {/* Highlight Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="p-5 rounded-2xl bg-white dark:bg-[#0b1329] border border-blue-100 dark:border-blue-900/50 shadow-sm text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0f2b5c] dark:text-blue-400">
              <AnimatedCounter target={10000} trigger={isInView} duration={1.5} suffix="+" />
            </div>
            <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-1">Real Questions Added</div>
          </div>
          <div className="p-5 rounded-2xl bg-white dark:bg-[#0b1329] border border-blue-100 dark:border-blue-900/50 shadow-sm text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0f2b5c] dark:text-blue-400">
              <AnimatedCounter target={100} trigger={isInView} duration={1.2} suffix="%" />
            </div>
            <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-1">Job Exam Aligned</div>
          </div>
          <div className="p-5 rounded-2xl bg-white dark:bg-[#0b1329] border border-blue-100 dark:border-blue-900/50 shadow-sm text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0f2b5c] dark:text-blue-400">Instant</div>
            <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-1">Score & Diagnostic Reports</div>
          </div>
          <div className="p-5 rounded-2xl bg-white dark:bg-[#0b1329] border border-blue-100 dark:border-blue-900/50 shadow-sm text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0f2b5c] dark:text-blue-400">UI/UX</div>
            <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-1">Designed by Prosenjit Biswas</div>
          </div>
        </div>

        {/* Main Showcase Container: Embedded Website & Interactive Demo */}
        <div className="bg-white dark:bg-[#0b1329] rounded-3xl border border-slate-200 dark:border-blue-900/60 shadow-xl overflow-hidden mb-16">
          
          {/* Mock Browser Header Bar */}
          <div className="px-6 py-4 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {/* Browser Dots */}
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
              </div>
              
              {/* URL Address Pill */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-lg bg-white dark:bg-[#070d18] border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-600 dark:text-slate-300">
                <span className="text-emerald-500 font-bold">https://</span>
                <span>pbjobexam.netlify.app</span>
                <span className="text-slate-400">/</span>
              </div>
            </div>

            {/* View Mode Switches */}
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-slate-200/80 dark:bg-slate-800 p-1 rounded-xl">
                <button
                  id="tab-embed"
                  onClick={() => setActiveTab('embed')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'embed'
                      ? 'bg-white dark:bg-blue-600 text-blue-900 dark:text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Live Web Preview
                </button>
                <button
                  id="tab-interactive"
                  onClick={() => setActiveTab('interactive')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'interactive'
                      ? 'bg-white dark:bg-blue-600 text-blue-900 dark:text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  <span>Interactive Test Simulator</span>
                </button>
              </div>

              {activeTab === 'embed' && (
                <button
                  onClick={() => setIframeKey((prev) => prev + 1)}
                  className="p-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                  title="Reload Live View"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              )}

              <a
                id="btn-visit-medha-top"
                href={profileData.medhaExamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#0f2b5c] hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500 transition-colors shadow-xs"
              >
                <span>Visit Medha Exam</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Embedded Container Content */}
          <div className="relative min-h-[460px] sm:min-h-[520px] bg-slate-50 dark:bg-[#070d18] flex flex-col justify-center">
            {activeTab === 'embed' ? (
              <div className="relative w-full h-[520px] bg-slate-100 dark:bg-[#070d18]">
                {/* Fallback Info bar */}
                <div className="absolute top-2 right-2 z-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-[11px] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 flex items-center gap-2">
                  <span>If site preview is restricted by browser security policies:</span>
                  <a
                    href={profileData.medhaExamUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-blue-600 dark:text-blue-400 underline flex items-center gap-1"
                  >
                    Open Live Portal <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <iframe
                  key={iframeKey}
                  src={profileData.medhaExamUrl}
                  title="Medha Exam Academy Embedded Portal"
                  className="w-full h-full border-0"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                  loading="lazy"
                />
              </div>
            ) : (
              /* Interactive MCQ Simulator */
              <div className="p-6 sm:p-10 max-w-2xl mx-auto w-full">
                <div className="bg-white dark:bg-[#0b1329] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-blue-900/60 shadow-lg">
                  {/* Test Meta Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
                    <div>
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-900 dark:text-blue-300">
                        {sampleQuestion.exam}
                      </span>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {sampleQuestion.subject}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-900">
                      <Timer className="w-3.5 h-3.5" />
                      <span>Live Simulation</span>
                    </div>
                  </div>

                  {/* Question Prompt */}
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug mb-5">
                    {sampleQuestion.question}
                  </h4>

                  {/* Options */}
                  <div className="space-y-3 mb-6">
                    {sampleQuestion.options.map((option, idx) => {
                      const isSelected = selectedAnswer === idx;
                      const isCorrect = idx === sampleQuestion.correct;
                      let optionClasses = 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 hover:bg-blue-50/50 dark:hover:bg-slate-800';

                      if (showResult) {
                        if (isCorrect) {
                          optionClasses = 'border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 font-semibold';
                        } else if (isSelected && !isCorrect) {
                          optionClasses = 'border-red-500 bg-red-50/80 dark:bg-red-950/60 text-red-900 dark:text-red-200';
                        }
                      }

                      return (
                        <button
                          key={idx}
                          onClick={() => handleSelectOption(idx)}
                          className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all duration-200 flex items-start gap-3 cursor-pointer ${optionClasses}`}
                        >
                          <span className="w-6 h-6 rounded-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span className="leading-relaxed">{option}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Result & Explanation */}
                  {showResult && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-900 text-xs text-slate-700 dark:text-blue-200 leading-relaxed mb-4"
                    >
                      <div className="font-bold flex items-center gap-1.5 mb-1 text-blue-900 dark:text-blue-300">
                        <HelpCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span>Explanation & Methodology:</span>
                      </div>
                      <p>{sampleQuestion.explanation}</p>
                    </motion.div>
                  )}

                  {/* Reset / Explore CTA */}
                  <div className="flex items-center justify-between pt-2">
                    {showResult ? (
                      <button
                        onClick={resetInteractive}
                        className="text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-white"
                      >
                        Try Again
                      </button>
                    ) : (
                      <span className="text-xs text-slate-400">Click any option to test answer</span>
                    )}

                    <a
                      href={profileData.medhaExamUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 dark:text-blue-400 hover:underline"
                    >
                      <span>Take Full Exam on Medha Exam</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 6 Core Medha Exam Features Grid */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Medha Exam Core Features
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              Designed systematically to provide real exam readiness, intuitive ergonomics, and deep progress insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {medhaExamFeatures.map((feat) => (
              <div
                key={feat.id}
                id={`medha-feature-${feat.id}`}
                className="p-6 rounded-2xl bg-white dark:bg-[#0b1329] border border-slate-200/90 dark:border-blue-900/40 shadow-xs hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 border border-blue-100 dark:border-blue-900/60">
                      {getFeatureIcon(feat.icon)}
                    </div>
                    {feat.badge && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-900 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                        {feat.badge}
                      </span>
                    )}
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {feat.id}. {feat.title}
                  </h4>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 text-[11px] text-blue-600 dark:text-blue-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Academy Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strong Final CTA Bar */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0f2b5c] via-blue-900 to-blue-800 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-1">
              Live Educational Academy
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ready to Experience Medha Exam?
            </h3>
            <p className="text-sm text-blue-100/90 mt-1.5 max-w-xl">
              Explore the full interactive testing suite, examine real question banks, and see how our digital academy transforms exam preparation.
            </p>
          </div>

          <a
            id="btn-explore-medha-exam-main"
            href={profileData.medhaExamUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl font-bold text-blue-950 bg-white hover:bg-blue-50 shadow-lg hover:shadow-xl hover:scale-105 active:scale-100 transition-all duration-200 flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            <span>Explore Medha Exam</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
