import { useState, useEffect } from 'react';
// Using static path for public assets
const placeholder = '/images/placeholder.svg';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: 'lazy' | 'eager';
  onError?: () => void;
  fallback?: string;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  style,
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
    if (!hasError && imageSrc !== fallback) {
      setHasError(true);
      setImageSrc(fallback);
      onError?.();
    }
  };

  const handleLoad = () => {
    setHasError(false);
  };

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      style={style}
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