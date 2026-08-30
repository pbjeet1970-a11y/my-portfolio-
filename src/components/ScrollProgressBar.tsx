import React, { useEffect, useState } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="scroll-progress-container"
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] pointer-events-none bg-transparent"
      aria-hidden="true"
    >
      <div
        id="scroll-progress-bar"
        className="h-full bg-gradient-to-r from-blue-600 via-sky-400 to-blue-500 transition-[width] duration-75 ease-out shadow-[0_0_8px_rgba(59,130,246,0.6)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};
