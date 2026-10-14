import React from 'react';
import { Language } from '../../types';
import { cn } from '../../lib/utils';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLang: Language;
  onSelect: (lang: Language) => void;
  className?: string;
  compact?: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLang,
  onSelect,
  className = '',
  compact = false,
}) => {
  return (
    <div
      role="group"
      aria-label="Language selection"
      className={cn(
        'inline-flex items-center p-1 rounded-lg bg-[#0F1A2A] border border-slate-800 shrink-0 select-none',
        className
      )}
    >
      {!compact && (
        <span className="pl-2 pr-1 text-slate-500" aria-hidden="true">
          <Globe className="w-3.5 h-3.5" />
        </span>
      )}
      <button
        type="button"
        onClick={() => onSelect('en')}
        aria-pressed={currentLang === 'en'}
        className={cn(
          'px-2.5 py-1 text-xs font-bold rounded-md transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0',
          currentLang === 'en'
            ? 'bg-[#00B9F2] text-[#080D16] shadow-sm'
            : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
        )}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => onSelect('es')}
        aria-pressed={currentLang === 'es'}
        className={cn(
          'px-2.5 py-1 text-xs font-bold rounded-md transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0',
          currentLang === 'es'
            ? 'bg-[#00B9F2] text-[#080D16] shadow-sm'
            : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
        )}
      >
        ES
      </button>
    </div>
  );
};
