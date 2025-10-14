import { ArrowLeft, Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-accent-cyan mb-4 font-display">404</h1>
          <h2 className="text-2xl font-bold text-primary-dark mb-4 font-display">
            Página no encontrada
          </h2>
          <p className="text-slate-600 font-body mb-8">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 font-semibold"
          >
            <ArrowLeft size={20} />
            Volver atrás
          </button>
          
          <a
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-accent-cyan text-white rounded-xl hover:bg-cyan-500 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 font-semibold"
          >
            <Home size={20} />
            Ir al inicio
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
