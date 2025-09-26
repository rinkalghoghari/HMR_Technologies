
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export function usePageLoader() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);

  useEffect(() => {
    // Don't show loading for initial page load
    if (!hasLoadedOnce) {
      setHasLoadedOnce(true);
      return;
    }

    // Show loading for route changes
    setIsLoading(true);
    
    // Scroll to top immediately when route changes
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800 + Math.random() * 400); // Random delay between 800-1200ms

    return () => clearTimeout(timer);
  }, [location.pathname, hasLoadedOnce]);

  return { isLoading };
}

export function useInitialLoader() {
  const [isInitialLoading, setIsInitialLoading] = useState(() => {
    // Show loading on every hard page load (refresh/direct access)
    return true;
  });

  const completeInitialLoad = () => {
    setIsInitialLoading(false);
  };

  return { isInitialLoading, completeInitialLoad };
}
