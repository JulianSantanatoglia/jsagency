import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe, Video, Camera, Bot } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface ServicePanel {
  id: string;
  title: string;
  description: string;
  items: string[];
  icon: typeof Globe;
  image: string;
  gradient: string;
  textColor: string;
  bgColor: string;
}

const ServicesPanels = () => {
  const { t } = useLanguage();
  const [expandedPanel, setExpandedPanel] = useState<string | null>(null);

  const services: ServicePanel[] = [
    {
      id: 'webdev',
      title: t('servicesPanels.webdev.title') || 'Páginas web',
      description: t('servicesPanels.webdev.description') || 'Landing pages de alto impacto, sitios corporativos y eCommerce optimizados para conversión.',
      items: [
        t('servicesPanels.webdev.item1') || 'Landing pages de alto impacto',
        t('servicesPanels.webdev.item2') || 'Sitios corporativos',
        t('servicesPanels.webdev.item3') || 'eCommerce',
        t('servicesPanels.webdev.item4') || 'SEO técnico + performance',
        t('servicesPanels.webdev.item5') || 'Mantenimiento'
      ],
      icon: Globe,
      image: '/images/proyectos/mushroommdp.jpg',
      gradient: 'from-blue-500 to-blue-600',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'virtualtours',
      title: t('servicesPanels.virtualtours.title') || 'Recorridos virtuales',
      description: t('servicesPanels.virtualtours.description') || 'Tours 360° para inmobiliarias y hostelería con tecnología Insta360 X5.',
      items: [
        t('servicesPanels.virtualtours.item1') || 'Tours 360 (inmobiliaria / hostelería)',
        t('servicesPanels.virtualtours.item2') || 'Captura + edición + publicación',
        t('servicesPanels.virtualtours.item3') || 'Integración en web',
        t('servicesPanels.virtualtours.item4') || 'CTA y conversión'
      ],
      icon: Video,
      image: '/images/proyectos/360.jpg',
      gradient: 'from-purple-500 to-purple-600',
      textColor: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 'aerial',
      title: t('servicesPanels.aerial.title') || 'Contenido aéreo',
      description: t('servicesPanels.aerial.description') || 'Foto y video con dron para propiedades, hoteles, obras y eventos.',
      items: [
        t('servicesPanels.aerial.item1') || 'Foto/video con dron',
        t('servicesPanels.aerial.item2') || 'Reels para redes',
        t('servicesPanels.aerial.item3') || 'Propiedades, hoteles, obras, eventos',
        t('servicesPanels.aerial.item4') || 'Edición pro'
      ],
      icon: Camera,
      image: '/images/proyectos/inmobiliaria.jpg',
      gradient: 'from-orange-500 to-orange-600',
      textColor: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      id: 'automation',
      title: t('servicesPanels.automation.title') || 'Automatización con IA',
      description: t('servicesPanels.automation.description') || 'Chatbots, asistentes y automatizaciones para optimizar procesos empresariales.',
      items: [
        t('servicesPanels.automation.item1') || 'Chatbots y asistentes',
        t('servicesPanels.automation.item2') || 'Automatizaciones de leads/CRM/emails',
        t('servicesPanels.automation.item3') || 'Integraciones no-code / APIs',
        t('servicesPanels.automation.item4') || 'Optimización de procesos',
        t('servicesPanels.automation.item5') || 'Sistemas inteligentes'
      ],
      icon: Bot,
      image: '/images/proyectos/automatizacion.jpg',
      gradient: 'from-emerald-500 to-emerald-600',
      textColor: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    }
  ];

  const handlePanelClick = (id: string) => {
    setExpandedPanel(expandedPanel === id ? null : id);
  };

  return (
    <div className="w-full">
      {/* Desktop: 4 services side by side, full width, modern creative design */}
      <div className="hidden lg:grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, width: '100%', minHeight: '650px' }}>
        {services.map((service) => {
          const IconComponent = service.icon;
          
          return (
            <div
              key={service.id}
              className="group relative bg-gradient-to-b from-white to-gray-50 overflow-hidden border-r border-gray-200/50 last:border-r-0 hover:shadow-2xl transition-all duration-700 flex flex-col hover:from-white hover:to-white"
              style={{ minWidth: 0 }}
            >
              {/* Image Section - Creative Overlay */}
              <div className="relative flex-1 min-h-[380px] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <OptimizedImage
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                />
                
                {/* Creative Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />
                
                {/* Subtle Pattern Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700" 
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                    backgroundSize: '24px 24px'
                  }}
                />
                
                {/* Icon Badge - Creative Floating */}
                <div className="absolute top-8 left-8 z-10">
                  <div className="relative">
                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                    {/* Icon container */}
                    <div className="relative p-4 rounded-2xl bg-white/95 backdrop-blur-sm shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg`}>
                        <IconComponent size={24} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Number Badge - Creative Touch */}
                <div className="absolute top-8 right-8 z-10">
                  <div className={`w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <span className={`text-lg font-extrabold ${service.textColor}`}>
                      {services.indexOf(service) + 1}
                    </span>
                  </div>
                </div>
                
                {/* Title Section - Modern Typography */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
                  <div className="flex items-end justify-between">
                    <h3 className="text-3xl font-extrabold font-display text-white leading-tight drop-shadow-2xl group-hover:translate-y-[-4px] transition-transform duration-500">
                      {service.title}
                    </h3>
                    {/* Arrow indicator */}
                    <div className={`w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-2`}>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section - Clean and Spacious */}
              <div className="p-8 bg-white border-t-2 border-gray-100 group-hover:border-t-4 transition-all duration-500" style={{ borderTopColor: 'transparent' }}>
                <div className={`h-1 w-0 group-hover:w-full transition-all duration-700 mb-6 bg-gradient-to-r ${service.gradient} rounded-full`} />
                
                <ul className="space-y-3">
                  {service.items.slice(0, 3).map((item, index) => (
                    <li 
                      key={index} 
                      className="flex items-start gap-3 group/item"
                    >
                      {/* Creative bullet */}
                      <div className={`mt-1.5 w-2 h-2 rounded-full ${service.textColor} bg-current flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300`} 
                        style={{ boxShadow: `0 0 8px currentColor` }}
                      />
                      <span className="text-sm text-slate-700 font-body leading-relaxed group-hover/item:text-slate-900 transition-colors duration-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {/* Subtle accent line */}
                <div className={`mt-6 h-px w-0 group-hover:w-full transition-all duration-700 bg-gradient-to-r ${service.gradient} opacity-30`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile/Tablet: Vertical stack - Modern design */}
      <div className="lg:hidden space-y-6 px-4">
        {services.map((service, index) => {
          const isExpanded = expandedPanel === service.id;
          const IconComponent = service.icon;
          
          return (
            <div
              key={service.id}
              className="relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <OptimizedImage
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon and Number */}
                <div className="absolute top-6 left-6 flex items-center gap-3">
                  <div className={`p-3 rounded-xl bg-white/95 backdrop-blur-sm shadow-xl`}>
                    <div className={`p-2.5 rounded-lg bg-gradient-to-br ${service.gradient} shadow-lg`}>
                      <IconComponent size={20} className="text-white" />
                    </div>
                  </div>
                  <div className={`w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg`}>
                    <span className={`text-sm font-extrabold ${service.textColor}`}>
                      {index + 1}
                    </span>
                  </div>
                </div>
                
                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
                  <h3 className="text-2xl font-extrabold font-display text-white leading-tight drop-shadow-lg">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-white">
                <button
                  onClick={() => handlePanelClick(service.id)}
                  className="w-full text-left focus:outline-none focus:ring-2 focus:ring-accent-cyan rounded-lg"
                  aria-expanded={isExpanded}
                  aria-controls={`panel-${service.id}-content`}
                >
                  {/* Expandable items */}
                  <div
                    id={`panel-${service.id}-content`}
                    className={`overflow-hidden transition-all duration-300 ${
                      isExpanded ? 'max-h-[300px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <ul className="space-y-3">
                      {service.items.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className={`mt-1.5 w-2 h-2 rounded-full ${service.textColor} bg-current flex-shrink-0`} 
                            style={{ boxShadow: `0 0 6px currentColor` }}
                          />
                          <span className="text-sm text-slate-700 font-body leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Expand indicator */}
                  <div className="mt-4 flex items-center justify-center">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesPanels;

