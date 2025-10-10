const Services = () => {
  const services = [
    {
      title: 'Desarrollo Web',
      description: 'Landing pages, webs corporativas y tiendas online.',
      features: [
        'Rápidas, seguras, administrables y pensadas para convertir.',
        'SEO técnico base y buenas prácticas de performance.'
      ],
      icon: '🌐'
    },
    {
      title: 'Soluciones Digitales',
      description: 'Branding e identidad visual.',
      features: [
        'Automatizaciones con IA, integración de herramientas y flujos.',
        'Auditorías, soporte y mantenimiento técnico.'
      ],
      icon: '⚡'
    },
    {
      title: '.js Aerials (Drone)',
      description: 'Foto y video aéreo para marcas, inmuebles, turismo y eventos.',
      features: [
        'Contenido visual que eleva tu presencia digital y tus campañas.',
        'Operación certificada A1/A3 y registro de operador.'
      ],
      icon: '🚁'
    }
  ];

  return (
    <section id="servicios" className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold font-display mb-4 text-primary-dark">
            Servicios
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Desarrollo web, soluciones digitales y contenido aéreo. Tres líneas de trabajo integradas para que tu marca se vea mejor, funcione mejor y venda mejor.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-slate-50 p-10 rounded-2xl border border-slate-200 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-accent-cyan"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold font-display mb-4 text-primary-dark">
                {service.title}
              </h3>
              <p className="text-base text-slate-800 mb-6 font-medium">
                {service.description}
              </p>
              <ul className="flex flex-col gap-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-sm text-slate-600 pl-6 relative leading-relaxed">
                    <span className="absolute left-0 text-accent-cyan font-bold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

