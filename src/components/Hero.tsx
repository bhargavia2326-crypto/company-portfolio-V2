import React from 'react';
import { HeroCanvas } from './HeroCanvas';
import { HeroDataPanel } from './HeroDataPanel';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
  onExploreSolutions: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onExploreSolutions }) => {
  return (
    <section className="relative w-full min-h-[920px] lg:min-h-[980px] xl:min-h-[1040px] flex flex-col justify-between pt-32 pb-16 overflow-hidden bg-[#fafaf7] text-[#111216]">
      {/* Restrained architectural ambient light: warm white base with subtle lavender bloom */}
      <div className="absolute top-0 right-0 w-[840px] h-[840px] rounded-full bg-[#ede9fe]/40 blur-[170px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[540px] h-[540px] rounded-full bg-[#f3f0ff]/50 blur-[150px] pointer-events-none" />

      {/* Main Editorial Canvas */}
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10 flex-1 flex flex-col justify-between">
        {/* Top Technical Metadata Bar — Pure Typographic Hierarchy, Zero Pill Badges */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-10 border-b border-black/[0.06] text-[11px] font-mono text-gray-500 uppercase tracking-widest select-none">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5b45d9]" />
            <span className="text-gray-900 font-medium">SOUICE Technologies</span>
            <span className="text-gray-300">/</span>
            <span>Est. 2025</span>
          </div>
          <div className="flex items-center gap-6">
            <span>Bhargavi · Founder &amp; Owner</span>
            <span className="hidden sm:inline text-gray-300">/</span>
            <span className="hidden sm:inline">Deterministic Systems</span>
          </div>
        </div>

        {/* Hero Editorial Body: Asymmetric Typographic Stance + Sculptural Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-16 items-center py-10 lg:py-16">
          {/* Left Column: Oversized Editorial Typography with Distinct Weights & Line Heights */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start gap-8">
            {/* Typographic Eyebrow — Monospace, No Pill Badges */}
            <div className="flex items-center gap-3 text-xs font-mono text-gray-400 tracking-[0.22em] uppercase select-none">
              <span className="text-gray-900 font-semibold">01</span>
              <span className="w-8 h-px bg-black/25" />
              <span>Applied Systems &amp; Autonomous Intelligence</span>
            </div>

            {/* Headline with Distinct Line Heights, Weights, and Typographic Dialogue */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[84px] xl:text-[98px] 2xl:text-[108px] text-[#111216] select-none">
              <span className="block font-headline font-bold tracking-[-0.04em] leading-[0.92]">
                Build smarter.
              </span>
              <span className="block font-headline font-light text-[#4a4b52] tracking-[-0.035em] leading-[0.94] mt-1.5 sm:mt-2.5">
                Secure better.
              </span>
              <span className="block font-serif italic font-normal text-[#5b45d9] tracking-[-0.02em] leading-[0.96] mt-1.5 sm:mt-2.5">
                Grow further.
              </span>
            </h1>

            {/* Editorial Body Copy */}
            <p className="text-base sm:text-lg lg:text-[19px] text-gray-600 max-w-lg leading-[1.6] font-normal pt-1">
              We engineer intelligent software, zero-trust cryptographic defense, and rural agronomic telemetry for organizations solving tangible real-world problems.
            </p>

            {/* Minimalist Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onStartProject}
                className="px-8 py-4 rounded-full bg-[#111216] hover:bg-[#24252c] text-white text-[14px] font-medium transition-all shadow-sm hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center gap-2.5"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 text-gray-300" />
              </button>
              <button
                onClick={onExploreSolutions}
                className="px-8 py-4 rounded-full bg-transparent hover:bg-black/[0.04] border border-black/20 text-[#111216] text-[14px] font-medium transition-colors cursor-pointer"
              >
                Explore Solutions
              </button>
            </div>

            {/* Clean Value Metadata */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono text-gray-500 border-t border-black/[0.06] w-full max-w-lg">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Independent &amp; Founder-Led</span>
              </div>
              <span className="text-gray-300">/</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5b45d9]" />
                <span>Zero-Trust Architecture</span>
              </div>
            </div>
          </div>

          {/* Right Column: Large Sculptural 3D Technology Glasswork + Contextual Layered Panels */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full h-[540px] sm:h-[620px] lg:h-[680px] xl:h-[720px] flex items-center justify-center">
              {/* Central Three.js Glass Technology Sculpture */}
              <div className="relative z-15 w-full h-full flex items-center justify-center">
                <HeroCanvas />
              </div>

              {/* Context-Rich Floating Layered UI Cards (AI Core, Security, Data, AgriTech, System) */}
              <HeroDataPanel className="absolute inset-0 z-25" />
            </div>
          </div>
        </div>

        {/* Bottom Editorial Footnote Strip */}
        <div className="pt-8 border-t border-black/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            AI Systems · Distributed Software · Cryptographic Engineering · AgriTech
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>All systems nominal · Zero-Trust active</span>
          </div>
        </div>
      </div>
    </section>
  );
};
