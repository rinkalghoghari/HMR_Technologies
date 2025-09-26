import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Code,
  Palette,
  CheckCircle,
  ArrowRight,
  Globe,
  Smartphone,
  Shield,
  Users,
  Building2,
  ShoppingCart,
  Heart,
  GraduationCap,
  DollarSign,
  Factory,
} from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";
import HeroCarousel from "@/components/HeroCarousel";
import { usePageTitle } from "@/hooks/usePageTitle";
import TypingText from "@/components/TypingText";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import OurCulture from "@/components/common/OurCulture";
import WhyChooseUs from "@/components/common/WhyChooseUs";
import ClientReviews from "@/components/common/ClientReviews";

export default function Home() {
  usePageTitle(
    "Trusted AI-Powered Development Services | HMR Technologies",
    "Accelerate projects with modern tools like Cursor, Copilot and Replit. Our skilled team delivers faster, reliable outcomes. Contact us to build your project.",
  );

  return (
    <div className="lg:pt-16 sm:pt-5 pt-0 page-transition overflow-x-hidden">
      {/* Hero Section with Grid Background */}
      <section className="relative py-5 px-4 sm:px-6 lg:px-8">
        {/* Grid Background */}
        <div className="absolute inset-0">
          {/* Horizontal Lines */}
          <div className="absolute inset-0">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute w-full h-px bg-gradient-to-r from-transparent via-gray-200/50 to-transparent"
                style={{ top: `${i * 5}%` }}
              />
            ))}
          </div>
          {/* Vertical Lines */}
          <div className="absolute inset-0">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute h-full w-px bg-gradient-to-b from-transparent via-gray-200/50 to-transparent"
                style={{ left: `${i * 8.33}%` }}
              />
            ))}
          </div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-white/60" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-slide-up">
              <div>
                {/* Badge */}
                <div className="inline-flex items-center px-3 py-1.5 mb-4 bg-gradient-to-r from-purple-600/15 to-blue-600/15 border border-purple-300/50 rounded-full animate-pulse-slow">
                  <span className="text-xs font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    <span className="opacity-70 text-[#ffffff] bg-[#00000000]">
                      🚀
                    </span>{" "}
                    Faster Development AI-Powered Services Company
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Build Apps{" "}
                  <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent animate-pulse-glow">
                    Faster
                  </span>{" "}
                  with{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    AI-Powered
                  </span>
                  <br />
                  <TypingText
                    texts={[
                      "Startup Founders",
                      "Product Managers",
                      "Agile Teams",
                      "Development Teams",
                      "Designer Teams",
                      "Engineering Leads",
                      "UX Designers",
                      "DevOps Engineers",
                      "AI Enthusiasts",
                      "Remote Collaborators",
                      "Freelancers",
                      "Innovative Teams",
                    ]}
                    className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent"
                  />
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed text-justify">
                  <span className="bg-gradient-to-r from-gray-700 to-gray-600 bg-clip-text text-transparent font-medium">
                    Success Stories That Speak{" "}
                  </span>
                  <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent font-bold">
                    Volumes
                  </span>
                  <br />
                  Our expert developers leverage{" "}
                  <Link to="/about" className="text-primary hover:underline">
                    AI-powered tools
                  </Link>{" "}
                  to accelerate delivery without compromising creativity.
                  Explore our{" "}
                  <Link
                    to="/case-studies"
                    className="text-primary hover:underline"
                  >
                    case studies
                  </Link>{" "}
                  and see the results.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto px-6 sm:px-8 bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary transform hover:scale-105 transition-all"
                >
                  <Link to="/contact">Start Your Project</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto px-6 sm:px-8 border-2 hover:bg-gradient-to-r hover:from-primary/10 hover:to-blue-600/10"
                >
                  <Link to="/services">View Our Services</Link>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-medium">
                    AI-Powered Development
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent font-medium">
                    Expert Human Review
                  </span>
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-3 sm:gap-4 gap-2 pt-6 sm:pt-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    40%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    Faster Development
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    Code Reviewed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                    24/7
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    Monitoring
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Carousel */}
            <div className="animate-slide-in-right lg:flex hidden:flex relative order-first lg:order-last">
              {/* Decorative Background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-orange-400/20 rounded-3xl blur-xl " />
              <div className="relative w-72 mx-auto sm:w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <HeroCarousel />
              </div>

              {/* Floating Gradient Orbs */}
              <div className="hidden sm:flex absolute -top-8 -right-4 xl:-right-8 w-16 h-16 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full animate-float blur-sm" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full animate-pulse-slow blur-sm" />
              <div
                className="absolute top-1/3 -left-4 w-8 h-8 bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-full animate-float"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </div>

        {/* Additional Decorative Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-float" />
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-pulse-slow" />
        <div
          className="absolute bottom-20 right-1/3 w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        />
      </section>
      {/* Services Bento Grid Section */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center sm:mb-16 mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              . By Startups,{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Chosen By Global Brands
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From solving complex challenges to turning your vision into
              reality, our comprehensive{" "}
              <Link
                to="/services"
                className="text-primary hover:underline font-medium"
              >
                development services
              </Link>{" "}
              are designed to make a real difference for businesses of all
              sizes.
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
                    Custom Software Development
                  </h3>
                  <hr className="border-blue-200 mb-4" />
                  <p className="text-gray-700 text-base leading-relaxed">
                    Build enterprise-grade custom software using advanced
                    development tools like GitHub Copilot and Cursor IDE. Our
                    accelerated development process maintains enterprise
                    security and scalability while delivering faster results.
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
                    UI/UX Design
                  </h3>
                  <hr className="border-pink-200 mb-3" />
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Transform user experiences using cutting-edge design tools
                    and methodologies. We combine human creativity with
                    intelligent automation to deliver stunning, user-centered
                    designs 40% faster.
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
                    Web Development
                  </h3>
                  <hr className="border-emerald-200 mb-3" />
                  <p className="text-gray-700 text-base leading-relaxed">
                    Create high-performance websites using modern development
                    tools and automated deployment pipelines. From intelligent
                    component generation to smart SEO optimization, we deliver
                    web solutions at lightning speed.
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
                    Mobile App Development
                  </h3>
                  <hr className="border-amber-200 mb-3" />
                  <p className="text-gray-700 text-base leading-relaxed">
                    Develop cross-platform mobile apps using intelligent code
                    assistants and automated testing frameworks. Deliver
                    feature-rich mobile experiences faster than traditional
                    development approaches.
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
                    QA & Testing
                  </h3>
                  <hr className="border-cyan-200 mb-3" />
                  <p className="text-gray-700 text-base leading-relaxed">
                    Revolutionize quality assurance with intelligent testing
                    tools that automatically generate test cases, detect bugs,
                    and predict potential failures. Achieve comprehensive test
                    coverage through smart automation.
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
                    Talent Solutions & IT Staff Augmentation
                  </h3>
                  <hr className="border-violet-200 mb-3" />
                  <p className="text-gray-700 text-base leading-relaxed">
                    Access developers trained in the latest development tools
                    and methodologies. Our talent pool specializes in modern
                    development practices, ensuring your team stays ahead of the
                    technology curve.
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
      {/* About Preview */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl sm:p-8 p-4 shadow-lg">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  <div className="absolute top-4 left-4 w-16 h-16 bg-primary/10 rounded-full animate-pulse-slow"></div>
                  <div className="absolute bottom-8 right-8 w-12 h-12 bg-cyan-500/10 rounded-full animate-float"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-emerald-500/5 rounded-full animate-spin-slow"></div>
                </div>

                {/* Team Collaboration Illustration */}
                <div className="relative z-10 flex items-center justify-center sm:py-12 py-6">
                  <div className="grid grid-cols-2 gap-8 items-center">
                    {/* Developer Avatar 1 */}
                    <div className="text-center animate-float">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <div className="text-sm text-gray-600">Developer</div>
                    </div>

                    {/* AI Assistant */}
                    <div
                      className="text-center animate-float"
                      style={{ animationDelay: "0.5s" }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      </div>
                      <div className="text-sm text-gray-600">AI Assistant</div>
                    </div>

                    {/* Code Output */}
                    <div className="col-span-2 text-center mt-6 animate-slide-up">
                      <div className="w-20 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                      </div>
                      <div className="text-sm text-gray-600 mt-2">
                        40% Faster Code
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Development Philosophy
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At HMR Technologies, we don't just use AI tools we master them
                to deliver exceptional results. Our expertise lies in combining
                the speed and efficiency of cutting-edge tools with human
                creativity, critical thinking, and precision. Learn more{" "}
                <Link to="/about" className="text-primary hover:underline">
                  about our company
                </Link>
                .
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe tools are only as powerful as the hands that use
                them. That's why our{" "}
                <Link to="/careers" className="text-primary hover:underline">
                  expert developers
                </Link>{" "}
                work alongside these tools, not beneath them creating products
                that feel real, function flawlessly, and go to market faster.
                Check out our{" "}
                <Link to="/use-cases" className="text-primary hover:underline">
                  industry use cases
                </Link>
                .
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      AI + Human Expertise
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Perfect balance of automation and creativity
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Faster AI-Powered Delivery
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Accelerated development without compromise
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-center lg:justify-start">
                <Button asChild>
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center sm:mb-12 mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Our AI solutions adapt to meet the unique needs of every industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Building2 className="w-8 h-8" />,
                title: "SaaS Startups",
                color: "text-blue-600 bg-blue-100",
              },
              {
                icon: <ShoppingCart className="w-8 h-8" />,
                title: "E-commerce & Retail",
                color: "text-green-600 bg-green-100",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Healthcare & Medical",
                color: "text-red-600 bg-red-100",
              },
              {
                icon: <GraduationCap className="w-8 h-8" />,
                title: "Education & Training",
                color: "text-purple-600 bg-purple-100",
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Financial Services",
                color: "text-yellow-600 bg-yellow-100",
              },
              {
                icon: <Factory className="w-8 h-8" />,
                title: "Manufacturing & Logistics",
                color: "text-orange-600 bg-orange-100",
              },
            ].map((industry, idx) => (
              <Card
                key={idx}
                className="text-center hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 ${industry.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                  >
                    {industry.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Specialized solutions tailored for{" "}
                    {industry.title.toLowerCase()} challenges
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Client Reviews */}
      <ClientReviews />

      {/* Our Culture Section */}
      <OurCulture />

      {/* News Letters */}
      <NewsletterForm />
    </div>
  );
}
