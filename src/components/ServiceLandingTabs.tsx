import { useMemo, useState } from 'react';
import type { ReactElement } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import WebDevelopmentLanding from './WebDevelopmentLanding';
import VirtualToursLanding from './VirtualToursLanding';
import AerialContentLanding from './AerialContentLanding';
import AutomationsLanding from './AutomationsLanding';

type ServiceKey = 'webdev' | 'design' | 'aerial' | 'ai';

interface TabConfig {
  key: ServiceKey;
  title: string;
  eyebrow: string;
  gradient: string;
  description: string;
  component: ReactElement;
}

const ServiceLandingTabs = () => {
  const { t } = useLanguage();

  const tabs = useMemo<TabConfig[]>(
    () => [
      {
        key: 'webdev',
        title: t('services.webdev.title'),
        eyebrow: 'UX / UI · SEO · Apps',
        gradient: 'from-blue-500 via-cyan-500 to-cyan-400',
        description: t('services.webdev.description'),
        component: <WebDevelopmentLanding />,
      },
      {
        key: 'design',
        title: t('services.design.title'),
        eyebrow: '360° · Hospitality · Real Estate',
        gradient: 'from-purple-500 via-fuchsia-500 to-pink-400',
        description: t('services.design.description'),
        component: <VirtualToursLanding />,
      },
      {
        key: 'aerial',
        title: t('services.aerial.title'),
        eyebrow: 'Drones · Operación Certificada',
        gradient: 'from-orange-500 via-amber-500 to-yellow-400',
        description: t('services.aerial.description'),
        component: <AerialContentLanding />,
      },
      {
        key: 'ai',
        title: t('services.ai.title'),
        eyebrow: 'Chatbots · RPA · Integraciones',
        gradient: 'from-emerald-500 via-teal-500 to-cyan-400',
        description: t('services.ai.description'),
        component: <AutomationsLanding />,
      },
    ],
    [t],
  );

  const [activeTab, setActiveTab] = useState<ServiceKey>('webdev');
  const active = tabs.find((tab) => tab.key === activeTab) ?? tabs[0];

  return (
    <section id="servicios" className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <header className="text-center mb-12 md:mb-14">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-semibold uppercase tracking-[0.08em]">
            {t('services.title')}
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-dark tracking-tight">
            {t('services.subtitle')}
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-body">
            Elegí el servicio y explorá cada landing sin salir de la home.
          </p>
        </header>

        <div className="sticky top-16 z-40 bg-white/90 backdrop-blur-lg border border-slate-100 rounded-3xl shadow-sm shadow-slate-200/40 p-3 md:p-4 mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3" role="tablist" aria-label={t('a11y.servicesList')}>
            {tabs.map((tab) => {
              const isActive = tab.key === activeTab;
              return (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`group w-full text-left rounded-2xl border transition-all duration-300 px-4 py-3 md:py-4 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    isActive
                      ? `border-transparent ring-0 bg-gradient-to-r ${tab.gradient} text-white shadow-lg shadow-slate-300/40`
                      : 'border-slate-200 bg-white text-slate-800 hover:border-accent-cyan/40 hover:shadow-md hover:-translate-y-[1px]'
                  }`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  <div className={`text-[11px] uppercase tracking-[0.12em] font-semibold ${isActive ? 'text-white/80' : 'text-slate-500'}`}>
                    {tab.eyebrow}
                  </div>
                  <div className="mt-1 flex items-center justify-between gap-2">
                    <h3 className={`text-base md:text-lg font-display font-semibold ${isActive ? 'text-white' : 'text-slate-900'}`}>
                      {tab.title}
                    </h3>
                    <span
                      className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${
                        isActive ? 'bg-white/15 text-white' : 'bg-slate-100 text-slate-600 group-hover:bg-accent-cyan/10 group-hover:text-accent-cyan'
                      }`}
                    >
                      0{tabs.indexOf(tab) + 1}
                    </span>
                  </div>
                  <p className={`mt-1 text-sm leading-snug ${isActive ? 'text-white/80' : 'text-slate-600'}`}>
                    {tab.description}
                  </p>
                  {isActive && (
                    <div className={`mt-3 h-1 rounded-full bg-gradient-to-r ${tab.gradient}`}></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-gray-50/60 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          {active.component}
        </div>
      </div>
    </section>
  );
};

export default ServiceLandingTabs;

