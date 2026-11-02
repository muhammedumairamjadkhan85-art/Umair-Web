import React from 'react';
import { whyWorkWithMeItems } from '../data/siteData';
import { IconRenderer } from './IconRenderer';

export const WhyWorkWithMe: React.FC = () => {
  return (
    <section className="py-24 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-3">
            The Partnership Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Why Work With Me?
          </h2>
          <p className="text-sm text-[#A1A1AA] leading-relaxed">
            Delivering the strategic focus and agility of a dedicated senior professional, matched with the rigorous standards expected by international businesses.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyWorkWithMeItems.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-[#121212] border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#181818] border border-white/10 group-hover:border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-6 transition-colors">
                <IconRenderer name={item.iconName} className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#F2D675] transition-colors">
                {item.title}
              </h3>

              <p className="text-xs text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
