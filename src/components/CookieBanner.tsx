import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4 md:p-6"
      role="banner"
      aria-labelledby="cookie-banner-title"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex items-start gap-3 flex-1">
          <Cookie size={24} className="text-accent-cyan mt-1 flex-shrink-0" aria-hidden="true" />
          <div>
            <h3 id="cookie-banner-title" className="font-semibold text-slate-900 mb-1 font-display">
              {t('cookies.title')}
            </h3>
            <p className="text-sm text-slate-600 font-body">
              {t('cookies.message')} 
              <Link 
                to="/legal/cookies" 
                className="text-accent-cyan hover:text-cyan-600 underline focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 rounded"
              >
                {t('cookies.moreInfo')}
              </Link>
            </p>
          </div>
        </div>
        
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={rejectCookies}
            className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 rounded-lg transition-colors"
          >
            {t('cookies.reject')}
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 bg-accent-cyan text-white text-sm font-medium rounded-lg hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 transition-colors"
          >
            {t('cookies.accept')}
          </button>
        </div>
        
        <button
          onClick={rejectCookies}
          className="absolute top-2 right-2 p-1 text-slate-400 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 rounded"
          aria-label={t('a11y.cookieBanner')}
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
