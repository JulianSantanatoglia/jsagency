import ServicePageTemplate from '../components/ServicePageTemplate';
import { Camera, MapPin, Share2, Smartphone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const VirtualVisits = () => {
  const { t, getTranslation } = useLanguage();
  const content = getTranslation('servicePages.tours') || {};
  const benefitIcons = [Camera, Share2, Smartphone, MapPin];

  type BenefitContent = { title: string; description: string };
  const benefits =
    (content.benefits as BenefitContent[] | undefined)?.map((b, i: number) => ({
      ...b,
      icon: benefitIcons[i] ?? Camera,
    })) ?? [
    {
      title: 'Experiencias inmersivas',
      description: 'Captura 360° profesional con Insta360 y edición lista para compartir en web y redes.',
      icon: Camera,
    },
    {
      title: 'Publicación y difusión',
      description: 'Entregamos versiones optimizadas para Google Street View, Matterport y tu sitio web.',
      icon: Share2,
    },
    {
      title: 'Listo para vender',
      description: 'CTAs, links y códigos QR para que los usuarios contacten o reserven en un click.',
      icon: Smartphone,
    },
    {
      title: 'Cobertura de espacios',
      description: 'Ideal para inmobiliarias, hoteles, restaurantes, eventos y espacios corporativos.',
      icon: MapPin,
    },
  ];

  const pricing = content.pricing ?? [
    {
      name: 'Esencial',
      price: '€250',
      description: 'Sesión 360° para un espacio pequeño o vivienda.',
      features: [
        '1 localización hasta 150 m²',
        'Entrega en 3-5 días',
        'Exportación para web y QR',
        'Asesoría de publicación',
      ],
    },
    {
      name: 'Destacado',
      price: '€420',
      description: 'Tour completo para propiedades o negocios que necesitan destacar.',
      features: [
        'Hasta 400 m² + 2 escenas exteriores',
        'Versión Matterport / Street View',
        'Inserción en tu web y redes',
        'CTA y links de contacto',
      ],
      recommended: true,
    },
    {
      name: 'Enterprise',
      price: '€720',
      description: 'Coberturas amplias o por franjas horarias, ideal para hoteles o eventos.',
      features: [
        'Zonas ilimitadas en una misma sede',
        'Entrega prioritaria en 48h',
        'Material adicional (stills + clips)',
        'Paquete de QR y anuncios listos',
      ],
    },
  ];

  return (
    <ServicePageTemplate
      id="virtual-visits"
      whyTitle={t('why.tours.title')}
      whyContent={t('why.tours.content')}
      subtitle={content.subtitle ?? 'Visitas virtuales'}
      tools={content.tools ?? ['Insta 360', 'Matterport', 'Google Street View', 'CTA & QR']}
      benefits={benefits}
      pricing={pricing}
      highlights={content.highlights ?? [
        'Captura y edición profesional',
        'Listo para web, QR y Street View',
        'CTA para reservas y leads',
      ]}
      ctaLabel={content.ctaLabel ?? 'Quiero mi visita virtual'}
      mockupImage="/images/proyectos/360.jpg"
      heroImage="/images/mobile/matterport.png"
    />
  );
};

export default VirtualVisits;
