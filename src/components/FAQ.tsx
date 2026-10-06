import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_LIST } from '../data/content';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section className="py-24 px-6 lg:px-12 bg-[#f9f9f6]">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold text-[#4e39e5] uppercase tracking-wider block font-mono">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-headline text-3xl lg:text-4xl font-semibold tracking-tight text-[#1a1c1b]">
            Architectural Inquiries &amp; Engagement
          </h2>
          <p className="text-sm text-[#474556]">
            Transparent details regarding our systems, leadership, and operational methodologies.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white/70 backdrop-blur-xl border border-white/80 dark:glass-panel-dark dark:border-white/10 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-headline text-base sm:text-lg font-medium text-[#1a1c1b] dark:text-white">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="p-1 rounded-full bg-[#edebff] text-[#4e39e5] dark:bg-white/10 dark:text-[#a393d8] shrink-0"
                  >
                    <ChevronDown size={18} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#474556] dark:text-gray-300 leading-relaxed border-t border-[#c8c4d8]/20 dark:border-white/10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
