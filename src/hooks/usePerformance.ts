
import { useEffect } from 'react';

export const usePerformance = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const observePerformance = () => {
      if ('PerformanceObserver' in window) {
        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
        });
        
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            const fid = entry.processingStart - entry.startTime;
            console.log('FID:', fid);
            // Send to analytics if FID is poor (>100ms)
            if (fid > 100) {
              console.warn('Poor FID detected:', fid);
            }
          });
        });
        
        try {
          fidObserver.observe({ type: 'first-input', buffered: true });
        } catch (e) {
          console.warn('FID observation not supported');
        }

        // Cumulative Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const layoutShiftEntry = entry as PerformanceEntry & { value: number; hadRecentInput?: boolean };
            if (!layoutShiftEntry.hadRecentInput) {
              clsValue += layoutShiftEntry.value;
            }
          });
        });

        clsObserver.observe({ type: 'layout-shift', buffered: true });
      }
    };

    // Optimize resource loading
    const optimizeResources = () => {
      // Preload critical resources
      const criticalImages = [
        '/images/HeroCarousel/Carousel-1.webp',
        '/images/HeroCarousel/Carousel-1.avif'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        // link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        document.head.appendChild(link);
      });

      // Remove unused resources
      const unusedStyles = document.querySelectorAll('link[rel="stylesheet"][href*="unused"]');
      unusedStyles.forEach(link => link.remove());
    };

    // Defer non-critical operations
    const deferredInit = () => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          observePerformance();
          optimizeResources();
        });
      } else {
        setTimeout(() => {
          observePerformance();
          optimizeResources();
        }, 100);
      }
    };

    deferredInit();
  }, []);
};
