import React from 'react';
import { ArrowUpRight, ArrowRight, Sparkles, Layers } from 'lucide-react';
import { portfolioProjects } from '../data/siteData';
import { ProjectItem, PageId } from '../types';

interface PortfolioShowcaseProps {
  onSelectProject: (project: ProjectItem) => void;
  onNavigate: (page: PageId) => void;
}

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({
  onSelectProject,
  onNavigate,
}) => {
  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-3">
              Portfolio Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Selected Work. Designed With Purpose.
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                onNavigate('portfolio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F2D675] hover:text-white transition-colors cursor-pointer group"
            >
              <span>Explore Full Portfolio Gallery</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Clear Demonstration Notice (Compliance with prompt instruction) */}
        <div className="mb-10 px-4 py-3 rounded-lg bg-[#141414] border border-white/10 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span>
              <strong className="text-zinc-200">Demonstration Concepts:</strong> These showcase cards serve as high-fidelity aesthetic templates ready to be populated with your actual client case studies.
            </span>
          </div>
          <span className="text-[11px] text-zinc-500 hidden sm:inline">Modular &amp; Replaceable</span>
        </div>

        {/* Bento Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="group rounded-xl bg-[#121212] border border-white/10 hover:border-[#D4AF37]/40 overflow-hidden transition-all duration-300 flex flex-col justify-between hover:shadow-[0_15px_35px_-10px_rgba(212,175,55,0.15)] cursor-pointer"
              onClick={() => onSelectProject(project)}
            >
              {/* Screenshot Media Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/60">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent pointer-events-none" />

                {/* Top unboxed category and year label */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-white/90 drop-shadow">
                  <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-medium tracking-wide text-[#F2D675] border border-white/10">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-300 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md">
                    Demo Showcase
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#F2D675] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-6 text-[11px] text-zinc-400">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="bg-white/5 border border-white/5 px-2 py-0.5 rounded text-zinc-300">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-zinc-500 text-[10px]">+{project.technologies.length - 3} more</span>
                    )}
                  </div>
                </div>

                {/* View Project button */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-300 group-hover:text-[#D4AF37] transition-colors">
                  <span className="font-semibold uppercase tracking-wider text-[11px]">View Project Details</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
