import React from 'react';
import { PageId, ServiceItem, ProjectItem } from '../types';
import { HeroSection } from '../components/HeroSection';
import { AboutPreview } from '../components/AboutPreview';
import { ServicesSection } from '../components/ServicesSection';
import { PortfolioShowcase } from '../components/PortfolioShowcase';
import { WhyWorkWithMe } from '../components/WhyWorkWithMe';
import { WorkProcess } from '../components/WorkProcess';
import { CTASection } from '../components/CTASection';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectService: (service: ServiceItem) => void;
  onSelectProject: (project: ProjectItem) => void;
  onOpenLetstalk: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectService,
  onSelectProject,
  onOpenLetstalk,
}) => {
  return (
    <div className="flex flex-col">
      <HeroSection
        onNavigate={onNavigate}
        onOpenLetstalk={onOpenLetstalk}
      />
      <AboutPreview onNavigate={onNavigate} />
      <ServicesSection
        onNavigate={onNavigate}
        onSelectService={onSelectService}
      />
      <PortfolioShowcase
        onSelectProject={onSelectProject}
        onNavigate={onNavigate}
      />
      <WhyWorkWithMe />
      <WorkProcess />
      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
