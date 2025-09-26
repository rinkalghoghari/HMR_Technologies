import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  GraduationCap,
  Wrench,
  UserCheck,
  Globe,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
} from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";
import Breadcrumb from "@/components/Breadcrumb";

export default function TalentSolutions() {
  usePageTitle(
    "Talent Solutions for Business Growth | Get Skilled IT Staff",
    "Trusted talent solutions to grow your business. Get skilled IT staff for web, mobile, and QA projects. Create strong teams and drive results now!",
  );

  const subServices = [
    {
      title: "Full-Stack Developer Augmentation",
      description:
        "Skilled developers proficient in modern frameworks and development methodologies",
      icon: Users,
    },
    {
      title: "Advanced Tool Training & Onboarding",
      description:
        "Comprehensive training programs for modern development tools and best practices",
      icon: GraduationCap,
    },
    {
      title: "Project Rescue Teams",
      description:
        "Expert teams specialized in recovering troubled projects and technical debt reduction",
      icon: Wrench,
    },
    {
      title: "Tech Mentorship & Training Support",
      description:
        "Ongoing mentorship and skill development for your existing development teams",
      icon: UserCheck,
    },
    {
      title: "Remote Product Teams as a Service",
      description:
        "Complete remote teams that integrate seamlessly with your existing workflows",
      icon: Globe,
    },
    {
      title: "Dedicated Technology-Ready Pods",
      description:
        "Self-contained development pods with expertise in cutting-edge development practices",
      icon: Zap,
    },
  ];

  const testimonials = [
    {
      name: "Thomas Anderson",
      company: "Innovatetech Corp",
      role: "Engineering Director",
      content:
        "The development team they provided was immediately productive. Their expertise in modern tooling helped us accelerate our entire development process.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      company: "ScaleUp Ventures",
      role: "CTO",
      content:
        "The project rescue team saved our failing project. They not only delivered on time but also trained our internal team on best practices.",
      rating: 5,
    },
  ];

  const compliance = [
    "ISO 27001 Information Security",
    "GDPR Data Protection Compliance",
    "Remote Work Security Standards",
    "SOC 2 Type II Certified Teams",
    "Background Verification Protocols",
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Talent Solutions" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative sm:py-20 py-8 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-purple-500/5 to-indigo-500/10"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 sm:gap-12 gap-6 items-center">
            <div className="space-y-8">
              <div>
                {/* Breadcrumb */}
                <div className="mb-4">
                  <Breadcrumb
                    items={breadcrumbItems}
                    className="text-violet-700"
                  />
                </div>
                <Badge className="mb-4 bg-violet-100 text-violet-700 border-violet-200">
                  Expert Teams
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Talent Solutions That{" "}
                  <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                    Deliver
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Access developers trained in the latest development tools and
                  methodologies. Our talent pool specializes in modern
                  development practices, ensuring your team stays ahead of the
                  technology curve.
                </p>
              </div>

              <div className="flex flex-wrap sm:gap-4 gap-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700"
                >
                  <Link to="/contact">Find Your Team</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">Success Stories</Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-600">Expert Developers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-600">Modern Tooling</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-violet-600 mb-2">
                      500+
                    </div>
                    <div className="text-sm text-gray-600">
                      Expert Developers
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      85%
                    </div>
                    <div className="text-sm text-gray-600">
                      Client Retantion
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">
                      72h
                    </div>
                    <div className="text-sm text-gray-600">
                      Average Onboarding
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-600 mb-2">
                      55+
                    </div>
                    <div className="text-sm text-gray-600">
                      Projects Delivered
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
              Complete Talent Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From individual developers to complete remote teams, we provide
              the expertise and support your business needs to accelerate
              growth.
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
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
              Team Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how our talent solutions have accelerated development and
              rescued projects
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
              Security & Compliance Standards
            </h2>
            <p className="text-xl text-gray-600">
              All our talent solutions meet the highest security and compliance
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
      </section> */}

      {/* CTA Section */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Scale Your Development Team?
          </h2>
          <p className="text-xl text-violet-100 mb-8">
            Let's find the perfect talent solution to accelerate your
            development and achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-gray-100"
            >
              <Link to="/contact">Find Your Team</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white bg-tranparent border-white hover:bg-white hover:text-violet-600 fw-bold"
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
