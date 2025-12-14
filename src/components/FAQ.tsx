import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe, Bot } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import PatternBackground from './PatternBackground';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  title: string;
  icon: typeof Globe;
  color: string;
  gradient: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  questions: FAQItem[];
}

const FAQ = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('webdev');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories: FAQCategory[] = [
    {
      id: 'webdev',
      title: t('faq.webdev.title'),
      icon: Globe,
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-600',
      questions: [
        {
          question: t('faq.webdev.questions.0.question'),
          answer: t('faq.webdev.questions.0.answer')
        },
        {
          question: t('faq.webdev.questions.1.question'),
          answer: t('faq.webdev.questions.1.answer')
        },
        {
          question: t('faq.webdev.questions.2.question'),
          answer: t('faq.webdev.questions.2.answer')
        },
        {
          question: t('faq.webdev.questions.3.question'),
          answer: t('faq.webdev.questions.3.answer')
        }
      ]
    },
    {
      id: 'ai',
      title: t('faq.ai.title'),
      icon: Bot,
      color: 'emerald',
      gradient: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      textColor: 'text-emerald-600',
      questions: [
        {
          question: t('faq.ai.questions.0.question'),
          answer: t('faq.ai.questions.0.answer')
        },
        {
          question: t('faq.ai.questions.1.question'),
          answer: t('faq.ai.questions.1.answer')
        },
        {
          question: t('faq.ai.questions.2.question'),
          answer: t('faq.ai.questions.2.answer')
        },
        {
          question: t('faq.ai.questions.3.question'),
          answer: t('faq.ai.questions.3.answer')
        }
      ]
    }
  ];

  const activeCategory = faqCategories.find(cat => cat.id === activeTab);

  return (
    <section id="faq" className="relative py-24 md:py-32 px-4 md:px-8">
      <PatternBackground opacity={0.04} />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark dark:text-white mb-6 font-display tracking-tight">
              {t('faq.title').replace(t('faq.titleHighlight'), '').trim()} <span className="text-accent-cyan">{t('faq.titleHighlight')}</span>
            </h2>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-body font-light">
            {t('faq.subtitle')}
          </p>
          </div>
        </ScrollReveal>

        {/* FAQ Tabs - Diseño moderno */}
        <ScrollReveal direction="up" delay={100}>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 md:mb-16 max-w-2xl mx-auto justify-center">
          {faqCategories.map((category) => {
            const isActive = activeTab === category.id;
            const IconComponent = category.icon;
            
            return (
              <button
                key={category.id}
                onClick={() => {
                  setActiveTab(category.id);
                  setOpenItems([]);
                }}
                className={`group relative flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 font-semibold overflow-hidden ${
                  isActive
                    ? `bg-gradient-to-r ${category.gradient} text-white shadow-xl shadow-${category.color}-500/30 scale-105`
                    : 'bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-2 border-slate-200/60 dark:border-slate-700/60 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:border-accent-cyan/40 hover:scale-105'
                }`}
              >
                <IconComponent size={22} className={isActive ? 'text-white' : ''} />
                <span className="text-sm md:text-base">{category.title}</span>
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                )}
              </button>
            );
          })}
          </div>
        </ScrollReveal>

        {/* Active Category Questions - Diseño creativo */}
        {activeCategory && (
          <ScrollReveal direction="up" delay={200}>
          <div className="space-y-4 max-w-4xl mx-auto">
            {activeCategory.questions.map((item, index) => {
              const isOpen = openItems.includes(index);
              return (
                <div 
                  key={index}
                  className={`group relative bg-gradient-to-br from-white/90 via-white/70 to-white/50 dark:from-slate-800/90 dark:via-slate-800/70 dark:to-slate-800/50 backdrop-blur-sm rounded-2xl border-2 ${
                    isOpen 
                      ? `border-${activeCategory.color}-300/60 dark:border-${activeCategory.color}-400/60 shadow-xl shadow-${activeCategory.color}-500/20`
                      : 'border-slate-200/60 dark:border-slate-700/60 shadow-lg shadow-slate-200/20 dark:shadow-slate-900/20'
                  } overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1`}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 md:px-8 py-6 text-left flex justify-between items-start gap-4 hover:bg-gradient-to-r hover:from-white/50 hover:to-transparent dark:hover:from-slate-700/50 transition-all focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center font-bold text-sm mt-1 text-slate-500 dark:text-slate-400">
                          {index + 1}
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-primary-dark dark:text-white font-body pr-4 leading-tight">
                          {item.question}
                        </h3>
                      </div>
                    </div>
                    <div className="flex-shrink-0 mt-1">
                      <div className={`w-10 h-10 flex items-center justify-center transition-transform duration-300 text-slate-600 dark:text-slate-400 ${
                        isOpen ? 'rotate-180' : ''
                      }`}>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  
                  <div
                    id={`faq-answer-${index}`}
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 md:px-8 pb-6 pt-2">
                      <div className="ml-12 pl-4 border-l-2 border-slate-200/60 dark:border-slate-700/60">
                        <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-body">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
};

export default FAQ;
