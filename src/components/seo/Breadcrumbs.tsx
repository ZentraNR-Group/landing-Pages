import React from 'react';
import Link from 'next/link';
import Script from 'next/script';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const SITE_URL = 'https://zentranr.com';

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ name: 'Inicio', href: '/' }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": allItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${SITE_URL}${item.href === '/' ? '' : item.href}`,
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="container mx-auto px-4 pt-20 lg:pt-24 pb-2">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
          {allItems.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && <span className="mx-2">/</span>}
              {index === allItems.length - 1 ? (
                <span className="text-foreground font-medium">{item.name}</span>
              ) : (
                <Link href={item.href} className="hover:text-primary transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <Script
        id={`breadcrumb-${items[items.length - 1]?.href || 'home'}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
