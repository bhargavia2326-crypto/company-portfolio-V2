import React, { useState } from 'react';
import { PageRoute } from '../types';
import { COMPANY_INFO, FOUNDER_DATA } from '../data/content';
import { 
  Send, 
  CheckCircle2, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Loader2
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Artificial Intelligence & Machine Learning',
    budget: '$25,000 – $50,000',
    timeline: '1-3 months',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 900);
  };

  return (
    <div className="pt-24 pb-20 bg-[#f9f9f6] min-h-screen text-[#1b1c19]">
      <section className="px-6 lg:px-12 pt-12 pb-16 max-w-7xl mx-auto space-y-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 bg-[#65558f]/10 text-[#65558f] text-xs font-mono font-semibold rounded-full tracking-wider uppercase">
            ENGAGEMENT & CONSULTATION
          </span>
          <span className="px-3 py-1 bg-black/5 text-gray-700 text-xs font-mono rounded-full">
            Direct Founder Channel
          </span>
        </div>

        <div className="max-w-3xl space-y-3">
          <h1 className="text-4xl sm:text-5xl font-serif text-[#1b1c19] tracking-tight">
            Start a project with SOUICE
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Directly connect with Bhargavi, Founder & Owner, and our engineering team to evaluate your system architecture, 
            AI deployment, or custom enterprise requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6">
          {/* Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-gray-200/80 shadow-sm">
            {status === 'success' ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-[#1b1c19]">Inquiry Received</h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your project specifications have been routed to Bhargavi. 
                  We will evaluate your architecture needs and reply within 24 business hours.
                </p>
                <button
                  onClick={() => {
                    setStatus('idle');
                    setFormData({
                      name: '',
                      email: '',
                      company: '',
                      projectType: 'Artificial Intelligence & Machine Learning',
                      budget: '$25,000 – $50,000',
                      timeline: '1-3 months',
                      message: '',
                    });
                  }}
                  className="px-6 py-2.5 bg-[#65558f] text-white rounded-xl text-xs font-medium hover:bg-[#524479] transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Elena Rostova"
                      className="w-full px-4 py-3 bg-[#f9f9f6] border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#65558f] focus:border-[#65558f]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-gray-700">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. elena@enterprise.com"
                      className="w-full px-4 py-3 bg-[#f9f9f6] border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#65558f] focus:border-[#65558f]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-gray-700">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Meridian Global"
                      className="w-full px-4 py-3 bg-[#f9f9f6] border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#65558f] focus:border-[#65558f]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-gray-700">
                      Focus Area *
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#f9f9f6] border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#65558f] focus:border-[#65558f]"
                    >
                      <option>Artificial Intelligence & Machine Learning</option>
                      <option>Custom Software Engineering</option>
                      <option>Zero-Trust Cybersecurity & Audit</option>
                      <option>AgriTech & Rural IoT Telemetry</option>
                      <option>Product Studio Venture Co-Development</option>
                      <option>Data Infrastructure & Analytics</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-gray-700">
                      Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 bg-[#f9f9f6] border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#65558f] focus:border-[#65558f]"
                    >
                      <option>&lt; $25,000</option>
                      <option>$25,000 – $50,000</option>
                      <option>$50,000 – $100,000</option>
                      <option>$100,000+</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-gray-700">
                      Target Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 bg-[#f9f9f6] border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#65558f] focus:border-[#65558f]"
                    >
                      <option>Immediate / ASAP</option>
                      <option>1-3 months</option>
                      <option>3-6 months</option>
                      <option>Discovery & Planning Phase</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-gray-700">
                    Project Brief & Technical Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your current bottleneck, desired architecture, user scale, and key deliverable goals..."
                    className="w-full px-4 py-3 bg-[#f9f9f6] border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#65558f] focus:border-[#65558f]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 bg-[#65558f] hover:bg-[#524479] text-white rounded-xl font-medium transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Transmitting Blueprint...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry to Founder</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-7 rounded-3xl border border-gray-200/80 shadow-sm space-y-4">
              <h3 className="text-xl font-serif text-[#1b1c19]">Direct Channels</h3>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#65558f] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono text-gray-500">General Inquiries</div>
                    <div className="text-sm font-medium text-[#1b1c19]">{COMPANY_INFO.contactEmail}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#65558f] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono text-gray-500">Founder Office</div>
                    <div className="text-sm font-medium text-[#1b1c19]">founder@souice.tech</div>
                    <div className="text-xs text-gray-500">Bhargavi, Founder & Owner</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#65558f] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono text-gray-500">Headquarters</div>
                    <div className="text-sm font-medium text-[#1b1c19]">{COMPANY_INFO.location}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#65558f] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono text-gray-500">Response SLA</div>
                    <div className="text-sm font-medium text-[#1b1c19]">Within 24 business hours</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-[#65558f]/10 border border-[#65558f]/20 space-y-3">
              <h4 className="text-base font-serif text-[#1b1c19]">NDA & Confidentiality</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                All inquiries and project specifications shared with SOUICE are automatically protected under mutual non-disclosure standards. We do not share code, architectures, or proprietary ideas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
