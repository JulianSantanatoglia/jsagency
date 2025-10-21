import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50" role="banner">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="flex items-baseline gap-2 font-display">
          <a href="#home" className="focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 rounded-lg">
            <span className="text-2xl font-bold text-slate-900">.js</span>
            <span className="text-2xl font-semibold text-accent-cyan">agency</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 items-center" role="navigation" aria-label={t('a11y.mainNavigation')}>
          <a 
            href="#home" 
            className="relative text-sm font-medium text-slate-900 hover:text-accent-cyan transition-colors focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 rounded-lg px-2 py-1 group"
            aria-current="page"
          >
            {t('nav.home')}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-cyan transition-all duration-300 ease-out group-hover:w-full"></span>
          </a>
          <a 
            href="#servicios" 
            className="relative text-sm font-medium text-slate-900 hover:text-accent-cyan transition-colors focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 rounded-lg px-2 py-1 group"
          >
            {t('nav.services')}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-cyan transition-all duration-300 ease-out group-hover:w-full"></span>
          </a>
          <a 
            href="#portfolio" 
            className="relative text-sm font-medium text-slate-900 hover:text-accent-cyan transition-colors focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 rounded-lg px-2 py-1 group"
          >
            {t('nav.portfolio')}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-cyan transition-all duration-300 ease-out group-hover:w-full"></span>
          </a>
          <a 
            href="#nosotros" 
            className="relative text-sm font-medium text-slate-900 hover:text-accent-cyan transition-colors focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 rounded-lg px-2 py-1 group"
          >
            {t('nav.about')}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-cyan transition-all duration-300 ease-out group-hover:w-full"></span>
          </a>
          <a 
            href="#faq" 
            className="relative text-sm font-medium text-slate-900 hover:text-accent-cyan transition-colors focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 rounded-lg px-2 py-1 group"
          >
            {t('nav.faq')}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-cyan transition-all duration-300 ease-out group-hover:w-full"></span>
          </a>
          <LanguageSwitcher />
          <a 
            href="#contacto" 
            className="px-6 py-2.5 bg-accent-cyan text-white rounded-xl font-semibold text-sm uppercase tracking-wide hover:bg-cyan-500 hover-lift shadow-md shadow-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2"
          >
            {t('nav.contact')}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-lg text-slate-900 hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2"
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
        className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xl transition-all duration-300 ease-out overflow-hidden ${
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
            <a 
              href="#home" 
              className={`text-base font-semibold text-slate-800 hover:text-accent-cyan transition-all duration-300 py-2 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 rounded-lg px-2 transform ${
                isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              }`}
              style={{
                transitionDelay: isMenuOpen ? '150ms' : '0ms'
              }}
              onClick={closeMenu}
              aria-current="page"
            >
              {t('nav.home')}
            </a>
            <a 
              href="#servicios" 
              className={`text-base font-semibold text-slate-800 hover:text-accent-cyan transition-all duration-300 py-2 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 rounded-lg px-2 transform ${
                isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              }`}
              style={{
                transitionDelay: isMenuOpen ? '200ms' : '0ms'
              }}
              onClick={closeMenu}
            >
              {t('nav.services')}
            </a>
            <a 
              href="#portfolio" 
              className={`text-base font-semibold text-slate-800 hover:text-accent-cyan transition-all duration-300 py-2 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 rounded-lg px-2 transform ${
                isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              }`}
              style={{
                transitionDelay: isMenuOpen ? '250ms' : '0ms'
              }}
              onClick={closeMenu}
            >
              {t('nav.portfolio')}
            </a>
            <a 
              href="#nosotros" 
              className={`text-base font-semibold text-slate-800 hover:text-accent-cyan transition-all duration-300 py-2 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 rounded-lg px-2 transform ${
                isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              }`}
              style={{
                transitionDelay: isMenuOpen ? '300ms' : '0ms'
              }}
              onClick={closeMenu}
            >
              {t('nav.about')}
            </a>
            <a 
              href="#faq" 
              className={`text-base font-semibold text-slate-800 hover:text-accent-cyan transition-all duration-300 py-2 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 rounded-lg px-2 transform ${
                isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              }`}
              style={{
                transitionDelay: isMenuOpen ? '350ms' : '0ms'
              }}
              onClick={closeMenu}
            >
              {t('nav.faq')}
            </a>
            <div className={`flex justify-center py-2 transition-all duration-300 transform ${
              isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}
            style={{
              transitionDelay: isMenuOpen ? '400ms' : '0ms'
            }}
            >
              <LanguageSwitcher />
            </div>
            <a 
              href="#contacto" 
              className={`px-6 py-2.5 bg-accent-cyan text-white rounded-xl font-bold text-base uppercase tracking-wide hover:bg-cyan-500 transition-all duration-300 text-center focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 transform ${
                isMenuOpen ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-4 opacity-0 scale-95'
              }`}
              style={{
                transitionDelay: isMenuOpen ? '450ms' : '0ms'
              }}
              onClick={closeMenu}
            >
              {t('nav.contact')}
            </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

