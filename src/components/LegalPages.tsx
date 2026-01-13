import { Link } from 'react-router-dom';
import { FileText, Shield, Cookie } from 'lucide-react';

const LegalPages = () => {

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 pt-28 pb-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold font-display text-primary-dark dark:text-white mb-8 text-center">
          Información Legal
        </h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Link
            to="/legal/terms"
            className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-accent-cyan hover:shadow-lg transition-all text-left focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2"
          >
            <FileText size={32} className="text-accent-cyan mb-4" />
            <h2 className="text-xl font-bold font-display text-primary-dark dark:text-white mb-2">
              Términos y Condiciones
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-body">
              Condiciones de uso del sitio web y servicios ofrecidos.
            </p>
          </Link>
          
          <Link
            to="/legal/privacy"
            className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-accent-cyan hover:shadow-lg transition-all text-left focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2"
          >
            <Shield size={32} className="text-accent-cyan mb-4" />
            <h2 className="text-xl font-bold font-display text-primary-dark dark:text-white mb-2">
              Política de Privacidad
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-body">
              Cómo recopilamos, usamos y protegemos su información personal.
            </p>
          </Link>
          
          <Link
            to="/legal/cookies"
            className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-accent-cyan hover:shadow-lg transition-all text-left focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2"
          >
            <Cookie size={32} className="text-accent-cyan mb-4" />
            <h2 className="text-xl font-bold font-display text-primary-dark dark:text-white mb-2">
              Política de Cookies
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-body">
              Información sobre el uso de cookies en nuestro sitio web.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LegalPages;
