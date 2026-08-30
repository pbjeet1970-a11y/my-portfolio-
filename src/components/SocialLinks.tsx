import React, { useState } from 'react';
import { socialLinksData } from '../data/profileData';
import { SocialLinkItem } from '../types';
import { Check, Copy, ExternalLink } from 'lucide-react';

export const SocialLinks: React.FC<{ variant?: 'hero' | 'footer' | 'contact' | 'compact' }> = ({
  variant = 'contact',
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyUrl = (e: React.MouseEvent, url: string, name: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(url);
    setCopiedId(name);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getBrandIcon = (platform: SocialLinkItem['platform']) => {
    switch (platform) {
      case 'facebook':
        return (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        );
      case 'youtube':
        return (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        );
      case 'linkedin':
        return (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        );
      case 'twitter':
        return (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      case 'behance':
        return (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.726 3-3.082 0-5.5-2.211-5.5-5.5 0-3.219 2.378-5.5 5.48-5.5 3.527 0 4.975 2.658 4.746 5.8h-7.226c.07 1.832 1.256 2.667 2.66 2.667 1.077 0 1.933-.564 2.274-1.467h2.292zm-4.726-5.5c-1.104 0-1.848.646-2.02 1.8h4.043c-.078-1.078-.795-1.8-2.023-1.8zm-11 5.5h-4v-14h4.48c2.474 0 4.02 1.354 4.02 3.5 0 1.492-.767 2.593-2.039 3.078 1.637.458 2.539 1.77 2.539 3.557 0 2.457-1.835 3.865-5 3.865zm-4-8.5h3.8c1.378 0 2.2-.625 2.2-1.75 0-1.07-.811-1.75-2.2-1.75h-3.8v3.5zm0 6h4.2c1.472 0 2.3-.728 2.3-2 0-1.182-.872-2-2.3-2h-4.2v4z" />
          </svg>
        );
      case 'instagram':
        return (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        );
      default:
        return <ExternalLink className="w-5 h-5" />;
    }
  };

  const getHoverColor = (platform: SocialLinkItem['platform']) => {
    switch (platform) {
      case 'facebook':
        return 'hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:bg-[#1877F2]/10';
      case 'youtube':
        return 'hover:text-[#FF0000] hover:border-[#FF0000]/40 hover:bg-[#FF0000]/10';
      case 'linkedin':
        return 'hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10';
      case 'twitter':
        return 'hover:text-[#1DA1F2] hover:border-[#1DA1F2]/40 hover:bg-[#1DA1F2]/10';
      case 'behance':
        return 'hover:text-[#1769FF] hover:border-[#1769FF]/40 hover:bg-[#1769FF]/10';
      case 'instagram':
        return 'hover:text-[#E4405F] hover:border-[#E4405F]/40 hover:bg-[#E4405F]/10';
      default:
        return 'hover:text-blue-600 hover:border-blue-400 hover:bg-blue-50';
    }
  };

  return (
    <div className={`flex flex-wrap items-center gap-3 ${variant === 'hero' ? 'justify-start' : variant === 'footer' ? 'justify-center md:justify-start' : 'justify-start'}`}>
      {socialLinksData.map((social) => (
        <div key={social.name} className="relative group">
          <a
            id={`social-link-${social.platform}`}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.ariaLabel}
            className={`flex items-center justify-center rounded-xl transition-all duration-200 
              ${variant === 'compact' ? 'w-9 h-9 text-sm' : 'w-11 h-11'}
              bg-white dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 
              border border-slate-200 dark:border-slate-700/80 shadow-xs hover:shadow-md 
              hover:-translate-y-1 ${getHoverColor(social.platform)}`}
          >
            {getBrandIcon(social.platform)}
          </a>

          {/* Accessible Tooltip */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col items-center pointer-events-none z-30">
            <div className="bg-slate-900 text-white dark:bg-slate-800 dark:text-blue-300 text-xs py-1 px-2.5 rounded-md whitespace-nowrap shadow-lg border border-slate-700">
              <span className="font-medium">{social.name}</span>
              <span className="text-[10px] block opacity-75">{social.handle}</span>
            </div>
            <div className="w-2 h-2 bg-slate-900 dark:bg-slate-800 rotate-45 -mt-1 border-r border-b border-slate-700"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
