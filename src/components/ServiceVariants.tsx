import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import OptimizedImage from './OptimizedImage';
import {
  Palette,
  Code,
  Globe,
  Smartphone,
  CheckCircle,
  Users,
  ArrowRight,
  Zap,
  Shield,
  Target,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Transform user experiences using cutting-edge design tools and methodologies. We combine human creativity with intelligent automation to deliver stunning, user-centered designs 40% faster.",
    features: [
      "Interactive Prototypes",
      "Design System Creation",
      "User Research & Analysis",
      "A/B Testing & Optimization",
    ],
    gradient: "from-pink-500 to-rose-500",
    bgGradient: "from-pink-50 to-rose-50",
    aiTools: ["Figma", "Adobe Creative Suite", "Midjourney", "Framer"],
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "Build enterprise-grade custom software using advanced development tools like GitHub Copilot and Cursor IDE. Our accelerated development process maintains enterprise security and scalability while delivering faster results.",
    features: [
      "Code Generation & Review",
      "Automated Testing Suites",
      "Architecture Planning",
      "Performance Optimization",
    ],
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    aiTools: ["GitHub Copilot", "Cursor IDE", "TabNine", "Replit Agent"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Create high-performance websites using modern development tools and automated deployment pipelines. From intelligent component generation to smart SEO optimization, we deliver web solutions at lightning speed.",
    features: [
      "Component Generation",
      "SEO Optimization",
      "Performance Tuning",
      "Analytics Integration",
    ],
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
    aiTools: ["Vercel v0", "Webflow", "Framer", "Builder.io"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Develop cross-platform mobile apps using intelligent code assistants and automated testing frameworks. Deliver feature-rich mobile experiences faster than traditional development approaches.",
    features: [
      "Cross-Platform Development",
      "Automated Testing",
      "User Behavior Analytics",
      "Smart Notifications",
    ],
    gradient: "from-purple-500 to-violet-500",
    bgGradient: "from-purple-50 to-violet-50",
    aiTools: ["FlutterFlow", "React Native", "Expo", "Firebase"],
  },
  {
    icon: Shield,
    title: "QA & Testing",
    description:
      "Revolutionize quality assurance with intelligent testing tools that automatically generate test cases, detect bugs, and predict potential failures. Achieve comprehensive test coverage through smart automation.",
    features: [
      "Automated Test Generation",
      "Bug Detection",
      "Security Scanning",
      "Performance Monitoring",
    ],
    gradient: "from-orange-500 to-amber-500",
    bgGradient: "from-orange-50 to-amber-50",
    aiTools: ["Testim", "Mabl", "Applitools", "Sauce Labs"],
  },
  {
    icon: Users,
    title: "Talent Solutions & IT Staff Augmentation",
    description:
      "Access developers trained in the latest development tools and methodologies. Our talent pool specializes in modern development practices, ensuring your team stays ahead of the technology curve.",
    features: [
      "Skilled Developers",
      "Tool Training",
      "Development Mentorship",
      "Technology Transition",
    ],
    gradient: "from-indigo-500 to-blue-500",
    bgGradient: "from-indigo-50 to-blue-50",
    aiTools: [
      "Cursor Training",
      "Copilot Certification",
      "Workflow Setup",
      "Best Practices",
    ],
  },
];

// Variant 1: Grid Layout with Cards (Similar to competitor)
export function ServiceVariant1() {
  return (
    <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/20 rounded-full text-primary text-sm font-medium mb-4">
            Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted By Startups,
            <br />
            <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              Chosen By Global Brands
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From solving complex challenges to turning your vision into reality,
            our high-end offerings are designed to make a real difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br ${service.bgGradient} border-0 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group`}
            >
              <CardContent className="p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`}
                      ></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/services">Explore All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

// Variant 2: Unique Bento Grid Layout
export function ServiceVariant2() {
  return (
    <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted By Startups,{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Chosen By Global Brands
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From solving complex challenges to turning your vision into reality,
            our high-end offerings are designed to make a real difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Row 1: Custom Software Development (Large) + UI/UX Design */}
          <Link
            to="/services/custom-software"
            className="lg:col-span-3 md:col-span-2 group cursor-pointer"
          >
            <div className="relative h-full bg-gradient-to-br from-blue-100 via-blue-50 to-indigo-100 rounded-3xl p-8 border border-blue-200/50 hover:border-blue-300/70 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl rotate-12 group-hover:rotate-6 transition-transform duration-500"></div>
              </div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-7 h-7 text-white" />
                  </div>
                  <ArrowRight className="w-6 h-6 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {services[1].title}
                </h3>
                <hr className="border-blue-200 mb-4" />
                <p className="text-gray-700 text-base leading-relaxed">
                  {services[1].description}
                </p>
              </div>
            </div>
          </Link>

          <Link
            to="/services/ui-ux-design"
            className="lg:col-span-1 md:col-span-2 group cursor-pointer"
          >
            <div className="relative h-full bg-gradient-to-br from-pink-100 via-rose-50 to-pink-100 rounded-3xl p-6 border border-pink-200/50 hover:border-pink-300/70 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl rotate-12 group-hover:rotate-6 transition-transform duration-500"></div>
              </div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-pink-600 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {services[0].title}
                </h3>
                <hr className="border-pink-200 mb-3" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  {services[0].description}
                </p>
              </div>
            </div>
          </Link>

          {/* Row 2: Web Development + Mobile App Development */}
          <Link
            to="/services/web-development"
            className="md:col-span-2 group cursor-pointer"
          >
            <div className="relative h-full bg-gradient-to-br from-emerald-100 via-green-50 to-emerald-100 rounded-3xl p-6 border border-emerald-200/50 hover:border-emerald-300/70 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl rotate-12 group-hover:rotate-6 transition-transform duration-500"></div>
              </div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-emerald-600 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {services[2].title}
                </h3>
                <hr className="border-emerald-200 mb-3" />
                <p className="text-gray-700 text-base leading-relaxed">
                  {services[2].description}
                </p>
              </div>
            </div>
          </Link>

          <Link
            to="/services/mobile-app"
            className="md:col-span-2 group cursor-pointer"
          >
            <div className="relative h-full bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-100 rounded-3xl p-6 border border-amber-200/50 hover:border-amber-300/70 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl rotate-12 group-hover:rotate-6 transition-transform duration-500"></div>
              </div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-amber-600 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {services[3].title}
                </h3>
                <hr className="border-amber-200 mb-3" />
                <p className="text-gray-700 text-base leading-relaxed">
                  {services[3].description}
                </p>
              </div>
            </div>
          </Link>

          {/* Row 3: QA & Testing + Talent Solutions */}
          <Link
            to="/services/qa-testing"
            className="md:col-span-2 group cursor-pointer"
          >
            <div className="relative h-full bg-gradient-to-br from-cyan-100 via-teal-50 to-cyan-100 rounded-3xl p-6 border border-cyan-200/50 hover:border-cyan-300/70 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl rotate-12 group-hover:rotate-6 transition-transform duration-500"></div>
              </div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-cyan-600 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {services[4].title}
                </h3>
                <hr className="border-cyan-200 mb-3" />
                <p className="text-gray-700 text-base leading-relaxed">
                  {services[4].description}
                </p>
              </div>
            </div>
          </Link>

          <Link
            to="/services/talent-solutions"
            className="md:col-span-2 group cursor-pointer"
          >
            <div className="relative h-full bg-gradient-to-br from-violet-100 via-purple-50 to-violet-100 rounded-3xl p-6 border border-violet-200/50 hover:border-violet-300/70 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl rotate-12 group-hover:rotate-6 transition-transform duration-500"></div>
              </div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-violet-600 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {services[5].title}
                </h3>
                <hr className="border-violet-200 mb-3" />
                <p className="text-gray-700 text-base leading-relaxed">
                  {services[5].description}
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
          >
            <Link to="/services">Explore All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

// Variant 3: Horizontal Scroll Cards
export function ServiceVariant3() {
  return (
    <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Digital Solutions{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Under One Roof
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              From concept to deployment, we provide end-to-end technology
              services that transform your business and drive sustainable
              growth.
            </p>
          </div>
          <div className="lg:w-1/2 lg:text-right">
            <Button asChild size="lg">
              <Link to="/services">
                Explore All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-6 w-max">
            {services.map((service, index) => (
              <Card
                key={index}
                className="w-80 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex-shrink-0"
              >
                <CardContent className="p-6 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400 mb-1">
                        0{index + 1}
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-gray-900 mb-2">
                      Key Features:
                    </div>
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-xs text-gray-600"
                      >
                        <Target className="w-3 h-3 text-primary mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}