import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Monitor, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

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
    }
  ];

  const activeProcessData = processes.find(p => p.id === activeProcess);

  return (
    <section id="proceso" className="relative py-24 md:py-32 px-4 md:px-8 -mt-12">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-primary-dark dark:text-white tracking-tight">
                      {t('process.title').replace(t('process.titleHighlight'), '').trim()} <span className="text-accent-cyan">{t('process.titleHighlight')}</span>
                    </h2>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-body px-4 max-w-2xl mx-auto font-light">
            {t('process.subtitle')}
          </p>
          </div>
        </ScrollReveal>

        {/* Process Tabs */}
        <ScrollReveal direction="up" delay={100}>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-8 md:mb-12 max-w-4xl mx-auto justify-center">
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
                    : 'bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-200 dark:border-slate-700 text-gray-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:border-gray-300 dark:hover:border-slate-600'
                }`}
              >
                <IconComponent size={20} />
                <span className="text-sm md:text-base">{process.title}</span>
              </button>
            );
          })}
          </div>
        </ScrollReveal>

        {/* Active Process Steps */}
        {activeProcessData && (
          <ScrollReveal direction="up" delay={200}>
          <div className="flex flex-col gap-6 md:gap-8 mb-8 md:mb-12 max-w-4xl mx-auto">
            {activeProcessData.steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 items-center sm:items-start bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border-2 ${activeProcessData.borderColor} dark:border-slate-700 hover-lift hover:shadow-lg dark:hover:shadow-slate-900/50 transition-all duration-300 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`text-3xl md:text-4xl font-extrabold font-display ${activeProcessData.textColor} opacity-30 flex-shrink-0`}>
                  {step.number}
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl md:text-2xl font-bold font-display mb-2 text-primary-dark dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-body">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          </ScrollReveal>
        )}

        {/* Bottom CTA */}
        <ScrollReveal direction="up" delay={300}>
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
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Process;

