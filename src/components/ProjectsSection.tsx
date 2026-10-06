import React, { useState } from 'react';
import { PROJECTS_LIST } from '../data/content';
import { ProjectItem } from '../types';
import { ArrowUpRight, ArrowRight, X } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject?: (project: ProjectItem) => void;
  onViewAll?: () => void;
}

const CASE_STUDY_IMAGES: Record<string, string> = {
  'proj-erp': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
  'proj-fincloud': 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80',
  'proj-crop-intel': 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=1400&q=80',
  'proj-supply-agent': 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1400&q=80',
  'proj-api-core': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80'
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject, onViewAll }) => {
  const [selectedModalProject, setSelectedModalProject] = useState<ProjectItem | null>(null);

  // Take top 3 curated flagship case studies for the home page editorial presentation
  const featured = PROJECTS_LIST.slice(0, 3);

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 xl:px-20 bg-[#fafaf7] text-[#111216] border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-black/[0.08]">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-gray-500 block mb-3">
              Selected Deployments
            </span>
            <h2 className="font-headline text-4xl sm:text-6xl font-semibold tracking-[-0.03em] text-[#111216]">
              Work that lives <br />
              <span className="font-serif italic font-normal text-gray-600">in production.</span>
            </h2>
          </div>
          {onViewAll && (
            <button
              onClick={onViewAll}
              className="text-xs font-mono text-gray-900 hover:text-[#5b45d9] flex items-center gap-1.5 transition-colors underline cursor-pointer self-start lg:self-auto"
            >
              <span>View Full Archive (05 Projects)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Alternating Editorial Portfolio Case Studies */}
        <div className="space-y-24">
          {featured.map((project, idx) => {
            const isReversed = idx % 2 === 1;
            const bgImage = CASE_STUDY_IMAGES[project.id] || CASE_STUDY_IMAGES['proj-erp'];

            return (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Imagery Canvas (Occupies 7 cols) */}
                <div
                  onClick={() => setSelectedModalProject(project)}
                  className={`lg:col-span-7 rounded-3xl overflow-hidden shadow-xl bg-stone-900 group cursor-pointer relative aspect-[16/10] ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <img
                    src={bgImage}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Overlaid status badge */}
                  <div className="absolute top-6 left-6 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-mono border border-white/10">
                    {project.status}
                  </div>

                  <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Editorial Details & Metadata (Occupies 5 cols) */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="flex items-center gap-3 text-xs font-mono text-gray-500">
                    <span className="text-[#5b45d9] font-semibold">{project.category}</span>
                    <span>/</span>
                    <span>{project.year}</span>
                    {project.metrics && (
                      <>
                        <span>/</span>
                        <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                          {project.metrics}
                        </span>
                      </>
                    )}
                  </div>

                  <h3
                    onClick={() => setSelectedModalProject(project)}
                    className="font-headline text-3xl sm:text-4xl font-semibold text-[#111216] tracking-tight hover:text-[#5b45d9] transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-base text-gray-600 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  {project.fullDetails && (
                    <div className="pt-2 border-t border-black/[0.06]">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 block mb-2">
                        Tech Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.fullDetails.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono px-2.5 py-1 bg-black/[0.04] text-gray-700 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <button
                      onClick={() => setSelectedModalProject(project)}
                      className="text-xs font-mono font-medium text-[#111216] hover:text-[#5b45d9] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Read Architectural Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#fafaf7] rounded-3xl max-w-2xl w-full p-6 sm:p-10 max-h-[90vh] overflow-y-auto shadow-2xl border border-black/10 space-y-6 text-[#111216]">
            <div className="flex items-center justify-between border-b border-black/[0.08] pb-4">
              <div>
                <span className="text-xs font-mono text-[#5b45d9] uppercase tracking-wider">
                  {selectedModalProject.category} · {selectedModalProject.year}
                </span>
                <h3 className="text-2xl sm:text-3xl font-headline font-semibold mt-1">
                  {selectedModalProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedModalProject(null)}
                className="p-2 text-gray-500 hover:text-black rounded-full hover:bg-black/[0.04] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed">
              {selectedModalProject.description}
            </p>

            {selectedModalProject.fullDetails && (
              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-black/[0.06] space-y-1">
                  <span className="text-[11px] font-mono font-semibold uppercase text-gray-500">
                    The Challenge
                  </span>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {selectedModalProject.fullDetails.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-black/[0.06] space-y-1">
                  <span className="text-[11px] font-mono font-semibold uppercase text-gray-500">
                    Architecture &amp; Methodology
                  </span>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {selectedModalProject.fullDetails.architecture}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-500/20 space-y-1">
                  <span className="text-[11px] font-mono font-semibold uppercase text-emerald-900">
                    Outcome
                  </span>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    {selectedModalProject.fullDetails.outcome}
                  </p>
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-black/[0.08] flex items-center justify-between text-xs font-mono">
              <span className="text-gray-500">Production Verified Standard</span>
              <button
                onClick={() => setSelectedModalProject(null)}
                className="px-5 py-2.5 rounded-full bg-[#111216] text-white hover:bg-gray-800 transition-colors cursor-pointer"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
