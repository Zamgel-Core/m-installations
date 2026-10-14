import React, { useEffect } from "react";
import { X, Phone, MessageSquare, ArrowRight } from "lucide-react";
import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { navLinks } from "../../config/navigation";
import { siteConfig } from "../../config/site";
import { scrollToSection } from "../../lib/utils";
import { Language } from "../../types";
import { Dictionary } from "../../i18n";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  t: Dictionary;
  language: Language;
  onSelectLanguage: (lang: Language) => void;
  onOpenQuote: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  t,
  language,
  onSelectLanguage,
  onOpenQuote,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleLinkClick = (href: string) => {
    onClose();
    scrollToSection(href);
  };

  const getNavLabel = (key: string): string => {
    const parts = key.split(".");
    if (parts[0] === "nav") {
      const field = parts[1] as keyof typeof t.nav;
      return t.nav[field] || parts[1];
    }
    return key;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile menu"
      className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm transition-opacity"
    >
      <div className="w-full max-w-sm h-full bg-[#080D16] border-l border-slate-800 flex flex-col justify-between p-6 overflow-y-auto">
        <div>
          {/* Header Row */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-800">
            <Logo size="sm" />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Language Selector */}
          <div className="py-4 border-b border-slate-800 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">
              Language / Idioma
            </span>
            <LanguageSwitcher
              currentLang={language}
              onSelect={onSelectLanguage}
            />
          </div>

          {/* Navigation Links */}
          <nav className="py-6 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleLinkClick(link.href)}
                className="w-full flex items-center justify-between py-3 px-3 rounded-lg text-left text-base font-semibold text-slate-200 hover:text-[#00B9F2] hover:bg-slate-900 transition-colors"
              >
                <span>{getNavLabel(link.labelKey)}</span>
                <ArrowRight className="w-4 h-4 text-slate-600" />
              </button>
            ))}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-slate-800 space-y-3">
          <Button variant="primary" size="lg" fullWidth onClick={onOpenQuote}>
            {t.nav.quoteCta}
          </Button>

          <div className="grid grid-cols-2 gap-2 pt-2">
            <a
              href={`https://wa.me/${siteConfig.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] text-xs font-bold hover:bg-[#25D366]/25 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs font-bold hover:bg-slate-800 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.phone}
            </a>
          </div>

          <p className="text-[11px] text-center text-slate-500 pt-2">
            Houston, Texas · (281) 780-6153
          </p>
        </div>
      </div>
    </div>
  );
};
