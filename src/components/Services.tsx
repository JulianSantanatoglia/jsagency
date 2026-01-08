import { Globe, Bot, Video, Camera } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollReveal from './ScrollReveal';
import PatternBackground from './PatternBackground';

const Services = () => {
  const { t, language } = useLanguage();

  const servicesContent = {
    es: {
      webdev: {
        title: 'Páginas web',
        description: 'Webs modernas que cargan rápido y convierten visitas en clientes.',
        features: [
          'Webs corporativas y landing pages profesionales',
          'Diseño moderno y adaptado a tu marca',
          'Carga rápida y experiencia en móvil y ordenador',
          'Preparadas para aparecer en Google',
          'Formularios de contacto, reservas y WhatsApp',
          'Hosting, dominio y correo corporativo incluidos'
        ],
        cta: 'Quiero una web'
      },
      ai: {
        title: t('services.ai.title'),
        description: 'Automatizaciones que ahorran tiempo y aumentan ventas.',
        features: [
          'Chatbots/asistentes virtuales',
          'Automatización de leads y seguimiento',
          'Integraciones con herramientas internas',
          'Flujos y optimización de procesos',
          'Sistemas inteligentes de gestión',
          'Capacitación y soporte continuo'
        ],
        cta: 'Quiero una automatización'
      },
      tours: {
        title: 'Tours Virtuales 360°',
        description: 'Tours inmersivos para vender propiedades y reservas.',
        features: [
          'Captura 360° con Insta360 X5',
          'Edición y procesamiento profesional',
          'Publicación en plataformas',
          'Integración en web y redes sociales',
          'QR codes para acceso directo',
          'CTAs optimizados para generar leads'
        ],
        cta: 'Quiero un tour virtual'
      },
      drone: {
        title: 'Servicios de Drone',
        description: 'Servicios de drone premium para destacar tu marca.',
        features: [
          'Fotografía aérea inmobiliaria',
          'Videos corporativos con drones',
          'Reels y contenido para redes sociales',
          'Cobertura de propiedades, hoteles, obras y eventos',
          'Edición lista para publicar',
          'Piloto certificado A1/A3 y registro de operador vigente',
          'Gestión de permisos y autorizaciones oficiales'
        ],
        cta: 'Quiero un servicio de drone'
      }
    },
    en: {
      webdev: {
        title: 'Website creation',
        description: 'Modern sites that load fast and turn visitors into customers.',
        features: [
          'Corporate sites and professional landing pages',
          'Modern design tailored to your brand',
          'Fast loading and great experience on mobile and desktop',
          'Built to appear on Google',
          'Contact forms, bookings, and WhatsApp',
          'Hosting, domain and corporate email included'
        ],
        cta: 'I want a website'
      },
      ai: {
        title: t('services.ai.title'),
        description: 'Automations that save time and increase sales.',
        features: [
          'Chatbots/virtual assistants',
          'Lead automation and follow-up',
          'Integrations with internal tools',
          'Workflows and process optimization',
          'Intelligent management systems',
          'Training and ongoing support'
        ],
        cta: 'I want to automate my business'
      },
      tours: {
        title: 'Virtual Tours',
        description: 'Immersive tours to sell properties and bookings.',
        features: [
          '360° capture with Insta360 X5',
          'Professional editing and processing',
          'Publishing on platforms',
          'Web and social media integration',
          'QR codes for direct access',
          'CTAs optimized to generate leads'
        ],
        cta: 'See Fhoto'
      },
      drone: {
        title: 'Drone Services',
        description: 'Premium drone services to make your brand stand out.',
        features: [
          'Aerial real estate photography',
          'Corporate drone videos',
          'Reels and social media content',
          'Coverage for properties, hotels, construction sites, and events',
          'Editing ready to publish',
          'A1/A3 certified pilot and active operator registration',
          'Official permits and authorization management'
        ],
        cta: 'I want a drone service'
      }
    }
  } as const;

  const copy = servicesContent[language];

  const services = [
    {
      id: 'webdev',
      title: copy.webdev.title,
      description: copy.webdev.description,
      features: copy.webdev.features,
      icon: Globe,
      image: '/images/proyectos/mushroommdp.jpg',
      cta: copy.webdev.cta,
      ctaLink: '#contacto',
      featured: true,
      color: 'blue',
      price: language === 'es' ? 'Desde 50€/mes' : 'From €50/month'
    },
    {
      id: 'ai',
      title: copy.ai.title,
      description: copy.ai.description,
      features: copy.ai.features,
      icon: Bot,
      image: '/images/proyectos/automatizacion.jpg',
      cta: copy.ai.cta,
      ctaLink: '#contacto',
      featured: true,
      color: 'emerald',
      price: language === 'es' ? 'Desde 200€' : 'From €200'
    },
    {
      id: '360',
      title: copy.tours.title,
      description: copy.tours.description,
      features: copy.tours.features,
      icon: Video,
      image: '/images/proyectos/360.jpg',
      cta: copy.tours.cta,
      ctaLink: '#contacto',
      featured: true,
      color: 'purple',
      price: language === 'es' ? 'Desde 100€' : 'From €100'
    },
    {
      id: 'drone',
      title: copy.drone.title,
      description: copy.drone.description,
      features: copy.drone.features,
      icon: Camera,
      image: '/images/proyectos/inmobiliaria.jpg',
      cta: copy.drone.cta,
      ctaLink: '#contacto',
      featured: true,
      color: 'orange',
      price: language === 'es' ? 'Desde 120€/hora' : 'From €120/hour'
    }
  ];

  return (
    <section 
      id="servicios" 
      className="relative pt-12 md:pt-16 pb-24 md:pb-32 px-4 md:px-8"
      aria-labelledby="services-title"
    >
      <PatternBackground opacity={0.04} />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <ScrollReveal direction="up" delay={0}>
          <header className="text-center mb-12 md:mb-16">
            <h2 
              id="services-title"
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-primary-dark dark:text-white tracking-tight"
            >
              {t('services.title').replace(t('services.titleHighlight'), '').trim()} <span className="text-accent-cyan">{t('services.titleHighlight')}</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-body px-4 font-light">
              {t('services.subtitle')}
            </p>
          </header>
        </ScrollReveal>

        {/* All Services - Rectángulo completo dividido en 4 secciones */}
        <ScrollReveal direction="up" delay={100}>
          <div className="w-full bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700/50 overflow-hidden shadow-lg">
            {/* Barra superior con gradientes de los 4 servicios */}
            <div className="h-2 flex">
              <div className="flex-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600"></div>
              <div className="flex-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600"></div>
              <div className="flex-1 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700"></div>
              <div className="flex-1 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700"></div>
            </div>
            
            {/* Contenido dividido en 4 secciones */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200/80 dark:divide-slate-700/50">
              {services.map((service, index) => (
                <article 
                  key={service.id}
                  className="group relative flex flex-col p-8 hover:bg-slate-50/50 dark:hover:bg-slate-700/20 transition-colors duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Header con icono y título */}
                  <div className="mb-6">
                    <div className={`inline-flex w-16 h-16 rounded-2xl ${
                      service.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/40 dark:to-cyan-900/40' : 
                      service.color === 'emerald' ? 'bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/40 dark:to-teal-900/40' :
                      service.color === 'purple' ? 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/40 dark:to-purple-800/40' :
                      'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/40 dark:to-orange-800/40'
                    } items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm`}>
                      <service.icon size={32} className={`${
                        service.color === 'blue' ? 'text-blue-600 dark:text-blue-400' : 
                        service.color === 'emerald' ? 'text-emerald-600 dark:text-emerald-400' :
                        service.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                        'text-orange-600 dark:text-orange-400'
                      }`} aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-3 group-hover:text-accent-cyan transition-colors break-words leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-[15px] text-slate-600 dark:text-slate-400 font-body leading-relaxed mb-5 min-h-[3.5rem]">
                      {service.description}
                    </p>
                  </div>

                  {/* Precio destacado */}
                  <div className="mb-6 min-h-[3.5rem] flex items-center">
                    {service.price && (
                      <div className={`inline-flex items-center px-5 py-2.5 rounded-xl font-bold text-lg ${
                        service.color === 'blue' 
                          ? 'bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-700/60' : 
                        service.color === 'emerald'
                          ? 'bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-700/60'
                          : service.color === 'purple'
                          ? 'bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 text-purple-700 dark:text-purple-300 border border-purple-200/60 dark:border-purple-700/60'
                          : 'bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 text-orange-700 dark:text-orange-300 border border-orange-200/60 dark:border-orange-700/60'
                      } shadow-sm group-hover:shadow-md transition-shadow`}>
                        {service.price}
                      </div>
                    )}
                  </div>

                  {/* Features con diseño limpio */}
                  <div className="mb-6 space-y-3 flex-1">
                    {service.features.map((feature, i) => (
                      <div 
                        key={i} 
                        className="flex items-start gap-3 group/item"
                        role="listitem"
                      >
                        <div className={`flex-shrink-0 w-5 h-5 rounded-md mt-0.5 ${
                          service.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/50' : 
                          service.color === 'emerald' ? 'bg-emerald-100 dark:bg-emerald-900/50' :
                          service.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/50' :
                          'bg-orange-100 dark:bg-orange-900/50'
                        } flex items-center justify-center group-hover/item:scale-110 transition-transform`}>
                          <svg className={`w-3 h-3 ${
                            service.color === 'blue' ? 'text-blue-600 dark:text-blue-400' : 
                            service.color === 'emerald' ? 'text-emerald-600 dark:text-emerald-400' :
                            service.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                            'text-orange-600 dark:text-orange-400'
                          }`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-body flex-1">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Botones: CTA y Ver más */}
                  <div className="flex flex-col gap-2 mt-auto">
                    <a 
                      href={service.ctaLink} 
                      className={`group/cta relative inline-flex items-center justify-center gap-1.5 px-4 py-2.5 w-full rounded-lg font-medium text-xs transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden ${
                        service.color === 'blue' 
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white focus:ring-blue-500 shadow-sm shadow-blue-500/10 hover:shadow-md hover:shadow-blue-500/20' 
                          : service.color === 'emerald'
                          ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white focus:ring-emerald-500 shadow-sm shadow-emerald-500/10 hover:shadow-md hover:shadow-emerald-500/20'
                          : service.color === 'purple'
                          ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white focus:ring-purple-500 shadow-sm shadow-purple-500/10 hover:shadow-md hover:shadow-purple-500/20'
                          : 'bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white focus:ring-orange-500 shadow-sm shadow-orange-500/10 hover:shadow-md hover:shadow-orange-500/20'
                      }`}
                    >
                      <span className="relative z-10">{service.cta}</span>
                      <span className="relative z-10 group-hover/cta:translate-x-0.5 transition-transform duration-300 text-sm">→</span>
                      <div className={`absolute inset-0 ${
                        service.color === 'blue' ? 'bg-gradient-to-r from-blue-700 to-cyan-700' : 
                        service.color === 'emerald' ? 'bg-gradient-to-r from-emerald-700 to-teal-700' :
                        service.color === 'purple' ? 'bg-gradient-to-r from-purple-700 to-purple-800' :
                        'bg-gradient-to-r from-orange-700 to-orange-800'
                      } opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300`}></div>
                    </a>
                    <a 
                      href={`#why-${service.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById(`why-${service.id}`);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                      className={`text-xs font-medium text-center py-2 text-slate-600 dark:text-slate-400 hover:text-accent-cyan transition-colors underline-offset-4 hover:underline ${
                        service.color === 'blue' ? 'hover:text-blue-600 dark:hover:text-blue-400' : 
                        service.color === 'emerald' ? 'hover:text-emerald-600 dark:hover:text-emerald-400' :
                        service.color === 'purple' ? 'hover:text-purple-600 dark:hover:text-purple-400' :
                        'hover:text-orange-600 dark:hover:text-orange-400'
                      }`}
                    >
                      ¿Por qué {service.title.toLowerCase()}? ↓
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
