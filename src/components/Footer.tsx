const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 mb-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-baseline gap-1 font-display">
              <span className="text-3xl font-extrabold text-white">.js</span>
              <span className="text-3xl font-semibold text-accent-cyan">agency</span>
            </div>
            <p className="text-white/60 text-sm max-w-xs">
              Soluciones digitales con otra perspectiva.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-accent-cyan mb-4">
                Servicios
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#servicios" className="text-white/70 hover:text-accent-cyan transition-colors text-sm">
                    Desarrollo Web
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="text-white/70 hover:text-accent-cyan transition-colors text-sm">
                    Soluciones Digitales
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="text-white/70 hover:text-accent-cyan transition-colors text-sm">
                    .js Aerials
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-accent-cyan mb-4">
                Empresa
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#nosotros" className="text-white/70 hover:text-accent-cyan transition-colors text-sm">
                    Sobre nosotros
                  </a>
                </li>
                <li>
                  <a href="#proceso" className="text-white/70 hover:text-accent-cyan transition-colors text-sm">
                    Proceso
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="text-white/70 hover:text-accent-cyan transition-colors text-sm">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">
            &copy; 2025 .js agency. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

