import { useLanguage } from '../contexts/LanguageContext';
import { useLocation, Link } from 'react-router-dom';
import Newsletter from './Newsletter';

const Footer = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '';

  return (
    <>
      <Newsletter />
      <footer className="bg-primary-dark text-white py-12 px-8" role="contentinfo">
        <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 mb-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-baseline gap-2 font-display">
              <a href="#home" className="focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-primary-dark rounded-lg">
                <span className="text-3xl font-extrabold text-white">
                  <span className="text-accent-cyan">.</span>js
                </span>
                <span className="text-3xl font-semibold text-accent-cyan">agency</span>
              </a>
            </div>
            <p className="text-white/60 text-sm max-w-xs font-body">
              {t('footer.description')}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <nav aria-labelledby="services-nav">
              <h4 id="services-nav" className="text-xs font-semibold uppercase tracking-wider text-accent-cyan mb-4 font-body">
                {t('footer.services')}
              </h4>
              <ul className="flex flex-col gap-3" role="list">
                <li role="listitem">
                  <a 
                    href="#servicios" 
                    className="text-white/70 hover:text-accent-cyan transition-colors text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-primary-dark rounded"
                  >
                    {t('nav.services')}
                  </a>
                </li>
                <li role="listitem">
                  <a 
                    href="#smartcard" 
                    className="text-white/70 hover:text-accent-cyan transition-colors text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-primary-dark rounded"
                  >
                    {t('nav.latestProject')}
                  </a>
                </li>
                <li role="listitem">
                  <a 
                    href="#testimonios" 
                    className="text-white/70 hover:text-accent-cyan transition-colors text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-primary-dark rounded"
                  >
                    {t('footer.testimonials')}
                  </a>
                </li>
              </ul>
            </nav>
            <nav aria-labelledby="company-nav">
              <h4 id="company-nav" className="text-xs font-semibold uppercase tracking-wider text-accent-cyan mb-4 font-body">
                {t('footer.company')}
              </h4>
              <ul className="flex flex-col gap-3" role="list">
                <li role="listitem">
                  <a 
                    href="#nosotros" 
                    className="text-white/70 hover:text-accent-cyan transition-colors text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-primary-dark rounded"
                  >
                    {t('footer.about')}
                  </a>
                </li>
                <li role="listitem">
                  <a 
                    href="#proceso" 
                    className="text-white/70 hover:text-accent-cyan transition-colors text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-primary-dark rounded"
                  >
                    {t('footer.process')}
                  </a>
                </li>
                <li role="listitem">
                  {isHomePage ? (
                    <a 
                      href="#contacto" 
                      className="text-white/70 hover:text-accent-cyan transition-colors text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-primary-dark rounded"
                    >
                      {t('nav.contact')}
                    </a>
                  ) : (
                    <Link 
                      to="/#contacto" 
                      className="text-white/70 hover:text-accent-cyan transition-colors text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-primary-dark rounded"
                    >
                      {t('nav.contact')}
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
            <nav aria-labelledby="projects-nav">
              <h4 id="projects-nav" className="text-xs font-semibold uppercase tracking-wider text-accent-cyan mb-4 font-body">
                {t('footer.projects')}
              </h4>
              <ul className="flex flex-col gap-3" role="list">
                <li role="listitem">
                  <Link 
                    to="/proyectos/fhoto"
                    className="text-white/70 hover:text-accent-cyan transition-colors text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-primary-dark rounded"
                  >
                    Fhoto
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm font-body">
              &copy; 2025 .js agency. {t('footer.copyright')}
            </p>
            <nav className="flex flex-wrap gap-4 text-sm" aria-label={t('a11y.legalLinks')}>
              <a 
                href="/legal" 
                className="text-white/60 hover:text-accent-cyan transition-colors focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-primary-dark rounded"
              >
                {t('legal.terms')}
              </a>
              <a 
                href="/legal" 
                className="text-white/60 hover:text-accent-cyan transition-colors focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-primary-dark rounded"
              >
                {t('legal.privacy')}
              </a>
              <a 
                href="/legal" 
                className="text-white/60 hover:text-accent-cyan transition-colors focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-primary-dark rounded"
              >
                {t('legal.cookies')}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;

