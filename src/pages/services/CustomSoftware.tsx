import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Zap,
  Database,
  Cog,
  GitBranch,
  Wrench,
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  Globe,
} from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";
import Breadcrumb from "@/components/Breadcrumb";

export default function CustomSoftware() {
  usePageTitle(
    "Best Custom Software Solutions | Explore Our Services",
    "Discover custom software solutions tailored to your business. Reliable, scalable, and built to help you grow. Explore our services today.",
  );

  const subServices = [
    {
      title: "MVP Development & Iteration Sprints",
      description:
        "Rapid prototyping and iterative development to validate ideas and reach market faster",
      icon: Zap,
    },
    {
      title: "API Development & Integration",
      description:
        "Robust API architecture and seamless third-party integrations for connected ecosystems",
      icon: Globe,
    },
    {
      title: "Database Architecture",
      description:
        "Scalable database design and optimization for high-performance data management",
      icon: Database,
    },
    {
      title: "Legacy System Modernization",
      description:
        "Transform outdated systems into modern, maintainable, and scalable applications",
      icon: Wrench,
    },
    {
      title: "DevOps & CI/CD Automation",
      description:
        "Streamlined deployment pipelines and infrastructure automation for reliable delivery",
      icon: GitBranch,
    },
    {
      title: "Code Refactoring and Optimization",
      description:
        "Improve performance, maintainability, and scalability of existing codebases",
      icon: Cog,
    },
  ];

  const testimonials = [
    {
      name: "David Thompson",
      company: "Enterprise Solutions Inc",
      role: "CTO",
      content:
        "They transformed our legacy system into a modern platform that handles 40% the load. The development speed was incredible without compromising quality.",
      rating: 5,
    },
    {
      name: "Lisa Wang",
      company: "StartupFlow",
      role: "Founder",
      content:
        "From MVP to production-ready platform in 8 weeks. Their iterative approach helped us validate our concept and secure Series A funding.",
      rating: 5,
    },
  ];

  const compliance = [
    "SOC 2 Type II Compliance",
    "ISO 27001 Security Standards",
    "GDPR Data Protection",
    "HIPAA Healthcare Compliance",
    "PCI DSS Payment Security",
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Custom Software Development" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative sm:py-20 py-8 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-purple-500/10"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 sm:gap-12 gap-6 items-center">
            <div className="sm:space-y-8 space-y-4">
              <div>
                {/* Breadcrumb */}
                <div className="mb-4">
                  <Breadcrumb
                    items={breadcrumbItems}
                    className="text-blue-700"
                  />
                </div>
                <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
                  Enterprise Solutions
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Custom Software That{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Scales
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Build enterprise-grade custom software using advanced
                  development methodologies. From MVP to production-scale
                  applications, we deliver secure, maintainable solutions that
                  grow with your business.
                </p>
              </div>

              <div className="flex flex-wrap sm:gap-4 gap-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Link to="/contact">Start Development</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">Case Studies</Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-600">Enterprise Security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-600">Scalable Architecture</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      99.9%
                    </div>
                    <div className="text-sm text-gray-600">Uptime SLA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      40%
                    </div>
                    <div className="text-sm text-gray-600">Load Capacity</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">
                      50%
                    </div>
                    <div className="text-sm text-gray-600">
                      Faster Development
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600 mb-2">
                      100+
                    </div>
                    <div className="text-sm text-gray-600">
                      Enterprise Clients
                    </div>
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
              Complete Development Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, we handle every aspect of custom
              software development with enterprise-grade quality.
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
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
              Enterprise Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how we've transformed businesses with custom software
              solutions
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
      {/* <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center sm:mb-12 mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Security & Compliance
            </h2>
            <p className="text-xl text-gray-600">
              Enterprise-grade security standards and regulatory compliance
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
      </section> */}
      {/* CTA Section */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Build Your Custom Solution?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can transform your vision into a scalable,
            enterprise-grade software solution.
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
              className="text-white bg-tranparent border-white hover:bg-white hover:text-blue-600 fw-bold"
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
