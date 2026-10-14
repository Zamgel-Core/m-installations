import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { ServiceCard } from '../ui/ServiceCard';
import { servicesData } from '../../data/services';
import { Dictionary } from '../../i18n';
import { scrollToSection } from '../../lib/utils';

interface ServicesSectionProps {
  t: Dictionary;
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  t,
  onSelectService,
}) => {
  const getServiceTitle = (id: string): string => {
    switch (id) {
      case 'security-cameras':
        return t.services.securityCameras.title;
      case 'network-cabling':
        return t.services.networkCabling.title;
      case 'alarm-systems':
        return t.services.alarmSystems.title;
      case 'access-control':
        return t.services.accessControl.title;
      case 'tv-mounting':
        return t.services.tvMounting.title;
      case 'audio-systems':
        return t.services.audioSystems.title;
      case 'projectors-digital':
        return t.services.projectorsDigital.title;
      default:
        return '';
    }
  };

  const getServiceDesc = (id: string): string => {
    switch (id) {
      case 'security-cameras':
        return t.services.securityCameras.description;
      case 'network-cabling':
        return t.services.networkCabling.description;
      case 'alarm-systems':
        return t.services.alarmSystems.description;
      case 'access-control':
        return t.services.accessControl.description;
      case 'tv-mounting':
        return t.services.tvMounting.description;
      case 'audio-systems':
        return t.services.audioSystems.description;
      case 'projectors-digital':
        return t.services.projectorsDigital.description;
      default:
        return '';
    }
  };

  const getServiceFeatures = (id: string): string[] => {
    switch (id) {
      case 'security-cameras':
        return t.services.securityCameras.features;
      case 'network-cabling':
        return t.services.networkCabling.features;
      case 'alarm-systems':
        return t.services.alarmSystems.features;
      case 'access-control':
        return t.services.accessControl.features;
      case 'tv-mounting':
        return t.services.tvMounting.features;
      case 'audio-systems':
        return t.services.audioSystems.features;
      case 'projectors-digital':
        return t.services.projectorsDigital.features;
      default:
        return [];
    }
  };

  const handleCardCta = (title: string) => {
    onSelectService(title);
    scrollToSection('#quote');
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#080D16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker={t.services.kicker}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              title={getServiceTitle(service.id)}
              description={getServiceDesc(service.id)}
              features={getServiceFeatures(service.id)}
              primaryBadgeText={t.services.primaryBadge}
              onSelectService={handleCardCta}
              ctaText={t.nav.quoteCta}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
