import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

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
      faq: 'FAQ',
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
      services: {
        webdev: {
          title: 'Desarrollo Web',
          description: 'Landing pages, webs corporativas y tiendas online'
        },
        design: {
          title: 'Diseño & Branding',
          description: 'Identidad visual completa y diseño profesional'
        },
        ai: {
          title: 'Automatizaciones IA',
          description: 'Agentes inteligentes y flujos automatizados'
        },
        aerial: {
          title: 'Contenido Aéreo',
          description: 'Fotografía y video aéreo para marcas'
        }
      }
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
        link: 'Fly by .js agency',
      },
    },
    
    // Clients Section
    clients: {
      title: 'Ya confiaron en nosotros',
      subtitle: 'Empresas que han elegido nuestras soluciones digitales para hacer crecer su negocio.',
      trusted: 'Cliente satisfecho',
      previous: 'Cliente anterior',
      next: 'Siguiente cliente',
      goToSlide: 'Ir al cliente {slide}',
      stats: {
        projects: 'Proyectos',
        satisfaction: 'Satisfacción',
        response: 'Respuesta',
        coverage: 'Cobertura'
      },
      mushroom: {
        category: 'Plataforma Empresarial',
        description: 'Sistema completo de gestión y reservas para empresa de alquiler de equipos de sonido profesional.'
      },
      cafeteria: {
        category: 'Restaurante',
        description: 'Carta digital inteligente con divisor de cuentas para mejorar la experiencia gastronómica.'
      },
      jewelry: {
        category: 'Joyería',
        description: 'E-commerce elegante y sofisticado para mostrar colecciones de joyería de alta calidad.'
      },
      delivery: {
        category: 'App Delivery',
        description: 'Aplicación móvil completa para servicio de delivery con gestión de pedidos en tiempo real.'
      },
      cooking: {
        category: 'Educación',
        description: 'Plataforma educativa para escuela de cocina con cursos online y gestión de estudiantes.'
      }
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
        maximiliano: {
          name: 'Maximiliano Peretti',
          company: 'CEO Mushroom MDP',
          role: 'Fundador',
          content: 'La plataforma desarrollada por .js agency nos permitió profesionalizar completamente nuestro negocio de alquiler de equipos. El sistema de reservas online y gestión de inventario ha sido un cambio total.'
        },
        cafeteria: {
          name: 'Sofia Martínez',
          company: 'La Cafetería',
          role: 'Propietaria',
          content: 'Smart card digitalizó mi negocio y lo hizo crecer. La carta digital es intuitiva, elegante y ha mejorado significativamente el servicio. Los comensales pueden dividir la cuenta con facilidad y pagar por lo que consumieron.'
        },
        jewelry: {
          name: 'María Díaz',
          company: 'Joyería Díaz',
          role: 'Directora',
          content: 'El e-commerce que desarrollaron para nuestra joyería es elegante y sofisticado. Ha aumentado nuestras ventas online significativamente y nuestros clientes aman la experiencia de compra.'
        },
        delivery: {
          name: 'Carlos Ruiz',
          company: 'App Delivery',
          role: 'CEO',
          content: 'La aplicación móvil que crearon para nuestro servicio de delivery es increíble. La gestión de pedidos en tiempo real y la interfaz intuitiva han revolucionado nuestro negocio.'
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
        paragraph1: 'Somos un estudio digital que combina diseño, tecnología y estrategia para crear soluciones honestas, modernas y funcionales.',
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
    
    // Smart Card Showcase Section
    smartcard: {
      badge: 'Nuestro último proyecto',
      title: '¿Tienes un bar o restaurante?',
      subtitle: 'Smart Card no solo brinda una carta digital con QR, sino que ahora las personas pueden dividir fácilmente su cuenta por lo que consumió cada uno. Con el divisor inteligente, cada comensal paga solo por lo que realmente consumió.',
      problem: {
        title: 'El problema de dividir cuentas',
        description: 'Ya no es necesario que todos paguen por igual. Con nuestro divisor inteligente, cada persona paga solo por lo que consumió, evitando que salga perdiendo quien come o bebe muy poco.'
      },
      features: {
        qr: {
          title: 'Carta Digital con QR',
          description: 'Acceso instantáneo al menú desde cualquier dispositivo móvil.'
        },
        divider: {
          title: 'Divisor Inteligente',
          description: 'Selecciona comensales, asigna nombres y cada uno marca lo que consumió.'
        },
        payment: {
          title: 'Pago Individual',
          description: 'Cada persona paga solo por lo que realmente consumió.'
        },
        mobile: {
          title: 'Totalmente Móvil',
          description: 'Funciona perfectamente en cualquier smartphone o tablet.'
        }
      },
      steps: {
        step1: {
          title: 'Escanear el QR',
          description: 'Los comensales escanean el código QR de la mesa para acceder al menú digital.'
        },
        step2: {
          title: 'Seleccionar comensales',
          description: 'Elige cuántas personas van a comer y asigna un nombre a cada comensal.'
        },
        step3: {
          title: 'Revisar compartidos',
          description: 'Identifica qué platos o bebidas se van a compartir entre los comensales.'
        },
        step4: {
          title: 'Marcar consumo',
          description: 'Cada persona marca individualmente lo que consumió o compartió.'
        },
        step5: {
          title: 'Verificar pedido',
          description: 'Revisa el resumen completo antes de confirmar el pedido final.'
        },
        step6: {
          title: 'Dividir cuenta',
          description: 'Smart Card calcula automáticamente cuánto debe pagar cada comensal.'
        }
      },
      cta: 'Ver Carta Digital',
      consult: 'Consultar Proyecto',
      previousStep: 'Paso anterior',
      nextStep: 'Siguiente paso',
      goToStep: 'Ir al paso {step}'
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
    
    // FAQ Section
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: 'Encontrá respuestas a las consultas más comunes sobre nuestros servicios y procesos.',
      question1: '¿Cuánto tiempo toma desarrollar un proyecto web?',
      answer1: 'El tiempo de desarrollo varía según la complejidad del proyecto. Una landing page simple puede tomar 2-3 semanas, mientras que una aplicación web completa puede requerir 2-4 meses. Te proporcionamos un cronograma detallado en la propuesta inicial.',
      question2: '¿Qué incluye el servicio de desarrollo web?',
      answer2: 'Nuestro servicio incluye diseño responsive, desarrollo frontend y backend, integración de sistemas, SEO técnico base, optimización de performance, y capacitación para el manejo del sitio. También ofrecemos soporte post-lanzamiento.',
      question3: '¿Trabajan con presupuestos ajustados?',
      answer3: 'Sí, adaptamos nuestros servicios a diferentes presupuestos. Ofrecemos soluciones escalables que pueden crecer con tu negocio. Siempre buscamos la mejor relación calidad-precio para cada proyecto.',
      question4: '¿Qué tecnologías utilizan?',
      answer4: 'Trabajamos con tecnologías modernas como React, Node.js, TypeScript, y bases de datos como PostgreSQL y MongoDB. También utilizamos herramientas de IA para automatizaciones y optimizaciones.',
      question5: '¿Ofrecen mantenimiento después del lanzamiento?',
      answer5: 'Sí, ofrecemos planes de mantenimiento que incluyen actualizaciones de seguridad, backups, monitoreo, y soporte técnico. También podemos agregar nuevas funcionalidades según las necesidades de tu negocio.',
      question6: '¿Cómo es el proceso de trabajo?',
      answer6: 'Nuestro proceso incluye: 1) Descubrimiento y brief, 2) Diseño y arquitectura, 3) Desarrollo, 4) Testing y lanzamiento, 5) Acompañamiento post-lanzamiento. Mantenemos comunicación constante y entregas regulares.',
      cta: '¿No encontraste la respuesta que buscabas?',
      ctaButton: 'Consultar Proyecto →'
    },
    
    // Newsletter Section
    newsletter: {
      title: 'Mantente al día',
      subtitle: 'Recibí tips, novedades y ofertas exclusivas sobre desarrollo web y tecnología.',
      emailLabel: 'Dirección de email',
      emailPlaceholder: 'tu@email.com',
      subscribe: 'Suscribirse',
      subscribing: 'Suscribiendo...',
      successTitle: '¡Gracias por suscribirte!',
      successMessage: 'Te enviaremos contenido valioso sobre desarrollo web y tecnología.',
      privacy: 'Respetamos tu privacidad. No compartimos tu email con terceros.',
      errorEmpty: 'Por favor, ingresá tu email',
      errorInvalid: 'Por favor, ingresá un email válido',
      errorSubmit: 'Hubo un error. Intentá nuevamente.'
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
      faq: 'FAQ',
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
      services: {
        webdev: {
          title: 'Web Development',
          description: 'Landing pages, corporate websites and online stores'
        },
        design: {
          title: 'Design & Branding',
          description: 'Complete visual identity and professional design'
        },
        ai: {
          title: 'AI Automation',
          description: 'Intelligent agents and automated workflows'
        },
        aerial: {
          title: 'Aerial Content',
          description: 'Aerial photography and video for brands'
        }
      }
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
        link: 'Fly by .js agency',
      },
    },
    
    // Clients Section
    clients: {
      title: 'They already trusted us',
      subtitle: 'Companies that have chosen our digital solutions to grow their business.',
      trusted: 'Satisfied client',
      previous: 'Previous client',
      next: 'Next client',
      goToSlide: 'Go to client {slide}',
      stats: {
        projects: 'Projects',
        satisfaction: 'Satisfaction',
        response: 'Response',
        coverage: 'Coverage'
      },
      mushroom: {
        category: 'Enterprise Platform',
        description: 'Complete management and booking system for professional sound equipment rental company.'
      },
      cafeteria: {
        category: 'Restaurant',
        description: 'Intelligent digital menu with bill divider to improve the gastronomic experience.'
      },
      jewelry: {
        category: 'Jewelry',
        description: 'Elegant and sophisticated e-commerce to showcase high-quality jewelry collections.'
      },
      delivery: {
        category: 'Delivery App',
        description: 'Complete mobile application for delivery service with real-time order management.'
      },
      cooking: {
        category: 'Education',
        description: 'Educational platform for cooking school with online courses and student management.'
      }
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
        maximiliano: {
          name: 'Maximiliano Peretti',
          company: 'CEO Mushroom MDP',
          role: 'Founder',
          content: 'The platform developed by .js agency allowed us to completely professionalize our equipment rental business. The online booking system and inventory management has been a total change.'
        },
        cafeteria: {
          name: 'Sofia Martínez',
          company: 'La Cafetería',
          role: 'Owner',
          content: 'Smart card digitized my business and made it grow. The digital menu is intuitive, elegant and has significantly improved service. Diners can easily split the bill and pay for what they consumed.'
        },
        jewelry: {
          name: 'María Díaz',
          company: 'Joyería Díaz',
          role: 'Director',
          content: 'The e-commerce they developed for our jewelry store is elegant and sophisticated. It has significantly increased our online sales and our customers love the shopping experience.'
        },
        delivery: {
          name: 'Carlos Ruiz',
          company: 'App Delivery',
          role: 'CEO',
          content: 'The mobile application they created for our delivery service is incredible. Real-time order management and intuitive interface have revolutionized our business.'
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
    
    // Smart Card Showcase Section
    smartcard: {
      badge: 'Our latest project',
      title: 'Do you have a bar or restaurant?',
      subtitle: 'Smart Card not only provides a digital menu with QR, but now people can easily split their bill by what each person consumed. With the smart divider, each diner pays only for what they actually consumed.',
      problem: {
        title: 'The bill splitting problem',
        description: 'No need for everyone to pay equally anymore. With our smart divider, each person pays only for what they consumed, preventing those who eat or drink little from losing out.'
      },
      features: {
        qr: {
          title: 'Digital Menu with QR',
          description: 'Instant access to the menu from any mobile device.'
        },
        divider: {
          title: 'Smart Divider',
          description: 'Select diners, assign names and each person marks what they consumed.'
        },
        payment: {
          title: 'Individual Payment',
          description: 'Each person pays only for what they actually consumed.'
        },
        mobile: {
          title: 'Fully Mobile',
          description: 'Works perfectly on any smartphone or tablet.'
        }
      },
      steps: {
        step1: {
          title: 'Scan the QR',
          description: 'Diners scan the table QR code to access the digital menu.'
        },
        step2: {
          title: 'Select diners',
          description: 'Choose how many people are eating and assign a name to each diner.'
        },
        step3: {
          title: 'Review shared items',
          description: 'Identify which dishes or drinks will be shared among diners.'
        },
        step4: {
          title: 'Mark consumption',
          description: 'Each person individually marks what they consumed or shared.'
        },
        step5: {
          title: 'Verify order',
          description: 'Review the complete summary before confirming the final order.'
        },
        step6: {
          title: 'Split bill',
          description: 'Smart Card automatically calculates how much each diner should pay.'
        }
      },
      cta: 'View Digital Menu',
      consult: 'Consult Project',
      previousStep: 'Previous step',
      nextStep: 'Next step',
      goToStep: 'Go to step {step}'
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
    
    // FAQ Section
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Find answers to the most common questions about our services and processes.',
      question1: 'How long does it take to develop a web project?',
      answer1: 'Development time varies depending on project complexity. A simple landing page can take 2-3 weeks, while a complete web application may require 2-4 months. We provide a detailed timeline in the initial proposal.',
      question2: 'What does the web development service include?',
      answer2: 'Our service includes responsive design, frontend and backend development, system integration, basic technical SEO, performance optimization, and training for site management. We also offer post-launch support.',
      question3: 'Do you work with tight budgets?',
      answer3: 'Yes, we adapt our services to different budgets. We offer scalable solutions that can grow with your business. We always seek the best quality-price ratio for each project.',
      question4: 'What technologies do you use?',
      answer4: 'We work with modern technologies like React, Node.js, TypeScript, and databases like PostgreSQL and MongoDB. We also use AI tools for automation and optimization.',
      question5: 'Do you offer maintenance after launch?',
      answer5: 'Yes, we offer maintenance plans that include security updates, backups, monitoring, and technical support. We can also add new features according to your business needs.',
      question6: 'How is the work process?',
      answer6: 'Our process includes: 1) Discovery and brief, 2) Design and architecture, 3) Development, 4) Testing and launch, 5) Post-launch support. We maintain constant communication and regular deliveries.',
      cta: 'Didn\'t find the answer you were looking for?',
      ctaButton: 'Consult Project →'
    },
    
    // Newsletter Section
    newsletter: {
      title: 'Stay updated',
      subtitle: 'Receive tips, news and exclusive offers about web development and technology.',
      emailLabel: 'Email address',
      emailPlaceholder: 'your@email.com',
      subscribe: 'Subscribe',
      subscribing: 'Subscribing...',
      successTitle: 'Thank you for subscribing!',
      successMessage: 'We\'ll send you valuable content about web development and technology.',
      privacy: 'We respect your privacy. We don\'t share your email with third parties.',
      errorEmpty: 'Please enter your email',
      errorInvalid: 'Please enter a valid email',
      errorSubmit: 'There was an error. Please try again.'
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
