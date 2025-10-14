import { useLanguage } from '../contexts/LanguageContext';

const Process = () => {
  const { t } = useLanguage();
  const steps = [
    {
      number: t('process.steps.discovery.number'),
      title: t('process.steps.discovery.title'),
      description: t('process.steps.discovery.description')
    },
    {
      number: t('process.steps.design.number'),
      title: t('process.steps.design.title'),
      description: t('process.steps.design.description')
    },
    {
      number: t('process.steps.development.number'),
      title: t('process.steps.development.title'),
      description: t('process.steps.development.description')
    },
    {
      number: t('process.steps.launch.number'),
      title: t('process.steps.launch.title'),
      description: t('process.steps.launch.description')
    },
    {
      number: t('process.steps.support.number'),
      title: t('process.steps.support.title'),
      description: t('process.steps.support.description')
    }
  ];

  return (
    <section id="proceso" className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display mb-4 md:mb-6 text-primary-dark">
            {t('process.title')}
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed font-body px-4">
            {t('process.subtitle')}
          </p>
        </div>
        <div className="flex flex-col gap-6 md:gap-8 mb-8 md:mb-12 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 items-center sm:items-start bg-white p-6 md:p-6 lg:p-8 rounded-2xl border border-slate-200 hover-lift hover:border-accent-cyan hover:shadow-accent-cyan/10 animate-fade-in-up mx-2 sm:mx-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-accent-cyan opacity-30 flex-shrink-0">
                {step.number}
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl md:text-2xl font-bold font-display mb-2 text-primary-dark">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed font-body">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center p-4 md:p-6 bg-gradient-to-r from-accent-cyan to-accent-emerald rounded-xl text-white font-medium font-body">
          <p className="text-sm md:text-base">
            Cada proyecto pasa por revisión creativa y técnica para asegurar calidad y consistencia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;

