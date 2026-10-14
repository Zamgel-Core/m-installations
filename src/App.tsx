import { useState } from 'react';
import { useLanguage } from './hooks/useLanguage';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { TrustSection } from './components/sections/TrustSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ResidentialSection } from './components/sections/ResidentialSection';
import { CommercialSection } from './components/sections/CommercialSection';
import { TechnologySection } from './components/sections/TechnologySection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { AboutSection } from './components/sections/AboutSection';
import { FAQSection } from './components/sections/FAQSection';
import { ContactSection } from './components/sections/ContactSection';
import { MobileStickyBar } from './components/ui/MobileStickyBar';
import { scrollToSection } from './lib/utils';
import { PropertyType } from './types';

export default function App() {
  const { language, setLanguage, t } = useLanguage();
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedPropertyType, setSelectedPropertyType] = useState<PropertyType>('residential');

  const handleOpenQuote = (service?: string, propertyType?: PropertyType) => {
    if (service) setSelectedService(service);
    if (propertyType) setSelectedPropertyType(propertyType);
    scrollToSection('#quote');
  };

  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-[#080D16] text-[#F5F7FA] flex flex-col font-sans selection:bg-[#00B9F2]/30 selection:text-[#00B9F2] pb-16 lg:pb-0">
      {/* Sticky Header with 3-Zone contract & Language Switcher */}
      <Header
        t={t}
        language={language}
        onSelectLanguage={setLanguage}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Main Content Stream */}
      <main className="flex-grow min-w-0 w-full">
        <HeroSection
          t={t}
          onRequestQuote={() => handleOpenQuote()}
        />

        <TrustSection t={t} />

        <ServicesSection
          t={t}
          onSelectService={(serviceTitle) => handleOpenQuote(serviceTitle)}
        />

        <ResidentialSection
          t={t}
          onSelectPropertyType={(propType) => handleOpenQuote(undefined, propType)}
        />

        <CommercialSection
          t={t}
          onSelectPropertyType={(propType) => handleOpenQuote(undefined, propType)}
        />

        <TechnologySection t={t} />

        <ProjectsSection t={t} />

        <ProcessSection t={t} />

        <AboutSection t={t} />

        <FAQSection t={t} />

        <ContactSection
          t={t}
          language={language}
          preselectedService={selectedService}
          preselectedPropertyType={selectedPropertyType}
        />
      </main>

      {/* Corporate Dark Footer */}
      <Footer t={t} />

      {/* Mobile Sticky CTA Bar */}
      <MobileStickyBar
        t={t}
        onOpenQuote={() => handleOpenQuote()}
      />
    </div>
  );
}
