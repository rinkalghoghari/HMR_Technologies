import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Zap,
  ShoppingCart,
  BarChart3,
  Search,
  Workflow,
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
} from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";
import Breadcrumb from "@/components/Breadcrumb";

export default function WebDevelopment() {
  usePageTitle(
    "Reliable Full-Stack Web Development | Explore Our services ",
    "Our full-stack development service creates responsive, reliable, and intuitive websites. Start your project now and grow your Online business.",
  );

  const subServices = [
    {
      title: "Static & Dynamic Website Development",
      description:
        "Fast, SEO-optimized websites built with modern frameworks and best practices",
      icon: Globe,
    },
    {
      title: "Jamstack / Headless CMS Solutions",
      description:
        "Scalable, secure websites with content management flexibility and developer efficiency",
      icon: Workflow,
    },
    {
      title: "E-commerce Platforms",
      description:
        "Complete online stores with payment integration, inventory management, and analytics",
      icon: ShoppingCart,
    },
    {
      title: "Web App Performance Optimization",
      description:
        "Speed optimization, caching strategies, and performance monitoring for peak efficiency",
      icon: Zap,
    },
    {
      title: "Advanced SEO & Speed Enhancements",
      description:
        "Technical SEO implementation and Core Web Vitals optimization for better rankings",
      icon: Search,
    },
    {
      title: "Frontend Automation",
      description:
        "Automated testing, deployment, and build processes for streamlined development",
      icon: BarChart3,
    },
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      company: "RetailTech Solutions",
      role: "Head of Digital",
      content:
        "Our new e-commerce platform handles 100x more traffic than our old site. Page load times dropped from 8 seconds to under 2 seconds.",
      rating: 5,
    },
    {
      name: "Jennifer Martinez",
      company: "GreenLeaf Organics",
      role: "Marketing Director",
      content:
        "The Jamstack solution they built is incredibly fast and easy to manage. Our content team can update everything without technical knowledge.",
      rating: 5,
    },
  ];

  const compliance = [
    "GDPR Cookie Compliance",
    "ADA Web Accessibility Standards",
    "PCI DSS E-commerce Security",
    "Core Web Vitals Optimization",
    "SSL/TLS Security Implementation",
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Web Development" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative sm:py-20 py-8 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-green-500/5 to-teal-500/10"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 sm:gap-12 gap-6 items-center">
            <div className="space-y-8">
              <div>
                {/* Breadcrumb */}
                <div className="mb-4">
                  <Breadcrumb
                    items={breadcrumbItems}
                    className="text-emerald-700"
                  />
                </div>
                <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-emerald-200">
                  Web Excellence
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Web Development That{" "}
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Performs
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Create high-performance websites using modern development
                  tools and automated deployment pipelines. From lightning-fast
                  static sites to complex web applications that scale.
                </p>
              </div>

              <div className="flex flex-wrap sm:gap-4 gap-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                >
                  <Link to="/contact">Start Your Website</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">View Our Work</Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-600">Lightning Fast</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-600">SEO Optimized</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">
                      &lt;2s
                    </div>
                    <div className="text-sm text-gray-600">Page Load Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600 mb-2">
                      95+
                    </div>
                    <div className="text-sm text-gray-600">
                      Performance Score
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      100%
                    </div>
                    <div className="text-sm text-gray-600">
                      Mobile Responsive
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600 mb-2">
                      500+
                    </div>
                    <div className="text-sm text-gray-600">Websites Built</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Services Section */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center sm:mb-16 mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Complete Web Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple landing pages to complex web applications, we build
              websites that drive results and deliver exceptional user
              experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:gap-8 gap-4">
            {subServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                >
                  <CardContent className="sm:p-8 p-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center sm:mb-16 mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Website Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how our web development expertise has transformed online
              presence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardContent className="sm:p-8 p-4">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center sm:mb-12 mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Web Standards & Security
            </h2>
            <p className="text-xl text-gray-600">
              Built with modern web standards and security best practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 sm:gap-6 gap-3">
            {compliance.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
              >
                <Shield className="w-6 h-6 text-green-600" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Build Your High-Performance Website?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Let's create a website that not only looks great but delivers
            exceptional performance and results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-gray-100"
            >
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white bg-tranparent border-white hover:bg-white hover:text-emerald-600 fw-bold"
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
