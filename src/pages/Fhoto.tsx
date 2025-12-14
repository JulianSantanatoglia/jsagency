import { useState, useRef, useEffect } from 'react';
import { Video, Camera, Check, ArrowRight, Aperture, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProcessSection from '../components/ProcessSection';
import FAQSection from '../components/FAQSection';
import ContactForm from '../components/ContactForm';
import ScrollReveal from '../components/ScrollReveal';
import PatternBackground from '../components/PatternBackground';

const Fhoto = () => {
  const [activeService, setActiveService] = useState<'tours' | 'drone'>('tours');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Asegurar que el video se reproduzca automáticamente
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Autoplay prevented:', error);
      });
    }
  }, []);

  const services = {
    tours: {
      title: 'Recorridos Virtuales 360°',
      description: 'Tours inmersivos con MatterPort para inmobiliarias, salas de eventos y espacios comerciales. Tecnología de vanguardia que convierte visitas en ventas.',
      bullets: [
        'Captura 360° profesional con Insta360 X5',
        'Integración con MatterPort para experiencias inmersivas',
        'Ideal para inmobiliarias, salas de eventos y espacios comerciales',
        'Edición y procesamiento de alta calidad',
        'Publicación en plataformas líderes (MatterPort, Insta360)',
        'Integración web y redes sociales',
        'QR codes para acceso directo y compartir fácilmente',
        'CTAs optimizados para convertir visitas en leads',
        'Experiencia responsive en todos los dispositivos'
      ],
      icon: Video,
      color: 'purple'
    },
    drone: {
      title: 'Contenido Aéreo Profesional',
      description: 'Fotografía y video aéreo de alta calidad para inmobiliarias, eventos, contenido y mediciones de terrenos. Operación 100% legal y certificada.',
      bullets: [
        'Fotografía aérea inmobiliaria de alta resolución',
        'Videos corporativos y contenido para redes sociales',
        'Cobertura de propiedades, hoteles, obras y eventos',
        'Mediciones de terrenos y levantamientos topográficos',
        'Reels y contenido optimizado para Instagram y TikTok',
        'Edición profesional lista para publicar',
        'Certificación A1/A3 y registro de operador vigente',
        'Seguro de responsabilidad civil y operación legal',
        'Equipamiento profesional: DJI Mini 4 Pro',
        'Múltiples formatos de entrega (4K, Full HD, optimizado para web)'
      ],
      icon: Camera,
      color: 'orange'
    }
  };

  const activeServiceData = services[activeService];

  return (
    <div className="relative min-h-screen bg-black text-white">
      <PatternBackground dark={true} opacity={0.06} />
      
      {/* Hero Section con Video */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Video de fondo */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 blur-[2px]"
          aria-label="Video de fondo Fhoto"
        >
          <source src="/videos/fhoto.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>

        {/* Overlay oscuro para mejorar legibilidad */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Contenido centrado */}
        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen w-full px-4 md:px-8">
          <ScrollReveal direction="up" delay={0}>
            <div className="text-center max-w-5xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-display mb-8 text-white tracking-tight leading-tight drop-shadow-2xl">
                Recorridos virtuales 360° para inmuebles, salones de fiesta y más
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto mb-12 font-body leading-relaxed drop-shadow-lg">
                Soluciones visuales profesionales para inmobiliarias, salas de eventos, hoteles, restaurantes y espacios comerciales. Recorridos virtuales con MatterPort y contenido aéreo certificado que transforma espacios en experiencias.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contacto"
                  className="px-10 py-5 bg-accent-cyan text-white rounded-2xl font-bold text-lg tracking-wide hover:bg-cyan-500 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-500/60 hover:scale-105"
                >
                  Quiero un presupuesto
                  <ArrowRight size={22} />
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
                Tecnología profesional y certificaciones que garantizan resultados de calidad
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

      {/* Equipment & Services Section */}
      <section className="relative py-24 md:py-32 px-4 md:px-8 -mt-12">
        <div className="relative z-10 max-w-7xl mx-auto">
          <ScrollReveal direction="up" delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-white">
                Equipamiento Profesional
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto font-body">
                Tecnología de última generación y certificaciones que garantizan resultados excepcionales
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <ScrollReveal direction="up" delay={100}>
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800/50 p-6 md:p-8">
                <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mb-4">
                  <Video className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold font-display mb-3 text-white">
                  Insta360 X5
                </h3>
                <p className="text-slate-300 font-body leading-relaxed">
                  Cámara 360° profesional para recorridos virtuales inmersivos. Captura de alta resolución que permite crear experiencias MatterPort de nivel profesional.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800/50 p-6 md:p-8">
                <div className="w-12 h-12 bg-orange-600/20 rounded-xl flex items-center justify-center mb-4">
                  <Camera className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold font-display mb-3 text-white">
                  DJI Mini 4 Pro
                </h3>
                <p className="text-slate-300 font-body leading-relaxed">
                  Drone profesional para contenido aéreo de alta calidad. Ideal para fotografía inmobiliaria, eventos y mediciones topográficas con precisión milimétrica.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300}>
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800/50 p-6 md:p-8">
                <div className="w-12 h-12 bg-cyan-600/20 rounded-xl flex items-center justify-center mb-4">
                  <Aperture className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold font-display mb-3 text-white">
                  Fuji Film XT50
                </h3>
                <p className="text-slate-300 font-body leading-relaxed">
                  Fotografía profesional de productos e inmuebles. Captura de alta resolución para catálogos, portales inmobiliarios y contenido comercial de calidad premium.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Certifications */}
          <ScrollReveal direction="up" delay={400}>
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 md:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-display mb-3 text-white">
                      Operación Legal y Certificada
                    </h3>
                    <p className="text-slate-300 font-body leading-relaxed mb-4">
                      Trabajamos con todas las certificaciones y permisos necesarios para operar de forma legal y segura:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-200 font-body">Certificación A1/A3 para operación de drones</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-200 font-body">Registro de operador vigente y actualizado</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-200 font-body">Seguro de responsabilidad civil para todas las operaciones</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-200 font-body">Cumplimiento total de normativas aeronáuticas</span>
                      </li>
                    </ul>
                  </div>
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
                Cuéntanos sobre tu proyecto y te enviamos un presupuesto personalizado. Ya sea un recorrido virtual, contenido aéreo o fotografía profesional, estamos listos para ayudarte.
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
