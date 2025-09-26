
import { useEffect } from 'react';

export default function CriticalCSS() {
  useEffect(() => {
    // Preload critical resources with priority
    const preloadResources = [
      { href: '/images/HeroCarousel/Carousel-1.webp', as: 'image', priority: true },
      { href: '/images/HeroCarousel/Carousel-1.avif', as: 'image', priority: true },
      { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', as: 'style', priority: false }
    ];

    preloadResources.forEach(resource => {
      const link = document.createElement('link');
      // link.rel = resource.priority ? 'preload' : 'prefetch';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.as === 'font') {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });

    // Optimize resource loading
    const optimizeResources = () => {
      // Remove unused CSS
      const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
      stylesheets.forEach((sheet) => {
        const href = sheet.getAttribute('href');
        if (href?.includes('unused') || href?.includes('owl.carousel')) {
          sheet.remove();
        }
      });

      // Inline critical CSS for faster rendering
      const criticalCSS = `
        .hero-section{min-height:100vh;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%)}
        .loading-screen{position:fixed;inset:0;z-index:9999;background:#fff}
        .animate-spin{animation:spin 1s linear infinite}
        @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        img{max-width:100%;height:auto;object-fit:cover}
        .image-container{position:relative;overflow:hidden}
        .lazy-image{opacity:0;transition:opacity 0.3s}
        .lazy-image.loaded{opacity:1}
      `;
      
      const style = document.createElement('style');
      style.textContent = criticalCSS;
      document.head.appendChild(style);
    };

    // Defer non-critical operations
    const deferNonCritical = () => {
      // Load non-critical CSS asynchronously
      const nonCriticalStyles = [
        'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css'
      ];

      nonCriticalStyles.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.media = 'print';
        link.onload = () => {
          link.media = 'all';
        };
        document.head.appendChild(link);
      });
    };

    // Use requestIdleCallback for non-critical work
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        optimizeResources();
        deferNonCritical();
      });
    } else {
      setTimeout(() => {
        optimizeResources();
        deferNonCritical();
      }, 100);
    }
  }, []);

  return null;
}
