import React from 'react';
import { COMPANY_INFO } from '../data/content';

export const FounderSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 xl:px-20 bg-[#fafaf7] text-[#111216] border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Authentic Editorial Portrait */}
        <div className="lg:col-span-5">
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-black/[0.08] dark:border-white/10 bg-stone-900 group">
            <img
              src={COMPANY_INFO.founder.imageUrl}
              alt="Portrait of Bhargavi, Founder & Owner of SOUICE Technologies"
              className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
              <div className="text-white space-y-1">
                <h3 className="font-headline text-2xl font-bold tracking-tight">
                  {COMPANY_INFO.founder.name}
                </h3>
                <p className="text-xs font-mono text-gray-300">
                  {COMPANY_INFO.founder.role} · SOUICE Technologies
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Statement */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-gray-500 block">
              Leadership &amp; Ownership
            </span>
            <h2 className="font-serif italic text-3xl sm:text-5xl lg:text-5xl text-[#111216] leading-[1.12]">
              "{COMPANY_INFO.founder.quote}"
            </h2>
          </div>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            "{COMPANY_INFO.founder.statement}"
          </p>

          <div className="pt-6 border-t border-black/[0.08] flex items-center gap-8 text-xs font-mono text-gray-600">
            <div>
              <span className="font-headline text-3xl font-semibold text-[#111216] block font-mono">
                100%
              </span>
              <span className="text-gray-500 mt-0.5 block">Founder Owned &amp; Operated</span>
            </div>
            <div className="w-px h-10 bg-black/10" />
            <div>
              <span className="font-headline text-3xl font-semibold text-[#111216] block font-mono">
                2025
              </span>
              <span className="text-gray-500 mt-0.5 block">Founded on First Principles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
