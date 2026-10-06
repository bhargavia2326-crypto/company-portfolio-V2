import React, { useState } from 'react';
import { PageRoute } from '../types';
import { PRODUCT_STUDIO_STEPS, FEATURED_VENTURES } from '../data/content';
import { 
  Rocket, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  Cpu, 
  ShieldCheck, 
  Sprout, 
  Workflow, 
  Terminal,
  Activity,
  ChevronRight
} from 'lucide-react';

interface ProductStudioPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenContact: () => void;
}

export const ProductStudioPage: React.FC<ProductStudioPageProps> = ({ onNavigate, onOpenContact }) => {
  const [selectedStep, setSelectedStep] = useState<number>(0);
  const [selectedVenture, setSelectedVenture] = useState<number>(0);

  const activeStep = PRODUCT_STUDIO_STEPS[selectedStep];
  const activeVenture = FEATURED_VENTURES[selectedVenture];

  return (
    <div className="pt-24 pb-20 bg-[#090A10] min-h-screen text-white">
      {/* Hero Section */}
      <section className="px-6 lg:px-12 pt-12 pb-16 max-w-7xl mx-auto space-y-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 bg-[#65558f]/20 border border-[#a393d8]/30 text-[#cbbdef] text-xs font-mono font-semibold rounded-full tracking-wider uppercase">
            VENTURE INCUBATION & PRODUCT ENGINEERING
          </span>
          <span className="px-3 py-1 bg-white/5 text-gray-400 text-xs font-mono rounded-full">
            Full-Cycle Innovation Studio
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-white leading-[1.1]">
              From hard technical problem to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a393d8] via-[#cbbdef] to-[#80cbc4]">
                scalable enterprise software.
              </span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              SOUICE operates a dedicated internal Product Studio that conceptualizes, designs, 
              and validates proprietary software technologies before scaling them into industry-grade platforms.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onOpenContact}
                className="px-7 py-3.5 bg-[#65558f] hover:bg-[#7a68a8] text-white rounded-xl font-medium shadow-lg shadow-[#65558f]/30 transition-all flex items-center gap-2"
              >
                Partner on a Venture
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('projects')}
                className="px-7 py-3.5 border border-white/20 hover:bg-white/10 rounded-xl font-medium transition-colors text-white"
              >
                View Case Studies
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md space-y-4">
            <div className="text-xs font-mono text-gray-400 uppercase tracking-wider flex items-center justify-between">
              <span>Studio Engine</span>
              <span className="text-emerald-400">Live</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-sm text-gray-300">Active Incubations</span>
                <span className="font-mono font-bold text-white">4 Platforms</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-sm text-gray-300">Average MVP Velocity</span>
                <span className="font-mono font-bold text-[#cbbdef]">45 Days</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-sm text-gray-300">Architecture Standard</span>
                <span className="font-mono font-bold text-emerald-400">SOC2 / Zero-Trust</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-gray-300">Founder & Direction</span>
                <span className="font-mono text-sm text-gray-300">Bhargavi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Stage Process Engine */}
      <section className="px-6 lg:px-12 py-16 max-w-7xl mx-auto space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-[#a393d8]">
            LIFECYCLE ARCHITECTURE
          </span>
          <h2 className="text-3xl font-serif text-white">
            The SOUICE Venture Engine
          </h2>
          <p className="text-sm text-gray-400">
            A disciplined, engineering-first methodology that turns market inefficiencies into high-margin digital products.
          </p>
        </div>

        {/* Stepper bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {PRODUCT_STUDIO_STEPS.map((step, idx) => {
            const isCurrent = idx === selectedStep;
            return (
              <button
                key={step.step}
                onClick={() => setSelectedStep(idx)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  isCurrent
                    ? 'bg-[#65558f]/20 border-[#a393d8] shadow-lg shadow-[#65558f]/10'
                    : 'bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-[#a393d8] font-bold">0{idx + 1}</span>
                  <span className={`w-2 h-2 rounded-full ${isCurrent ? 'bg-emerald-400' : 'bg-gray-600'}`} />
                </div>
                <div className="font-semibold text-white text-sm">{step.step}</div>
                <div className="text-[11px] text-gray-400 truncate mt-1">{step.title}</div>
              </button>
            );
          })}
        </div>

        {/* Step Detail Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-[#65558f]/30 border border-[#a393d8]/40 rounded-full text-xs font-mono text-[#cbbdef]">
                Stage 0{selectedStep + 1} of 06
              </span>
              <h3 className="text-2xl font-serif text-white">{activeStep.title}</h3>
            </div>
            <p className="text-gray-300 text-base leading-relaxed">
              {activeStep.desc}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-2 text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Rigorous technical verification with real user workflows</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Modern tech stack (TypeScript, Go, Python, PostgreSQL)</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 bg-black/40 border border-white/10 p-5 rounded-xl font-mono text-xs space-y-3">
            <div className="flex items-center justify-between text-gray-400 pb-2 border-b border-white/10">
              <span className="flex items-center gap-1.5 text-gray-300">
                <Terminal className="w-3.5 h-3.5 text-[#a393d8]" />
                Stage Deliverables
              </span>
              <span className="text-emerald-400">Verified</span>
            </div>
            <div className="space-y-1.5 text-gray-400">
              <div>&gt; Scope specification matrix</div>
              <div>&gt; Benchmark latency &lt; 50ms</div>
              <div>&gt; Automated CI/CD security gate</div>
              <div>&gt; Containerized micro-orchestration</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Venture Incubations */}
      <section className="px-6 lg:px-12 py-16 max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#a393d8]">
              STUDIO PORTFOLIO
            </span>
            <h2 className="text-3xl font-serif text-white mt-1">
              Active Studio Ventures
            </h2>
          </div>
          <p className="text-xs font-mono text-gray-400">
            Proprietary products engineered and backed by SOUICE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURED_VENTURES.map((venture) => {
            return (
              <div
                key={venture.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-[#a393d8]/50 transition-all space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-white/10 text-gray-300 rounded text-xs font-mono">
                      {venture.tag}
                    </span>
                    <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded text-xs font-mono">
                      {venture.status}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif text-white">{venture.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {venture.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={onOpenContact}
                    className="text-xs font-mono text-[#a393d8] hover:text-[#cbbdef] flex items-center gap-1.5 transition-colors"
                  >
                    Request Partner Briefing
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] font-mono text-gray-500">SOUICE Incubator</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Philosophy Callout */}
      <section className="px-6 lg:px-12 py-12 max-w-5xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10 text-center space-y-6">
          <div className="inline-flex p-3 bg-[#65558f]/30 rounded-2xl text-[#cbbdef] border border-[#a393d8]/30">
            <Rocket className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-serif text-white">
            Have a bold enterprise challenge?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            We collaborate with select enterprises and founders to co-develop, 
            pilot, and bring game-changing digital platforms to life.
          </p>
          <div>
            <button
              onClick={onOpenContact}
              className="px-8 py-3.5 bg-white text-[#1b1c19] hover:bg-gray-100 rounded-xl font-medium transition-colors"
            >
              Submit Studio Proposal
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
