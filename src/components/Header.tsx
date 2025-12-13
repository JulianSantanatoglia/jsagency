import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProjectsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setIsProjectsOpen(false);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isHomePage = location.pathname === '/' || location.pathname === '';

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-b border-gray-100 dark:border-slate-800 z-50" role="banner">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="flex items-baseline gap-2 font-display">
          <Link to="/" className="focus:outline-none rounded-lg">
            <span className="text-2xl font-bold text-slate-900 dark:text-white">.js</span>
            <span className="text-2xl font-semibold text-accent-cyan">agency</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 items-center" role="navigation" aria-label={t('a11y.mainNavigation')}>
          {isHomePage ? (
            <>
              <a 
                href="#home" 
                className="relative text-sm font-medium text-slate-900 dark:text-slate-200 hover:text-accent-cyan transition-colors focus:outline-none rounded-lg px-2 py-1 group"
              >
                Inicio
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
          ) : (
            <Link 
              to="/" 
              className="relative text-sm font-medium text-slate-900 dark:text-slate-200 hover:text-accent-cyan transition-colors focus:outline-none rounded-lg px-2 py-1 group"
            >
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-cyan transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>
          )}
          
          {/* Projects Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsProjectsOpen(!isProjectsOpen)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsProjectsOpen(!isProjectsOpen);
                } else if (e.key === 'Escape') {
                  setIsProjectsOpen(false);
                }
              }}
              className="relative text-sm font-semibold text-accent-cyan bg-accent-cyan/10 hover:bg-accent-cyan/20 transition-all focus:outline-none rounded-lg px-3 py-1.5 group flex items-center gap-1 border border-accent-cyan/20 hover:border-accent-cyan/40"
              aria-expanded={isProjectsOpen}
              aria-haspopup="true"
              aria-label={t('nav.projects')}
            >
              {t('nav.projects')}
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-200 ${isProjectsOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>
            
            {isProjectsOpen && (
              <div 
                className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-gray-100 dark:border-slate-700 py-2 z-50"
                role="menu"
                aria-orientation="vertical"
              >
                <a
                  href="https://bar-de-tapas.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-accent-cyan transition-colors focus:outline-none focus:bg-gray-50 dark:focus:bg-slate-700 focus:text-accent-cyan"
                  role="menuitem"
                  onClick={() => setIsProjectsOpen(false)}
                >
                  Divly
                </a>
                <Link
                  to="/proyectos/fhoto"
                  className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-accent-cyan transition-colors focus:outline-none focus:bg-gray-50 dark:focus:bg-slate-700 focus:text-accent-cyan"
                  role="menuitem"
                  onClick={() => setIsProjectsOpen(false)}
                >
                  Fhoto
                </Link>
              </div>
            )}
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
          ) : (
            <Link 
              to="/#contacto" 
              className="px-6 py-2.5 bg-accent-cyan text-white rounded-2xl font-semibold text-sm tracking-wide hover:bg-cyan-500 hover-lift shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 focus:outline-none transition-all duration-300"
            >
              {t('nav.contact')}
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-lg text-slate-900 hover:bg-gray-100 transition-all duration-300 focus:outline-none"
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

      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        className={`lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-lg border-b border-gray-100 shadow-xl transition-all duration-300 ease-out overflow-hidden ${
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
                  Inicio
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
                Inicio
              </Link>
            )}
            
            {/* Mobile Projects Dropdown */}
            <div className={`transform ${
              isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}
            style={{
              transitionDelay: isMenuOpen ? '400ms' : '0ms'
            }}>
              <button
                onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                className="text-base font-semibold text-accent-cyan bg-accent-cyan/10 dark:bg-accent-cyan/20 hover:bg-accent-cyan/20 dark:hover:bg-accent-cyan/30 transition-all duration-300 py-2 focus:outline-none rounded-lg px-2 w-full text-left flex items-center justify-between border border-accent-cyan/20 dark:border-accent-cyan/30"
                aria-expanded={isProjectsOpen}
              >
                {t('nav.projects')}
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-200 ${isProjectsOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isProjectsOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <a
                    href="https://bar-de-tapas.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-slate-600 dark:text-slate-300 hover:text-accent-cyan transition-colors py-1"
                    onClick={closeMenu}
                  >
                    Divly
                  </a>
                  <Link
                    to="/proyectos/fhoto"
                    className="block text-sm text-slate-600 dark:text-slate-300 hover:text-accent-cyan transition-colors py-1"
                    onClick={closeMenu}
                  >
                    Fhoto
                  </Link>
                </div>
              )}
            </div>

            <div className={`flex justify-center py-2 transition-all duration-300 transform ${
              isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}
            style={{
              transitionDelay: isMenuOpen ? '450ms' : '0ms'
            }}
            >
              <div className="flex items-center gap-3">
                <DarkModeToggle />
                <LanguageSwitcher />
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

