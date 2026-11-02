import React, { useEffect } from 'react';
import { ServiceItem } from '../types';
import { IconRenderer } from './IconRenderer';
import { X, ArrowRight, Check } from 'lucide-react';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onInquireService: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onInquireService,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#121212] border border-white/15 rounded-2xl shadow-2xl z-10 flex flex-col">
        {/* Top Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-6 bg-[#121212]/95 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37]">
              <IconRenderer name={service.iconName} className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-[#D4AF37] block">
                Service {service.number} · {service.category}
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white">
                {service.title}
              </h2>
            </div>
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
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
              Service Scope &amp; Value
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed font-normal">
              {service.fullDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10">
            {/* Business Benefits */}
            <div className="p-5 rounded-xl bg-[#0D0D0D] border border-white/5">
              <h4 className="text-xs uppercase tracking-wider text-white font-bold mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                Key Benefits
              </h4>
              <ul className="space-y-2">
                {service.businessBenefits.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                    <Check className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5 shrink-0" />
                    <span className="leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div className="p-5 rounded-xl bg-[#0D0D0D] border border-white/5">
              <h4 className="text-xs uppercase tracking-wider text-white font-bold mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                Deliverables
              </h4>
              <ul className="space-y-2">
                {service.deliverables.map((d, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                    <Check className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5 shrink-0" />
                    <span className="leading-snug">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Modal Footer / Action */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-zinc-400">
              International Delivery · 100% Bespoke Code
            </span>
            <button
              onClick={() => {
                onInquireService(service.title);
                onClose();
              }}
              className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#F2D675] rounded-md transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Inquire for Your Business</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
