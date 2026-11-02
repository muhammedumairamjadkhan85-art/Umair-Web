import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageId } from '../types';
import { siteProfile } from '../data/siteData';

interface AboutPreviewProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPreview: React.FC<AboutPreviewProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-[#0D0D0D] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual: Secondary Studio Image */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#121212] aspect-[4/3] shadow-2xl">
              <img
                src={siteProfile.studioImage}
                alt="Web Engineering Com.pk Studio Workspace"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-zinc-300">
                <span className="text-[#D4AF37] font-semibold">Dedicated Workspace:</span> Thoughtful architecture, distraction-free execution.
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2">
            <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-3">
              About The Designer
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
              The Person Behind the Digital Experience.
            </h2>

            <p className="text-base text-[#A1A1AA] leading-relaxed mb-6 font-normal">
              I am a professional web designer dedicated to creating modern, purposeful, and high-performing digital experiences. Rather than relying on generic, overused templates, I approach web design as a strategic discipline where visual luxury, clear messaging, and technical precision work in concert to advance your business objectives.
            </p>

            {/* Approach & Commitment */}
            <div className="space-y-4 mb-8 w-full">
              <div className="p-4 rounded-lg bg-[#121212] border border-white/5">
                <h3 className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  My Approach to Web Design
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Every website begins with understanding your unique commercial identity. By stripping away digital noise and prioritizing intuitive navigation, I create digital storefronts and platforms that immediately establish authority.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#121212] border border-white/5">
                <h3 className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  My Commitment to Quality
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  I hold every project to international engineering standards: lightweight code, fluid responsiveness on all mobile screens, strict typography hierarchy, and zero unaddressed bugs.
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                onNavigate('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F2D675] hover:text-white transition-colors cursor-pointer group"
            >
              <span>Learn More About My Philosophy &amp; Process</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
