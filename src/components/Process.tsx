const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Descubrimiento',
      description: 'Brief rápido y objetivos claros.'
    },
    {
      number: '02',
      title: 'Diseño & Arquitectura',
      description: 'Wireframes, look & feel y estructura técnica.'
    },
    {
      number: '03',
      title: 'Desarrollo',
      description: 'Código limpio, integraciones y contenido.'
    },
    {
      number: '04',
      title: 'Lanzamiento',
      description: 'Pruebas, SEO técnico base y publicación.'
    },
    {
      number: '05',
      title: 'Acompañamiento',
      description: 'Soporte y evolución continua.'
    }
  ];

  return (
    <section id="proceso" className="py-24 px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold font-display mb-6 text-primary-dark">
            Proceso de trabajo
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-body">
            Descubrimiento → Diseño → Desarrollo → Lanzamiento → Acompañamiento.<br />
            Sin sorpresas, con entregas claras y medibles.
          </p>
        </div>
        <div className="flex flex-col gap-8 mb-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex gap-8 items-start bg-white p-8 rounded-2xl border border-slate-200 hover-lift hover:border-accent-cyan hover:shadow-accent-cyan/10 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl font-extrabold font-display text-accent-cyan opacity-30 min-w-[80px]">
                {step.number}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold font-display mb-2 text-primary-dark">
                  {step.title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed font-body">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center p-6 bg-gradient-to-r from-accent-cyan to-accent-emerald rounded-xl text-white font-medium font-body">
          <p>Cada proyecto pasa por revisión creativa y técnica para asegurar calidad y consistencia.</p>
        </div>
      </div>
    </section>
  );
};

export default Process;

