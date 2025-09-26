import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  ExternalLink,
  Clock,
  Users,
  TrendingUp,
  Building2,
  ShoppingCart,
  Heart,
  GraduationCap,
  DollarSign,
  Factory,
} from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";
import Breadcrumb from "@/components/Breadcrumb";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  description: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  technologies: string[];
  duration: string;
  teamSize: string;
  image: string;
  featured: boolean;
}

// Sample case studies data (replace with real data from your CMS/API)
const caseStudies: CaseStudy[] = [
  {
    id: "fintech-mobile-app",
    title: "AI-Powered Financial Planning Mobile App",
    client: "FinanceForward",
    industry: "FinTech",
    description:
      "Developed a comprehensive mobile application that uses AI to provide personalized financial planning and investment recommendations.",
    challenge:
      "Client needed a mobile-first solution that could process complex financial data and provide real-time personalized recommendations while maintaining bank-level security.",
    solution:
      "Built a React Native app with AI-powered recommendation engine, integrated with multiple financial APIs, and implemented advanced security protocols.",
    results: [
      {
        metric: "User Engagement",
        value: "+240%",
        description: "increase in daily active users",
      },
      {
        metric: "Processing Speed",
        value: "85% faster",
        description: "than previous legacy system",
      },
      {
        metric: "User Satisfaction",
        value: "4.8/5",
        description: "average app store rating",
      },
    ],
    technologies: ["React Native", "Python", "TensorFlow", "AWS", "PostgreSQL"],
    duration: "4 months",
    teamSize: "6 developers",
    image: "/images/CaseStudies/CaseStudies-1.jpeg",
    featured: true,
  },
  {
    id: "ecommerce-platform",
    title: "Enterprise E-commerce Platform Modernization",
    client: "RetailMax",
    industry: "E-commerce",
    description:
      "Modernized a legacy e-commerce platform to handle millions of transactions with improved performance and user experience.",
    challenge:
      "Outdated platform couldn't handle peak traffic loads, resulting in lost sales and poor customer experience during high-demand periods.",
    solution:
      "Rebuilt the entire platform using modern microservices architecture with auto-scaling capabilities and optimized database performance.",
    results: [
      {
        metric: "Performance",
        value: "300% faster",
        description: "page load times",
      },
      { metric: "Uptime", value: "99.9%", description: "during peak seasons" },
      {
        metric: "Revenue Impact",
        value: "+180%",
        description: "increase in online sales",
      },
    ],
    technologies: ["React", "Node.js", "Docker", "Kubernetes", "Redis"],
    duration: "6 months",
    teamSize: "8 developers",
    image: "/images/CaseStudies/CaseStudies-2.jpeg",
    featured: true,
  },
  {
    id: "healthcare-platform",
    title: "Healthcare Analytics Dashboard",
    client: "MedTech Solutions",
    industry: "Healthcare",
    description:
      "Created a comprehensive analytics dashboard for healthcare providers to track patient outcomes and operational efficiency.",
    challenge:
      "Healthcare providers needed real-time insights from multiple data sources to improve patient care and operational efficiency.",
    solution:
      "Developed a real-time dashboard with advanced data visualization, predictive analytics, and automated reporting capabilities.",
    results: [
      {
        metric: "Decision Speed",
        value: "60% faster",
        description: "clinical decision making",
      },
      {
        metric: "Data Accuracy",
        value: "98%",
        description: "automated reporting accuracy",
      },
      {
        metric: "Cost Savings",
        value: "$2.4M",
        description: "annual operational savings",
      },
    ],
    technologies: ["React", "D3.js", "Python", "Apache Kafka", "MongoDB"],
    duration: "5 months",
    teamSize: "5 developers",
    image: "/images/CaseStudies/CaseStudies-3.jpeg",
    featured: true,
  },
  {
    id: "worktok-iraq-platform",
    title: "WorkTok Iraq Workforce Platform",
    client: "WorkTok Iraq",
    industry: "Employment / Workforce Solutions",
    description:
      "Developed a dynamic workforce platform for job seekers and employers in Iraq, focusing on local employment trends and skill matching.",
    challenge:
      "Addressing the high unemployment rate in Iraq by connecting job seekers with suitable employers through real-time job matching and localized insights.",
    solution:
      "Built a scalable platform featuring AI-powered job matching, real-time labor market analytics, multilingual support, and seamless communication tools.",
    results: [
      {
        metric: "Job Match Rate",
        value: "75%",
        description: "successful matches between employers and job seekers",
      },
      {
        metric: "User Engagement",
        value: "40% increase",
        description: "monthly active users within 6 months",
      },
      {
        metric: "Hiring Time",
        value: "50% reduction",
        description: "average time to hire",
      },
    ],
    technologies: ["React", "Node.js", "Python", "ElasticSearch", "PostgreSQL"],
    duration: "6 months",
    teamSize: "6 developers",
    image: "/images/CaseStudies/CaseStudies-4.jpeg",
    featured: true,
  },
];

export default function CaseStudies() {
  usePageTitle(
    "Case Studies | See How We Deliver Web, Mobile & IT Solutions",
    "Discover HMR Technologies case studies showcasing expert IT, web, and mobile solutions. Proven strategies that drive growth and success.",
  );

  const featuredCases = caseStudies.filter((cs) => cs.featured);

  return (
    <div>
      {/* Hero Section */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid lg:grid-cols-2 sm:gap-12 gap-6 justify-start items-center">
            <div className="space-y-8 flex flex-col justify-start items-start text-start animate-slide-up">
              <Breadcrumb
                items={[
                  { label: "Home", href: "/" },
                  { label: "Case Studies" },
                ]}
              />
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
                <span className="text-blue-600 font-medium text-sm">
                  📊 Case Studies
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Success Stories That
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Drive Results
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses across industries transform
                their operations with AI-powered development solutions that
                deliver measurable results.
              </p>
            </div>
            <div className="animate-slide-in-right">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    55+
                  </div>
                  <p className="text-gray-600">Successful Projects</p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    15+
                  </div>
                  <p className="text-gray-600">Industries Served</p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    85%
                  </div>
                  <p className="text-gray-600">Client Retantion</p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">
                    24/7
                  </div>
                  <p className="text-gray-600">Monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center sm:mb-12 mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Our most impactful projects that showcase our expertise
            </p>
          </div>

          <div className="lg:space-y-12 sm:space-y-8 space-y-4">
            {featuredCases.map((caseStudy, index) => (
              <div
                key={caseStudy.id}
                className={`grid lg:grid-cols-2 sm:gap-12 gap-6 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="secondary">{caseStudy.industry}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {caseStudy.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      {caseStudy.teamSize}
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {caseStudy.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {caseStudy.description}
                  </p>

                  <div className="grid grid-cols-3 gap-6 mb-8">
                    {caseStudy.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {result.value}
                        </div>
                        <div className="text-sm font-medium text-gray-900 mb-1">
                          {result.metric}
                        </div>
                        <div className="text-xs text-gray-500">
                          {result.description}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {caseStudy.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Button asChild>
                    <Link to={`/case-studies/${caseStudy.id}`}>
                      View Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
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

      {/* CTA Section */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help transform your business with
            AI-powered solutions
          </p>
          <div className="flex flex-row sm:gap-4 gap-2 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white bg-tranparent border-white hover:bg-white hover:text-blue-600 fw-bold"
            >
              <Link to="/calendar">Book a Meeting</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
