import React from 'react';
import { Sprout, Droplets, Compass, ArrowRight } from 'lucide-react';

export const AgriTechSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 xl:px-20 bg-[#f7f6f2] text-[#111216] border-t border-black/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Editorial Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 block">
            Agronomic Engineering &amp; Rural Impact
          </span>
          <h2 className="font-headline text-4xl sm:text-6xl font-semibold tracking-[-0.03em] text-[#111216] leading-[1.08]">
            Technology for the people <br />
            <span className="font-serif italic font-normal text-emerald-900">who feed the world.</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-normal pt-2">
            Most technology companies ignore rural soil. SOUICE bridges generational farming wisdom with long-range IoT telemetry and aerial neural vision — delivering water conservation and crop security directly into farmers' hands.
          </p>
        </div>

        {/* Cinematic Visual Stage with Subtle Telemetry Overlay */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-black/[0.06] bg-stone-900 min-h-[480px] lg:min-h-[560px] flex flex-col justify-between p-8 sm:p-12">
          {/* Authentic agricultural landscape imagery background */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-70 scale-105 transition-transform duration-1000"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80')`,
            }}
            role="img"
            aria-label="Expansive agricultural farmland under morning light"
          />
          {/* Subtle gradient overlay to ensure text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 pointer-events-none" />

          {/* Top Telemetry Chip Bar (Subtle, non-intrusive) */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-white/80">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Telemetry Array #AG-942 · Active Mesh</span>
            </div>
            <div className="text-white/60">
              LoRaWAN 10km Sub-Soil Coverage
            </div>
          </div>

          {/* Bottom Human & Agronomic Metrics Layer */}
          <div className="relative z-10 pt-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-end text-white">
            <div className="md:col-span-7 space-y-3">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block">
                Closed-Loop Resource Management
              </span>
              <h3 className="font-headline text-2xl sm:text-3xl font-medium leading-snug">
                Automated valve regulation based on real-time transpiration, preserving millions of liters of groundwater every season.
              </h3>
            </div>

            {/* Supporting Data Cards */}
            <div className="md:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 space-y-1">
                <span className="text-[11px] font-mono text-white/60 block">Water Conserved</span>
                <div className="font-headline text-3xl font-bold text-emerald-400 font-mono">-34.2%</div>
                <span className="text-[10px] text-white/50 block">Algorithmic closed loop</span>
              </div>
              <div className="p-4 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 space-y-1">
                <span className="text-[11px] font-mono text-white/60 block">Yield Increment</span>
                <div className="font-headline text-3xl font-bold text-white font-mono">+21.8%</div>
                <span className="text-[10px] text-white/50 block">NDVI targeted spray</span>
              </div>
            </div>
          </div>
        </div>

        {/* Three Human Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-black/[0.04] text-[#111216] flex items-center justify-center font-mono text-xs font-bold">
              01
            </div>
            <h4 className="font-headline text-xl font-semibold text-[#111216]">
              Built for Low Bandwidth
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our edge models operate offline on standard mobile hardware, ensuring farmers in remote regions are never stranded by poor connectivity.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-black/[0.04] text-[#111216] flex items-center justify-center font-mono text-xs font-bold">
              02
            </div>
            <h4 className="font-headline text-xl font-semibold text-[#111216]">
              Sub-Soil Precision
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Multi-depth probes measure nitrogen and moisture dynamics at root-level, delivering automated irrigation without human guesswork.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-black/[0.04] text-[#111216] flex items-center justify-center font-mono text-xs font-bold">
              03
            </div>
            <h4 className="font-headline text-xl font-semibold text-[#111216]">
              Fair Price Discovery
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Direct telemetry-backed market linkages eliminate exploitative middlemen and provide verified quality certifications to wholesalers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
