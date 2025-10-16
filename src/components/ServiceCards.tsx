import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ServiceCards = () => {
  const { t } = useLanguage();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const services = [
    {
      key: 'webdev',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50/80',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-700',
      shadowColor: 'shadow-blue-100/50',
      hoverBg: 'hover:bg-blue-50'
    },
    {
      key: 'design',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50/80',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-700',
      shadowColor: 'shadow-purple-100/50',
      hoverBg: 'hover:bg-purple-50'
    },
    {
      key: 'ai',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: 'emerald',
      gradient: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50/80',
      borderColor: 'border-emerald-200',
      textColor: 'text-emerald-700',
      shadowColor: 'shadow-emerald-100/50',
      hoverBg: 'hover:bg-emerald-50'
    },
    {
      key: 'aerial',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'orange',
      gradient: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50/80',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-700',
      shadowColor: 'shadow-orange-100/50',
      hoverBg: 'hover:bg-orange-50'
    }
  ];

  const handleCardClick = (serviceKey: string) => {
    setExpandedCard(expandedCard === serviceKey ? null : serviceKey);
  };

  return (
    <div className="space-y-1.5 md:space-y-2 h-full flex flex-col">
      {services.map((service, index) => {
        const isExpanded = expandedCard === service.key;
        
        return (
          <div
            key={service.key}
            className={`relative transition-all duration-300 ease-in-out ${
              isExpanded ? 'flex-grow' : ''
            }`}
            style={{
              animationDelay: `${index * 50}ms`
            }}
          >
            {/* Card */}
            <button
              onClick={() => handleCardClick(service.key)}
              className={`group w-full text-left transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg md:rounded-xl overflow-hidden ${
                isExpanded 
                  ? `${service.bgColor} border ${service.borderColor} shadow-lg ${service.shadowColor} focus:ring-${service.color}-500` 
                  : `bg-white/70 backdrop-blur-sm border border-gray-100 hover:bg-white hover:shadow-md hover:shadow-gray-100/50 hover:border-gray-200 focus:ring-gray-500 ${service.hoverBg}`
              }`}
              aria-expanded={isExpanded}
              aria-controls={`service-${service.key}-content`}
            >
              <div className="p-3 md:p-4">
                {/* Header with icon, title and chevron */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5 md:space-x-3">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white shadow-sm transition-all duration-300 ${
                      isExpanded ? 'scale-110 shadow-md' : 'group-hover:scale-105'
                    }`}>
                      {service.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className={`font-semibold text-xs md:text-sm lg:text-base transition-all duration-300 ${
                      isExpanded ? `${service.textColor} transform translate-x-0` : 'text-gray-700 group-hover:text-gray-900'
                    }`}>
                      {t(`hero.services.${service.key}.title`)}
                    </h3>
                  </div>
                  
                  {/* Chevron */}
                  <div className={`flex-shrink-0 transition-all duration-300 ease-in-out ${
                    isExpanded ? 'rotate-180 scale-110' : 'rotate-0 group-hover:scale-110'
                  }`}>
                    <ChevronDown className={`w-4 h-4 md:w-5 md:h-5 transition-colors duration-300 ${
                      isExpanded ? service.textColor : 'text-gray-400 group-hover:text-gray-600'
                    }`} />
                  </div>
                </div>

                {/* Expandable content */}
                <div 
                  id={`service-${service.key}-content`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded 
                      ? 'max-h-48 md:max-h-56 opacity-100 mt-3 md:mt-4 transform translate-y-0' 
                      : 'max-h-0 opacity-0 transform -translate-y-2'
                  }`}
                >
                  <div className={`border-t ${service.borderColor} pt-3 md:pt-4 space-y-2`}>
                    <p className={`text-xs md:text-sm leading-relaxed ${service.textColor} font-medium transition-all duration-300`}>
                      {t(`hero.services.${service.key}.description`)}
                    </p>
                    
                    {/* Accent line with animation */}
                    <div className={`h-0.5 w-0 bg-gradient-to-r ${service.gradient} rounded-full transition-all duration-500 ease-out ${
                      isExpanded ? 'w-8 md:w-12' : 'w-0'
                    }`}></div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceCards;
