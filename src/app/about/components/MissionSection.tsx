import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface MissionSectionProps {
  className?: string;
}

const MissionSection = ({ className = '' }: MissionSectionProps) => {
  const pillars = [
    {
      icon: "LightBulbIcon",
      title: "Entendemos su negocio primero",
      description: "Antes de escribir una línea de código, nos sentamos a entender su empresa, sus procesos y sus objetivos. La tecnología correcta nace de entender el problema real."
    },
    {
      icon: "CodeBracketIcon",
      title: "Construimos soluciones que duran",
      description: "No hacemos parches. Diseñamos sistemas escalables con tecnologías probadas que crecen con su empresa y se mantienen fácilmente a largo plazo."
    },
    {
      icon: "UserGroupIcon",
      title: "Somos su equipo tecnológico",
      description: "Trabajamos como una extensión de su empresa. Comunicación directa, entregas frecuentes y transparencia total en cada etapa del proyecto."
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        {/* Misión */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
            Nuestra Misión
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hacer que la tecnología sea accesible y útil para empresas de todos los tamaños.
            No vendemos complejidad, resolvemos problemas reales con soluciones claras y efectivas.
          </p>
        </div>

        {/* Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-8 border border-border"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                <Icon name={pillar.icon} size={28} variant="outline" className="text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Cómo trabajamos */}
        <div className="bg-muted rounded-lg p-8 lg:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
              Cómo trabajamos
            </h3>
            <p className="text-muted-foreground">
              Nuestro proceso es simple y transparente
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Conversamos", desc: "Entendemos qué necesita" },
              { step: "2", title: "Proponemos", desc: "Le presentamos un plan claro" },
              { step: "3", title: "Construimos", desc: "Entregas cada 2 semanas" },
              { step: "4", title: "Acompañamos", desc: "Soporte y evolución continua" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-heading font-bold text-lg mx-auto mb-3">
                  {item.step}
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md font-heading font-semibold transition-all duration-300 hover:bg-primary/90 active:scale-95"
            >
              Iniciar conversación
              <Icon name="ArrowRightIcon" size={16} variant="outline" className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
