import SmartCardShowcase from '../components/SmartCardShowcase';
import ScrollReveal from '../components/ScrollReveal';
import Contact from '../components/Contact';
import PatternBackground from '../components/PatternBackground';

const Divly = () => {

  return (
    <div className="min-h-screen bg-[#FAF9F7] relative">
      {/* Pattern Background */}
      <PatternBackground opacity={0.03} />
      
      {/* Hero del proyecto */}
      <section className="relative pt-24 pb-16 px-4 md:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" delay={0}>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-primary-dark tracking-tight">
                Divly by .js agency
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-body font-light leading-relaxed">
                Carta digital inteligente con divisor para comensales. Diseñada específicamente para establecimientos gastronómicos.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Problema → Solución → Resultado */}
      <section className="relative py-16 px-4 md:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold font-display mb-4 text-primary-dark">
                  El Problema
                </h3>
                <p className="text-slate-600 leading-relaxed font-body">
                  Dividir cuentas en bares y restaurantes siempre genera conflictos. Algunos comensales terminan pagando más de lo que consumieron, mientras otros pagan menos.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.2}>
              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold font-display mb-4 text-primary-dark">
                  La Solución
                </h3>
                <p className="text-slate-600 leading-relaxed font-body">
                  Divly permite que cada comensal marque individualmente lo que consumió. El sistema calcula automáticamente cuánto debe pagar cada persona, eliminando discusiones.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.3}>
              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold font-display mb-4 text-primary-dark">
                  El Resultado
                </h3>
                <p className="text-slate-600 leading-relaxed font-body">
                  Experiencia mejorada para clientes, menos tiempo en caja para el personal, y mayor satisfacción general. Un sistema simple que resuelve un problema real.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* El componente "Nuestro último proyecto" */}
      <div className="relative z-10">
        <SmartCardShowcase />
      </div>

      {/* CTA final */}
      <section className="relative py-16 px-4 md:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="up" delay={0}>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-primary-dark">
              ¿Quieres algo similar para tu negocio?
            </h2>
            <p className="text-lg text-slate-600 mb-8 font-body">
              Hablemos de tu proyecto y cómo podemos ayudarte.
            </p>
            <a
              href="#contacto"
              className="inline-block px-8 py-4 bg-accent-cyan text-white font-semibold text-lg rounded-xl hover:bg-cyan-600 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 font-body"
            >
              Hablemos
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact section */}
      <div className="relative z-10">
        <Contact />
      </div>
    </div>
  );
};

export default Divly;

