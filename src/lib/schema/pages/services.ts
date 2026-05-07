/**
 * Structured data for /services
 * FAQPage schema for the 10 FAQ items
 */

export const servicesFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo toma desarrollar una aplicación personalizada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El tiempo de desarrollo varía según la complejidad del proyecto. Una aplicación simple puede tomar 2-3 meses, mientras que sistemas empresariales complejos pueden requerir 6-12 meses. Utilizamos metodología ágil con entregas incrementales cada 2 semanas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué metodología de desarrollo utilizan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Utilizamos metodología ágil (Scrum) con sprints de 2 semanas. Esto permite entregas incrementales, adaptación continua a cambios y comunicación constante con el cliente."
      }
    },
    {
      "@type": "Question",
      "name": "¿Ofrecen soporte después del lanzamiento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, ofrecemos planes de soporte y mantenimiento continuo que incluyen monitoreo 24/7, actualizaciones de seguridad, corrección de errores, optimización de rendimiento y soporte técnico."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo garantizan la seguridad de los datos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Implementamos múltiples capas de seguridad: encriptación de datos en tránsito y reposo, autenticación multifactor, auditorías de seguridad regulares, cumplimiento de estándares internacionales (ISO 27001, GDPR), y pruebas de penetración periódicas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Pueden integrar sistemas existentes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutamente. Tenemos amplia experiencia en integración de sistemas legacy con tecnologías modernas. Utilizamos APIs, middleware y estrategias de migración gradual para garantizar continuidad operativa durante la transición."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué incluye el servicio de consultoría TI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nuestro servicio de consultoría incluye evaluación de madurez digital, análisis de brechas tecnológicas, diseño de arquitectura empresarial, desarrollo de hoja de ruta de transformación, y acompañamiento en implementación y gestión del cambio."
      }
    },
    {
      "@type": "Question",
      "name": "¿Trabajan con startups o solo con empresas grandes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trabajamos con organizaciones de todos los tamaños, desde startups hasta empresas Fortune 500. Adaptamos nuestros servicios y modelos de precios según el tamaño y necesidades específicas de cada cliente."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué tecnologías utilizan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Utilizamos un stack tecnológico moderno: React/Next.js para frontend, Node.js/Python para backend, PostgreSQL/MongoDB para bases de datos, AWS/Azure para cloud, y Docker/Kubernetes para DevOps."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo manejan los cambios en los requisitos durante el desarrollo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nuestra metodología ágil está diseñada para adaptarse a cambios. Evaluamos el impacto de cada cambio en alcance, tiempo y costo, y trabajamos con el cliente para priorizar y ajustar el plan de proyecto."
      }
    },
    {
      "@type": "Question",
      "name": "¿Ofrecen capacitación para usuarios finales?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, incluimos capacitación integral como parte de nuestros servicios. Esto incluye documentación detallada, sesiones de capacitación presenciales o virtuales, videos tutoriales, y soporte continuo durante la fase de adopción."
      }
    }
  ]
};
