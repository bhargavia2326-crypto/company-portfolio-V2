import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/content';
import { PageRoute } from '../types';
import { ArrowRight } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenContact: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenContact }) => {
  const [filter, setFilter] = useState<'all' | 'ai' | 'software' | 'security' | 'agritech'>('all');

  const filteredServices = filter === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(s => s.category === filter);

  return (
    <div className="w-full pt-28 pb-20">
      {/* Hero Section */}
      <section className="relative w-full px-6 lg:px-12 pt-8 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e3dfff]/20 via-transparent to-[#edebff]/40 pointer-events-none" />
        <div className="max-w-7xl mx-auto flex flex-col items-start relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#edebff] text-[#4e39e5] text-xs font-semibold font-mono">
            <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
            CORE CAPABILITIES &amp; SOLUTIONS
          </div>
          <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl text-[#1a1c1b] max-w-4xl tracking-tight font-semibold" style={{ textWrap: 'balance' }}>
            Architecting the next paradigm of intelligent digital systems.
          </h1>
          <p className="text-base sm:text-lg text-[#474556] max-w-2xl leading-relaxed">
            We fuse pristine software engineering, frontier artificial intelligence, and deep domain expertise to build resilient, high-impact technologies for the world's most ambitious enterprises.
          </p>
        </div>
      </section>

      {/* Interactive Filter Bar from Stitch */}
      <section className="w-full px-6 lg:px-12 mb-12">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-3">
          {[
            { id: 'all', label: 'All Services' },
            { id: 'ai', label: 'AI & Machine Learning' },
            { id: 'software', label: 'Software Engineering' },
            { id: 'security', label: 'Cybersecurity' },
            { id: 'agritech', label: 'AgriTech & Analytics' }
          ].map((tab) => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#4e39e5] text-white shadow-md shadow-[#4e39e5]/25'
                    : 'bg-[#eeeeeb] hover:bg-[#e8e8e5] text-[#1a1c1b]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Bento Grid Services */}
      <section className="w-full px-6 lg:px-12 mb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white/80 backdrop-blur-xl border border-white/80 rounded-3xl p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#edebff] text-[#4e39e5]">
                    <span className="material-symbols-outlined text-[24px]">
                      {service.iconName}
                    </span>
                  </span>
                  <span className="text-[11px] font-mono text-[#474556] uppercase tracking-wider">
                    {service.number}
                  </span>
                </div>

                <h3 className="font-headline text-2xl font-semibold text-[#1a1c1b] group-hover:text-[#4e39e5] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#474556] leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#c8c4d8]/20 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-full bg-[#f4f4f1] text-[11px] font-mono text-[#474556]">
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    if (service.category === 'security') onNavigate('cybersecurity');
                    else if (service.category === 'agritech') onNavigate('agritech');
                    else if (service.category === 'software') onNavigate('software');
                    else onNavigate('solutions');
                  }}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#4e39e5] group-hover:gap-2 transition-all cursor-pointer"
                >
                  <span>Explore</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Metrics / Proof Section */}
      <section className="w-full px-6 lg:px-12 py-16 bg-[#f4f4f1] rounded-3xl max-w-7xl mx-auto my-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <div className="font-headline text-4xl font-bold text-[#4e39e5] mb-1 font-mono">99.9%</div>
            <div className="text-xs text-[#474556]">System Uptime SLA</div>
          </div>
          <div className="p-4">
            <div className="font-headline text-4xl font-bold text-[#4e39e5] mb-1 font-mono">250+</div>
            <div className="text-xs text-[#474556]">Enterprise Deployments</div>
          </div>
          <div className="p-4">
            <div className="font-headline text-4xl font-bold text-[#4e39e5] mb-1 font-mono">4.8x</div>
            <div className="text-xs text-[#474556]">Average ROI Multiplier</div>
          </div>
          <div className="p-4">
            <div className="font-headline text-4xl font-bold text-[#4e39e5] mb-1 font-mono">24/7</div>
            <div className="text-xs text-[#474556]">Autonomous Monitoring</div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="w-full px-6 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto bg-[#090A10] rounded-3xl p-10 lg:p-16 text-white text-center relative overflow-hidden flex flex-col items-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#4e39e5]/20 via-transparent to-transparent pointer-events-none" />
          <span className="material-symbols-outlined text-[44px] text-[#c5c0ff] mb-4">
            terminal
          </span>
          <h2 className="font-headline text-2xl sm:text-4xl font-semibold text-white max-w-2xl mb-4">
            Ready to engineer your next technological breakthrough?
          </h2>
          <p className="text-sm text-[#c8c4d8] max-w-xl mb-8 leading-relaxed">
            Partner with our elite engineers, data scientists, and security specialists to build custom solutions tailored precisely to your roadmap.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenContact}
              className="px-8 py-3.5 rounded-full bg-[#4e39e5] text-white text-xs sm:text-sm font-medium hover:bg-[#3d29cf] transition-all shadow-lg shadow-[#4e39e5]/30 cursor-pointer"
            >
              Schedule Technical Scoping
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className="px-8 py-3.5 rounded-full bg-white/10 text-white text-xs sm:text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer"
            >
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
