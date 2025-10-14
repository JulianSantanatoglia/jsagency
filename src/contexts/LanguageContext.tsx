import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traducciones
const translations = {
  es: {
    // Navigation
    nav: {
      home: 'Home',
      services: 'Servicios',
      portfolio: 'Portfolio',
      about: 'Nosotros',
      contact: 'Contacto',
    },
    
    // Hero Section
    hero: {
      title: 'Soluciones digitales con otra perspectiva.',
      subtitle: 'En .js agency combinamos diseño, tecnología y estrategia para crear webs y sistemas que funcionan de verdad.',
      cta: 'Consultar Proyecto',
      feature1: 'Equipo multidisciplinario',
      feature2: 'Procesos claros',
      feature3: 'Entregas a tiempo',
    },
    
    // Services Section
    services: {
      title: 'Servicios',
      subtitle: 'Desarrollo web, diseño y branding, automatizaciones con IA y contenido aéreo. Cuatro líneas de trabajo integradas para que tu marca se vea mejor, funcione mejor y venda mejor.',
      webdev: {
        title: 'Desarrollo Web',
        description: 'Landing pages, webs corporativas y tiendas online.',
        feature1: 'Rápidas, seguras, administrables y pensadas para convertir.',
        feature2: 'SEO técnico base y buenas prácticas de performance.',
      },
      design: {
        title: 'Diseño & Branding',
        description: 'Identidad visual completa y diseño profesional.',
        feature1: 'Logo, paleta de colores, tipografías y guía de estilo.',
        feature2: 'Diseño de materiales gráficos y experiencia de usuario.',
      },
      ai: {
        title: 'Automatizaciones IA',
        description: 'Agentes inteligentes y flujos de trabajo automatizados.',
        feature1: 'Chatbots conversacionales y asistentes virtuales.',
        feature2: 'Automatización de procesos y integración de herramientas.',
      },
      aerial: {
        title: 'Fotografía y Video aéreo',
        description: 'Para marcas, inmuebles, turismo y eventos.',
        feature1: 'Contenido visual que eleva tu presencia digital y tus campañas.',
        feature2: 'Operación certificada A1/A3 y registro de operador.',
      },
    },
    
    // Portfolio Section
    portfolio: {
      title: 'Portfolio de Proyectos',
      subtitle: 'Cada proyecto es una historia única. Desde landing pages hasta aplicaciones completas, aquí podés ver el alcance de nuestro trabajo.',
      featured: 'Proyectos Destacados',
      all: 'Todos los Proyectos',
      cta: 'Empezá tu proyecto →',
      seeProject: 'Ver proyecto →',
      like: '¿Te gusta lo que ves? Trabajemos juntos en tu próximo proyecto.',
      projects: {
        smartCard: {
          title: 'Smart Card by .js agency',
          category: 'Aplicación Web',
          description: 'Carta digital inteligente con divisor para comensales, diseñada específicamente para establecimientos gastronómicos. Interfaz intuitiva y moderna que mejora la experiencia del cliente.'
        },
        mushroom: {
          title: 'Mushroom MDP',
          category: 'Plataforma Empresarial',
          description: 'Plataforma completa para empresa de alquiler de equipos de sonido profesional y cabinas para DJ. Sistema de gestión de inventario y reservas online para eventos musicales.'
        },
        designStudio: {
          title: 'DesignStudio Portfolio',
          category: 'Portfolio Creativo',
          description: 'Portfolio interactivo para estudio de diseño con galería dinámica y animaciones personalizadas.'
        },
        innovateLab: {
          title: 'InnovateLab Dashboard',
          category: 'Dashboard Admin',
          description: 'Panel de administración completo con gráficos interactivos, gestión de usuarios y reportes en tiempo real.'
        },
        restaurantApp: {
          title: 'RestaurantApp Mobile',
          category: 'App Móvil',
          description: 'Aplicación móvil para restaurante con menú digital, reservas online y sistema de pedidos.'
        },
        brandIdentity: {
          title: 'BrandIdentity Package',
          category: 'Branding',
          description: 'Identidad visual completa incluyendo logo, colores, tipografías y guía de estilo corporativa.'
        }
      }
    },
    
    // Testimonials Section
    testimonials: {
      title: 'Lo que dicen nuestros clientes',
      subtitle: 'La satisfacción de nuestros clientes es nuestra mejor carta de presentación.',
      testimonials: {
        sofia: {
          name: 'Sofia Martínez',
          company: 'Dueña de bar',
          role: 'Propietaria',
          content: 'Smart card digitalizó mi negocio y lo hizo crecer. La carta digital es intuitiva, elegante y ha mejorado significativamente el servicio. Los comensales pueden dividir la cuenta con facilidad y pagar por lo que consumieron'
        },
        maximiliano: {
          name: 'Maximiliano Peretti',
          company: 'CEO Mushroom MDP',
          role: 'Fundador',
          content: 'La plataforma desarrollada por .js agency nos permitió profesionalizar completamente nuestro negocio de alquiler de equipos. El sistema de reservas online y gestión de inventario ha sido un cambio total.'
        },
        ana: {
          name: 'Ana Martín',
          company: 'DesignStudio',
          role: 'Directora Creativa',
          content: 'La calidad del código y la atención al detalle de .js agency es impresionante. Nuestro proyecto se entregó a tiempo y superó todas nuestras expectativas.'
        },
        david: {
          name: 'David López',
          company: 'InnovateLab',
          role: 'CTO',
          content: 'Como desarrollador, aprecio mucho el nivel técnico de .js agency. Su arquitectura escalable y código limpio nos facilitó mucho el mantenimiento.'
        }
      }
    },
    
    // Process Section
    process: {
      title: 'Nuestro proceso de trabajo',
      subtitle: 'Un enfoque estructurado que garantiza resultados de calidad y entregas a tiempo.',
      steps: {
        discovery: {
          number: '01',
          title: 'Descubrimiento',
          description: 'Brief rápido y objetivos claros.'
        },
        design: {
          number: '02',
          title: 'Diseño & Arquitectura',
          description: 'Wireframes, look & feel y estructura técnica.'
        },
        development: {
          number: '03',
          title: 'Desarrollo',
          description: 'Código limpio, integraciones y contenido.'
        },
        launch: {
          number: '04',
          title: 'Lanzamiento',
          description: 'Pruebas, SEO técnico base y publicación.'
        },
        support: {
          number: '05',
          title: 'Acompañamiento',
          description: 'Soporte y evolución continua.'
        }
      }
    },
    
    // About Section
    about: {
      title: 'Sobre nosotros',
      subtitle: 'Somos un equipo multidisciplinario especializado en soluciones digitales integrales.',
      description: 'En .js agency combinamos experiencia técnica, creatividad y estrategia para crear proyectos que realmente funcionan. Nuestro enfoque se basa en entender las necesidades específicas de cada cliente y desarrollar soluciones a medida.',
      content: {
        paragraph1: 'Somos .js agency, un estudio digital que combina diseño, tecnología y estrategia para crear soluciones honestas, modernas y funcionales.',
        paragraph2: 'Trabajamos en equipo, con procesos claros y foco en el detalle, para que cada proyecto sea sólido hoy y escalable mañana.',
        paragraph3: 'Si buscás alguien de confianza para llevar tu marca al siguiente nivel, hablemos.',
        teamTitle: 'Nuestro equipo',
        cta: '¿Querés ser el próximo cliente satisfecho?',
        ctaButton: 'Hablemos de tu proyecto →'
      },
      team: {
        development: {
          role: 'Dirección & Desarrollo',
          name: 'Equipo de desarrollo',
          description: 'Supervisión integral y arquitectura web.'
        },
        design: {
          role: 'Diseño & Branding',
          name: 'Equipo creativo',
          description: 'Identidad visual, UI y dirección de arte.'
        },
        strategy: {
          role: 'Estrategia & Automatización',
          name: 'Especialistas',
          description: 'Flujos con IA e integraciones.'
        },
        aerial: {
          role: 'Producción (.js Aerials)',
          name: 'Equipo audiovisual',
          description: 'Fotografía y video aéreo para marcas.'
        }
      }
    },
    
    // Contact Section
    contact: {
      title: 'Hablemos de tu proyecto',
      subtitle: 'Contanos tu objetivo en 2–3 líneas y te proponemos el mejor camino.',
      response: 'Respuesta en 24–48h.',
      cta: 'Escribenos →',
      email: 'Email',
      location: 'Ubicación',
      schedule: 'Horario',
      scheduleValue: 'Lun–Vie 9:00–18:00',
      locationValue: 'Almeria, España',
    },
    
    // Footer
    footer: {
      description: 'Soluciones digitales con otra perspectiva.',
      services: 'Servicios',
      company: 'Empresa',
      about: 'Sobre nosotros',
      process: 'Proceso',
      testimonials: 'Testimonios',
      copyright: 'Todos los derechos reservados.',
    },
    
    // Legal
    legal: {
      terms: 'Términos y Condiciones',
      privacy: 'Política de Privacidad',
      cookies: 'Política de Cookies',
    },
    
    // Cookie Banner
    cookies: {
      title: 'Uso de Cookies',
      message: 'Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Al continuar navegando, acepta nuestro uso de cookies.',
      moreInfo: 'Más información',
      reject: 'Rechazar',
      accept: 'Aceptar',
    },
    
    // Accessibility
    a11y: {
      skipToContent: 'Saltar al contenido principal',
      toggleMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      mainNavigation: 'Navegación principal',
      mobileNavigation: 'Navegación móvil',
      servicesList: 'Lista de servicios',
      serviceFeatures: 'Características de {service}',
      legalLinks: 'Enlaces legales',
      contactCTA: 'Ir a la sección de contacto para consultar sobre tu proyecto',
      highlightedFeatures: 'Características destacadas',
      cookieBanner: 'Cerrar banner de cookies',
    },
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      services: 'Services',
      portfolio: 'Portfolio',
      about: 'About',
      contact: 'Contact',
    },
    
    // Hero Section
    hero: {
      title: 'Digital solutions with a different perspective.',
      subtitle: 'At .js agency we combine design, technology and strategy to create websites and systems that actually work.',
      cta: 'Consult Project',
      feature1: 'Multidisciplinary team',
      feature2: 'Clear processes',
      feature3: 'On-time delivery',
    },
    
    // Services Section
    services: {
      title: 'Services',
      subtitle: 'Web development, design and branding, AI automation and aerial content. Four integrated lines of work to make your brand look better, work better and sell better.',
      webdev: {
        title: 'Web Development',
        description: 'Landing pages, corporate websites and online stores.',
        feature1: 'Fast, secure, manageable and designed to convert.',
        feature2: 'Basic technical SEO and performance best practices.',
      },
      design: {
        title: 'Design & Branding',
        description: 'Complete visual identity and professional design.',
        feature1: 'Logo, color palette, typography and style guide.',
        feature2: 'Graphic materials design and user experience.',
      },
      ai: {
        title: 'AI Automation',
        description: 'Intelligent agents and automated workflows.',
        feature1: 'Conversational chatbots and virtual assistants.',
        feature2: 'Process automation and tool integration.',
      },
      aerial: {
        title: 'Aerial Photography and Video',
        description: 'For brands, real estate, tourism and events.',
        feature1: 'Visual content that elevates your digital presence and campaigns.',
        feature2: 'A1/A3 certified operation and operator registration.',
      },
    },
    
    // Portfolio Section
    portfolio: {
      title: 'Project Portfolio',
      subtitle: 'Each project is a unique story. From landing pages to complete applications, here you can see the scope of our work.',
      featured: 'Featured Projects',
      all: 'All Projects',
      cta: 'Start your project →',
      seeProject: 'View project →',
      like: 'Do you like what you see? Let\'s work together on your next project.',
      projects: {
        smartCard: {
          title: 'Smart Card by .js agency',
          category: 'Web Application',
          description: 'Intelligent digital menu with divider for diners, specifically designed for gastronomic establishments. Intuitive and modern interface that improves customer experience.'
        },
        mushroom: {
          title: 'Mushroom MDP',
          category: 'Enterprise Platform',
          description: 'Complete platform for professional sound equipment rental company and DJ booths. Online inventory management and booking system for musical events.'
        },
        designStudio: {
          title: 'DesignStudio Portfolio',
          category: 'Creative Portfolio',
          description: 'Interactive portfolio for design studio with dynamic gallery and custom animations.'
        },
        innovateLab: {
          title: 'InnovateLab Dashboard',
          category: 'Admin Dashboard',
          description: 'Complete administration panel with interactive charts, user management and real-time reports.'
        },
        restaurantApp: {
          title: 'RestaurantApp Mobile',
          category: 'Mobile App',
          description: 'Mobile application for restaurant with digital menu, online reservations and ordering system.'
        },
        brandIdentity: {
          title: 'BrandIdentity Package',
          category: 'Branding',
          description: 'Complete visual identity including logo, colors, typography and corporate style guide.'
        }
      }
    },
    
    // Testimonials Section
    testimonials: {
      title: 'What our clients say',
      subtitle: 'Our clients\' satisfaction is our best business card.',
      testimonials: {
        sofia: {
          name: 'Sofia Martínez',
          company: 'Bar owner',
          role: 'Owner',
          content: 'Smart card digitized my business and made it grow. The digital menu is intuitive, elegant and has significantly improved service. Diners can easily split the bill and pay for what they consumed'
        },
        maximiliano: {
          name: 'Maximiliano Peretti',
          company: 'CEO Mushroom MDP',
          role: 'Founder',
          content: 'The platform developed by .js agency allowed us to completely professionalize our equipment rental business. The online booking system and inventory management has been a total change.'
        },
        ana: {
          name: 'Ana Martín',
          company: 'DesignStudio',
          role: 'Creative Director',
          content: 'The code quality and attention to detail of .js agency is impressive. Our project was delivered on time and exceeded all our expectations.'
        },
        david: {
          name: 'David López',
          company: 'InnovateLab',
          role: 'CTO',
          content: 'As a developer, I really appreciate the technical level of .js agency. Their scalable architecture and clean code made maintenance much easier for us.'
        }
      }
    },
    
    // Process Section
    process: {
      title: 'Our work process',
      subtitle: 'A structured approach that guarantees quality results and on-time deliveries.',
      steps: {
        discovery: {
          number: '01',
          title: 'Discovery',
          description: 'Quick brief and clear objectives.'
        },
        design: {
          number: '02',
          title: 'Design & Architecture',
          description: 'Wireframes, look & feel and technical structure.'
        },
        development: {
          number: '03',
          title: 'Development',
          description: 'Clean code, integrations and content.'
        },
        launch: {
          number: '04',
          title: 'Launch',
          description: 'Testing, basic technical SEO and publication.'
        },
        support: {
          number: '05',
          title: 'Support',
          description: 'Support and continuous evolution.'
        }
      }
    },
    
    // About Section
    about: {
      title: 'About us',
      subtitle: 'We are a multidisciplinary team specialized in comprehensive digital solutions.',
      description: 'At .js agency we combine technical experience, creativity and strategy to create projects that really work. Our approach is based on understanding the specific needs of each client and developing tailored solutions.',
      content: {
        paragraph1: 'We are .js agency, a digital studio that combines design, technology and strategy to create honest, modern and functional solutions.',
        paragraph2: 'We work as a team, with clear processes and focus on detail, so that each project is solid today and scalable tomorrow.',
        paragraph3: 'If you\'re looking for someone you can trust to take your brand to the next level, let\'s talk.',
        teamTitle: 'Our team',
        cta: 'Want to be the next satisfied client?',
        ctaButton: 'Let\'s talk about your project →'
      },
      team: {
        development: {
          role: 'Direction & Development',
          name: 'Development team',
          description: 'Comprehensive supervision and web architecture.'
        },
        design: {
          role: 'Design & Branding',
          name: 'Creative team',
          description: 'Visual identity, UI and art direction.'
        },
        strategy: {
          role: 'Strategy & Automation',
          name: 'Specialists',
          description: 'AI flows and integrations.'
        },
        aerial: {
          role: 'Production (.js Aerials)',
          name: 'Audiovisual team',
          description: 'Aerial photography and video for brands.'
        }
      }
    },
    
    // Contact Section
    contact: {
      title: 'Let\'s talk about your project',
      subtitle: 'Tell us your objective in 2–3 lines and we\'ll propose the best path.',
      response: 'Response in 24–48h.',
      cta: 'Write us →',
      email: 'Email',
      location: 'Location',
      schedule: 'Schedule',
      scheduleValue: 'Mon–Fri 9:00–18:00',
      locationValue: 'Almeria, Spain',
    },
    
    // Footer
    footer: {
      description: 'Digital solutions with a different perspective.',
      services: 'Services',
      company: 'Company',
      about: 'About us',
      process: 'Process',
      testimonials: 'Testimonials',
      copyright: 'All rights reserved.',
    },
    
    // Legal
    legal: {
      terms: 'Terms and Conditions',
      privacy: 'Privacy Policy',
      cookies: 'Cookie Policy',
    },
    
    // Cookie Banner
    cookies: {
      title: 'Cookie Usage',
      message: 'We use cookies to improve your experience on our website. By continuing to browse, you accept our use of cookies.',
      moreInfo: 'More information',
      reject: 'Reject',
      accept: 'Accept',
    },
    
    // Accessibility
    a11y: {
      skipToContent: 'Skip to main content',
      toggleMenu: 'Open menu',
      closeMenu: 'Close menu',
      mainNavigation: 'Main navigation',
      mobileNavigation: 'Mobile navigation',
      servicesList: 'Services list',
      serviceFeatures: '{service} features',
      legalLinks: 'Legal links',
      contactCTA: 'Go to contact section to consult about your project',
      highlightedFeatures: 'Highlighted features',
      cookieBanner: 'Close cookie banner',
    },
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
      // Update HTML lang attribute on initial load
      const htmlElement = document.getElementById('html-root');
      if (htmlElement) {
        htmlElement.setAttribute('lang', savedLanguage);
      }
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    
    // Update HTML lang attribute
    const htmlElement = document.getElementById('html-root');
    if (htmlElement) {
      htmlElement.setAttribute('lang', lang);
    }
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key "${key}" not found for language "${language}"`);
        return key; // Return the key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
