import React, { useState } from 'react';
import { PageId, ServiceItem } from '../types';
import { servicesData, siteProfile } from '../data/siteData';
import { IconRenderer } from '../components/IconRenderer';
import { ArrowRight, Check, Sliders, MessageSquare, Sparkles } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenLetstalk: () => void;
  onSelectServiceForInquiry?: (serviceId: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenLetstalk,
  onSelectServiceForInquiry,
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('business-website-design');
  const [estimatedPages, setEstimatedPages] = useState<number>(5);
  const [needECommerce, setNeedECommerce] = useState<boolean>(false);
  const [needCustomAnimations, setNeedCustomAnimations] = useState<boolean>(true);
  const [urgency, setUrgency] = useState<'standard' | 'expedited'>('standard');

  const filteredServices = activeTab === 'all'
    ? servicesData
    : servicesData.filter((s) => s.id === activeTab);

  const handleInquireService = (service: ServiceItem) => {
    if (onSelectServiceForInquiry) {
      onSelectServiceForInquiry(service.title);
    }
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScopeSubmit = () => {
    const selectedServiceObj = servicesData.find((s) => s.id === selectedServiceId);
    if (onSelectServiceForInquiry && selectedServiceObj) {
      onSelectServiceForInquiry(
        `${selectedServiceObj.title} (~${estimatedPages} pages, ${urgency === 'expedited' ? 'Expedited Delivery' : 'Standard Delivery'}${needECommerce ? ', with E-Commerce' : ''})`
      );
    }
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-28 pb-20">
      {/* Top Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14">
        <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-3">
          Comprehensive Capabilities
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
          Web Design Services Engineered for <span className="text-gradient-gold">Global Impact.</span>
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 max-w-3xl leading-relaxed">
          From high-converting landing pages to comprehensive custom web platforms and e-commerce stores, each service is executed with international design standards, semantic code, and uncompromising attention to detail.
        </p>

        {/* Quick Filter Navigation for jumping to individual services */}
        <div className="mt-10 flex flex-wrap items-center gap-2 pb-2 border-b border-white/10">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#D4AF37] text-black font-semibold'
                : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
            }`}
          >
            All 8 Services
          </button>
          {servicesData.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeTab === s.id
                  ? 'bg-[#D4AF37] text-black font-semibold'
                  : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 mb-24">
        {filteredServices.map((service, idx) => (
          <div
            key={service.id}
            id={service.id}
            className="rounded-2xl bg-[#121212] border border-white/10 p-8 sm:p-12 transition-all duration-300 hover:border-[#D4AF37]/30 shadow-2xl relative"
          >
            {/* Header row */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <IconRenderer name={service.iconName} className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] mb-1">
                    <span>Service {service.number}</span>
                    <span className="text-zinc-600">/</span>
                    <span className="text-zinc-400">{service.category}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {service.title}
                  </h2>
                </div>
              </div>

              <button
                onClick={() => handleInquireService(service)}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#F2D675] rounded-md transition-all cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap shrink-0 self-start"
              >
                <span>Inquire About This Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Detailed Explanation */}
            <div className="py-8 border-b border-white/5">
              <h3 className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
                Strategic Scope &amp; Methodology
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-4xl font-normal">
                {service.fullDescription}
              </p>
            </div>

            {/* 3-Column Specifications Grid */}
            <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Business Benefits */}
              <div className="p-6 rounded-xl bg-[#0D0D0D] border border-white/5">
                <h4 className="text-xs uppercase tracking-wider text-white font-bold mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  Benefits for Businesses
                </h4>
                <ul className="space-y-3">
                  {service.businessBenefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Features */}
              <div className="p-6 rounded-xl bg-[#0D0D0D] border border-white/5">
                <h4 className="text-xs uppercase tracking-wider text-white font-bold mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  Key Features &amp; Standards
                </h4>
                <ul className="space-y-3">
                  {service.keyFeatures.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Target Audience & Deliverables */}
              <div className="p-6 rounded-xl bg-[#0D0D0D] border border-white/5">
                <h4 className="text-xs uppercase tracking-wider text-white font-bold mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  Ideal For &amp; Deliverables
                </h4>
                <div className="mb-4">
                  <div className="text-[11px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-2">Suitable Audience:</div>
                  <div className="space-y-1.5">
                    {service.targetAudience.map((aud, aIdx) => (
                      <div key={aIdx} className="text-xs text-zinc-400">· {aud}</div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <div className="text-[11px] text-[#D4AF37] uppercase tracking-wider font-semibold mb-2">Core Deliverables:</div>
                  <div className="space-y-1 text-xs text-zinc-400">
                    {service.deliverables.map((del, dIdx) => (
                      <div key={dIdx}>✓ {del}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Immediate CTA ribbon following prompt instruction */}
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
              <div>
                Interested in <strong className="text-white">{service.title}</strong> for your company?
              </div>
              <button
                onClick={() => handleInquireService(service)}
                className="text-xs font-semibold text-[#F2D675] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Request Custom Proposal &amp; Timeline</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Project Scope Estimator */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="p-8 sm:p-10 rounded-2xl bg-[#141414] border border-[#D4AF37]/30 shadow-2xl">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
            <Sliders className="w-4 h-4" />
            <span>Interactive Tool</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            Project Scope &amp; Inquiry Builder
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mb-8 leading-relaxed">
            Select your service type, desired scale, and requirements below to prepare a tailored inquiry for Decent Web Engineering Com.pk.
          </p>

          <div className="space-y-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                1. Select Primary Service
              </label>
              <select
                value={selectedServiceId}
                onChange={(e) => setSelectedServiceId(e.target.value)}
                className="w-full bg-[#0D0D0D] border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
              >
                {servicesData.map((s) => (
                  <option key={s.id} value={s.id} className="bg-[#121212] text-white">
                    {s.title} ({s.category})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                  2. Approximate Page Count: {estimatedPages} {estimatedPages === 1 ? 'Page' : 'Pages'}
                </label>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={estimatedPages}
                  onChange={(e) => setEstimatedPages(Number(e.target.value))}
                  className="w-full accent-[#D4AF37] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-zinc-500 mt-1">
                  <span>1 (Landing Page)</span>
                  <span>5-7 (Standard Corporate)</span>
                  <span>15+ (Enterprise / Store)</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                  3. Timeline Expectation
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setUrgency('standard')}
                    className={`py-2.5 px-3 rounded text-xs font-medium border text-center transition-colors cursor-pointer ${
                      urgency === 'standard'
                        ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-white'
                        : 'bg-[#0D0D0D] border-white/10 text-zinc-400 hover:text-white'
                    }`}
                  >
                    Standard (2-4 wks)
                  </button>
                  <button
                    type="button"
                    onClick={() => setUrgency('expedited')}
                    className={`py-2.5 px-3 rounded text-xs font-medium border text-center transition-colors cursor-pointer ${
                      urgency === 'expedited'
                        ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-white'
                        : 'bg-[#0D0D0D] border-white/10 text-zinc-400 hover:text-white'
                    }`}
                  >
                    Expedited Priority
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-zinc-400 text-center sm:text-left">
                Ready to transform this scope into an actionable proposal?
              </div>
              <button
                type="button"
                onClick={handleScopeSubmit}
                className="w-full sm:w-auto px-8 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#F2D675] rounded-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Proceed to Inquiry Form with This Scope</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
