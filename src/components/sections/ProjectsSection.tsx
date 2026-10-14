import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../ui/ProjectCard';
import { ProjectLightbox } from '../ui/ProjectLightbox';
import { projectsData } from '../../data/projects';
import { ProjectItem } from '../../types';
import { Dictionary } from '../../i18n';

interface ProjectsSectionProps {
  t: Dictionary;
}

type FilterCategory = 'all' | 'residential' | 'commercial' | 'cameras' | 'audio-displays';

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ t }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterOptions: { id: FilterCategory; label: string }[] = [
    { id: 'all', label: t.projects.filterAll },
    { id: 'residential', label: t.projects.filterResidential },
    { id: 'commercial', label: t.projects.filterCommercial },
    { id: 'cameras', label: t.projects.filterCameras },
    { id: 'audio-displays', label: t.projects.filterAudioDisplays },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'residential') return p.category === 'residential';
    if (activeFilter === 'commercial') return p.category === 'commercial';
    if (activeFilter === 'cameras') {
      return p.tags.includes('Security Cameras') || p.id === 'proj-1' || p.id === 'proj-2';
    }
    if (activeFilter === 'audio-displays') {
      return p.category === 'audio-displays' || p.tags.includes('Audio & Displays');
    }
    return true;
  });

  const getProjectTitle = (item: ProjectItem): string => {
    switch (item.id) {
      case 'proj-1':
        return t.projects.items.proj1Title;
      case 'proj-2':
        return t.projects.items.proj2Title;
      case 'proj-3':
        return t.projects.items.proj3Title;
      case 'proj-4':
        return t.projects.items.proj4Title;
      case 'proj-5':
        return t.projects.items.proj5Title;
      case 'proj-6':
        return t.projects.items.proj6Title;
      default:
        return item.id;
    }
  };

  const getProjectDesc = (item: ProjectItem): string => {
    switch (item.id) {
      case 'proj-1':
        return t.projects.items.proj1Desc;
      case 'proj-2':
        return t.projects.items.proj2Desc;
      case 'proj-3':
        return t.projects.items.proj3Desc;
      case 'proj-4':
        return t.projects.items.proj4Desc;
      case 'proj-5':
        return t.projects.items.proj5Desc;
      case 'proj-6':
        return t.projects.items.proj6Desc;
      default:
        return '';
    }
  };

  const handleNext = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProject(filteredProjects[prevIndex]);
  };

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#080D16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker={t.projects.kicker}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />

        {/* Filter Tabs (Segmented Button Control) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setActiveFilter(opt.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === opt.id
                  ? 'bg-[#00B9F2] text-[#080D16] shadow-md shadow-[#00B9F2]/20 font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid min-w-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              title={getProjectTitle(project)}
              description={getProjectDesc(project)}
              onOpen={(p) => setSelectedProject(p)}
              viewDetailsText={t.projects.viewProject}
            />
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedProject && (
          <ProjectLightbox
            isOpen={!!selectedProject}
            project={selectedProject}
            title={getProjectTitle(selectedProject)}
            description={getProjectDesc(selectedProject)}
            onClose={() => setSelectedProject(null)}
            onNext={handleNext}
            onPrev={handlePrev}
            closeLabel={t.projects.closeLightbox}
            nextLabel={t.projects.nextProject}
            prevLabel={t.projects.prevProject}
          />
        )}
      </div>
    </section>
  );
};
