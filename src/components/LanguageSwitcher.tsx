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
        <img 
          src="/uk.png?v=1" 
          alt="English" 
          className="w-6 h-4 object-cover rounded-sm"
        />
      ) : (
        // Bandera de España cuando está en inglés
        <img 
          src="/spa.png?v=1" 
          alt="Español" 
          className="w-6 h-4 object-cover rounded-sm"
        />
      )}
    </button>
  );
};

export default LanguageSwitcher;
