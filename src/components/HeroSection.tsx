import React from 'react';
import { ArrowRight, Compass, Shield, Zap, Sparkles } from 'lucide-react';
import { PageId } from '../types';
import { siteProfile } from '../data/siteData';

interface HeroSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenLetstalk: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenLetstalk,
}) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Screen 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Professional Title & Category Kicker (Clean unboxed text, zero pill) */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-6">
              <span>{siteProfile.professionalTitle}</span>
              <span className="text-zinc-600">/</span>
              <span className="text-zinc-400">Web Design &amp; Digital Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6 max-w-2xl [text-wrap:balance]">
              Building Digital Experiences That Move{' '}
              <span className="text-gradient-gold">Businesses Forward.</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-xl mb-10 font-normal">
              I design modern, professional, and high-performing websites that help businesses establish their online presence, connect with customers, and grow with confidence.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => onNavigate('portfolio')}
                className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#F2D675] via-[#D4AF37] to-[#C99E2E] rounded-md transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:brightness-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenLetstalk}
                className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-transparent border border-white/20 hover:border-[#D4AF37] hover:text-[#F2D675] rounded-md transition-all duration-300 active:scale-95 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Let's Work Together</span>
              </button>
            </div>

            {/* Trust Markers Bar (Clean unboxed metadata) */}
            <div className="mt-12 pt-8 border-t border-white/10 w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-left">
              <div>
                <div className="text-xs uppercase tracking-wider text-zinc-500 mb-1">Standard</div>
                <div className="text-sm font-medium text-zinc-200">International Quality</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-zinc-500 mb-1">Architecture</div>
                <div className="text-sm font-medium text-zinc-200">100% Bespoke Code</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-xs uppercase tracking-wider text-zinc-500 mb-1">Focus</div>
                <div className="text-sm font-medium text-zinc-200">Conversion Driven</div>
              </div>
            </div>
          </div>

          {/* Right Column: Large Visual Frame with Professional Portrait Placeholder */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gold hairline frame */}
              <div className="absolute -inset-3 rounded-2xl border border-[#D4AF37]/20 pointer-events-none" />
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#D4AF37]/20 to-transparent opacity-40 blur-sm pointer-events-none" />

              {/* Media Card Container */}
              <div className="relative rounded-xl overflow-hidden bg-[#121212] border border-white/10 shadow-2xl aspect-[3/4] flex flex-col justify-end">
                <img
                  src={siteProfile.portraitImage}
                  alt="Web Engineering Com.pk - Professional Web Designer Portrait Placeholder"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-top filter grayscale contrast-110 brightness-95 hover:grayscale-0 transition-all duration-700"
                />

                {/* Subtle gradient scrim for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

                {/* Bottom Card Identity Label */}
                <div className="relative p-6 z-10">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-1">
                    Creative Direction &amp; Web Design
                  </div>
                  <div className="font-luxury text-lg font-bold text-white tracking-wide">
                    {siteProfile.brandName}
                  </div>
                  <div className="text-xs text-zinc-400 mt-1 flex items-center gap-2">
                    <span>Worldwide Client Service</span>
                    <span>·</span>
                    <span className="text-emerald-400 font-medium">Accepting Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
