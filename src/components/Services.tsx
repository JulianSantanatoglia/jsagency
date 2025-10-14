import { Globe, Palette, Bot, Camera } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

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
      icon: Globe
    },
    {
      title: t('services.design.title'),
      description: t('services.design.description'),
      features: [
        t('services.design.feature1'),
        t('services.design.feature2')
      ],
      icon: Palette
    },
    {
      title: t('services.ai.title'),
      description: t('services.ai.description'),
      features: [
        t('services.ai.feature1'),
        t('services.ai.feature2')
      ],
      icon: Bot
    },
    {
      title: t('services.aerial.title'),
      description: t('services.aerial.description'),
      features: [
        t('services.aerial.feature1'),
        t('services.aerial.feature2')
      ],
      icon: Camera
    }
  ];

  return (
    <section 
      id="servicios" 
      className="py-16 md:py-24 px-4 md:px-8 bg-white"
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
              className="bg-slate-50 p-6 md:p-10 rounded-2xl border border-slate-200 hover-lift hover:border-accent-cyan hover:shadow-accent-cyan/10 animate-fade-in-up focus-within:ring-2 focus-within:ring-accent-cyan focus-within:ring-offset-2"
              style={{ animationDelay: `${index * 0.1}s` }}
              role="listitem"
              tabIndex={0}
            >
              <div className="mb-4 md:mb-6">
                <service.icon size={48} className="text-accent-cyan mx-auto" aria-hidden="true" />
              </div>
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
              {index === 3 && (
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

