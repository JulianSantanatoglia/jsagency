import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Users, QrCode, CreditCard, Smartphone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
// Import images using Vite's asset handling
import paso1 from '/images/paso1.png';
import paso2 from '/images/paso2.png';
import paso3 from '/images/paso3.png';
import paso4 from '/images/paso4.png';
import paso5 from '/images/paso5.png';
import paso6 from '/images/paso6.png';

const SmartCardShowcase = () => {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      image: paso1,
      title: t('smartcard.steps.step1.title'),
      description: t('smartcard.steps.step1.description')
    },
    {
      image: paso2,
      title: t('smartcard.steps.step2.title'),
      description: t('smartcard.steps.step2.description')
    },
    {
      image: paso3,
      title: t('smartcard.steps.step3.title'),
      description: t('smartcard.steps.step3.description')
    },
    {
      image: paso4,
      title: t('smartcard.steps.step4.title'),
      description: t('smartcard.steps.step4.description')
    },
    {
      image: paso5,
      title: t('smartcard.steps.step5.title'),
      description: t('smartcard.steps.step5.description')
    },
    {
      image: paso6,
      title: t('smartcard.steps.step6.title'),
      description: t('smartcard.steps.step6.description')
    }
  ];

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const features = [
    {
      icon: QrCode,
      title: t('smartcard.features.qr.title'),
      description: t('smartcard.features.qr.description')
    },
    {
      icon: Users,
      title: t('smartcard.features.divider.title'),
      description: t('smartcard.features.divider.description')
    },
    {
      icon: CreditCard,
      title: t('smartcard.features.payment.title'),
      description: t('smartcard.features.payment.description')
    },
    {
      icon: Smartphone,
      title: t('smartcard.features.mobile.title'),
      description: t('smartcard.features.mobile.description')
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-accent-cyan/5 to-accent-emerald/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-cyan/10 rounded-full text-accent-cyan font-semibold text-sm mb-4">
            <span className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse"></span>
            {t('smartcard.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display mb-6 text-primary-dark">
            {t('smartcard.title')}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-body">
            {t('smartcard.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold font-display mb-4 text-primary-dark">
                {t('smartcard.problem.title')}
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed font-body">
                {t('smartcard.problem.description')}
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-200 hover:border-accent-cyan transition-colors">
                  <feature.icon size={24} className="text-accent-cyan mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-dark mb-1 font-display">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-slate-600 font-body">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://bar-de-tapas.netlify.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-cyan text-white font-semibold text-lg rounded-xl hover-lift shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 font-body focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2"
              >
                {t('smartcard.cta')}
                <ExternalLink size={20} />
              </a>
              <a 
                href="#contacto" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-accent-cyan text-accent-cyan font-semibold text-lg rounded-xl hover:bg-accent-cyan hover:text-white transition-colors font-body focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2"
              >
                {t('smartcard.consult')}
              </a>
            </div>
          </div>

          {/* Slider */}
          <div className="order-1 lg:order-2">
            <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden h-[500px] md:h-[550px] flex flex-col">
              {/* Image Container */}
              <div className="relative flex-1 overflow-hidden">
                <div 
                  className="flex h-full transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentStep * 100}%)` }}
                >
                   {steps.map((step, index) => (
                     <div key={index} className="w-full h-full flex-shrink-0">
                       <img 
                         src={step.image} 
                         alt={step.title}
                         className="w-full h-full object-contain"
                         loading="eager"
                       />
                     </div>
                   ))}
                </div>
                
                {/* Navigation Arrows */}
                <button 
                  onClick={prevStep}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2"
                  aria-label={t('smartcard.previousStep')}
                >
                  <ChevronLeft size={20} className="text-slate-700 transition-transform duration-300" />
                </button>
                
                <button 
                  onClick={nextStep}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2"
                  aria-label={t('smartcard.nextStep')}
                >
                  <ChevronRight size={20} className="text-slate-700 transition-transform duration-300" />
                </button>

                {/* Step Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {steps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStep(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                        index === currentStep ? 'bg-accent-cyan scale-125' : 'bg-white/50 hover:bg-white/70'
                      }`}
                      aria-label={t('smartcard.goToStep').replace('{step}', (index + 1).toString())}
                    />
                  ))}
                </div>
              </div>

              {/* Step Info - Altura fija para mantener consistencia */}
              <div className="p-6 h-[140px] flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 bg-accent-cyan text-white rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300">
                    {currentStep + 1}
                  </span>
                  <h4 className="text-lg font-bold text-primary-dark font-display transition-all duration-300">
                    {steps[currentStep].title}
                  </h4>
                </div>
                <p className="text-slate-600 leading-relaxed font-body line-clamp-2 transition-all duration-300">
                  {steps[currentStep].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartCardShowcase;
