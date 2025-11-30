import { Smartphone, Music, Paintbrush, BarChart3, Monitor, Video } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Portfolio = () => {
  const { t } = useLanguage();
  const projects = [
    {
      title: t('portfolio.projects.smartCard.title'),
      category: t('portfolio.projects.smartCard.category'),
      description: t('portfolio.projects.smartCard.description'),
      icon: Smartphone,
      technologies: ["React", "Vite", "TailwindCSS"],
      link: "https://bar-de-tapas.netlify.app",
      featured: true
    },
    {
      title: t('portfolio.projects.mushroom.title'),
      category: t('portfolio.projects.mushroom.category'),
      description: t('portfolio.projects.mushroom.description'),
      icon: Music,
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://mushroommdp.com",
      featured: true
    },
    {
      title: t('portfolio.projects.designStudio.title'),
      category: t('portfolio.projects.designStudio.category'),
      description: t('portfolio.projects.designStudio.description'),
      icon: Paintbrush,
      technologies: ["React", "Framer Motion", "GSAP"],
      link: "#",
      featured: false
    },
    {
      title: t('portfolio.projects.innovateLab.title'),
      category: t('portfolio.projects.innovateLab.category'),
      description: t('portfolio.projects.innovateLab.description'),
      icon: BarChart3,
      technologies: ["React", "Chart.js", "Firebase"],
      link: "#",
      featured: false
    },
    {
      title: t('portfolio.projects.restaurantApp.title'),
      category: t('portfolio.projects.restaurantApp.category'),
      description: t('portfolio.projects.restaurantApp.description'),
      icon: Monitor,
      technologies: ["React Native", "Expo", "Firebase"],
      link: "#",
      featured: false
    },
    {
      title: t('portfolio.projects.brandIdentity.title'),
      category: t('portfolio.projects.brandIdentity.category'),
      description: t('portfolio.projects.brandIdentity.description'),
      icon: Video,
      technologies: ["Insta360 X5", "360° Tour", "Web Integration"],
      link: "#",
      featured: false
    }
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display mb-4 text-primary-dark">
            {t('portfolio.title')}
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-body px-4">
            {t('portfolio.subtitle')}
          </p>
        </div>
        
        {/* Proyectos destacados */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold font-display mb-8 text-primary-dark dark:text-white text-center">
            {t('portfolio.featured')}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-slate-50 to-white dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl border border-slate-200 dark:border-gray-600 hover-lift hover:border-accent-cyan hover:shadow-accent-cyan/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-6">
                  <project.icon size={32} className="text-accent-cyan" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-accent-cyan mb-2 font-body">
                  {project.category}
                </div>
                <h4 className="text-2xl font-bold font-display mb-4 text-primary-dark dark:text-white">
                  {project.title}
                </h4>
                <p className="text-slate-600 dark:text-gray-300 mb-6 leading-relaxed font-body">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-accent-cyan/10 text-accent-cyan text-xs font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent-cyan hover:text-cyan-600 font-semibold text-sm transition-colors"
                >
                  {t('portfolio.seeProject')}
                </a>
              </div>
            ))}
          </div>
        </div>
        
        {/* Grid de todos los proyectos */}
        <div>
          <h3 className="text-2xl font-bold font-display mb-8 text-primary-dark dark:text-white text-center">
            {t('portfolio.all')}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-slate-50 dark:bg-gray-700 p-6 rounded-xl border border-slate-200 dark:border-gray-600 hover-lift hover:border-accent-cyan hover:shadow-accent-cyan/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <project.icon size={24} className="text-accent-cyan" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-accent-cyan mb-2 font-body">
                  {project.category}
                </div>
                <h4 className="text-lg font-bold font-display mb-3 text-primary-dark dark:text-white">
                  {project.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-gray-300 mb-4 leading-relaxed font-body">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-accent-cyan/10 text-accent-cyan text-xs font-medium rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent-cyan hover:text-cyan-600 font-semibold text-xs transition-colors"
                >
                  {t('portfolio.seeProject')}
                </a>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-slate-600 dark:text-gray-300 font-body mb-6">
            {t('portfolio.like')}
          </p>
          <a 
            href="#contacto" 
            className="inline-block px-8 py-4 bg-accent-cyan text-white font-semibold text-lg rounded-xl hover-lift shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 font-body"
          >
            {t('portfolio.cta')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
