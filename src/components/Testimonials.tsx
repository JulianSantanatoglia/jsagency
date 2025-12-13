import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollReveal from './ScrollReveal';

const Testimonials = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: t('testimonials.testimonials.maximiliano.name'),
      company: t('testimonials.testimonials.maximiliano.company'),
      role: t('testimonials.testimonials.maximiliano.role'),
      content: t('testimonials.testimonials.maximiliano.content'),
      rating: 5
    },
    {
      name: t('testimonials.testimonials.micaela.name'),
      company: t('testimonials.testimonials.micaela.company'),
      role: t('testimonials.testimonials.micaela.role'),
      content: t('testimonials.testimonials.micaela.content'),
      rating: 5
    },
    {
      name: t('testimonials.testimonials.alejandro.name'),
      company: t('testimonials.testimonials.alejandro.company'),
      role: t('testimonials.testimonials.alejandro.role'),
      content: t('testimonials.testimonials.alejandro.content'),
      rating: 5
    }
  ];

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonios" className="relative py-24 md:py-32 px-4 md:px-8 -mt-12">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-primary-dark dark:text-white tracking-tight">
              {t('testimonials.title').replace(t('testimonials.titleHighlight'), '').trim()} <span className="text-accent-cyan">{t('testimonials.titleHighlight')}</span>
            </h2>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-body font-light">
            {t('testimonials.subtitle')}
          </p>
          </div>
        </ScrollReveal>
        
        {/* Slider Container */}
        <ScrollReveal direction="up" delay={100}>
          <div className="relative max-w-2xl mx-auto">
            {/* Testimonial Cards */}
            <div className="relative overflow-hidden w-full">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentIndex * (100 / testimonials.length)}%)`,
                  width: `${testimonials.length * 100}%`
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0"
                    style={{ 
                      width: `${100 / testimonials.length}%`,
                      minWidth: `${100 / testimonials.length}%`
                    }}
                  >
                    <div className="bg-gray-50 dark:bg-slate-800 p-8 md:p-12 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm">
                      {/* Rating stars */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      
                      {/* Quote */}
                      <blockquote className="text-lg md:text-xl text-slate-700 dark:text-slate-200 leading-relaxed mb-8 font-body text-center">
                        "{testimonial.content}"
                      </blockquote>
                      
                      {/* Author info */}
                      <div className="text-center border-t border-gray-200 dark:border-slate-700 pt-6">
                        <div className="font-semibold text-slate-900 dark:text-white font-display text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">
                          {testimonial.role}{testimonial.company && ` — ${testimonial.company}`}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 ${
                    index === currentIndex
                      ? 'w-8 bg-accent-cyan'
                      : 'w-2 bg-gray-300 dark:bg-slate-600 hover:bg-gray-400 dark:hover:bg-slate-500'
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
        
      </div>
    </section>
  );
};

export default Testimonials;
