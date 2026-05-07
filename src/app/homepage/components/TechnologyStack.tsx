import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface TechnologyStackProps {
  className?: string;
}

const differentiators = [
  {
    icon: "MapPinIcon",
    title: "Equipo en Lima",
    description: "Somos una empresa local. Nos reunimos con usted, entendemos su contexto y hablamos su idioma de negocios.",
  },
  {
    icon: "ArrowPathIcon",
    title: "Entregas cada 2 semanas",
    description: "Usamos metodología ágil. Usted ve avances reales cada sprint y puede dar feedback temprano.",
  },
  {
    icon: "ShieldCheckIcon",
    title: "Soporte después de entregar",
    description: "No desaparecemos. Damos mantenimiento, soporte técnico y acompañamos la evolución de su proyecto.",
  },
];

const TechnologyStack = ({ className = '' }: TechnologyStackProps) => {
  return (
    <section className={`py-16 lg:py-24 bg-muted ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            ¿Por qué trabajar con nosotros?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lo que nos diferencia es cómo trabajamos, no solo qué tecnologías usamos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Icon name={item.icon} size={32} variant="outline" className="text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tech stack resumido */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">Tecnologías que usamos</p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker', 'TypeScript'].map((tech) => (
              <span key={tech} className="px-3 py-1.5 bg-card border border-border rounded-md text-sm text-foreground font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
