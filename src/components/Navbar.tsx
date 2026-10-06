import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageRoute } from '../types';
import { COMPANY_INFO } from '../data/content';
import { Menu, X, ArrowRight, UserCheck, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showFounderModal, setShowFounderModal] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navLinks: { label: string; route: PageRoute }[] = [
    { label: 'Home', route: 'home' },
    { label: 'Services', route: 'services' },
    { label: 'Solutions', route: 'solutions' },
    { label: 'AgriTech', route: 'agritech' },
    { label: 'Products', route: 'product-studio' },
    { label: 'Projects', route: 'projects' },
    { label: 'About', route: 'about' },
  ];

  const handleLinkClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none">
        <div
          className={`max-w-7xl mx-auto h-16 ${
            isDark
              ? 'glass-panel-dark text-white'
              : 'glass-panel bg-white/70 backdrop-blur-xl border border-white/80 text-[#1a1c1b]'
          } rounded-full px-5 sm:px-6 flex items-center justify-between shadow-[0_4px_24px_rgba(0,0,0,0.06)] pointer-events-auto transition-all duration-300`}
        >
          {/* Brand */}
          <button 
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full group cursor-pointer text-left"
            aria-label="SOUICE Home"
          >
            <img 
              src={COMPANY_INFO.logoUrl} 
              alt="SOUICE Logo" 
              className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-105" 
            />
            <span className={`font-headline font-semibold text-xl tracking-tight ${isDark ? 'text-white' : 'text-[#1a1c1b]'}`}>
              SOUICE
            </span>
          </button>

          {/* Nav Links Desktop */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((item) => {
              const isActive = currentRoute === item.route || (item.route === 'solutions' && currentRoute === 'ai-ml');
              return (
                <button
                  key={item.route}
                  onClick={() => handleLinkClick(item.route)}
                  className={`px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#4e39e5] text-white shadow-sm shadow-[#4e39e5]/30'
                      : isDark
                        ? 'text-gray-300 hover:text-white hover:bg-white/10'
                        : 'text-[#474556] hover:text-[#1a1c1b] hover:bg-black/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Zone */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                isDark
                  ? 'bg-white/10 hover:bg-white/20 text-amber-300 border border-white/15 shadow-[0_0_14px_rgba(253,224,71,0.2)]'
                  : 'bg-black/5 hover:bg-black/10 text-slate-700 border border-black/5'
              }`}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, scale: 0.6, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: 90, scale: 0.6, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Sun size={17} className="text-amber-300" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, scale: 0.6, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: -90, scale: 0.6, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Moon size={17} className="text-[#4e39e5]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Founder Profile Pill Icon */}
            <button
              onClick={() => setShowFounderModal(true)}
              className={`w-9 h-9 rounded-full ${
                isDark
                  ? 'bg-[#4e39e5]/20 hover:bg-[#4e39e5]/30 text-[#a393d8] border border-white/10'
                  : 'bg-[#4e39e5]/10 hover:bg-[#4e39e5]/20 text-[#4e39e5]'
              } flex items-center justify-center transition-colors cursor-pointer`}
              title="Founder: Bhargavi"
              aria-label="View Founder Profile"
            >
              <span className="material-symbols-outlined text-[18px]">person</span>
            </button>

            <button
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#4e39e5] text-white text-[13px] font-medium hover:bg-[#3d29cf] transition-all shadow-md shadow-[#4e39e5]/25 cursor-pointer whitespace-nowrap"
            >
              Contact
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden w-9 h-9 rounded-full ${
                isDark
                  ? 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                  : 'bg-black/5 hover:bg-black/10 text-[#1a1c1b]'
              } flex items-center justify-center transition-colors cursor-pointer`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-x-4 top-24 z-50 p-6 rounded-3xl ${
              isDark
                ? 'glass-panel-dark text-white border-white/15'
                : 'bg-white/95 backdrop-blur-2xl border border-white/80 text-[#1a1c1b]'
            } shadow-2xl lg:hidden flex flex-col gap-4`}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((item) => {
                const isActive = currentRoute === item.route;
                return (
                  <button
                    key={item.route}
                    onClick={() => handleLinkClick(item.route)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#4e39e5] text-white'
                        : isDark
                          ? 'text-gray-200 hover:bg-white/10'
                          : 'text-[#1a1c1b] hover:bg-slate-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={16} className={isActive ? 'text-white' : isDark ? 'text-gray-400' : 'text-slate-400'} />
                  </button>
                );
              })}
            </div>

            {/* Mobile Theme Toggle Row */}
            <div className={`p-3 rounded-2xl flex items-center justify-between ${
              isDark ? 'bg-white/5 border border-white/10' : 'bg-slate-50 border border-slate-100'
            }`}>
              <span className={`text-xs font-medium ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                Appearance: <span className="font-semibold">{isDark ? 'Dark Mode' : 'Light Mode'}</span>
              </span>
              <button
                onClick={toggleTheme}
                className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 ${
                  isDark
                    ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                    : 'bg-[#4e39e5]/10 text-[#4e39e5]'
                }`}
              >
                {isDark ? <Sun size={14} /> : <Moon size={14} />}
                <span>{isDark ? 'Light' : 'Dark'}</span>
              </button>
            </div>

            <div className={`pt-3 border-t ${isDark ? 'border-white/10' : 'border-slate-100'} flex flex-col gap-2`}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3.5 rounded-full bg-[#4e39e5] text-white text-center font-medium shadow-lg shadow-[#4e39e5]/30 cursor-pointer"
              >
                Start a Project
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setShowFounderModal(true);
                }}
                className={`w-full py-2.5 rounded-full ${
                  isDark ? 'bg-white/10 text-gray-200 hover:bg-white/15' : 'bg-slate-100 text-slate-700'
                } text-center text-xs font-medium cursor-pointer`}
              >
                Meet Founder: Bhargavi
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Founder Info Modal */}
      <AnimatePresence>
        {showFounderModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className={`${
                isDark
                  ? 'glass-panel-dark text-white border-white/15'
                  : 'bg-white border border-white/80 text-slate-900'
              } rounded-3xl max-w-md w-full overflow-hidden shadow-2xl p-6 relative`}
            >
              <button
                onClick={() => setShowFounderModal(false)}
                className={`absolute top-4 right-4 w-8 h-8 rounded-full ${
                  isDark ? 'bg-white/10 hover:bg-white/20 text-gray-300' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                } flex items-center justify-center transition-colors cursor-pointer`}
                aria-label="Close dialog"
              >
                <X size={16} />
              </button>

              <div className="flex items-center gap-4 mb-5">
                <img
                  src={COMPANY_INFO.founder.imageUrl}
                  alt="Bhargavi - Founder & Owner"
                  className="w-16 h-16 rounded-2xl object-cover object-top shadow-md border-2 border-white/40"
                />
                <div>
                  <h3 className={`font-headline font-semibold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {COMPANY_INFO.founder.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#8b7cf8] font-medium">
                    <UserCheck size={14} />
                    <span>Founder & Owner</span>
                  </div>
                  <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                    SOUICE Technologies
                  </span>
                </div>
              </div>

              <blockquote className={`p-4 rounded-2xl ${
                isDark ? 'bg-[#5b45d9]/20 border border-[#8b7cf8]/20 text-gray-200' : 'bg-[#edebff]/60 border border-[#4e39e5]/10 text-slate-700'
              } text-xs italic leading-relaxed mb-4`}>
                "{COMPANY_INFO.founder.quote}"
              </blockquote>

              <p className={`text-xs ${isDark ? 'text-gray-300' : 'text-slate-600'} leading-relaxed mb-6`}>
                Bhargavi directs company strategy, technological architecture, and product engineering, ensuring that SOUICE solutions solve real-world problems with robust security and scalability.
              </p>

              <div className="grid grid-cols-2 gap-3 text-center mb-6">
                <div className={`p-3 rounded-xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-slate-50 border border-slate-100'}`}>
                  <div className="font-headline text-lg font-bold text-[#8b7cf8]">100%</div>
                  <div className={`text-[11px] ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>Independent Ownership</div>
                </div>
                <div className={`p-3 rounded-xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-slate-50 border border-slate-100'}`}>
                  <div className="font-headline text-lg font-bold text-[#8b7cf8]">Zero</div>
                  <div className={`text-[11px] ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>Compromise on Security</div>
                </div>
              </div>

              <button
                onClick={() => {
                  setShowFounderModal(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-full bg-[#4e39e5] text-white text-xs font-medium hover:bg-[#3d29cf] transition-colors cursor-pointer"
              >
                Reach Out Directly
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
