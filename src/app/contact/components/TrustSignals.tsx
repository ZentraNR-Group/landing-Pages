import React from 'react';
import Icon from '@/components/ui/AppIcon';
import { COMPANY } from '@/constants/company';

interface Certification {
  id: string;
  name: string;
  icon: string;
  description: string;
}

interface TrustSignalsProps {
  className?: string;
}

const TrustSignals = ({ className = '' }: TrustSignalsProps) => {
  const certifications: Certification[] = [
    {
      id: '1',
      name: 'ISO 9001:2015',
      icon: 'ShieldCheckIcon',
      description: 'Certificación de Gestión de Calidad'
    },
    {
      id: '2',
      name: 'ISO 27001',
      icon: 'LockClosedIcon',
      description: 'Seguridad de la Información'
    },
    {
      id: '3',
      name: 'Microsoft Partner',
      icon: 'CheckBadgeIcon',
      description: 'Socio Certificado de Microsoft'
    },
    {
      id: '4',
      name: 'AWS Partner',
      icon: 'CloudIcon',
      description: 'Socio de Amazon Web Services'
    }
  ];

  const stats = [
    { value: '100%', label: 'Compromiso con la Calidad' },
    { value: '2025', label: 'Año de Fundación' }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
              Confianza Respaldada por Resultados
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Empresas líderes en Perú confían en ZENTRANR para sus transformaciones digitales.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border border-border text-center">
                <div className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-muted rounded-lg p-8 lg:p-12">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-8 text-center">
              Certificaciones y Asociaciones
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-card rounded-lg p-6 border border-border text-center hover:border-primary transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={cert.icon as any} size={32} variant="solid" className="text-primary" />
                  </div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Business Registration */}
          <div className="mt-12 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-lg p-8 border border-secondary/20">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Icon name="BuildingOfficeIcon" size={24} variant="solid" className="text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
                    Empresa Registrada en Perú
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    RUC: {COMPANY.ruc} | Registro Mercantil de Lima
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-success" />
                <span>Verificado y Certificado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;