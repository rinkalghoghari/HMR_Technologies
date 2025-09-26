
import { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjI0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+'
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [imageSrc, setImageSrc] = useState(priority ? src : placeholder);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  useEffect(() => {
    if (isInView && !isLoaded) {
      // Create multiple image formats for better compression
      const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      const avifSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.avif');
      
      // Test AVIF support first (better compression)
      const avif = new Image();
      avif.onload = () => {
        setImageSrc(avifSrc);
      };
      avif.onerror = () => {
        // Fallback to WebP
        const webp = new Image();
        webp.onload = () => {
          setImageSrc(webpSrc);
        };
        webp.onerror = () => {
          setImageSrc(src);
        };
        webp.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
      };
      
      // Test AVIF support
      avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgABogQEAwgMg8f8D///8WfhwB8+ErK42A=';
    }
  }, [isInView, src, isLoaded]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setImageSrc(src); // Fallback to original format
    setIsLoaded(true);
  };

  // Generate responsive image sizes with fallbacks
  const generateSrcSet = (baseSrc: string, format?: string) => {
    const ext = format || baseSrc.split('.').pop();
    const baseName = baseSrc.replace(/\.(jpg|jpeg|png|webp|avif)$/i, '');
    
    const sizes = [400, 800, 1200, 1600];
    return sizes.map(size => {
      // Try to use existing responsive images, fallback to original
      return `${baseName}_${size}w.${ext} ${size}w`;
    }).join(', ');
  };

  // Preload critical images
  useEffect(() => {
    if (priority && isInView) {
      const link = document.createElement('link');
      // link.rel = 'preload';
      link.href = src;
      link.as = 'image';
      if (width && height) {
        link.setAttribute('imagesrcset', generateSrcSet(src));
        link.setAttribute('imagesizes', '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw');
      }
      document.head.appendChild(link);
    }
  }, [priority, isInView, src, width, height]);

  return (
    <div className={`image-container ${className}`} style={{ aspectRatio: width && height ? `${width}/${height}` : 'auto' }}>
      <picture>
        <source 
          srcSet={generateSrcSet(src, 'avif')} 
          type="image/avif"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <source 
          srcSet={generateSrcSet(src, 'webp')} 
          type="image/webp"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <img
          ref={imgRef}
          src={imageSrc}
          srcSet={generateSrcSet(src)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          onLoad={handleLoad}
          onError={handleError}
          className={`lazy-image ${isLoaded ? 'loaded' : ''} ${className}`}
          style={{
            transition: 'opacity 0.3s ease',
            opacity: isLoaded ? 1 : 0.7,
          }}
        />
      </picture>
      {!isLoaded && !priority && (
        <div 
          className="image-placeholder absolute inset-0 flex items-center justify-center bg-gray-100"
          style={{
            background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
            backgroundSize: '200% 100%',
            animation: 'loading 1.5s infinite'
          }}
        >
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}
    </div>
  );
}
