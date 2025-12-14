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
      statLabel: t('why.webdev.statLabel'),
      cta: t('why.webdev.cta')
    },
    {
      id: 'ai',
      title: t('why.ai.title'),
      content: t('why.ai.content'),
      color: 'emerald',
      image: '/images/proyectos/automatizacion.jpg',
      stat: t('why.ai.stat'),
      statLabel: t('why.ai.statLabel'),
      cta: t('why.ai.cta')
    }
  ];

  return (
    <section 
      className="relative py-24 md:py-32 px-4 md:px-8 overflow-hidden"
    >
      <PatternBackground opacity={0.02} />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {whyContent.map((item, index) => (
          <ScrollReveal key={item.id} direction="up" delay={index * 150}>
            <div className={`mb-20 md:mb-32 last:mb-0 ${
              index % 2 === 0 ? '' : 'md:flex-row-reverse'
            }`}>
              <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                index % 2 === 0 ? '' : 'md:flex-row-reverse'
              }`}>
                {/* Imagen con diseño creativo */}
                <div className={`relative w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg md:rounded-2xl">
                    <OptimizedImage
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay con gradiente */}
                    <div className={`absolute inset-0 ${
                      item.color === 'blue' 
                        ? 'bg-gradient-to-br from-blue-600/20 via-transparent to-transparent' 
                        : 'bg-gradient-to-br from-emerald-600/20 via-transparent to-transparent'
                    }`}></div>
                    
                    {/* Stat destacado flotante */}
                    <div className={`absolute ${
                      index % 2 === 0 ? 'top-6 right-6' : 'top-6 left-6'
                    } bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-6 py-4 rounded-xl shadow-xl border ${
                      item.color === 'blue' 
                        ? 'border-blue-200 dark:border-blue-800' 
                        : 'border-emerald-200 dark:border-emerald-800'
                    }`}>
                      <div className={`text-3xl md:text-4xl font-bold ${
                        item.color === 'blue' 
                          ? 'text-blue-600 dark:text-blue-400' 
                          : 'text-emerald-600 dark:text-emerald-400'
                      }`}>
                        {item.stat}
                      </div>
                      <div className="text-xs md:text-sm text-slate-600 dark:text-slate-400 font-medium mt-1">
                        {item.statLabel}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contenido de texto */}
                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'
                }`}>
                  <div className="space-y-6">
                    {/* Título con estilo marketing */}
                    <h3 className={`text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight ${
                      item.color === 'blue' 
                        ? 'text-blue-900 dark:text-blue-100' 
                        : 'text-emerald-900 dark:text-emerald-100'
                    }`}>
                      {item.title}
                    </h3>
                    
                    {/* Línea decorativa */}
                    <div className={`w-20 h-1 rounded-full ${
                      item.color === 'blue' 
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500' 
                        : 'bg-gradient-to-r from-emerald-500 to-teal-500'
                    }`}></div>

                    {/* Texto del contenido */}
                    <p className={`text-lg md:text-xl leading-relaxed font-body ${
                      item.color === 'blue' 
                        ? 'text-slate-700 dark:text-slate-300' 
                        : 'text-slate-700 dark:text-slate-300'
                    }`}>
                      {item.content}
                    </p>

                    {/* CTA sutil */}
                    <div className={`inline-flex items-center gap-2 text-sm font-semibold ${
                      item.color === 'blue' 
                        ? 'text-blue-600 dark:text-blue-400' 
                        : 'text-emerald-600 dark:text-emerald-400'
                    } group/cta cursor-pointer`}>
                      <span>{item.cta}</span>
                      <span className="group-hover/cta:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default WhySection;
