import { useState, useEffect } from "react";
import Logo from "@/components/Logo";

interface InitialLoaderProps {
  onComplete: () => void;
}

export default function InitialLoader({ onComplete }: InitialLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show logo after a brief delay
    const logoTimer = setTimeout(() => setShowLogo(true), 300);

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Start fade out animation
          setTimeout(() => setFadeOut(true), 300);
          // Complete loading
          setTimeout(() => onComplete(), 600);
          return 100;
        }
        return Math.min(prev + Math.random() * 8 + 2, 100);
      });
    }, 150);

    return () => {
      clearTimeout(logoTimer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 bg-white z-50 flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
              style={{ top: `${i * 6.67}%` }}
            />
          ))}
        </div>
        <div className="absolute inset-0">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute h-full w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent"
              style={{ left: `${i * 10}%` }}
            />
          ))}
        </div>
      </div>

      <div className="text-center space-y-8">
        {/* Logo */}
        <div
          className={`transition-all duration-700 ${
            showLogo
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          }`}
        >
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-2xl">
              <Logo className="h-12 w-auto" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            HMR Technologies
          </h1>
          <p className="text-gray-600">AI-Powered Development Solutions</p>
        </div>

        {/* Loading Progress */}
        <div
          className={`transition-all duration-700 delay-300 ${
            showLogo
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          }`}
        >
          <div className="w-64 mx-auto">
            <div className="flex justify-between text-xs text-gray-500 mb-2">
              <span>Loading</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary via-blue-500 to-cyan-500 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Loading Animation */}
        <div
          className={`transition-all duration-700 delay-500 ${
            showLogo ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex justify-center space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-primary rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-float opacity-30" />
      <div className="absolute top-40 right-20 w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse opacity-30" />
      <div
        className="absolute bottom-32 left-32 w-4 h-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-float opacity-30"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-20 right-32 w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse opacity-30"
        style={{ animationDelay: "0.5s" }}
      />
    </div>
  );
}
