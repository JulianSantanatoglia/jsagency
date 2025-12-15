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
      home: 'Inicio',
      latestProject: 'Destacado',
      services: 'Lo que hacemos',
      about: 'Quiénes somos',
      process: 'Procesos',
      faq: 'Dudas',
      projects: 'Nuestros proyectos',
      contact: '¡Hablemos!',
    },
    
    // Hero Section
      hero: {
      title: 'Soluciones digitales con otra perspectiva.',
      subtitle: 'En <span class="font-bold text-slate-900">.js</span><span class="font-semibold text-accent-cyan">agency</span> creamos <strong>páginas web</strong> y <strong>automatizaciones con IA</strong>. Soluciones digitales que transforman tu negocio.',
      cta: 'Hablemos de tu proyecto',
      helloButton: '¡Hola! 👋',
      animatedTexts: {
        text1: 'POTENCIAMOS TU',
        highlight1: 'MARCA',
        text2: 'DIGITALIZAMOS TU',
        highlight2: 'EMPRESA',
        text3: 'AUTOMATIZAMOS TUS',
        highlight3: 'PROCESOS',
      },
      feature1: 'Equipo multidisciplinario',
      feature2: 'Procesos claros',
      feature3: 'Entregas a tiempo',
      services: {
        webdev: {
          title: 'Creación de Páginas Web',
          description: '• Landing pages de alta conversión\n• Sitios web corporativos\n• E-commerce y tiendas online\n• Aplicaciones web personalizadas'
        },
        design: {
          title: 'Tours virtuales',
          description: '• Tours virtuales para inmobiliarias\n• Tours virtuales para hoteles y hostelería\n• Experiencias inmersivas con Insta360 X5\n• Integración en webs y plataformas'
        },
        ai: {
          title: 'Automatizaciones IA',
          description: '• Chatbots conversacionales\n• Agentes de atención al cliente\n• Automatización de procesos\n• Integración de herramientas IA'
        },
        aerial: {
          title: 'Servicios de Drone',
          description: '• Fotografía aérea inmobiliaria\n• Videos corporativos con drones\n• Mapeo y medición de terrenos\n• Contenido publicitario aéreo'
        }
      }
    },
    
    // Services Section
    services: {
      title: 'Lo que hacemos',
      titleHighlight: 'hacemos',
      subtitle: 'Dos formas de hacer crecer tu negocio. Diseño y desarrollo web, y automatizaciones con IA. Todo integrado, todo conectado.',
      webdev: {
        title: 'Creación de Páginas Web',
        description: 'Landing pages, webs corporativas y tiendas online.',
        feature1: 'Rápidas, seguras, administrables y pensadas para convertir.',
        feature2: 'SEO técnico base y buenas prácticas de performance.',
      },
      design: {
        title: 'Tours virtuales',
        description: 'Tours virtuales 360° con tecnología Insta360 X5.',
        feature1: 'Tours inmersivos para inmobiliarias, hoteles y hostelería.',
        feature2: 'Integración en webs y plataformas para aumentar conversiones.',
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
    
    // Why Section
    why: {
      webdev: {
        title: '¿Por qué necesitas tener una página web?',
        content: 'En un mundo donde el 97% de los consumidores buscan productos y servicios online, no tener una página web profesional es perder oportunidades de negocio. Tu competencia ya está ahí, y cada día que pasa sin presencia digital es un día de ventas perdidas. Una web bien diseñada no solo te da credibilidad, sino que funciona 24/7 como tu mejor vendedor, generando leads incluso mientras duermes.',
        stat: '97%',
        statLabel: 'buscan online',
        cta: 'Descubre más'
      },
      ai: {
        title: '¿Por qué necesitas automatizaciones?',
        content: 'Las tareas repetitivas consumen hasta el 40% del tiempo de tu equipo. Con automatizaciones inteligentes, liberas ese tiempo para enfocarte en lo que realmente importa: vender y crecer. Los sistemas automatizados no se cansan, no cometen errores humanos y trabajan las 24 horas, multiplicando tu capacidad de respuesta y mejorando la experiencia de tus clientes de forma exponencial.',
        stat: '40%',
        statLabel: 'del tiempo',
        cta: 'Descubre más'
      },
      tours: {
        title: '¿Por qué necesitas tours virtuales?',
        content: 'El 73% de los compradores de propiedades toman decisiones basadas en tours virtuales. Sin esta herramienta, estás perdiendo clientes potenciales que buscan información inmediata y visual. Los tours virtuales no solo aumentan el tiempo de permanencia en tu web, sino que generan un 40% más de leads calificados y reducen las visitas presenciales innecesarias, ahorrando tiempo tanto a ti como a tus clientes.',
        stat: '73%',
        statLabel: 'toman decisiones',
        cta: 'Descubre más'
      },
      drone: {
        title: '¿Por qué necesitas servicios de drone?',
        content: 'Los servicios de drone aumentan el engagement en redes sociales hasta un 150% y mejoran la percepción de calidad de tu marca. En el sector inmobiliario, las propiedades con videos aéreos se venden un 68% más rápido. Para eventos y hoteles, los servicios de drone son tu mejor herramienta de marketing visual, mostrando espacios desde una perspectiva única que genera emociones y decisiones de compra más rápidas.',
        stat: '68%',
        statLabel: 'más rápido',
        cta: 'Descubre más'
      }
    },
    
    // Clients Section
    clients: {
      title: 'Quien confió en nosotros',
      subtitle: 'Empresas que han elegido nuestras soluciones digitales para hacer crecer su negocio.',
      viewProject: 'Ver proyecto',
      mushroom: {
        category: 'Plataforma Empresarial',
        description: 'Sistema completo de gestión y reservas para empresa de alquiler de equipos de sonido profesional.',
        link: 'https://mushroommdp.com'
      },
      jewelry: {
        category: 'Joyería',
        description: 'E-commerce elegante y sofisticado para mostrar colecciones de joyería de alta calidad.',
        link: '#'
      },
      automation: {
        category: 'Automatizaciones IA',
        description: 'Sistemas inteligentes y flujos automatizados para optimizar procesos empresariales con inteligencia artificial.',
        link: '#'
      },
      aerial: {
        category: 'Fotografía Aérea',
        description: 'Servicios de fotografía y video aéreo profesional para inmobiliarias y proyectos arquitectónicos.',
        link: 'https://jsgliafly.netlify.app/'
      }
    },
    
    // Portfolio Section
    portfolio: {
      title: 'Proyectos',
      subtitle: 'Algunos de los proyectos que hemos construido. Cada uno con su historia, cada uno con su propósito.',
      featured: 'Proyectos Destacados',
      all: 'Todos los Proyectos',
      cta: 'Empezá tu proyecto →',
      seeProject: 'Ver proyecto →',
      like: '¿Te gusta lo que ves? Trabajemos juntos en tu próximo proyecto.',
      projects: {
        smartCard: {
          title: 'Divly by .js agency',
          category: 'Aplicación Web',
          description: 'Carta digital inteligente con divisor para comensales, diseñada específicamente para establecimientos gastronómicos. Interfaz intuitiva y moderna que mejora la experiencia del cliente.'
        },
        mushroom: {
          title: 'Mushroom mdp',
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
          title: 'Tour Virtual Inmobiliaria',
          category: 'Tours Virtuales',
          description: 'Tour virtual 360° para inmobiliaria con integración web y experiencia inmersiva para potenciales compradores.'
        }
      }
    },
    
    // Testimonials Section
    testimonials: {
      title: 'Lo que dicen',
      titleHighlight: 'dicen',
      subtitle: 'Palabras de quienes ya trabajaron con nosotros.',
      testimonials: {
        maximiliano: {
          name: 'Maximiliano Peretti',
          company: 'Mushroom mdp',
          role: 'CEO',
          content: 'La plataforma desarrollada por .js agency nos permitió profesionalizar completamente nuestro negocio de alquiler de equipos. El sistema de reservas online y gestión de inventario ha sido un cambio total.'
        },
        micaela: {
          name: 'Micaela Díaz',
          company: 'Fotografía Profesional',
          role: 'Fotógrafa',
          content: 'El portfolio que .js agency creó para mi trabajo fotográfico superó todas mis expectativas. No solo es visualmente impactante, sino que las visitas a mi sitio aumentaron significativamente. El diseño elegante y la optimización SEO han hecho que más clientes me encuentren.'
        },
        alejandro: {
          name: 'Alejandro Santanatoglia',
          company: 'Estudio de Arquitectura',
          role: 'Arquitecto',
          content: 'La landing page que desarrollaron para mi estudio de arquitectura es perfecta. Captura la esencia de nuestro trabajo y ha generado un aumento notable en las consultas de clientes potenciales. El diseño minimalista y profesional refleja exactamente lo que buscábamos.'
        }
      }
    },
    
    // Process Section
    process: {
      title: 'Cómo trabajamos',
      titleHighlight: 'trabajamos',
      subtitle: 'Procesos claros, sin sorpresas. Cada servicio tiene su metodología, pero todos comparten algo: transparencia total.',
      helper: 'Haz click en alguno de los dos botones',
      cta: '¿Listo para empezar?',
      ctaButton: 'Hablemos →',
      webdev: {
        title: 'Creación de Páginas Web',
        steps: {
          discovery: {
            title: 'Descubrimiento',
            description: 'Análisis de requerimientos, objetivos del negocio y definición del alcance del proyecto.'
          },
          design: {
            title: 'Diseño & Arquitectura',
            description: 'Wireframes, diseño visual, experiencia de usuario y arquitectura técnica del sistema.'
          },
          development: {
            title: 'Desarrollo',
            description: 'Programación, integraciones, base de datos y funcionalidades específicas del proyecto.'
          },
          testing: {
            title: 'Testing & QA',
            description: 'Pruebas de funcionalidad, rendimiento, seguridad y compatibilidad entre dispositivos.'
          },
          launch: {
            title: 'Lanzamiento',
            description: 'Deploy en servidor, configuración de dominio, SEO básico y capacitación del cliente.'
          }
        }
      },
      automation: {
        title: 'Automatizaciones IA',
        steps: {
          analysis: {
            title: 'Análisis de Procesos',
            description: 'Identificación de tareas repetitivas y oportunidades de automatización en tu negocio.'
          },
          planning: {
            title: 'Planificación',
            description: 'Diseño de flujos de trabajo, selección de herramientas IA y definición de integraciones.'
          },
          integration: {
            title: 'Implementación',
            description: 'Configuración de sistemas, desarrollo de scripts y conexión con plataformas existentes.'
          },
          training: {
            title: 'Capacitación',
            description: 'Entrenamiento del equipo, documentación de procesos y transferencia de conocimientos.'
          },
          optimization: {
            title: 'Optimización',
            description: 'Monitoreo de resultados, ajustes de parámetros y mejora continua de los procesos.'
          }
        }
      },
      design: {
        title: 'Tours virtuales',
        steps: {
          consultation: {
            title: 'Consulta y Planificación',
            description: 'Análisis de necesidades, espacios a capturar y definición de objetivos del tour virtual.'
          },
          capture: {
            title: 'Captura 360°',
            description: 'Fotografía y video 360° con Insta360 X5 en todos los espacios relevantes del inmueble o establecimiento.'
          },
          processing: {
            title: 'Procesamiento y Edición',
            description: 'Stitching de imágenes 360°, corrección de color, optimización y creación de puntos de navegación.'
          },
          integration: {
            title: 'Integración Web',
            description: 'Integración del tour virtual en tu sitio web o plataforma, con navegación intuitiva y responsive.'
          },
          delivery: {
            title: 'Entrega y Capacitación',
            description: 'Entrega del tour completo, documentación de uso y capacitación para actualizaciones futuras.'
          }
        }
      },
      aerial: {
        title: 'Fotografía Aérea',
        steps: {
          planning: {
            title: 'Planificación',
            description: 'Análisis del sitio, permisos necesarios, condiciones climáticas y plan de vuelo.'
          },
          shooting: {
            title: 'Rodaje Aéreo',
            description: 'Captura de imágenes y video con drones profesionales, múltiples ángulos y resoluciones.'
          },
          editing: {
            title: 'Post-Producción',
            description: 'Edición de video, corrección de color, estabilización y creación de contenido final.'
          },
          delivery: {
            title: 'Entrega',
            description: 'Archivos en diferentes formatos, plataformas de entrega y derechos de uso clarificados.'
          }
        }
      }
    },
    
    // About Section
    about: {
      title: 'Quiénes somos',
      titleHighlight: 'somos',
      subtitle: 'Un equipo que piensa diferente y construye mejor.',
      description: 'Somos un estudio digital en Almería. Combinamos código, creatividad y estrategia para crear proyectos que realmente funcionan. Sin humo, sin promesas vacías. Solo resultados.',
      content: {
        paragraph1: 'Somos una startup creativa en Almería: un equipo joven que transforma negocios en experiencias digitales modernas y efectivas.',
        paragraph2: 'Creamos tu web a medida, desde cero y sin plantillas, para que se vea profesional, sea segura, rapida, accecible para todos y posicionarse en Google para que tus clientes te encuentren.',
        paragraph3: 'Y vamos más allá: integramos automatizaciones con IA, tours virtuales 360 y contenido con dron para mostrar tu negocio con otra perspectiva, generar confianza desde el primer vistazo y hacer que la gente decida más rápido.',
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
          role: 'Tours virtuales',
          name: 'Equipo de producción 360°',
          description: 'Tours virtuales inmersivos con Insta360 X5.'
        },
        strategy: {
          role: 'Estrategia & Automatización',
          name: 'Especialistas',
          description: 'Flujos con IA e integraciones.'
        },
        aerial: {
          role: 'Fly by .js agency',
          name: 'Equipo audiovisual',
          description: 'Fotografía y video aéreo para marcas.'
        }
      }
    },
    
    // Divly Showcase Section
    smartcard: {
      badge: 'Nuestro último proyecto',
      title: '¿Tienes un bar o restaurante?',
      subtitle: 'Divly no solo brinda una carta digital con QR, sino que ahora las personas pueden dividir fácilmente su cuenta por lo que consumió cada uno. Con el divisor inteligente, cada comensal paga solo por lo que realmente consumió.',
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
          description: 'Divly calcula automáticamente cuánto debe pagar cada comensal.'
        }
      },
      cta: 'Ver Carta Digital',
      consult: 'Consultar Proyecto',
      previousStep: 'Paso anterior',
      nextStep: 'Siguiente paso',
      goToStep: 'Ir al paso {step}'
    },
    
    // Contact Section
    fhoto: {
      hero: {
        title: 'Tours virtuales 360° para inmuebles, salones de fiesta y más',
        subtitle: 'Soluciones visuales profesionales para inmobiliarias, salas de eventos, hoteles, restaurantes y espacios comerciales. Tours virtuales con MatterPort y servicios de drone certificados que transforman espacios en experiencias.',
        cta: 'Quiero un presupuesto',
      },
    },
    contact: {
      title: 'Hablemos',
      subtitle: 'Cuéntanos tu idea en pocas palabras. Te respondemos rápido y claro.',
      response: 'Te respondemos en 24–48h.',
      cta: 'Enviar mensaje →',
      email: 'Email',
      location: 'Ubicación',
      socialMedia: 'Redes Sociales',
      locationValue: 'Almeria, España',
      formTitle: 'Envíanos un mensaje',
      formName: 'Nombre y apellido',
      formNamePlaceholder: 'Tu nombre completo',
      formEmail: 'Email',
      formEmailPlaceholder: 'tu@email.com',
      formPhone: 'Teléfono',
      formPhonePlaceholder: '+34 123 456 789',
      formMessage: 'Mensaje',
      formMessagePlaceholder: 'Cuéntanos sobre tu proyecto...',
      formSubmit: 'Enviar mensaje',
      formSubmitting: 'Enviando...',
      formSuccess: '¡Mensaje enviado correctamente! Te contactaremos pronto.',
      formError: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
    },
    
    // Footer
    footer: {
      description: 'Soluciones digitales con otra perspectiva.',
      services: 'Servicios',
      company: 'Empresa',
      projects: 'Proyectos',
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
      message: 'Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Al continuar navegando, acepta nuestro uso de cookies. ',
      moreInfo: 'Más información',
      reject: 'Rechazar',
      accept: 'Aceptar',
    },
    
    // FAQ Section
    faq: {
      title: 'Dudas frecuentes',
      titleHighlight: 'frecuentes',
      subtitle: 'Las respuestas que buscas, sin rodeos.',
      helper: 'Haz click en alguno de los dos botones',
      webdev: {
        title: 'Creación de Páginas Web',
        questions: [
          {
            question: '¿Cuánto tiempo toma desarrollar un proyecto web?',
            answer: 'El tiempo de desarrollo varía según la complejidad del proyecto. Una landing page simple puede tomar 2-3 semanas, mientras que una aplicación web completa puede requerir 2-4 meses. Te proporcionamos un cronograma detallado en la propuesta inicial.'
          },
          {
            question: '¿Qué incluye el servicio de creación de páginas web?',
            answer: 'Nuestro servicio incluye diseño responsive, desarrollo frontend y backend, integración de sistemas, SEO técnico base, optimización de performance, y capacitación para el manejo del sitio. También ofrecemos soporte post-lanzamiento.'
          },
          {
            question: '¿Qué tecnologías utilizan?',
            answer: 'Trabajamos con tecnologías modernas como React, Node.js, TypeScript, y bases de datos como PostgreSQL y MongoDB. También utilizamos herramientas de IA para automatizaciones y optimizaciones.'
          },
          {
            question: '¿Ofrecen mantenimiento después del lanzamiento?',
            answer: 'Sí, ofrecemos planes de mantenimiento que incluyen actualizaciones de seguridad, backups, monitoreo, y soporte técnico. También podemos agregar nuevas funcionalidades según las necesidades de tu negocio.'
          }
        ]
      },
      design: {
        title: 'Tours virtuales',
        questions: [
          {
            question: '¿Qué incluye un tour virtual 360°?',
            answer: 'Incluye la captura de imágenes 360° con Insta360 X5 en todos los espacios relevantes, procesamiento y stitching de las imágenes, corrección de color, creación de puntos de navegación, y la integración completa en tu sitio web o plataforma.'
          },
          {
            question: '¿Cuánto tiempo toma crear un tour virtual?',
            answer: 'El tiempo depende del tamaño del espacio. Para una propiedad pequeña (2-3 habitaciones) puede tomar 1-2 semanas. Para hoteles o establecimientos grandes puede requerir 3-4 semanas incluyendo captura, procesamiento e integración.'
          },
          {
            question: '¿Puedo actualizar el tour virtual después?',
            answer: 'Sí, ofrecemos actualizaciones del tour virtual. Puedes agregar nuevos espacios o modificar los existentes. Te proporcionamos capacitación para que puedas hacer actualizaciones básicas o podemos hacerlas por ti.'
          },
          {
            question: '¿Funciona en dispositivos móviles?',
            answer: 'Sí, nuestros tours virtuales son completamente responsive y funcionan perfectamente en smartphones, tablets y computadoras. La experiencia es inmersiva en todos los dispositivos.'
          }
        ]
      },
      aerial: {
        title: 'Servicios de Drone',
        questions: [
          {
            question: '¿Qué servicios de drones ofrecen?',
            answer: 'Ofrecemos fotografía aérea inmobiliaria, videos corporativos con drones, mapeo y medición de terrenos, y contenido publicitario aéreo. Todos nuestros operadores están certificados A1/A3 y registrados.'
          },
          {
            question: '¿Cuánto tiempo toma la entrega de los servicios de drone?',
            answer: 'Después de la captura, los servicios de drone típicamente se entregan en 5-7 días hábiles. Esto incluye edición, corrección de color, estabilización y entrega en los formatos solicitados.'
          },
          {
            question: '¿Necesitan permisos especiales para volar?',
            answer: 'Sí, gestionamos todos los permisos necesarios antes de cada vuelo. Nuestros operadores están certificados y cumplen con toda la normativa vigente. Te informamos sobre cualquier restricción antes de la sesión.'
          },
          {
            question: '¿Qué formatos de entrega ofrecen?',
            answer: 'Entregamos el contenido en diferentes formatos según tus necesidades: imágenes en alta resolución (RAW y JPG), videos en 4K, formatos optimizados para web, y archivos listos para impresión o redes sociales.'
          }
        ]
      },
      ai: {
        title: 'Automatizaciones IA',
        questions: [
          {
            question: '¿Qué tipo de automatizaciones con IA pueden crear?',
            answer: 'Creamos chatbots conversacionales, agentes de atención al cliente, automatización de procesos empresariales, integración de herramientas IA, y sistemas inteligentes que optimizan flujos de trabajo repetitivos.'
          },
          {
            question: '¿Cuánto tiempo toma implementar una automatización?',
            answer: 'Depende de la complejidad. Un chatbot básico puede estar funcionando en 2-3 semanas, mientras que sistemas de automatización complejos pueden requerir 1-2 meses. Te proporcionamos un cronograma detallado en la propuesta.'
          },
          {
            question: '¿Necesito conocimientos técnicos para usar las automatizaciones?',
            answer: 'No, diseñamos las automatizaciones para que sean fáciles de usar. Te proporcionamos capacitación completa y documentación. Además, ofrecemos soporte continuo para cualquier duda o actualización.'
          },
          {
            question: '¿Pueden integrarse con mis sistemas existentes?',
            answer: 'Sí, nuestras automatizaciones se integran con la mayoría de sistemas empresariales populares (CRM, ERP, plataformas de e-commerce, etc.). Analizamos tus sistemas actuales y diseñamos la integración más adecuada.'
          }
        ]
      },
      cta: '¿Sigue sin quedar claro?',
      ctaButton: 'Hablemos →'
    },
    
    // Newsletter Section
    newsletter: {
      title: 'Mantente al día',
      subtitle: 'Recibí tips, novedades y ofertas exclusivas sobre creación de páginas web y tecnología.',
      emailLabel: 'Dirección de email',
      emailPlaceholder: 'tu@email.com',
      subscribe: 'Suscribirse',
      subscribing: 'Suscribiendo...',
      successTitle: '¡Gracias por suscribirte!',
      successMessage: 'Te enviaremos contenido valioso sobre creación de páginas web y tecnología.',
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
      latestProject: 'Featured',
      services: 'What we do',
      about: 'Who we are',
      process: 'Process',
      faq: 'Questions',
      projects: 'Our projects',
      contact: 'Let\'s talk',
    },
    
    // Hero Section
    hero: {
      title: 'Digital solutions with a different perspective.',
      subtitle: 'At <span class="font-bold text-slate-900">.js</span><span class="font-semibold text-accent-cyan">agency</span> we create <strong>web pages</strong> and <strong>AI automation</strong>. Digital solutions that transform your business.',
      cta: 'Let\'s talk about your project',
      helloButton: 'Hello! 👋',
      animatedTexts: {
        text1: 'WE BOOST YOUR',
        highlight1: 'BRAND',
        text2: 'WE DIGITIZE YOUR',
        highlight2: 'BUSINESS',
        text3: 'WE AUTOMATE YOUR',
        highlight3: 'PROCESSES',
      },
      feature1: 'Multidisciplinary team',
      feature2: 'Clear processes',
      feature3: 'On-time delivery',
      services: {
        webdev: {
          title: 'Web Development',
          description: '• High-converting landing pages\n• Corporate websites\n• E-commerce and online stores\n• Custom web applications'
        },
        design: {
          title: 'Virtual Tours',
          description: '• 360° tours for real estate\n• Virtual tours for hotels and hospitality\n• Immersive experiences with Insta360 X5\n• Web and platform integration'
        },
        ai: {
          title: 'AI Automation',
          description: '• Conversational chatbots\n• Customer service agents\n• Process automation\n• AI tools integration'
        },
        aerial: {
          title: 'Drone Services',
          description: '• Real estate aerial photography\n• Corporate drone videos\n• Land mapping and measurement\n• Aerial advertising content'
        }
      }
    },
    
    // Services Section
    services: {
      title: 'What we do',
      titleHighlight: 'do',
      subtitle: 'Two ways to grow your business. Web design and development, and AI automation. All integrated, all connected.',
      webdev: {
        title: 'Web Development',
        description: 'Landing pages, corporate websites and online stores.',
        feature1: 'Fast, secure, manageable and designed to convert.',
        feature2: 'Basic technical SEO and performance best practices.',
      },
      design: {
        title: 'Virtual Tours',
        description: '360° virtual tours with Insta360 X5 technology.',
        feature1: 'Immersive tours for real estate, hotels and hospitality.',
        feature2: 'Web and platform integration to increase conversions.',
      },
      ai: {
        title: 'AI Automation',
        description: 'Intelligent agents and automated workflows.',
        feature1: 'Conversational chatbots and virtual assistants.',
        feature2: 'Process automation and tool integration.',
      },
      aerial: {
        title: 'Drone Services',
        description: 'For brands, real estate, tourism and events.',
        feature1: 'Visual content that elevates your digital presence and campaigns.',
        feature2: 'A1/A3 certified operation and operator registration.',
        link: 'Fly by .js agency',
      },
    },
    
    // Why Section
    why: {
      webdev: {
        title: 'Why do you need a website?',
        content: 'In a world where 97% of consumers search for products and services online, not having a professional website is losing business opportunities. Your competition is already there, and every day without a digital presence is a day of lost sales. A well-designed website not only gives you credibility, but works 24/7 as your best salesperson, generating leads even while you sleep.',
        stat: '97%',
        statLabel: 'search online',
        cta: 'Discover more'
      },
      ai: {
        title: 'Why do you need automations?',
        content: 'Repetitive tasks consume up to 40% of your team\'s time. With intelligent automations, you free up that time to focus on what really matters: selling and growing. Automated systems don\'t get tired, don\'t make human errors, and work 24 hours a day, multiplying your response capacity and exponentially improving your customers\' experience.',
        stat: '40%',
        statLabel: 'of time',
        cta: 'Discover more'
      },
      tours: {
        title: 'Why do you need virtual tours?',
        content: '73% of property buyers make decisions based on virtual tours. Without this tool, you\'re losing potential customers who seek immediate and visual information. Virtual tours not only increase time spent on your website, but generate 40% more qualified leads and reduce unnecessary in-person visits, saving time for both you and your clients.',
        stat: '73%',
        statLabel: 'make decisions',
        cta: 'Discover more'
      },
      drone: {
        title: 'Why do you need drone services?',
        content: 'Drone services increase social media engagement by up to 150% and improve the perception of your brand\'s quality. In the real estate sector, properties with aerial videos sell 68% faster. For events and hotels, drone services are your best visual marketing tool, showing spaces from a unique perspective that generates emotions and faster purchasing decisions.',
        stat: '68%',
        statLabel: 'faster',
        cta: 'Discover more'
      }
    },
    
    // Clients Section
    clients: {
      title: 'Who trusted us',
      subtitle: 'Companies that have chosen our digital solutions to grow their business.',
      viewProject: 'View project',
      mushroom: {
        category: 'Enterprise Platform',
        description: 'Complete management and booking system for professional sound equipment rental company.',
        link: 'https://mushroommdp.com'
      },
      jewelry: {
        category: 'Jewelry',
        description: 'Elegant and sophisticated e-commerce to showcase high-quality jewelry collections.',
        link: '#'
      },
      automation: {
        category: 'AI Automations',
        description: 'Intelligent systems and automated workflows to optimize business processes with artificial intelligence.',
        link: '#'
      },
      aerial: {
        category: 'Aerial Photography',
        description: 'Professional aerial photography and video services for real estate and architectural projects.',
        link: 'https://jsgliafly.netlify.app/'
      }
    },
    
    // Portfolio Section
    portfolio: {
      title: 'Projects',
      subtitle: 'Some of the projects we\'ve built. Each with its story, each with its purpose.',
      featured: 'Featured Projects',
      all: 'All Projects',
      cta: 'Start your project →',
      seeProject: 'View project →',
      like: 'Do you like what you see? Let\'s work together on your next project.',
      projects: {
        smartCard: {
          title: 'Divly by .js agency',
          category: 'Web Application',
          description: 'Intelligent digital menu with divider for diners, specifically designed for gastronomic establishments. Intuitive and modern interface that improves customer experience.'
        },
        mushroom: {
          title: 'Mushroom mdp',
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
          title: 'Real Estate Virtual Tour',
          category: 'Virtual Tours',
          description: '360° virtual tour for real estate with web integration and immersive experience for potential buyers.'
        }
      }
    },
    
    // Testimonials Section
    testimonials: {
      title: 'What they say',
      titleHighlight: 'say',
      subtitle: 'Words from those who\'ve already worked with us.',
      testimonials: {
        maximiliano: {
          name: 'Maximiliano Peretti',
          company: 'CEO Mushroom mdp',
          role: 'Founder',
          content: 'The platform developed by .js agency allowed us to completely professionalize our equipment rental business. The online booking system and inventory management has been a total change.'
        },
        micaela: {
          name: 'Micaela Díaz',
          company: 'Professional Photography',
          role: 'Photographer',
          content: 'The portfolio that .js agency created for my photography work exceeded all my expectations. Not only is it visually stunning, but visits to my site increased significantly. The elegant design and SEO optimization have helped more clients find me.'
        },
        alejandro: {
          name: 'Alejandro Santanatoglia',
          company: 'Architecture Studio',
          role: 'Architect',
          content: 'The landing page they developed for my architecture studio is perfect. It captures the essence of our work and has generated a notable increase in inquiries from potential clients. The minimalist and professional design reflects exactly what we were looking for.'
        }
      }
    },
    
    // Process Section
    process: {
      title: 'How we work',
      titleHighlight: 'work',
      subtitle: 'Clear processes, no surprises. Each service has its methodology, but they all share something: total transparency.',
      helper: 'Click either button to explore',
      cta: 'Ready to start?',
      ctaButton: 'Let\'s talk →',
      webdev: {
        title: 'Web Development',
        steps: {
          discovery: {
            title: 'Discovery',
            description: 'Requirements analysis, business objectives and project scope definition.'
          },
          design: {
            title: 'Design & Architecture',
            description: 'Wireframes, visual design, user experience and system technical architecture.'
          },
          development: {
            title: 'Development',
            description: 'Programming, integrations, database and project-specific functionalities.'
          },
          testing: {
            title: 'Testing & QA',
            description: 'Functionality, performance, security testing and device compatibility.'
          },
          launch: {
            title: 'Launch',
            description: 'Server deployment, domain configuration, basic SEO and client training.'
          }
        }
      },
      automation: {
        title: 'AI Automations',
        steps: {
          analysis: {
            title: 'Process Analysis',
            description: 'Identification of repetitive tasks and automation opportunities in your business.'
          },
          planning: {
            title: 'Planning',
            description: 'Workflow design, AI tools selection and integration definition.'
          },
          integration: {
            title: 'Implementation',
            description: 'System configuration, script development and connection with existing platforms.'
          },
          training: {
            title: 'Training',
            description: 'Team training, process documentation and knowledge transfer.'
          },
          optimization: {
            title: 'Optimization',
            description: 'Results monitoring, parameter adjustments and continuous process improvement.'
          }
        }
      },
      design: {
        title: 'Virtual Tours',
        steps: {
          consultation: {
            title: 'Consultation and Planning',
            description: 'Needs analysis, spaces to capture and definition of virtual tour objectives.'
          },
          capture: {
            title: '360° Capture',
            description: '360° photography and video with Insta360 X5 in all relevant spaces of the property or establishment.'
          },
          processing: {
            title: 'Processing and Editing',
            description: '360° image stitching, color correction, optimization and creation of navigation points.'
          },
          integration: {
            title: 'Web Integration',
            description: 'Integration of the virtual tour into your website or platform, with intuitive and responsive navigation.'
          },
          delivery: {
            title: 'Delivery and Training',
            description: 'Delivery of the complete tour, usage documentation and training for future updates.'
          }
        }
      },
      aerial: {
        title: 'Aerial Photography',
        steps: {
          planning: {
            title: 'Planning',
            description: 'Site analysis, necessary permits, weather conditions and flight plan.'
          },
          shooting: {
            title: 'Aerial Shooting',
            description: 'Image and video capture with professional drones, multiple angles and resolutions.'
          },
          editing: {
            title: 'Post-Production',
            description: 'Video editing, color correction, stabilization and final content creation.'
          },
          delivery: {
            title: 'Delivery',
            description: 'Files in different formats, delivery platforms and clarified usage rights.'
          }
        }
      }
    },
    
    // About Section
    about: {
      title: 'Who we are',
      titleHighlight: 'are',
      subtitle: 'A team that thinks differently and builds better.',
      description: 'We\'re a digital studio in Almería. We combine code, creativity and strategy to create projects that actually work. No fluff, no empty promises. Just results.',
      content: {
        paragraph1: 'We are a creative startup in Almería: a young team that transforms businesses into modern and effective digital experiences.',
        paragraph2: 'We create your custom website, from scratch and without templates, so it looks professional, loads fast and is ready to appear better on Google and convert visits into clients.',
        paragraph3: 'And we go further: we integrate AI automations, 360 virtual tours and drone content to show your business from a different perspective, generate trust from the first glance and make people decide faster.',
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
          role: 'Virtual Tours',
          name: '360° Production team',
          description: 'Immersive virtual tours with Insta360 X5.'
        },
        strategy: {
          role: 'Strategy & Automation',
          name: 'Specialists',
          description: 'AI flows and integrations.'
        },
        aerial: {
          role: 'Fly by .js agency',
          name: 'Audiovisual team',
          description: 'Aerial photography and video for brands.'
        }
      }
    },
    
    // Divly Showcase Section
    smartcard: {
      badge: 'Our latest project',
      title: 'Do you have a bar or restaurant?',
      subtitle: 'Divly not only provides a digital menu with QR, but now people can easily split their bill by what each person consumed. With the smart divider, each diner pays only for what they actually consumed.',
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
          description: 'Divly automatically calculates how much each diner should pay.'
        }
      },
      cta: 'View Digital Menu',
      consult: 'Consult Project',
      previousStep: 'Previous step',
      nextStep: 'Next step',
      goToStep: 'Go to step {step}'
    },
    
    // Contact Section
    fhoto: {
      hero: {
        title: '360° virtual tours for properties, event venues and more',
        subtitle: 'Professional visual solutions for real estate, event halls, hotels, restaurants and commercial spaces. MatterPort virtual tours and certified drone services that transform spaces into experiences.',
        cta: 'I want a quote',
      },
    },
    contact: {
      title: 'Let\'s talk',
      subtitle: 'Tell us your idea in a few words. We\'ll respond quickly and clearly.',
      response: 'We respond in 24–48h.',
      cta: 'Send message →',
      email: 'Email',
      location: 'Location',
      socialMedia: 'Social Media',
      locationValue: 'Almeria, Spain',
      formTitle: 'Send us a message',
      formName: 'Full name',
      formNamePlaceholder: 'Your full name',
      formEmail: 'Email',
      formEmailPlaceholder: 'your@email.com',
      formPhone: 'Phone',
      formPhonePlaceholder: '+34 123 456 789',
      formMessage: 'Message',
      formMessagePlaceholder: 'Tell us about your project...',
      formSubmit: 'Send message',
      formSubmitting: 'Sending...',
      formSuccess: 'Message sent successfully! We\'ll contact you soon.',
      formError: 'Error sending message. Please try again.',
    },
    
    // Footer
    footer: {
      description: 'Digital solutions with a different perspective.',
      services: 'Services',
      company: 'Company',
      projects: 'Projects',
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
      title: 'Frequently asked questions',
      titleHighlight: 'questions',
      subtitle: 'The answers you\'re looking for, straight to the point.',
      helper: 'Click either button to explore',
      webdev: {
        title: 'Web Development',
        questions: [
          {
            question: 'How long does it take to develop a web project?',
            answer: 'Development time varies depending on project complexity. A simple landing page can take 2-3 weeks, while a complete web application may require 2-4 months. We provide a detailed timeline in the initial proposal.'
          },
          {
            question: 'What does the web development service include?',
            answer: 'Our service includes responsive design, frontend and backend development, system integration, basic technical SEO, performance optimization, and training for site management. We also offer post-launch support.'
          },
          {
            question: 'What technologies do you use?',
            answer: 'We work with modern technologies like React, Node.js, TypeScript, and databases like PostgreSQL and MongoDB. We also use AI tools for automation and optimization.'
          },
          {
            question: 'Do you offer maintenance after launch?',
            answer: 'Yes, we offer maintenance plans that include security updates, backups, monitoring, and technical support. We can also add new features according to your business needs.'
          }
        ]
      },
      design: {
        title: 'Virtual Tours',
        questions: [
          {
            question: 'What does a 360° virtual tour include?',
            answer: 'It includes 360° image capture with Insta360 X5 in all relevant spaces, image processing and stitching, color correction, navigation point creation, and complete integration into your website or platform.'
          },
          {
            question: 'How long does it take to create a virtual tour?',
            answer: 'Time depends on the size of the space. For a small property (2-3 rooms) it can take 1-2 weeks. For hotels or large establishments it may require 3-4 weeks including capture, processing and integration.'
          },
          {
            question: 'Can I update the virtual tour later?',
            answer: 'Yes, we offer virtual tour updates. You can add new spaces or modify existing ones. We provide training so you can make basic updates or we can do them for you.'
          },
          {
            question: 'Does it work on mobile devices?',
            answer: 'Yes, our virtual tours are completely responsive and work perfectly on smartphones, tablets and computers. The experience is immersive on all devices.'
          }
        ]
      },
      aerial: {
        title: 'Drone Services',
        questions: [
          {
            question: 'What drone services do you offer?',
            answer: 'We offer real estate aerial photography, corporate drone videos, land mapping and measurement, and aerial advertising content. All our operators are A1/A3 certified and registered.'
          },
          {
            question: 'How long does it take to deliver drone services?',
            answer: 'After capture, drone services are typically delivered in 5-7 business days. This includes editing, color correction, stabilization and delivery in requested formats.'
          },
          {
            question: 'Do you need special permits to fly?',
            answer: 'Yes, we manage all necessary permits before each flight. Our operators are certified and comply with all current regulations. We inform you of any restrictions before the session.'
          },
          {
            question: 'What delivery formats do you offer?',
            answer: 'We deliver content in different formats according to your needs: high-resolution images (RAW and JPG), 4K videos, web-optimized formats, and files ready for print or social media.'
          }
        ]
      },
      ai: {
        title: 'AI Automation',
        questions: [
          {
            question: 'What type of AI automations can you create?',
            answer: 'We create conversational chatbots, customer service agents, business process automation, AI tool integration, and intelligent systems that optimize repetitive workflows.'
          },
          {
            question: 'How long does it take to implement an automation?',
            answer: 'Depends on complexity. A basic chatbot can be running in 2-3 weeks, while complex automation systems may require 1-2 months. We provide a detailed timeline in the proposal.'
          },
          {
            question: 'Do I need technical knowledge to use automations?',
            answer: 'No, we design automations to be easy to use. We provide complete training and documentation. We also offer ongoing support for any questions or updates.'
          },
          {
            question: 'Can they integrate with my existing systems?',
            answer: 'Yes, our automations integrate with most popular business systems (CRM, ERP, e-commerce platforms, etc.). We analyze your current systems and design the most suitable integration.'
          }
        ]
      },
      cta: 'Still not clear?',
      ctaButton: 'Let\'s talk →'
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
