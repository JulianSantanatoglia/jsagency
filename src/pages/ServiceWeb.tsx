import { Link } from 'react-router-dom';
import { Globe, Check, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import PatternBackground from '../components/PatternBackground';
import Contact from '../components/Contact';

const ServiceWeb = () => {
  const includes = [
    'Webs corporativas y landing pages profesionales',
    'Diseño moderno, claro y adaptado a tu marca',
    'Carga rápida y buena experiencia en móvil y ordenador',
    'Preparadas para aparecer en Google',
    'Formularios de contacto, reservas y WhatsApp',
    'Hosting, alojamiento y dominio incluidos',
    'Seguridad SSL y protección de datos',
    'Mantenimiento y mejoras continuas'
  ];

  const idealFor = [
    'Empresas que necesitan presencia online profesional',
    'Negocios locales que quieren atraer más clientes',
    'Profesionales que necesitan mostrar su portfolio',
    'Startups que buscan validar su idea con una landing',
    'Negocios que quieren automatizar consultas y ventas'
  ];

  const packages = [
    {
      name: 'Start',
      price: 'Desde €1.200',
      features: [
        'Landing page de hasta 5 secciones',
        'Diseño responsive',
        'Formulario de contacto',
        'Hosting y dominio (primer año)',
        'SSL incluido'
      ],
      popular: false
    },
    {
      name: 'Growth',
      price: 'Desde €2.500',
      features: [
        'Sitio web de hasta 8 páginas',
        'Diseño responsive premium',
        'Formularios y reservas',
        'Integración WhatsApp',
        'SEO básico configurado',
        'Hosting y dominio (primer año)',
        'SSL y seguridad incluidos',
        '1 mes de mantenimiento'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: 'Desde €4.500',
      features: [
        'Sitio web completo personalizado',
        'Diseño responsive premium',
        'Múltiples formularios e integraciones',
        'Sistema de reservas/citas',
        'SEO técnico avanzado',
        'Optimización de performance',
        'Hosting y dominio (primer año)',
        'SSL, seguridad y backups',
        '3 meses de mantenimiento incluido'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F7] dark:bg-slate-900 relative">
      <PatternBackground opacity={0.04} />
      
      {/* Hero */}
      <section className="relative z-10 pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="up" delay={0}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/30 mb-6">
              <Globe size={32} className="text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-primary-dark dark:text-white tracking-tight">
              Desarrollo Web
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-body">
              Web moderna, rápida y pensada para conseguir clientes.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Qué incluye */}
      <section className="relative z-10 py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up" delay={0}>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-8 text-primary-dark dark:text-white">
              Qué incluye
            </h2>
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8">
              <ul className="space-y-4">
                {includes.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check size={20} className="text-accent-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300 font-body leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Ideal para */}
      <section className="relative z-10 py-16 px-4 md:px-8 bg-white dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up" delay={0}>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-8 text-primary-dark dark:text-white">
              Ideal para
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {idealFor.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-700 p-6"
                >
                  <p className="text-slate-700 dark:text-slate-300 font-body leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Principal */}
      <section className="relative z-10 py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="up" delay={0}>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-primary-dark dark:text-white">
              ¿Listo para empezar?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 font-body">
              Agendá una llamada gratuita para hablar de tu proyecto
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-cyan text-white rounded-2xl font-semibold text-lg hover:bg-cyan-500 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30"
            >
              Agendar llamada
              <ArrowRight size={20} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Paquetes recomendados */}
      <section className="relative z-10 py-16 px-4 md:px-8 bg-white dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" delay={0}>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-center text-primary-dark dark:text-white">
              Paquetes recomendados
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 text-center mb-12 font-body">
              Elegí el plan que mejor se adapte a tus necesidades
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative bg-white dark:bg-slate-800 rounded-2xl border-2 p-8 ${
                    pkg.popular
                      ? 'border-accent-cyan shadow-xl shadow-cyan-500/10'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent-cyan text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Más popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold font-display mb-2 text-primary-dark dark:text-white">
                    {pkg.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-primary-dark dark:text-white">{pkg.price}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check size={18} className="text-accent-cyan flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600 dark:text-slate-300 font-body text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`block w-full text-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-accent-cyan text-white hover:bg-cyan-500'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600'
                    }`}
                  >
                    Pedir presupuesto
                  </Link>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Servicio puntual */}
      <section className="relative z-10 py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up" delay={0}>
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-700 p-8">
              <h2 className="text-2xl font-bold font-display mb-4 text-primary-dark dark:text-white">
                Servicio puntual / a medida
              </h2>
              <p className="text-slate-700 dark:text-slate-300 font-body leading-relaxed mb-6">
                También lo hacemos por separado (según alcance).
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-cyan text-white rounded-xl font-semibold hover:bg-cyan-500 transition-all duration-300"
              >
                Consultar por proyecto personalizado
                <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <div className="relative z-10">
        <Contact />
      </div>
    </div>
  );
};

export default ServiceWeb;