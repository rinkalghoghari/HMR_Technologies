import { useState, useEffect } from "react";

interface LoadingBarProps {
  isLoading: boolean;
  onComplete?: () => void;
}

export default function LoadingBar({ isLoading, onComplete }: LoadingBarProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setIsVisible(true);
      setProgress(0);
      
      // Simulate loading progress
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) {
            return prev + 0.5; // Slow down near the end
          }
          return prev + Math.random() * 15;
        });
      }, 100);

      return () => clearInterval(interval);
    } else {
      // Complete the loading
      setProgress(100);
      setTimeout(() => {
        setIsVisible(false);
        onComplete?.();
      }, 200);
    }
  }, [isLoading, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="h-1 bg-gray-200">
        <div 
          className="h-full bg-gradient-to-r from-primary via-blue-500 to-cyan-500 transition-all duration-200 ease-out"
          style={{ 
            width: `${Math.min(progress, 100)}%`,
            boxShadow: progress > 0 ? '0 0 10px rgba(37, 99, 235, 0.5)' : 'none'
          }}
        />
      </div>
    </div>
  );
}