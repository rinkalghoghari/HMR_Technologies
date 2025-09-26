import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Users, Target } from "lucide-react";
import Breadcrumb from "./Breadcrumb";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description: string;
  children?: ReactNode;
  variant?:
    | "default"
    | "services"
    | "about"
    | "careers"
    | "blog"
    | "faq"
    | "contact";
  rightContent?: "stats" | "features" | "testimonial" | "process" | "none";
  breadItems?: { label: string; href?: string }[];
}

const variantStyles = {
  default: {
    gradient: "from-blue-600 via-purple-600 to-cyan-500",
    accent: "from-orange-500 to-pink-500",
  },
  services: {
    gradient: "from-emerald-600 via-teal-600 to-cyan-500",
    accent: "from-blue-500 to-indigo-500",
  },
  about: {
    gradient: "from-purple-600 via-indigo-600 to-blue-500",
    accent: "from-pink-500 to-red-500",
  },
  careers: {
    gradient: "from-orange-600 via-red-600 to-pink-500",
    accent: "from-yellow-500 to-orange-500",
  },
  blog: {
    gradient: "from-teal-600 via-cyan-600 to-blue-500",
    accent: "from-green-500 to-emerald-500",
  },
  faq: {
    gradient: "from-indigo-600 via-purple-600 to-pink-500",
    accent: "from-blue-500 to-cyan-500",
  },
  contact: {
    gradient: "from-cyan-600 via-blue-600 to-indigo-500",
    accent: "from-teal-500 to-cyan-500",
  },
};

const rightContentComponents = {
  stats: (variant: string) => {
    const styles = variantStyles[variant as keyof typeof variantStyles];
    return (
      <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Impact</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div
                className={`text-3xl font-bold bg-gradient-to-r ${styles.gradient} bg-clip-text text-transparent`}
              >
                55+
              </div>
              <div className="text-sm text-gray-500">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div
                className={`text-3xl font-bold bg-gradient-to-r ${styles.gradient} bg-clip-text text-transparent`}
              >
                40%
              </div>
              <div className="text-sm text-gray-500">Faster Development</div>
            </div>
            <div className="text-center">
              <div
                className={`text-3xl font-bold bg-gradient-to-r ${styles.gradient} bg-clip-text text-transparent`}
              >
                85%
              </div>
              <div className="text-sm text-gray-500">Client Retantion</div>
            </div>
            <div className="text-center">
              <div
                className={`text-3xl font-bold bg-gradient-to-r ${styles.gradient} bg-clip-text text-transparent`}
              >
                24/7
              </div>
              <div className="text-sm text-gray-500">Monitoring</div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  },

  features: (variant: string) => {
    const styles = variantStyles[variant as keyof typeof variantStyles];
    return (
      <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Why Choose Us
          </h3>
          <div className="space-y-4">
            {[
              { icon: CheckCircle, text: "AI-Powered Development" },
              { icon: TrendingUp, text: "40% Faster Delivery" },
              { icon: Users, text: "Expert Team Review" },
              { icon: Target, text: "100% Quality Focus" },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div
                  className={`w-8 h-8 rounded-full bg-gradient-to-r ${styles.gradient} flex items-center justify-center`}
                >
                  <item.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  },

  testimonial: (variant: string) => {
    const styles = variantStyles[variant as keyof typeof variantStyles];
    return (
      <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
        <CardContent className="p-8">
          <div className="text-center">
            <div
              className={`w-16 h-16 rounded-full bg-gradient-to-r ${styles.gradient} mx-auto mb-4 flex items-center justify-center`}
            >
              <span className="text-white font-bold text-xl">★</span>
            </div>
            <blockquote className="text-lg text-gray-700 mb-4 italic">
              "HMR Technologies transformed our development process. Their
              AI-powered approach delivered our project 40% faster than
              expected."
            </blockquote>
            <div className="border-t pt-4">
              <div className="font-semibold text-gray-900">Sarah Johnson</div>
              <div className="text-sm text-gray-500">CTO, TechStart Inc.</div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  },

  process: (variant: string) => {
    const styles = variantStyles[variant as keyof typeof variantStyles];
    return (
      <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h3>
          <div className="space-y-4">
            {[
              "AI Analysis & Planning",
              "Rapid Development Sprint",
              "Expert Code Review",
              "Quality Assurance & Delivery",
            ].map((step, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div
                  className={`w-8 h-8 rounded-full bg-gradient-to-r ${styles.gradient} flex items-center justify-center text-white font-bold text-sm`}
                >
                  {index + 1}
                </div>
                <span className="text-gray-700 font-medium">{step}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  },
};

export default function PageHero({
  title,
  subtitle,
  description,
  children,
  variant = "default",
  rightContent = "stats",
  breadItems = [],
}: PageHeroProps) {
  const styles = variantStyles[variant];

  return (
    <section className="relative lg:py-20 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-50">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-30">
        {/* Horizontal Lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent"
              style={{ top: `${i * 6.67}%` }}
            />
          ))}
        </div>
        {/* Vertical Lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute h-full w-px bg-gradient-to-b from-transparent via-gray-300/50 to-transparent"
              style={{ left: `${i * 10}%` }}
            />
          ))}
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-white/60" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Breadcrumb */}
        <div className="mb-4">
          <Breadcrumb items={breadItems} />
        </div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 animate-slide-up">
            {/* Subtitle */}
            {subtitle && (
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 border border-gray-200/50 shadow-sm">
                <span
                  className={`text-sm font-medium bg-gradient-to-r ${styles.accent} bg-clip-text text-transparent`}
                >
                  {subtitle}
                </span>
              </div>
            )}

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span
                className={`bg-gradient-to-r ${styles.gradient} bg-clip-text text-transparent`}
              >
                {title}
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed">
              {description}
            </p>

            {/* Optional Children (buttons, etc.) */}
            {children && <div className="flex flex-row gap-4">{children}</div>}
          </div>

          {/* Right Content */}
          <div className="animate-slide-in-right relative">
            {/* Decorative Background */}
            <div
              className={`absolute -inset-4 bg-gradient-to-r ${styles.gradient} opacity-10 rounded-3xl blur-xl`}
            />
            <div className="relative">
              {rightContent !== "none" &&
                rightContentComponents[rightContent]?.(variant)}
            </div>

            {/* Floating Gradient Orbs */}
            <div
              className={`absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br ${styles.gradient} opacity-20 rounded-full animate-float blur-sm`}
            />
            <div
              className={`absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br ${styles.accent} opacity-20 rounded-full animate-pulse-slow blur-sm`}
            />
          </div>
        </div>
      </div>

      {/* Additional Decorative Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-gradient-to-r from-primary to-cyan-500 rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-float" />
      <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-pulse-slow" />
      <div
        className="absolute bottom-20 right-1/3 w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-float"
        style={{ animationDelay: "0.5s" }}
      />
    </section>
  );
}
