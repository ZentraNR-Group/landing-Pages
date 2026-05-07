/**
 * Shared Organization schema for ZENTRANR.
 * Imported by page-level schema builders so the canonical
 * company identity block is defined in one place.
 */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://zentranr.com/#organization",
  "name": "ZENTRANR",
  "legalName": "ZENTRANR Corporate",
  "alternateName": "ZENTRANR",
  "url": "https://zentranr.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://zentranr.com/assets/logo.png",
    "width": 200,
    "height": 60
  },
  "image": "https://zentranr.com/assets/logo.png",
  "description": "Consultora tecnológica especializada en transformación digital, desarrollo de software personalizado y estrategia TI para empresas en Perú y Latinoamérica.",
  "foundingDate": "2025",
  "telephone": "+51930120687",
  "email": "contacto@zentranr.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jr. Pallka 1177",
    "addressLocality": "San Juan de Lurigancho",
    "addressRegion": "Lima",
    "postalCode": "15434",
    "addressCountry": "PE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -12.0048,
    "longitude": -76.9870
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "10:00",
      "closes": "14:00"
    }
  ],
  "areaServed": [
    {
      "@type": "Country",
      "name": "Peru"
    },
    {
      "@type": "Place",
      "name": "Latinoamérica"
    }
  ],
  "knowsAbout": [
    "Transformación Digital",
    "Desarrollo de Software",
    "Consultoría Tecnológica",
    "Inteligencia Artificial",
    "Arquitectura de Sistemas",
    "DevOps",
    "Cloud Computing"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios Tecnológicos ZENTRANR",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Desarrollo de Software Personalizado",
          "description": "Aplicaciones empresariales, plataformas web y soluciones móviles diseñadas específicamente para las necesidades de negocio del cliente.",
          "url": "https://zentranr.com/services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Consultoría y Estrategia TI",
          "description": "Servicios de consultoría estratégica para transformación digital, auditorías tecnológicas y optimización de sistemas empresariales.",
          "url": "https://zentranr.com/technology-consulting"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Implementación y Soporte",
          "description": "Gestión de proyectos, integración de sistemas y mantenimiento continuo con soporte técnico 24/7.",
          "url": "https://zentranr.com/services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Laboratorio de Innovación",
          "description": "Exploración de tecnologías emergentes: IA, Blockchain, IoT, Realidad Aumentada y computación en la nube avanzada.",
          "url": "https://zentranr.com/services"
        }
      }
    ]
  }
};
