import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe, Video, Camera, Bot } from 'lucide-react';

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
      id: 'design',
      title: t('faq.design.title'),
      icon: Video,
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-600',
      questions: [
        {
          question: t('faq.design.questions.0.question'),
          answer: t('faq.design.questions.0.answer')
        },
        {
          question: t('faq.design.questions.1.question'),
          answer: t('faq.design.questions.1.answer')
        },
        {
          question: t('faq.design.questions.2.question'),
          answer: t('faq.design.questions.2.answer')
        },
        {
          question: t('faq.design.questions.3.question'),
          answer: t('faq.design.questions.3.answer')
        }
      ]
    },
    {
      id: 'aerial',
      title: t('faq.aerial.title'),
      icon: Camera,
      color: 'orange',
      gradient: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-600',
      questions: [
        {
          question: t('faq.aerial.questions.0.question'),
          answer: t('faq.aerial.questions.0.answer')
        },
        {
          question: t('faq.aerial.questions.1.question'),
          answer: t('faq.aerial.questions.1.answer')
        },
        {
          question: t('faq.aerial.questions.2.question'),
          answer: t('faq.aerial.questions.2.answer')
        },
        {
          question: t('faq.aerial.questions.3.question'),
          answer: t('faq.aerial.questions.3.answer')
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
    <section id="faq" className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-display">
            {t('faq.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-body">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* FAQ Tabs */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-8 md:mb-12 max-w-4xl mx-auto">
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
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                  isActive
                    ? `${category.bgColor} ${category.borderColor} border-2 ${category.textColor} shadow-md`
                    : 'bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-600 hover:bg-white hover:border-gray-300'
                }`}
              >
                <IconComponent size={20} />
                <span className="text-sm md:text-base">{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Questions */}
        {activeCategory && (
          <div className="space-y-4 max-w-4xl mx-auto">
            {activeCategory.questions.map((item, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
                  aria-expanded={openItems.includes(index)}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-body pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-5 h-5 ${activeCategory.textColor} transition-transform duration-200 ${
                        openItems.includes(index) ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pt-4 pb-5">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-body">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-6 font-body">
            {t('faq.cta')}
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center px-8 py-4 bg-accent-cyan text-white font-semibold rounded-lg hover:bg-accent-cyan/90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900 font-body"
          >
            {t('faq.ctaButton')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
