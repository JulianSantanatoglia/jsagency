import { useLanguage } from '../contexts/LanguageContext';
import ContactForm from './ContactForm';
import { Check, Video, Home, Building2, Camera, Globe, Smartphone, ArrowRight } from 'lucide-react';

const VirtualToursLanding = () => {
  const { t } = useLanguage();

  const packs = [
    {
      name: t('virtualTours.packs.basic.name'),
      price: t('virtualTours.packs.basic.price'),
      size: t('virtualTours.packs.basic.size'),
      features: [
        t('virtualTours.packs.basic.feature1'),
        t('virtualTours.packs.basic.feature2'),
        t('virtualTours.packs.basic.feature3'),
        t('virtualTours.packs.basic.feature4'),
      ],
      icon: Home,
      color: 'blue',
      popular: false
    },
    {
      name: t('virtualTours.packs.premium.name'),
      price: t('virtualTours.packs.premium.price'),
      size: t('virtualTours.packs.premium.size'),
      features: [
        t('virtualTours.packs.premium.feature1'),
        t('virtualTours.packs.premium.feature2'),
        t('virtualTours.packs.premium.feature3'),
        t('virtualTours.packs.premium.feature4'),
        t('virtualTours.packs.premium.feature5'),
        t('virtualTours.packs.premium.feature6'),
      ],
      icon: Building2,
      color: 'cyan',
      popular: true
    },
    {
      name: t('virtualTours.packs.business.name'),
      price: t('virtualTours.packs.business.price'),
      size: t('virtualTours.packs.business.size'),
      features: [
        t('virtualTours.packs.business.feature1'),
        t('virtualTours.packs.business.feature2'),
        t('virtualTours.packs.business.feature3'),
        t('virtualTours.packs.business.feature4'),
        t('virtualTours.packs.business.feature5'),
      ],
      icon: Building2,
      color: 'purple',
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Video,
      title: t('virtualTours.benefits.moreVisits.title'),
      description: t('virtualTours.benefits.moreVisits.description')
    },
    {
      icon: Globe,
      title: t('virtualTours.benefits.differentiate.title'),
      description: t('virtualTours.benefits.differentiate.description')
    },
    {
      icon: Smartphone,
      title: t('virtualTours.benefits.mobile.title'),
      description: t('virtualTours.benefits.mobile.description')
    }
  ];

  return (
    <div className="pt-28 md:pt-32">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-primary-dark tracking-tight">
            {t('virtualTours.hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8 font-body leading-relaxed">
            {t('virtualTours.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#demo"
              className="px-8 py-4 bg-accent-cyan text-white rounded-2xl font-semibold text-lg tracking-wide hover:bg-cyan-500 hover-lift shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 focus:outline-none transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              {t('virtualTours.hero.ctaDemo')}
              <ArrowRight size={20} />
            </a>
            <a
              href="#contacto"
              className="px-8 py-4 bg-white text-accent-cyan border-2 border-accent-cyan rounded-2xl font-semibold text-lg tracking-wide hover:bg-accent-cyan hover:text-white hover-lift focus:outline-none transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              {t('virtualTours.hero.ctaQuote')}
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-center text-primary-dark">
            {t('virtualTours.benefits.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-100 p-8 hover:shadow-xl hover:border-accent-cyan/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-accent-cyan to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold font-display mb-3 text-primary-dark">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 font-body leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-center text-primary-dark">
            {t('virtualTours.demo.title')}
          </h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto font-body">
            {t('virtualTours.demo.subtitle')}
          </p>
          
          {/* Matterport Embed Space */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Camera size={24} className="text-amber-300" />
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-white/80">Matterport 360°</p>
                  <p className="text-lg font-semibold leading-tight">Tours Virtuales de Alta Calidad</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
                <span>Insta360 X5</span>
              </div>
            </div>
            
            {/* Space for Matterport embed code */}
            <div className="p-6 bg-slate-50">
              <div className="aspect-video bg-white rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center relative overflow-hidden">
                {/* Placeholder text - will be replaced by Matterport embed */}
                <div className="text-center p-8">
                  <Camera size={48} className="mx-auto text-slate-400 mb-4" />
                  <p className="text-slate-500 font-medium mb-2">Espacio para código de Matterport</p>
                  <p className="text-sm text-slate-400">
                    Pega aquí el código HTML exportado desde Matterport
                  </p>
                </div>
                
                {/* Matterport embed will be inserted here */}
                {/* Example structure - replace with actual Matterport embed code:
                <div id="matterport-container" className="w-full h-full">
                  <iframe 
                    src="TU_CODIGO_MATTERPORT_AQUI"
                    className="w-full h-full rounded-xl"
                    allow="xr-spatial-tracking; accelerometer; gyroscope; fullscreen"
                    allowFullScreen
                  />
                </div>
                */}
              </div>
              
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800 font-medium mb-2">
                  💡 Instrucciones:
                </p>
                <ol className="text-sm text-blue-700 space-y-1 list-decimal list-inside">
                  <li>Exporta tu recorrido desde Matterport</li>
                  <li>Copia el código HTML/iframe que te proporciona</li>
                  <li>Pégalo en este espacio reemplazando el placeholder</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Alternative: Simple iframe example */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
            <h3 className="text-xl font-bold font-display mb-4 text-primary-dark">
              Ejemplo de integración Matterport
            </h3>
            <p className="text-slate-600 mb-4 font-body">
              Puedes usar este formato como referencia para integrar tus tours:
            </p>
            <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-xs text-green-400 font-mono">
{`<div className="aspect-video">
  <iframe
    src="https://my.matterport.com/show/?m=TU_MODEL_ID"
    className="w-full h-full rounded-xl"
    allow="xr-spatial-tracking; accelerometer; gyroscope; fullscreen"
    allowFullScreen
  />
</div>`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Packs Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-center text-primary-dark">
            {t('virtualTours.packs.title')}
          </h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto font-body">
            {t('virtualTours.packs.subtitle')}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {packs.map((pack, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl border-2 p-8 hover:shadow-xl transition-all duration-300 ${
                  pack.popular
                    ? 'border-accent-cyan shadow-lg shadow-cyan-500/10'
                    : 'border-slate-100'
                }`}
              >
                {pack.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent-cyan text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {t('virtualTours.packs.popular')}
                  </div>
                )}
                <div className={`w-12 h-12 bg-gradient-to-r ${
                  pack.color === 'blue' ? 'from-blue-500 to-blue-600' :
                  pack.color === 'cyan' ? 'from-accent-cyan to-cyan-500' :
                  'from-purple-500 to-purple-600'
                } rounded-xl flex items-center justify-center mb-4`}>
                  <pack.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-display mb-2 text-primary-dark">
                  {pack.name}
                </h3>
                <p className="text-slate-500 font-body mb-4">{pack.size}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-primary-dark">{pack.price}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pack.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 font-body">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className={`block w-full text-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    pack.popular
                      ? 'bg-accent-cyan text-white hover:bg-cyan-500'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {t('virtualTours.packs.cta')}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-center text-primary-dark">
            {t('virtualTours.contact.title')}
          </h2>
          <p className="text-lg text-slate-600 text-center mb-12 font-body">
            {t('virtualTours.contact.subtitle')}
          </p>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default VirtualToursLanding;

