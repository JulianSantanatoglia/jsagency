import { useState } from 'react';
import { Video, Camera, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProcessSection from '../components/ProcessSection';
import FAQSection from '../components/FAQSection';
import ContactForm from '../components/ContactForm';
import ScrollReveal from '../components/ScrollReveal';
import PatternBackground from '../components/PatternBackground';

const Fhoto = () => {
  const [activeService, setActiveService] = useState<'tours' | 'drone'>('tours');

  const services = {
    tours: {
      title: 'Recorridos 360',
      description: 'Tours virtuales inmersivos para vender propiedades y llenar reservas.',
      bullets: [
        'Captura 360° con Insta360 X5',
        'Edición y procesamiento profesional',
        'Publicación en plataformas (Matterport/Insta360)',
        'Integración en web y redes sociales',
        'QR codes para acceso directo',
        'CTAs optimizados para generar leads',
        'Experiencia responsive en todos los dispositivos'
      ],
      icon: Video,
      color: 'purple'
    },
    drone: {
      title: 'Contenido Aéreo',
      description: 'Fotografía y video aéreo profesional para destacar tu negocio.',
      bullets: [
        'Fotografía aérea inmobiliaria',
        'Videos corporativos con drones',
        'Reels y contenido para redes sociales',
        'Cobertura de propiedades, hoteles, obras y eventos',
        'Edición lista para publicar',
        'Operación certificada A1/A3',
        'Múltiples formatos de entrega'
      ],
      icon: Camera,
      color: 'orange'
    }
  };

  const activeServiceData = services[activeService];

  return (
    <div className="relative min-h-screen bg-black text-white">
      <PatternBackground dark={true} opacity={0.06} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 md:px-8 -mb-12">
        <div className="relative z-10 max-w-7xl mx-auto">
          <ScrollReveal direction="up" delay={0}>
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6 text-white tracking-tight">
                Recorridos 360 y contenido aéreo
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 font-body leading-relaxed">
                Soluciones visuales premium para inmobiliarias, hostelería y negocios que buscan destacar con contenido inmersivo y profesional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contacto"
                  className="px-8 py-4 bg-accent-cyan text-white rounded-2xl font-semibold text-lg tracking-wide hover:bg-cyan-500 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30"
                >
                  Quiero un presupuesto
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="relative py-24 md:py-32 px-4 md:px-8 -mt-12">
        <div className="relative z-10 max-w-7xl mx-auto">
          <ScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-white">
                Nuestros Servicios
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto font-body">
                Dos servicios especializados para elevar tu presencia visual
              </p>
            </div>
          </ScrollReveal>

          {/* Service Tabs */}
          <ScrollReveal direction="up" delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 mb-12 max-w-2xl mx-auto justify-center">
              <button
                onClick={() => setActiveService('tours')}
                className={`flex items-center justify-center gap-3 px-8 py-4 rounded-xl transition-all duration-300 font-medium ${
                  activeService === 'tours'
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-slate-900/50 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Video size={20} />
                <span>Recorridos 360</span>
              </button>
              <button
                onClick={() => setActiveService('drone')}
                className={`flex items-center justify-center gap-3 px-8 py-4 rounded-xl transition-all duration-300 font-medium ${
                  activeService === 'drone'
                    ? 'bg-orange-600 text-white shadow-lg shadow-orange-500/30'
                    : 'bg-slate-900/50 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Camera size={20} />
                <span>Contenido Aéreo</span>
              </button>
            </div>
          </ScrollReveal>

          {/* Active Service Content */}
          <ScrollReveal direction="up" delay={300}>
            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800/50 p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${
                    activeServiceData.color === 'purple' 
                      ? 'from-purple-500 to-purple-600' 
                      : 'from-orange-500 to-orange-600'
                  } rounded-xl flex items-center justify-center`}>
                    <activeServiceData.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold font-display text-white mb-2">
                      {activeServiceData.title}
                    </h3>
                    <p className="text-slate-300 font-body">
                      {activeServiceData.description}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-4 mt-8">
                  {activeServiceData.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 ${
                        activeServiceData.color === 'purple' 
                          ? 'text-purple-400' 
                          : 'text-orange-400'
                      } flex-shrink-0 mt-0.5`} />
                      <span className="text-slate-200 font-body leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-slate-800">
                  <a
                    href="#contacto"
                    className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                      activeServiceData.color === 'purple'
                        ? 'bg-purple-600 hover:bg-purple-500 text-white'
                        : 'bg-orange-600 hover:bg-orange-500 text-white'
                    }`}
                  >
                    Solicitar presupuesto
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-24 md:py-32 px-4 md:px-8 -mt-12">
        <div className="relative z-10 max-w-7xl mx-auto">
          <ScrollReveal direction="up" delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-white">
                Cómo trabajamos
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto font-body">
                Procesos claros para recorridos 360 y contenido aéreo
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <ScrollReveal direction="up" delay={100}>
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800/50 p-6 md:p-8">
                <h3 className="text-xl font-bold font-display mb-6 text-white text-center">
                  Proceso: Recorridos 360
                </h3>
                <ProcessSection serviceId="design" darkMode={true} />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800/50 p-6 md:p-8">
                <h3 className="text-xl font-bold font-display mb-6 text-white text-center">
                  Proceso: Contenido Aéreo
                </h3>
                <ProcessSection serviceId="aerial" darkMode={true} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 md:py-32 px-4 md:px-8 -mt-12">
        <div className="relative z-10 max-w-7xl mx-auto">
          <ScrollReveal direction="up" delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-white">
                Preguntas Frecuentes
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto font-body">
                Resolvemos tus dudas sobre recorridos 360 y contenido aéreo
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <ScrollReveal direction="up" delay={100}>
              <div className="bg-slate-900/50 rounded-2xl border border-slate-800/50 p-6 md:p-8">
                <h3 className="text-xl font-bold font-display mb-6 text-white">
                  Recorridos 360
                </h3>
                <FAQSection serviceId="design" darkMode={true} />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={200}>
              <div className="bg-slate-900/50 rounded-2xl border border-slate-800/50 p-6 md:p-8">
                <h3 className="text-xl font-bold font-display mb-6 text-white">
                  Contenido Aéreo
                </h3>
                <FAQSection serviceId="aerial" darkMode={true} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="relative py-24 md:py-32 px-4 md:px-8 -mt-12">
        <div className="relative z-10 max-w-4xl mx-auto">
          <ScrollReveal direction="up" delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-center text-white">
              Hablemos de tu proyecto
            </h2>
            <p className="text-lg text-slate-300 text-center mb-12 font-body">
              Cuéntanos qué necesitas y te enviamos un presupuesto personalizado
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100}>
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800/50 p-8">
              <ContactForm darkMode={true} showAllServices={true} />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Fhoto;
