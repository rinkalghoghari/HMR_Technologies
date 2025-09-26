import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  Zap,
  Code,
  TestTube,
  Radio,
  Store,
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
} from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";
import Breadcrumb from "@/components/Breadcrumb";

export default function MobileApp() {
  usePageTitle(
    "Trusted Mobile App Service | Get Our Service Today! ",
    "Our mobile app service delivers reliable, custom, and user-friendly apps. Start your project today to engage users, and empower your business growth.",
  );

  const subServices = [
    {
      title: "Cross-Platform App Development",
      description:
        "Native performance with shared codebase using React Native and Flutter frameworks",
      icon: Smartphone,
    },
    {
      title: "Progressive Web Apps (PWA)",
      description:
        "Web apps that feel native with offline functionality and app store distribution",
      icon: Zap,
    },
    {
      title: "Smart Code Generation for Core Modules",
      description:
        "Accelerated development with intelligent code generation for common mobile patterns",
      icon: Code,
    },
    {
      title: "Device/OS Compatibility Testing",
      description:
        "Comprehensive testing across iOS and Android devices for consistent performance",
      icon: TestTube,
    },
    {
      title: "Real-Time Features",
      description:
        "Chat, notifications, live updates, and synchronization for engaging user experiences",
      icon: Radio,
    },
    {
      title: "Store Deployment & Optimization",
      description:
        "App store optimization, submission, and ongoing performance monitoring",
      icon: Store,
    },
  ];

  const testimonials = [
    {
      name: "Michael Stevens",
      company: "FitLife Apps",
      role: "Product Manager",
      content:
        "Our fitness app now works seamlessly across iOS and Android. The real-time features keep our users engaged and coming back daily.",
      rating: 5,
    },
    {
      name: "Rachel Kim",
      company: "EduTech Solutions",
      role: "CEO",
      content:
        "The PWA approach was genius - we saved months of development time and our app works perfectly on all devices without separate codebases.",
      rating: 5,
    },
  ];

  const compliance = [
    "iOS App Store Guidelines",
    "Google Play Store Policies",
    "GDPR Mobile Privacy Standards",
    "OWASP Mobile Security",
    "Platform Accessibility Standards",
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Mobile App Development" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative sm:py-20 py-8 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-yellow-500/5 to-orange-500/10"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 sm:gap-12 gap-6 items-center">
            <div className="sm:space-y-8 space-y-4">
              <div>
                {/* Breadcrumb */}
                <div className="mb-4">
                  <Breadcrumb
                    items={breadcrumbItems}
                    className="text-amber-700"
                  />
                </div>
                <Badge className="mb-4 bg-amber-100 text-amber-700 border-amber-200">
                  Mobile Innovation
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Mobile Apps That{" "}
                  <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                    Engage
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Develop cross-platform mobile apps using intelligent code
                  assistants and automated testing frameworks. Deliver
                  feature-rich mobile experiences that users love and businesses
                  depend on.
                </p>
              </div>

              <div className="flex flex-wrap sm:gap-4 gap-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
                >
                  <Link to="/contact">Start Your App</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">View App Portfolio</Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-600">Cross-Platform</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-600">Native Performance</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-600 mb-2">
                      4.8★
                    </div>
                    <div className="text-sm text-gray-600">
                      App Store Rating
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">
                      1M+
                    </div>
                    <div className="text-sm text-gray-600">Downloads</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">
                      60%
                    </div>
                    <div className="text-sm text-gray-600">
                      Faster Development
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">
                      200+
                    </div>
                    <div className="text-sm text-gray-600">Apps Launched</div>
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
              Complete Mobile Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to app store, we handle every aspect of mobile app
              development with modern tools and proven methodologies.
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
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Mobile App Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how our mobile development expertise has created engaging user
              experiences
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
              Platform Standards & Security
            </h2>
            <p className="text-xl text-gray-600">
              Compliant with all major app store guidelines and security
              standards
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
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Launch Your Mobile App?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Let's create a mobile experience that engages users and drives your
            business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-gray-100"
            >
              <Link to="/contact">Start Development</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white bg-tranparent border-white hover:bg-white hover:text-amber-600 fw-bold"
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
