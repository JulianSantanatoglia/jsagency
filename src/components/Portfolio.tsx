const Portfolio = () => {
  const projects = [
    {
      title: "Smart Card by .js agency",
      category: "Aplicación Web",
      description: "Carta digital inteligente con divisor para comensales, diseñada específicamente para establecimientos gastronómicos. Interfaz intuitiva y moderna que mejora la experiencia del cliente.",
      image: "📱",
      technologies: ["React", "Vite", "TailwindCSS"],
      link: "https://bar-de-tapas.netlify.app",
      featured: true
    },
    {
      title: "Mushroom MDP",
      category: "Plataforma Empresarial",
      description: "Plataforma completa para empresa de alquiler de equipos de sonido profesional y cabinas para DJ. Sistema de gestión de inventario y reservas online para eventos musicales.",
      image: "🎵",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://mushroommdp.com",
      featured: true
    },
    {
      title: "DesignStudio Portfolio",
      category: "Portfolio Creativo",
      description: "Portfolio interactivo para estudio de diseño con galería dinámica y animaciones personalizadas.",
      image: "🎨",
      technologies: ["React", "Framer Motion", "GSAP"],
      link: "#",
      featured: false
    },
    {
      title: "InnovateLab Dashboard",
      category: "Dashboard Admin",
      description: "Panel de administración completo con gráficos interactivos, gestión de usuarios y reportes en tiempo real.",
      image: "📊",
      technologies: ["React", "Chart.js", "Firebase"],
      link: "#",
      featured: false
    },
    {
      title: "RestaurantApp Mobile",
      category: "App Móvil",
      description: "Aplicación móvil para restaurante con menú digital, reservas online y sistema de pedidos.",
      image: "📱",
      technologies: ["React Native", "Expo", "Firebase"],
      link: "#",
      featured: false
    },
    {
      title: "BrandIdentity Package",
      category: "Branding",
      description: "Identidad visual completa incluyendo logo, colores, tipografías y guía de estilo corporativa.",
      image: "🎯",
      technologies: ["Figma", "Adobe CC", "Brand Guidelines"],
      link: "#",
      featured: false
    }
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24 px-4 md:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display mb-4 text-primary-dark dark:text-white">
            Portfolio de Proyectos
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-body px-4">
            Cada proyecto es una historia única. Desde landing pages hasta aplicaciones completas, aquí podés ver el alcance de nuestro trabajo.
          </p>
        </div>
        
        {/* Proyectos destacados */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold font-display mb-8 text-primary-dark dark:text-white text-center">
            Proyectos Destacados
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-slate-50 to-white dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl border border-slate-200 dark:border-gray-600 hover-lift hover:border-accent-cyan hover:shadow-accent-cyan/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-6xl mb-6 text-center">{project.image}</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-accent-cyan mb-2 font-body">
                  {project.category}
                </div>
                <h4 className="text-2xl font-bold font-display mb-4 text-primary-dark dark:text-white">
                  {project.title}
                </h4>
                <p className="text-slate-600 dark:text-gray-300 mb-6 leading-relaxed font-body">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-accent-cyan/10 text-accent-cyan text-xs font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent-cyan hover:text-cyan-600 font-semibold text-sm transition-colors"
                >
                  Ver proyecto →
                </a>
              </div>
            ))}
          </div>
        </div>
        
        {/* Grid de todos los proyectos */}
        <div>
          <h3 className="text-2xl font-bold font-display mb-8 text-primary-dark dark:text-white text-center">
            Todos los Proyectos
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-slate-50 dark:bg-gray-700 p-6 rounded-xl border border-slate-200 dark:border-gray-600 hover-lift hover:border-accent-cyan hover:shadow-accent-cyan/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 text-center">{project.image}</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-accent-cyan mb-2 font-body">
                  {project.category}
                </div>
                <h4 className="text-lg font-bold font-display mb-3 text-primary-dark dark:text-white">
                  {project.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-gray-300 mb-4 leading-relaxed font-body">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-accent-cyan/10 text-accent-cyan text-xs font-medium rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent-cyan hover:text-cyan-600 font-semibold text-xs transition-colors"
                >
                  Ver proyecto →
                </a>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-slate-600 dark:text-gray-300 font-body mb-6">
            ¿Te gusta lo que ves? Trabajemos juntos en tu próximo proyecto.
          </p>
          <a 
            href="#contacto" 
            className="inline-block px-8 py-4 bg-accent-cyan text-white font-semibold text-lg rounded-xl hover-lift shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 font-body"
          >
            Empezá tu proyecto →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
