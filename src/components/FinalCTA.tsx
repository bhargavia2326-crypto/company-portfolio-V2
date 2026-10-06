import React from 'react';

interface FinalCTAProps {
  onStartProject: () => void;
  onScheduleConsultation: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onStartProject, onScheduleConsultation }) => {
  return (
    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto rounded-3xl bg-[#090A10] p-12 lg:p-20 text-white text-center shadow-2xl relative overflow-hidden border border-white/10">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#4e39e5]/30 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#6857ff]/30 blur-[120px] pointer-events-none" />

        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          <span className="text-xs font-semibold text-[#6857ff] uppercase tracking-wider block font-mono">
            LET'S BUILD TOGETHER
          </span>

          <h2 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
            Have a problem worth solving?
          </h2>

          <p className="text-base sm:text-lg text-[#c8c4d8] max-w-xl mx-auto leading-relaxed">
            Partner with SOUICE to engineer intelligent software, secure your digital architecture, and accelerate your business growth.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={onStartProject}
              className="px-8 py-4 rounded-full bg-[#4e39e5] text-white text-sm sm:text-base font-medium shadow-[0_10px_30px_rgba(78,57,229,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
            >
              Start Your Project
            </button>
            <button
              onClick={onScheduleConsultation}
              className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm sm:text-base font-medium hover:bg-white/20 transition-all cursor-pointer whitespace-nowrap"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
