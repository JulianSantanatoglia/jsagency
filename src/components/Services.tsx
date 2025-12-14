import { Globe, Bot, Video, Camera } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollReveal from './ScrollReveal';
import PatternBackground from './PatternBackground';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 'webdev',
      title: t('services.webdev.title'),
      description: 'Webs rápidas, escalables y orientadas a conversión.',
      features: [
        'Landing pages y webs corporativas',
        'Diseño UI moderno y minimalista',
        'Performance / Core Web Vitals',
        'SEO técnico + analítica',
        'Integraciones (formularios, reservas, WhatsApp, etc.)',
        'Mantenimiento y evolución'
      ],
      icon: Globe,
      image: '/images/proyectos/mushroommdp.jpg',
      cta: 'Quiero una web',
      ctaLink: '#contacto',
      featured: true,
      color: 'blue'
    },
    {
      id: 'ai',
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
      icon: Bot,
      image: '/images/proyectos/automatizacion.jpg',
      cta: 'Quiero automatizar mi negocio',
      ctaLink: '#contacto',
      featured: true,
      color: 'emerald'
    },
    {
      id: '360',
      title: 'Recorridos 360',
      description: 'Tours inmersivos para vender propiedades y reservas.',
      features: [
        'Captura 360° con Insta360 X5',
        'Edición y procesamiento profesional',
        'Publicación en plataformas',
        'Integración en web y redes sociales',
        'QR codes para acceso directo',
        'CTAs optimizados para generar leads'
      ],
      icon: Video,
      image: '/images/proyectos/360.jpg',
      cta: 'Ver Fhoto',
      ctaLink: '/proyectos/fhoto',
      featured: false,
      color: 'purple'
    },
    {
      id: 'drone',
      title: 'Contenido Aéreo',
      description: 'Contenido aéreo premium para destacar tu marca.',
      features: [
        'Fotografía aérea inmobiliaria',
        'Videos corporativos con drones',
        'Reels y contenido para redes sociales',
        'Cobertura de propiedades, hoteles, obras y eventos',
        'Edición lista para publicar',
        'Operación certificada A1/A3'
      ],
      icon: Camera,
      image: '/images/proyectos/inmobiliaria.jpg',
      cta: 'Ver Fhoto',
      ctaLink: '/proyectos/fhoto',
      featured: false,
      color: 'orange'
    }
  ];

  const featuredServices = services.filter(s => s.featured);

  return (
    <section 
      id="servicios" 
      className="relative py-24 md:py-32 px-4 md:px-8"
      aria-labelledby="services-title"
    >
      <PatternBackground opacity={0.04} />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <ScrollReveal direction="up" delay={0}>
          <header className="text-center mb-20 md:mb-24">
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

        {/* Featured Services - Web & IA */}
        <ScrollReveal direction="up" delay={100}>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto justify-center">
            {featuredServices.map((service, index) => (
                <article 
                  key={service.id}
                  className="group relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Card moderna con gradiente y efecto glassmorphism */}
                  <div className="relative bg-gradient-to-br from-white via-white to-slate-50/50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900/50 rounded-3xl border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-sm overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-slate-300/30 dark:hover:shadow-slate-900/50 hover:-translate-y-3 hover:border-accent-cyan/20">
                    {/* Barra superior de color */}
                    <div className={`h-2 ${service.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-gradient-to-r from-emerald-500 to-teal-500'}`}></div>
                    
                    {/* Contenido principal */}
                    <div className="p-8 md:p-10">
                      {/* Header con icono y título */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`flex-shrink-0 w-16 h-16 rounded-2xl ${service.color === 'blue' ? 'bg-blue-50 dark:bg-blue-900/30' : 'bg-emerald-50 dark:bg-emerald-900/30'} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <service.icon size={32} className={service.color === 'blue' ? 'text-blue-600 dark:text-blue-400' : 'text-emerald-600 dark:text-emerald-400'} aria-hidden="true" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl md:text-3xl font-bold font-display text-primary-dark dark:text-white mb-2 group-hover:text-accent-cyan transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-300 text-base font-body leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      {/* Features con diseño moderno */}
                      <div className="mb-8 space-y-3">
                        {service.features.map((feature, i) => (
                          <div 
                            key={i} 
                            className="flex items-start gap-3 group/item"
                            role="listitem"
                          >
                            <div className={`flex-shrink-0 w-6 h-6 rounded-lg ${service.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/40' : 'bg-emerald-100 dark:bg-emerald-900/40'} flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition-transform`}>
                              <svg className={`w-3 h-3 ${service.color === 'blue' ? 'text-blue-600 dark:text-blue-400' : 'text-emerald-600 dark:text-emerald-400'}`} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-body flex-1">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button moderno */}
                      <a 
                        href={service.ctaLink} 
                        className={`group/cta relative inline-flex items-center justify-center gap-2 px-8 py-4 w-full rounded-xl font-semibold text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden ${
                          service.color === 'blue' 
                            ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white focus:ring-blue-500 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40' 
                            : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white focus:ring-emerald-500 shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40'
                        }`}
                      >
                        <span className="relative z-10">{service.cta}</span>
                        <span className="relative z-10 group-hover/cta:translate-x-1 transition-transform">→</span>
                        <div className={`absolute inset-0 ${service.color === 'blue' ? 'bg-gradient-to-r from-blue-700 to-cyan-700' : 'bg-gradient-to-r from-emerald-700 to-teal-700'} opacity-0 group-hover/cta:opacity-100 transition-opacity`}></div>
                      </a>
                    </div>

                    {/* Efecto de brillo sutil en hover */}
                    <div className={`absolute inset-0 ${service.color === 'blue' ? 'bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/5' : 'bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>
                  </div>
                </article>
              ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
