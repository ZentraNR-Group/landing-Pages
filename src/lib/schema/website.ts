/**
 * WebSite schema with Sitelinks Searchbox.
 * Injected globally in the root layout.
 */

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://zentranr.com/#website",
  "url": "https://zentranr.com",
  "name": "ZENTRANR",
  "description": "Consultora tecnológica especializada en transformación digital y desarrollo de software en Lima, Perú.",
  "inLanguage": "es",
  "publisher": {
    "@id": "https://zentranr.com/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://zentranr.com/?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};
