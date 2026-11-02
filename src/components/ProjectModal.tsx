import React, { useEffect } from 'react';
import { ProjectItem, PageId } from '../types';
import { X, ArrowRight, ExternalLink, Check, Layers, Sparkles, Shield } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquireSimilar: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInquireSimilar,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#121212] border border-white/15 rounded-2xl shadow-2xl z-10 flex flex-col">
        {/* Top Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-6 bg-[#121212]/95 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs font-semibold text-[#F2D675]">
              {project.category}
            </span>
            <span className="text-xs font-mono text-zinc-400">
              Demonstration Showcase
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Main Title & Tagline */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">
              {project.shortDescription}
            </p>
          </div>

          {/* Large High-Fidelity Screenshot Display */}
          <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/80 aspect-[16/9] shadow-2xl">
            <img
              src={project.imageUrl}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Demonstration Notice Box */}
          <div className="p-4 rounded-xl bg-[#161616] border border-white/10 text-xs text-zinc-400">
            <div className="flex items-center gap-2 text-[#D4AF37] font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Replaceable Demonstration Asset</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              This project card is designed as a demonstration showcase. When you supply your actual client screenshots and case studies, they slot directly into this modal structure.
            </p>
          </div>

          {/* Overview & Design Decisions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-white/10">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">
                Project Overview &amp; Objective
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                {project.fullDescription}
              </p>
              <div className="p-4 rounded-lg bg-[#0C0C0C] border border-white/5 text-xs text-zinc-400">
                <strong className="text-zinc-300 block mb-1">Concept Scope:</strong>
                {project.clientBrief}
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">
                Key Design Decisions
              </h3>
              <ul className="space-y-2.5">
                {project.designDecisions.map((decision, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <Check className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{decision}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technologies & Deliverables */}
          <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                Technologies &amp; Architecture:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                Deliverables Included:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.deliverables.map((d, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs text-zinc-300"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer / Action */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-zinc-400 text-center sm:text-left">
              Interested in a bespoke solution tailored to your exact brand?
            </div>
            <button
              onClick={() => {
                onInquireSimilar(project.title);
                onClose();
              }}
              className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#F2D675] rounded-md transition-all cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>Inquire About a Project Like This</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
