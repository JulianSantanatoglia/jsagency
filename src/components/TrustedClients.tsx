import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import OptimizedImage from './OptimizedImage';
// Import images directly from assets
import mushroom from '../assets/images/1mushroommdp.png';
import joyeria from '../assets/images/3joyeriadiaz.png';
import automatizaciones from '../assets/images/make.png';
import inmobiliaria from '../assets/images/inmobiliaria.jpg';

const TrustedClients = () => {
  const { t } = useLanguage();

  const clients = [
    {
      name: 'Mushroom mdp',
      image: mushroom,
      category: t('clients.mushroom.category'),
      description: t('clients.mushroom.description'),
      link: t('clients.mushroom.link')
    },
    {
      name: 'Joyería Díaz',
      image: joyeria,
      category: t('clients.jewelry.category'),
      description: t('clients.jewelry.description'),
      link: t('clients.jewelry.link')
    },
    {
      name: 'Automatizaciones IA',
      image: automatizaciones,
      category: t('clients.automation.category'),
      description: t('clients.automation.description'),
      link: t('clients.automation.link')
    },
    {
      name: 'Fotografía Aérea',
      image: inmobiliaria,
      category: t('clients.aerial.category'),
      description: t('clients.aerial.description'),
      link: t('clients.aerial.link')
    }
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display mb-4 text-primary-dark">
            {t('clients.title')}
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-body px-4">
            {t('clients.subtitle')}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {clients.map((client, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover-lift hover:border-accent-cyan hover:shadow-xl hover:shadow-accent-cyan/10 transition-all duration-300 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 overflow-hidden bg-slate-100">
                <OptimizedImage 
                  src={client.image} 
                  alt={`${client.name} - ${client.category}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="text-xs font-semibold uppercase tracking-wider text-accent-cyan mb-2 font-body">
                  {client.category}
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-display mb-3 text-primary-dark">
                  {client.name}
                </h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed font-body mb-6 line-clamp-3">
                  {client.description}
                </p>
                {client.link && client.link !== '#' && (
                  <a
                    href={client.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent-cyan hover:text-cyan-600 font-semibold text-sm transition-colors group/link focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 rounded-lg px-3 py-2 -ml-3"
                  >
                    <span>{t('clients.viewProject')}</span>
                    <ExternalLink size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;

