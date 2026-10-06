import React from 'react';
import { COMPANY_INFO } from '../data/content';
import { PageRoute } from '../types';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#f4f4f1] dark:bg-[#07080c] py-14 mt-16 border-t border-[#c8c4d8]/20 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 cursor-pointer text-left focus:outline-none"
        >
          <img
            alt="SOUICE Logo"
            className="h-6 w-auto object-contain"
            src={COMPANY_INFO.logoUrl}
          />
          <span className="font-headline font-semibold text-lg text-[#1a1c1b] dark:text-white">
            SOUICE
          </span>
        </button>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#474556] dark:text-gray-400">
          <button onClick={() => onNavigate('services')} className="hover:text-[#1a1c1b] dark:hover:text-white transition-colors cursor-pointer">
            Services
          </button>
          <button onClick={() => onNavigate('solutions')} className="hover:text-[#1a1c1b] dark:hover:text-white transition-colors cursor-pointer">
            AI &amp; ML
          </button>
          <button onClick={() => onNavigate('software')} className="hover:text-[#1a1c1b] dark:hover:text-white transition-colors cursor-pointer">
            Software
          </button>
          <button onClick={() => onNavigate('cybersecurity')} className="hover:text-[#1a1c1b] dark:hover:text-white transition-colors cursor-pointer">
            Cybersecurity
          </button>
          <button onClick={() => onNavigate('agritech')} className="hover:text-[#1a1c1b] dark:hover:text-white transition-colors cursor-pointer">
            AgriTech
          </button>
          <button onClick={() => onNavigate('product-studio')} className="hover:text-[#1a1c1b] dark:hover:text-white transition-colors cursor-pointer">
            Product Studio
          </button>
          <button onClick={() => onNavigate('projects')} className="hover:text-[#1a1c1b] dark:hover:text-white transition-colors cursor-pointer">
            Projects
          </button>
          <button onClick={() => onNavigate('about')} className="hover:text-[#1a1c1b] dark:hover:text-white transition-colors cursor-pointer">
            About &amp; Founder
          </button>
          <button onClick={() => onNavigate('contact')} className="hover:text-[#1a1c1b] dark:hover:text-white font-medium text-[#4e39e5] dark:text-[#8b7cf8] transition-colors cursor-pointer">
            Contact
          </button>
        </div>

        <div className="flex items-center gap-4 text-[#474556] dark:text-gray-400">
          <span className="material-symbols-outlined text-[20px] cursor-pointer hover:text-[#1a1c1b] dark:hover:text-white transition-colors" title="Global Network">
            public
          </span>
          <span className="material-symbols-outlined text-[20px] cursor-pointer hover:text-[#1a1c1b] dark:hover:text-white transition-colors" title="Share Architecture">
            share
          </span>
          <span className="material-symbols-outlined text-[20px] cursor-pointer hover:text-[#1a1c1b] dark:hover:text-white transition-colors" title="System Mesh">
            hub
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-8 pt-8 border-t border-[#c8c4d8]/20 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#474556] dark:text-gray-400 gap-4">
        <div>© 2025 SOUICE Technologies, Inc. All rights reserved. Founded by Bhargavi.</div>
        <div className="flex items-center gap-6">
          <button onClick={() => onNavigate('privacy')} className="hover:text-[#1a1c1b] dark:hover:text-white transition-colors cursor-pointer">
            Privacy Policy
          </button>
          <button onClick={() => onNavigate('terms')} className="hover:text-[#1a1c1b] dark:hover:text-white transition-colors cursor-pointer">
            Terms of Service
          </button>
          <button onClick={() => onNavigate('cybersecurity')} className="hover:text-[#1a1c1b] dark:hover:text-white transition-colors cursor-pointer">
            Security Overview
          </button>
        </div>
      </div>
    </footer>
  );
};
