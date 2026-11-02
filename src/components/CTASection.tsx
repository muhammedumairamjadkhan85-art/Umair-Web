import React from 'react';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { PageId } from '../types';
import { siteProfile } from '../data/siteData';

interface CTASectionProps {
  onNavigate: (page: PageId) => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onNavigate }) => {
  const handleWhatsAppClick = () => {
    // Generate clean WhatsApp link with pre-filled greeting
    let cleanNumber = siteProfile.whatsappPlaceholder.replace(/[^0-9]/g, '');
    if (cleanNumber.startsWith('0')) {
      cleanNumber = '92' + cleanNumber.slice(1);
    }
    const message = encodeURIComponent(
      `Hello ${siteProfile.brandName}! I visited your personal branding website and would like to discuss a web design project.`
    );
    window.open(`https://wa.me/${cleanNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Decorative ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="p-10 sm:p-16 rounded-2xl bg-gradient-to-b from-[#141414] to-[#0E0E0E] border border-white/10 shadow-2xl relative">
          {/* Subtle gold corner accent lines */}
          <div className="absolute top-0 left-0 w-8 h-[1px] bg-[#D4AF37]" />
          <div className="absolute top-0 left-0 w-[1px] h-8 bg-[#D4AF37]" />
          <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-[#D4AF37]" />
          <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-[#D4AF37]" />

          <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-4">
            Direct Collaboration
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 max-w-3xl mx-auto [text-wrap:balance]">
            Have a Project in Mind? Let's Build Something Exceptional.
          </h2>

          <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
            Let's transform your ideas into a professional digital experience.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#F2D675] via-[#D4AF37] to-[#C99E2E] rounded-md transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:brightness-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#181818] border border-white/15 hover:border-[#D4AF37] hover:text-[#F2D675] rounded-md transition-all duration-300 active:scale-95 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
              <span>Contact Me on WhatsApp</span>
            </button>
          </div>

          <div className="mt-8 text-xs text-zinc-500">
            Open for bespoke international contracts, full redesigns, and agency partnerships.
          </div>
        </div>
      </div>
    </section>
  );
};
