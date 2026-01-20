import { type ReactElement } from 'react';
import OptimizedImage from './OptimizedImage';

type iPhoneMockupProps = {
  image: string;
  alt: string;
  className?: string;
};

const IPhoneMockup = ({ image, alt, className = '' }: iPhoneMockupProps): ReactElement => {
  return (
    <div className={`relative ${className}`}>
      {/* iPhone Frame - Using a more realistic mockup design */}
      <div className="relative mx-auto w-full max-w-[280px] md:max-w-[340px]">
        {/* iPhone Outer Frame with realistic design */}
        <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-[3.5rem] p-3 md:p-3.5 shadow-2xl">
          {/* Dynamic Island (iPhone 14 Pro style) */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-10"></div>
          
          {/* Screen */}
          <div className="relative bg-black rounded-[3rem] overflow-hidden aspect-[9/19.5]">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-black z-20 flex items-center justify-center pt-2">
              <span className="text-white text-xs font-semibold">9:41</span>
            </div>
            
            {/* Content Image */}
            <OptimizedImage
              src={image}
              alt={alt}
              className="w-full h-full object-cover"
              loading="eager"
            />
            
            {/* Home Indicator */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-36 h-1.5 bg-white/40 rounded-full backdrop-blur-sm"></div>
          </div>
          
          {/* Side buttons simulation */}
          <div className="absolute left-0 top-1/4 w-1 h-16 bg-gray-700 rounded-r-full"></div>
          <div className="absolute left-0 top-1/3 w-1 h-20 bg-gray-700 rounded-r-full"></div>
          <div className="absolute right-0 top-1/4 w-1 h-16 bg-gray-700 rounded-l-full"></div>
        </div>
        
        {/* Reflection/Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-[3.5rem] pointer-events-none"></div>
        
        {/* Shadow underneath */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/20 blur-2xl rounded-full"></div>
      </div>
    </div>
  );
};

export default IPhoneMockup;
