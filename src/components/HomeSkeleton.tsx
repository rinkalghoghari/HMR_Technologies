
import { Skeleton } from "@/components/ui/skeleton";

export default function HomeSkeleton() {
  return (
    <div className="lg:pt-16 sm:pt-5 pt-0">
      {/* Hero Section Skeleton */}
      <section className="relative py-5 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content Skeleton */}
            <div className="space-y-8">
              <div>
                {/* Badge Skeleton */}
                <Skeleton className="h-6 w-64 mb-4 rounded-full" />
                
                {/* Title Skeleton */}
                <div className="space-y-3 mb-6">
                  <Skeleton className="h-8 w-full" />
                  <Skeleton className="h-8 w-4/5" />
                  <Skeleton className="h-8 w-3/4" />
                </div>
                
                {/* Description Skeleton */}
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
              </div>

              {/* Buttons Skeleton */}
              <div className="flex flex-row gap-3 sm:gap-4">
                <Skeleton className="h-11 w-36" />
                <Skeleton className="h-11 w-36" />
              </div>

              {/* Features Skeleton */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8">
                <Skeleton className="h-5 w-48" />
                <Skeleton className="h-5 w-40" />
              </div>

              {/* Stats Skeleton */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <Skeleton className="h-8 w-12 mx-auto mb-2" />
                  <Skeleton className="h-3 w-20 mx-auto" />
                </div>
                <div className="text-center">
                  <Skeleton className="h-8 w-12 mx-auto mb-2" />
                  <Skeleton className="h-3 w-20 mx-auto" />
                </div>
                <div className="text-center">
                  <Skeleton className="h-8 w-12 mx-auto mb-2" />
                  <Skeleton className="h-3 w-16 mx-auto" />
                </div>
              </div>
            </div>

            {/* Right Content - Carousel Skeleton */}
            <div className="lg:flex hidden">
              <Skeleton className="w-full h-64 sm:h-80 lg:h-96 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section Skeleton */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          {/* Section Header Skeleton */}
          <div className="text-center sm:mb-16 mb-8">
            <Skeleton className="h-10 w-2/3 mx-auto mb-4" />
            <Skeleton className="h-5 w-3/4 mx-auto mb-2" />
            <Skeleton className="h-5 w-1/2 mx-auto" />
          </div>

          {/* Services Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Large Card */}
            <div className="lg:col-span-3 md:col-span-2">
              <Skeleton className="h-64 w-full rounded-3xl" />
            </div>
            
            {/* Small Card */}
            <div className="lg:col-span-1 md:col-span-2">
              <Skeleton className="h-64 w-full rounded-3xl" />
            </div>

            {/* Medium Cards */}
            <div className="md:col-span-2">
              <Skeleton className="h-48 w-full rounded-3xl" />
            </div>
            <div className="md:col-span-2">
              <Skeleton className="h-48 w-full rounded-3xl" />
            </div>

            {/* Bottom Cards */}
            <div className="md:col-span-2">
              <Skeleton className="h-48 w-full rounded-3xl" />
            </div>
            <div className="md:col-span-2">
              <Skeleton className="h-48 w-full rounded-3xl" />
            </div>
          </div>

          {/* CTA Button Skeleton */}
          <div className="text-center mt-12">
            <Skeleton className="h-11 w-40 mx-auto" />
          </div>
        </div>
      </section>

      {/* About Preview Skeleton */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Illustration Skeleton */}
            <div>
              <Skeleton className="w-full h-80 rounded-xl" />
            </div>
            
            {/* Right - Content Skeleton */}
            <div className="space-y-6">
              <Skeleton className="h-8 w-3/4" />
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/5" />
              </div>
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
              
              {/* Features Grid Skeleton */}
              <div className="grid sm:grid-cols-2 gap-6">
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-full" />
              </div>
              
              <Skeleton className="h-10 w-40" />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section Skeleton */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header Skeleton */}
          <div className="text-center sm:mb-12 mb-6">
            <Skeleton className="h-8 w-64 mx-auto mb-4" />
            <Skeleton className="h-5 w-96 mx-auto" />
          </div>

          {/* Industries Grid Skeleton */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="text-center">
                <Skeleton className="w-16 h-16 rounded-2xl mx-auto mb-4" />
                <Skeleton className="h-5 w-32 mx-auto mb-2" />
                <Skeleton className="h-4 w-40 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
