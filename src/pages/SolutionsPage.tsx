import React, { useState } from 'react';
import { PageRoute } from '../types';

interface SolutionsPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenContact: () => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onOpenContact }) => {
  const [pulseActive, setPulseActive] = useState(false);

  const handleInjectSignal = () => {
    setPulseActive(true);
    setTimeout(() => setPulseActive(false), 900);
  };

  return (
    <div className="w-full pt-28 pb-20">
      {/* Hero Section */}
      <section className="relative w-full px-6 lg:px-12 pt-8 pb-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6857ff]/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#edebff] text-[#4e39e5] text-xs font-semibold font-mono">
              <span className="material-symbols-outlined text-[16px]">neurology</span>
              Advanced Artificial Intelligence &amp; Neural Systems
            </div>

            <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl text-[#1a1c1b] tracking-tight font-semibold" style={{ textWrap: 'balance' }}>
              Engineering the <span className="text-[#6857ff]">Next Paradigm</span> of Machine Intelligence.
            </h1>

            <p className="text-base sm:text-lg text-[#474556] max-w-2xl leading-relaxed">
              We architect proprietary neural networks, high-throughput LLM pipelines, and autonomous computer vision systems that transform enterprise complexity into computational elegance.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenContact}
                className="px-6 py-3 rounded-full bg-[#4e39e5] text-white font-medium text-xs sm:text-sm hover:bg-[#3d29cf] transition-all shadow-[0_0_20px_rgba(78,57,229,0.3)] cursor-pointer"
              >
                Explore Neural Engine
              </button>
              <a
                href="#capabilities"
                className="px-6 py-3 rounded-full bg-[#eeeeeb] text-[#1a1c1b] font-medium text-xs sm:text-sm hover:bg-[#e8e8e5] transition-all cursor-pointer"
              >
                View Capabilities
              </a>
            </div>
          </div>

          {/* Interactive Mini AI Visualizer Card from Stitch */}
          <div className="lg:col-span-5">
            <div className="w-full bg-[#090A10] rounded-2xl p-6 text-white shadow-2xl relative overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#6857ff]/20 via-transparent to-transparent opacity-50 pointer-events-none" />
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-headline text-xs font-mono tracking-wider text-slate-200">
                      SOUICE-CORE v4.8
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">LATENCY: 12ms</span>
                </div>

                <div className="h-60 relative flex items-center justify-center">
                  <svg className="w-full h-full text-[#6857ff]/60" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M50 100 L120 50 L200 120 L250 80"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      className="animate-pulse"
                    />
                    <path d="M50 100 L110 150 L190 100 L250 140" stroke="#c5c0ff" strokeWidth="1.5" />
                    <circle cx="50" cy="100" r={pulseActive ? "9" : "6"} fill="#6857FF" className="transition-all" />
                    <circle cx="120" cy="50" r="5" fill="#e3dfff" />
                    <circle cx="110" cy="150" r="5" fill="#e3dfff" />
                    <circle cx="200" cy="120" r="7" fill="#6857FF" />
                    <circle cx="190" cy="100" r="4" fill="#e3dfff" />
                    <circle cx="250" cy="80" r="6" fill="#ffb68c" />
                    <circle cx="250" cy="140" r="5" fill="#e3dfff" />
                  </svg>

                  <div className="absolute bottom-2 left-2 right-2 bg-white/5 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center justify-between">
                    <span className="text-xs text-slate-300 font-mono">Inference Accuracy</span>
                    <span className="text-xs text-emerald-400 font-mono font-bold">99.84%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="w-full bg-[#f4f4f1] py-12 px-6 lg:px-12 my-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-1">
            <span className="font-headline text-3xl lg:text-4xl font-bold text-[#4e39e5] font-mono">10B+</span>
            <span className="text-xs text-[#474556]">Daily Token Inferences</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-headline text-3xl lg:text-4xl font-bold text-[#4e39e5] font-mono">&lt; 15ms</span>
            <span className="text-xs text-[#474556]">Average Neural Response</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-headline text-3xl lg:text-4xl font-bold text-[#4e39e5] font-mono">99.9%</span>
            <span className="text-xs text-[#474556]">Model Stability SLA</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-headline text-3xl lg:text-4xl font-bold text-[#4e39e5] font-mono">45+</span>
            <span className="text-xs text-[#474556]">Proprietary Architecture Patents</span>
          </div>
        </div>
      </section>

      {/* Core AI Capabilities Grid */}
      <section className="w-full py-20 px-6 lg:px-12 max-w-7xl mx-auto" id="capabilities">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 gap-3">
          <span className="text-xs font-semibold text-[#4e39e5] uppercase tracking-wider font-mono">CAPABILITIES</span>
          <h2 className="font-headline text-3xl lg:text-4xl font-semibold text-[#1a1c1b]">
            Architectures Built for Scale
          </h2>
          <p className="text-sm text-[#474556]">
            From multi-modal foundation models to deterministic edge vision systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/80 shadow-sm flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#edebff] text-[#4e39e5] flex items-center justify-center">
                <span className="material-symbols-outlined">smart_toy</span>
              </div>
              <h3 className="font-headline text-xl font-semibold text-[#1a1c1b]">Large Language Models &amp; GenAI</h3>
              <p className="text-xs sm:text-sm text-[#474556] leading-relaxed">
                Custom fine-tuned transformers, retrieval-augmented generation (RAG) ecosystems, and agentic workflows tailored to proprietary enterprise domains.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#c8c4d8]/20 text-xs font-mono text-[#4e39e5] font-semibold">
              Zero Data Leakage RAG
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/80 shadow-sm flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#edebff] text-[#4e39e5] flex items-center justify-center">
                <span className="material-symbols-outlined">visibility</span>
              </div>
              <h3 className="font-headline text-xl font-semibold text-[#1a1c1b]">Computer Vision &amp; Perception</h3>
              <p className="text-xs sm:text-sm text-[#474556] leading-relaxed">
                Real-time object detection, spatial mapping, anomaly segmentation, and video intelligence for automated physical environments and industrial monitoring.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#c8c4d8]/20 text-xs font-mono text-[#4e39e5] font-semibold">
              Sub-frame Inference Rate
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/80 shadow-sm flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#edebff] text-[#4e39e5] flex items-center justify-center">
                <span className="material-symbols-outlined">description</span>
              </div>
              <h3 className="font-headline text-xl font-semibold text-[#1a1c1b]">Document Intelligence &amp; NLP</h3>
              <p className="text-xs sm:text-sm text-[#474556] leading-relaxed">
                Zero-shot OCR, semantic extraction, automated compliance auditing, and multi-lingual sentiment synthesis across unstructured enterprise archives.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#c8c4d8]/20 text-xs font-mono text-[#4e39e5] font-semibold">
              99.4% Parsing Precision
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Topology Simulator */}
      <section className="w-full bg-[#090A10] py-20 px-6 lg:px-12 text-white my-12">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-mono text-[#6857ff] uppercase tracking-wider block mb-2">INTERACTIVE SANDBOX</span>
              <h2 className="font-headline text-3xl font-semibold text-white">Neural Topology Simulator</h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-lg">
                Test how weights and activation layers dynamically adapt across our proprietary network topologies.
              </p>
            </div>
            <button
              onClick={handleInjectSignal}
              className="px-6 py-3 rounded-full bg-[#6857ff] text-white text-xs font-medium hover:bg-[#5744f7] transition-all shadow-lg shadow-[#6857ff]/30 cursor-pointer"
            >
              Inject Test Signal
            </button>
          </div>

          <div className="bg-white/5 rounded-3xl border border-white/10 p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 h-72 bg-black/50 rounded-2xl border border-white/5 flex items-center justify-center p-4">
              <svg className="w-full h-full" viewBox="0 0 500 240" fill="none">
                <path d="M80 120 L200 60 L350 120 L440 80" stroke="#6857FF" strokeWidth={pulseActive ? "3" : "1.5"} />
                <path d="M80 120 L200 180 L350 120 L440 160" stroke="#6857FF" strokeWidth={pulseActive ? "3" : "1.5"} />
                <circle cx="80" cy="120" r="14" fill="#140067" stroke="#6857FF" strokeWidth="2" />
                <circle cx="80" cy="120" r={pulseActive ? "8" : "5"} fill="#6857FF" />
                <circle cx="200" cy="60" r="14" fill="#140067" stroke="#c5c0ff" strokeWidth="2" />
                <circle cx="200" cy="180" r="14" fill="#140067" stroke="#c5c0ff" strokeWidth="2" />
                <circle cx="350" cy="120" r="18" fill="#140067" stroke="#ffb68c" strokeWidth="2" />
                <circle cx="440" cy="80" r="12" fill="#140067" stroke="#4ade80" strokeWidth="2" />
                <circle cx="440" cy="160" r="12" fill="#140067" stroke="#4ade80" strokeWidth="2" />
              </svg>
            </div>
            <div className="lg:col-span-4 space-y-4 font-mono text-xs">
              <span className="text-[#6857ff] block">TELEMETRY STREAM</span>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex justify-between">
                <span>WEIGHT_DECAY:</span>
                <span className="text-emerald-400">0.0001 (Optimal)</span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex justify-between">
                <span>GRADIENT_NORM:</span>
                <span className="text-[#c5c0ff]">{pulseActive ? '0.781' : '1.042'}</span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex justify-between">
                <span>THROUGHPUT:</span>
                <span className="text-white">{pulseActive ? '7,150 tok/s' : '4,250 tok/s'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Predictive Analytics & Sparkline Curve from Stitch */}
      <section className="w-full py-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-semibold text-[#4e39e5] uppercase tracking-wider font-mono">
              PREDICTIVE ANALYTICS
            </span>
            <h2 className="font-headline text-3xl lg:text-4xl font-semibold text-[#1a1c1b]">
              Forecasting Complex Dynamics with High-Precision Models
            </h2>
            <p className="text-sm text-[#474556] leading-relaxed">
              Our forecasting engines integrate time-series econometric modeling with deep reinforcement learning, helping global enterprises predict market shifts, supply chain friction, and infrastructure bottlenecks hours before they manifest.
            </p>
            <ul className="space-y-2.5 text-xs text-[#1a1c1b]">
              <li className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#4e39e5] text-[18px]">check_circle</span>
                <span>Uncertainty quantification via Monte Carlo ensemble drops</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#4e39e5] text-[18px]">check_circle</span>
                <span>Automated feature engineering pipeline with zero data leakage</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#4e39e5] text-[18px]">check_circle</span>
                <span>Explainable AI (XAI) overlays for regulatory auditability</span>
              </li>
            </ul>
          </div>

          <div className="w-full h-80 rounded-3xl bg-[#eeeeeb] p-6 shadow-xl flex flex-col justify-between border border-white/80">
            <div className="flex items-center justify-between">
              <span className="font-headline text-sm font-semibold text-[#1a1c1b]">Predictive Yield &amp; Demand Curve</span>
              <span className="text-xs font-mono bg-[#4e39e5]/10 text-[#4e39e5] px-2.5 py-1 rounded-full font-semibold">
                Confidence: 96.2%
              </span>
            </div>

            <div className="w-full h-40 flex items-end gap-2 px-2">
              {[30, 45, 40, 65, 55, 80, 75, 90, 95, 85, 92, 100].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className={`flex-1 rounded-t-lg transition-all duration-300 hover:opacity-90 ${
                    i >= 8 ? 'bg-[#6857ff] shadow-md shadow-[#6857ff]/30' : 'bg-[#4e39e5]/60'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center justify-between text-xs text-[#474556] font-mono border-t border-slate-300/40 pt-2">
              <span>T-0 (Current Baseline)</span>
              <span>T+30 Days Forecast</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full px-6 lg:px-12 py-12">
        <div className="max-w-4xl mx-auto bg-[#090A10] rounded-3xl p-10 text-white text-center space-y-6 border border-white/10">
          <span className="text-xs font-mono text-[#6857ff] uppercase">INITIATE TRANSFORMATION</span>
          <h2 className="font-headline text-2xl sm:text-3xl font-semibold text-white">
            Ready to Deploy Enterprise-Grade Intelligence?
          </h2>
          <p className="text-xs sm:text-sm text-[#c8c4d8] max-w-xl mx-auto leading-relaxed">
            Partner with our elite research scientists and ML engineers to custom-build your next-gen cognitive infrastructure.
          </p>
          <div>
            <button
              onClick={onOpenContact}
              className="px-8 py-3.5 rounded-full bg-[#6857ff] text-white text-xs sm:text-sm font-medium hover:bg-[#5744f7] transition-all shadow-lg shadow-[#6857ff]/30 cursor-pointer"
            >
              Schedule AI Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
