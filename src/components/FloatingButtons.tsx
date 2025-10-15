import { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FloatingButtons = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  // WhatsApp message based on language
  const whatsappMessage = language === 'es' 
    ? '¡Hola! Quiero hacer una consulta sobre sus servicios'
    : 'Hello! I would like to make an inquiry about your services';

  // WhatsApp number (you can change this to your actual WhatsApp number)
  const whatsappNumber = '+34695547905'; // Replace with your actual WhatsApp number
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  // Show scroll to top button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
        aria-label={language === 'es' ? 'Contactar por WhatsApp' : 'Contact via WhatsApp'}
        title={language === 'es' ? 'Contactar por WhatsApp' : 'Contact via WhatsApp'}
      >
        <MessageCircle className="w-6 h-6" />
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
      </a>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-slate-700 hover:bg-slate-800 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-slate-400"
          aria-label={language === 'es' ? 'Ir arriba' : 'Go to top'}
          title={language === 'es' ? 'Ir arriba' : 'Go to top'}
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default FloatingButtons;
