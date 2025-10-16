import { useLanguage } from '../contexts/LanguageContext';
import ServiceCards from './ServiceCards';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* Skip to main content link for screen readers */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent-cyan text-white px-4 py-2 rounded-lg font-semibold z-50 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2"
      >
        {t('a11y.skipToContent')}
      </a>
      
      <section 
        id="home" 
        className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white pt-20 overflow-hidden"
        role="banner"
        aria-labelledby="hero-title"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="z-10 animate-fade-in-left">
            <h1 
              id="hero-title"
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-accent-cyan bg-clip-text text-transparent">
                {t('hero.title')}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl font-body">
              {t('hero.subtitle')}
            </p>
            <a 
              href="#contacto" 
              className="inline-block px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-accent-cyan to-cyan-500 text-white font-bold text-lg md:text-xl rounded-xl hover:from-cyan-500 hover:to-cyan-600 hover:-translate-y-1 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2"
              aria-label={t('a11y.contactCTA')}
            >
              {t('hero.cta')}
            </a>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 flex-wrap mt-8 md:mt-12 text-sm text-slate-600" role="list" aria-label={t('a11y.highlightedFeatures')}>
              <span className="font-medium" role="listitem">{t('hero.feature1')}</span>
              <span className="hidden md:inline" aria-hidden="true">•</span>
              <span className="font-medium" role="listitem">{t('hero.feature2')}</span>
              <span className="hidden md:inline" aria-hidden="true">•</span>
              <span className="font-medium" role="listitem">{t('hero.feature3')}</span>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] lg:flex items-center justify-center animate-fade-in-right">
            <div className="w-full h-full max-w-md">
              <ServiceCards />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

