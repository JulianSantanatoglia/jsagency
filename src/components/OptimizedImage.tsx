import { useState, useEffect } from 'react';
// Import placeholder image using Vite's asset handling
import placeholder from '/images/placeholder.svg';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  onError?: () => void;
  fallback?: string;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  onError,
  fallback = placeholder
}: OptimizedImageProps) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  // Update imageSrc when src prop changes
  useEffect(() => {
    setImageSrc(src);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    console.warn(`Failed to load image: ${imageSrc}`);
    if (!hasError && imageSrc !== fallback) {
      setHasError(true);
      setImageSrc(fallback);
      onError?.();
    }
  };

  const handleLoad = () => {
    setHasError(false);
    console.log(`Successfully loaded image: ${imageSrc}`);
  };

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      loading={loading}
      onError={handleError}
      onLoad={handleLoad}
      // Add debugging attributes
      data-original-src={src}
      data-has-error={hasError}
    />
  );
};

export default OptimizedImage;
