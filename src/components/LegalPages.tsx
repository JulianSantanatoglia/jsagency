import { useState } from 'react';
import { ArrowLeft, FileText, Shield, Cookie } from 'lucide-react';

interface LegalPageProps {
  onBack: () => void;
}

const TermsAndConditions = ({ onBack }: LegalPageProps) => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-accent-cyan hover:text-cyan-600 mb-8 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 rounded-lg px-2 py-1"
        >
          <ArrowLeft size={20} />
          Volver al sitio
        </button>
        
        <div className="flex items-center gap-3 mb-8">
          <FileText size={32} className="text-accent-cyan" />
          <h1 className="text-3xl md:text-4xl font-bold font-display text-primary-dark">
            Términos y Condiciones
          </h1>
        </div>
        
        <div className="prose prose-lg max-w-none font-body text-slate-700">
          <p className="text-sm text-slate-500 mb-8">
            Última actualización: 27 de enero de 2025
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-display text-primary-dark mb-4">1. Información General</h2>
            <p>
              Los presentes términos y condiciones regulan el uso del sitio web jsagency.com (en adelante, "el Sitio Web") 
              propiedad de .js agency (en adelante, "la Empresa"), con domicilio en Almería, España.
            </p>
            <p>
              Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos términos y condiciones. 
              Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro sitio web.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-display text-primary-dark mb-4">2. Servicios Ofrecidos</h2>
            <p>
              .js agency ofrece los siguientes servicios:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarrollo web y aplicaciones</li>
              <li>Diseño y branding</li>
              <li>Automatizaciones con inteligencia artificial</li>
              <li>Fotografía y video aéreo</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-display text-primary-dark mb-4">3. Uso del Sitio Web</h2>
            <p>
              Usted se compromete a utilizar el sitio web de manera responsable y conforme a la legislación aplicable. 
              Está prohibido:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Utilizar el sitio para fines ilegales o no autorizados</li>
              <li>Transmitir virus, malware o cualquier código malicioso</li>
              <li>Intentar acceder a áreas restringidas del sitio</li>
              <li>Reproducir, distribuir o modificar el contenido sin autorización</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-display text-primary-dark mb-4">4. Propiedad Intelectual</h2>
            <p>
              Todo el contenido del sitio web, incluyendo textos, imágenes, logotipos, diseños y código fuente, 
              es propiedad de .js agency y está protegido por las leyes de propiedad intelectual.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-display text-primary-dark mb-4">5. Limitación de Responsabilidad</h2>
            <p>
              .js agency no se hace responsable de los daños que puedan derivarse del uso del sitio web o de la 
              imposibilidad de acceder al mismo. El sitio se proporciona "tal como está" sin garantías de ningún tipo.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-display text-primary-dark mb-4">6. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. 
              Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-display text-primary-dark mb-4">7. Contacto</h2>
            <p>
              Para cualquier consulta relacionada con estos términos y condiciones, puede contactarnos en:
            </p>
            <p>
              Email: hola@jsagency.com<br />
              Ubicación: Almería, España
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

const PrivacyPolicy = ({ onBack }: LegalPageProps) => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-accent-cyan hover:text-cyan-600 mb-8 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 rounded-lg px-2 py-1"
        >
          <ArrowLeft size={20} />
          Volver al sitio
        </button>
        
        <div className="flex items-center gap-3 mb-8">
          <Shield size={32} className="text-accent-cyan" />
          <h1 className="text-3xl md:text-4xl font-bold font-display text-primary-dark">
            Política de Privacidad
          </h1>
        </div>
        
        <div className="prose prose-lg max-w-none font-body text-slate-700">
          <p className="text-sm text-slate-500 mb-8">
            Última actualización: 27 de enero de 2025
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-display text-primary-dark mb-4">1. Información que Recopilamos</h2>
            <p>
              Recopilamos información que usted nos proporciona directamente, como:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nombre y datos de contacto cuando nos envía un mensaje</li>
              <li>Información de navegación a través de cookies</li>
              <li>Datos de uso del sitio web</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-display text-primary-dark mb-4">2. Cómo Utilizamos su Información</h2>
            <p>
              Utilizamos la información recopilada para:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder a sus consultas y solicitudes</li>
              <li>Mejorar nuestros servicios y sitio web</li>
              <li>Enviar comunicaciones relacionadas con nuestros servicios</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-display text-primary-dark mb-4">3. Compartir Información</h2>
            <p>
              No vendemos, alquilamos ni compartimos su información personal con terceros, excepto:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cuando sea necesario para proporcionar nuestros servicios</li>
              <li>Para cumplir con obligaciones legales</li>
              <li>Con su consentimiento explícito</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-display text-primary-dark mb-4">4. Seguridad de los Datos</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información 
              personal contra acceso no autorizado, alteración, divulgación o destrucción.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-display text-primary-dark mb-4">5. Sus Derechos</h2>
            <p>
              De acuerdo con el RGPD, usted tiene derecho a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acceder a sus datos personales</li>
              <li>Rectificar datos inexactos</li>
              <li>Solicitar la eliminación de sus datos</li>
              <li>Limitar el procesamiento de sus datos</li>
              <li>Portabilidad de datos</li>
              <li>Oponerse al procesamiento</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-display text-primary-dark mb-4">6. Cookies</h2>
            <p>
              Utilizamos cookies para mejorar su experiencia en nuestro sitio web. 
              Para más información, consulte nuestra Política de Cookies.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-display text-primary-dark mb-4">7. Contacto</h2>
            <p>
              Para ejercer sus derechos o realizar consultas sobre esta política de privacidad:
            </p>
            <p>
              Email: hola@jsagency.com<br />
              Ubicación: Almería, España
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

