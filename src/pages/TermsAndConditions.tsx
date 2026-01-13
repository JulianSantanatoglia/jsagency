import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TermsAndConditions = () => {
  const { t, getTranslation } = useLanguage();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 pt-28 pb-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-accent-cyan hover:text-cyan-600 mb-8 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 rounded-lg px-2 py-1 transition-colors"
        >
          <ArrowLeft size={20} />
          {t('legal.backToHome')}
        </Link>
        
        <div className="flex items-center gap-3 mb-8">
          <FileText size={32} className="text-accent-cyan" />
          <h1 className="text-3xl md:text-4xl font-bold font-display text-primary-dark dark:text-white">
            {t('legal.terms')}
          </h1>
        </div>
        
        <div className="prose prose-lg max-w-none font-body text-slate-700 dark:text-slate-300">
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">
            {t('legal.lastUpdated')}
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-display text-primary-dark dark:text-white mb-4">{t('legal.termsContent.section1.title')}</h2>
            <p>
              {t('legal.termsContent.section1.p1')}
            </p>
            <p>
              {t('legal.termsContent.section1.p2')}
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-display text-primary-dark dark:text-white mb-4">{t('legal.termsContent.section2.title')}</h2>
            <p>
              {t('legal.termsContent.section2.p1')}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              {getTranslation('legal.termsContent.section2.items').map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-display text-primary-dark dark:text-white mb-4">{t('legal.termsContent.section3.title')}</h2>
            <p>
              {t('legal.termsContent.section3.p1')}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              {getTranslation('legal.termsContent.section3.items').map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-display text-primary-dark dark:text-white mb-4">{t('legal.termsContent.section4.title')}</h2>
            <p>
              {t('legal.termsContent.section4.p1')}
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-display text-primary-dark dark:text-white mb-4">{t('legal.termsContent.section5.title')}</h2>
            <p>
              {t('legal.termsContent.section5.p1')}
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-display text-primary-dark dark:text-white mb-4">{t('legal.termsContent.section6.title')}</h2>
            <p>
              {t('legal.termsContent.section6.p1')}
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-display text-primary-dark dark:text-white mb-4">{t('legal.termsContent.section7.title')}</h2>
            <p>
              {t('legal.termsContent.section7.p1')}
            </p>
            <p>
              {t('legal.termsContent.section7.email')}<br />
              {t('legal.termsContent.section7.location')}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
