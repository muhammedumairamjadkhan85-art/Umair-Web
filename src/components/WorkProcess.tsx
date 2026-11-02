import React from 'react';
import { processSteps } from '../data/siteData';
import { Check } from 'lucide-react';

export const WorkProcess: React.FC = () => {
  return (
    <section className="py-24 bg-[#0D0D0D] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-3">
            Execution Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            A Transparent Four-Step Process.
          </h2>
          <p className="text-sm text-[#A1A1AA] leading-relaxed">
            Every engagement follows a structured, milestone-driven framework to guarantee total alignment, zero surprises, and punctual international delivery.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((step, idx) => (
            <div
              key={step.number}
              className="relative rounded-xl bg-[#121212] border border-white/10 p-7 flex flex-col justify-between hover:border-[#D4AF37]/40 transition-all duration-300 group"
            >
              <div>
                {/* Step number badge */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                  <span className="font-mono text-2xl font-bold text-[#D4AF37]">
                    {step.number}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-medium">
                    Phase {idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#F2D675] transition-colors">
                  {step.title}
                </h3>
                <div className="text-xs text-[#D4AF37] font-medium mb-4">
                  {step.tagline}
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Key activities list */}
              <div className="pt-4 border-t border-white/5 space-y-2">
                <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold mb-2">
                  Key Milestones:
                </div>
                {step.activities.map((act, actIdx) => (
                  <div key={actIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                    <Check className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5 shrink-0" />
                    <span className="text-[11px] leading-tight text-zinc-400">{act}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
