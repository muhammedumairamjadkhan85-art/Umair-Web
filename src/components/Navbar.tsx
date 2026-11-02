import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenLetstalk?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenLetstalk
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#080808]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-4'
            : 'bg-[#080808]/70 backdrop-blur-sm border-b border-white/5 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark (Single text element, exact name) */}
            <button
              onClick={() => handleLinkClick('home')}
              className="text-left group cursor-pointer focus:outline-none"
              aria-label="Decent Web Engineering Com.pk Home"
            >
              <span className="font-luxury text-sm sm:text-base md:text-lg font-bold tracking-[0.16em] text-white group-hover:text-[#F2D675] transition-colors whitespace-nowrap shrink-0 block">
                DECENT WEB ENGINEERING COM.PK
              </span>
            </button>

            {/* Zone 2: Navigation Links (Clean single-line text links) */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`relative py-1 cursor-pointer transition-colors whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'text-[#F2D675] font-semibold'
                        : 'text-[#A1A1AA] hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#F2D675] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Primary Action */}
            <div className="hidden md:flex items-center gap-4 shrink-0">
              <button
                onClick={() => {
                  if (onOpenLetstalk) {
                    onOpenLetstalk();
                  } else {
                    handleLinkClick('contact');
                  }
                }}
                className="group relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#F2D675] via-[#D4AF37] to-[#C99E2E] rounded-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:brightness-105 active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex md:hidden items-center gap-3">
              <button
                onClick={() => {
                  if (onOpenLetstalk) {
                    onOpenLetstalk();
                  } else {
                    handleLinkClick('contact');
                  }
                }}
                className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-black bg-[#D4AF37] rounded transition-all hover:bg-[#F2D675]"
              >
                Let's Talk
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-zinc-300 hover:text-white focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-20 right-0 left-0 bg-[#121212] border-b border-white/10 p-6 shadow-2xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-4">
              <div className="pb-3 border-b border-zinc-800 text-xs font-luxury tracking-widest text-[#D4AF37]">
                NAVIGATION
              </div>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left text-lg py-2 transition-colors ${
                    currentPage === link.id
                      ? 'text-[#F2D675] font-semibold pl-2 border-l-2 border-[#D4AF37]'
                      : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 border-t border-zinc-800 flex flex-col gap-3">
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-black bg-[#D4AF37] rounded-md hover:bg-[#F2D675] transition-all"
                >
                  Start a Project Inquiries
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
