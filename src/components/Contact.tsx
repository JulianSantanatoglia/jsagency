import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contacto" className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-primary-dark to-slate-800 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="flex flex-col gap-4 md:gap-6 animate-fade-in-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-white mb-2">
            {t('contact.title')}
          </h2>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed font-body">
            {t('contact.subtitle')}
          </p>
          <p className="text-sm md:text-base text-accent-cyan font-semibold font-body">
            {t('contact.response')}
          </p>
          <a 
            href="mailto:hola@jsagency.com" 
            className="inline-block w-fit px-6 md:px-8 py-3 md:py-4 mt-4 bg-accent-cyan text-white font-semibold text-base md:text-lg rounded-xl hover-lift shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 font-body"
          >
            {t('contact.cta')}
          </a>
        </div>
        <div className="flex flex-col gap-6 md:gap-10 animate-fade-in-right mt-8 md:mt-0">
          <div className="pb-8 border-b border-white/10">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent-cyan mb-2 font-body">
              {t('contact.email')}
            </div>
            <div className="text-xl font-semibold text-white font-display">
              hola@jsagency.com
            </div>
          </div>
          <div className="pb-8 border-b border-white/10">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent-cyan mb-2 font-body">
              {t('contact.location')}
            </div>
            <div className="text-xl font-semibold text-white font-display">
              {t('contact.locationValue')}
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-accent-cyan mb-2 font-body">
              {t('contact.schedule')}
            </div>
            <div className="text-xl font-semibold text-white font-display">
              {t('contact.scheduleValue')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

