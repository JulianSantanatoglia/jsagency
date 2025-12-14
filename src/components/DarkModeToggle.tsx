import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';

const DarkModeToggle = () => {
  const { toggleDarkMode, isDark } = useDarkMode();

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    toggleDarkMode();
  };

  return (
    <button
      onClick={handleToggle}
      className="relative w-12 h-6 rounded-full bg-slate-200 dark:bg-slate-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900"
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      role="switch"
      aria-checked={isDark}
    >
      {/* Toggle circle */}
      <div
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white dark:bg-slate-900 transition-transform duration-300 flex items-center justify-center ${
          isDark ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
        {isDark ? (
          <Moon size={12} className="text-slate-600 dark:text-slate-300" />
        ) : (
          <Sun size={12} className="text-slate-600 dark:text-slate-300" />
        )}
      </div>
    </button>
  );
};

export default DarkModeToggle;
