import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import OptimizedImage from './OptimizedImage';
// Using static paths for public assets
const mushroom = '/images/proyectos/1mushroommdp.png';
const joyeria = '/images/proyectos/3joyeriadiaz.png';
const automatizaciones = '/images/proyectos/make.png';
const inmobiliaria = '/images/proyectos/inmobiliaria.jpg';

const ClientSlider = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const clients = [
    {
      name: 'Mushroom mdp',
      image: mushroom,
      category: t('clients.mushroom.category'),
      description: t('clients.mushroom.description')
    },
    {
      name: 'Joyería Díaz',
      image: joyeria,
      category: t('clients.jewelry.category'),
      description: t('clients.jewelry.description')
    },
    {
      name: 'Automatizaciones IA',
      image: automatizaciones,
      category: t('clients.automation.category'),
      description: t('clients.automation.description')
    },
    {
      name: 'Fotografía Aérea',
      image: inmobiliaria,
      category: t('clients.aerial.category'),
      description: t('clients.aerial.description')
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % clients.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [clients.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % clients.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + clients.length) % clients.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="portfolio" className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display mb-4 text-primary-dark">
            {t('clients.title')}
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-body px-4">
            {t('clients.subtitle')}
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl border border-slate-200">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {clients.map((client, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-0 min-h-[400px] md:min-h-[500px]">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <OptimizedImage 
                        src={client.image} 
                        alt={`${client.name} - ${client.category}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="text-sm font-semibold uppercase tracking-wider text-accent-cyan mb-2 font-body">
                        {client.category}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold font-display mb-4 text-primary-dark">
                        {client.name}
                      </h3>
                      <p className="text-base md:text-lg text-slate-600 leading-relaxed font-body mb-6">
                        {client.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-slate-500 font-body">
                        <span className="w-2 h-2 bg-accent-cyan rounded-full"></span>
                        {t('clients.trusted')}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2"
            aria-label={t('clients.previous')}
          >
            <ChevronLeft size={24} className="text-slate-700" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2"
            aria-label={t('clients.next')}
          >
            <ChevronRight size={24} className="text-slate-700" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-accent-cyan' : 'bg-white/50'
                }`}
                aria-label={t('clients.goToSlide').replace('{slide}', (index + 1).toString())}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary-dark font-display">
              {clients.length}+
            </div>
            <div className="text-sm text-slate-600 font-body">
              {t('clients.stats.projects')}
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary-dark font-display">
              100%
            </div>
            <div className="text-sm text-slate-600 font-body">
              {t('clients.stats.satisfaction')}
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary-dark font-display">
              24h
            </div>
            <div className="text-sm text-slate-600 font-body">
              {t('clients.stats.response')}
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary-dark font-display">
              EU
            </div>
            <div className="text-sm text-slate-600 font-body">
              {t('clients.stats.coverage')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSlider;
