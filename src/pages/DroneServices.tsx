import ServicePageTemplate from '../components/ServicePageTemplate';
import { Camera, Film, Shield, Wind } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const DroneServices = () => {
  const { t, getTranslation } = useLanguage();
  const content = getTranslation('servicePages.drone') || {};
  const benefitIcons = [Film, Camera, Shield, Wind];

  const benefits =
    content.benefits?.map((b, i) => ({
      ...b,
      icon: benefitIcons[i] ?? Film,
    })) ?? [
    {
      title: 'Tomas aéreas cinematográficas',
      description: 'Planificamos vuelos para conseguir planos fluidos, seguros y listos para tus campañas.',
      icon: Film,
    },
    {
      title: 'Edición profesional',
      description: 'Color, música y gráficos ligeros en Adobe Premiere y After Effects para entregar piezas finales.',
      icon: Camera,
    },
    {
      title: 'Cumplimiento y seguridad',
      description: 'Piloto certificado A1/A3, registro vigente y gestión de permisos cuando es necesario.',
      icon: Shield,
    },
    {
      title: 'Versátil para múltiples usos',
      description: 'Inmobiliaria, turismo, eventos, inspecciones ligeras y contenido para redes sociales.',
      icon: Wind,
    },
  ];

  const pricing = content.pricing ?? [
    {
      name: 'Clip Social',
      price: '€220',
      description: 'Grabación corta para redes y anuncios.',
      features: [
        'Vuelo de hasta 1h en una localización',
        '2 clips verticales y 1 horizontal',
        'Color básico y música con licencia',
        'Entrega en 3 días',
      ],
    },
    {
      name: 'Proyecto Pro',
      price: '€420',
      description: 'Producción completa para propiedades o eventos.',
      features: [
        'Hasta 2h de vuelo + tomas en tierra',
        'Edición final 60-90s + 3 cortes sociales',
        'Corrección de color y gráficos ligeros',
        'Entrega en 4-6 días',
      ],
      recommended: true,
    },
    {
      name: 'Producción Plus',
      price: '€720',
      description: 'Cobertura avanzada o multi-ubicación con storytelling.',
      features: [
        'Media jornada de rodaje (o 2 localizaciones)',
        'Storyboard y plan de rodaje',
        'After Effects para títulos/overlays',
        'Entrega prioritaria y 2 rondas de cambios',
      ],
    },
  ];

  return (
    <ServicePageTemplate
      id="drone-services"
      whyTitle={t('why.drone.title')}
      whyContent={t('why.drone.content')}
      subtitle={content.subtitle ?? 'Servicios de drone'}
      tools={content.tools ?? ['DJI', 'Adobe Premiere', 'After Effects', 'Licencias y permisos']}
      benefits={benefits}
      pricing={pricing}
      highlights={content.highlights ?? [
        'Piloto certificado y registro vigente',
        'Entrega optimizada para redes y web',
        'Planificación y permisos incluidos',
      ]}
      ctaLabel={content.ctaLabel ?? 'Quiero contenido aéreo'}
      mockupImage="/images/proyectos/inmobiliaria.jpg"
      heroImage="/images/mobile/serviciosdedrone.png"
    />
  );
};

export default DroneServices;
