import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { COMPANY } from '@/constants/company';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad y protección de datos personales de ZENTRANR.',
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 lg:pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-8">
            Política de Privacidad
          </h1>
          <div className="prose prose-lg text-muted-foreground space-y-6">
            <p><strong>Última actualización:</strong> Mayo 2026</p>

            <h2 className="text-xl font-heading font-semibold text-foreground mt-8">1. Responsable del tratamiento</h2>
            <p>
              {COMPANY.legalName}, identificada con RUC {COMPANY.ruc}, con domicilio en {COMPANY.address.street}, {COMPANY.address.district}, {COMPANY.address.city}, {COMPANY.address.country}, es responsable del tratamiento de sus datos personales conforme a la Ley N° 29733, Ley de Protección de Datos Personales del Perú.
            </p>

            <h2 className="text-xl font-heading font-semibold text-foreground mt-8">2. Datos que recopilamos</h2>
            <p>Recopilamos los datos personales que usted nos proporciona voluntariamente a través de nuestros formularios de contacto:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nombre completo</li>
              <li>Correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Nombre de la empresa</li>
              <li>Mensaje o consulta</li>
            </ul>

            <h2 className="text-xl font-heading font-semibold text-foreground mt-8">3. Finalidad del tratamiento</h2>
            <p>Sus datos personales son utilizados para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder a sus consultas y solicitudes de información</li>
              <li>Programar consultas y reuniones</li>
              <li>Enviar información sobre nuestros servicios (con su consentimiento)</li>
              <li>Mejorar la calidad de nuestros servicios</li>
            </ul>

            <h2 className="text-xl font-heading font-semibold text-foreground mt-8">4. Derechos del titular</h2>
            <p>
              Usted tiene derecho a acceder, rectificar, cancelar y oponerse al tratamiento de sus datos personales (derechos ARCO). Para ejercer estos derechos, puede contactarnos en {COMPANY.contact.email}.
            </p>

            <h2 className="text-xl font-heading font-semibold text-foreground mt-8">5. Seguridad</h2>
            <p>
              Implementamos medidas técnicas y organizativas para proteger sus datos personales contra acceso no autorizado, pérdida o alteración.
            </p>

            <h2 className="text-xl font-heading font-semibold text-foreground mt-8">6. Contacto</h2>
            <p>
              Para consultas sobre esta política de privacidad, contáctenos en:<br />
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
