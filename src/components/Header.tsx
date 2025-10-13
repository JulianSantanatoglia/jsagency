import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="flex items-baseline gap-2 font-display">
          <span className="text-2xl font-bold text-slate-900">.js</span>
          <span className="text-2xl font-semibold text-accent-cyan">agency</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 items-center">
          <a href="#home" className="text-sm font-medium text-slate-900 hover:text-accent-cyan transition-colors">
            Home
          </a>
          <a href="#servicios" className="text-sm font-medium text-slate-900 hover:text-accent-cyan transition-colors">
            Servicios
          </a>
          <a href="#portfolio" className="text-sm font-medium text-slate-900 hover:text-accent-cyan transition-colors">
            Portfolio
          </a>
          <a href="#nosotros" className="text-sm font-medium text-slate-900 hover:text-accent-cyan transition-colors">
            Nosotros
          </a>
          <a href="#contacto" className="px-6 py-2.5 bg-accent-cyan text-white rounded-xl font-semibold text-sm uppercase tracking-wide hover:bg-cyan-500 hover-lift shadow-md shadow-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/25">
            Contacto
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-lg text-slate-900 hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
          <nav className="flex flex-col p-4 space-y-4">
            <a 
              href="#home" 
              className="text-sm font-medium text-slate-900 hover:text-accent-cyan transition-colors py-2"
              onClick={closeMenu}
            >
              Home
            </a>
            <a 
              href="#servicios" 
              className="text-sm font-medium text-slate-900 hover:text-accent-cyan transition-colors py-2"
              onClick={closeMenu}
            >
              Servicios
            </a>
            <a 
              href="#portfolio" 
              className="text-sm font-medium text-slate-900 hover:text-accent-cyan transition-colors py-2"
              onClick={closeMenu}
            >
              Portfolio
            </a>
            <a 
              href="#nosotros" 
              className="text-sm font-medium text-slate-900 hover:text-accent-cyan transition-colors py-2"
              onClick={closeMenu}
            >
              Nosotros
            </a>
            <a 
              href="#contacto" 
              className="px-6 py-2.5 bg-accent-cyan text-white rounded-xl font-semibold text-sm uppercase tracking-wide hover:bg-cyan-500 transition-colors text-center"
              onClick={closeMenu}
            >
              Contacto
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

