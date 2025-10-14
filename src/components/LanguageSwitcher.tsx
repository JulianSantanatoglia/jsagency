import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2"
      aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      {language === 'es' ? (
        // Bandera de Estados Unidos cuando está en español
        <div className="flex items-center gap-1">
          <div className="w-6 h-4 rounded-sm overflow-hidden border border-gray-200 shadow-sm">
            <div className="w-full h-full bg-gradient-to-b from-red-500 via-white to-blue-600 relative">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-red-500"></div>
              <div className="absolute top-1/2 left-0 w-full h-1/2 bg-white"></div>
              <div className="absolute top-0 left-0 w-1/3 h-full bg-blue-600"></div>
            </div>
          </div>
          <span className="text-xs font-medium text-slate-600">EN</span>
        </div>
      ) : (
        // Bandera de España cuando está en inglés
        <div className="flex items-center gap-1">
          <div className="w-6 h-4 rounded-sm overflow-hidden border border-gray-200 shadow-sm">
            <div className="w-full h-full bg-gradient-to-b from-red-500 via-yellow-500 to-red-500 relative">
              <div className="absolute top-0 left-0 w-full h-1/3 bg-red-500"></div>
              <div className="absolute top-1/3 left-0 w-full h-1/3 bg-yellow-500"></div>
              <div className="absolute top-2/3 left-0 w-full h-1/3 bg-red-500"></div>
            </div>
          </div>
          <span className="text-xs font-medium text-slate-600">ES</span>
        </div>
      )}
    </button>
  );
};

export default LanguageSwitcher;
