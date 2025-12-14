import { useRef, useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visibleText, setVisibleText] = useState(0);

  const animatedTexts = [
    { text: t('hero.animatedTexts.text1'), highlight: t('hero.animatedTexts.highlight1') },
    { text: t('hero.animatedTexts.text2'), highlight: t('hero.animatedTexts.highlight2') },
    { text: t('hero.animatedTexts.text3'), highlight: t('hero.animatedTexts.highlight3') }
  ];

  useEffect(() => {
    // Asegurar que el video se reproduzca automáticamente
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Autoplay prevented:', error);
      });
    }
  }, []);

  useEffect(() => {
    // Animación secuencial de textos
    const interval = setInterval(() => {
      setVisibleText((prev) => (prev + 1) % animatedTexts.length);
    }, 2500); // Cambia cada 2.5 segundos

    return () => clearInterval(interval);
  }, [animatedTexts.length]);

  const handleButtonClick = () => {
    // Scroll suave hacia la sección de Quiénes somos
    const nosotrosSection = document.getElementById('nosotros');
    if (nosotrosSection) {
      nosotrosSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollDown = () => {
    const serviciosSection = document.getElementById('servicios');
    if (serviciosSection) {
      serviciosSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Skip to main content link for screen readers */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent-cyan text-white px-4 py-2 rounded-lg font-semibold z-50 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2"
      >
        {t('a11y.skipToContent')}
      </a>
      
      <section 
        id="home" 
        className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
        role="banner"
        aria-labelledby="hero-title"
      >
        {/* Video de fondo */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 blur-[2px]"
          aria-label="Video de introducción"
        >
          <source src="/videos/intro.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>

        {/* Overlay oscuro para mejorar legibilidad */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Contenido centrado */}
        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen w-full">
          {/* Textos animados */}
          <div className="mb-12 md:mb-16 h-20 md:h-24 flex items-center justify-center">
            {animatedTexts.map((item, index) => (
              <div
                key={index}
                className={`absolute text-center transition-all duration-700 ease-in-out ${
                  visibleText === index
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: visibleText === index ? '200ms' : '0ms'
                }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium font-display text-white tracking-wider drop-shadow-lg">
                  {item.text} <span className="text-accent-cyan font-bold">{item.highlight}</span>
                </h2>
              </div>
            ))}
          </div>

          {/* Botón */}
          <div className="mt-8 md:mt-10">
            <button
              onClick={handleButtonClick}
              className="px-8 py-3 bg-white/15 backdrop-blur-lg text-white font-semibold text-base rounded-xl hover:bg-white/25 transition-all duration-300 shadow-xl shadow-white/20 hover:shadow-2xl hover:shadow-white/30 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-transparent border-2 border-accent-cyan/60 hover:border-accent-cyan hover:scale-105 cursor-pointer"
              aria-label="Ir a Quiénes somos"
            >
              {t('hero.helloButton')}
            </button>
          </div>
        </div>

        {/* Flecha hacia abajo */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <button
            onClick={handleScrollDown}
            className="text-white/80 hover:text-white transition-all duration-300 animate-bounce focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-2"
            aria-label="Desplazar hacia abajo"
          >
            <ChevronDown size={32} />
          </button>
        </div>

        {/* Ondulación inferior para transición suave */}
        <div className="absolute bottom-0 left-0 w-full z-10" style={{ transform: 'translateY(1px)' }}>
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-auto"
          >
            <path
              d="M0,60 C240,20 480,100 720,60 C960,20 1200,100 1440,60 L1440,120 L0,120 Z"
              fill="#FAF9F7"
              className="dark:fill-slate-900 transition-colors duration-300"
            />
            <path
              d="M0,60 C360,0 720,120 1440,60"
              stroke="#FAF9F7"
              className="dark:stroke-slate-900 transition-colors duration-300"
              strokeWidth="0.5"
              opacity="0.15"
            />
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;

