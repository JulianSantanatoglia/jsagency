const Testimonials = () => {
  const testimonials = [
    {
      name: "Sofia Martínez",
      company: "Bar de Tapas",
      role: "Propietaria",
      content: "Smart Card revolucionó la experiencia de nuestros clientes. La carta digital es intuitiva, elegante y ha mejorado significativamente el servicio. Los comensales pueden explorar nuestros platos de manera interactiva.",
      rating: 5
    },
    {
      name: "Diego Fernández",
      company: "Mushroom MDP",
      role: "Fundador",
      content: "La plataforma desarrollada por .js agency nos permitió profesionalizar completamente nuestro negocio de alquiler de equipos. El sistema de reservas online y gestión de inventario ha sido un cambio total.",
      rating: 5
    },
    {
      name: "Ana Martín",
      company: "DesignStudio",
      role: "Directora Creativa",
      content: "La calidad del código y la atención al detalle de .js agency es impresionante. Nuestro proyecto se entregó a tiempo y superó todas nuestras expectativas.",
      rating: 5
    },
    {
      name: "David López",
      company: "InnovateLab",
      role: "CTO",
      content: "Como desarrollador, aprecio mucho el nivel técnico de .js agency. Su arquitectura escalable y código limpio nos facilitó mucho el mantenimiento.",
      rating: 5
    }
  ];

  return (
    <section id="testimonios" className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display mb-4 text-primary-dark">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-body px-4">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación. Cada proyecto es una oportunidad de crear algo extraordinario.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-gray-700 hover-lift hover:border-accent-cyan hover:shadow-accent-cyan/10 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <blockquote className="text-sm md:text-base text-slate-700 dark:text-gray-300 leading-relaxed mb-6 font-body">
                "{testimonial.content}"
              </blockquote>
              
              <div className="border-t border-slate-200 dark:border-gray-700 pt-4">
                <div className="font-semibold text-slate-900 dark:text-white font-display">
                  {testimonial.name}
                </div>
                <div className="text-sm text-accent-cyan font-medium">
                  {testimonial.role} en {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-slate-600 dark:text-gray-300 font-body">
            ¿Querés ser el próximo cliente satisfecho? 
            <a href="#contacto" className="text-accent-cyan hover:text-cyan-600 font-semibold ml-1">
              Hablemos de tu proyecto →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
