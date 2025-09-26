import {
  Code,
  Palette,
  Zap,
  Users,
  Database,
  Globe,
  ArrowRight,
  Smartphone,
  Shield,
  Building2,
  ShoppingCart,
  Heart,
  GraduationCap,
  DollarSign,
  Factory,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import { usePageTitle } from "@/hooks/usePageTitle";
import WhyChooseUs from "@/components/common/WhyChooseUs";
import ClientReviews from "@/components/common/ClientReviews";

export default function Services() {
  usePageTitle(
    "Expert with Web, Mobile & IT Services | Get Started",
    "Empower your business with expert web, mobile, and IT services. Trusted solutions for growth and success. Let’s get started.",
  );

  const services = [
    {
      icon: Code,
      title: "AI-Accelerated Development",
      description:
        "Leverage tools like Cursor, Copilot, and Replit to build applications faster without compromising quality.",
      features: [
        "GitHub Copilot Integration",
        "Cursor IDE Optimization",
        "Replit Collaborative Development",
        "AI-Powered Code Review",
      ],
    },
    {
      icon: Palette,
      title: "AI-Powered Design",
      description:
        "Create stunning UIs with AI design tools while maintaining brand consistency and user experience.",
      features: [
        "Figma AI Integration",
        "Automated Design Systems",
        "AI-Generated Prototypes",
        "Responsive Design Optimization",
      ],
    },
    {
      icon: Zap,
      title: "Legacy Modernization",
      description:
        "Migrate existing codebases into modern AI-augmented workflows without losing performance or stability.",
      features: [
        "Code Migration",
        "Performance Optimization",
        "AI Integration",
        "System Architecture Updates",
      ],
    },
    {
      icon: Globe,
      title: "Full-Stack Development",
      description:
        "Complete web and mobile application development using modern AI-powered development stacks.",
      features: [
        "React & Next.js Applications",
        "Node.js Backend Development",
        "Mobile App Development",
        "Progressive Web Apps",
      ],
    },
    {
      icon: Database,
      title: "Backend & Infrastructure",
      description:
        "Scalable backend solutions and cloud infrastructure optimized for modern applications.",
      features: [
        "API Development",
        "Database Design",
        "Cloud Deployment",
        "DevOps Automation",
      ],
    },
    {
      icon: Users,
      title: "Team Training & Consulting",
      description:
        "Help your team adopt AI development tools effectively with comprehensive training programs.",
      features: [
        "Tool Selection Guidance",
        "Best Practices Training",
        "Workflow Integration",
        "Ongoing Mentorship",
      ],
    },
  ];

  const tools = [
    {
      category: "Text to Code",
      tools: [
        "Cursor",
        "GitHub Copilot",
        "Sourcegraph Cody",
        "Tabnine",
        "Replit Ghostwriter",
      ],
    },
    {
      category: "Design & UI",
      tools: [
        "Google Stitch",
        "Figma First Draft",
        "Galileo AI",
        "Uizard",
        "Framer AI",
      ],
    },
    {
      category: "Full-Stack Scaffold",
      tools: ["Replit Agent v2", "Vercel v0", "DhiWise", "Bolt.new", "HeroUI"],
    },
    {
      category: "Backend & Infrastructure",
      tools: [
        "Amazon CodeWhisperer",
        "Eclipse Theia AI",
        "Tabnine",
        "Sourcegraph Cody",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        variant="services"
        subtitle="Our Expertise"
        title="AI-Powered Development Services"
        description="We leverage cutting-edge AI tools like Cursor, Copilot, and Replit to deliver exceptional web applications with unprecedented speed and quality."
        // rightContent="stats"
        breadItems={[{ label: "Home", href: "/" }, { label: "Services" }]}
      >
        <Button asChild size="lg">
          <Link to="/contact">Get Started</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link to="/about">Learn More</Link>
        </Button>
      </PageHero>

      {/* Services Bento Grid */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center sm:mb-16 mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Development{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, our AI-powered development services
              deliver enterprise-grade solutions with unprecedented speed and
              quality.
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
        </div>
      </section>

      {/* AI Tools Section */}
      {/* <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center sm:mb-12 mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              AI Tools That Power Our Workflow
            </h2>
            <p className="text-xl text-gray-600">
              We leverage the most advanced AI development tools available
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-cyan-500/5 rounded-2xl sm:p-8 p-4 lg:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 sm:gap-8 gap-4">
              {tools.map((category, index) => (
                <div key={index} className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                    {category.category}
                  </h4>
                  <div className="space-y-3">
                    {category.tools.map((tool, toolIndex) => (
                      <div
                        key={toolIndex}
                        className="text-sm text-gray-600 bg-white rounded-lg py-2 px-3 shadow-sm"
                      >
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Process Section */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600">
              How we deliver projects 40% faster without compromising quality
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-7 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Discovery & Planning
                  </h4>
                  <p className="text-gray-600">
                    We understand your requirements and architect the optimal
                    AI-powered solution.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-7 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    AI-Accelerated Development
                  </h4>
                  <p className="text-gray-600">
                    Our experts use AI tools to rapidly build your application
                    while maintaining quality.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-7 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Human Review & Refinement
                  </h4>
                  <p className="text-gray-600">
                    Every line of code is reviewed and refined by our
                    experienced developers.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-11 h-7 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Testing & Quality Assurance
                  </h4>
                  <p className="text-gray-600">
                    Comprehensive testing ensures your application works
                    flawlessly.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-7 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  5
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Deployment & Support
                  </h4>
                  <p className="text-gray-600">
                    We deploy your application and provide ongoing maintenance
                    and support.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-7 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  6
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Continuous Improvement
                  </h4>
                  <p className="text-gray-600">
                    Regular updates and feature enhancements keep your
                    application competitive.
                  </p>
                </div>
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

      {/* CTA Section */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Accelerate Your Development?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how AI-powered development can transform your next
            project.
          </p>
          <div className="flex flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white border-white/80 hover:bg-white hover:text-primary border-2 bg-transparent backdrop-blur-sm"
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
