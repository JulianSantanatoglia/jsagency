import { useState, useEffect } from 'react';

// Using static path for public assets
const placeholder = '/images/placeholder.svg';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  onError?: () => void;
  fallback?: string;
  width?: number;
  height?: number;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  onError,
  fallback = placeholder,
  width,
  height
}: OptimizedImageProps) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Update imageSrc when src prop changes
  useEffect(() => {
    setImageSrc(src);
    setHasError(false);
    setIsLoading(true);
  }, [src]);

  const handleError = () => {
    console.warn(`Failed to load image: ${imageSrc}`);
    if (!hasError && imageSrc !== fallback) {
      setHasError(true);
      setImageSrc(fallback);
      setIsLoading(false);
      onError?.();
    }
  };

  const handleLoad = () => {
    setHasError(false);
    setIsLoading(false);
    console.log(`Successfully loaded image: ${imageSrc}`);
  };

  // Normalize image path to ensure it starts with /
  const normalizedSrc = imageSrc.startsWith('/') ? imageSrc : `/${imageSrc}`;

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={normalizedSrc}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        loading={loading}
        onError={handleError}
        onLoad={handleLoad}
        width={width}
        height={height}
        // Add debugging attributes
        data-original-src={src}
        data-has-error={hasError}
        data-is-loading={isLoading}
      />
    </div>
  );
};

export default OptimizedImage;
