import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
  link: string;
  color: string;
}

interface ServicesPreviewProps {
  className?: string;
}

const services: Service[] = [
  {
    title: "Desarrollo de Software a Medida",
    description: "Creamos aplicaciones web, móviles y empresariales adaptadas a lo que su negocio realmente necesita.",
    icon: "CodeBracketSquareIcon",
    features: [
      "Aplicaciones web y móviles",
      "Sistemas empresariales",
      "Integración con sistemas existentes",
      "Mantenimiento y evolución"
    ],
    link: "/services",
    color: "from-primary to-accent"
  },
  {
    title: "Consultoría en Transformación Digital",
    description: "Le ayudamos a identificar qué tecnología necesita su empresa y cómo implementarla paso a paso.",
    icon: "LightBulbIcon",
    features: [
      "Diagnóstico tecnológico",
      "Plan de transformación digital",
      "Optimización de procesos",
      "Acompañamiento continuo"
    ],
    link: "/technology-consulting",
    color: "from-secondary to-primary"
  },
  {
    title: "Implementación y Soporte",
    description: "No solo entregamos el proyecto: lo implementamos, capacitamos a su equipo y damos soporte continuo.",
    icon: "WrenchScrewdriverIcon",
    features: [
      "Gestión de proyectos ágil",
      "Migración de datos segura",
      "Capacitación de usuarios",
      "Soporte técnico continuo"
    ],
    link: "/services",
    color: "from-accent to-primary"
  },
  {
    title: "Innovación y Tecnologías Emergentes",
    description: "Exploramos nuevas tecnologías para encontrar la mejor solución a los desafíos de su negocio.",
    icon: "BeakerIcon",
    features: [
      "Inteligencia Artificial",
      "Cloud Computing",
      "Automatización de procesos",
      "Pruebas de concepto"
    ],
    link: "/services",
    color: "from-primary to-secondary"
  }
];

const ServicesPreview = ({ className = '' }: ServicesPreviewProps) => {
  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            ¿Qué hacemos?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones tecnológicas completas para empresas que quieren modernizarse y crecer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="group bg-card rounded-lg border border-border p-8 hover:border-primary hover:shadow-brand transition-all duration-300"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${service.color} rounded-lg mb-5`}>
                <Icon name={service.icon} size={28} variant="outline" className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-5">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <Icon name="CheckIcon" size={16} variant="outline" className="text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <span className="inline-flex items-center text-primary font-heading font-semibold text-sm group-hover:gap-2 transition-all">
                Conocer más
                <Icon name="ArrowRightIcon" size={16} variant="outline" className="ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
