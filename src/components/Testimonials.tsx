import { useLanguage } from '../contexts/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();
  
  const testimonial = {
    name: t('testimonials.testimonials.maximiliano.name'),
    company: t('testimonials.testimonials.maximiliano.company'),
    role: t('testimonials.testimonials.maximiliano.role'),
    content: t('testimonials.testimonials.maximiliano.content'),
    rating: 5
  };

  return (
    <section id="testimonios" className="py-16 md:py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display mb-4 text-primary-dark">
            {t('testimonials.title')}
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-body">
            {t('testimonials.subtitle')}
          </p>
        </div>
        
        {/* Single testimonial card - centered and minimal */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
            {/* Rating stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            
            {/* Quote */}
            <blockquote className="text-lg md:text-xl text-slate-700 leading-relaxed mb-8 font-body text-center">
              "{testimonial.content}"
            </blockquote>
            
            {/* Author info */}
            <div className="text-center border-t border-gray-200 pt-6">
              <div className="font-semibold text-slate-900 font-display text-lg">
                {testimonial.name}
              </div>
              <div className="text-sm text-slate-500 font-medium mt-1">
                {testimonial.role} en {testimonial.company}
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-slate-600 font-body text-sm md:text-base">
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
