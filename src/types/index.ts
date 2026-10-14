export type Language = 'en' | 'es';

export type PropertyType = 'residential' | 'commercial';

export interface ServiceItem {
  id: string;
  titleKey: string;
  descriptionKey: string;
  featuresKey: string[];
  icon: string;
  isPrimary?: boolean;
}

export interface ProjectItem {
  id: string;
  titleKey: string;
  category: 'residential' | 'commercial' | 'cameras' | 'audio-displays';
  descriptionKey: string;
  image: string;
  tags: string[];
  metrics?: string;
  iconType?: 'camera' | 'residential-camera' | 'tv' | 'network' | 'audio' | 'access';
}

export interface FAQItem {
  id: string;
  questionKey: string;
  answerKey: string;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email?: string;
  serviceType: string;
  propertyType: PropertyType;
  areaOrZip: string;
  projectDescription: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  email: string;
  facebookUrl: string;
  location: string;
  experienceYears: number;
  companyYears: number;
  logo: {
    svg: string;
    png: string;
    alt: string;
  };
}
