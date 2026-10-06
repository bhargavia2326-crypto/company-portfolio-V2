import React from 'react';
import { PHILOSOPHY_STEPS } from '../data/content';

export const EditorialPhilosophy: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 xl:px-20 bg-[#fafaf7] text-[#111216] border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Large Editorial Manifesto Quote */}
        <div className="max-w-4xl space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-gray-500 block">
            Core Conviction
          </span>
          <h2 className="font-headline text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.035em] text-[#111216] leading-[1.04]">
            "Technology should solve problems. <br />
            <span className="font-serif italic font-normal text-[#5b45d9]">
              Not create more of them."
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl font-normal pt-2">
            Most modern tech stacks introduce unmanageable complexity, hidden dependencies, and fragile automation. We take the opposite path.
          </p>
        </div>

        {/* Editorial Asymmetric Manifesto Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-black/[0.08]">
          {PHILOSOPHY_STEPS.map((step, idx) => {
            return (
              <div key={idx} className={`space-y-4 ${idx > 0 ? 'pt-6 lg:pt-0 lg:pl-8' : ''}`}>
                <span className="text-xs font-mono text-gray-400 block">
                  {step.number}
                </span>
                <h3 className="font-headline text-xl font-semibold text-[#111216]">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
