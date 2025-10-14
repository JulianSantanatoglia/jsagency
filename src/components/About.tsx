import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const team = [
    {
      role: t('about.team.development.role'),
      name: t('about.team.development.name'),
      description: t('about.team.development.description')
    },
    {
      role: t('about.team.design.role'),
      name: t('about.team.design.name'),
      description: t('about.team.design.description')
    },
    {
      role: t('about.team.strategy.role'),
      name: t('about.team.strategy.name'),
      description: t('about.team.strategy.description')
    },
    {
      role: t('about.team.aerial.role'),
      name: t('about.team.aerial.name'),
      description: t('about.team.aerial.description')
    }
  ];

  return (
    <section id="nosotros" className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl font-extrabold font-display mb-8 text-primary-dark">
            {t('about.title')}
          </h2>
          <div className="max-w-4xl text-lg text-slate-800 leading-relaxed space-y-5 font-body">
            <p>
              {t('about.content.paragraph1').replace('.js agency', '').trim()}
              <strong className="text-primary-dark font-semibold">.js agency</strong>
              {t('about.content.paragraph1').split('.js agency')[1]}
            </p>
            <p>
              {t('about.content.paragraph2')}
            </p>
            <p className="text-accent-cyan font-semibold text-xl mt-2">
              {t('about.content.paragraph3')}
            </p>
          </div>
        </div>
        <div className="pt-12 border-t border-slate-200">
          <h3 className="text-3xl font-bold font-display mb-10 text-primary-dark">
            {t('about.content.teamTitle')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover-lift hover:border-accent-cyan hover:shadow-accent-cyan/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-accent-cyan mb-2 font-body">
                  {member.role}
                </div>
                <div className="text-xl font-bold text-primary-dark mb-3 font-display">
                  {member.name}
                </div>
                <div className="text-sm text-slate-600 leading-relaxed font-body">
                  {member.description}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16 pt-12 border-t border-slate-200">
          <p className="text-xl text-slate-600 mb-6 font-body">
            {t('about.content.cta')}
          </p>
          <a 
            href="#contacto" 
            className="inline-block px-8 py-4 bg-accent-cyan text-white font-semibold text-lg rounded-xl hover-lift shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 font-body"
          >
            {t('about.content.ctaButton')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

