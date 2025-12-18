import { useLanguage } from '../contexts/LanguageContext';
import { useLocation, Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import PatternBackground from './PatternBackground';

const About = () => {
  const { t, getTranslation } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '';
  
  // Obtener el contenido de paragraph3 que incluye bullets y conclusion
  const paragraph3Content = getTranslation('about.content.paragraph3') || {
    bullets: [],
    conclusion: ''
  };

  return (
    <section id="nosotros" className="relative py-24 md:py-32 px-4 md:px-8">
      <PatternBackground opacity={0.04} />
      
      {/* Ondulación superior para transición suave desde Hero */}
      <div className="absolute top-0 left-0 w-full -mt-1 z-0" style={{ transform: 'translateY(-100%)' }}>
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
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <ScrollReveal direction="up" delay={0}>
          <div className="mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-primary-dark dark:text-white tracking-tight leading-tight">
              {t('about.title').replace(t('about.titleHighlight'), '').trim()} <span className="text-accent-cyan">{t('about.titleHighlight')}</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-transparent mb-6"></div>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-body font-light leading-relaxed max-w-3xl">
              {t('about.subtitle')}
            </p>
          </div>
        </ScrollReveal>

        {/* Contenido con texto suelto */}
        <ScrollReveal direction="up" delay={100}>
          <div className="max-w-4xl text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed space-y-6 font-body">
            <p>
              {t('about.content.paragraph1')}
            </p>
            <p>
              {t('about.content.paragraph2')}
            </p>
            <div className="mt-6">
              <ul className="space-y-3">
                {paragraph3Content.bullets.map((bullet: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent-cyan font-bold text-xl mt-1">●</span>
                    <span className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-accent-cyan font-semibold text-xl mt-4">
                {paragraph3Content.conclusion}
              </p>
            </div>
          </div>
        </ScrollReveal>
        
        {/* CTA Section */}
        <ScrollReveal direction="up" delay={200}>
          <div className="text-center mt-16 pt-12 border-t border-slate-200 dark:border-slate-700">
            {isHomePage ? (
              <a 
                href="#contacto" 
                className="inline-block px-8 py-4 bg-accent-cyan text-white font-semibold text-lg rounded-xl hover-lift shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 font-body"
              >
                {t('about.content.ctaButton')}
              </a>
            ) : (
              <Link 
                to="/#contacto" 
                className="inline-block px-8 py-4 bg-accent-cyan text-white font-semibold text-lg rounded-xl hover-lift shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 font-body"
              >
                {t('about.content.ctaButton')}
              </Link>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;

