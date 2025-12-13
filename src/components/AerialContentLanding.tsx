import { useLanguage } from '../contexts/LanguageContext';
import ContactForm from './ContactForm';
import OptimizedImage from './OptimizedImage';
import { Check, Camera, Video, MapPin, Shield, ArrowRight } from 'lucide-react';

const AerialContentLanding = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Camera,
      title: t('aerial.services.photography.title'),
      description: t('aerial.services.photography.description')
    },
    {
      icon: Video,
      title: t('aerial.services.video.title'),
      description: t('aerial.services.video.description')
    },
    {
      icon: MapPin,
      title: t('aerial.services.mapping.title'),
      description: t('aerial.services.mapping.description')
    }
  ];

  const certifications = [
    t('aerial.certifications.certified'),
    t('aerial.certifications.registered'),
    t('aerial.certifications.insurance')
  ];

  return (
    <div className="pt-28 md:pt-32">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-primary-dark tracking-tight">
            {t('aerial.hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8 font-body leading-relaxed">
            {t('aerial.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#servicios"
              className="px-8 py-4 bg-accent-cyan text-white rounded-2xl font-semibold text-lg tracking-wide hover:bg-cyan-500 hover-lift shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 focus:outline-none transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              {t('aerial.hero.ctaServices')}
              <ArrowRight size={20} />
            </a>
            <a
              href="#contacto"
              className="px-8 py-4 bg-white text-accent-cyan border-2 border-accent-cyan rounded-2xl font-semibold text-lg tracking-wide hover:bg-accent-cyan hover:text-white hover-lift focus:outline-none transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              {t('aerial.hero.ctaQuote')}
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-center text-primary-dark">
            {t('aerial.services.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-100 p-8 hover:shadow-xl hover:border-accent-cyan/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
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

      {/* Certifications Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-center text-primary-dark">
            {t('aerial.certifications.title')}
          </h2>
          <div className="bg-white rounded-2xl border border-slate-100 p-8 md:p-12 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-cyan to-cyan-500 rounded-xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 font-body text-lg">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-center text-primary-dark">
            {t('aerial.gallery.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <OptimizedImage
                src="/images/proyectos/inmobiliaria.jpg"
                alt={t('aerial.gallery.image1')}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <OptimizedImage
                src="/images/proyectos/automatizacion.jpg"
                alt={t('aerial.gallery.image2')}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-center text-primary-dark">
            {t('aerial.contact.title')}
          </h2>
          <p className="text-lg text-slate-600 text-center mb-12 font-body">
            {t('aerial.contact.subtitle')}
          </p>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default AerialContentLanding;

