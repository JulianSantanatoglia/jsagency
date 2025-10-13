import { Globe, Palette, Bot, Camera } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Desarrollo Web',
      description: 'Landing pages, webs corporativas y tiendas online.',
      features: [
        'Rápidas, seguras, administrables y pensadas para convertir.',
        'SEO técnico base y buenas prácticas de performance.'
      ],
      icon: Globe
    },
    {
      title: 'Diseño & Branding',
      description: 'Identidad visual completa y diseño profesional.',
      features: [
        'Logo, paleta de colores, tipografías y guía de estilo.',
        'Diseño de materiales gráficos y experiencia de usuario.'
      ],
      icon: Palette
    },
    {
      title: 'Automatizaciones IA',
      description: 'Agentes inteligentes y flujos de trabajo automatizados.',
      features: [
        'Chatbots conversacionales y asistentes virtuales.',
        'Automatización de procesos y integración de herramientas.'
      ],
      icon: Bot
    },
    {
      title: 'Fotografía y Video aéreo',
      description: 'Para marcas, inmuebles, turismo y eventos.',
      features: [
        'Contenido visual que eleva tu presencia digital y tus campañas.',
        'Operación certificada A1/A3 y registro de operador.'
      ],
      icon: Camera
    }
  ];

  return (
    <section id="servicios" className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display mb-4 text-primary-dark">
            Servicios
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-body px-4">
            Desarrollo web, diseño y branding, automatizaciones con IA y contenido aéreo. Cuatro líneas de trabajo integradas para que tu marca se vea mejor, funcione mejor y venda mejor.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-slate-50 p-6 md:p-10 rounded-2xl border border-slate-200 hover-lift hover:border-accent-cyan hover:shadow-accent-cyan/10 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 md:mb-6">
                <service.icon size={48} className="text-accent-cyan mx-auto" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-display mb-3 md:mb-4 text-primary-dark">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-slate-800 mb-4 md:mb-6 font-medium font-body">
                {service.description}
              </p>
              <ul className="flex flex-col gap-2 md:gap-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-xs md:text-sm text-slate-600 pl-5 md:pl-6 relative leading-relaxed font-body">
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

