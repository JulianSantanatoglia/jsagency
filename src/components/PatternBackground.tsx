import { useEffect, useState } from 'react';

interface PatternBackgroundProps {
  opacity?: number;
  className?: string;
  dark?: boolean;
}

const PatternBackground = ({ opacity, className = '', dark: propDark }: PatternBackgroundProps) => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  const dark = propDark !== undefined ? propDark : isDark;
  
  // Opacidad por defecto según modo
  const lightOpacity = opacity ?? 0.04;
  const darkOpacity = opacity ?? 0.06;
  const baseOpacity = dark ? darkOpacity : lightOpacity;
  const strokeColor = dark ? '#ffffff' : '#0F172A';
  const gradientId = dark ? 'pattern-gradient-dark' : 'pattern-gradient-light';
  const maskId = dark ? 'pattern-mask-dark' : 'pattern-mask-light';

  return (
    <div 
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 1200"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gradiente radial para crear zonas de fade */}
          <radialGradient id={gradientId} cx="50%" cy="50%">
            <stop offset="0%" stopColor={strokeColor} stopOpacity={baseOpacity * 3} />
            <stop offset="30%" stopColor={strokeColor} stopOpacity={baseOpacity * 2} />
            <stop offset="60%" stopColor={strokeColor} stopOpacity={baseOpacity * 0.8} />
            <stop offset="100%" stopColor={strokeColor} stopOpacity="0" />
          </radialGradient>

          {/* Máscara con gradientes para crear zonas visibles/invisibles */}
          <mask id={maskId}>
            <rect width="100%" height="100%" fill="black" />
            {/* Zonas con gradientes que crean el efecto de aparecer/desaparecer */}
            <circle cx="200" cy="200" r="250" fill="white" opacity="0.65" />
            <circle cx="1000" cy="300" r="200" fill="white" opacity="0.55" />
            <circle cx="600" cy="800" r="300" fill="white" opacity="0.75" />
            <circle cx="150" cy="900" r="180" fill="white" opacity="0.5" />
            <circle cx="950" cy="1000" r="220" fill="white" opacity="0.65" />
            <ellipse cx="400" cy="500" rx="350" ry="250" fill="white" opacity="0.55" />
            <ellipse cx="800" cy="600" rx="280" ry="200" fill="white" opacity="0.5" />
            <circle cx="500" cy="200" r="180" fill="white" opacity="0.45" />
            <circle cx="1100" cy="700" r="200" fill="white" opacity="0.5" />
            <ellipse cx="200" cy="600" rx="250" ry="180" fill="white" opacity="0.4" />
          </mask>
        </defs>

        {/* Grupo con máscara aplicada */}
        <g mask={`url(#${maskId})`}>
          {/* Puntos distribuidos orgánicamente */}
          <circle cx="180" cy="180" r="2.5" fill={strokeColor} opacity={baseOpacity * 4} />
          <circle cx="320" cy="240" r="2" fill={strokeColor} opacity={baseOpacity * 3.5} />
          <circle cx="450" cy="150" r="2.5" fill={strokeColor} opacity={baseOpacity * 3} />
          <circle cx="680" cy="220" r="2" fill={strokeColor} opacity={baseOpacity * 4} />
          <circle cx="850" cy="180" r="2.5" fill={strokeColor} opacity={baseOpacity * 3.5} />
          <circle cx="1020" cy="280" r="2" fill={strokeColor} opacity={baseOpacity * 4} />
          
          <circle cx="150" cy="420" r="2.5" fill={strokeColor} opacity={baseOpacity * 3} />
          <circle cx="380" cy="480" r="2" fill={strokeColor} opacity={baseOpacity * 3.5} />
          <circle cx="620" cy="450" r="2.5" fill={strokeColor} opacity={baseOpacity * 4} />
          <circle cx="780" cy="520" r="2" fill={strokeColor} opacity={baseOpacity * 3} />
          <circle cx="950" cy="480" r="2.5" fill={strokeColor} opacity={baseOpacity * 3.5} />
          
          <circle cx="220" cy="680" r="2" fill={strokeColor} opacity={baseOpacity * 4} />
          <circle cx="480" cy="720" r="2.5" fill={strokeColor} opacity={baseOpacity * 3.5} />
          <circle cx="720" cy="780" r="2" fill={strokeColor} opacity={baseOpacity * 3} />
          <circle cx="920" cy="750" r="2.5" fill={strokeColor} opacity={baseOpacity * 4} />
          
          <circle cx="120" cy="920" r="2" fill={strokeColor} opacity={baseOpacity * 3.5} />
          <circle cx="380" cy="980" r="2.5" fill={strokeColor} opacity={baseOpacity * 3} />
          <circle cx="650" cy="1020" r="2" fill={strokeColor} opacity={baseOpacity * 4} />
          <circle cx="880" cy="980" r="2.5" fill={strokeColor} opacity={baseOpacity * 3.5} />
          <circle cx="1050" cy="1020" r="2" fill={strokeColor} opacity={baseOpacity * 3} />
          
          {/* Puntos adicionales sutiles */}
          <circle cx="280" cy="320" r="1.8" fill={strokeColor} opacity={baseOpacity * 2.5} />
          <circle cx="520" cy="280" r="2" fill={strokeColor} opacity={baseOpacity * 3} />
          <circle cx="750" cy="380" r="1.8" fill={strokeColor} opacity={baseOpacity * 2.5} />
          <circle cx="1100" cy="450" r="2" fill={strokeColor} opacity={baseOpacity * 3} />
          <circle cx="250" cy="580" r="1.8" fill={strokeColor} opacity={baseOpacity * 2.5} />
          <circle cx="580" cy="620" r="2" fill={strokeColor} opacity={baseOpacity * 3} />
          <circle cx="820" cy="680" r="1.8" fill={strokeColor} opacity={baseOpacity * 2.5} />
          <circle cx="1080" cy="850" r="2" fill={strokeColor} opacity={baseOpacity * 3} />

          {/* Líneas elegantes y sutiles */}
          <line 
            x1="200" 
            y1="200" 
            x2="400" 
            y2="180" 
            stroke={strokeColor} 
            strokeWidth="1.2" 
            opacity={baseOpacity * 2.5}
            strokeLinecap="round"
          />
          <line 
            x1="600" 
            y1="250" 
            x2="800" 
            y2="230" 
            stroke={strokeColor} 
            strokeWidth="1" 
            opacity={baseOpacity * 2}
            strokeLinecap="round"
          />
          <line 
            x1="300" 
            y1="500" 
            x2="500" 
            y2="480" 
            stroke={strokeColor} 
            strokeWidth="1.2" 
            opacity={baseOpacity * 2.5}
            strokeLinecap="round"
          />
          <line 
            x1="700" 
            y1="550" 
            x2="900" 
            y2="530" 
            stroke={strokeColor} 
            strokeWidth="1" 
            opacity={baseOpacity * 2}
            strokeLinecap="round"
          />
          <line 
            x1="150" 
            y1="750" 
            x2="350" 
            y2="730" 
            stroke={strokeColor} 
            strokeWidth="1.2" 
            opacity={baseOpacity * 2.5}
            strokeLinecap="round"
          />
          <line 
            x1="550" 
            y1="800" 
            x2="750" 
            y2="780" 
            stroke={strokeColor} 
            strokeWidth="1" 
            opacity={baseOpacity * 2}
            strokeLinecap="round"
          />
          <line 
            x1="800" 
            y1="950" 
            x2="1000" 
            y2="930" 
            stroke={strokeColor} 
            strokeWidth="1.2" 
            opacity={baseOpacity * 2.5}
            strokeLinecap="round"
          />

          {/* Líneas verticales sutiles */}
          <line 
            x1="250" 
            y1="100" 
            x2="250" 
            y2="400" 
            stroke={strokeColor} 
            strokeWidth="1" 
            opacity={baseOpacity * 1.8}
            strokeLinecap="round"
          />
          <line 
            x1="750" 
            y1="300" 
            x2="750" 
            y2="600" 
            stroke={strokeColor} 
            strokeWidth="1" 
            opacity={baseOpacity * 1.8}
            strokeLinecap="round"
          />
          <line 
            x1="450" 
            y1="600" 
            x2="450" 
            y2="900" 
            stroke={strokeColor} 
            strokeWidth="1" 
            opacity={baseOpacity * 1.8}
            strokeLinecap="round"
          />
          <line 
            x1="950" 
            y1="700" 
            x2="950" 
            y2="1000" 
            stroke={strokeColor} 
            strokeWidth="1" 
            opacity={baseOpacity * 1.8}
            strokeLinecap="round"
          />

          {/* Curvas suaves */}
          <path
            d="M 200 400 Q 400 350 600 400"
            fill="none"
            stroke={strokeColor}
            strokeWidth="1"
            opacity={baseOpacity * 2}
            strokeLinecap="round"
          />
          <path
            d="M 500 700 Q 700 650 900 700"
            fill="none"
            stroke={strokeColor}
            strokeWidth="1"
            opacity={baseOpacity * 2}
            strokeLinecap="round"
          />
          
          {/* Líneas adicionales sutiles */}
          <line 
            x1="100" 
            y1="300" 
            x2="280" 
            y2="290" 
            stroke={strokeColor} 
            strokeWidth="0.8" 
            opacity={baseOpacity * 1.8}
            strokeLinecap="round"
          />
          <line 
            x1="900" 
            y1="400" 
            x2="1100" 
            y2="390" 
            stroke={strokeColor} 
            strokeWidth="0.8" 
            opacity={baseOpacity * 1.8}
            strokeLinecap="round"
          />
          <line 
            x1="200" 
            y1="850" 
            x2="400" 
            y2="840" 
            stroke={strokeColor} 
            strokeWidth="0.8" 
            opacity={baseOpacity * 1.8}
            strokeLinecap="round"
          />
          <line 
            x1="600" 
            y1="950" 
            x2="800" 
            y2="940" 
            stroke={strokeColor} 
            strokeWidth="0.8" 
            opacity={baseOpacity * 1.8}
            strokeLinecap="round"
          />
          
          {/* Curvas adicionales */}
          <path
            d="M 100 600 Q 300 550 500 600"
            fill="none"
            stroke={strokeColor}
            strokeWidth="0.8"
            opacity={baseOpacity * 1.5}
            strokeLinecap="round"
          />
          <path
            d="M 700 300 Q 900 250 1100 300"
            fill="none"
            stroke={strokeColor}
            strokeWidth="0.8"
            opacity={baseOpacity * 1.5}
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
};

export default PatternBackground;


