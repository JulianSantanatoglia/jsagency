import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [servicesMenuTimeout, setServicesMenuTimeout] = useState<NodeJS.Timeout | null>(null);
  const location = useLocation();
  const { t } = useLanguage();

  const servicesLinks = [
    { label: 'Páginas web', to: '/servicios/paginas-web#top' },
    { label: 'Automatizaciones', to: '/servicios/automatizaciones#top' },
    { label: 'Visitas virtuales', to: '/servicios/visitas-virtuales#top' },
    { label: 'Servicios de dron', to: '/servicios/servicios-de-dron#top' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesMenuOpen(false);
    if (servicesMenuTimeout) {
      clearTimeout(servicesMenuTimeout);
      setServicesMenuTimeout(null);
    }
  };

  const handleServicesMenuEnter = () => {
    if (servicesMenuTimeout) {
      clearTimeout(servicesMenuTimeout);
      setServicesMenuTimeout(null);
    }
    setIsServicesMenuOpen(true);
  };

  const handleServicesMenuLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesMenuOpen(false);
    }, 200); // Pequeño delay para permitir clicks
    setServicesMenuTimeout(timeout);
  };

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesMenuOpen(false);
    if (servicesMenuTimeout) {
      clearTimeout(servicesMenuTimeout);
      setServicesMenuTimeout(null);
    }
  }, [location.pathname]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (servicesMenuTimeout) {
        clearTimeout(servicesMenuTimeout);
      }
    };
  }, [servicesMenuTimeout]);

  const isHomePage = location.pathname === '/' || location.pathname === '';
  const isLegalPage = location.pathname.startsWith('/legal');
  const isServicePage = location.pathname.startsWith('/servicios');

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-b border-gray-100 dark:border-slate-800 z-50" role="banner">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <div className="flex items-baseline gap-2 font-display">
          <Link to="/" className="focus:outline-none rounded-lg">
            <span className="text-2xl font-bold text-slate-900 dark:text-white">
              <span className="text-accent-cyan">.</span>js
            </span>
            <span className="text-2xl font-semibold text-accent-cyan">agency</span>
          </Link>
        </div>
        
        {/* Mobile Controls - Dark Mode, Language, Menu */}
        <div className="lg:hidden flex items-center gap-3">
          <DarkModeToggle />
          <LanguageSwitcher />
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-lg text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-300 focus:outline-none"
            aria-label={isMenuOpen ? t('a11y.closeMenu') : t('a11y.toggleMenu')}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="relative w-6 h-6">
              <Menu 
                size={24} 
                aria-hidden="true" 
                className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
                }`}
              />
              <X 
                size={24} 
                aria-hidden="true" 
                className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
                }`}
              />
            </div>
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 items-center" role="navigation" aria-label={t('a11y.mainNavigation')}>
          {isHomePage ? (
            <>
              <a 
                href="#home" 
                className="relative text-sm font-medium text-slate-900 dark:text-slate-200 hover:text-accent-cyan transition-colors focus:outline-none rounded-lg px-2 py-1 group"
              >
                {t('nav.home')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-cyan transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>
              <a 
                href="#nosotros" 
                className="relative text-sm font-medium text-slate-900 dark:text-slate-200 hover:text-accent-cyan transition-colors focus:outline-none rounded-lg px-2 py-1 group"
              >
                {t('nav.about')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-cyan transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>
              <a 
                href="#servicios" 
                className="relative text-sm font-medium text-slate-900 dark:text-slate-200 hover:text-accent-cyan transition-colors focus:outline-none rounded-lg px-2 py-1 group"
              >
                {t('nav.services')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-cyan transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>
              <a 
                href="#proceso" 
                className="relative text-sm font-medium text-slate-900 dark:text-slate-200 hover:text-accent-cyan transition-colors focus:outline-none rounded-lg px-2 py-1 group"
              >
                {t('nav.process')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-cyan transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>
              <a 
                href="#faq" 
                className="relative text-sm font-medium text-slate-900 dark:text-slate-200 hover:text-accent-cyan transition-colors focus:outline-none rounded-lg px-2 py-1 group"
              >
                {t('nav.faq')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-cyan transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>
            </>
          ) : isServicePage ? (
            <>
              <Link 
                to="/#home" 
                className="relative text-sm font-medium text-slate-900 dark:text-slate-200 hover:text-accent-cyan transition-colors focus:outline-none rounded-lg px-2 py-1 group"
              >
                {t('nav.home')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-cyan transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
              <a 
                href="#top" 
                className="relative text-sm font-medium text-slate-900 dark:text-slate-200 hover:text-accent-cyan transition-colors focus:outline-none rounded-lg px-2 py-1 group"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('top');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                {t('nav.about')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-cyan transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>
              <a 
                href="#planes" 
                className="relative text-sm font-medium text-slate-900 dark:text-slate-200 hover:text-accent-cyan transition-colors focus:outline-none rounded-lg px-2 py-1 group"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('planes');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                {t('nav.services')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-cyan transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>
              <a 
                href="#contacto" 
                className="relative text-sm font-medium text-slate-900 dark:text-slate-200 hover:text-accent-cyan transition-colors focus:outline-none rounded-lg px-2 py-1 group"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('contacto');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                {t('nav.process')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-cyan transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>
              <Link 
                to="/#faq" 
                className="relative text-sm font-medium text-slate-900 dark:text-slate-200 hover:text-accent-cyan transition-colors focus:outline-none rounded-lg px-2 py-1 group"
              >
                {t('nav.faq')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-cyan transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
            </>
          ) : isServicePage ? (
            <>
              <Link 
                to="/#home" 
                className="relative text-sm font-medium text-slate-900 dark:text-slate-200 hover:text-accent-cyan transition-colors focus:outline-none rounded-lg px-2 py-1 group"
              >
                {t('nav.home')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-cyan transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
              <a 
                href="#top" 
                className="relative text-sm font-medium text-slate-900 dark:text-slate-200 hover:text-accent-cyan transition-colors focus:outline-none rounded-lg px-2 py-1 group"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('top');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                {t('nav.about')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-cyan transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>
              <a 
                href="#planes" 
                className="relative text-sm font-medium text-slate-900 dark:text-slate-200 hover:text-accent-cyan transition-colors focus:outline-none rounded-lg px-2 py-1 group"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('planes');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                {t('nav.services')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-cyan transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>
              <a 
                href="#contacto" 
                className="relative text-sm font-medium text-slate-900 dark:text-slate-200 hover:text-accent-cyan transition-colors focus:outline-none rounded-lg px-2 py-1 group"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('contacto');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                {t('nav.process')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-cyan transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>
              <Link 
                to="/#faq" 
                className="relative text-sm font-medium text-slate-900 dark:text-slate-200 hover:text-accent-cyan transition-colors focus:outline-none rounded-lg px-2 py-1 group"
              >
                {t('nav.faq')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-cyan transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
            </>
          ) : (
            <>
              <Link 
                to="/#home" 
                className="relative text-sm font-medium text-slate-900 dark:text-slate-200 hover:text-accent-cyan transition-colors focus:outline-none rounded-lg px-2 py-1 group"
              >
                {t('nav.home')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-cyan transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
              <Link 
                to="/#nosotros" 
                className="relative text-sm font-medium text-slate-900 dark:text-slate-200 hover:text-accent-cyan transition-colors focus:outline-none rounded-lg px-2 py-1 group"
              >
                {t('nav.about')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-cyan transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
              <Link 
                to="/#servicios" 
                className="relative text-sm font-medium text-slate-900 dark:text-slate-200 hover:text-accent-cyan transition-colors focus:outline-none rounded-lg px-2 py-1 group"
              >
                {t('nav.services')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-cyan transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
              <Link 
                to="/#proceso" 
                className="relative text-sm font-medium text-slate-900 dark:text-slate-200 hover:text-accent-cyan transition-colors focus:outline-none rounded-lg px-2 py-1 group"
              >
                {t('nav.process')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-cyan transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
              <Link 
                to="/#faq" 
                className="relative text-sm font-medium text-slate-900 dark:text-slate-200 hover:text-accent-cyan transition-colors focus:outline-none rounded-lg px-2 py-1 group"
              >
                {t('nav.faq')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-cyan transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
            </>
          )}

          {/* Dropdown de servicios */}
          <div
            className="relative"
            onMouseEnter={handleServicesMenuEnter}
            onMouseLeave={handleServicesMenuLeave}
          >
            <button
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-sm font-semibold text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/30 rounded-lg hover:bg-accent-cyan/15 hover:text-accent-cyan transition-colors focus:outline-none"
              aria-haspopup="true"
              aria-expanded={isServicesMenuOpen}
              onClick={() => setIsServicesMenuOpen((prev) => !prev)}
            >
              Servicios
              <ChevronDown size={16} className={`transition-transform ${isServicesMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
              className={`absolute left-0 top-full pt-2 w-64 transition-all duration-200 ${
                isServicesMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-xl py-2">
                {servicesLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-colors"
                    onClick={() => {
                      setIsServicesMenuOpen(false);
                      // Scroll to top when navigating to service page
                      setTimeout(() => {
                        const topElement = document.getElementById('top');
                        if (topElement) {
                          topElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        } else {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                      }, 100);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <DarkModeToggle />
            <LanguageSwitcher />
          </div>
          {isHomePage ? (
            <a 
              href="#contacto" 
              className="px-6 py-2.5 bg-accent-cyan text-white rounded-2xl font-semibold text-sm tracking-wide hover:bg-cyan-500 hover-lift shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 focus:outline-none transition-all duration-300"
            >
              {t('nav.contact')}
            </a>
          ) : isServicePage ? (
            <a 
              href="#contacto" 
              className="px-6 py-2.5 bg-accent-cyan text-white rounded-2xl font-semibold text-sm tracking-wide hover:bg-cyan-500 hover-lift shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 focus:outline-none transition-all duration-300"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('contacto');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              {t('nav.contact')}
            </a>
          ) : (
            <Link 
              to="/#contacto" 
              className="px-6 py-2.5 bg-accent-cyan text-white rounded-2xl font-semibold text-sm tracking-wide hover:bg-cyan-500 hover-lift shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 focus:outline-none transition-all duration-300"
            >
              {t('nav.contact')}
            </Link>
          )}
        </nav>
      </div>

      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        className={`lg:hidden absolute top-full left-0 right-0 bg-white/98 dark:bg-slate-900/98 backdrop-blur-lg border-b border-gray-100 dark:border-slate-800 shadow-xl transition-all duration-300 ease-out overflow-hidden ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0 max-h-screen' 
            : 'opacity-0 -translate-y-4 max-h-0 pointer-events-none'
        }`}
        role="navigation"
        aria-label={t('a11y.mobileNavigation')}
      >
        <nav className={`flex flex-col p-4 pb-6 space-y-4 transition-all duration-300 ${
          isMenuOpen ? 'delay-100' : 'delay-0'
        }`}>
            {isHomePage ? (
              <>
                <a 
                  href="#home" 
                  className={`text-base font-medium text-slate-700 dark:text-slate-200 hover:text-accent-cyan transition-all duration-300 py-2 focus:outline-none rounded-lg px-2 transform ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? '150ms' : '0ms'
                  }}
                  onClick={closeMenu}
                >
                  {t('nav.home')}
                </a>
                <a 
                  href="#nosotros" 
                  className={`text-base font-medium text-slate-700 dark:text-slate-200 hover:text-accent-cyan transition-all duration-300 py-2 focus:outline-none rounded-lg px-2 transform ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? '200ms' : '0ms'
                  }}
                  onClick={closeMenu}
                >
                  {t('nav.about')}
                </a>
                <a 
                  href="#servicios" 
                  className={`text-base font-medium text-slate-700 dark:text-slate-200 hover:text-accent-cyan transition-all duration-300 py-2 focus:outline-none rounded-lg px-2 transform ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? '250ms' : '0ms'
                  }}
                  onClick={closeMenu}
                >
                  {t('nav.services')}
                </a>
                <a 
                  href="#proceso" 
                  className={`text-base font-medium text-slate-700 dark:text-slate-200 hover:text-accent-cyan transition-all duration-300 py-2 focus:outline-none rounded-lg px-2 transform ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? '300ms' : '0ms'
                  }}
                  onClick={closeMenu}
                >
                  {t('nav.process')}
                </a>
                <a 
                  href="#faq" 
                  className={`text-base font-medium text-slate-700 dark:text-slate-200 hover:text-accent-cyan transition-all duration-300 py-2 focus:outline-none rounded-lg px-2 transform ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? '350ms' : '0ms'
                  }}
                  onClick={closeMenu}
                >
                  {t('nav.faq')}
                </a>
              </>
            ) : isServicePage ? (
              <>
                <Link 
                  to="/#home" 
                  className={`text-base font-medium text-slate-700 dark:text-slate-200 hover:text-accent-cyan transition-all duration-300 py-2 focus:outline-none rounded-lg px-2 transform ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? '150ms' : '0ms'
                  }}
                  onClick={closeMenu}
                >
                  {t('nav.home')}
                </Link>
                <a 
                  href="#top" 
                  className={`text-base font-medium text-slate-700 dark:text-slate-200 hover:text-accent-cyan transition-all duration-300 py-2 focus:outline-none rounded-lg px-2 transform ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? '200ms' : '0ms'
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    closeMenu();
                    const element = document.getElementById('top');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  {t('nav.about')}
                </a>
                <a 
                  href="#planes" 
                  className={`text-base font-medium text-slate-700 dark:text-slate-200 hover:text-accent-cyan transition-all duration-300 py-2 focus:outline-none rounded-lg px-2 transform ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? '250ms' : '0ms'
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    closeMenu();
                    const element = document.getElementById('planes');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  {t('nav.services')}
                </a>
                <a 
                  href="#contacto" 
                  className={`text-base font-medium text-slate-700 dark:text-slate-200 hover:text-accent-cyan transition-all duration-300 py-2 focus:outline-none rounded-lg px-2 transform ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? '300ms' : '0ms'
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    closeMenu();
                    const element = document.getElementById('contacto');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  {t('nav.process')}
                </a>
                <Link 
                  to="/#faq" 
                  className={`text-base font-medium text-slate-700 dark:text-slate-200 hover:text-accent-cyan transition-all duration-300 py-2 focus:outline-none rounded-lg px-2 transform ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? '350ms' : '0ms'
                  }}
                  onClick={closeMenu}
                >
                  {t('nav.faq')}
                </Link>
              </>
            ) : isLegalPage ? (
              <>
                <Link 
                  to="/#home" 
                  className={`text-base font-medium text-slate-700 dark:text-slate-200 hover:text-accent-cyan transition-all duration-300 py-2 focus:outline-none rounded-lg px-2 transform ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? '150ms' : '0ms'
                  }}
                  onClick={closeMenu}
                >
                  {t('nav.home')}
                </Link>
                <Link 
                  to="/#nosotros" 
                  className={`text-base font-medium text-slate-700 dark:text-slate-200 hover:text-accent-cyan transition-all duration-300 py-2 focus:outline-none rounded-lg px-2 transform ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? '200ms' : '0ms'
                  }}
                  onClick={closeMenu}
                >
                  {t('nav.about')}
                </Link>
                <Link 
                  to="/#servicios" 
                  className={`text-base font-medium text-slate-700 dark:text-slate-200 hover:text-accent-cyan transition-all duration-300 py-2 focus:outline-none rounded-lg px-2 transform ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? '250ms' : '0ms'
                  }}
                  onClick={closeMenu}
                >
                  {t('nav.services')}
                </Link>
                <Link 
                  to="/#proceso" 
                  className={`text-base font-medium text-slate-700 dark:text-slate-200 hover:text-accent-cyan transition-all duration-300 py-2 focus:outline-none rounded-lg px-2 transform ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? '300ms' : '0ms'
                  }}
                  onClick={closeMenu}
                >
                  {t('nav.process')}
                </Link>
                <Link 
                  to="/#faq" 
                  className={`text-base font-medium text-slate-700 dark:text-slate-200 hover:text-accent-cyan transition-all duration-300 py-2 focus:outline-none rounded-lg px-2 transform ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? '350ms' : '0ms'
                  }}
                  onClick={closeMenu}
                >
                  {t('nav.faq')}
                </Link>
              </>
            ) : (
              <Link 
                to="/" 
                className={`text-base font-medium text-slate-700 hover:text-accent-cyan transition-all duration-300 py-2 focus:outline-none rounded-lg px-2 transform ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isMenuOpen ? '150ms' : '0ms'
                }}
                onClick={closeMenu}
              >
                {t('nav.home')}
              </Link>
            )}

          {/* Dropdown de servicios - móvil */}
          <div className="border-t border-slate-200 dark:border-slate-800 pt-3 mt-1">
          <button
            onClick={() => setIsServicesMenuOpen((prev) => !prev)}
            className="flex items-center justify-between w-full text-base font-semibold text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/30 rounded-lg px-3 py-2 focus:outline-none hover:bg-accent-cyan/15"
            aria-expanded={isServicesMenuOpen}
          >
            Servicios
            <ChevronDown size={18} className={`transition-transform ${isServicesMenuOpen ? 'rotate-180' : ''}`} />
          </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                isServicesMenuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="flex flex-col gap-2 mt-2">
                {servicesLinks.map((item, idx) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                    style={{ transitionDelay: isServicesMenuOpen ? `${120 + idx * 40}ms` : '0ms' }}
                    onClick={() => {
                      closeMenu();
                      // Scroll to top when navigating to service page
                      setTimeout(() => {
                        const topElement = document.getElementById('top');
                        if (topElement) {
                          topElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        } else {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                      }, 100);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {isHomePage ? (
            <a 
              href="#contacto" 
              className={`px-6 py-2.5 bg-accent-cyan text-white rounded-2xl font-semibold text-base tracking-wide hover:bg-cyan-500 transition-all duration-300 text-center focus:outline-none transform ${
                isMenuOpen ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-4 opacity-0 scale-95'
              }`}
              style={{
                transitionDelay: isMenuOpen ? '500ms' : '0ms'
              }}
              onClick={closeMenu}
            >
              {t('nav.contact')}
            </a>
          ) : isServicePage ? (
            <a 
              href="#contacto" 
              className={`px-6 py-2.5 bg-accent-cyan text-white rounded-2xl font-semibold text-base tracking-wide hover:bg-cyan-500 transition-all duration-300 text-center focus:outline-none transform ${
                isMenuOpen ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-4 opacity-0 scale-95'
              }`}
              style={{
                transitionDelay: isMenuOpen ? '500ms' : '0ms'
              }}
              onClick={(e) => {
                e.preventDefault();
                closeMenu();
                const element = document.getElementById('contacto');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              {t('nav.contact')}
            </a>
          ) : (
            <Link 
              to="/#contacto" 
              className={`px-6 py-2.5 bg-accent-cyan text-white rounded-2xl font-semibold text-base tracking-wide hover:bg-cyan-500 transition-all duration-300 text-center focus:outline-none transform ${
                isMenuOpen ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-4 opacity-0 scale-95'
              }`}
              style={{
                transitionDelay: isMenuOpen ? '500ms' : '0ms'
              }}
              onClick={closeMenu}
            >
              {t('nav.contact')}
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;

