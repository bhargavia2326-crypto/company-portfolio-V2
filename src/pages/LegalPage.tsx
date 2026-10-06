import React, { useState } from 'react';
import { PageRoute } from '../types';
import { COMPANY_INFO } from '../data/content';
import { Shield, FileText, ArrowLeft } from 'lucide-react';

interface LegalPageProps {
  initialTab?: 'privacy' | 'terms';
  onNavigate: (route: PageRoute) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ initialTab = 'privacy', onNavigate }) => {
  const [tab, setTab] = useState<'privacy' | 'terms'>(initialTab);

  return (
    <div className="pt-24 pb-20 bg-[#f9f9f6] min-h-screen text-[#1b1c19]">
      <section className="px-6 lg:px-12 pt-12 pb-16 max-w-4xl mx-auto space-y-8">
        <button
          onClick={() => onNavigate('home')}
          className="text-xs font-mono text-gray-500 hover:text-gray-900 flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
          <button
            onClick={() => setTab('privacy')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-colors flex items-center gap-2 ${
              tab === 'privacy'
                ? 'bg-[#1b1c19] text-white'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <Shield className="w-4 h-4" />
            Privacy Policy
          </button>
          <button
            onClick={() => setTab('terms')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-colors flex items-center gap-2 ${
              tab === 'terms'
                ? 'bg-[#1b1c19] text-white'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <FileText className="w-4 h-4" />
            Terms of Service
          </button>
        </div>

        {tab === 'privacy' ? (
          <article className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-200/80 shadow-sm space-y-6 text-sm text-gray-700 leading-relaxed">
            <h1 className="text-3xl font-serif text-[#1b1c19]">Privacy Policy</h1>
            <p className="text-xs font-mono text-gray-400">Last updated: October 2025</p>

            <section className="space-y-3">
              <h2 className="text-lg font-serif text-[#1b1c19]">1. Introduction</h2>
              <p>
                SOUICE Technologies ("SOUICE", "we", "our", or "us"), founded by Bhargavi, is committed to safeguarding the privacy and confidentiality of individuals and client organizations that interact with our digital infrastructure, software products, and consulting services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-serif text-[#1b1c19]">2. Information We Collect</h2>
              <p>
                We collect information directly provided by you through our project inquiry forms, technical questionnaires, or direct email correspondence. This typically includes your name, corporate email address, organization name, and technical project scope details.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-serif text-[#1b1c19]">3. Zero Unnecessary Telemetry</h2>
              <p>
                SOUICE adheres to a strict data minimization architecture. We do not sell, rent, or lease client information to third-party ad networks or brokers. Data shared with us is used exclusively to evaluate, build, deploy, and maintain contracted systems.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-serif text-[#1b1c19]">4. Contact & Inquiries</h2>
              <p>
                For questions regarding this policy or data inquiries, contact Bhargavi, Founder & Owner at: <br />
                <span className="font-mono text-[#65558f] font-semibold">founder@souice.tech</span>
              </p>
            </section>
          </article>
        ) : (
          <article className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-200/80 shadow-sm space-y-6 text-sm text-gray-700 leading-relaxed">
            <h1 className="text-3xl font-serif text-[#1b1c19]">Terms of Service</h1>
            <p className="text-xs font-mono text-gray-400">Last updated: October 2025</p>

            <section className="space-y-3">
              <h2 className="text-lg font-serif text-[#1b1c19]">1. Agreement to Terms</h2>
              <p>
                By accessing or using the services, website, or software provided by SOUICE Technologies, you agree to be bound by these Terms of Service.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-serif text-[#1b1c19]">2. Intellectual Property</h2>
              <p>
                All proprietary software frameworks, neural pipelines, visual designs, and brand marks created by SOUICE remain the exclusive property of SOUICE Technologies and its founder Bhargavi, unless explicitly assigned to clients under a signed Master Services Agreement.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-serif text-[#1b1c19]">3. Professional Warranties</h2>
              <p>
                All development, cybersecurity evaluations, and agronomic systems are provided with industry-standard care and engineering diligence. System SLAs and support metrics are governed by individual client contracts.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-serif text-[#1b1c19]">4. Jurisdiction</h2>
              <p>
                These terms are governed by applicable laws in accordance with SOUICE corporate registrations.
              </p>
            </section>
          </article>
        )}
      </section>
    </div>
  );
};
