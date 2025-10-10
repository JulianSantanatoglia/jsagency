const Contact = () => {
  return (
    <section id="contacto" className="py-24 px-8 bg-gradient-to-br from-primary-dark to-slate-800 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-6">
          <h2 className="text-5xl font-extrabold font-display text-white mb-2">
            Hablemos de tu proyecto
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            Contanos tu objetivo en 2–3 líneas y te proponemos el mejor camino.
          </p>
          <p className="text-base text-accent-cyan font-semibold">
            Respuesta en 24–48h.
          </p>
          <a 
            href="mailto:hola@jsagency.com" 
            className="inline-block w-fit px-8 py-4 mt-4 bg-accent-cyan text-white font-semibold text-lg rounded-xl transition-all hover:bg-cyan-500 hover:-translate-y-0.5 shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40"
          >
            Escribinos →
          </a>
        </div>
        <div className="flex flex-col gap-10">
          <div className="pb-8 border-b border-white/10">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent-cyan mb-2">
              Email
            </div>
            <div className="text-xl font-semibold text-white">
              hola@jsagency.com
            </div>
          </div>
          <div className="pb-8 border-b border-white/10">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent-cyan mb-2">
              Ubicación
            </div>
            <div className="text-xl font-semibold text-white">
              Argentina
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-accent-cyan mb-2">
              Horario
            </div>
            <div className="text-xl font-semibold text-white">
              Lun–Vie 9:00–18:00 ART
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

