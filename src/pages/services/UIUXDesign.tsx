import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Palette,
  Users,
  Eye,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  Globe,
} from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";
import Breadcrumb from "@/components/Breadcrumb";

export default function UIUXDesign() {
  usePageTitle(
    "Professional UI/UX Design Services | Get Reliable Solutions",
    "Build expert UI/UX design to create visually appealing and user-friendly digital products. Make every user interaction smooth and enjoyable.",
  );

  const subServices = [
    {
      title: "UX Research & Persona Mapping",
      description:
        "Understand your users through comprehensive research and intelligent survey clustering",
      icon: Users,
    },
    {
      title: "Wireframing",
      description:
        "Create clear, functional wireframes that establish perfect information architecture",
      icon: Eye,
    },
    {
      title: "High-Fidelity Prototyping",
      description:
        "Build interactive prototypes that bring your vision to life before development",
      icon: Zap,
    },
    {
      title: "UX Writing",
      description:
        "Craft compelling microcopy and content that guides users seamlessly",
      icon: Palette,
    },
    {
      title: "UI Design Systems",
      description:
        "Develop scalable design systems ensuring consistency across all touchpoints",
      icon: Shield,
    },
    {
      title: "Accessibility & Usability Testing",
      description:
        "Ensure your designs work for everyone with comprehensive testing protocols",
      icon: CheckCircle,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechFlow Inc",
      role: "Product Manager",
      content:
        "The design system they created revolutionized our product development. Our team can now ship features 3x faster with perfect consistency.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      company: "Digital Ventures",
      role: "CEO",
      content:
        "Their UX research uncovered insights we never would have found ourselves. The redesign increased our conversion rate by 340%.",
      rating: 5,
    },
  ];

  const compliance = [
    "WCAG 2.1 AA Accessibility Standards",
    "GDPR Privacy Compliance",
    "Section 508 Accessibility",
    "ISO 9241-210 Human-Centered Design",
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "UI/UX Design Services" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative sm:py-20 py-8 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-rose-500/5 to-purple-500/10"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 sm:gap-12 gap-6 items-center">
            <div className="sm:space-y-8 space-y-4">
              <div>
                {/* Breadcrumb */}
                <div className="mb-4">
                  <Breadcrumb
                    items={breadcrumbItems}
                    className="text-pink-700"
                  />
                </div>
                <Badge className="mb-4 bg-pink-100 text-pink-700 border-pink-200">
                  Design Excellence
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  UI/UX Design That{" "}
                  <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    Converts
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform user experiences with research-driven design
                  methodologies. From user personas to interactive prototypes,
                  we create designs that drive engagement and deliver measurable
                  results.
                </p>
              </div>

              <div className="flex flex-wrap sm:gap-4 gap-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
                >
                  <Link to="/contact">Start Your Project</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">View Portfolio</Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-600">User-Centered Design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-600">Accessibility First</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-600 mb-2">
                      340%
                    </div>
                    <div className="text-sm text-gray-600">
                      Conversion Increase
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      85%
                    </div>
                    <div className="text-sm text-gray-600">
                      User Retantion
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-rose-600 mb-2">
                      3x
                    </div>
                    <div className="text-sm text-gray-600">
                      Faster Development
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">
                      50+
                    </div>
                    <div className="text-sm text-gray-600">Design Systems</div>
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
              Comprehensive Design Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From research to implementation, we cover every aspect of the
              design process to ensure your product succeeds.
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
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how our design expertise has transformed businesses
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
              Standards & Compliance
            </h2>
            <p className="text-xl text-gray-600">
              We adhere to the highest industry standards for accessibility and
              quality
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
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your User Experience?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Let's create designs that not only look stunning but drive real
            business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-gray-100"
            >
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white bg-tranparent border-white hover:bg-white hover:text-pink-600 fw-bold"
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
