import ScrollReveal from '../components/ScrollReveal';
import PatternBackground from '../components/PatternBackground';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F7] dark:bg-slate-900 relative pt-24 pb-16">
      <PatternBackground opacity={0.04} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <ScrollReveal direction="up" delay={0}>
          <header className="text-center mb-16 pt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-primary-dark dark:text-white tracking-tight">
              <span className="text-accent-cyan">Contactanos</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-body">
              Hablemos de tu proyecto y cómo podemos ayudarte.
            </p>
          </header>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;