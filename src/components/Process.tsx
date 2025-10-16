import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Monitor, Zap, Camera } from 'lucide-react';

const Process = () => {
  const { t } = useLanguage();
  const [activeProcess, setActiveProcess] = useState('webdev');

  const processes = [
    {
      id: 'webdev',
      title: t('process.webdev.title'),
      icon: Monitor,
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-600',
      steps: [
        {
          number: '01',
          title: t('process.webdev.steps.discovery.title'),
          description: t('process.webdev.steps.discovery.description')
        },
        {
          number: '02',
          title: t('process.webdev.steps.design.title'),
          description: t('process.webdev.steps.design.description')
        },
        {
          number: '03',
          title: t('process.webdev.steps.development.title'),
          description: t('process.webdev.steps.development.description')
        },
        {
          number: '04',
          title: t('process.webdev.steps.testing.title'),
          description: t('process.webdev.steps.testing.description')
        },
        {
          number: '05',
          title: t('process.webdev.steps.launch.title'),
          description: t('process.webdev.steps.launch.description')
        }
      ]
    },
    {
      id: 'automation',
      title: t('process.automation.title'),
      icon: Zap,
      color: 'emerald',
      gradient: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      textColor: 'text-emerald-600',
      steps: [
        {
          number: '01',
          title: t('process.automation.steps.analysis.title'),
          description: t('process.automation.steps.analysis.description')
        },
        {
          number: '02',
          title: t('process.automation.steps.planning.title'),
          description: t('process.automation.steps.planning.description')
        },
        {
          number: '03',
          title: t('process.automation.steps.integration.title'),
          description: t('process.automation.steps.integration.description')
        },
        {
          number: '04',
          title: t('process.automation.steps.training.title'),
          description: t('process.automation.steps.training.description')
        },
        {
          number: '05',
          title: t('process.automation.steps.optimization.title'),
          description: t('process.automation.steps.optimization.description')
        }
      ]
    },
    {
      id: 'aerial',
      title: t('process.aerial.title'),
      icon: Camera,
      color: 'orange',
      gradient: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-600',
      steps: [
        {
          number: '01',
          title: t('process.aerial.steps.planning.title'),
          description: t('process.aerial.steps.planning.description')
        },
        {
          number: '02',
          title: t('process.aerial.steps.shooting.title'),
          description: t('process.aerial.steps.shooting.description')
        },
        {
          number: '03',
          title: t('process.aerial.steps.editing.title'),
          description: t('process.aerial.steps.editing.description')
        },
        {
          number: '04',
          title: t('process.aerial.steps.delivery.title'),
          description: t('process.aerial.steps.delivery.description')
        }
      ]
    }
  ];

  const activeProcessData = processes.find(p => p.id === activeProcess);

  return (
    <section id="proceso" className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display mb-4 md:mb-6 text-primary-dark">
            {t('process.title')}
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed font-body px-4 max-w-3xl mx-auto">
            {t('process.subtitle')}
          </p>
        </div>

        {/* Process Tabs */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-8 md:mb-12 max-w-4xl mx-auto">
          {processes.map((process) => {
            const isActive = activeProcess === process.id;
            const IconComponent = process.icon;
            
            return (
              <button
                key={process.id}
                onClick={() => setActiveProcess(process.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                  isActive
                    ? `${process.bgColor} ${process.borderColor} border-2 ${process.textColor} shadow-md`
                    : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300'
                }`}
              >
                <IconComponent size={20} />
                <span className="text-sm md:text-base">{process.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Process Steps */}
        {activeProcessData && (
          <div className="flex flex-col gap-6 md:gap-8 mb-8 md:mb-12 max-w-4xl mx-auto">
            {activeProcessData.steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 items-center sm:items-start bg-white p-6 md:p-8 rounded-2xl border-2 ${activeProcessData.borderColor} hover-lift hover:shadow-lg transition-all duration-300 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`text-3xl md:text-4xl font-extrabold font-display ${activeProcessData.textColor} opacity-30 flex-shrink-0`}>
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
        )}

        {/* Bottom CTA */}
        <div className="text-center p-6 md:p-8 bg-gradient-to-r from-accent-cyan to-accent-emerald rounded-xl text-white">
          <p className="text-base md:text-lg font-medium font-body mb-4">
            {t('process.cta')}
          </p>
          <a 
            href="#contacto" 
            className="inline-block bg-white text-accent-cyan px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            {t('process.ctaButton')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;

