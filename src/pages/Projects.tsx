import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import PatternBackground from '../components/PatternBackground';
import Contact from '../components/Contact';

const Projects = () => {
  const projects = [
    {
      id: 'divly',
      name: 'Divly',
      category: 'Solución digital',
      problem: 'Dividir cuentas en bares y restaurantes siempre genera conflictos entre comensales.',
      solution: 'Carta digital inteligente que permite a cada comensal marcar lo que consumió. El sistema calcula automáticamente cuánto debe pagar cada persona.',
      result: 'Experiencia mejorada para clientes, menos tiempo en caja para el personal, y mayor satisfacción general.',
      link: '/solutions/divly',
      image: '/images/casosdeexito/mushroom.png',
      demo: 'https://bar-de-tapas.netlify.app'
    },
    {
      id: 'mushroom',
      name: 'Mushroom mdp',
      category: 'Plataforma empresarial',
      problem: 'Necesitaban un sistema completo de gestión y reservas para su empresa de alquiler de equipos de sonido profesional.',
      solution: 'Desarrollamos una plataforma web completa con gestión de inventario, reservas, clientes y facturación integrada.',
      result: 'Automatización completa de procesos, mejor organización y capacidad de escalar el negocio.',
      link: '#',
      image: '/images/casosdeexito/mushroom.png',
      demo: 'https://mushroommdp.com'
    },
    {
      id: 'joyeriadiaz',
      name: 'Joyería Díaz',
      category: 'E-commerce',
      problem: 'Necesitaban una plataforma elegante para mostrar y vender sus colecciones de joyería de alta calidad online.',
      solution: 'Desarrollamos un e-commerce sofisticado con catálogo visual, pasarela de pago y gestión de inventario.',
      result: 'Presencia online profesional que permite vender 24/7 y llegar a más clientes.',
      link: '#',
      image: '/images/casosdeexito/joyeriadiaz.png',
      demo: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F7] dark:bg-slate-900 relative pt-24 pb-16">
      <PatternBackground opacity={0.04} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <ScrollReveal direction="up" delay={0}>
          <header className="text-center mb-16 md:mb-20 pt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-primary-dark dark:text-white tracking-tight">
              Nuestros <span className="text-accent-cyan">Proyectos</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-body">
              Casos reales: cómo ayudamos a empresas a resolver problemas y crecer.
            </p>
          </header>
        </ScrollReveal>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} direction="up" delay={index * 100}>
              <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 md:p-12 flex flex-col">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-accent-cyan/10 text-accent-cyan rounded-full text-sm font-semibold mb-3">
                        {project.category}
                      </span>
                      <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-primary-dark dark:text-white">
                        {project.name}
                      </h2>
                    </div>
                    
                    <div className="space-y-6 mb-8 flex-1">
                      <div>
                        <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">
                          El Problema
                        </h3>
                        <p className="text-slate-700 dark:text-slate-300 font-body leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">
                          La Solución
                        </h3>
                        <p className="text-slate-700 dark:text-slate-300 font-body leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">
                          El Resultado
                        </h3>
                        <p className="text-slate-700 dark:text-slate-300 font-body leading-relaxed">
                          {project.result}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      {project.demo !== '#' && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl font-semibold hover:bg-slate-200 dark:hover:bg-slate-600 transition-all duration-300"
                        >
                          Ver proyecto
                          <ArrowRight size={18} />
                        </a>
                      )}
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-cyan text-white rounded-xl font-semibold hover:bg-cyan-500 transition-all duration-300"
                      >
                        Quiero algo similar
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal direction="up" delay={400}>
          <div className="mt-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-primary-dark dark:text-white">
              ¿Tenés un proyecto en mente?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 font-body">
              Hablemos de cómo podemos ayudarte a resolverlo.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-cyan text-white rounded-2xl font-semibold text-lg hover:bg-cyan-500 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30"
            >
              Hablemos de tu proyecto
              <ArrowRight size={20} />
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Contact Section */}
      <div className="relative z-10 mt-16">
        <Contact />
      </div>
    </div>
  );
};

export default Projects;