import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from './ui/button';
import OptimizedImage from './OptimizedImage';

interface HeroSlide {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  stats: {
    label: string;
    value: string;
  };
}

const slides: HeroSlide[] = [
  {
    id: 1,
    title: "AI-Powered Code Generation",
    description:
      "Watch as our developers use Cursor and Copilot to generate high-quality code 40% faster than traditional methods.",
    imageUrl: "/images/HeroCarousel/Carousel-1.jpeg",
    stats: {
      label: "Development Speed",
      value: "40% Faster",
    },
  },
  {
    id: 2,
    title: "Legacy System Transformation",
    description:
      "Modern AI tools help us seamlessly migrate and modernize your existing applications without losing stability.",
    imageUrl: "/images/HeroCarousel/Carousel-2.jpeg",
    stats: {
      label: "Migration Success",
      value: "85% Uptime",
    },
  },
  {
    id: 3,
    title: "Expert Human Review",
    description:
      "Every line of AI-generated code undergoes thorough review by our experienced developers to ensure excellence.",
    imageUrl: "/images/HeroCarousel/Carousel-3.jpeg",
    stats: {
      label: "Code Quality",
      value: "100% Reviewed",
    },
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 3000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 3000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 3000);
  };

  return (
    <div className="relative w-full h-full">
      {/* Main Carousel Container */}
      <div className="relative h-full overflow-hidden rounded-2xl shadow-2xl">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="w-full h-full flex-shrink-0 relative"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.imageUrl})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
                <div className="space-y-4">
                  {/* Stats Badge */}
                  <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                    <span className="font-semibold text-yellow-300">
                      {slide.stats.value}
                    </span>
                    <span className="ml-2 text-white/90">
                      {slide.stats.label}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold leading-tight">
                    {slide.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 leading-relaxed max-w-md">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>

        {/* Auto-play Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div
            className={`h-full bg-primary transition-all duration-200 ${
              isPlaying ? "animate-pulse" : ""
            }`}
            style={{
              width: isPlaying ? "100%" : "0%",
              transition: isPlaying ? "width 5s linear" : "width 0.2s ease-out",
            }}
          />
        </div>
      </div>

      {/* Floating Elements for Visual Interest */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-float" />
      <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-cyan-500/20 rounded-full animate-pulse-slow" />
    </div>
  );
}