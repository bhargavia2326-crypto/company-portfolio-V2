import React, { useState } from 'react';
import { PageRoute } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface BentoServicesProps {
  onNavigate: (route: PageRoute) => void;
}

interface ServicePillar {
  index: string;
  name: string;
  route: PageRoute;
  subtitle: string;
  statement: string;
  metrics: string;
  tags: string[];
  visualType: 'neural' | 'software' | 'security' | 'automation' | 'agritech';
}

const PILLARS: ServicePillar[] = [
  {
    index: '01',
    name: 'AI & Machine Learning',
    route: 'solutions',
    subtitle: 'Proprietary reasoning agents and deterministic neural architectures',
    statement: 'We replace stochastic uncertainty with verified model logic trained on private operational datasets.',
    metrics: '98.7% Benchmark Accuracy · Sub-20ms Latency',
    tags: ['Transformer Inference', 'Retrieval Models', 'Edge ML'],
    visualType: 'neural'
  },
  {
    index: '02',
    name: 'Software Engineering',
    route: 'software',
    subtitle: 'Resilient cloud infrastructure and distributed high-throughput platforms',
    statement: 'Zero cold-start microservices built in Rust and Go with deterministic state synchronization.',
    metrics: '< 0.42ms P99 Execution · Infinite Autoscaling',
    tags: ['Distributed Systems', 'CRDT State Sync', 'Kernel-Bypass I/O'],
    visualType: 'software'
  },
  {
    index: '03',
    name: 'Cybersecurity',
    route: 'cybersecurity',
    subtitle: 'Zero-trust perimeter enforcement and cryptographic infrastructure',
    statement: 'Post-quantum lattice primitives and continuous hardware token attestation built into the foundation.',
    metrics: 'Zero Unmitigated CVEs · mTLS v1.3 Enforced',
    tags: ['Zero-Trust Architecture', 'Post-Quantum Crypto', 'Automated Containment'],
    visualType: 'security'
  },
  {
    index: '04',
    name: 'Automation & Data',
    route: 'services',
    subtitle: 'Autonomous multi-agent execution engines for high-friction workflows',
    statement: 'Event-driven data pipelines that turn fragmented corporate systems into synchronized execution engines.',
    metrics: '1.2M+ Daily Pipeline Ops · 10x Velocity',
    tags: ['DAG Orchestration', 'Event Streaming', 'Autonomous Agents'],
    visualType: 'automation'
  },
  {
    index: '05',
    name: 'AgriTech Intelligence',
    route: 'agritech',
    subtitle: 'IoT telemetry and multispectral aerial sensing for real agricultural acreage',
    statement: 'Long-range LoRaWAN soil moisture meshes coupled with satellite NDVI indexes to optimize global food production.',
    metrics: '-34% Water Consumption · +22% Crop Yield',
    tags: ['Sub-Soil LoRa Telemetry', 'Drone NDVI Imaging', 'Automated Irrigation'],
    visualType: 'agritech'
  }
];

export const BentoServices: React.FC<BentoServicesProps> = ({ onNavigate }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activePillar = PILLARS[activeIndex];

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 xl:px-20 bg-[#fafaf7] text-[#111216] border-t border-black/[0.06]">
      {/* Editorial Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16 border-b border-black/[0.08]">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-gray-500 block mb-3">
            Capabilities &amp; Practice
          </span>
          <h2 className="font-headline text-4xl sm:text-6xl font-semibold tracking-[-0.03em] text-[#111216]">
            Disciplines engineered <br />
            <span className="font-serif italic font-normal text-gray-600">for tangible impact.</span>
          </h2>
        </div>
        <p className="text-base text-gray-600 max-w-md leading-relaxed font-normal">
          We operate across five interconnected technical practices, delivering deterministic software rather than speculative hype.
        </p>
      </div>

      {/* Main Studio Interaction: Large Editorial List + Live Visual Storytelling Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 items-start">
        {/* Left: Editorial Numbered List */}
        <div className="lg:col-span-7 divide-y divide-black/[0.08]">
          {PILLARS.map((pillar, idx) => {
            const isHovered = activeIndex === idx;
            return (
              <div
                key={pillar.index}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => onNavigate(pillar.route)}
                className="py-8 group cursor-pointer transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-baseline gap-6">
                    <span className="text-sm font-mono text-gray-400 group-hover:text-[#5b45d9] transition-colors">
                      {pillar.index}
                    </span>
                    <div>
                      <h3 className={`font-headline text-2xl sm:text-4xl transition-all ${
                        isHovered 
                          ? 'font-semibold text-[#111216] translate-x-2' 
                          : 'font-normal text-gray-500 hover:text-gray-900'
                      }`}>
                        {pillar.name}
                      </h3>
                      {isHovered && (
                        <p className="text-sm text-gray-600 mt-2 max-w-lg leading-relaxed animate-fade-in">
                          {pillar.subtitle}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className={`p-2.5 rounded-full border transition-all ${
                    isHovered
                      ? 'border-[#4e39e5] bg-[#4e39e5] text-white dark:bg-white dark:text-[#111216] dark:border-white'
                      : 'border-black/10 dark:border-white/15 text-gray-400 group-hover:border-black/30 dark:group-hover:border-white/40'
                  }`}>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Micro tags */}
                {isHovered && (
                  <div className="flex flex-wrap gap-2 pt-4 pl-12">
                    {pillar.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-mono px-2.5 py-1 bg-black/[0.04] dark:bg-white/[0.08] text-gray-700 dark:text-gray-300 rounded border border-transparent dark:border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right: Architectural Visual Preview Stage (Changes dynamically on hover) */}
        <div className="lg:col-span-5 sticky top-32">
          <div className="rounded-3xl bg-[#111216] text-white p-8 sm:p-10 shadow-2xl flex flex-col justify-between min-h-[460px] relative overflow-hidden">
            {/* Subtle violet ambient light inside dark panel */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#5b45d9]/25 rounded-full blur-3xl pointer-events-none" />

            {/* Top metadata */}
            <div className="flex items-center justify-between text-xs font-mono text-gray-400 pb-6 border-b border-white/10 relative z-10">
              <span className="uppercase tracking-widest text-[#a393d8]">Practice Brief</span>
              <span>{activePillar.index} / 05</span>
            </div>

            {/* Middle: Typographic Statement */}
            <div className="space-y-4 py-8 relative z-10">
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                {activePillar.metrics}
              </span>
              <h4 className="font-headline text-2xl font-medium text-white leading-snug">
                "{activePillar.statement}"
              </h4>
            </div>

            {/* Bottom: Action trigger */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400 relative z-10">
              <span>Verified Production Standard</span>
              <button
                onClick={() => onNavigate(activePillar.route)}
                className="text-white hover:text-[#a393d8] flex items-center gap-1 transition-colors underline cursor-pointer"
              >
                Explore Practice Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
