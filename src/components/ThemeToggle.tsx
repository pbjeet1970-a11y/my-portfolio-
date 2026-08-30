import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      id="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative inline-flex items-center justify-center p-2.5 rounded-xl transition-all duration-200 cursor-pointer
        bg-white hover:bg-slate-100 text-slate-900 
        dark:bg-[#0b1329] dark:hover:bg-slate-800 dark:text-amber-300 
        border border-slate-300 dark:border-blue-900/60 shadow-xs hover:shadow active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${className}`}
    >
      <span className="sr-only">Toggle theme</span>
      {isDark ? (
        <Sun className="w-5 h-5 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-5 h-5 text-[#0f2b5c] transition-transform duration-300 -rotate-12 hover:rotate-0" />
      )}
    </button>
  );
};
