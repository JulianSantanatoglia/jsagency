import { Link } from 'react-router-dom';
import { Video, Check, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import PatternBackground from '../components/PatternBackground';
import Contact from '../components/Contact';

const ServiceVirtualTours = () => {
  const includes = [
    'Captura 360° profesional con Insta360 X5',
    'Edición y procesamiento profesional',
    'Publicación en plataformas (MatterPort, Insta360)',
    'Integración en web y redes sociales',
    'QR codes para acceso directo',
    'CTAs optimizados para generar leads'
  ];

  const idealFor = [
    'Inmobiliarias que quieren mostrar propiedades',
    'Hoteles y hostelería para destacar espacios',
    'Salas de eventos y espacios comerciales',
    'Negocios que quieren diferenciarse',
    'Propietarios que buscan vender más rápido'
  ];

  const packages = [
    {
      name: 'Start',
      price: 'Desde €300',
      features: [
        'Tour 360 de 1 espacio',
        'Captura con Insta360 X5',
        'Edición básica',
        'Publicación en plataforma',
        'Enlace compartible'
      ],
      popular: false
    },
    {
      name: 'Growth',
      price: 'Desde €600',
      features: [
        'Tour 360 de hasta 5 espacios',
        'Captura profesional completa',
        'Edición avanzada',
        'Publicación en múltiples plataformas',
        'QR codes incluidos',
        'Integración en web',
        'CTAs optimizados'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: 'Desde €1.200',
      features: [
        'Tour 360 completo (ilimitado)',
        'Captura profesional con Insta360 X5',
        'Edición premium',
        'Publicación y hosting incluido',
        'QR codes y materiales de marketing',
        'Integración web completa',
        'CTAs y formularios integrados',
        'Soporte y actualizaciones'
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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-50 dark:bg-purple-900/30 mb-6">
              <Video size={32} className="text-purple-600 dark:text-purple-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-primary-dark dark:text-white tracking-tight">
              Recorridos 360
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-body">
              Mostrá tu espacio como si el cliente estuviera ahí.
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

export default ServiceVirtualTours;