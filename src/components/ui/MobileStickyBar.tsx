import React from 'react';
import { Phone, MessageSquare, FileText } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { scrollToSection } from '../../lib/utils';
import { Dictionary } from '../../i18n';

interface MobileStickyBarProps {
  t: Dictionary;
  onOpenQuote: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  t,
  onOpenQuote,
}) => {
  return (
    <div
      aria-label="Quick contact actions"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#080D16]/95 backdrop-blur-md border-t border-slate-800 p-2 px-2 sm:px-4 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-2xl flex items-center justify-between gap-1.5 sm:gap-2"
    >
      <a
        href={`https://wa.me/${siteConfig.whatsappRaw}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 min-w-0 flex items-center justify-center gap-1 py-2.5 rounded-lg bg-[#25D366] text-[#080D16] text-[10px] min-[360px]:text-xs font-bold shadow-sm whitespace-nowrap"
      >
        <MessageSquare className="shrink-0 w-3.5 h-3.5 fill-current" />
        <span>{t.mobileCta.whatsapp}</span>
      </a>

      <a
        href={`tel:${siteConfig.phoneRaw}`}
        className="flex-1 min-w-0 flex items-center justify-center gap-1 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-[10px] min-[360px]:text-xs font-bold hover:bg-slate-800 whitespace-nowrap"
      >
        <Phone className="shrink-0 w-3.5 h-3.5 text-[#00B9F2]" />
        <span>{t.mobileCta.call}</span>
      </a>

      <button
        type="button"
        onClick={() => {
          onOpenQuote();
          scrollToSection('#quote');
        }}
        className="flex-1 min-w-0 flex items-center justify-center gap-1 py-2.5 rounded-lg bg-[#00B9F2] text-[#080D16] text-[10px] min-[360px]:text-xs font-bold shadow-sm whitespace-nowrap cursor-pointer"
      >
        <FileText className="shrink-0 w-3.5 h-3.5" />
        <span>{t.mobileCta.quote}</span>
      </button>
    </div>
  );
};
