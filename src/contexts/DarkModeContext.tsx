import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type DarkMode = 'light' | 'dark';

interface DarkModeContextType {
  darkMode: DarkMode;
  toggleDarkMode: () => void;
  isDark: boolean;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState<DarkMode>(() => {
    if (typeof window === 'undefined') return 'light';
    
    const saved = localStorage.getItem('darkMode');
    const root = document.documentElement;
    
    if (saved === 'dark') {
      root.classList.add('dark');
      return 'dark';
    } else {
      root.classList.remove('dark');
      return 'light';
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    
    // Force remove dark class first
    root.classList.remove('dark');
    
    // Then add if needed
    if (darkMode === 'dark') {
      root.classList.add('dark');
    }
    
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const newMode = prev === 'dark' ? 'light' : 'dark';
      const root = document.documentElement;
      
      if (newMode === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      
      localStorage.setItem('darkMode', newMode);
      return newMode;
    });
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode, isDark: darkMode === 'dark' }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};
