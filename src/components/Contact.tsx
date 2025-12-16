import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Instagram, Mail, Phone, MessageSquare, User } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import PatternBackground from './PatternBackground';
import { useReCaptcha } from '../hooks/useReCaptcha';

const Contact = () => {
  const { t } = useLanguage();
  const { executeRecaptcha } = useReCaptcha();
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
      // Ejecutar reCAPTCHA
      const recaptchaToken = await executeRecaptcha('contact_form');
      
      if (!recaptchaToken) {
        setSubmitStatus('error');
        setIsSubmitting(false);
        return;
      }

      // Aquí iría la lógica de envío del formulario
      // Incluir el token de reCAPTCHA en el payload
      const response = await fetch('/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="relative py-24 md:py-32 px-4 md:px-8 bg-gradient-to-br from-primary-dark via-slate-800 to-slate-900 text-white overflow-hidden">
      <PatternBackground opacity={0.06} />
      
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
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start pt-8 md:pt-12">
          <ScrollReveal direction="left" delay={0}>
            <div className="flex flex-col gap-6 md:gap-8">
              <div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-6 tracking-tight leading-tight">
                  {t('contact.title')}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-transparent mb-6"></div>
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-body font-light mb-4">
                  {t('contact.subtitle')}
                </p>
                <p className="text-base md:text-lg text-accent-cyan font-semibold font-body">
                  {t('contact.response')}
                </p>
              </div>
              
              <div className="flex flex-col gap-6 md:gap-8 mt-6">
                {/* Cards de contacto modernos */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="text-xs font-bold uppercase tracking-wider text-accent-cyan mb-3 font-body flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    {t('contact.email')}
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-white font-display">
                    hola@jsagency.com
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="text-xs font-bold uppercase tracking-wider text-accent-cyan mb-3 font-body flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    {t('contact.location')}
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-white font-display">
                    {t('contact.locationValue')}
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-accent-cyan mb-4 font-body">
                    {t('contact.socialMedia')}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="https://instagram.com/jsagencyteam" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center bg-gradient-to-r from-pink-500/20 to-purple-500/20 hover:from-pink-500/30 hover:to-purple-500/30 border border-pink-500/30 rounded-xl w-12 h-12 transition-all duration-300 hover:scale-110"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </a>
                    <a 
                      href="https://tiktok.com/@jsagencyteam" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-500/30 rounded-xl w-12 h-12 transition-all duration-300 hover:scale-110"
                      aria-label="TikTok"
                    >
                      <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={100}>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl border-2 border-white/20 p-6 md:p-10 shadow-2xl overflow-hidden">
              {/* Efectos decorativos */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-cyan/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold font-display text-white mb-2">
                  {t('contact.formTitle')}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-accent-cyan to-transparent mb-6"></div>
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
                  className="group relative w-full bg-gradient-to-r from-accent-cyan to-cyan-500 text-white font-bold py-5 px-6 rounded-2xl hover:from-cyan-600 hover:to-accent-cyan focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-body text-lg shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? t('contact.formSubmitting') : t('contact.formSubmit')}
                    {!isSubmitting && <span className="group-hover:translate-x-1 transition-transform">→</span>}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              </form>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;

