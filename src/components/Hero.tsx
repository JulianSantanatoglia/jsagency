const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="z-10 animate-fade-in-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display mb-6 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-accent-cyan bg-clip-text text-transparent">
              Soluciones digitales con otra perspectiva.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl font-body">
            En .js agency combinamos diseño, tecnología y estrategia para crear webs y sistemas que funcionan de verdad.
          </p>
          <a 
            href="#contacto" 
            className="inline-block px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-accent-cyan to-cyan-500 text-white font-bold text-lg md:text-xl rounded-xl hover:from-cyan-500 hover:to-cyan-600 hover:-translate-y-1 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
          >
            Consultar Proyecto
          </a>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 flex-wrap mt-8 md:mt-12 text-sm text-slate-600">
            <span className="font-medium">Equipo multidisciplinario</span>
            <span className="hidden md:inline">•</span>
            <span className="font-medium">Procesos claros</span>
            <span className="hidden md:inline">•</span>
            <span className="font-medium">Entregas a tiempo</span>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[500px] lg:flex items-center justify-center hidden animate-fade-in-right">
          <div className="w-full h-full bg-gradient-to-br from-accent-cyan to-accent-emerald rounded-3xl opacity-10 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

