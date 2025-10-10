const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-cyan-50 pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-2 gap-16 items-center">
        <div className="z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold font-display mb-6 leading-tight bg-gradient-to-r from-primary-dark to-accent-cyan bg-clip-text text-transparent">
            Soluciones digitales con otra perspectiva.
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
            En .js agency combinamos diseño, tecnología y estrategia para crear webs y sistemas que funcionan de verdad.
          </p>
          <a 
            href="#contacto" 
            className="inline-block px-8 py-4 bg-accent-cyan text-white font-semibold text-lg rounded-xl transition-all hover:bg-cyan-500 hover:-translate-y-0.5 shadow-lg shadow-cyan-200 hover:shadow-xl hover:shadow-cyan-300"
          >
            Empezá tu proyecto →
          </a>
          <div className="flex gap-4 flex-wrap mt-12 text-sm text-slate-600">
            <span className="font-medium">Equipo multidisciplinario</span>
            <span>•</span>
            <span className="font-medium">Procesos claros</span>
            <span>•</span>
            <span className="font-medium">Entregas a tiempo</span>
          </div>
        </div>
        <div className="relative h-[500px] md:flex items-center justify-center hidden">
          <div className="w-full h-full bg-gradient-to-br from-accent-cyan to-accent-emerald rounded-3xl opacity-10 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

