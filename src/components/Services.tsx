import { Globe, Video, Bot, Camera } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import OptimizedImage from './OptimizedImage';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.webdev.title'),
      description: t('services.webdev.description'),
      features: [
        t('services.webdev.feature1'),
        t('services.webdev.feature2')
      ],
      icon: Globe,
      image: '/images/proyectos/mushroommdp.jpg'
    },
    {
      title: t('services.design.title'),
      description: t('services.design.description'),
      features: [
        t('services.design.feature1'),
        t('services.design.feature2')
      ],
      icon: Video,
      image: '/images/proyectos/360.jpg'
    },
    {
      title: t('services.aerial.title'),
      description: t('services.aerial.description'),
      features: [
        t('services.aerial.feature1'),
        t('services.aerial.feature2')
      ],
      icon: Camera,
      image: '/images/proyectos/inmobiliaria.jpg'
    },
    {
      title: t('services.ai.title'),
      description: t('services.ai.description'),
      features: [
        t('services.ai.feature1'),
        t('services.ai.feature2')
      ],
      icon: Bot,
      image: '/images/proyectos/automatizacion.jpg'
    }
  ];

  return (
    <section 
      id="servicios" 
      className="py-16 md:py-24 px-4 md:px-8 bg-gray-50"
      aria-labelledby="services-title"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12 md:mb-16">
          <h2 
            id="services-title"
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display mb-4 text-primary-dark"
          >
            {t('services.title')}
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-body px-4">
            {t('services.subtitle')}
          </p>
        </header>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" role="list" aria-label={t('a11y.servicesList')}>
          {services.map((service, index) => (
            <article 
              key={index} 
              className="bg-slate-50 rounded-2xl border border-slate-200 hover-lift hover:border-accent-cyan hover:shadow-accent-cyan/10 animate-fade-in-up focus-within:ring-2 focus-within:ring-accent-cyan focus-within:ring-offset-2 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
              role="listitem"
              tabIndex={0}
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 overflow-hidden bg-slate-100">
                <OptimizedImage 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
                    <service.icon size={32} className="text-accent-cyan" aria-hidden="true" />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-10">
              <h3 className="text-xl md:text-2xl font-bold font-display mb-3 md:mb-4 text-primary-dark">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-slate-800 mb-4 md:mb-6 font-medium font-body">
                {service.description}
              </p>
              <ul className="flex flex-col gap-2 md:gap-3" role="list" aria-label={t('a11y.serviceFeatures').replace('{service}', service.title)}>
                {service.features.map((feature, i) => (
                  <li key={i} className="text-xs md:text-sm text-slate-600 pl-5 md:pl-6 relative leading-relaxed font-body" role="listitem">
                    <span className="absolute left-0 text-accent-cyan font-bold" aria-hidden="true">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              {index === 2 && (
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <a 
                    href="https://jsgliafly.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent-cyan hover:text-cyan-600 font-semibold text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 rounded-lg px-2 py-1"
                  >
                    <Camera size={16} />
                    {t('services.aerial.link')}
                  </a>
                </div>
              )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

