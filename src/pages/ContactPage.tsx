import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { siteProfile, servicesData } from '../data/siteData';
import {
  Mail,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  ExternalLink,
  Clock,
  MapPin,
  Globe,
  Sparkles,
  Info,
  ShieldCheck
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  preselectedService?: string;
}

interface FormState {
  name: string;
  email: string;
  businessName: string;
  service: string;
  budget: string;
  details: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  details?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  preselectedService,
}) => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    businessName: '',
    service: preselectedService || 'Business Website Design',
    budget: '$1,000 - $3,000',
    details: '',
  });

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    timestamp: string;
    preparedText: string;
  } | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const budgetOptions = [
    'Under $1,000',
    '$1,000 - $3,000',
    '$3,000 - $7,000',
    '$7,000 - $15,000',
    '$15,000+',
    'To be determined during discovery',
  ];

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name or company representative name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address format.';
    }

    if (!formData.service) {
      errs.service = 'Please select a service category.';
    }

    if (!formData.details.trim()) {
      errs.details = 'Please briefly share your project goals or requirements.';
    } else if (formData.details.trim().length < 10) {
      errs.details = 'Please provide at least 10 characters detailing your request.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const constructInquirySummary = () => {
    return `NEW PROJECT INQUIRY FOR ${siteProfile.brandName}
----------------------------------------
From: ${formData.name}
Email: ${formData.email}
Business: ${formData.businessName || 'Not specified'}
Service: ${formData.service}
Budget Range: ${formData.budget}

Project Details:
${formData.details}
----------------------------------------
Sent via Decent Web Engineering Com.pk Inquiry System`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate structured processing
    setTimeout(() => {
      const summary = constructInquirySummary();
      setSubmissionResult({
        success: true,
        timestamp: new Date().toLocaleTimeString(),
        preparedText: summary,
      });
      setIsSubmitting(false);
    }, 700);
  };

  const handleSendViaWhatsApp = () => {
    let cleanNumber = siteProfile.whatsappPlaceholder.replace(/[^0-9]/g, '');
    if (cleanNumber.startsWith('0')) {
      cleanNumber = '92' + cleanNumber.slice(1);
    }
    const message = encodeURIComponent(
      `Hello ${siteProfile.brandName}! My name is ${formData.name}. I would like to inquire about: ${formData.service}.\n\nBusiness: ${formData.businessName || 'N/A'}\nBudget: ${formData.budget}\nDetails: ${formData.details}`
    );
    window.open(`https://wa.me/${cleanNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const handleSendViaEmailApp = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.service} - ${formData.name}`);
    const body = encodeURIComponent(constructInquirySummary());
    window.location.href = `mailto:${siteProfile.emailPlaceholder}?subject=${subject}&body=${body}`;
  };

  const handleCopyInquiry = () => {
    if (submissionResult) {
      navigator.clipboard.writeText(submissionResult.preparedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="pt-28 pb-20">
      {/* Top Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14">
        <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-3">
          Direct Communications
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
          Let's Build Something <span className="text-gradient-gold">Exceptional.</span>
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 max-w-3xl leading-relaxed">
          I collaborate with international founders, startups, and companies seeking high-performing web platforms. Submit your project requirements below or connect directly through WhatsApp or email.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact Channels & Availability */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Contact Card */}
            <div className="p-8 rounded-2xl bg-[#121212] border border-white/10 shadow-xl space-y-6">
              <h2 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                Direct Contact Options
              </h2>

              {/* Option 1: WhatsApp */}
              <div
                onClick={handleSendViaWhatsApp}
                className="p-4 rounded-xl bg-[#161616] border border-white/5 hover:border-[#D4AF37]/50 transition-all cursor-pointer group flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shrink-0 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white group-hover:text-[#F2D675] transition-colors">
                      WhatsApp Direct
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#D4AF37]" />
                  </div>
                  <div className="text-xs text-zinc-300 font-mono mt-0.5">
                    {siteProfile.whatsappPlaceholder}
                  </div>
                  <div className="text-[11px] text-zinc-500 mt-1">
                    Click to start direct chat with pre-filled message
                  </div>
                </div>
              </div>

              {/* Option 2: Professional Email */}
              <div
                onClick={handleSendViaEmailApp}
                className="p-4 rounded-xl bg-[#161616] border border-white/5 hover:border-[#D4AF37]/50 transition-all cursor-pointer group flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white group-hover:text-[#F2D675] transition-colors">
                      Professional Email
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#D4AF37]" />
                  </div>
                  <div className="text-xs text-zinc-300 font-mono mt-0.5 break-all">
                    {siteProfile.emailPlaceholder}
                  </div>
                  <div className="text-[11px] text-zinc-500 mt-1">
                    Click to open your default email application
                  </div>
                </div>
              </div>

              {/* Working Hours & Availability */}
              <div className="pt-4 border-t border-white/5 space-y-3 text-xs text-zinc-400">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-white font-medium block">Timezone &amp; Working Hours:</span>
                    <span>GMT+5 (Pakistan Standard Time) · Accommodating US, UK, EU, UAE, &amp; Asian business hours.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-white font-medium block">International Readiness:</span>
                    <span>Fully remote-equipped with asynchronous video updates, transparent Github tracking, and milestone-based invoicing.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Channel Notice */}
            <div className="p-5 rounded-xl bg-[#101010] border border-[#D4AF37]/30 text-xs text-zinc-400 space-y-2">
              <div className="flex items-center gap-1.5 text-[#D4AF37] font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-zinc-200">Verified Direct Communication Channels</span>
              </div>
              <p className="text-[11px] leading-relaxed text-zinc-400">
                All communications sent via WhatsApp (<strong className="text-zinc-200 font-mono">+92 316 6097993</strong>) or email (<strong className="text-zinc-200 font-mono">muhammedumairamjadkhan85@gmail.com</strong>) reach Decent Web Engineering Com.pk directly for timely international collaboration.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#121212] border border-white/10 shadow-2xl relative">
              <div className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-2">
                Project Inquiry Form
              </div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Tell Me About Your Vision
              </h2>

              {submissionResult ? (
                /* Submission Confirmation & Direct Transmission Options */
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="p-6 rounded-xl bg-[#181818] border border-[#D4AF37]/40 space-y-4">
                    <div className="flex items-center gap-3 text-emerald-400 font-semibold text-sm">
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                      <span>Inquiry Packaged &amp; Ready to Transmit!</span>
                    </div>

                    <p className="text-xs text-zinc-300 leading-relaxed">
                      To ensure your message reaches me reliably without spam filters or unconfigured server issues, you can send it immediately via your preferred channel:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <button
                        onClick={handleSendViaWhatsApp}
                        className="py-3 px-4 rounded-lg bg-[#25D366] text-black font-semibold text-xs flex items-center justify-center gap-2 hover:brightness-105 transition-all cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Send via WhatsApp</span>
                      </button>

                      <button
                        onClick={handleSendViaEmailApp}
                        className="py-3 px-4 rounded-lg bg-[#D4AF37] text-black font-semibold text-xs flex items-center justify-center gap-2 hover:bg-[#F2D675] transition-all cursor-pointer"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Send via Email Client</span>
                      </button>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={handleCopyInquiry}
                        className="w-full py-2.5 px-4 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>{copied ? 'Copied to Clipboard!' : 'Copy Form Summary to Clipboard'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Summary preview box */}
                  <div className="p-4 rounded-lg bg-[#0C0C0C] border border-white/5 font-mono text-xs text-zinc-400 whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto">
                    {submissionResult.preparedText}
                  </div>

                  <button
                    onClick={() => setSubmissionResult(null)}
                    className="text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer underline"
                  >
                    Edit / Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                        Your Name <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Johnathan Davis"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full bg-[#0D0D0D] border ${
                          errors.name ? 'border-rose-500' : 'border-white/15'
                        } rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#D4AF37] transition-colors`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                        Email Address <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full bg-[#0D0D0D] border ${
                          errors.email ? 'border-rose-500' : 'border-white/15'
                        } rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#D4AF37] transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Business Name (Optional) & Service Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                        Business / Company Name <span className="text-zinc-500 text-[10px]">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Davis Capital or Personal"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full bg-[#0D0D0D] border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#D4AF37] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                        Service Required <span className="text-[#D4AF37]">*</span>
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#0D0D0D] border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                      >
                        {servicesData.map((s) => (
                          <option key={s.id} value={s.title} className="bg-[#121212] text-white">
                            {s.title}
                          </option>
                        ))}
                        <option value="Multiple Services / Custom Consult" className="bg-[#121212] text-white">
                          Multiple Services / Custom Consult
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Project Budget (Optional) */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                      Estimated Project Budget <span className="text-zinc-500 text-[10px]">(Optional)</span>
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#0D0D0D] border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                    >
                      {budgetOptions.map((opt, oIdx) => (
                        <option key={oIdx} value={opt} className="bg-[#121212] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                      Project Details &amp; Objectives <span className="text-[#D4AF37]">*</span>
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Please share details about your business, the goals for your website, your target audience, any reference websites you admire, and your target launch date."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className={`w-full bg-[#0D0D0D] border ${
                        errors.details ? 'border-rose-500' : 'border-white/15'
                      } rounded-lg p-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#D4AF37] transition-colors resize-y`}
                    />
                    {errors.details && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.details}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#F2D675] via-[#D4AF37] to-[#C99E2E] rounded-md transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:brightness-105 active:scale-95 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Packaging Your Inquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Project Inquiry</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-zinc-500 text-center mt-3">
                      Submissions are processed instantly with direct options for WhatsApp and Email dispatch.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
