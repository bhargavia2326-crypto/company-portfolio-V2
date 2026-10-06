import React from 'react';
import { PROCESS_STEPS } from '../data/content';

export const ProcessTimeline: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-[#f4f4f1]/60">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-semibold text-[#4e39e5] uppercase tracking-wider block font-mono">
            HOW WE WORK
          </span>
          <h2 className="font-headline text-3xl lg:text-5xl font-semibold tracking-tight text-[#1a1c1b]">
            A seamless journey to excellence
          </h2>
          <p className="text-base text-[#474556] leading-relaxed">
            From initial discovery to continuous evolution, we partner with you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step, idx) => {
            const isDark = idx === 3;
            return (
              <div
                key={idx}
                className={`p-8 rounded-3xl shadow-sm space-y-4 relative flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 ${
                  isDark
                    ? 'bg-[#090A10] text-white shadow-xl border border-white/10'
                    : 'bg-white/70 backdrop-blur-xl border border-white/80'
                }`}
              >
                <span className={`font-headline text-2xl font-bold font-mono ${isDark ? 'text-[#6857ff]' : 'text-[#4e39e5]'}`}>
                  {step.number}
                </span>
                <div>
                  <h3 className={`font-headline text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-[#1a1c1b]'}`}>
                    {step.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-[#c8c4d8]' : 'text-[#474556]'}`}>
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
