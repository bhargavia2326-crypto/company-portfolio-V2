import React from 'react';
import { TECH_STACK_ITEMS } from '../data/content';

export const TechnologyCloud: React.FC = () => {
  return (
    <section className="py-20 px-6 lg:px-12 bg-[#f4f4f1]/50">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-semibold text-[#4e39e5] uppercase tracking-wider block font-mono">
            TECHNOLOGY STACK
          </span>
          <h2 className="font-headline text-2xl lg:text-3xl font-semibold text-[#1a1c1b]">
            Built with modern standards
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {TECH_STACK_ITEMS.map((tech, idx) => (
            <div
              key={idx}
              className="px-6 py-3.5 rounded-full bg-white/70 backdrop-blur-md border border-white/80 dark:glass-pill-dark dark:border-white/10 dark:text-white shadow-sm text-sm font-medium text-[#1a1c1b] flex items-center gap-3 hover:border-[#4e39e5]/40 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
            >
              <span className="w-2 h-2 rounded-full bg-[#4e39e5]" />
              <span>{tech.name}</span>
              <span className="text-[11px] text-[#474556] dark:text-gray-400 font-mono border-l border-slate-200 dark:border-white/10 pl-2">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
