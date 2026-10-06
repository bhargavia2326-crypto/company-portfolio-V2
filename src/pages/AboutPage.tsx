import React from 'react';
import { PageRoute } from '../types';
import { COMPANY_INFO, FOUNDER_DATA } from '../data/content';
import { 
  ArrowRight, 
  ShieldCheck, 
  Code2, 
  Terminal, 
  Cpu, 
  Sprout, 
  CheckCircle2, 
  Award, 
  Compass, 
  Lock 
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenContact }) => {
  return (
    <div className="pt-24 pb-20 bg-[#f9f9f6] min-h-screen text-[#1b1c19]">
      {/* Header */}
      <section className="px-6 lg:px-12 pt-12 pb-16 max-w-7xl mx-auto space-y-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 bg-[#65558f]/10 text-[#65558f] text-xs font-mono font-semibold rounded-full tracking-wider uppercase">
            ABOUT SOUICE
          </span>
          <span className="px-3 py-1 bg-black/5 text-gray-700 text-xs font-mono rounded-full">
            Company & Leadership
          </span>
        </div>

        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1b1c19] tracking-tight leading-[1.1]">
            We build intelligent, secure and scalable technology for <span className="text-[#65558f] italic">real-world problems.</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed pt-2">
            SOUICE was founded on a singular conviction: that modern digital infrastructure must move past speculative hype 
            and deliver deterministic, zero-compromise engineering for AI, enterprise software, cybersecurity, and agriculture.
          </p>
        </div>
      </section>

      {/* Founder Section - Bhargavi only */}
      <section className="px-6 lg:px-12 py-16 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-tr from-[#65558f]/20 via-[#f4f4f1] to-white border border-gray-200 shadow-inner relative flex items-center justify-center p-8">
              {/* Founder Avatar / Monogram */}
              <div className="text-center space-y-4">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#65558f] to-[#4f378b] text-white flex items-center justify-center font-serif text-5xl shadow-xl mx-auto border-4 border-white">
                  B
                </div>
                <div className="space-y-1">
                  <div className="text-xl font-serif font-semibold text-[#1b1c19]">{FOUNDER_DATA.name}</div>
                  <div className="text-xs font-mono text-[#65558f] uppercase tracking-wider">{FOUNDER_DATA.role}</div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-3 border border-gray-200 text-center shadow-sm">
                <span className="text-xs font-mono text-gray-600">SOUICE Technologies — Sole Founder & Owner</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#65558f] font-semibold uppercase tracking-wider">
                EXECUTIVE LEADERSHIP
              </span>
              <h2 className="text-3xl font-serif text-[#1b1c19]">
                Bhargavi
              </h2>
              <p className="text-sm font-mono text-gray-500">
                Founder & Owner, SOUICE Technologies
              </p>
            </div>

            <p className="text-base text-gray-700 leading-relaxed">
              {FOUNDER_DATA.bio}
            </p>

            <blockquote className="p-5 rounded-2xl bg-[#f4f4f1] border-l-4 border-[#65558f] italic text-sm text-gray-800">
              "{FOUNDER_DATA.quote}"
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-mono text-gray-600 bg-white p-3 rounded-xl border border-gray-100">
                <ShieldCheck className="w-4 h-4 text-[#65558f]" />
                Zero-Trust Architectural Philosophy
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-gray-600 bg-white p-3 rounded-xl border border-gray-100">
                <Sprout className="w-4 h-4 text-emerald-600" />
                Agronomic Real-World Impact
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Principles */}
      <section className="px-6 lg:px-12 py-16 max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-[#65558f] font-semibold">
            OUR CORE VALUES
          </span>
          <h2 className="text-3xl font-serif text-[#1b1c19]">
            Architectural Convictions
          </h2>
          <p className="text-sm text-gray-600">
            The standards we uphold across every code commit, neural pipeline, and cloud deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#65558f] flex items-center justify-center font-mono font-bold text-sm">
              01
            </div>
            <h3 className="text-lg font-serif text-[#1b1c19]">Determinism Over Hype</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              We reject AI theatrics and buzzwords. If an algorithm does not measurably increase speed, accuracy, 
              or operating margin, we don't build it.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#65558f] flex items-center justify-center font-mono font-bold text-sm">
              02
            </div>
            <h3 className="text-lg font-serif text-[#1b1c19]">Security as Foundation</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Cybersecurity is never an afterthought or perimeter plugin. We architect every system 
              with zero-trust boundaries, identity verification, and least-privilege telemetry from day zero.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#65558f] flex items-center justify-center font-mono font-bold text-sm">
              03
            </div>
            <h3 className="text-lg font-serif text-[#1b1c19]">Real-World Grounding</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Whether deploying high-frequency streaming software for enterprise clients or sub-soil LoRa sensors 
              for farmers, we test and refine in the real environment.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-12 py-12 max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-serif text-[#1b1c19]">
          Work directly with SOUICE
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
          Discuss your project directly with our founder Bhargavi and get a frank, technical evaluation 
          of your system requirements.
        </p>
        <button
          onClick={onOpenContact}
          className="px-8 py-3.5 bg-[#65558f] hover:bg-[#524479] text-white rounded-xl font-medium shadow-sm transition-colors"
        >
          Schedule a Consultation
        </button>
      </section>
    </div>
  );
};
