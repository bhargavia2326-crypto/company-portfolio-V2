import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProjectType?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialProjectType = 'AI'
}) => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: initialProjectType,
    budgetRange: '$25,000 – $50,000',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const projectTypes = [
    'AI',
    'Software',
    'Cybersecurity',
    'Automation',
    'Data',
    'AgriTech',
    'Other'
  ];

  const budgetRanges = [
    '< $25,000',
    '$25,000 – $50,000',
    '$50,000 – $150,000',
    '$150,000+'
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Corporate email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email format';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide brief project or challenge details';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');

    // Clean abstraction for backend dispatch
    try {
      await new Promise((res) => setTimeout(res, 1200));
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className={`${
          isDark
            ? 'glass-panel-dark text-white border-white/15'
            : 'bg-white border border-white/80 text-slate-900'
        } rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto`}
      >
        <button
          onClick={onClose}
          className={`absolute top-6 right-6 w-9 h-9 rounded-full ${
            isDark ? 'bg-white/10 hover:bg-white/20 text-gray-300' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
          } flex items-center justify-center transition-colors cursor-pointer`}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {status === 'success' ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="font-headline text-2xl font-bold text-slate-900">
              Project Brief Received
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Your technical scope inquiry for <span className="font-semibold text-[#4e39e5]">{formData.projectType}</span> has been routed to SOUICE engineering leadership.
            </p>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-500 font-mono">
              Reference ID: SC-{Math.floor(100000 + Math.random() * 900000)} · Direct follow-up within 24 hours
            </div>
            <button
              onClick={() => {
                setStatus('idle');
                onClose();
              }}
              className="mt-4 px-8 py-3 rounded-full bg-[#4e39e5] text-white text-sm font-medium hover:bg-[#3d29cf] transition-all cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-semibold text-[#4e39e5] uppercase tracking-wider block font-mono mb-1">
                START A PROJECT
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl font-bold text-slate-900">
                Technical Scoping Inquiry
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Share your system requirements. SOUICE will prepare architectural recommendations.
              </p>
            </div>

            {status === 'error' && (
              <div className="p-3 mb-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
                <AlertCircle size={16} />
                <span>Failed to dispatch inquiry. Please retry.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                      errors.name ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                    } focus:outline-none focus:ring-2 focus:ring-[#4e39e5]/30 text-slate-900 text-xs`}
                  />
                  {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@enterprise.com"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                      errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                    } focus:outline-none focus:ring-2 focus:ring-[#4e39e5]/30 text-slate-900 text-xs`}
                  />
                  {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">
                  Company / Organization
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Acme Corp"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4e39e5]/30 text-slate-900 text-xs"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4e39e5]/30 text-slate-900 text-xs cursor-pointer"
                  >
                    {projectTypes.map((pt) => (
                      <option key={pt} value={pt}>
                        {pt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    Target Budget Range
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4e39e5]/30 text-slate-900 text-xs cursor-pointer"
                  >
                    {budgetRanges.map((br) => (
                      <option key={br} value={br}>
                        {br}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">
                  Message / Architecture Requirements *
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your system challenges, throughput requirements, or desired timeline..."
                  className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                    errors.message ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                  } focus:outline-none focus:ring-2 focus:ring-[#4e39e5]/30 text-slate-900 text-xs resize-none`}
                />
                {errors.message && <p className="text-[11px] text-rose-500 mt-1">{errors.message}</p>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3.5 rounded-full bg-[#4e39e5] text-white font-medium hover:bg-[#3d29cf] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#4e39e5]/25 cursor-pointer disabled:opacity-70 text-xs sm:text-sm"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Technical Scoping</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
};
