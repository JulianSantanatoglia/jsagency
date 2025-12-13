import { useLanguage } from '../contexts/LanguageContext';
import ContactForm from './ContactForm';
import { Check, Bot, MessageSquare, Zap, ArrowRight } from 'lucide-react';

const AutomationsLanding = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Bot,
      title: t('automations.services.chatbots.title'),
      description: t('automations.services.chatbots.description')
    },
    {
      icon: MessageSquare,
      title: t('automations.services.agents.title'),
      description: t('automations.services.agents.description')
    },
    {
      icon: Zap,
      title: t('automations.services.workflows.title'),
      description: t('automations.services.workflows.description')
    }
  ];

  return (
    <div className="pt-28 md:pt-32">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-primary-dark tracking-tight">
            {t('automations.hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8 font-body leading-relaxed">
            {t('automations.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#servicios"
              className="px-8 py-4 bg-accent-cyan text-white rounded-2xl font-semibold text-lg tracking-wide hover:bg-cyan-500 hover-lift shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 focus:outline-none transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              {t('automations.hero.ctaServices')}
              <ArrowRight size={20} />
            </a>
            <a
              href="#contacto"
              className="px-8 py-4 bg-white text-accent-cyan border-2 border-accent-cyan rounded-2xl font-semibold text-lg tracking-wide hover:bg-accent-cyan hover:text-white hover-lift focus:outline-none transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              {t('automations.hero.ctaQuote')}
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-center text-primary-dark">
            {t('automations.services.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-100 p-8 hover:shadow-xl hover:border-accent-cyan/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold font-display mb-3 text-primary-dark">
                  {service.title}
                </h3>
                <p className="text-slate-600 font-body leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-center text-primary-dark">
            {t('automations.contact.title')}
          </h2>
          <p className="text-lg text-slate-600 text-center mb-12 font-body">
            {t('automations.contact.subtitle')}
          </p>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default AutomationsLanding;

