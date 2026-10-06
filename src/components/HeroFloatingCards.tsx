import React from 'react';
import { 
  Cpu, 
  Lock, 
  Activity, 
  Sprout, 
  Zap 
} from 'lucide-react';

export const HeroFloatingCards: React.FC = () => {
  return (
    <>
      {/* 1. BACKGROUND LAYER (z-10): SECURITY CARD */}
      <div className="absolute -top-1 sm:top-2 right-1 sm:right-4 xl:right-10 z-10 w-48 sm:w-56 p-3.5 sm:p-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_12px_32px_rgba(78,57,229,0.06)] animate-float-reverse pointer-events-auto select-none">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] font-mono font-semibold tracking-wider text-[#4e39e5] uppercase flex items-center gap-1.5">
            <Lock className="w-3 h-3 text-[#4e39e5]" />
            SECURITY
          </span>
          <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-emerald-100 text-emerald-700 font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Protected
          </span>
        </div>
        <div className="text-xs sm:text-[13px] font-semibold text-[#1a1c1b]">Zero-Trust Perimeter</div>
        <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 mt-1.5 pt-1.5 border-t border-gray-100">
          <span>AES-256-GCM</span>
          <span className="text-emerald-600 font-medium">mTLS v1.3 Verified</span>
        </div>
      </div>

      {/* 2. MIDGROUND LAYER (z-20): AI CORE CARD */}
      <div className="absolute top-6 sm:top-10 -left-2 sm:left-2 xl:left-6 z-20 w-48 sm:w-56 p-3.5 sm:p-4 rounded-2xl bg-white/80 backdrop-blur-2xl border border-white/90 shadow-[0_16px_36px_rgba(0,0,0,0.06)] animate-float-slow pointer-events-auto select-none">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] font-mono font-semibold tracking-wider text-[#4e39e5] uppercase flex items-center gap-1.5">
            <Cpu className="w-3 h-3 text-[#4e39e5]" />
            AI CORE
          </span>
          <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-purple-100 text-purple-700 font-semibold">
            98.7% Conf
          </span>
        </div>
        <div className="text-xs sm:text-[13px] font-semibold text-[#1a1c1b]">Transformer Inference</div>
        <div className="space-y-1.5 mt-2">
          <div className="flex items-center justify-between text-[10px] font-mono text-gray-500">
            <span>Latency</span>
            <span className="text-[#4e39e5] font-semibold">14.2 ms · FP8</span>
          </div>
          <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#4e39e5] to-[#8b5cf6] w-[86%] rounded-full" />
          </div>
        </div>
      </div>

      {/* 3. MIDGROUND LAYER (z-20): DATA STREAM CARD */}
      <div className="absolute top-1/2 -right-2 sm:right-0 xl:right-4 -translate-y-1/2 z-20 w-44 sm:w-52 p-3.5 sm:p-4 rounded-2xl bg-white/80 backdrop-blur-2xl border border-white/90 shadow-[0_16px_36px_rgba(0,0,0,0.06)] animate-float-slow [animation-delay:1.5s] pointer-events-auto select-none">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] font-mono font-semibold tracking-wider text-[#4e39e5] uppercase flex items-center gap-1.5">
            <Activity className="w-3 h-3 text-[#4e39e5]" />
            DATA STREAM
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        </div>
        <div className="text-xs sm:text-[13px] font-semibold text-[#1a1c1b]">Live Event Ingestion</div>
        <div className="flex items-end justify-between gap-1 h-5 my-2">
          {[35, 55, 45, 80, 65, 90, 75, 95].map((val, idx) => (
            <div
              key={idx}
              className="w-full bg-[#4e39e5]/30 hover:bg-[#4e39e5] rounded-t-sm transition-colors"
              style={{ height: `${val}%` }}
            />
          ))}
        </div>
        <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 pt-1 border-t border-gray-100">
          <span>1.2M+ ops/s</span>
          <span className="text-[#4e39e5] font-semibold">Zero Loss</span>
        </div>
      </div>

      {/* 4. FOREGROUND LAYER (z-30): AGRITECH CARD */}
      <div className="absolute -bottom-2 sm:bottom-4 -left-2 sm:left-2 xl:left-8 z-30 w-52 sm:w-60 p-3.5 sm:p-4 rounded-2xl bg-white/85 backdrop-blur-2xl border border-white/95 shadow-[0_20px_45px_rgba(0,0,0,0.07)] animate-float-reverse [animation-delay:2s] pointer-events-auto select-none">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] font-mono font-semibold tracking-wider text-emerald-700 uppercase flex items-center gap-1.5">
            <Sprout className="w-3 h-3 text-emerald-600" />
            AGRITECH
          </span>
          <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-emerald-100 text-emerald-700 font-semibold">
            LoRa AG-942
          </span>
        </div>
        <div className="text-xs sm:text-[13px] font-semibold text-[#1a1c1b]">Crop &amp; Soil Intelligence</div>
        <div className="grid grid-cols-2 gap-2 mt-2 pt-1.5 border-t border-gray-100 text-[10px] font-mono">
          <div className="bg-[#f9f9f6] p-1.5 rounded-lg border border-gray-100">
            <span className="text-gray-400 block text-[9px]">NDVI INDEX</span>
            <span className="font-semibold text-emerald-600">0.84 Peak</span>
          </div>
          <div className="bg-[#f9f9f6] p-1.5 rounded-lg border border-gray-100">
            <span className="text-gray-400 block text-[9px]">HYDRATION</span>
            <span className="font-semibold text-blue-600">68% Loop</span>
          </div>
        </div>
      </div>

      {/* 5. FOREGROUND LAYER (z-30): SYSTEM STATUS CARD */}
      <div className="absolute -bottom-6 sm:bottom-0 right-1 sm:right-6 xl:right-14 z-30 w-56 sm:w-64 rounded-2xl bg-white/90 backdrop-blur-2xl border border-white/95 shadow-[0_24px_50px_rgba(0,0,0,0.08)] p-3.5 sm:p-4 animate-float-slow [animation-delay:1s] pointer-events-auto select-none">
        <div className="flex items-center justify-between pb-1.5 border-b border-gray-100">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[10px] font-mono font-bold tracking-wider text-[#1a1c1b]">SYSTEM STATUS</span>
          </div>
          <span className="text-[9px] font-mono text-emerald-600 font-semibold">99.999% SLA</span>
        </div>
        <div className="text-xs sm:text-[13px] font-semibold text-[#1a1c1b] mt-1.5">Automation Orchestration</div>
        <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 mt-2 pt-1.5 border-t border-gray-100">
          <span className="flex items-center gap-1">
            <Zap className="w-3 h-3 text-[#4e39e5]" />
            24 Active Loops
          </span>
          <span className="text-[#4e39e5] font-semibold">Multi-Cluster Sync</span>
        </div>
      </div>
    </>
  );
};
