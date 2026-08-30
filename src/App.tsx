import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Highlights } from './components/Highlights';
import { Skills } from './components/Skills';
import { Portfolio } from './components/Portfolio';
import { MedhaExam } from './components/MedhaExam';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#070d18] dark:text-slate-100 font-sans transition-colors duration-300 selection:bg-blue-600 selection:text-white">
        {/* Subtle Top Scroll Progress Indicator */}
        <ScrollProgressBar />

        {/* Sticky Header */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          {/* 1. Hero Section */}
          <Hero onOpenResume={() => setIsResumeOpen(true)} />

          {/* 2. Project Highlights & Achievements Overview */}
          <Highlights />

          {/* 3. About Me Section */}
          <About onOpenResume={() => setIsResumeOpen(true)} />

          {/* 4. Interactive Skills Section */}
          <Skills />

          {/* 5. Portfolio & Project Showcase Gallery */}
          <Portfolio />

          {/* 6. Featured Educational Academy — Medha Exam */}
          <MedhaExam />

          {/* 7. Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Curriculum Vitae / Resume Lightbox */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
