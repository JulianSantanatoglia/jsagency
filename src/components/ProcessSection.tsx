import { useLanguage } from '../contexts/LanguageContext';
import { Monitor, Zap, Camera, Video } from 'lucide-react';

interface ProcessSectionProps {
  serviceId: 'webdev' | 'design' | 'aerial' | 'automation';
  darkMode?: boolean;
}

const ProcessSection = ({ serviceId, darkMode = false }: ProcessSectionProps) => {
  const { t } = useLanguage();

  const processes = {
    webdev: {
      title: t('process.webdev.title'),
      icon: Monitor,
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-600',
      steps: [
        {
          number: '01',
          title: t('process.webdev.steps.discovery.title'),
          description: t('process.webdev.steps.discovery.description')
        },
        {
          number: '02',
          title: t('process.webdev.steps.design.title'),
          description: t('process.webdev.steps.design.description')
        },
        {
          number: '03',
          title: t('process.webdev.steps.development.title'),
          description: t('process.webdev.steps.development.description')
        },
        {
          number: '04',
          title: t('process.webdev.steps.testing.title'),
          description: t('process.webdev.steps.testing.description')
        },
        {
          number: '05',
          title: t('process.webdev.steps.launch.title'),
          description: t('process.webdev.steps.launch.description')
        }
      ]
    },
    design: {
      title: t('process.design.title'),
      icon: Video,
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-600',
      steps: [
        {
          number: '01',
          title: t('process.design.steps.consultation.title'),
          description: t('process.design.steps.consultation.description')
        },
        {
          number: '02',
          title: t('process.design.steps.capture.title'),
          description: t('process.design.steps.capture.description')
        },
        {
          number: '03',
          title: t('process.design.steps.processing.title'),
          description: t('process.design.steps.processing.description')
        },
        {
          number: '04',
          title: t('process.design.steps.integration.title'),
          description: t('process.design.steps.integration.description')
        },
        {
          number: '05',
          title: t('process.design.steps.delivery.title'),
          description: t('process.design.steps.delivery.description')
        }
      ]
    },
    aerial: {
      title: t('process.aerial.title'),
      icon: Camera,
      color: 'orange',
      gradient: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-600',
      steps: [
        {
          number: '01',
          title: t('process.aerial.steps.planning.title'),
          description: t('process.aerial.steps.planning.description')
        },
        {
          number: '02',
          title: t('process.aerial.steps.shooting.title'),
          description: t('process.aerial.steps.shooting.description')
        },
        {
          number: '03',
          title: t('process.aerial.steps.editing.title'),
          description: t('process.aerial.steps.editing.description')
        },
        {
          number: '04',
          title: t('process.aerial.steps.delivery.title'),
          description: t('process.aerial.steps.delivery.description')
        }
      ]
    },
    automation: {
      title: t('process.automation.title'),
      icon: Zap,
      color: 'emerald',
      gradient: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      textColor: 'text-emerald-600',
      steps: [
        {
          number: '01',
          title: t('process.automation.steps.analysis.title'),
          description: t('process.automation.steps.analysis.description')
        },
        {
          number: '02',
          title: t('process.automation.steps.planning.title'),
          description: t('process.automation.steps.planning.description')
        },
        {
          number: '03',
          title: t('process.automation.steps.integration.title'),
          description: t('process.automation.steps.integration.description')
        },
        {
          number: '04',
          title: t('process.automation.steps.training.title'),
          description: t('process.automation.steps.training.description')
        },
        {
          number: '05',
          title: t('process.automation.steps.optimization.title'),
          description: t('process.automation.steps.optimization.description')
        }
      ]
    }
  };

  const processData = processes[serviceId];

  return (
    <div className="w-full">
      {/* Process Steps */}
      <div className="flex flex-col gap-4 md:gap-6">
        {processData.steps.map((step, index) => (
          <div 
            key={index} 
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 items-center sm:items-start ${
              darkMode 
                ? `bg-slate-800/30 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-slate-700/50` 
                : `bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border-2 ${processData.borderColor} hover-lift hover:shadow-lg`
            } transition-all duration-300 animate-fade-in-up`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`text-2xl md:text-3xl font-extrabold font-display ${processData.textColor} opacity-30 flex-shrink-0`}>
              {step.number}
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className={`text-lg md:text-xl font-bold font-display mb-2 ${
                darkMode ? 'text-white' : 'text-primary-dark'
              }`}>
                {step.title}
              </h3>
              <p className={`text-sm md:text-base leading-relaxed font-body ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSection;

