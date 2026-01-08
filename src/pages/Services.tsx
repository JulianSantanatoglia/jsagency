import { Link } from 'react-router-dom';
import { Globe, Bot, Video, Camera, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import PatternBackground from '../components/PatternBackground';

const Services = () => {
  const services = [
    {
      id: 'web',
      title: 'Desarrollo Web',
      description: 'Web moderna, rápida y pensada para conseguir clientes.',
      icon: Globe,
      color: 'blue',
      link: '/services/web'
    },
    {
      id: 'ai',
      title: 'Automatizaciones con IA',
      description: 'Automatizamos tareas y respuestas para ahorrar tiempo y cerrar más ventas.',
      icon: Bot,
      color: 'emerald',
      link: '/services/ai'
    },
    {
      id: 'virtual-tours',
      title: 'Recorridos 360',
      description: 'Mostrá tu espacio como si el cliente estuviera ahí.',
      icon: Video,
      color: 'purple',
      link: '/services/virtual-tours'
    },
    {
      id: 'drone',
      title: 'Drone',
      description: 'Foto y video aéreo para elevar tu marca y generar confianza.',
      icon: Camera,
      color: 'orange',
      link: '/services/drone'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F7] dark:bg-slate-900 relative pt-24 pb-16">
      <PatternBackground opacity={0.04} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <ScrollReveal direction="up" delay={0}>
          <header className="text-center mb-16 md:mb-20 pt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-primary-dark dark:text-white tracking-tight">
              Nuestros <span className="text-accent-cyan">Servicios</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-body">
              Soluciones digitales profesionales para hacer crecer tu negocio.
            </p>
          </header>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100}>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.id}
                to={service.link}
                className="group relative bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-8 hover:shadow-xl hover:border-accent-cyan/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`flex items-start gap-4 mb-4`}>
                  <div className={`flex-shrink-0 w-14 h-14 rounded-2xl ${
                    service.color === 'blue' ? 'bg-blue-50 dark:bg-blue-900/30' :
                    service.color === 'emerald' ? 'bg-emerald-50 dark:bg-emerald-900/30' :
                    service.color === 'purple' ? 'bg-purple-50 dark:bg-purple-900/30' :
                    'bg-orange-50 dark:bg-orange-900/30'
                  } flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon size={28} className={`${
                      service.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                      service.color === 'emerald' ? 'text-emerald-600 dark:text-emerald-400' :
                      service.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                      'text-orange-600 dark:text-orange-400'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold font-display mb-2 text-primary-dark dark:text-white group-hover:text-accent-cyan transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 font-body leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center text-accent-cyan font-semibold mt-4 group-hover:translate-x-2 transition-transform duration-300">
                  Ver detalles
                  <ArrowRight size={18} className="ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Services;