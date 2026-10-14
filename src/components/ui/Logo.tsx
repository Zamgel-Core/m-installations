import React from 'react';
import { siteConfig } from '../../config/site';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const sizeMap = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official circular logo with contrast ring for high legibility */}
      <div
        className={`relative ${sizeMap[size]} rounded-full overflow-hidden shrink-0 ring-1 ring-[#00B9F2]/30 shadow-md transition-transform duration-200 hover:scale-105 bg-[#080D16]`}
      >
        <img
          src={siteConfig.logo.svg}
          alt={siteConfig.logo.alt}
          className="w-full h-full object-contain"
          loading="eager"
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="text-base sm:text-lg font-extrabold tracking-tight text-white leading-none">
            M <span className="text-[#00B9F2]">INSTALLATIONS</span>
          </span>
          <span className="text-[10px] tracking-wider uppercase text-[#64748B] font-medium mt-1">
            Houston, TX
          </span>
        </div>
      )}
    </div>
  );
};
