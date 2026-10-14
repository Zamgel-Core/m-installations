import React from 'react';
import { cn } from '../../lib/utils';

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl',
        className
      )}
    >
      {kicker && (
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#00B9F2] mb-3">
          {kicker}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-4 [text-wrap:balance]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-[#64748B] leading-relaxed [text-wrap:balance]">
          {subtitle}
        </p>
      )}
    </div>
  );
};
