import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const { t } = useLanguage();
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData: FAQItem[] = [
    {
      question: t('faq.question1'),
      answer: t('faq.answer1')
    },
    {
      question: t('faq.question2'),
      answer: t('faq.answer2')
    },
    {
      question: t('faq.question3'),
      answer: t('faq.answer3')
    },
    {
      question: t('faq.question4'),
      answer: t('faq.answer4')
    },
    {
      question: t('faq.question5'),
      answer: t('faq.answer5')
    },
    {
      question: t('faq.question6'),
      answer: t('faq.answer6')
    }
  ];

  return (
    <section id="faq" className="py-20 px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-display">
            {t('faq.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-body">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
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
                    className={`w-5 h-5 text-accent-cyan transition-transform duration-200 ${
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
