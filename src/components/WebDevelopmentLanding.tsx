import { useLanguage } from '../contexts/LanguageContext';
import ContactForm from './ContactForm';
import OptimizedImage from './OptimizedImage';
import { Smartphone, Zap, Shield, Search, ArrowRight } from 'lucide-react';

const WebDevelopmentLanding = () => {
  const { t } = useLanguage();

  const clients = [
    {
      name: 'Mushroom mdp',
      category: t('webdev.clients.mushroom.category'),
      description: t('webdev.clients.mushroom.description'),
      image: '/images/proyectos/mushroommdp.jpg',
      link: 'https://mushroommdp.com'
    },
    {
      name: 'Joyería Díaz',
      category: t('webdev.clients.jewelry.category'),
      description: t('webdev.clients.jewelry.description'),
      image: '/images/proyectos/inmobiliaria.jpg',
      link: '#'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: t('webdev.features.performance.title'),
      description: t('webdev.features.performance.description')
    },
    {
      icon: Shield,
      title: t('webdev.features.security.title'),
      description: t('webdev.features.security.description')
    },
    {
      icon: Smartphone,
      title: t('webdev.features.responsive.title'),
      description: t('webdev.features.responsive.description')
    },
    {
      icon: Search,
      title: t('webdev.features.seo.title'),
      description: t('webdev.features.seo.description')
    }
  ];

  return (
    <div className="pt-28 md:pt-32">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-primary-dark tracking-tight">
            {t('webdev.hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8 font-body leading-relaxed">
            {t('webdev.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#clientes"
              className="px-8 py-4 bg-accent-cyan text-white rounded-2xl font-semibold text-lg tracking-wide hover:bg-cyan-500 hover-lift shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 focus:outline-none transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              {t('webdev.hero.ctaClients')}
              <ArrowRight size={20} />
            </a>
            <a
              href="#contacto"
              className="px-8 py-4 bg-white text-accent-cyan border-2 border-accent-cyan rounded-2xl font-semibold text-lg tracking-wide hover:bg-accent-cyan hover:text-white hover-lift focus:outline-none transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              {t('webdev.hero.ctaQuote')}
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-center text-primary-dark">
            {t('webdev.features.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-100 p-8 hover:shadow-xl hover:border-accent-cyan/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-accent-cyan to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold font-display mb-3 text-primary-dark">
                  {feature.title}
                </h3>
                <p className="text-slate-600 font-body leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clientes" className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-center text-primary-dark">
            {t('webdev.clients.title')}
          </h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto font-body">
            {t('webdev.clients.subtitle')}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:border-accent-cyan/30 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <OptimizedImage
                    src={client.image}
                    alt={client.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-accent-cyan text-white px-3 py-1 rounded-lg text-sm font-semibold mb-2">
                      {client.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white font-display">
                      {client.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 font-body mb-4 leading-relaxed">
                    {client.description}
                  </p>
                  {client.link !== '#' && (
                    <a
                      href={client.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent-cyan hover:text-cyan-600 font-semibold transition-colors"
                    >
                      {t('webdev.clients.viewProject')}
                      <ArrowRight size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-center text-primary-dark">
            {t('webdev.contact.title')}
          </h2>
          <p className="text-lg text-slate-600 text-center mb-12 font-body">
            {t('webdev.contact.subtitle')}
          </p>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentLanding;

