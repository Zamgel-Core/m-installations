import React, { useState } from 'react';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { MobileMenu } from './MobileMenu';
import { navLinks } from '../../config/navigation';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { scrollToSection } from '../../lib/utils';
import { Language } from '../../types';
import { Dictionary } from '../../i18n';
import { Menu } from 'lucide-react';

interface HeaderProps {
  t: Dictionary;
  language: Language;
  onSelectLanguage: (lang: Language) => void;
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  t,
  language,
  onSelectLanguage,
  onOpenQuote,
}) => {
  const { isScrolled } = useScrollPosition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getNavLabel = (key: string): string => {
    const parts = key.split('.');
    if (parts[0] === 'nav') {
      const field = parts[1] as keyof typeof t.nav;
      return t.nav[field] || parts[1];
    }
    return key;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080D16]/95 backdrop-blur-md border-b border-slate-800 shadow-xl'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-8 h-[72px] sm:h-20 flex items-center justify-between gap-2 sm:gap-3 lg:gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex min-w-0 flex-1 lg:flex-none items-center overflow-hidden focus-visible:outline-none [&>div]:min-w-0"
            aria-label="M Installations Home"
          >
            <Logo size="md" />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#00B9F2] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {getNavLabel(link.labelKey)}
              </a>
            ))}
          </nav>

          {/* Zone 3: Language & Primary Action */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <div className="hidden sm:block">
              <LanguageSwitcher
                currentLang={language}
                onSelect={onSelectLanguage}
              />
            </div>

            <Button
              variant="primary"
              size="sm"
              onClick={onOpenQuote}
              className="hidden min-[400px]:inline-flex !px-2.5 !py-2 !text-[11px] lg:!px-3.5 lg:!text-xs"
            >
              <span className="lg:hidden">{language === 'es' ? 'Cotizar' : 'Quote'}</span>
              <span className="hidden lg:inline">{t.nav.quoteCta}</span>
            </Button>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="lg:hidden shrink-0 p-1.5 sm:p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        t={t}
        language={language}
        onSelectLanguage={onSelectLanguage}
        onOpenQuote={() => {
          setIsMobileMenuOpen(false);
          onOpenQuote();
        }}
      />
    </>
  );
};
