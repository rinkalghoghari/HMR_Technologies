import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  RotateCcw,
  BarChart3,
  FileText,
  Eye,
  Lock,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";
import Breadcrumb from "@/components/Breadcrumb";

export default function QATesting() {
  usePageTitle(
    "Professional QA Testing Services | Get Started Now",
    "Get expert QA testing services tailored to your needs. Ensure top performance, secure apps, and seamless user experience. Start your project now.",
  );

  const subServices = [
    {
      title: "Automated Test Case Generation",
      description:
        "Intelligent test case creation that covers edge cases and ensures comprehensive coverage",
      icon: FileText,
    },
    {
      title: "Regression Testing with Advanced Tools",
      description:
        "Automated regression testing that catches issues before they reach production",
      icon: RotateCcw,
    },
    {
      title: "Performance & Load Testing",
      description:
        "Stress testing and performance optimization to ensure scalability under load",
      icon: BarChart3,
    },
    {
      title: "Manual Testing + Enhanced Reporting",
      description:
        "Expert manual testing combined with detailed reporting and actionable insights",
      icon: Eye,
    },
    {
      title: "UI/UX Consistency Checks",
      description:
        "Automated visual testing to ensure consistent user experience across platforms",
      icon: Shield,
    },
    {
      title: "Security & Vulnerability Scanning",
      description:
        "Comprehensive security testing to identify and resolve potential vulnerabilities",
      icon: Lock,
    },
  ];

  const testimonials = [
    {
      name: "James Wilson",
      company: "FinanceApp Pro",
      role: "Lead Developer",
      content:
        "Their testing approach caught critical security issues we missed. The automated test generation saved us weeks of manual work.",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      company: "HealthTech Solutions",
      role: "Quality Manager",
      content:
        "Bug detection rate improved by 85% and our release cycles are now 40% faster. The detailed reporting helps our team improve continuously.",
      rating: 5,
    },
  ];

  const compliance = [
    "ISO 25010 Software Quality Standards",
    "IEEE 829 Testing Documentation",
    "NIST Cybersecurity Framework",
    "OWASP Security Testing Guidelines",
    "Agile Testing Best Practices",
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "QA & Testing" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative sm:py-20 py-8 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-teal-500/5 to-blue-500/10"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 sm:gap-12 gap-6 items-center">
            <div className="sm:space-y-8 space-y-4">
              <div>
                {/* Breadcrumb */}
                <div className="mb-4">
                  <Breadcrumb
                    items={breadcrumbItems}
                    className="text-cyan-700"
                  />
                </div>
                <Badge className="mb-4 bg-cyan-100 text-cyan-700 border-cyan-200">
                  Quality Assurance
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  QA & Testing That{" "}
                  <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                    Prevents
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Revolutionize quality assurance with intelligent testing tools
                  that automatically generate test cases, detect bugs, and
                  predict potential failures. Achieve comprehensive test
                  coverage through smart automation.
                </p>
              </div>

              <div className="flex flex-wrap sm:gap-4 gap-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700"
                >
                  <Link to="/contact">Improve Quality</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">Testing Portfolio</Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-600">Zero Defect Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-600">Automated Coverage</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600 mb-2">
                      99.8%
                    </div>
                    <div className="text-sm text-gray-600">
                      Bug Detection Rate
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600 mb-2">
                      85%
                    </div>
                    <div className="text-sm text-gray-600">Test Coverage</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      40%
                    </div>
                    <div className="text-sm text-gray-600">Faster Releases</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">
                      300+
                    </div>
                    <div className="text-sm text-gray-600">Projects Tested</div>
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
              Comprehensive Testing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From automated test generation to security scanning, we ensure
              your software meets the highest quality standards before reaching
              users.
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
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
              Quality Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how our testing expertise has prevented critical issues and
              improved software quality
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
              Testing Standards & Frameworks
            </h2>
            <p className="text-xl text-gray-600">
              Following industry-leading testing standards and security
              frameworks
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
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Ensure Zero-Defect Delivery?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Let's implement comprehensive testing that catches issues before
            they impact your users.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-gray-100"
            >
              <Link to="/contact">Improve Quality Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white bg-tranparent border-white hover:bg-white hover:text-cyan-600 fw-bold"
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
