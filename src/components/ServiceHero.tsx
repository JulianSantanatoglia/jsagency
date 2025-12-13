import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe, Video, Camera, Bot, ArrowRight } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import ScrollReveal from './ScrollReveal';

const ServiceHero = () => {
  const { t } = useLanguage();
  const [hoveredPanel, setHoveredPanel] = useState<string | null>(null);
  const [expandedPanel, setExpandedPanel] = useState<string | null>(null);

  const services = [
    {
      id: 'webdev',
      title: 'Desarrollo web',
      microcopy: 'Webs rápidas, escalables y orientadas a conversión.',
      bullets: [
        'Landing pages de alto impacto',
        'Web corporativa / servicios',
        'eCommerce (si aplica)',
        'SEO técnico + performance (Core Web Vitals)',
        'Integraciones (formularios, reservas, pagos, analytics)',
        'Mantenimiento y evolución'
      ],
      cta: 'Solicitar propuesta',
      icon: Globe,
      image: '/images/proyectos/mushroommdp.jpg',
      color: 'blue',
      gradient: 'from-blue-600/90 to-blue-800/90',
      priority: true
    },
    {
      id: 'virtualtours',
      title: 'Recorridos virtuales',
      microcopy: 'Tours 360 que venden propiedades y llenan reservas.',
      bullets: [
        'Captura 360 + edición profesional',
        'Publicación (Matterport/Insta360 según flujo real)',
        'Inserción en tu web + QR + redes',
        'Optimización para leads (CTA, WhatsApp, reservas)',
        'Entregables listos para inmobiliaria/hostelería'
      ],
      cta: 'Quiero un tour 360',
      icon: Video,
      image: '/images/proyectos/360.jpg',
      color: 'purple',
      gradient: 'from-purple-600/90 to-purple-800/90',
      priority: true
    },
    {
      id: 'aerial',
      title: 'Contenido aéreo',
      microcopy: 'Visuales que elevan tu marca desde otra perspectiva.',
      bullets: [
        'Foto y video con dron',
        'Reels para redes',
        'Propiedades, hoteles, obras, eventos',
        'Edición y entregables listos'
      ],
      cta: 'Consultar',
      icon: Camera,
      image: '/images/proyectos/inmobiliaria.jpg',
      color: 'orange',
      gradient: 'from-orange-600/90 to-orange-800/90',
      priority: false
    },
    {
      id: 'ai',
      title: 'Automatizaciones',
      microcopy: 'Menos tareas repetitivas. Más tiempo para vender.',
      bullets: [
        'Chatbots y asistentes',
        'Automatización de leads/email/CRM',
        'Integraciones (Sheets, formularios, WhatsApp si aplica)',
        'Optimización de procesos'
      ],
      cta: 'Ver automatizaciones',
      icon: Bot,
      image: '/images/proyectos/automatizacion.jpg',
      color: 'emerald',
      gradient: 'from-emerald-600/90 to-emerald-800/90',
      priority: false
    }
  ];

  const handlePanelClick = (id: string) => {
    if (expandedPanel === id) {
      setExpandedPanel(null);
    } else {
      setExpandedPanel(id);
    }
  };

  return (
    <section 
      id="servicios-hero" 
      className="relative py-16 md:py-24 px-4 md:px-8 bg-[#FAF9F7] overflow-hidden -mt-16 md:-mt-24"
      aria-labelledby="services-hero-title"
    >
      <div className="max-w-7xl mx-auto">
        {/* Desktop: Banner with diagonal services */}
        <div className="hidden lg:block relative py-16 md:py-24">
          {/* Banner container */}
          <div className="relative bg-gradient-to-br from-slate-50 to-gray-100 rounded-3xl overflow-hidden border border-gray-200 shadow-xl" style={{ minHeight: '500px' }}>
            {/* Background pattern or subtle gradient */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(135deg, rgba(6, 182, 212, 0.05) 0%, rgba(6, 182, 212, 0.02) 100%)`
              }} />
            </div>

            {/* Diagonal connecting line inside banner */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
              style={{ overflow: 'visible' }}
              viewBox="0 0 1200 500"
              preserveAspectRatio="none"
            >
              <line
                x1="8%"
                y1="60%"
                x2="92%"
                y2="40%"
                stroke="#06B6D4"
                strokeWidth="2"
                strokeDasharray="12,6"
                opacity="0.4"
                className="transition-opacity duration-300"
              />
            </svg>

            {/* Services positioned along diagonal line inside banner */}
            <div className="relative z-20 h-full" style={{ minHeight: '500px' }}>
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const isHovered = hoveredPanel === service.id;
                
                // Diagonal positions inside banner: left to right
                const positions = [
                  { left: '12%', top: '55%' },
                  { left: '38%', top: '48%' },
                  { left: '64%', top: '42%' },
                  { left: '90%', top: '36%' }
                ];
                
                const position = positions[index];

                return (
                  <div
                    key={service.id}
                    className="absolute transition-all duration-700 ease-out cursor-pointer"
                    style={{
                      left: position.left,
                      top: position.top,
                      transform: isHovered 
                        ? 'translate(-50%, -50%) scale(1.5)' 
                        : 'translate(-50%, -50%) scale(1)',
                      zIndex: isHovered ? 50 : 20 + index,
                      transformOrigin: 'center center',
                    }}
                    onMouseEnter={() => setHoveredPanel(service.id)}
                    onMouseLeave={() => setHoveredPanel(null)}
                  >
                    <div
                      className={`relative bg-white rounded-2xl shadow-xl border-2 transition-all duration-700 overflow-hidden backdrop-blur-sm ${
                        isHovered 
                          ? 'border-accent-cyan shadow-[0_25px_70px_-10px_rgba(6,182,212,0.5)]' 
                          : 'border-white/80 hover:border-gray-200 shadow-lg'
                      }`}
                      style={{
                        width: isHovered ? '360px' : '240px',
                      }}
                    >
                      {/* Background Image */}
                      <div className={`relative overflow-hidden transition-all duration-700 ${
                        isHovered ? 'h-52' : 'h-40'
                      }`}>
                        <OptimizedImage
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700"
                          style={{ transform: isHovered ? 'scale(1.15)' : 'scale(1)' }}
                          loading={index < 2 ? "eager" : "lazy"}
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} transition-opacity duration-700 ${
                          isHovered ? 'opacity-75' : 'opacity-65'
                        }`} />
                        
                        {/* Icon */}
                        <div className={`absolute top-4 left-4 bg-white/30 backdrop-blur-md rounded-xl shadow-lg transition-all duration-700 ${
                          isHovered ? 'p-3' : 'p-2.5'
                        }`}>
                          <IconComponent size={isHovered ? 24 : 20} className="text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`bg-white transition-all duration-700 ${isHovered ? 'p-6' : 'p-4'}`}>
                        <h3 className={`font-bold font-display text-primary-dark mb-2 transition-all duration-700 ${
                          isHovered ? 'text-xl' : 'text-base'
                        }`}>
                          {service.title}
                        </h3>
                        
                        {isHovered ? (
                          <div className="space-y-3 animate-fade-in-up">
                            <p className="text-sm text-slate-600 font-body leading-relaxed">
                              {service.microcopy}
                            </p>
                            <ul className="space-y-2">
                              {service.bullets.slice(0, 5).map((bullet, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-slate-700 font-body">
                                  <span className="text-accent-cyan mt-1 font-bold">•</span>
                                  <span className="leading-relaxed">{bullet}</span>
                                </li>
                              ))}
                            </ul>
                            <a
                              href="#contacto"
                              className="inline-flex items-center gap-2 bg-accent-cyan text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-cyan-600 transition-all mt-3 font-body shadow-md hover:shadow-lg"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {service.cta}
                              <ArrowRight size={14} />
                            </a>
                          </div>
                        ) : (
                          <p className="text-xs text-slate-600 font-body line-clamp-2 leading-relaxed">
                            {service.microcopy}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet: Accordion */}
        <div className="lg:hidden space-y-4">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isHovered = hoveredPanel === service.id;
            const isPriority = service.priority;

            return (
              <div
                key={service.id}
                className={`relative group cursor-pointer transition-all duration-500 ease-out rounded-2xl overflow-hidden ${
                  isHovered 
                    ? 'lg:col-span-4' 
                    : isPriority && index === 0
                    ? 'lg:col-span-2'
                    : 'lg:col-span-1'
                }`}
                onMouseEnter={() => setHoveredPanel(service.id)}
                onMouseLeave={() => setHoveredPanel(null)}
                style={{
                  minHeight: isHovered ? '400px' : '300px',
                  height: isHovered ? 'auto' : '300px'
                }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <OptimizedImage
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} transition-opacity duration-500 ${
                    isHovered ? 'opacity-70' : 'opacity-60'
                  }`} />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8 text-white">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                        <IconComponent size={24} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold font-display">
                        {service.title}
                      </h3>
                      {isPriority && index === 0 && !isHovered && (
                        <span className="ml-auto bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                          Más demandado
                        </span>
                      )}
                    </div>

                    {/* Microcopy - always visible */}
                    <p className="text-white/90 text-base md:text-lg font-medium mb-4 font-body">
                      {service.microcopy}
                    </p>

                    {/* Expanded content on hover */}
                    {isHovered && (
                      <div className="mt-6 space-y-3 animate-fade-in-up">
                        <ul className="space-y-2">
                          {service.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-2 text-white/95 font-body">
                              <span className="text-white mt-1.5">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="pt-4">
                          <a
                            href="#contacto"
                            className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-all hover:scale-105 font-body"
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                          >
                            {service.cta}
                            <ArrowRight size={18} />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile/Tablet: Accordion */}
        <div className="lg:hidden space-y-4">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isExpanded = expandedPanel === service.id;

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
              >
                <button
                  onClick={() => handlePanelClick(service.id)}
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2"
                  aria-expanded={isExpanded}
                  aria-controls={`service-${service.id}-content`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`bg-gradient-to-r ${service.gradient} rounded-xl p-3 text-white`}>
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-display text-primary-dark mb-1">
                          {service.title}
                        </h3>
                        <p className="text-sm text-slate-600 font-body">
                          {service.microcopy}
                        </p>
                      </div>
                    </div>
                    <div className={`flex-shrink-0 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}>
                      <svg
                        className="w-6 h-6 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>

                <div
                  id={`service-${service.id}-content`}
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                      <OptimizedImage
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        loading={index < 2 ? "eager" : "lazy"}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-60`} />
                    </div>
                    <ul className="space-y-2 mb-6">
                      {service.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-700 font-body">
                          <span className="text-accent-cyan mt-1">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contacto"
                      className="inline-flex items-center gap-2 bg-accent-cyan text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-600 transition-all font-body w-full justify-center"
                    >
                      {service.cta}
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
