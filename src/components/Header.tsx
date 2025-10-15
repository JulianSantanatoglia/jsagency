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
            className="text-sm font-medium text-slate-900 hover:text-accent-cyan transition-colors focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 rounded-lg px-2 py-1"
            aria-current="page"
          >
            {t('nav.home')}
          </a>
          <a 
            href="#servicios" 
            className="text-sm font-medium text-slate-900 hover:text-accent-cyan transition-colors focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 rounded-lg px-2 py-1"
          >
            {t('nav.services')}
          </a>
          <a 
            href="#portfolio" 
            className="text-sm font-medium text-slate-900 hover:text-accent-cyan transition-colors focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 rounded-lg px-2 py-1"
          >
            {t('nav.portfolio')}
          </a>
          <a 
            href="#nosotros" 
            className="text-sm font-medium text-slate-900 hover:text-accent-cyan transition-colors focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 rounded-lg px-2 py-1"
          >
            {t('nav.about')}
          </a>
          <a 
            href="#faq" 
            className="text-sm font-medium text-slate-900 hover:text-accent-cyan transition-colors focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 rounded-lg px-2 py-1"
          >
            {t('nav.faq')}
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
          className="lg:hidden p-2 rounded-lg text-slate-900 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2"
          aria-label={isMenuOpen ? t('a11y.closeMenu') : t('a11y.toggleMenu')}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          id="mobile-menu"
          className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg"
          role="navigation"
          aria-label={t('a11y.mobileNavigation')}
        >
          <nav className="flex flex-col p-4 space-y-4">
            <a 
              href="#home" 
              className="text-sm font-medium text-slate-900 hover:text-accent-cyan transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 rounded-lg px-2"
              onClick={closeMenu}
              aria-current="page"
            >
              {t('nav.home')}
            </a>
            <a 
              href="#servicios" 
              className="text-sm font-medium text-slate-900 hover:text-accent-cyan transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 rounded-lg px-2"
              onClick={closeMenu}
            >
              {t('nav.services')}
            </a>
            <a 
              href="#portfolio" 
              className="text-sm font-medium text-slate-900 hover:text-accent-cyan transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 rounded-lg px-2"
              onClick={closeMenu}
            >
              {t('nav.portfolio')}
            </a>
            <a 
              href="#nosotros" 
              className="text-sm font-medium text-slate-900 hover:text-accent-cyan transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 rounded-lg px-2"
              onClick={closeMenu}
            >
              {t('nav.about')}
            </a>
            <a 
              href="#faq" 
              className="text-sm font-medium text-slate-900 hover:text-accent-cyan transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 rounded-lg px-2"
              onClick={closeMenu}
            >
              {t('nav.faq')}
            </a>
            <div className="flex justify-center py-2">
              <LanguageSwitcher />
            </div>
            <a 
              href="#contacto" 
              className="px-6 py-2.5 bg-accent-cyan text-white rounded-xl font-semibold text-sm uppercase tracking-wide hover:bg-cyan-500 transition-colors text-center focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2"
              onClick={closeMenu}
            >
              {t('nav.contact')}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

