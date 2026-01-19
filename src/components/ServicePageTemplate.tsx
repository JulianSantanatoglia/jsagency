import { type ReactElement } from 'react';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight, Check } from 'lucide-react';
import Contact from './Contact';
import PatternBackground from './PatternBackground';
import iPhoneMockup from './iPhoneMockup';
import OptimizedImage from './OptimizedImage';

type Benefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
};

type ServicePageTemplateProps = {
  id: string;
  whyTitle: string;
  whyContent: string;
  subtitle: string;
  heroGradient: string;
  tools: string[];
  benefits: Benefit[];
  pricing: PricingPlan[];
  highlights?: string[];
  ctaLabel?: string;
  mockupImage: string;
  heroImage?: string; // Imagen adicional para el hero (opcional)
};

const ServicePageTemplate = ({
  id,
  whyTitle,
  whyContent,
  subtitle,
  heroGradient,
  tools,
  benefits,
  pricing,
  highlights = [],
  ctaLabel = 'Habla con nosotros',
  mockupImage,
  heroImage,
}: ServicePageTemplateProps): ReactElement => {
  return (
    <div className="relative bg-[#FAF9F7] dark:bg-slate-900 min-h-screen">
      <PatternBackground opacity={0.04} />
      
      {/* Top anchor for scroll */}
      <div id="top" className="absolute top-0"></div>

      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-32 md:pb-24 px-4 md:px-8 bg-[#FAF9F7] dark:bg-slate-900">
        <PatternBackground opacity={0.04} />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-cyan/10 text-accent-cyan text-sm font-semibold mb-6">
                {subtitle}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-primary-dark dark:text-white leading-tight mb-6">
                {whyTitle}
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                {whyContent}
              </p>
              {highlights.length > 0 && (
                <div className="flex flex-wrap gap-3 mb-8">
                  {highlights.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-semibold border border-slate-200 dark:border-slate-700"
                    >
                      <Check size={16} className="text-accent-cyan" />
                      {item}
                    </span>
                  ))}
                </div>
              )}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-cyan text-white font-semibold shadow-lg shadow-cyan-500/20 hover:bg-cyan-500 hover:shadow-xl hover:shadow-cyan-500/30 transition-all"
                >
                  {ctaLabel}
                  <ArrowRight size={16} />
                </a>
                <a
                  href="#planes"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  Ver planes
                </a>
              </div>
            </div>
            
            {/* Hero Image or iPhone Mockup */}
            <div className="flex justify-center lg:justify-end">
              {heroImage ? (
                <div className="relative w-full max-w-xs md:max-w-sm">
                  <img
                    src={heroImage}
                    alt={subtitle}
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-300"
                    loading="eager"
                    style={{ 
                      backgroundColor: 'transparent',
                      mixBlendMode: 'normal'
                    }}
                  />
                </div>
              ) : (
                <iPhoneMockup 
                  image={mockupImage}
                  alt={`${subtitle} en móvil`}
                  className="transform hover:scale-105 transition-transform duration-300"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id={id} className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-sm font-semibold text-accent-cyan uppercase tracking-[0.18em] mb-2">Resultados</p>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-dark dark:text-white leading-tight">
                ¿Qué obtienes con este servicio?
              </h2>
            </div>
            <a
              href="#planes"
              className="inline-flex items-center gap-2 text-accent-cyan font-semibold hover:text-cyan-500"
            >
              Ir a precios
              <ArrowRight size={16} />
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article
                  key={benefit.title}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/60 p-6 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-cyan-500/20 text-accent-cyan flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-primary-dark dark:text-white">{benefit.title}</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white/70 dark:bg-slate-800/60 border-y border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <p className="text-sm font-semibold text-accent-cyan uppercase tracking-[0.18em] mb-1">Herramientas</p>
              <h3 className="text-2xl font-bold font-display text-primary-dark dark:text-white">
                Stack que usamos para entregar calidad
              </h3>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="planes" className="py-16 md:py-24 px-4 md:px-8 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-accent-cyan uppercase tracking-[0.18em] mb-2">Precios claros</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-dark dark:text-white mb-3">
              Elige el plan que mejor encaje
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Planes con todo lo necesario para lanzar y optimizar este servicio. Siempre puedes escalar o personalizar.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((plan) => (
              <article
                key={plan.name}
                className={`relative rounded-2xl border p-6 bg-white dark:bg-slate-800/70 shadow-sm hover:shadow-xl transition-shadow ${
                  plan.recommended
                    ? 'border-accent-cyan shadow-cyan-200/50 dark:shadow-cyan-900/40'
                    : 'border-slate-200 dark:border-slate-700'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-cyan text-white px-4 py-1 rounded-full text-xs font-semibold">
                    Recomendado
                  </div>
                )}
                <h3 className="text-2xl font-bold text-primary-dark dark:text-white mb-2">{plan.name}</h3>
                <p className="text-slate-500 dark:text-slate-300 mb-4">{plan.description}</p>
                <p className="text-3xl font-bold text-primary-dark dark:text-white mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-slate-700 dark:text-slate-200">
                      <Check className="mt-0.5 h-5 w-5 text-accent-cyan" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-colors ${
                    plan.recommended
                      ? 'bg-accent-cyan text-white hover:bg-cyan-500'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
                >
                  Hablar de este plan
                  <ArrowRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <Contact />
    </div>
  );
};

export default ServicePageTemplate;
