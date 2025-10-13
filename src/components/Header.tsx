const Header = () => {
  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <div className="flex items-baseline gap-2 font-display">
          <span className="text-2xl font-bold text-slate-900 dark:text-white">.js</span>
          <span className="text-2xl font-semibold text-accent-cyan dark:text-accent-cyan">agency</span>
        </div>
        <nav className="flex gap-3 md:gap-6 items-center">
          <a href="#home" className="text-sm font-medium text-slate-900 dark:text-white hover:text-accent-cyan transition-colors lg:inline hidden">
            Home
          </a>
          <a href="#servicios" className="text-sm font-medium text-slate-900 dark:text-white hover:text-accent-cyan transition-colors lg:inline hidden">
            Servicios
          </a>
          <a href="#portfolio" className="text-sm font-medium text-slate-900 dark:text-white hover:text-accent-cyan transition-colors lg:inline hidden">
            Portfolio
          </a>
          <a href="#nosotros" className="text-sm font-medium text-slate-900 dark:text-white hover:text-accent-cyan transition-colors md:inline hidden">
            Nosotros
          </a>
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            <svg className="w-5 h-5 dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <svg className="w-5 h-5 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>
          <a href="#contacto" className="px-4 md:px-6 py-2 md:py-2.5 bg-accent-cyan text-white rounded-xl font-semibold text-xs md:text-sm uppercase tracking-wide hover:bg-cyan-500 hover-lift shadow-md shadow-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/25">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

