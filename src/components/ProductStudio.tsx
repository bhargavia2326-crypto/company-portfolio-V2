import React, { useState } from 'react';
import { PRODUCT_STUDIO_STEPS, FEATURED_VENTURES } from '../data/content';
import { 
  Rocket, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  ShieldCheck, 
  Activity, 
  Sparkles,
  ChevronRight,
  Terminal
} from 'lucide-react';

export const ProductStudio: React.FC = () => {
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  return (
    <section className="py-28 px-6 lg:px-12 bg-[#090A10] text-white relative overflow-hidden">
      {/* Volumetric background gradients */}
      <div className="absolute -top-40 left-1/3 w-[600px] h-[600px] bg-[#6857ff]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-40 right-10 w-[500px] h-[500px] bg-[#4e39e5]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#6857ff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-12">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#a393d8] block">
              Venture Engineering &amp; Incubations
            </span>
            <h2 className="font-headline text-4xl sm:text-6xl font-semibold tracking-[-0.03em] text-white">
              From concept to global scale.
            </h2>
          </div>
          <p className="text-base text-gray-400 max-w-md leading-relaxed font-normal">
            Our disciplined internal venture engine takes hard mathematical and infrastructural problems through deterministic validation stages.
          </p>
        </div>

        {/* 6 Lifecycle Steps with Layered Interactive Stepper */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {PRODUCT_STUDIO_STEPS.map((step, idx) => {
              const isCurrent = idx === activeStepIdx;
              const isScale = idx === 5;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStepIdx(idx)}
                  className={`p-5 rounded-2xl flex flex-col justify-between space-y-6 relative overflow-hidden transition-all duration-300 text-left cursor-pointer border ${
                    isCurrent
                      ? 'bg-[#6857ff]/20 border-[#a393d8] shadow-lg shadow-[#6857ff]/20 scale-[1.02]'
                      : isScale
                      ? 'bg-[#4e39e5]/30 border-[#4e39e5]/60 hover:bg-[#4e39e5]/40'
                      : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-mono font-bold ${isCurrent ? 'text-[#c4b5fd]' : 'text-gray-400'}`}>
                      {step.step}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${isCurrent ? 'bg-emerald-400 animate-ping' : 'bg-gray-600'}`} />
                  </div>
                  <div>
                    <h3 className="font-headline text-base font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="text-[11px] text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Live Deliverable Strip */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-[#6857ff]/20 text-[#c4b5fd] font-semibold">
                Stage 0{activeStepIdx + 1} Deliverable
              </span>
              <span className="text-gray-300">
                {PRODUCT_STUDIO_STEPS[activeStepIdx].title}: {PRODUCT_STUDIO_STEPS[activeStepIdx].desc}
              </span>
            </div>
            <div className="flex items-center gap-4 text-gray-400 shrink-0">
              <span>Duration: {PRODUCT_STUDIO_STEPS[activeStepIdx].duration}</span>
              <span className="text-emerald-400">SOC2 Hardened</span>
            </div>
          </div>
        </div>

        {/* Featured Studio Ventures from Stitch with Rich Layered UI */}
        <div className="space-y-8 pt-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-semibold text-[#a393d8] uppercase tracking-wider block font-mono">
                STUDIO BLUEPRINTS
              </span>
              <h3 className="font-headline text-2xl lg:text-3xl font-semibold text-white mt-1">
                Featured Internal Ventures &amp; Prototypes
              </h3>
            </div>
            <p className="text-xs font-mono text-gray-400">
              Independently conceptualized &amp; engineered by SOUICE
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FEATURED_VENTURES.map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-[#6857ff]/50 hover:shadow-[0_20px_50px_rgba(104,87,255,0.2)] transition-all duration-500 shadow-2xl relative"
              >
                {/* Specular top border */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                <div className="p-8 space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#6857ff]/20 text-[#c4b5fd] text-xs font-mono font-medium border border-[#6857ff]/30">
                      {item.tag}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-[10px] font-mono border border-emerald-500/20">
                      {item.status}
                    </span>
                  </div>

                  <h4 className="font-headline text-2xl font-semibold text-white group-hover:text-[#c4b5fd] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Visual Imagery with Floating Telemetry Chips */}
                <div className="w-full h-64 relative overflow-hidden bg-slate-950">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-75 group-hover:opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090A10] via-black/20 to-transparent pointer-events-none" />

                  {/* Overlaid Floating Glass Telemetry Chips */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-white/90">
                    <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10">
                      SOUICE Venture Incubator
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-[#6857ff]/40 backdrop-blur-md border border-white/20 text-[#c4b5fd] flex items-center gap-1">
                      <span>View Blueprint</span>
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
