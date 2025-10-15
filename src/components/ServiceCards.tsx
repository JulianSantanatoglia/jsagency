import { useLanguage } from '../contexts/LanguageContext';

const ServiceCards = () => {
  const { t } = useLanguage();

  const services = [
    {
      key: 'webdev',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: 'from-blue-600 via-cyan-500 to-blue-400',
      bgGradient: 'from-blue-50 to-cyan-50',
      accent: 'blue'
    },
    {
      key: 'design',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      gradient: 'from-purple-600 via-pink-500 to-purple-400',
      bgGradient: 'from-purple-50 to-pink-50',
      accent: 'purple'
    },
    {
      key: 'ai',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: 'from-emerald-600 via-teal-500 to-emerald-400',
      bgGradient: 'from-emerald-50 to-teal-50',
      accent: 'emerald'
    },
    {
      key: 'aerial',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: 'from-orange-600 via-red-500 to-orange-400',
      bgGradient: 'from-orange-50 to-red-50',
      accent: 'orange'
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-3 h-full">
      {services.map((service, index) => (
        <div
          key={service.key}
          className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:duration-300"
          style={{
            animationDelay: `${index * 150}ms`
          }}
        >
          {/* Main card */}
          <div className="relative h-full bg-white/90 backdrop-blur-xl border border-gray-200/60 rounded-3xl p-5 transition-all duration-500 group-hover:bg-white/95 group-hover:border-gray-300/80 group-hover:shadow-2xl group-hover:shadow-gray-200/50 group-hover:-translate-y-2">
            
            {/* Animated background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
            
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className={`absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br ${service.gradient} rounded-full opacity-0 group-hover:opacity-20 transition-all duration-700 group-hover:scale-150 group-hover:rotate-180`}></div>
              <div className={`absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br ${service.gradient} rounded-full opacity-0 group-hover:opacity-15 transition-all duration-1000 group-hover:scale-125 group-hover:-rotate-90`}></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col">
              {/* Icon container */}
              <div className="relative mb-4">
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${service.gradient} text-white rounded-2xl shadow-lg shadow-${service.accent}-500/25 group-hover:shadow-xl group-hover:shadow-${service.accent}-500/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  {service.icon}
                </div>
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}></div>
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 font-display group-hover:text-gray-800 transition-colors duration-300 leading-tight">
                {t(`hero.services.${service.key}.title`)}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed font-body group-hover:text-gray-700 transition-colors duration-300 flex-grow">
                {t(`hero.services.${service.key}.description`)}
              </p>
              
              {/* Bottom accent line */}
              <div className={`mt-4 h-0.5 bg-gradient-to-r ${service.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left`}></div>
            </div>
            
            {/* Corner accent */}
            <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-3xl`}></div>
          </div>
          
          {/* Outer glow on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 -z-10`}></div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
