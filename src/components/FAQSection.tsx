import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe, Video, Camera, Bot } from 'lucide-react';

interface FAQSectionProps {
  serviceId: 'webdev' | 'design' | 'aerial' | 'ai';
  darkMode?: boolean;
}

const FAQSection = ({ serviceId, darkMode = false }: FAQSectionProps) => {
  const { t } = useLanguage();
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = {
    webdev: {
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
    design: {
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
    aerial: {
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
    ai: {
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
  };

  const activeCategory = faqCategories[serviceId];

  return (
    <div className="w-full">
      {/* Questions */}
      {activeCategory && (
        <div className="space-y-3">
          {activeCategory.questions.map((item, index) => (
            <div 
              key={index}
              className={`${
                darkMode 
                  ? 'bg-slate-800/30 border border-slate-700/50' 
                  : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
              } rounded-lg shadow-sm overflow-hidden`}
            >
              <button
                onClick={() => toggleItem(index)}
                className={`w-full px-4 py-4 text-left flex justify-between items-center transition-colors focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 ${
                  darkMode 
                    ? 'hover:bg-slate-800/50 focus:ring-offset-slate-900' 
                    : 'hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-offset-white dark:focus:ring-offset-gray-800'
                }`}
                aria-expanded={openItems.includes(index)}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className={`text-base font-semibold font-body pr-4 ${
                  darkMode ? 'text-white' : 'text-gray-900 dark:text-white'
                }`}>
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
                <div className="px-4 pt-3 pb-4">
                  <p className={`leading-relaxed font-body ${
                    darkMode ? 'text-slate-300' : 'text-gray-600 dark:text-gray-300'
                  }`}>
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FAQSection;

