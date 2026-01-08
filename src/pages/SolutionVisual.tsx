import { Link } from 'react-router-dom';
import { Video, Camera, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import PatternBackground from '../components/PatternBackground';
import Contact from '../components/Contact';

const SolutionVisual = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F7] dark:bg-slate-900 relative">
      <PatternBackground opacity={0.03} />
      
      {/* Hero */}
      <section className="relative pt-24 pb-16 px-4 md:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" delay={0}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-50 dark:bg-purple-900/30 mb-6">
                <Video size={32} className="text-purple-600 dark:text-purple-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-primary-dark dark:text-white tracking-tight">
                Visual 360 + Drone
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-body font-light leading-relaxed">
                Paquete visual completo para inmobiliarias, hostelería y marcas. Tours 360° y contenido aéreo profesional.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">
                (Fhoto by .js agency)
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Qué incluye */}
      <section className="relative py-16 px-4 md:px-8 z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up" delay={0}>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-8 text-primary-dark dark:text-white">
              Qué incluye
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Video className="text-purple-600 dark:text-purple-400" size={24} />
                  <h3 className="text-xl font-bold font-display text-primary-dark dark:text-white">
                    Tours Virtuales 360°
                  </h3>
                </div>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300 font-body text-sm">
                  <li>• Captura profesional con Insta360 X5</li>
                  <li>• Integración MatterPort</li>
                  <li>• QR codes y enlaces compartibles</li>
                  <li>• Integración en web</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Camera className="text-orange-600 dark:text-orange-400" size={24} />
                  <h3 className="text-xl font-bold font-display text-primary-dark dark:text-white">
                    Servicios de Drone
                  </h3>
                </div>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300 font-body text-sm">
                  <li>• Fotografía y video aéreo</li>
                  <li>• Operación certificada A1/A3</li>
                  <li>• Edición profesional</li>
                  <li>• Contenido para redes sociales</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Ideal para */}
      <section className="relative py-16 px-4 md:px-8 z-10 bg-white dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up" delay={0}>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-8 text-primary-dark dark:text-white">
              Ideal para
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
                <h3 className="font-bold mb-2 text-primary-dark dark:text-white">Inmobiliarias</h3>
                <p className="text-slate-600 dark:text-slate-300 font-body text-sm">
                  Mostrá propiedades con tours inmersivos y vistas aéreas impactantes.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
                <h3 className="font-bold mb-2 text-primary-dark dark:text-white">Hostelería</h3>
                <p className="text-slate-600 dark:text-slate-300 font-body text-sm">
                  Destacá espacios, ubicación y ambiente con contenido visual profesional.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
                <h3 className="font-bold mb-2 text-primary-dark dark:text-white">Marcas</h3>
                <p className="text-slate-600 dark:text-slate-300 font-body text-sm">
                  Elevá tu presencia con contenido visual único para redes y marketing.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 px-4 md:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="up" delay={0}>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-primary-dark dark:text-white">
              ¿Necesitás contenido visual profesional?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 font-body">
              Combinamos tours 360° y servicios de drone para crear paquetes personalizados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services/virtual-tours"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-accent-cyan border-2 border-accent-cyan rounded-2xl font-semibold text-lg hover:bg-accent-cyan hover:text-white transition-all duration-300"
              >
                Ver Tours 360°
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/services/drone"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-accent-cyan border-2 border-accent-cyan rounded-2xl font-semibold text-lg hover:bg-accent-cyan hover:text-white transition-all duration-300"
              >
                Ver Servicios Drone
                <ArrowRight size={20} />
              </Link>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-cyan text-white rounded-2xl font-semibold text-lg hover:bg-cyan-500 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 mt-6"
            >
              Consultar por paquete completo
              <ArrowRight size={20} />
            </Link>
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

export default SolutionVisual;