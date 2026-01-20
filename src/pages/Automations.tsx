import ServicePageTemplate from '../components/ServicePageTemplate';
import { Bot, MessageSquare, TimerReset, Workflow } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Automations = () => {
  const { t, getTranslation } = useLanguage();
  const content = getTranslation('servicePages.ai') || {};
  const benefitIcons = [Bot, Workflow, MessageSquare, TimerReset];

  type BenefitContent = { title: string; description: string };
  const benefits =
    (content.benefits as BenefitContent[] | undefined)?.map((b, i: number) => ({
      ...b,
      icon: benefitIcons[i] ?? Bot,
    })) ?? [
    {
      title: 'Más ventas sin más trabajo',
      description: 'Automatizamos captación, scoring y seguimiento de leads con flujos claros y trazables.',
      icon: Bot,
    },
    {
      title: 'Integraciones reales',
      description: 'Conectamos APIs, WhatsApp, Sheets y tus sistemas internos para que todo hable entre sí.',
      icon: Workflow,
    },
    {
      title: 'Respuesta inmediata',
      description: 'Bots y mensajes programados que contestan al momento y evitan perder oportunidades.',
      icon: MessageSquare,
    },
    {
      title: 'Ahorro de horas',
      description: 'Eliminamos tareas repetitivas con flujos n8n y dashboards sencillos para tu equipo.',
      icon: TimerReset,
    },
  ];

  const pricing = content.pricing ?? [
    {
      name: 'Starter',
      price: '€350',
      description: 'Automatización puntual para un proceso clave.',
      features: [
        '1 flujo n8n (ej. lead → CRM → notificación)',
        'Plantilla de mensajes/WhatsApp',
        'Checklist de operación',
        'Entrega en 7-10 días',
      ],
    },
    {
      name: 'Growth',
      price: '€650',
      description: 'Automatización completa de captación y seguimiento.',
      features: [
        '3-4 flujos (captura, scoring, reminders, CRM)',
        'Bots/plantillas para WhatsApp o email',
        'Panel en Sheets con métricas clave',
        '2 semanas de soporte y ajustes',
      ],
      recommended: true,
    },
    {
      name: 'Ops Suite',
      price: '€1,100',
      description: 'Stack operativo a medida con integraciones avanzadas.',
      features: [
        'Flujos ilimitados (según alcance acordado)',
        'APIs personalizadas y webhooks',
        'Entrenamiento de equipo + manuales',
        'Soporte 30 días y mejoras',
      ],
    },
  ];

  return (
    <ServicePageTemplate
      id="automations"
      whyTitle={t('why.ai.title')}
      whyContent={t('why.ai.content')}
      subtitle={content.subtitle ?? 'Automatizaciones'}
      tools={content.tools ?? ['n8n', 'API', 'WhatsApp', 'Sheets']}
      benefits={benefits}
      pricing={pricing}
      highlights={content.highlights ?? [
        'Bots y flujos multicanal',
        'Integraciones con tus sistemas',
        'Métricas y alertas en tiempo real',
      ]}
      ctaLabel={content.ctaLabel ?? 'Automatizar mi proceso'}
      mockupImage="/images/proyectos/automatizacion.jpg"
      heroImage="/images/mobile/automatizacion.png"
    />
  );
};

export default Automations;
