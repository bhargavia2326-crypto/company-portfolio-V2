import React, { useState } from 'react';
import { Zap, Terminal } from 'lucide-react';

export const DarkAIFeature: React.FC = () => {
  const [pulseActive, setPulseActive] = useState(false);
  const [selectedLayer, setSelectedLayer] = useState<'attention' | 'retrieval' | 'execution'>('attention');

  const triggerSignal = () => {
    setPulseActive(true);
    setTimeout(() => {
      setPulseActive(false);
    }, 800);
  };

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 xl:px-20 bg-[#090a0e] text-white relative overflow-hidden border-t border-white/[0.06]">
      {/* Restrained subtle violet accent halo */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#5b45d9]/12 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* Editorial Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-white/10 pb-16">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#a393d8] block">
              Machine Intelligence
            </span>
            <h2 className="font-headline text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.035em] text-white leading-[1.02]">
              Intelligence is deterministic, <br />
              <span className="font-serif italic font-normal text-gray-400">not magical.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-base text-gray-400 leading-relaxed font-normal">
              We reject stochastic hallucinations in enterprise workflows. Our neural pipelines verify reasoning trajectories with mathematical bounds.
            </p>
          </div>
        </div>

        {/* Singular Architectural Artifact: Interactive Neural Inference Stage */}
        <div className="rounded-3xl bg-white/[0.02] border border-white/10 p-8 sm:p-12 backdrop-blur-xl shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Interactive Signal Visualizer */}
          <div className="lg:col-span-8 h-[360px] relative flex items-center justify-center bg-black/60 rounded-2xl border border-white/10 overflow-hidden p-6">
            <svg className="w-full h-full" viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Luminous data trajectories */}
              <path
                d="M80 150 C 180 50, 240 50, 320 150"
                stroke={pulseActive ? "#8b5cf6" : "#4c3da8"}
                strokeWidth={pulseActive ? "3" : "1.5"}
                className="transition-all duration-300"
              />
              <path
                d="M80 150 C 180 250, 240 250, 320 150"
                stroke={pulseActive ? "#8b5cf6" : "#4c3da8"}
                strokeWidth={pulseActive ? "3" : "1.5"}
                className="transition-all duration-300"
              />
              <path
                d="M320 150 L 520 150"
                stroke="#6366f1"
                strokeWidth="2"
                strokeDasharray={pulseActive ? "none" : "4 4"}
              />

              {/* Node A: Context Ingestion */}
              <g className="cursor-pointer" onClick={() => setSelectedLayer('retrieval')}>
                <circle cx="80" cy="150" r="16" fill="#15122e" stroke="#8b5cf6" strokeWidth="2" />
                <circle cx="80" cy="150" r="5" fill="#c4b5fd" />
                <text x="80" y="190" textAnchor="middle" fill="#9ca3af" fontSize="10" fontFamily="monospace">
                  Vector Context
                </text>
              </g>

              {/* Node B: Attention Matrix */}
              <g className="cursor-pointer" onClick={() => setSelectedLayer('attention')}>
                <circle cx="320" cy="150" r="22" fill="#15122e" stroke={selectedLayer === 'attention' ? "#a855f7" : "#6366f1"} strokeWidth="2" />
                <circle cx="320" cy="150" r="8" fill={pulseActive ? "#ffffff" : "#a855f7"} />
                <text x="320" y="200" textAnchor="middle" fill="#e5e7eb" fontSize="11" fontFamily="monospace">
                  Attention Kernel
                </text>
              </g>

              {/* Node C: Verified Output */}
              <g className="cursor-pointer" onClick={() => setSelectedLayer('execution')}>
                <circle cx="520" cy="150" r="16" fill="#15122e" stroke="#10b981" strokeWidth="2" />
                <circle cx="520" cy="150" r="5" fill="#10b981" />
                <text x="520" y="190" textAnchor="middle" fill="#9ca3af" fontSize="10" fontFamily="monospace">
                  Bound Verdict
                </text>
              </g>
            </svg>

            <div className="absolute top-4 left-6 text-xs font-mono text-gray-400">
              Pipeline: Deterministic Latency Model
            </div>
            <div className="absolute bottom-4 right-6 text-xs font-mono text-emerald-400">
              FP8 Precision Engine
            </div>
          </div>

          {/* Right: Technical Telemetry & Signal Trigger */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#a393d8] uppercase tracking-wider block">
                Verification Parameters
              </span>
              <h3 className="font-headline text-2xl font-medium text-white">
                Runtime Metrics
              </h3>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="text-gray-400">P99 Inference Latency:</span>
                <span className="text-emerald-400 font-semibold">{pulseActive ? '11.4 ms' : '14.2 ms'}</span>
              </div>
              <div className="flex justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="text-gray-400">Context Window Bound:</span>
                <span className="text-white">128,000 Tokens</span>
              </div>
              <div className="flex justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="text-gray-400">Hallucination Delta:</span>
                <span className="text-emerald-400">&lt; 0.02% (Strict Bounds)</span>
              </div>
            </div>

            <button
              onClick={triggerSignal}
              className="w-full py-3.5 rounded-full bg-white text-[#111216] hover:bg-gray-200 text-xs font-mono font-medium transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Zap className="w-3.5 h-3.5" />
              Dispatch Batch Tensor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
