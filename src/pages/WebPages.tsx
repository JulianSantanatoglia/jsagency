import ServicePageTemplate from '../components/ServicePageTemplate';
import { MonitorSmartphone, Rocket, Search, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WebPages = () => {
  const { t, getTranslation } = useLanguage();
  const content = getTranslation('servicePages.webdev') || {};
  const benefitIcons = [Rocket, Search, MonitorSmartphone, Shield];

  const benefits =
    content.benefits?.map((b, i) => ({
      ...b,
      icon: benefitIcons[i] ?? Rocket,
    })) ?? [
    {
      title: 'Sitios rápidos y seguros',
      description: 'Construimos con buenas prácticas de performance, seguridad y accesibilidad para maximizar conversiones y confianza.',
      icon: Rocket,
    },
    {
      title: 'SEO técnico listo',
      description: 'Estructura optimizada, metadatos y Core Web Vitals para aparecer antes en Google y captar más leads.',
      icon: Search,
    },
    {
      title: 'Diseño responsive',
      description: 'Experiencia fluida en móvil, tablet y escritorio con diseño alineado a tu marca y CTA claros.',
      icon: MonitorSmartphone,
    },
    {
      title: 'Soporte y evolutivos',
      description: 'Acompañamiento posterior para mejoras, analítica y nuevas secciones cuando las necesites.',
      icon: Shield,
    },
  ];

  const pricing = content.pricing ?? [
    {
      name: 'Lanzamiento',
      price: '€499',
      description: 'Landing o sitio one-page optimizado para captar leads.',
      features: [
        '1-3 secciones clave + blog opcional',
        'Copy y estructura orientada a conversión',
        'Integración de formularios y WhatsApp',
        'Entrega en 10-12 días',
      ],
    },
    {
      name: 'Crecimiento',
      price: '€899',
      description: 'Sitio corporativo completo con SEO técnico y analítica.',
      features: [
        'Hasta 6 páginas (servicios, equipo, blog, contacto)',
        'Animaciones ligeras y componentes reutilizables',
        'Optimización Core Web Vitals y schema',
        'Dashboard de analítica y heatmaps',
      ],
      recommended: true,
    },
    {
      name: 'Performance Plus',
      price: '€1,400',
      description: 'Proyecto a medida con integraciones y soporte extendido.',
      features: [
        'Arquitectura escalable + tests básicos',
        'Integraciones (CRM, booking, pagos, API)',
        '12 semanas de soporte y mejoras',
        'Entrenamiento para tu equipo',
      ],
    },
  ];

  return (
    <ServicePageTemplate
      id="web-pages"
      whyTitle={t('why.webdev.title')}
      whyContent={t('why.webdev.content')}
      subtitle={content.subtitle ?? 'Páginas web'}
      heroGradient="from-blue-600 via-cyan-500 to-blue-700"
      tools={content.tools ?? ['HTML', 'CSS', 'React', 'JavaScript']}
      benefits={benefits}
      pricing={pricing}
      highlights={content.highlights ?? [
        'Core Web Vitals optimizadas',
        'Copy y UX orientados a conversión',
        'Listo para campañas y analítica',
      ]}
      ctaLabel={content.ctaLabel ?? 'Quiero mi nueva web'}
      mockupImage="/images/proyectos/mushroommdp.jpg"
      heroImage="/images/mobile/paginasweb.png"
    />
  );
};

export default WebPages;
