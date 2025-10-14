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
          <span className="fi fi-us text-xl"></span>
          <span className="text-xs font-medium text-slate-600">EN</span>
        </div>
      ) : (
        // Bandera de España cuando está en inglés
        <div className="flex items-center gap-1">
          <span className="fi fi-es text-xl"></span>
          <span className="text-xs font-medium text-slate-600">ES</span>
        </div>
      )}
    </button>
  );
};

export default LanguageSwitcher;
