import React, { useState } from 'react';
import { PageRoute, ProjectItem } from '../types';
import { PROJECTS_LIST } from '../data/content';
import { 
  ArrowRight, 
  Search, 
  Filter, 
  ExternalLink, 
  CheckCircle2, 
  X, 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  ChevronRight 
} from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenContact: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate, onOpenContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'AI', 'Software', 'Cybersecurity', 'Automation', 'AgriTech'];

  const filteredProjects = PROJECTS_LIST.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-20 bg-[#f9f9f6] min-h-screen text-[#1b1c19]">
      {/* Header */}
      <section className="px-6 lg:px-12 pt-12 pb-12 max-w-7xl mx-auto space-y-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 bg-[#65558f]/10 text-[#65558f] text-xs font-mono font-semibold rounded-full tracking-wider uppercase">
            PORTFOLIO & CASE STUDIES
          </span>
          <span className="px-3 py-1 bg-black/5 text-gray-700 text-xs font-mono rounded-full">
            Production Implementations
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-gray-200/80 pb-8">
          <div>
            <h1 className="text-4xl sm:text-5xl font-serif text-[#1b1c19] tracking-tight">
              Selected Work & Deployments
            </h1>
            <p className="text-gray-600 mt-2 max-w-2xl text-base sm:text-lg">
              Explore how SOUICE architects proprietary AI systems, zero-trust cybersecurity frameworks, 
              and agronomic telemetry across real-world enterprise deployments.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="px-6 py-3 bg-[#65558f] hover:bg-[#524479] text-white rounded-xl font-medium transition-colors shadow-sm self-start lg:self-auto shrink-0 flex items-center gap-2"
          >
            Start a Project
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#1b1c19] text-white shadow-sm'
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter by keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-xs font-mono placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#65558f] focus:border-[#65558f]"
            />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto pb-16">
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-2xl border border-gray-200">
            <p className="text-gray-500 font-mono text-sm">No projects matching your search criteria.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-3 text-xs font-mono text-[#65558f] underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setActiveProject(project)}
                className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#65558f]/50 hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-black/5 text-gray-700 text-xs font-mono rounded">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-gray-400">{project.year}</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif text-[#1b1c19] group-hover:text-[#65558f] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-gray-500 mt-1">{project.status}</p>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-6">
                  <span className="text-xs font-mono text-emerald-700 font-medium">
                    {project.metrics || 'Production Ready'}
                  </span>
                  <span className="text-xs font-medium text-[#65558f] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Details
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Case Study Modal Detail */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 space-y-6">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div>
                <span className="px-2.5 py-1 bg-[#65558f]/10 text-[#65558f] text-xs font-mono rounded">
                  {activeProject.category}
                </span>
                <h2 className="text-2xl font-serif text-[#1b1c19] mt-2">{activeProject.title}</h2>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-1">Overview</h4>
                <p className="text-sm text-gray-700 leading-relaxed">{activeProject.description}</p>
              </div>

              {activeProject.fullDetails && (
                <div className="space-y-4 pt-2">
                  <div className="bg-[#f9f9f6] p-4 rounded-xl border border-gray-100 space-y-1">
                    <h5 className="text-xs font-mono font-semibold text-gray-800 uppercase">The Challenge</h5>
                    <p className="text-xs text-gray-600 leading-relaxed">{activeProject.fullDetails.challenge}</p>
                  </div>

                  <div className="bg-[#f9f9f6] p-4 rounded-xl border border-gray-100 space-y-1">
                    <h5 className="text-xs font-mono font-semibold text-gray-800 uppercase">Architecture & Methodology</h5>
                    <p className="text-xs text-gray-600 leading-relaxed">{activeProject.fullDetails.architecture}</p>
                  </div>

                  <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-200/50 space-y-1">
                    <h5 className="text-xs font-mono font-semibold text-emerald-900 uppercase">Outcome & Verification</h5>
                    <p className="text-xs text-emerald-800 leading-relaxed">{activeProject.fullDetails.outcome}</p>
                  </div>

                  <div>
                    <h5 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">Technology Stack</h5>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.fullDetails.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-mono text-gray-400">Deployed {activeProject.year}</span>
              <button
                onClick={() => {
                  setActiveProject(null);
                  onOpenContact();
                }}
                className="px-6 py-2.5 bg-[#65558f] hover:bg-[#524479] text-white rounded-xl text-xs font-medium transition-colors"
              >
                Inquire About Similar Architecture
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
