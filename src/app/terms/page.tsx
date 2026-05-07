import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { COMPANY } from '@/constants/company';

export const metadata: Metadata = {
  title: 'Términos de Servicio',
  description: 'Términos y condiciones de uso del sitio web y servicios de ZENTRANR.',
  alternates: { canonical: '/terms' },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 lg:pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-8">
            Términos de Servicio
          </h1>
          <div className="prose prose-lg text-muted-foreground space-y-6">
            <p><strong>Última actualización:</strong> Mayo 2026</p>

            <h2 className="text-xl font-heading font-semibold text-foreground mt-8">1. Aceptación de los términos</h2>
            <p>
              Al acceder y utilizar el sitio web de {COMPANY.legalName} (RUC {COMPANY.ruc}), usted acepta estos términos y condiciones en su totalidad.
            </p>

            <h2 className="text-xl font-heading font-semibold text-foreground mt-8">2. Servicios</h2>
            <p>
              {COMPANY.name} ofrece servicios de consultoría tecnológica, desarrollo de software personalizado, implementación de sistemas y laboratorio de innovación. Los términos específicos de cada servicio se acuerdan mediante contrato individual.
            </p>

            <h2 className="text-xl font-heading font-semibold text-foreground mt-8">3. Propiedad intelectual</h2>
            <p>
              Todo el contenido de este sitio web, incluyendo textos, gráficos, logotipos y diseño, es propiedad de {COMPANY.legalName} y está protegido por las leyes de propiedad intelectual del Perú.
            </p>

            <h2 className="text-xl font-heading font-semibold text-foreground mt-8">4. Limitación de responsabilidad</h2>
            <p>
              La información proporcionada en este sitio web es de carácter informativo. {COMPANY.name} no garantiza la exactitud o completitud de la información presentada y no será responsable por daños derivados del uso de este sitio.
            </p>

            <h2 className="text-xl font-heading font-semibold text-foreground mt-8">5. Ley aplicable</h2>
            <p>
              Estos términos se rigen por las leyes de la República del Perú. Cualquier disputa será sometida a la jurisdicción de los tribunales competentes de Lima.
            </p>

            <h2 className="text-xl font-heading font-semibold text-foreground mt-8">6. Contacto</h2>
            <p>
              Para consultas sobre estos términos, contáctenos en:<br />
              Email: {COMPANY.contact.email}<br />
              Teléfono: {COMPANY.contact.phone}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
