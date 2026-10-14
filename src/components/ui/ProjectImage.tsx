import React, { useState } from 'react';
import {
  Camera,
  Shield,
  Tv,
  Network,
  Volume2,
  KeyRound,
  Eye,
} from 'lucide-react';
import { cn } from '../../lib/utils';

interface ProjectImageProps {
  src: string;
  alt: string;
  category: string;
  iconType?: string;
  title: string;
  className?: string;
  isLightbox?: boolean;
}

export const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  alt,
  category,
  iconType,
  title,
  className = '',
  isLightbox = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const getIcon = () => {
    switch (iconType) {
      case 'residential-camera':
        return Shield;
      case 'tv':
        return Tv;
      case 'network':
        return Network;
      case 'audio':
        return Volume2;
      case 'access':
        return KeyRound;
      case 'camera':
      default:
        return Camera;
    }
  };

  const IconComponent = getIcon();

  // If there's an image error or no src provided, render the elegant CSS placeholder
  const renderPlaceholder = () => (
    <div
      className={cn(
        'relative w-full h-full flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden',
        'bg-gradient-to-br from-[#0F1D33] via-[#0A1424] to-[#060A12]',
        isLightbox ? 'min-h-[340px] max-h-[60vh]' : 'aspect-[4/3]'
      )}
    >
      {/* Background Tech Grid & Radial Glow */}
      <div className="absolute inset-0 tech-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-[#00B9F2]/10 via-transparent to-transparent pointer-events-none" />

      {/* Subtle Concentric Sensor Reticle Lines */}
      <div className="absolute w-44 h-44 rounded-full border border-[#00B9F2]/15 pointer-events-none" />
      <div className="absolute w-28 h-28 rounded-full border border-dashed border-[#00B9F2]/25 pointer-events-none" />

      {/* Precision Corner Brackets */}
      <div className="absolute top-3 left-3 w-3.5 h-3.5 border-t-2 border-l-2 border-[#00B9F2]/40" />
      <div className="absolute top-3 right-3 w-3.5 h-3.5 border-t-2 border-r-2 border-[#00B9F2]/40" />
      <div className="absolute bottom-3 left-3 w-3.5 h-3.5 border-b-2 border-l-2 border-[#00B9F2]/40" />
      <div className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b-2 border-r-2 border-[#00B9F2]/40" />

      {/* Center Icon Badge with Glow */}
      <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#080D16]/90 border border-[#00B9F2]/40 flex items-center justify-center text-[#00B9F2] shadow-xl shadow-[#00B9F2]/10 mb-3 group-hover:scale-110 transition-transform duration-300">
        <IconComponent className="w-8 h-8" />
      </div>

      {/* Category & Title */}
      <div className="relative z-10 max-w-[85%] space-y-1">
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#00B9F2] block">
          {category.replace('-', ' & ')}
        </span>
        <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-1">
          {title}
        </h4>
        <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 pt-1">
          <Eye className="w-3 h-3 text-[#00B9F2]" />
          <span>M Installations · Houston</span>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden bg-[#080D16]',
        isLightbox ? 'w-full h-full' : 'aspect-[4/3]',
        className
      )}
    >
      {/* If error occurred, immediately display CSS placeholder */}
      {hasError || !src ? (
        renderPlaceholder()
      ) : (
        <>
          {/* Underlying placeholder while image loads */}
          {!isLoaded && renderPlaceholder()}

          {/* Actual Project Image */}
          <img
            src={src}
            alt={alt}
            loading={isLightbox ? 'eager' : 'lazy'}
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={cn(
              'w-full h-full object-cover transition-all duration-500',
              isLightbox ? 'max-h-[60vh] object-contain' : 'object-cover',
              isLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
            )}
          />
        </>
      )}
    </div>
  );
};
