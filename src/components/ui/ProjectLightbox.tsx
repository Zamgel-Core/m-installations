import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectItem } from '../../types';
import { ProjectImage } from './ProjectImage';

interface ProjectLightboxProps {
  project: ProjectItem | null;
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  closeLabel?: string;
  nextLabel?: string;
  prevLabel?: string;
}

export const ProjectLightbox: React.FC<ProjectLightboxProps> = ({
  project,
  title,
  description,
  isOpen,
  onClose,
  onNext,
  onPrev,
  closeLabel = 'Close',
  nextLabel = 'Next',
  prevLabel = 'Previous',
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
    >
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Lightbox container */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-[#0C1524] border border-slate-800 shadow-2xl overflow-hidden">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#080D16]/80">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#00B9F2] font-semibold">
              {project.category.replace('-', ' & ')}
            </span>
            <h3 className="text-lg font-bold text-white mt-0.5">{title}</h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={closeLabel}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Frame */}
        <div className="relative flex-grow flex items-center justify-center bg-black/60 min-h-[300px] max-h-[60vh] overflow-hidden">
          <ProjectImage
            src={project.image}
            alt={title}
            category={project.category}
            iconType={project.iconType}
            title={title}
            isLightbox={true}
          />

          {/* Navigation Controls */}
          <button
            type="button"
            onClick={onPrev}
            aria-label={prevLabel}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#080D16]/80 text-white hover:bg-[#00B9F2] hover:text-[#080D16] border border-slate-700 transition-all cursor-pointer shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={onNext}
            aria-label={nextLabel}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#080D16]/80 text-white hover:bg-[#00B9F2] hover:text-[#080D16] border border-slate-700 transition-all cursor-pointer shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Caption & Details Footer */}
        <div className="p-6 bg-[#0C1524] border-t border-slate-800">
          <p className="text-sm text-slate-300 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
