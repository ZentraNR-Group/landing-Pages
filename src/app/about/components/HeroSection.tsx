import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`relative bg-gradient-to-br from-secondary via-primary to-accent py-16 lg:py-24 overflow-hidden ${className}`}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
            Somos ZENTRANR
          </h1>

          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Una consultora tecnológica fundada en 2025 en Lima, Perú.
            Ayudamos a empresas a resolver sus desafíos con tecnología que funciona.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <Icon name="CalendarIcon" size={16} variant="outline" />
              <span>Fundada en 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="MapPinIcon" size={16} variant="outline" />
              <span>Lima, Perú</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="BuildingOfficeIcon" size={16} variant="outline" />
              <span>RUC 20615150607</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
