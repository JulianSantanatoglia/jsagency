import { useState, useRef, useEffect } from 'react';
import { Video, Camera, Check, ArrowRight, Aperture, Shield } from 'lucide-react';
import FAQSection from '../components/FAQSection';
import Contact from '../components/Contact';
import ScrollReveal from '../components/ScrollReveal';
import PatternBackground from '../components/PatternBackground';

const Fhoto = () => {
  const [activeService, setActiveService] = useState<'tours' | 'drone'>('tours');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Scroll al inicio de la página cuando se carga el componente
    window.scrollTo(0, 0);
    
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
    <div className="relative min-h-screen bg-[#FAF9F7] dark:bg-slate-900 transition-colors duration-300">
      <PatternBackground opacity={0.04} />
      
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-white tracking-tight leading-tight drop-shadow-2xl">
                Recorridos virtuales 360° para inmuebles, salones de fiesta y más
              </h1>
              <p className="text-lg md:text-xl text-slate-200 max-w-4xl mx-auto mb-12 font-body leading-relaxed drop-shadow-lg">
                Soluciones visuales profesionales para inmobiliarias, salas de eventos, hoteles, restaurantes y espacios comerciales. Recorridos virtuales con MatterPort y contenido aéreo certificado que transforma espacios en experiencias.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contacto"
                  className="px-8 py-4 bg-accent-cyan text-white rounded-2xl font-semibold text-lg tracking-wide hover:bg-cyan-500 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/40 hover:scale-105 font-body"
                >
                  Quiero un presupuesto
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Ondulación inferior para transición suave */}
        <div className="absolute bottom-0 left-0 w-full z-10" style={{ transform: 'translateY(1px)' }}>
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-auto"
          >
            <path
              d="M0,60 C240,20 480,100 720,60 C960,20 1200,100 1440,60 L1440,120 L0,120 Z"
              fill="#FAF9F7"
              className="dark:fill-slate-900 transition-colors duration-300"
            />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="relative py-24 md:py-32 px-4 md:px-8 -mt-12">
        <PatternBackground opacity={0.04} />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <ScrollReveal direction="up" delay={0}>
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-primary-dark dark:text-white tracking-tight">
                Nuestros <span className="text-accent-cyan">Servicios</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-body font-light leading-relaxed">
                Tecnología profesional y certificaciones que garantizan resultados de calidad
              </p>
            </div>
          </ScrollReveal>

          {/* Service Tabs */}
          <ScrollReveal direction="up" delay={100}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 md:mb-16 max-w-2xl mx-auto justify-center">
              <button
                onClick={() => setActiveService('tours')}
                className={`group relative flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 font-semibold overflow-hidden ${
                  activeService === 'tours'
                    ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-xl shadow-purple-500/30 scale-105'
                    : 'bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-2 border-slate-200/60 dark:border-slate-700/60 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:border-accent-cyan/40 hover:scale-105'
                }`}
              >
                <Video size={22} className={activeService === 'tours' ? 'text-white' : ''} />
                <span className="text-sm md:text-base">Recorridos 360</span>
                {activeService === 'tours' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                )}
              </button>
              <button
                onClick={() => setActiveService('drone')}
                className={`group relative flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 font-semibold overflow-hidden ${
                  activeService === 'drone'
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-xl shadow-orange-500/30 scale-105'
                    : 'bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-2 border-slate-200/60 dark:border-slate-700/60 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:border-accent-cyan/40 hover:scale-105'
                }`}
              >
                <Camera size={22} className={activeService === 'drone' ? 'text-white' : ''} />
                <span className="text-sm md:text-base">Contenido Aéreo</span>
                {activeService === 'drone' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                )}
              </button>
            </div>
          </ScrollReveal>

          {/* Active Service Content */}
          <ScrollReveal direction="up" delay={200}>
            <div className="max-w-4xl mx-auto">
              <div className="relative bg-gradient-to-br from-white via-white to-slate-50/50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900/50 rounded-3xl border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-sm overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-slate-300/30 dark:hover:shadow-slate-900/50 hover:-translate-y-3 hover:border-accent-cyan/20">
                {/* Barra superior de color */}
                <div className={`h-2 ${activeServiceData.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600' : 'bg-gradient-to-r from-orange-500 to-orange-600'}`}></div>
                
                {/* Contenido principal */}
                <div className="p-8 md:p-10">
                  {/* Header con icono y título */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl ${
                      activeServiceData.color === 'purple' 
                        ? 'bg-purple-50 dark:bg-purple-900/30' 
                        : 'bg-orange-50 dark:bg-orange-900/30'
                    } flex items-center justify-center transition-transform duration-300`}>
                      <activeServiceData.icon size={32} className={
                        activeServiceData.color === 'purple' 
                          ? 'text-purple-600 dark:text-purple-400' 
                          : 'text-orange-600 dark:text-orange-400'
                      } />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold font-display text-primary-dark dark:text-white mb-2 transition-colors">
                        {activeServiceData.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-base font-body leading-relaxed">
                        {activeServiceData.description}
                      </p>
                    </div>
                  </div>

                  {/* Features con diseño moderno */}
                  <div className="mb-8 space-y-3">
                    {activeServiceData.bullets.map((bullet, i) => (
                      <div 
                        key={i} 
                        className="flex items-start gap-3 group/item"
                        role="listitem"
                      >
                        <div className={`flex-shrink-0 w-6 h-6 rounded-lg ${
                          activeServiceData.color === 'purple' 
                            ? 'bg-purple-100 dark:bg-purple-900/40' 
                            : 'bg-orange-100 dark:bg-orange-900/40'
                        } flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition-transform`}>
                          <svg className={`w-3 h-3 ${
                            activeServiceData.color === 'purple' 
                              ? 'text-purple-600 dark:text-purple-400' 
                              : 'text-orange-600 dark:text-orange-400'
                          }`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-body flex-1">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button moderno */}
                  <a 
                    href="#contacto" 
                    className={`group/cta relative inline-flex items-center justify-center gap-2 px-8 py-4 w-full rounded-xl font-semibold text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden ${
                      activeServiceData.color === 'purple' 
                        ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white focus:ring-purple-500 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40' 
                        : 'bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white focus:ring-orange-500 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40'
                    }`}
                  >
                    <span className="relative z-10">Solicitar presupuesto</span>
                    <span className="relative z-10 group-hover/cta:translate-x-1 transition-transform">→</span>
                    <div className={`absolute inset-0 ${
                      activeServiceData.color === 'purple' 
                        ? 'bg-gradient-to-r from-purple-700 to-purple-800' 
                        : 'bg-gradient-to-r from-orange-700 to-orange-800'
                    } opacity-0 group-hover/cta:opacity-100 transition-opacity`}></div>
                  </a>
                </div>

                {/* Efecto de brillo sutil en hover */}
                <div className={`absolute inset-0 ${
                  activeServiceData.color === 'purple' 
                    ? 'bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/5' 
                    : 'bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/5'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Equipment & Services Section */}
      <section className="relative py-24 md:py-32 px-4 md:px-8 -mt-12">
        <PatternBackground opacity={0.04} />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <ScrollReveal direction="up" delay={0}>
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-primary-dark dark:text-white tracking-tight">
                Equipamiento <span className="text-accent-cyan">Profesional</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-body font-light leading-relaxed">
                Tecnología de última generación y certificaciones que garantizan resultados excepcionales
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <ScrollReveal direction="up" delay={100}>
              <div className="bg-gradient-to-br from-white via-white to-slate-50/50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900/50 rounded-3xl border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-sm p-6 md:p-8 shadow-xl shadow-slate-200/30 dark:shadow-slate-900/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-4">
                  <Video className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-display mb-3 text-primary-dark dark:text-white">
                  Insta360 X5
                </h3>
                <p className="text-slate-600 dark:text-slate-300 font-body leading-relaxed text-base">
                  Cámara 360° profesional para recorridos virtuales inmersivos. Captura de alta resolución que permite crear experiencias MatterPort de nivel profesional.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <div className="bg-gradient-to-br from-white via-white to-slate-50/50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900/50 rounded-3xl border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-sm p-6 md:p-8 shadow-xl shadow-slate-200/30 dark:shadow-slate-900/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-4">
                  <Camera className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-display mb-3 text-primary-dark dark:text-white">
                  DJI Mini 4 Pro
                </h3>
                <p className="text-slate-600 dark:text-slate-300 font-body leading-relaxed text-base">
                  Drone profesional para contenido aéreo de alta calidad. Ideal para fotografía inmobiliaria, eventos y mediciones topográficas con precisión milimétrica.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300}>
              <div className="bg-gradient-to-br from-white via-white to-slate-50/50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900/50 rounded-3xl border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-sm p-6 md:p-8 shadow-xl shadow-slate-200/30 dark:shadow-slate-900/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 bg-cyan-50 dark:bg-cyan-900/30 rounded-xl flex items-center justify-center mb-4">
                  <Aperture className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-display mb-3 text-primary-dark dark:text-white">
                  Fuji Film XT50
                </h3>
                <p className="text-slate-600 dark:text-slate-300 font-body leading-relaxed text-base">
                  Fotografía profesional de productos e inmuebles. Captura de alta resolución para catálogos, portales inmobiliarios y contenido comercial de calidad premium.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Certifications */}
          <ScrollReveal direction="up" delay={400}>
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-white via-white to-slate-50/50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900/50 rounded-3xl border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-sm p-8 md:p-10 shadow-xl shadow-slate-200/30 dark:shadow-slate-900/30">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold font-display mb-4 text-primary-dark dark:text-white">
                      Operación Legal y Certificada
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 font-body leading-relaxed mb-6 text-base md:text-lg">
                      Trabajamos con todas las certificaciones y permisos necesarios para operar de forma legal y segura:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center mt-0.5">
                          <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <span className="text-slate-700 dark:text-slate-300 font-body leading-relaxed">Certificación A1/A3 para operación de drones</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center mt-0.5">
                          <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <span className="text-slate-700 dark:text-slate-300 font-body leading-relaxed">Registro de operador vigente y actualizado</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center mt-0.5">
                          <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <span className="text-slate-700 dark:text-slate-300 font-body leading-relaxed">Seguro de responsabilidad civil para todas las operaciones</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center mt-0.5">
                          <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <span className="text-slate-700 dark:text-slate-300 font-body leading-relaxed">Cumplimiento total de normativas aeronáuticas</span>
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
        <PatternBackground opacity={0.04} />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <ScrollReveal direction="up" delay={0}>
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-primary-dark dark:text-white tracking-tight">
                Cómo <span className="text-accent-cyan">Trabajamos</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-body font-light leading-relaxed">
                Procesos claros para recorridos 360 y contenido aéreo
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Recorridos 360 Process */}
            <ScrollReveal direction="up" delay={100}>
              <div className="relative">
                <h3 className="text-xl md:text-2xl font-bold font-display mb-8 text-primary-dark dark:text-white text-center md:text-left">
                  Proceso: Recorridos 360
                </h3>
                <div className="relative max-w-full">
                  {/* Línea vertical decorativa */}
                  <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400/30 via-slate-300/20 dark:via-slate-600/20 to-transparent"></div>
                  
                  <div className="flex flex-col gap-6 md:gap-8">
                    {[
                      { number: '01', title: 'Consulta inicial', description: 'Analizamos tus necesidades y el espacio a capturar para definir el mejor enfoque.' },
                      { number: '02', title: 'Captura 360°', description: 'Realizamos la captura profesional con Insta360 X5 en todos los espacios relevantes.' },
                      { number: '03', title: 'Procesamiento', description: 'Editamos y procesamos las imágenes para crear la experiencia inmersiva.' },
                      { number: '04', title: 'Integración', description: 'Publicamos en MatterPort y lo integramos en tu web con QR codes y CTAs.' },
                      { number: '05', title: 'Entrega', description: 'Te entregamos todo listo para compartir y generar leads desde los tours.' }
                    ].map((step, index) => (
                      <div 
                        key={index} 
                        className="relative group"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {/* Punto en la línea del timeline */}
                        <div className="hidden md:block absolute left-6 top-8 w-4 h-4 rounded-full bg-gradient-to-br from-purple-400 to-purple-500 shadow-lg shadow-purple-500/50 z-10 group-hover:scale-150 transition-transform duration-300"></div>
                        
                        <div className="ml-0 md:ml-16 bg-gradient-to-br from-white/90 via-white/70 to-white/50 dark:from-slate-800/90 dark:via-slate-800/70 dark:to-slate-800/50 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/30 dark:shadow-slate-900/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
                          <div className="flex items-start gap-6">
                            {/* Número grande sin fondo */}
                            <div className="flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-primary-dark dark:text-white">
                                {step.number}
                              </span>
                            </div>
                            
                            <div className="flex-1 pt-1">
                              <h3 className="text-xl md:text-2xl font-bold font-display mb-3 text-primary-dark dark:text-white group-hover:text-accent-cyan transition-colors">
                                {step.title}
                              </h3>
                              <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-body">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Contenido Aéreo Process */}
            <ScrollReveal direction="up" delay={200}>
              <div className="relative">
                <h3 className="text-xl md:text-2xl font-bold font-display mb-8 text-primary-dark dark:text-white text-center md:text-left">
                  Proceso: Contenido Aéreo
                </h3>
                <div className="relative max-w-full">
                  {/* Línea vertical decorativa */}
                  <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400/30 via-slate-300/20 dark:via-slate-600/20 to-transparent"></div>
                  
                  <div className="flex flex-col gap-6 md:gap-8">
                    {[
                      { number: '01', title: 'Planificación', description: 'Definimos ubicaciones, horarios y permisos necesarios para la operación.' },
                      { number: '02', title: 'Captura aérea', description: 'Realizamos fotografía y video aéreo profesional con DJI Mini 4 Pro.' },
                      { number: '03', title: 'Edición', description: 'Procesamos y editamos el material para obtener el mejor resultado.' },
                      { number: '04', title: 'Entrega', description: 'Te entregamos el contenido en múltiples formatos listo para usar.' }
                    ].map((step, index) => (
                      <div 
                        key={index} 
                        className="relative group"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {/* Punto en la línea del timeline */}
                        <div className="hidden md:block absolute left-6 top-8 w-4 h-4 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 shadow-lg shadow-orange-500/50 z-10 group-hover:scale-150 transition-transform duration-300"></div>
                        
                        <div className="ml-0 md:ml-16 bg-gradient-to-br from-white/90 via-white/70 to-white/50 dark:from-slate-800/90 dark:via-slate-800/70 dark:to-slate-800/50 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/30 dark:shadow-slate-900/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
                          <div className="flex items-start gap-6">
                            {/* Número grande sin fondo */}
                            <div className="flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-primary-dark dark:text-white">
                                {step.number}
                              </span>
                            </div>
                            
                            <div className="flex-1 pt-1">
                              <h3 className="text-xl md:text-2xl font-bold font-display mb-3 text-primary-dark dark:text-white group-hover:text-accent-cyan transition-colors">
                                {step.title}
                              </h3>
                              <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-body">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 md:py-32 px-4 md:px-8 -mt-12">
        <PatternBackground opacity={0.04} />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <ScrollReveal direction="up" delay={0}>
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-primary-dark dark:text-white tracking-tight">
                Dudas <span className="text-accent-cyan">Frecuentes</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-body font-light leading-relaxed">
                Resolvemos tus dudas sobre recorridos 360 y contenido aéreo
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <ScrollReveal direction="up" delay={100}>
              <div className="bg-gradient-to-br from-white via-white to-slate-50/50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900/50 rounded-3xl border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-sm p-6 md:p-8 shadow-xl shadow-slate-200/30 dark:shadow-slate-900/30">
                <h3 className="text-xl md:text-2xl font-bold font-display mb-6 text-primary-dark dark:text-white">
                  Recorridos 360
                </h3>
                <FAQSection serviceId="design" darkMode={false} />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={200}>
              <div className="bg-gradient-to-br from-white via-white to-slate-50/50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900/50 rounded-3xl border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-sm p-6 md:p-8 shadow-xl shadow-slate-200/30 dark:shadow-slate-900/30">
                <h3 className="text-xl md:text-2xl font-bold font-display mb-6 text-primary-dark dark:text-white">
                  Contenido Aéreo
                </h3>
                <FAQSection serviceId="aerial" darkMode={false} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Fhoto;
