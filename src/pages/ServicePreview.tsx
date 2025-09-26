import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ServiceVariant1,
  ServiceVariant2,
  ServiceVariant3,
} from "@/components/ServiceVariants";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function ServicePreview() {
  usePageTitle(
    "Service Design Variants - Preview",
    "Preview different design variants for the services section",
  );

  const [activeVariant, setActiveVariant] = useState(1);

  const variants = [
    { id: 1, name: "Competitor Style", component: ServiceVariant1 },
    { id: 2, name: "Bento Grid", component: ServiceVariant2 },
    { id: 3, name: "Horizontal Scroll", component: ServiceVariant3 },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 sm:py-12 py-6 px-4 sm:px-6 lg:px-8 border-b">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Service Section Design Variants
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Choose your preferred design style for the services section on the
            home page
          </p>

          {/* Variant Selector */}
          <div className="flex flex-wrap justify-center gap-3">
            {variants.map((variant) => (
              <Button
                key={variant.id}
                variant={activeVariant === variant.id ? "default" : "outline"}
                onClick={() => setActiveVariant(variant.id)}
                className="min-w-[150px]"
              >
                Variant {variant.id}: {variant.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Variant Display */}
      <div className="min-h-screen">
        {variants.map((variant) => (
          <div
            key={variant.id}
            className={activeVariant === variant.id ? "block" : "hidden"}
          >
            <variant.component />
          </div>
        ))}
      </div>

      {/* Implementation Notes */}
      <div className="bg-gray-900 text-white sm:py-12 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Implementation Notes</h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-primary mb-2">
                Variant 1: Competitor Style
              </h4>
              <ul className="space-y-1 text-gray-300">
                <li>• Dark background similar to competitor</li>
                <li>• Grid layout with consistent card sizes</li>
                <li>• Gradient text and hover effects</li>
                <li>• Best for professional/corporate feel</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-cyan-400 mb-2">
                Variant 2: Bento Grid
              </h4>
              <ul className="space-y-1 text-gray-300">
                <li>• Modern asymmetric layout</li>
                <li>• Featured service gets large card</li>
                <li>• Visual hierarchy through sizing</li>
                <li>• Best for highlighting key services</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-emerald-400 mb-2">
                Variant 3: Horizontal Scroll
              </h4>
              <ul className="space-y-1 text-gray-300">
                <li>• Mobile-friendly horizontal scroll</li>
                <li>• Numbered cards with detailed features</li>
                <li>• Space-efficient design</li>
                <li>• Best for detailed service descriptions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
