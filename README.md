# ZENTRANR - Sitio Web Corporativo

Sitio web corporativo de ZENTRANR, consultora tecnologica especializada en transformacion digital, desarrollo de software personalizado y estrategia TI en Lima, Peru.

**URL:** https://zentranr.com

## Stack Tecnologico

- **Next.js 15** con App Router y static export
- **React 19** + TypeScript
- **Tailwind CSS 3** con configuracion personalizada
- **Deploy:** GitHub Pages via GitHub Actions

## Estructura del Proyecto

```
src/
├── app/
│   ├── page.tsx                    # Homepage (/)
│   ├── layout.tsx                  # Layout global (schemas, OG, WhatsApp)
│   ├── not-found.tsx               # Pagina 404
│   ├── about/                      # /about - Mision, valores, cultura
│   ├── contact/                    # /contact - Formulario, mapa, FAQ
│   ├── homepage/components/        # Componentes del homepage
│   ├── privacy/                    # /privacy - Politica de privacidad
│   ├── services/                   # /services - Servicios + FAQ
│   ├── technology-consulting/      # /technology-consulting
│   └── terms/                      # /terms - Terminos de servicio
├── components/
│   ├── common/
│   │   ├── Header.tsx              # Navegacion principal
│   │   ├── Footer.tsx              # Footer con links legales
│   │   └── WhatsAppButton.tsx      # Boton flotante de WhatsApp
│   ├── seo/
│   │   └── Breadcrumbs.tsx         # Breadcrumbs con schema JSON-LD
│   └── ui/
│       ├── AppIcon.tsx             # Wrapper de Heroicons
│       ├── AppImage.tsx            # Wrapper de imagenes
│       └── Logo.tsx                # Logo SVG reutilizable
├── constants/
│   └── company.ts                  # Datos centralizados de la empresa
├── lib/
│   └── schema/
│       ├── organization.ts         # JSON-LD Organization/ProfessionalService
│       ├── website.ts              # JSON-LD WebSite
│       └── pages/
│           ├── homepage.ts         # JSON-LD WebPage para /
│           ├── services.ts         # JSON-LD FAQPage (10 preguntas)
│           └── contact.ts          # JSON-LD ContactPage
└── styles/
    └── index.css                   # Estilos globales + Tailwind

public/
├── robots.txt                      # Reglas para crawlers (Google, AI bots)
├── sitemap.xml                     # Mapa del sitio (9 URLs)
├── llms.txt                        # Descripcion para AI search engines
├── favicon.ico
└── assets/images/
```

## Datos de la Empresa

Todos los datos de contacto estan centralizados en `src/constants/company.ts`:

- **Telefono:** +51 930 120 687
- **Email:** contacto@zentranr.com
- **RUC:** 20615150607
- **Direccion:** Jr. Pallka 1177, Mangomarca, San Juan de Lurigancho, Lima
- **Fundacion:** 2025

Para cambiar cualquier dato de contacto, solo editar `company.ts`.

## Scripts Disponibles

| Comando | Descripcion |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo (puerto 4028) |
| `npm run build` | Build de produccion (static export a `out/`) |
| `npm run lint` | Verificar calidad de codigo con ESLint |
| `npm run lint:fix` | Corregir errores de ESLint automaticamente |
| `npm run format` | Formatear codigo con Prettier |
| `npm run type-check` | Verificar tipos TypeScript |

## Deploy

El deploy es automatico via GitHub Actions al hacer push a `main`:

1. Instala dependencias
2. Ejecuta `npm run build`
3. Publica la carpeta `out/` a GitHub Pages (rama `gh-pages`)

Configurado en `.github/workflows/deploy.yml`.

## SEO Implementado

### Infraestructura
- [x] `robots.txt` con reglas para AI crawlers (GPTBot, ClaudeBot, PerplexityBot)
- [x] `sitemap.xml` con todas las URLs
- [x] `llms.txt` para AI search engines
- [x] Canonical tags en todas las paginas
- [x] Open Graph + Twitter Cards meta tags
- [x] Meta robots con directivas de Google (max-image-preview, max-snippet)
- [x] `metadataBase` configurado para URLs absolutas

### Structured Data (JSON-LD)
- [x] Organization / ProfessionalService (global)
- [x] WebSite con SearchAction (global)
- [x] FAQPage en /services (10 preguntas)
- [x] ContactPage en /contact
- [x] BreadcrumbList en todas las paginas internas

### UX / Conversion
- [x] Boton flotante de WhatsApp en todas las paginas
- [x] Breadcrumbs visuales + schema
- [x] Mapa de Google en /contact con direccion real
- [x] Paginas legales: /privacy y /terms
- [x] RUC y datos de empresa verificables en /contact

### Performance / Crawlability
- [x] Homepage en `/` (no redirect a `/homepage`)
- [x] HeroSection renderiza contenido sin esperar JS hydration
- [x] FAQ renderiza contenido inmediatamente (sin skeleton de carga)
- [x] `ignoreBuildErrors` y `ignoreDuringBuilds` en false
- [x] 0 errores y 0 warnings en ESLint
- [x] Static export para carga rapida

## Pendientes

### Alta Prioridad (requieren accion manual)
- [ ] **Google Search Console** - Registrar sitio y enviar sitemap
- [ ] **Google Analytics 4** - Crear cuenta, agregar tracking ID, configurar en layout
- [ ] **Google Business Profile** - Registrar ZENTRANR en Google Maps (Lima, SJL)
- [ ] **LinkedIn empresa** - Crear pagina y agregar URL al footer (`company.ts` social links)
- [ ] **OG Image** - Crear imagen 1200x630px para previews en redes sociales

### Media Prioridad (contenido)
- [ ] **Blog** - Crear seccion de articulos para keywords informacionales
  - Sugerido: "Que es la transformacion digital y como aplicarla en empresas peruanas"
  - Sugerido: "Desarrollo a medida vs software enlatado"
- [ ] **Casos de estudio** - Agregar al menos 3 (pueden ser anonimizados)
- [ ] **Equipo / Fundador** - Agregar bio con nombre real y LinkedIn en /about
- [ ] **Pagina `/consultoria-tecnologica-lima`** - URL dedicada para SEO local
- [ ] **Testimonios reales** - Agregar cuando esten disponibles

### Baja Prioridad (nice to have)
- [ ] Favicon avanzado (apple-touch-icon, manifest.json para PWA)
- [ ] Hreflang si se agrega version en ingles
- [ ] Service schema individual por cada servicio
- [ ] Convertir mas componentes CSR a server components
- [ ] Imagenes propias reemplazando stock de Unsplash/Pexels