const CookiePolicy = ({ onBack }: LegalPageProps) => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-accent-cyan hover:text-cyan-600 mb-8 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 rounded-lg px-2 py-1"
        >
          <ArrowLeft size={20} />
          Volver al sitio
        </button>
        
        <div className="flex items-center gap-3 mb-8">
          <Cookie size={32} className="text-accent-cyan" />
          <h1 className="text-3xl md:text-4xl font-bold font-display text-primary-dark">
            Política de Cookies
          </h1>
        </div>
        
        <div className="prose prose-lg max-w-none font-body text-slate-700">
          <p className="text-sm text-slate-500 mb-8">
            Última actualización: 27 de enero de 2025
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-display text-primary-dark mb-4">1. ¿Qué son las Cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web. 
              Nos ayudan a mejorar su experiencia de navegación y a entender cómo utiliza nuestro sitio.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-display text-primary-dark mb-4">2. Tipos de Cookies que Utilizamos</h2>
            
            <h3 className="text-xl font-semibold font-display text-primary-dark mb-3">Cookies Técnicas (Necesarias)</h3>
            <p>
              Estas cookies son esenciales para el funcionamiento del sitio web y no se pueden desactivar:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cookies de sesión para mantener su navegación</li>
              <li>Cookies de seguridad para proteger contra ataques</li>
              <li>Cookies de preferencias de idioma</li>
            </ul>
            
            <h3 className="text-xl font-semibold font-display text-primary-dark mb-3 mt-6">Cookies de Análisis</h3>
            <p>
              Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Google Analytics (si se implementa)</li>
              <li>Métricas de rendimiento del sitio</li>
              <li>Estadísticas de uso</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-display text-primary-dark mb-4">3. Gestión de Cookies</h2>
            <p>
              Puede controlar y gestionar las cookies de varias maneras:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Configuración de su navegador web</li>
              <li>Herramientas de gestión de cookies</li>
              <li>Configuración de privacidad del navegador</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-display text-primary-dark mb-4">4. Cookies de Terceros</h2>
            <p>
              Nuestro sitio puede contener cookies de terceros, como:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Google Fonts (para tipografías)</li>
              <li>Servicios de análisis web</li>
              <li>Redes sociales (si se integran)</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-display text-primary-dark mb-4">5. Duración de las Cookies</h2>
            <p>
              Las cookies pueden ser:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cookies de sesión:</strong> Se eliminan al cerrar el navegador</li>
              <li><strong>Cookies persistentes:</strong> Permanecen durante un tiempo determinado</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-display text-primary-dark mb-4">6. Contacto</h2>
            <p>
              Si tiene preguntas sobre nuestra política de cookies:
            </p>
            <p>
              Email: hola@jsagency.com<br />
              Ubicación: Almería, España
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

const LegalPages = () => {
  const [currentPage, setCurrentPage] = useState<'terms' | 'privacy' | 'cookies' | null>(null);

  if (currentPage === 'terms') {
    return <TermsAndConditions onBack={() => setCurrentPage(null)} />;
  }
  
  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={() => setCurrentPage(null)} />;
  }
  
  if (currentPage === 'cookies') {
    return <CookiePolicy onBack={() => setCurrentPage(null)} />;
  }

  return (
    <div className="min-h-screen bg-white py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold font-display text-primary-dark mb-8 text-center">
          Información Legal
        </h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          <button
            onClick={() => setCurrentPage('terms')}
            className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-accent-cyan hover:shadow-lg transition-all text-left focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2"
          >
            <FileText size={32} className="text-accent-cyan mb-4" />
            <h2 className="text-xl font-bold font-display text-primary-dark mb-2">
              Términos y Condiciones
            </h2>
            <p className="text-slate-600 font-body">
              Condiciones de uso del sitio web y servicios ofrecidos.
            </p>
          </button>
          
          <button
            onClick={() => setCurrentPage('privacy')}
            className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-accent-cyan hover:shadow-lg transition-all text-left focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2"
          >
            <Shield size={32} className="text-accent-cyan mb-4" />
            <h2 className="text-xl font-bold font-display text-primary-dark mb-2">
              Política de Privacidad
            </h2>
            <p className="text-slate-600 font-body">
              Cómo recopilamos, usamos y protegemos su información personal.
            </p>
          </button>
          
          <button
            onClick={() => setCurrentPage('cookies')}
            className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-accent-cyan hover:shadow-lg transition-all text-left focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2"
          >
            <Cookie size={32} className="text-accent-cyan mb-4" />
            <h2 className="text-xl font-bold font-display text-primary-dark mb-2">
              Política de Cookies
            </h2>
            <p className="text-slate-600 font-body">
              Información sobre el uso de cookies en nuestro sitio web.
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalPages;
