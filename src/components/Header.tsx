const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-50/80 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <div className="flex items-baseline gap-1 font-display">
          <span className="text-2xl font-extrabold text-primary-dark">.js</span>
          <span className="text-2xl font-semibold text-accent-cyan">agency</span>
        </div>
        <nav className="flex gap-8 items-center">
          <a href="#servicios" className="text-sm font-medium text-slate-800 hover:text-accent-cyan transition-colors md:inline hidden">
            Servicios
          </a>
          <a href="#proceso" className="text-sm font-medium text-slate-800 hover:text-accent-cyan transition-colors md:inline hidden">
            Proceso
          </a>
          <a href="#nosotros" className="text-sm font-medium text-slate-800 hover:text-accent-cyan transition-colors md:inline hidden">
            Nosotros
          </a>
          <a href="#contacto" className="px-5 py-2 bg-accent-cyan text-white rounded-lg font-semibold hover:bg-cyan-500 hover:-translate-y-0.5 transition-all">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

