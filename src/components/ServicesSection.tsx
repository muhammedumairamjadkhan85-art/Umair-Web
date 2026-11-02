import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/siteData';
import { ServiceItem, PageId } from '../types';
import { IconRenderer } from './IconRenderer';

interface ServicesSectionProps {
  onNavigate: (page: PageId) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onNavigate,
  onSelectService,
}) => {
  return (
    <section className="py-24 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-3">
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Bespoke Digital Solutions.
            </h2>
          </div>
          <p className="text-sm text-[#A1A1AA] max-w-md">
            Eight specialized disciplines tailored for international businesses, startups, and agencies requiring excellence from initial concept to launch.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-xl bg-[#121212] border border-white/5 hover:border-[#D4AF37]/40 p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.15)] cursor-pointer"
              onClick={() => onSelectService(service)}
            >
              <div>
                {/* Top line: Index number and Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-zinc-500 group-hover:text-[#D4AF37] transition-colors">
                    {service.number}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] transition-all duration-300">
                    <IconRenderer name={service.iconName} className="w-5 h-5" />
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#F2D675] transition-colors">
                  {service.title}
                </h3>

                {/* Short description */}
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {service.shortDescription}
                </p>
              </div>

              {/* Bottom: Learn More link */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400 group-hover:text-[#D4AF37] transition-colors">
                <span className="font-medium">Explore Service</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-14 p-6 rounded-xl bg-[#101010] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-zinc-400 text-center sm:text-left">
            Need a custom package or uncertain which service fits your roadmap?
          </div>
          <button
            onClick={() => {
              onNavigate('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:text-[#F2D675] rounded transition-all cursor-pointer whitespace-nowrap"
          >
            View Full Service Breakdown &amp; Scope Estimator
          </button>
        </div>
      </div>
    </section>
  );
};
