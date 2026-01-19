import { useLanguage } from '../contexts/LanguageContext';
import ScrollReveal from './ScrollReveal';

interface CaseStudy {
  id: string;
  image: string;
  demoUrl: string;
  name: string;
  descriptionKey: string;
}

const SuccessCases = () => {
  const { t } = useLanguage();

  const cases: CaseStudy[] = [
    {
      id: 'mushroom',
      image: '/images/casosdeexito/mushroom.png',
      demoUrl: 'https://mushroommdp.com',
      name: 'Mushroom mdp',
      descriptionKey: 'mushroom'
    },
    {
      id: 'joyeriadiaz',
      image: '/images/casosdeexito/joyeriadiaz.png',
      demoUrl: '#',
      name: 'Joyería Díaz',
      descriptionKey: 'joyeriadiaz'
    },
    {
      id: 'micaeladiaz',
      image: '/images/casosdeexito/micaeladiaz.png',
      demoUrl: '#',
      name: 'Micaela Díaz',
      descriptionKey: 'micaeladiaz'
    },
    {
      id: 'asantanatoglia',
      image: '/images/casosdeexito/asantanatoglia.png',
      demoUrl: '#',
      name: 'Alejandro Santanatoglia',
      descriptionKey: 'asantanatoglia'
    }
  ];

  return (
    <section id="casos-de-exito" className="relative py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-primary-dark dark:text-white tracking-tight">
              {t('successCases.title').replace(t('successCases.titleHighlight'), '').trim()} <span className="text-accent-cyan">{t('successCases.titleHighlight')}</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-body font-light">
              {t('successCases.subtitle')}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {cases.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="group relative overflow-hidden aspect-[16/9]"
              >
                {/* Image Container */}
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Dark Overlay - Always visible */}
                  <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/60"></div>
                  
                  {/* Title and Button - Centered */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-white font-display text-center">
                      {caseStudy.name}
                    </h3>
                    <a
                      href={caseStudy.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 text-sm text-white border border-white/50 rounded-md hover:bg-white/10 hover:border-white/80 transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      {t('successCases.viewDemo')}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SuccessCases;
