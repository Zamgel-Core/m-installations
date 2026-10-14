import React from 'react';
import { Maximize2 } from 'lucide-react';
import { ProjectItem } from '../../types';
import { ProjectImage } from './ProjectImage';

interface ProjectCardProps {
  project: ProjectItem;
  title: string;
  description: string;
  onOpen: (project: ProjectItem) => void;
  viewDetailsText?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  title,
  description,
  onOpen,
  viewDetailsText = 'View Details',
}) => {
  return (
    <div
      onClick={() => onOpen(project)}
      className="group relative min-w-0 w-full flex flex-col overflow-hidden rounded-2xl bg-[#0C1524] border border-slate-800/80 hover:border-[#00B9F2]/50 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl hover:shadow-[#00B9F2]/5"
    >
      {/* Visual Canvas with automatic error fallback */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#080D16]">
        <ProjectImage
          src={project.image}
          alt={title}
          category={project.category}
          iconType={project.iconType}
          title={title}
        />

        {/* Hover overlay with action affordance */}
        <div className="absolute inset-0 bg-[#080D16]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs z-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00B9F2] text-[#080D16] text-xs font-bold shadow-lg">
            <Maximize2 className="w-3.5 h-3.5" />
            {viewDetailsText}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          {/* Zero-Pill metadata with dot separators */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#00B9F2] font-semibold mb-2">
            <span>{project.category.replace('-', ' & ').toUpperCase()}</span>
            {project.metrics && (
              <>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-slate-400 font-normal">{project.metrics}</span>
              </>
            )}
          </div>

          <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-[#00B9F2] transition-colors">
            {title}
          </h3>

          <p className="text-xs sm:text-sm text-[#64748B] line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
