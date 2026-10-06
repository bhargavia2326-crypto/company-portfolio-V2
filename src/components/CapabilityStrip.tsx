import React from 'react';
import { CAPABILITY_METRICS } from '../data/content';
import { ArrowUpRight } from 'lucide-react';

interface CapabilityStripProps {
  onSelectCapability?: (title: string) => void;
}

export const CapabilityStrip: React.FC<CapabilityStripProps> = ({ onSelectCapability }) => {
  return (
    <section className="py-16 px-6 sm:px-10 lg:px-16 xl:px-20 bg-[#fafaf7] text-[#111216] border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-black/[0.08]">
        {CAPABILITY_METRICS.map((item, idx) => {
          return (
            <div
              key={idx}
              onClick={() => onSelectCapability?.(item.title)}
              className={`flex flex-col justify-between space-y-4 group cursor-pointer transition-colors ${
                idx > 0 ? 'pt-6 sm:pt-0 sm:pl-8' : ''
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                <span>0{idx + 1}</span>
                <span className="text-gray-900 group-hover:text-[#5b45d9] flex items-center gap-1 font-semibold transition-colors">
                  {item.change}
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>

              <div>
                <h3 className="font-headline text-lg font-semibold text-[#111216] group-hover:text-[#5b45d9] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
