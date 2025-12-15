import { useState, useRef, useEffect } from 'react';
import { Video, Camera, Check, ArrowRight, Aperture, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Contact from '../components/Contact';
import ScrollReveal from '../components/ScrollReveal';
import PatternBackground from '../components/PatternBackground';
import OptimizedImage from '../components/OptimizedImage';

const Fhoto = () => {
  const { t, language } = useLanguage();
  const [activeProcess, setActiveProcess] = useState<'tours' | 'drone'>('tours');
  const [activeFAQ, setActiveFAQ] = useState<'tours' | 'drone'>('tours');
  const [openFAQItems, setOpenFAQItems] = useState<number[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleFAQItem = (index: number) => {
    setOpenFAQItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  useEffect(() => {
    // Scroll al inicio de la página cuando se carga el componente
    window.scrollTo(0, 0);
    
    // Asegurar que el video se reproduzca automáticamente
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Autoplay prevented:', error);
      });
    }

    // Manejar scroll suave a secciones cuando se carga la página con hash
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  const content = {
    es: {
      services: {
        title: 'Nuestros Servicios',
        subtitle: 'Tecnología profesional y certificaciones que garantizan resultados de calidad',
        helper: 'Haz click en alguno de los dos botones',
        tours: {
          title: 'Tours Virtuales',
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
          ]
        },
        drone: {
          title: 'Servicios de Drone',
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
          ]
        }
      },
      equipment: {
        title: 'Equipamiento',
        highlight: 'Profesional',
        subtitle: 'Tecnología de última generación y certificaciones que garantizan resultados excepcionales',
        devices: [
          {
            name: 'Insta360 X5',
            description: 'Cámara 360° profesional para tours virtuales inmersivos. Captura de alta resolución que permite crear experiencias MatterPort de nivel profesional.'
          },
          {
            name: 'DJI Mini 4 Pro',
            description: 'Drone profesional para contenido aéreo de alta calidad. Ideal para fotografía inmobiliaria, eventos y mediciones topográficas con precisión milimétrica.'
          },
          {
            name: 'Fuji Film XT50',
            description: 'Fotografía profesional de productos e inmuebles. Captura de alta resolución para catálogos, portales inmobiliarios y contenido comercial de calidad premium.'
          }
        ],
        certifications: {
          title: 'Operación Legal y Certificada',
          intro: 'Trabajamos con todas las certificaciones y permisos necesarios para operar de forma legal y segura:',
          bullets: [
            'Piloto A1/A3 certificado',
            'Registro de operador vigente',
            'Seguro de responsabilidad civil',
            'Permisos de vuelo y zonas controladas'
          ]
        }
      },
      process: {
        title: 'Cómo',
        highlight: 'Trabajamos',
        subtitle: 'Procesos claros para tours virtuales y servicios de drone',
        helper: 'Haz click en alguno de los dos botones',
        tabs: {
          tours: 'Tours Virtuales',
          drone: 'Servicios de Drone'
        },
        stepsTours: [
          { number: '01', title: 'Consulta inicial', description: 'Analizamos tus necesidades y el espacio a capturar para definir el mejor enfoque.' },
          { number: '02', title: 'Captura 360°', description: 'Realizamos la captura profesional con Insta360 X5 en todos los espacios relevantes.' },
          { number: '03', title: 'Procesamiento', description: 'Editamos y procesamos las imágenes para crear la experiencia inmersiva.' },
          { number: '04', title: 'Integración', description: 'Publicamos en MatterPort y lo integramos en tu web con QR codes y CTAs.' },
          { number: '05', title: 'Entrega', description: 'Te entregamos todo listo para compartir y generar leads desde los tours.' }
        ],
        stepsDrone: [
          { number: '01', title: 'Planificación', description: 'Definimos ubicaciones, horarios y permisos necesarios para la operación.' },
          { number: '02', title: 'Captura aérea', description: 'Realizamos fotografía y video aéreo profesional con DJI Mini 4 Pro.' },
          { number: '03', title: 'Edición', description: 'Procesamos y editamos el material para obtener el mejor resultado.' },
          { number: '04', title: 'Entrega', description: 'Te entregamos el contenido en múltiples formatos listo para usar.' }
        ]
      },
      faq: {
        title: 'Dudas',
        highlight: 'Frecuentes',
        subtitle: 'Resolvemos tus dudas sobre tours virtuales y servicios de drone',
        helper: 'Haz click en alguno de los dos botones',
        tabs: {
          tours: 'Tours Virtuales',
          drone: 'Servicios de Drone'
        }
      }
    },
    en: {
      services: {
        title: 'Our Services',
        subtitle: 'Professional technology and certifications that guarantee quality results',
        helper: 'Click either button to explore',
        tours: {
          title: 'Virtual Tours',
          description: 'Immersive Matterport tours for real estate, event venues, and commercial spaces. Cutting-edge tech that turns visits into sales.',
          bullets: [
            'Professional 360° capture with Insta360 X5',
            'Matterport integration for immersive experiences',
            'Ideal for real estate, event venues, and commercial spaces',
            'High-quality editing and processing',
            'Publishing on leading platforms (Matterport, Insta360)',
            'Web and social media integration',
            'QR codes for direct access and easy sharing',
            'CTAs optimized to convert visits into leads',
            'Responsive experience across all devices'
          ]
        },
        drone: {
          title: 'Drone Services',
          description: 'High-quality aerial photo and video for real estate, events, content, and land measurements. 100% legal and certified operations.',
          bullets: [
            'High-resolution aerial real estate photography',
            'Corporate videos and social media content',
            'Coverage for properties, hotels, construction sites, and events',
            'Land measurements and topographic surveys',
            'Reels and content optimized for Instagram and TikTok',
            'Professional editing ready to publish',
            'A1/A3 certification and active operator registration',
            'Liability insurance and fully legal operation',
            'Professional gear: DJI Mini 4 Pro',
            'Multiple delivery formats (4K, Full HD, web-optimized)'
          ]
        }
      },
      equipment: {
        title: 'Professional',
        highlight: 'Equipment',
        subtitle: 'Cutting-edge technology and certifications that guarantee outstanding results',
        devices: [
          {
            name: 'Insta360 X5',
            description: 'Professional 360° camera for immersive virtual tours. High-resolution capture that enables Matterport-grade experiences.'
          },
          {
            name: 'DJI Mini 4 Pro',
            description: 'Professional drone for high-quality aerial content. Perfect for real estate photography, events, and topographic measurements with precision.'
          },
          {
            name: 'Fuji Film XT50',
            description: 'Professional photography for products and properties. High-resolution capture for catalogs, listings, and premium commercial content.'
          }
        ],
        certifications: {
          title: 'Legal and Certified Operation',
          intro: 'We work with every required certification and permit to operate safely and legally:',
          bullets: [
            'Certified A1/A3 pilot',
            'Active operator registration',
            'Liability insurance',
            'Flight permits and controlled areas'
          ]
        }
      },
      process: {
        title: 'How',
        highlight: 'We Work',
        subtitle: 'Clear processes for virtual tours and drone services',
        helper: 'Click either button to explore',
        tabs: {
          tours: 'Virtual Tours',
          drone: 'Drone Services'
        },
        stepsTours: [
          { number: '01', title: 'Initial consultation', description: 'We analyze your needs and the space to capture to define the best approach.' },
          { number: '02', title: '360° capture', description: 'We capture professionally with the Insta360 X5 in every relevant space.' },
          { number: '03', title: 'Processing', description: 'We edit and process the images to build the immersive experience.' },
          { number: '04', title: 'Integration', description: 'We publish on Matterport and integrate it into your site with QR codes and CTAs.' },
          { number: '05', title: 'Delivery', description: 'We deliver everything ready to share and generate leads from the tours.' }
        ],
        stepsDrone: [
          { number: '01', title: 'Planning', description: 'We define locations, schedules, and required permits for the operation.' },
          { number: '02', title: 'Aerial capture', description: 'We shoot professional aerial photos and video with the DJI Mini 4 Pro.' },
          { number: '03', title: 'Editing', description: 'We process and edit the material to achieve the best result.' },
          { number: '04', title: 'Delivery', description: 'We deliver the content in multiple formats ready to use.' }
        ]
      },
      faq: {
        title: 'Frequently',
        highlight: 'Asked Questions',
        subtitle: 'We answer your questions about virtual tours and drone services',
        helper: 'Click either button to explore',
        tabs: {
          tours: 'Virtual Tours',
          drone: 'Drone Services'
        }
      }
    }
  } as const;

  const copy = content[language];

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
                {t('fhoto.hero.title')}
              </h1>
              <p className="text-lg md:text-xl text-slate-200 max-w-4xl mx-auto mb-12 font-body leading-relaxed drop-shadow-lg">
                {t('fhoto.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contacto"
                  className="px-8 py-4 bg-accent-cyan text-white rounded-2xl font-semibold text-lg tracking-wide hover:bg-cyan-500 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/40 hover:scale-105 font-body"
                >
                  {t('fhoto.hero.cta')}
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
                {copy.services.title.split(' ').slice(0, -1).join(' ')} <span className="text-accent-cyan">{copy.services.title.split(' ').slice(-1)}</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-body font-light leading-relaxed">
                {copy.services.subtitle}
              </p>
            </div>
          </ScrollReveal>

          {/* Service Cards - Always Visible */}
          <ScrollReveal direction="up" delay={100}>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
              {(['tours', 'drone'] as const).map((key) => {
                const serviceData = copy.services[key];
                const IconComponent = key === 'tours' ? Video : Camera;
                const color = key === 'tours' ? 'purple' : 'slate';
                return (
                  <div 
                    key={key}
                    className="relative bg-gradient-to-br from-white via-white to-slate-50/50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900/50 rounded-3xl border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-sm overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-slate-300/30 dark:hover:shadow-slate-900/50 hover:-translate-y-3 hover:border-accent-cyan/20 h-full flex flex-col"
                  >
                    {/* Barra superior de color */}
                    <div className={`h-2 ${color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600' : 'bg-gradient-to-r from-slate-600 to-slate-700'}`}></div>
                    
                    {/* Contenido principal */}
                    <div className="p-6 md:p-8 lg:p-10 flex flex-col flex-1">
                      {/* Header con icono y título */}
                      <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                        <div className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${
                      color === 'purple' 
                        ? 'bg-purple-50 dark:bg-purple-900/30' 
                        : 'bg-slate-50 dark:bg-slate-800/50'
                        } flex items-center justify-center transition-transform duration-300`}>
                          <IconComponent size={28} className={`sm:w-8 sm:h-8 ${
                            color === 'purple' 
                              ? 'text-purple-600 dark:text-purple-400' 
                              : 'text-slate-700 dark:text-slate-300'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-primary-dark dark:text-white mb-2 transition-colors">
                            {serviceData.title}
                          </h3>
                          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-body leading-relaxed">
                            {serviceData.description}
                          </p>
                        </div>
                      </div>

                      {/* Features con diseño moderno */}
                      <div className="mb-8 space-y-3 flex-1">
                        {serviceData.bullets.map((bullet, i) => (
                          <div 
                            key={i} 
                            className="flex items-start gap-3 group/item"
                            role="listitem"
                          >
                            <div className={`flex-shrink-0 w-6 h-6 rounded-lg ${
                          color === 'purple' 
                            ? 'bg-purple-100 dark:bg-purple-900/40' 
                            : 'bg-slate-100 dark:bg-slate-700/40'
                            } flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition-transform`}>
                              <svg className={`w-3 h-3 ${
                                color === 'purple' 
                                  ? 'text-purple-600 dark:text-purple-400' 
                                  : 'text-slate-700 dark:text-slate-300'
                              }`} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-body flex-1">
                              {bullet}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button moderno */}
                      <a 
                        href="#contacto" 
                        className={`group/cta relative inline-flex items-center justify-center gap-2 px-8 py-4 w-full rounded-xl font-semibold text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden ${
                          color === 'purple' 
                            ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white focus:ring-purple-500 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40' 
                            : 'bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white focus:ring-slate-500 shadow-lg shadow-slate-500/30 hover:shadow-xl hover:shadow-slate-500/40'
                        }`}
                      >
                        <span className="relative z-10">{t('fhoto.hero.cta')}</span>
                        <span className="relative z-10 group-hover/cta:translate-x-1 transition-transform">→</span>
                        <div className={`absolute inset-0 ${
                          color === 'purple' 
                            ? 'bg-gradient-to-r from-purple-700 to-purple-800' 
                            : 'bg-gradient-to-r from-slate-800 to-slate-900'
                        } opacity-0 group-hover/cta:opacity-100 transition-opacity`}></div>
                      </a>
                    </div>

                    {/* Efecto de brillo sutil en hover */}
                    <div className={`absolute inset-0 ${
                        color === 'purple' 
                          ? 'bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/5' 
                          : 'bg-gradient-to-br from-slate-500/0 via-slate-500/0 to-slate-500/5'
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Section - Marketing Creative Style */}
      <section className="relative py-24 md:py-32 px-4 md:px-8 overflow-hidden">
        <PatternBackground opacity={0.02} />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          {[
            {
              id: 'tours',
              title: t('why.tours.title'),
              content: t('why.tours.content'),
              color: 'purple',
              image: '/images/proyectos/360.jpg',
              stat: t('why.tours.stat'),
              statLabel: t('why.tours.statLabel'),
              cta: t('why.tours.cta')
            },
            {
              id: 'drone',
              title: t('why.drone.title'),
              content: t('why.drone.content'),
              color: 'slate',
              image: '/images/proyectos/inmobiliaria.jpg',
              stat: t('why.drone.stat'),
              statLabel: t('why.drone.statLabel'),
              cta: t('why.drone.cta')
            }
          ].map((item, index) => (
            <ScrollReveal key={item.id} direction="up" delay={index * 150}>
              <div className={`mb-20 md:mb-32 last:mb-0 ${
                index % 2 === 0 ? '' : 'md:flex-row-reverse'
              }`}>
                <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}>
                  {/* Imagen con diseño creativo */}
                  <div className={`relative w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg md:rounded-2xl">
                      <OptimizedImage
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay con gradiente */}
                      <div className={`absolute inset-0 ${
                        item.color === 'purple' 
                          ? 'bg-gradient-to-br from-purple-600/20 via-transparent to-transparent' 
                          : 'bg-gradient-to-br from-slate-600/20 via-transparent to-transparent'
                      }`}></div>
                      
                      {/* Stat destacado flotante */}
                      <div className={`absolute ${
                        index % 2 === 0 ? 'top-6 right-6' : 'top-6 left-6'
                      } bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-6 py-4 rounded-xl shadow-xl border ${
                        item.color === 'purple' 
                          ? 'border-purple-200 dark:border-purple-800' 
                          : 'border-slate-200 dark:border-slate-700'
                      }`}>
                        <div className={`text-3xl md:text-4xl font-bold ${
                          item.color === 'purple' 
                            ? 'text-purple-600 dark:text-purple-400' 
                            : 'text-slate-700 dark:text-slate-300'
                        }`}>
                          {item.stat}
                        </div>
                        <div className="text-xs md:text-sm text-slate-600 dark:text-slate-400 font-medium mt-1">
                          {item.statLabel}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contenido de texto */}
                  <div className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'
                  }`}>
                    <div className="space-y-6">
                      {/* Título con estilo marketing */}
                      <h3 className={`text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight ${
                        item.color === 'purple' 
                          ? 'text-purple-900 dark:text-purple-100' 
                          : 'text-slate-900 dark:text-slate-100'
                      }`}>
                        {item.title}
                      </h3>
                      
                      {/* Línea decorativa */}
                      <div className={`w-20 h-1 rounded-full ${
                        item.color === 'purple' 
                          ? 'bg-gradient-to-r from-purple-500 to-purple-600' 
                          : 'bg-gradient-to-r from-slate-600 to-slate-700'
                      }`}></div>

                      {/* Texto del contenido */}
                      <p className={`text-lg md:text-xl leading-relaxed font-body ${
                        item.color === 'purple' 
                          ? 'text-slate-700 dark:text-slate-300' 
                          : 'text-slate-700 dark:text-slate-300'
                      }`}>
                        {item.content}
                      </p>

                      {/* CTA sutil */}
                      <a 
                        href="#proceso"
                        className={`inline-flex items-center gap-2 text-sm font-semibold ${
                          item.color === 'purple' 
                            ? 'text-purple-600 dark:text-purple-400' 
                            : 'text-slate-700 dark:text-slate-300'
                        } group/cta cursor-pointer hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 rounded`}
                      >
                        <span>{item.cta}</span>
                        <span className="group-hover/cta:translate-x-1 transition-transform">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Equipment & Services Section */}
      <section className="relative py-24 md:py-32 px-4 md:px-8 -mt-12">
        <PatternBackground opacity={0.04} />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <ScrollReveal direction="up" delay={0}>
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-primary-dark dark:text-white tracking-tight">
                {copy.equipment.title} <span className="text-accent-cyan">{copy.equipment.highlight}</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-body font-light leading-relaxed">
                {copy.equipment.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Left side - Devices */}
            <div className="flex flex-col gap-3 md:gap-4">
              <ScrollReveal direction="up" delay={100}>
                <div className="group relative bg-gradient-to-br from-white via-white to-slate-50/50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900/50 rounded-xl border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-sm overflow-hidden transition-all duration-700 hover:shadow-lg hover:shadow-slate-300/30 dark:hover:shadow-slate-900/50 hover:-translate-y-1 hover:border-accent-cyan/20 flex flex-col">
                  <div className="h-0.5 bg-gradient-to-r from-purple-500 to-purple-600"></div>
                  <div className="p-3 md:p-4 flex flex-col">
                    <div className="w-8 h-8 bg-purple-50 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                      <Video className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold font-display mb-1.5 text-primary-dark dark:text-white group-hover:text-accent-cyan transition-colors">
                      {copy.equipment.devices[0].name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 font-body leading-relaxed text-xs md:text-sm">
                      {copy.equipment.devices[0].description}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={200}>
                <div className="group relative bg-gradient-to-br from-white via-white to-slate-50/50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900/50 rounded-xl border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-sm overflow-hidden transition-all duration-700 hover:shadow-lg hover:shadow-slate-300/30 dark:hover:shadow-slate-900/50 hover:-translate-y-1 hover:border-accent-cyan/20 flex flex-col">
                  <div className="h-0.5 bg-gradient-to-r from-slate-600 to-slate-700"></div>
                  <div className="p-3 md:p-4 flex flex-col">
                    <div className="w-8 h-8 bg-slate-50 dark:bg-slate-800/50 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                      <Camera className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold font-display mb-1.5 text-primary-dark dark:text-white group-hover:text-accent-cyan transition-colors">
                      {copy.equipment.devices[1].name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 font-body leading-relaxed text-xs md:text-sm">
                      {copy.equipment.devices[1].description}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-500/0 via-slate-500/0 to-slate-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={300}>
                <div className="group relative bg-gradient-to-br from-white via-white to-slate-50/50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900/50 rounded-xl border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-sm overflow-hidden transition-all duration-700 hover:shadow-lg hover:shadow-slate-300/30 dark:hover:shadow-slate-900/50 hover:-translate-y-1 hover:border-accent-cyan/20 flex flex-col">
                  <div className="h-0.5 bg-gradient-to-r from-cyan-500 to-cyan-600"></div>
                  <div className="p-3 md:p-4 flex flex-col">
                    <div className="w-8 h-8 bg-cyan-50 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                      <Aperture className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold font-display mb-1.5 text-primary-dark dark:text-white group-hover:text-accent-cyan transition-colors">
                      {copy.equipment.devices[2].name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 font-body leading-relaxed text-xs md:text-sm">
                      {copy.equipment.devices[2].description}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right side - Certifications */}
            <ScrollReveal direction="up" delay={400}>
              <div className="flex flex-col">
                <div className="bg-gradient-to-br from-white via-white to-slate-50/50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900/50 rounded-xl border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-sm p-4 md:p-5 shadow-xl shadow-slate-200/30 dark:shadow-slate-900/30 flex flex-col">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-base md:text-lg font-bold font-display mb-2 text-primary-dark dark:text-white">
                      {copy.equipment.certifications.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 font-body leading-relaxed mb-3 text-xs md:text-sm">
                      {copy.equipment.certifications.intro}
                      </p>
                      <ul className="space-y-2">
                      {copy.equipment.certifications.bullets.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-4 h-4 rounded bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center mt-0.5">
                            <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                          </div>
                          <span className="text-slate-700 dark:text-slate-300 font-body leading-relaxed text-xs md:text-sm">{item}</span>
                        </li>
                      ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proceso" className="relative py-24 md:py-32 px-4 md:px-8 -mt-12 overflow-hidden">
        <div className="absolute inset-0">
          <PatternBackground opacity={0.04} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <ScrollReveal direction="up" delay={0}>
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-primary-dark dark:text-white tracking-tight">
                {copy.process.title} <span className="text-accent-cyan">{copy.process.highlight}</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-body font-light leading-relaxed">
                {copy.process.subtitle}
              </p>
            </div>
          </ScrollReveal>

          {/* Process Tabs */}
          <ScrollReveal direction="up" delay={100}>
            <div className="flex flex-col items-center gap-3 mb-12 md:mb-16 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full">
                <button
                  onClick={() => setActiveProcess('tours')}
                  className={`group relative flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 font-semibold overflow-hidden ${
                    activeProcess === 'tours'
                      ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-xl shadow-purple-500/30 scale-105'
                      : 'bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-2 border-slate-200/60 dark:border-slate-700/60 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:border-accent-cyan/40 hover:scale-105'
                  }`}
                >
                  <Video size={22} className={activeProcess === 'tours' ? 'text-white' : ''} />
                  <span className="text-sm md:text-base">{copy.process.tabs.tours}</span>
                  {activeProcess === 'tours' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                  )}
                </button>
                <button
                  onClick={() => setActiveProcess('drone')}
                  className={`group relative flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 font-semibold overflow-hidden ${
                    activeProcess === 'drone'
                      ? 'bg-gradient-to-r from-slate-600 to-slate-700 text-white shadow-xl shadow-slate-500/30 scale-105'
                      : 'bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-2 border-slate-200/60 dark:border-slate-700/60 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:border-accent-cyan/40 hover:scale-105'
                  }`}
                >
                  <Camera size={22} className={activeProcess === 'drone' ? 'text-white' : ''} />
                  <span className="text-sm md:text-base">{copy.process.tabs.drone}</span>
                  {activeProcess === 'drone' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                  )}
                </button>
              </div>
              <p className="text-xs text-slate-400 dark:text-slate-500 font-body italic mt-2">
                {copy.process.helper}
              </p>
            </div>
          </ScrollReveal>

          {/* Active Process Content */}
          {activeProcess === 'tours' ? (
            <ScrollReveal direction="up" delay={200}>
              <div className="relative max-w-5xl mx-auto">
                {/* Línea vertical decorativa */}
                <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400/30 via-slate-300/20 dark:via-slate-600/20 to-transparent"></div>
                
                <div className="flex flex-col gap-6 md:gap-8 mb-8 md:mb-12">
                  {copy.process.stepsTours.map((step, index) => (
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
            </ScrollReveal>
          ) : (
            <ScrollReveal direction="up" delay={200}>
              <div className="relative max-w-5xl mx-auto">
                {/* Línea vertical decorativa */}
                <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-400/30 via-slate-300/20 dark:via-slate-600/20 to-transparent"></div>
                
                <div className="flex flex-col gap-6 md:gap-8 mb-8 md:mb-12">
                  {copy.process.stepsDrone.map((step, index) => (
                    <div 
                      key={index} 
                      className="relative group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Punto en la línea del timeline */}
                      <div className="hidden md:block absolute left-6 top-8 w-4 h-4 rounded-full bg-gradient-to-br from-slate-500 to-slate-600 shadow-lg shadow-slate-500/50 z-10 group-hover:scale-150 transition-transform duration-300"></div>
                      
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
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative py-24 md:py-32 px-4 md:px-8 -mt-12 overflow-hidden">
        <div className="absolute inset-0">
          <PatternBackground opacity={0.04} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <ScrollReveal direction="up" delay={0}>
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-primary-dark dark:text-white tracking-tight">
                {copy.faq.title} <span className="text-accent-cyan">{copy.faq.highlight}</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-body font-light leading-relaxed">
                {copy.faq.subtitle}
              </p>
            </div>
          </ScrollReveal>

          {/* FAQ Tabs */}
          <ScrollReveal direction="up" delay={100}>
            <div className="flex flex-col items-center gap-3 mb-12 md:mb-16 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full">
                <button
                  onClick={() => {
                    setActiveFAQ('tours');
                    setOpenFAQItems([]);
                  }}
                  className={`group relative flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 font-semibold overflow-hidden ${
                    activeFAQ === 'tours'
                      ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-xl shadow-purple-500/30 scale-105'
                      : 'bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-2 border-slate-200/60 dark:border-slate-700/60 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:border-accent-cyan/40 hover:scale-105'
                  }`}
                >
                  <Video size={22} className={activeFAQ === 'tours' ? 'text-white' : ''} />
                  <span className="text-sm md:text-base">{copy.faq.tabs.tours}</span>
                  {activeFAQ === 'tours' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                  )}
                </button>
                <button
                  onClick={() => {
                    setActiveFAQ('drone');
                    setOpenFAQItems([]);
                  }}
                  className={`group relative flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 font-semibold overflow-hidden ${
                    activeFAQ === 'drone'
                      ? 'bg-gradient-to-r from-slate-600 to-slate-700 text-white shadow-xl shadow-slate-500/30 scale-105'
                      : 'bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-2 border-slate-200/60 dark:border-slate-700/60 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:border-accent-cyan/40 hover:scale-105'
                  }`}
                >
                  <Camera size={22} className={activeFAQ === 'drone' ? 'text-white' : ''} />
                  <span className="text-sm md:text-base">{copy.faq.tabs.drone}</span>
                  {activeFAQ === 'drone' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                  )}
                </button>
              </div>
              <p className="text-xs text-slate-400 dark:text-slate-500 font-body italic mt-2">
                {copy.faq.helper}
              </p>
            </div>
          </ScrollReveal>

          {/* Active FAQ Content - Same design as Home */}
          {activeFAQ === 'tours' ? (
            <ScrollReveal direction="up" delay={200}>
              <div className="space-y-4 max-w-4xl mx-auto">
                {[0, 1, 2, 3].map((index) => {
                  const isOpen = openFAQItems.includes(index);
                  return (
                    <div 
                      key={index}
                      className={`group relative bg-gradient-to-br from-white/90 via-white/70 to-white/50 dark:from-slate-800/90 dark:via-slate-800/70 dark:to-slate-800/50 backdrop-blur-sm rounded-2xl ${
                        isOpen 
                          ? 'shadow-xl shadow-slate-200/20 dark:shadow-slate-900/20'
                          : 'shadow-lg shadow-slate-200/20 dark:shadow-slate-900/20'
                      } overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1`}
                      style={{ border: 'none !important', borderTop: 'none !important', borderBottom: 'none !important', borderLeft: 'none !important', borderRight: 'none !important' }}
                    >
                      <button
                        onClick={() => toggleFAQItem(index)}
                        className="w-full px-6 md:px-8 py-6 text-left flex justify-between items-start gap-4 hover:bg-gradient-to-r hover:from-white/50 hover:to-transparent dark:hover:from-slate-700/50 transition-all focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-slate-600 focus:ring-offset-2"
                        style={{ 
                          borderBottom: 'none !important', 
                          borderTop: 'none !important', 
                          marginBottom: 0,
                          border: 'none !important',
                          outline: 'none',
                          borderLeft: 'none !important',
                          borderRight: 'none !important',
                          boxShadow: 'none'
                        }}
                        onMouseDown={(e) => {
                          e.currentTarget.style.border = 'none';
                          e.currentTarget.style.borderBottom = 'none';
                          e.currentTarget.style.borderTop = 'none';
                        }}
                        onMouseUp={(e) => {
                          e.currentTarget.style.border = 'none';
                          e.currentTarget.style.borderBottom = 'none';
                          e.currentTarget.style.borderTop = 'none';
                        }}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${index}`}
                      >
                        <div className="flex-1">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center font-bold text-sm mt-1 text-slate-500 dark:text-slate-400">
                              {index + 1}
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-primary-dark dark:text-white font-body pr-4 leading-tight">
                              {t(`faq.design.questions.${index}.question`)}
                            </h3>
                          </div>
                        </div>
                        <div className="flex-shrink-0 mt-1">
                          <div className={`w-10 h-10 flex items-center justify-center transition-transform duration-300 text-slate-600 dark:text-slate-400 ${
                            isOpen ? 'rotate-180' : ''
                          }`}>
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </button>
                      
                      <div
                        id={`faq-answer-${index}`}
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                        style={{
                          willChange: 'max-height, opacity',
                          borderTop: 'none !important',
                          marginTop: 0,
                          paddingTop: 0,
                          border: 'none !important',
                          outline: 'none',
                          borderBottom: 'none !important',
                          borderLeft: 'none !important',
                          borderRight: 'none !important',
                          boxShadow: 'none'
                        }}
                      >
                        {isOpen && (
                          <div className="px-6 md:px-8 pb-6" style={{ borderTop: 'none', borderBottom: 'none', paddingTop: 0, border: 'none', marginTop: 0, marginBottom: 0 }}>
                            <div className="ml-12 pl-4" style={{ border: 'none', marginTop: 0, paddingTop: 0 }}>
                              <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-body">
                                {t(`faq.design.questions.${index}.answer`)}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          ) : (
            <ScrollReveal direction="up" delay={200}>
              <div className="space-y-4 max-w-4xl mx-auto">
                {[0, 1, 2, 3].map((index) => {
                  const isOpen = openFAQItems.includes(index);
                  return (
                    <div 
                      key={index}
                      className={`group relative bg-gradient-to-br from-white/90 via-white/70 to-white/50 dark:from-slate-800/90 dark:via-slate-800/70 dark:to-slate-800/50 backdrop-blur-sm rounded-2xl ${
                        isOpen 
                          ? 'shadow-xl shadow-slate-200/20 dark:shadow-slate-900/20'
                          : 'shadow-lg shadow-slate-200/20 dark:shadow-slate-900/20'
                      } overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1`}
                      style={{ border: 'none !important', borderTop: 'none !important', borderBottom: 'none !important', borderLeft: 'none !important', borderRight: 'none !important' }}
                    >
                      <button
                        onClick={() => toggleFAQItem(index)}
                        className="w-full px-6 md:px-8 py-6 text-left flex justify-between items-start gap-4 hover:bg-gradient-to-r hover:from-white/50 hover:to-transparent dark:hover:from-slate-700/50 transition-all focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-slate-600 focus:ring-offset-2"
                        style={{ 
                          borderBottom: 'none', 
                          borderTop: 'none', 
                          marginBottom: 0,
                          border: 'none',
                          outline: 'none'
                        }}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-drone-${index}`}
                      >
                        <div className="flex-1">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center font-bold text-sm mt-1 text-slate-500 dark:text-slate-400">
                              {index + 1}
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-primary-dark dark:text-white font-body pr-4 leading-tight">
                              {t(`faq.aerial.questions.${index}.question`)}
                            </h3>
                          </div>
                        </div>
                        <div className="flex-shrink-0 mt-1">
                          <div className={`w-10 h-10 flex items-center justify-center transition-transform duration-300 text-slate-600 dark:text-slate-400 ${
                            isOpen ? 'rotate-180' : ''
                          }`}>
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </button>
                      
                      <div
                        id={`faq-answer-drone-${index}`}
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                        style={{
                          willChange: 'max-height, opacity',
                          borderTop: 'none',
                          marginTop: 0,
                          paddingTop: 0,
                          border: 'none',
                          outline: 'none',
                          borderBottom: 'none',
                          borderLeft: 'none',
                          borderRight: 'none'
                        }}
                      >
                        {isOpen && (
                          <div className="px-6 md:px-8 pb-6" style={{ borderTop: 'none', borderBottom: 'none', paddingTop: 0, border: 'none', marginTop: 0, marginBottom: 0 }}>
                            <div className="ml-12 pl-4" style={{ border: 'none', marginTop: 0, paddingTop: 0 }}>
                              <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-body">
                                {t(`faq.aerial.questions.${index}.answer`)}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Fhoto;
