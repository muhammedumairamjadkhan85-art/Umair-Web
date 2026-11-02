export type PageId = 'home' | 'about' | 'services' | 'portfolio' | 'contact';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  iconName: string;
  shortDescription: string;
  fullDescription: string;
  businessBenefits: string[];
  keyFeatures: string[];
  targetAudience: string[];
  deliverables: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Business' | 'E-commerce' | 'Landing Page' | 'UI/UX' | 'Custom Web' | 'WordPress';
  shortDescription: string;
  fullDescription: string;
  clientBrief: string;
  designDecisions: string[];
  technologies: string[];
  deliverables: string[];
  imageUrl: string;
  isPlaceholderDemo: boolean;
  year: string;
  scope: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  activities: string[];
}

export interface ValueItem {
  title: string;
  description: string;
  iconName: string;
}

export interface SiteProfile {
  brandName: string;
  professionalTitle: string;
  businessCategory: string;
  targetAudience: string;
  location: string;
  availability: string;
  whatsappPlaceholder: string;
  emailPlaceholder: string;
  portraitImage: string;
  studioImage: string;
}
