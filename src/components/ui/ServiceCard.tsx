import React from 'react';
import {
  Camera,
  Network,
  ShieldAlert,
  KeyRound,
  Tv,
  Volume2,
  Projector,
  Check,
  ArrowRight,
} from 'lucide-react';
import { ServiceItem } from '../../types';
import { cn } from '../../lib/utils';

interface ServiceCardProps {
  service: ServiceItem;
  title: string;
  description: string;
  features: string[];
  primaryBadgeText?: string;
  onSelectService?: (serviceTitle: string) => void;
  ctaText?: string;
}

const iconMap: Record<string, React.ElementType> = {
  Camera,
  Network,
  ShieldAlert,
  KeyRound,
  Tv,
  Volume2,
  Projector,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  title,
  description,
  features,
  primaryBadgeText,
  onSelectService,
  ctaText = 'Request Service Quote',
}) => {
  const IconComponent = iconMap[service.icon] || Camera;

  return (
    <div
      className={cn(
        'group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl transition-all duration-300',
        'bg-[#0C1524] border',
        service.isPrimary
          ? 'border-[#00B9F2]/50 shadow-lg shadow-[#00B9F2]/10 ring-1 ring-[#00B9F2]/20'
          : 'border-slate-800 hover:border-slate-700 hover:bg-[#0E1A2E]'
      )}
    >
      <div>
        {/* Header row with Icon and optional core badge */}
        <div className="flex items-center justify-between mb-5">
          <div
            className={cn(
              'w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105',
              service.isPrimary
                ? 'bg-[#00B9F2]/15 text-[#00B9F2] ring-1 ring-[#00B9F2]/30'
                : 'bg-slate-800/80 text-slate-300 group-hover:text-[#00B9F2] group-hover:bg-[#00B9F2]/10'
            )}
          >
            <IconComponent className="w-6 h-6" />
          </div>

          {service.isPrimary && primaryBadgeText && (
            <span className="text-xs font-semibold tracking-wide text-[#00B9F2] uppercase">
              {primaryBadgeText}
            </span>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00B9F2] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-[#64748B] leading-relaxed mb-6">
          {description}
        </p>

        {/* Feature list */}
        <ul className="space-y-2.5 mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
              <Check className="w-4 h-4 text-[#00B9F2] shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Button */}
      <button
        type="button"
        onClick={() => onSelectService?.(title)}
        className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-300 bg-slate-900/60 border border-slate-800 hover:border-[#00B9F2]/40 hover:text-white hover:bg-[#142B49]/40 transition-all cursor-pointer"
      >
        <span>{ctaText}</span>
        <ArrowRight className="w-3.5 h-3.5 text-[#00B9F2] transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
};
