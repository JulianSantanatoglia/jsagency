import { useState } from 'react';
import { Mail, Phone, Building2, MessageSquare, DollarSign, Calendar, CheckSquare, AlertCircle } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  budget: string;
  timeline: string;
  services: string[];
  consent: boolean;
}

interface ContactFormProps {
  onSuccess?: () => void;
  className?: string;
}

const ContactForm = ({ onSuccess, className = '' }: ContactFormProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    budget: '',
    timeline: '',
    services: [],
    consent: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const budgetOptions = [
    { value: 'under-5k', label: 'Menos de 5.000€' },
    { value: '5k-10k', label: '5.000€ - 10.000€' },
    { value: '10k-25k', label: '10.000€ - 25.000€' },
    { value: '25k-50k', label: '25.000€ - 50.000€' },
    { value: '50k-plus', label: 'Más de 50.000€' }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'Lo antes posible' },
    { value: '1-month', label: 'En 1 mes' },
    { value: '2-3-months', label: 'En 2-3 meses' },
    { value: '3-6-months', label: 'En 3-6 meses' },
    { value: 'flexible', label: 'Flexible' }
  ];

  const serviceOptions = [
    { value: 'web-development', label: 'Desarrollo Web' },
    { value: 'virtual-tours', label: 'Recorridos virtuales' },
    { value: 'automation', label: 'Automatización' },
    { value: 'aerial-content', label: 'Contenido Aéreo' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'consent') {
        setFormData(prev => ({ ...prev, [name]: checked }));
      } else {
        // Handle services array
        setFormData(prev => ({
          ...prev,
          services: checked 
            ? [...prev.services, value]
            : prev.services.filter(service => service !== value)
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          consent: formData.consent.toString()
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
          budget: '',
          timeline: '',
          services: [],
          consent: false
        });
        onSuccess?.();
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error?.message || 'Error al enviar el mensaje');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Error de conexión. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 ${className}`}>
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4 font-display">
          Envíanos un mensaje
        </h3>
        <p className="text-slate-600 font-body">
          Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2 font-body">
              Nombre completo *
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all font-body"
                placeholder="Tu nombre"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2 font-body">
              Email *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all font-body"
                placeholder="tu@email.com"
              />
            </div>
          </div>
        </div>

        {/* Phone and Company */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2 font-body">
              Teléfono
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all font-body"
                placeholder="+34 123 456 789"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2 font-body">
              Empresa
            </label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all font-body"
                placeholder="Nombre de tu empresa"
              />
            </div>
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2 font-body">
            Asunto *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all font-body"
            placeholder="¿En qué podemos ayudarte?"
          />
        </div>

        {/* Services */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-3 font-body">
            Servicios de interés
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {serviceOptions.map((service) => (
              <label key={service.value} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="services"
                  value={service.value}
                  checked={formData.services.includes(service.value)}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-accent-cyan bg-gray-100 border-gray-300 rounded focus:ring-accent-cyan focus:ring-2"
                />
                <span className="text-sm text-slate-700 font-body">{service.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Budget and Timeline */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="budget" className="block text-sm font-semibold text-slate-700 mb-2 font-body">
              Presupuesto aproximado
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all font-body"
              >
                <option value="">Selecciona un rango</option>
                {budgetOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="timeline" className="block text-sm font-semibold text-slate-700 mb-2 font-body">
              Timeline del proyecto
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all font-body"
              >
                <option value="">¿Cuándo lo necesitas?</option>
                {timelineOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2 font-body">
            Mensaje *
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all font-body resize-none"
              placeholder="Cuéntanos más detalles sobre tu proyecto..."
            />
          </div>
        </div>

        {/* Consent */}
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleInputChange}
            required
            className="w-5 h-5 text-accent-cyan bg-gray-100 border-gray-300 rounded focus:ring-accent-cyan focus:ring-2 mt-1"
          />
          <label htmlFor="consent" className="text-sm text-slate-600 font-body">
            Acepto la{' '}
            <a href="/legal" className="text-accent-cyan hover:underline">
              política de privacidad
            </a>{' '}
            y consiento el tratamiento de mis datos personales. *
          </label>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center space-x-3">
            <CheckSquare className="w-5 h-5 text-green-600" />
            <p className="text-green-800 font-body">
              ¡Mensaje enviado correctamente! Te contactaremos pronto.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center space-x-3">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <p className="text-red-800 font-body">
              {errorMessage || 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.'}
            </p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || !formData.consent}
          className="w-full bg-accent-cyan text-white font-semibold py-4 px-6 rounded-xl hover:bg-cyan-600 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-body text-lg"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

