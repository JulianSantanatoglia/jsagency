import { useLanguage } from '../contexts/LanguageContext';
import ScrollReveal from './ScrollReveal';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="nosotros" className="relative py-24 md:py-32 px-4 md:px-8">
      {/* Ondulación superior para transición suave desde Hero */}
      <div className="absolute top-0 left-0 w-full -mt-1" style={{ transform: 'translateY(-100%)' }}>
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-auto"
        >
          <path
            d="M0,60 C240,20 480,100 720,60 C960,20 1200,100 1440,60 L1440,0 L0,0 Z"
            fill="#FAF9F7"
            className="dark:fill-slate-900 transition-colors duration-300"
          />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="up" delay={0}>
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-10 text-primary-dark dark:text-white tracking-tight">
              {t('about.title').replace(t('about.titleHighlight'), '').trim()} <span className="text-accent-cyan">{t('about.titleHighlight')}</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-8 max-w-3xl font-body font-light">
              {t('about.subtitle')}
            </p>
            <div className="max-w-4xl text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed space-y-6 font-body">
              <p>
                {t('about.content.paragraph1')}
              </p>
              <p>
                {t('about.content.paragraph2')}
              </p>
              <p className="text-accent-cyan font-semibold text-xl mt-2">
                {t('about.content.paragraph3')}
              </p>
            </div>
          </div>
        </ScrollReveal>
        
        {/* CTA Section */}
        <ScrollReveal direction="up" delay={200}>
          <div className="text-center mt-16 pt-12 border-t border-slate-200 dark:border-slate-700">
            <a 
              href="#contacto" 
              className="inline-block px-8 py-4 bg-accent-cyan text-white font-semibold text-lg rounded-xl hover-lift shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 font-body"
            >
              {t('about.content.ctaButton')}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;

