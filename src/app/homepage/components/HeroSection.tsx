import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import ParticleBackground from '@/components/ui/ParticleBackground';
import { COMPANY } from '@/constants/company';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`relative bg-gradient-to-br from-[#001a3d] via-secondary to-primary min-h-[85vh] flex flex-col justify-center overflow-hidden ${className}`}>
      {/* Particle Background */}
      <ParticleBackground
        particleCount={90}
        particleColor={[255, 255, 255]}
        lineColor={[0, 198, 255]}
        maxDistance={130}
        mouseRadius={160}
      />

      <div className="container mx-auto px-4 py-16 lg:py-20 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span className="text-white/70 text-sm font-medium">Consultoría Tecnológica & Desarrollo de Software</span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
            Convertimos sus ideas en
            <span className="text-accent"> soluciones digitales</span> que funcionan
          </h1>

          {/* Subtítulo */}
          <p className="text-base lg:text-lg text-white/70 mb-10 leading-relaxed max-w-2xl">
            Somos su equipo de tecnología. Diseñamos, desarrollamos e implementamos
            software a medida para empresas que buscan eficiencia y crecimiento real.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-accent text-accent-foreground rounded-md font-heading font-semibold text-sm transition-all duration-300 hover:bg-accent/90 hover:shadow-lg active:scale-[0.98]"
            >
              Agendar consulta gratuita
              <Icon name="ArrowRightIcon" size={16} variant="outline" className="ml-2" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white/5 border border-white/20 text-white rounded-md font-heading font-semibold text-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30"
            >
              Ver servicios
            </Link>
          </div>

          {/* Contacto rápido */}
          <div className="flex flex-wrap items-center gap-5 text-white/50 text-sm">
            <a href={COMPANY.contact.phoneHref} className="inline-flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Icon name="PhoneIcon" size={14} variant="outline" />
              {COMPANY.contact.phone}
            </a>
            <a href={COMPANY.contact.emailHref} className="inline-flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Icon name="EnvelopeIcon" size={14} variant="outline" />
              {COMPANY.contact.email}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;
