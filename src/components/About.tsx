const About = () => {
  const team = [
    {
      role: 'Dirección & Desarrollo',
      name: 'Equipo de desarrollo',
      description: 'Supervisión integral y arquitectura web.'
    },
    {
      role: 'Diseño & Branding',
      name: 'Equipo creativo',
      description: 'Identidad visual, UI y dirección de arte.'
    },
    {
      role: 'Estrategia & Automatización',
      name: 'Especialistas',
      description: 'Flujos con IA e integraciones.'
    },
    {
      role: 'Producción (.js Aerials)',
      name: 'Equipo audiovisual',
      description: 'Fotografía y video aéreo para marcas.'
    }
  ];

  return (
    <section id="nosotros" className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl font-extrabold font-display mb-8 text-primary-dark">
            Sobre nosotros
          </h2>
          <div className="max-w-4xl text-lg text-slate-800 leading-relaxed space-y-5 font-body">
            <p>
              Somos <strong className="text-primary-dark font-semibold">.js agency</strong>, un estudio digital que combina diseño, tecnología y estrategia para crear soluciones honestas, modernas y funcionales.
            </p>
            <p>
              Trabajamos en equipo, con procesos claros y foco en el detalle, para que cada proyecto sea sólido hoy y escalable mañana.
            </p>
            <p className="text-accent-cyan font-semibold text-xl mt-2">
              Si buscás alguien de confianza para llevar tu marca al siguiente nivel, hablemos.
            </p>
          </div>
        </div>
        <div className="pt-12 border-t border-slate-200">
          <h3 className="text-3xl font-bold font-display mb-10 text-primary-dark">
            Nuestro equipo
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover-lift hover:border-accent-cyan hover:shadow-accent-cyan/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-accent-cyan mb-2 font-body">
                  {member.role}
                </div>
                <div className="text-xl font-bold text-primary-dark mb-3 font-display">
                  {member.name}
                </div>
                <div className="text-sm text-slate-600 leading-relaxed font-body">
                  {member.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

