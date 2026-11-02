import React from 'react';
import { PageId } from '../types';
import { siteProfile, professionalValues, processSteps } from '../data/siteData';
import { IconRenderer } from '../components/IconRenderer';
import { ArrowRight, Check, Sparkles, Code2, Layers, Cpu, Globe, MessageSquare, ShieldCheck } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenLetstalk: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenLetstalk }) => {
  const skillsList = [
    {
      category: 'UI/UX & Design Systems',
      items: ['Design Tokens & Typography Scales', 'Figma Prototyping', 'Component Architecture', 'Ergonomic User Flows', 'Dark Mode & Contrast Compliance (WCAG AA)']
    },
    {
      category: 'Frontend Engineering',
      items: ['Modern React & TypeScript', 'Semantic HTML5 & Accessible DOM', 'Tailwind CSS Mastery', 'Kinetic Animations & Motion', 'Zero-Bloat Performance Optimization']
    },
    {
      category: 'CMS & Platform Integration',
      items: ['Custom WordPress Development', 'Gutenberg Block Customization', 'E-commerce Architecture', 'REST & Headless API Integration', 'Technical SEO Infrastructure']
    }
  ];

  return (
    <div className="pt-28 pb-20">
      {/* Top Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-3">
          Behind The Brand
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
          Architecting Experiences With <span className="text-gradient-gold">Intention &amp; Precision.</span>
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 max-w-3xl leading-relaxed">
          I am a professional web designer operating under the brand <strong className="text-white">DECENT WEB ENGINEERING COM.PK</strong>, crafting tailor-made digital presences for clients across the globe.
        </p>
      </div>

      {/* Hero Split: Portrait + Personal Introduction & Biography */}
      <div className="bg-[#0C0C0C] border-y border-white/5 py-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Large Professional Portrait Placeholder */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-28">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#141414] shadow-2xl aspect-[3/4]">
                  <img
                    src={siteProfile.portraitImage}
                    alt="Web Engineering Com.pk Professional Web Designer Portrait"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top filter grayscale contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-semibold mb-1">
                      Professional Identity
                    </div>
                    <div className="font-luxury text-xl font-bold text-white">
                      {siteProfile.brandName}
                    </div>
                    <div className="text-xs text-zinc-400 mt-1">
                      {siteProfile.professionalTitle} · Pakistan / Worldwide Remote
                    </div>
                  </div>
                </div>

                {/* Editable Placeholder Note */}
                <div className="mt-4 p-4 rounded-lg bg-[#141414] border border-white/10 text-xs text-zinc-400">
                  <div className="flex items-center gap-1.5 text-[#D4AF37] font-semibold mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Portrait Placeholder Notice</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-zinc-400">
                    This portrait is a demonstration placeholder. You can easily link your actual high-resolution photograph in <code className="text-[#F2D675]">src/data/siteData.ts</code> at <code className="text-[#F2D675]">siteProfile.portraitImage</code>.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Personal Introduction & Professional Biography */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-3">
                  Personal Introduction
                </h2>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
                  Passionate about the intersection of design discipline and engineering execution.
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal mb-4">
                  I specialize in designing and engineering high-impact web presences for businesses that cannot afford to look ordinary. In a digital world crowded with disposable templates and uninspired cookie-cutter layouts, I build bespoke platforms that immediately establish authority, communicate core value, and convert international visitors into engaged clients.
                </p>
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
                  Whether developing a high-converting landing page for a technology launch, an editorial storefront for a luxury product, or an authoritative digital headquarters for a corporation, every decision is guided by purposeful typography, structured information hierarchy, and bulletproof responsive code.
                </p>
              </div>

              {/* Biography & Approach */}
              <div className="p-6 rounded-xl bg-[#141414] border border-white/5 space-y-4">
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                  Professional Biography &amp; Work Ethic
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  My practice is built around direct, transparent partnerships with clients across North America, Europe, the Middle East, and Asia. When you work with Decent Web Engineering Com.pk, you communicate directly with the designer and developer responsible for your codebase—eliminating the agency bloat, communication silos, and misaligned expectations common in traditional firms.
                </p>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  I respect your timeline and your investment. Every project starts with a defined scope, clear milestone checkpoints, and a rigorous quality assurance pass before a single line of production code is finalized.
                </p>
              </div>

              {/* Design Philosophy */}
              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-3">
                  Design Philosophy
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-lg bg-[#121212] border border-white/5">
                    <div className="text-sm font-bold text-white mb-2">Simplicity Over Clutter</div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Elegance is achieved when visual distractions are removed and what remains communicates with uncompromising clarity.
                    </p>
                  </div>
                  <div className="p-5 rounded-lg bg-[#121212] border border-white/5">
                    <div className="text-sm font-bold text-white mb-2">Function Follows Strategy</div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Every button placement, headline scale, and interactive element is designed to serve a measurable commercial conversion goal.
                    </p>
                  </div>
                  <div className="p-5 rounded-lg bg-[#121212] border border-white/5">
                    <div className="text-sm font-bold text-white mb-2">Universal Responsiveness</div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Flawless touch ergonomics and typographic balance on mobile devices are never an afterthought—they are the starting standard.
                    </p>
                  </div>
                  <div className="p-5 rounded-lg bg-[#121212] border border-white/5">
                    <div className="text-sm font-bold text-white mb-2">Longevity &amp; Maintainability</div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Clean code and semantic HTML ensure your website remains fast, secure, and easily evolvable for years to come.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills & Technical Expertise */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
            Disciplines &amp; Proficiencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills &amp; Technical Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsList.map((skillGroup, idx) => (
            <div key={idx} className="p-7 rounded-xl bg-[#121212] border border-white/10 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-white mb-4 pb-3 border-b border-white/5 flex items-center gap-2">
                  <span className="text-[#D4AF37] text-xs font-mono">0{idx + 1}</span>
                  <span>{skillGroup.category}</span>
                </h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5 shrink-0" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Values */}
      <div className="bg-[#0A0A0A] border-t border-white/5 py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
              Foundational Principles
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Professional Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {professionalValues.map((val, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-[#121212] border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] mb-4">
                  <IconRenderer name={val.iconName} className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {val.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA to Contact Me */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-10 rounded-2xl bg-[#121212] border border-[#D4AF37]/30 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Ready to Build a Website That Accurately Reflects Your Caliber?
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto mb-8">
            Let's discuss your project requirements, target audience, and launch timeline. Direct collaboration, worldwide client availability.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#F2D675] via-[#D4AF37] to-[#C99E2E] rounded-md transition-all hover:brightness-105 active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <span>Get In Touch / Contact Me</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                onNavigate('portfolio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white border border-white/20 hover:border-[#D4AF37] rounded-md transition-all cursor-pointer"
            >
              <span>Browse Portfolio</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
