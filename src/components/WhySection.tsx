import { useLanguage } from '../contexts/LanguageContext';
import ScrollReveal from './ScrollReveal';
import PatternBackground from './PatternBackground';
import OptimizedImage from './OptimizedImage';

const WhySection = () => {
  const { t } = useLanguage();

  const whyContent = [
    {
      id: 'webdev',
      title: t('why.webdev.title'),
      content: t('why.webdev.content'),
      color: 'blue',
      image: '/images/proyectos/mushroommdp.jpg',
      stat: t('why.webdev.stat'),
      statLabel: t('why.webdev.statLabel')
    },
    {
      id: 'ai',
      title: t('why.ai.title'),
      content: t('why.ai.content'),
      color: 'emerald',
      image: '/images/proyectos/automatizacion.jpg',
      stat: t('why.ai.stat'),
      statLabel: t('why.ai.statLabel')
    },
    {
      id: 'tours',
      title: t('why.tours.title'),
      content: t('why.tours.content'),
      color: 'purple',
      image: '/images/proyectos/360.jpg',
      stat: t('why.tours.stat'),
      statLabel: t('why.tours.statLabel')
    },
    {
      id: 'drone',
      title: t('why.drone.title'),
      content: t('why.drone.content'),
      color: 'slate',
      image: '/images/proyectos/inmobiliaria.jpg',
      stat: t('why.drone.stat'),
      statLabel: t('why.drone.statLabel')
    }
  ];

  return (
    <section 
      className="relative py-16 md:py-20 px-4 md:px-8 overflow-hidden"
    >
      <PatternBackground opacity={0.02} />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Blog-style layout - 4 sections in a grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {whyContent.map((item, index) => (
            <ScrollReveal key={item.id} direction="up" delay={index * 100}>
              <article 
                id={`why-${item.id}`}
                className="group relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                {/* Imagen más pequeña */}
                <div className="relative aspect-[3/2] overflow-hidden">
                  <OptimizedImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay con gradiente sutil */}
                  <div className={`absolute inset-0 ${
                    item.color === 'blue' 
                      ? 'bg-gradient-to-br from-blue-600/15 via-transparent to-transparent' 
                      : item.color === 'emerald'
                      ? 'bg-gradient-to-br from-emerald-600/15 via-transparent to-transparent'
                      : item.color === 'purple'
                      ? 'bg-gradient-to-br from-purple-600/15 via-transparent to-transparent'
                      : 'bg-gradient-to-br from-slate-600/15 via-transparent to-transparent'
                  }`}></div>
                  
                  {/* Stat destacado flotante */}
                  <div className={`absolute top-3 right-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3 py-2 rounded-lg shadow-lg border ${
                    item.color === 'blue' 
                      ? 'border-blue-200 dark:border-blue-800' 
                      : item.color === 'emerald'
                      ? 'border-emerald-200 dark:border-emerald-800'
                      : item.color === 'purple'
                      ? 'border-purple-200 dark:border-purple-800'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}>
                    <div className={`text-lg md:text-xl font-bold ${
                      item.color === 'blue' 
                        ? 'text-blue-600 dark:text-blue-400' 
                        : item.color === 'emerald'
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : item.color === 'purple'
                        ? 'text-purple-600 dark:text-purple-400'
                        : 'text-slate-700 dark:text-slate-300'
                    }`}>
                      {item.stat}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-0.5">
                      {item.statLabel}
                    </div>
                  </div>
                </div>

                {/* Contenido de texto completo */}
                <div className="p-6 md:p-7">
                  <div className="space-y-4">
                    {/* Título */}
                    <h3 className={`text-xl md:text-2xl font-bold font-display leading-tight ${
                      item.color === 'blue' 
                        ? 'text-blue-900 dark:text-blue-100' 
                        : item.color === 'emerald'
                        ? 'text-emerald-900 dark:text-emerald-100'
                        : item.color === 'purple'
                        ? 'text-purple-900 dark:text-purple-100'
                        : 'text-slate-900 dark:text-slate-100'
                    } group-hover:text-accent-cyan transition-colors`}>
                      {item.title}
                    </h3>
                    
                    {/* Línea decorativa */}
                    <div className={`w-14 h-1 rounded-full ${
                      item.color === 'blue' 
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500' 
                        : item.color === 'emerald'
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
                        : item.color === 'purple'
                        ? 'bg-gradient-to-r from-purple-500 to-purple-600'
                        : 'bg-gradient-to-r from-slate-600 to-slate-700'
                    }`}></div>

                    {/* Texto completo sin truncar */}
                    <p className="text-sm md:text-base leading-relaxed font-body text-slate-700 dark:text-slate-300">
                      {item.content}
                    </p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
