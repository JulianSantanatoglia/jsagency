import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Instagram, Mail, Phone, MessageSquare, User } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Aquí iría la lógica de envío del formulario
      // Por ahora simulamos un envío exitoso
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="relative py-24 md:py-32 px-4 md:px-8 bg-gradient-to-br from-primary-dark to-slate-800 text-white overflow-hidden">
      {/* Ondulación superior para transición suave desde FAQ - Solo visible en light mode */}
      <div className="absolute top-0 left-0 w-full z-10 dark:hidden">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-auto block"
          style={{ marginTop: '-1px' }}
        >
          <path
            d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,0 L0,0 Z"
            fill="#FAF9F7"
          />
        </svg>
      </div>
      <div className="relative z-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          <ScrollReveal direction="left" delay={0}>
            <div className="flex flex-col gap-4 md:gap-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-4 tracking-tight">
                {t('contact.title')}
              </h2>
              <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-body font-light">
                {t('contact.subtitle')}
              </p>
              <p className="text-sm md:text-base text-accent-cyan font-semibold font-body">
                {t('contact.response')}
              </p>
              <div className="flex flex-col gap-6 md:gap-10 mt-4">
                <div className="pb-6 border-b border-white/10">
                  <div className="text-xs font-semibold uppercase tracking-wider text-accent-cyan mb-2 font-body">
                    {t('contact.email')}
                  </div>
                  <div className="text-xl font-semibold text-white font-display">
                    hola@jsagency.com
                  </div>
                </div>
                <div className="pb-6 border-b border-white/10">
                  <div className="text-xs font-semibold uppercase tracking-wider text-accent-cyan mb-2 font-body">
                    {t('contact.location')}
                  </div>
                  <div className="text-xl font-semibold text-white font-display">
                    {t('contact.locationValue')}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-accent-cyan mb-4 font-body">
                    {t('contact.socialMedia')}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href="https://instagram.com/jsagencyteam" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-accent-cyan transition-colors group"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      <span className="text-lg font-semibold font-display">Instagram</span>
                    </a>
                    <a 
                      href="https://tiktok.com/@jsagencyteam" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-accent-cyan transition-colors group"
                      aria-label="TikTok"
                    >
                      <svg className="w-6 h-6 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                      <span className="text-lg font-semibold font-display">TikTok</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={100}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold font-display text-white mb-4">
                {t('contact.formTitle')}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-white/90 font-body">
                    {t('contact.formName')} *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all font-body"
                      placeholder={t('contact.formNamePlaceholder')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-white/90 font-body">
                    {t('contact.formEmail')} *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all font-body"
                      placeholder={t('contact.formEmailPlaceholder')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-white/90 font-body">
                    {t('contact.formPhone')}
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all font-body"
                      placeholder={t('contact.formPhonePlaceholder')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-white/90 font-body">
                    {t('contact.formMessage')} *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-white/60" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all font-body resize-none"
                      placeholder={t('contact.formMessagePlaceholder')}
                    />
                  </div>
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 text-green-200 text-sm font-body">
                    {t('contact.formSuccess')}
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-4 text-red-200 text-sm font-body">
                    {t('contact.formError')}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent-cyan text-white font-semibold py-4 px-6 rounded-xl hover:bg-cyan-600 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed font-body text-lg"
                >
                  {isSubmitting ? t('contact.formSubmitting') : t('contact.formSubmit')}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;

