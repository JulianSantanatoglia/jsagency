import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useLocation, Link } from 'react-router-dom';
import { Monitor, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import PatternBackground from './PatternBackground';

const Process = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '';
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
      <PatternBackground opacity={0.04} />
      
      <div className="relative z-10 max-w-7xl mx-auto">
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

        {/* Process Tabs - Diseño moderno */}
        <ScrollReveal direction="up" delay={100}>
          <div className="flex flex-col items-center gap-3 mb-12 md:mb-16 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full">
            {processes.map((process) => {
            const isActive = activeProcess === process.id;
            const IconComponent = process.icon;
            
            return (
              <button
                key={process.id}
                onClick={() => setActiveProcess(process.id)}
                className={`group relative flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 font-semibold overflow-hidden ${
                  isActive
                    ? `bg-gradient-to-r ${process.gradient} text-white shadow-xl shadow-${process.color}-500/30 scale-105`
                    : 'bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-2 border-slate-200/60 dark:border-slate-700/60 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:border-accent-cyan/40 hover:scale-105'
                }`}
              >
                <IconComponent size={22} className={isActive ? 'text-white' : ''} />
                <span className="text-sm md:text-base">{process.title}</span>
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                )}
              </button>
            );
          })}
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-500 font-body italic mt-2">
              Click either button to explore
            </p>
          </div>
        </ScrollReveal>

        {/* Active Process Steps - Diseño creativo con timeline */}
        {activeProcessData && (
          <ScrollReveal direction="up" delay={200}>
          <div className="relative max-w-5xl mx-auto">
            {/* Línea vertical decorativa */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan/30 via-slate-300/20 dark:via-slate-600/20 to-transparent"></div>
            
            <div className="flex flex-col gap-6 md:gap-8 mb-8 md:mb-12">
              {activeProcessData.steps.map((step, index) => (
                <div 
                  key={index} 
                  className="relative group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Punto en la línea del timeline */}
                  <div className="hidden md:block absolute left-6 top-8 w-4 h-4 rounded-full bg-gradient-to-br from-accent-cyan to-cyan-500 shadow-lg shadow-cyan-500/50 z-10 group-hover:scale-150 transition-transform duration-300"></div>
                  
                  <div className={`ml-0 md:ml-16 bg-gradient-to-br from-white/90 via-white/70 to-white/50 dark:from-slate-800/90 dark:via-slate-800/70 dark:to-slate-800/50 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/30 dark:shadow-slate-900/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]`}>
                    <div className="flex items-start gap-6">
                      {/* Número grande sin fondo */}
                      <div className="flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-primary-dark dark:text-white">
                          {step.number}
                        </span>
                      </div>
                      
                      <div className="flex-1 pt-1">
                        <h3 className="text-xl md:text-2xl font-bold font-display mb-3 text-primary-dark dark:text-white group-hover:text-accent-cyan transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-body">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </ScrollReveal>
        )}

        {/* Bottom CTA - Diseño moderno */}
        <ScrollReveal direction="up" delay={300}>
          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden bg-gradient-to-br from-accent-cyan via-cyan-500 to-accent-emerald rounded-3xl p-8 md:p-12 text-white shadow-2xl shadow-cyan-500/30">
              {/* Efectos decorativos */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 text-center">
                <p className="text-xl md:text-2xl font-bold font-body mb-6">
                  {t('process.cta')}
                </p>
                {isHomePage ? (
                  <a 
                    href="#contacto" 
                    className="inline-flex items-center gap-2 bg-white text-accent-cyan px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    {t('process.ctaButton')}
                    <span className="text-xl">→</span>
                  </a>
                ) : (
                  <Link 
                    to="/#contacto" 
                    className="inline-flex items-center gap-2 bg-white text-accent-cyan px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    {t('process.ctaButton')}
                    <span className="text-xl">→</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Process;

