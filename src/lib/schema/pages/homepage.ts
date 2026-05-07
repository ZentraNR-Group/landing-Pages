/**
 * Structured data for / (homepage)
 *
 * Types used:
 * - WebPage
 * - BreadcrumbList
 * (Organization and WebSite are injected at root layout level)
 */

export const homepageWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://zentranr.com#webpage",
  "url": "https://zentranr.com",
  "name": "ZENTRANR - Transformación Digital y Consultoría Tecnológica Empresarial",
  "description": "Socios estratégicos en transformación digital. Desarrollo de software personalizado, consultoría tecnológica y soluciones empresariales que generan resultados medibles.",
  "inLanguage": "es",
  "isPartOf": {
    "@id": "https://zentranr.com/#website"
  },
  "about": {
    "@id": "https://zentranr.com/#organization"
  },
  "breadcrumb": {
    "@id": "https://zentranr.com#breadcrumb"
  }
};

export const homepageBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://zentranr.com#breadcrumb",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://zentranr.com"
    }
  ]
};
