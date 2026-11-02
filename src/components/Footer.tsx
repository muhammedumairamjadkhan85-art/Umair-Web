import React from 'react';
import { PageId, ServiceItem } from '../types';
import { siteProfile, servicesData } from '../data/siteData';
import { Mail, Phone, MapPin, Globe, ArrowUpRight, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onSelectService?: (service: ServiceItem) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectService }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-zinc-400 border-t border-white/10 pt-16 pb-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Column 1 & 2: Brand Info */}
          <div className="lg:col-span-2">
            <span className="font-luxury text-lg md:text-xl font-bold tracking-[0.18em] text-white block mb-4">
              {siteProfile.brandName}
            </span>
            <p className="text-xs text-zinc-400 leading-relaxed mb-6 max-w-sm">
              Professional Web Designer delivering bespoke, modern, and high-performing digital experiences for worldwide businesses, startups, entrepreneurs, and agencies.
            </p>

            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{siteProfile.location}</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{siteProfile.availability}</span>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {(['home', 'about', 'services', 'portfolio', 'contact'] as PageId[]).map((page) => (
                <li key={page}>
                  <button
                    onClick={() => {
                      onNavigate(page);
                      scrollToTop();
                    }}
                    className="hover:text-white transition-colors cursor-pointer capitalize"
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Services */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {servicesData.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => {
                      if (onSelectService) {
                        onSelectService(service);
                      } else {
                        onNavigate('services');
                        scrollToTop();
                      }
                    }}
                    className="hover:text-white transition-colors cursor-pointer text-left line-clamp-1"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Direct Inquiries / Contact Placeholders */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs mb-6">
              <div>
                <div className="text-[10px] uppercase text-zinc-500 mb-0.5">WhatsApp Inquiry</div>
                <div className="text-zinc-200 font-mono">{siteProfile.whatsappPlaceholder}</div>
              </div>
              <div>
                <div className="text-[10px] uppercase text-zinc-500 mb-0.5">Professional Email</div>
                <div className="text-zinc-200 font-mono break-all">{siteProfile.emailPlaceholder}</div>
              </div>
            </div>

            {/* Social media links */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-zinc-500">Profiles:</span>
              <span className="text-xs text-zinc-400 hover:text-[#D4AF37] cursor-pointer">LinkedIn</span>
              <span className="text-zinc-600">·</span>
              <span className="text-xs text-zinc-400 hover:text-[#D4AF37] cursor-pointer">GitHub</span>
              <span className="text-zinc-600">·</span>
              <span className="text-xs text-zinc-400 hover:text-[#D4AF37] cursor-pointer">Dribbble</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} <span className="text-zinc-300 font-medium">{siteProfile.brandName}</span>. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Modern Minimalist + Luxury Professional</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
