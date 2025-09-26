import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Clock,
  Users,
  CheckCircle,
  TrendingUp,
  Zap,
  Smile,
  ShieldCheck,
  Film,
  HandshakeIcon,
  ClockIcon,
  ShieldCheckIcon,
  UsersIcon,
} from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";
import Breadcrumb from "@/components/Breadcrumb";

// This would typically come from your CMS/API
const getCaseStudyData = (id: string) => {
  const caseStudies: Record<string, any> = {
    "fintech-mobile-app": {
      id: "fintech-mobile-app",
      title: "AI-Powered Financial Planning Mobile App",
      client: "FinanceForward",
      industry: "FinTech",
      description:
        "Developed a comprehensive mobile application that uses AI to provide personalized financial planning and investment recommendations.",
      challenge:
        "FinanceForward needed a mobile-first solution that could process complex financial data and provide real-time personalized recommendations while maintaining bank-level security. Their existing web-based platform was outdated and couldn't compete with modern fintech apps.",
      solution:
        "We built a React Native app with AI-powered recommendation engine, integrated with multiple financial APIs, and implemented advanced security protocols including biometric authentication and end-to-end encryption.",
      detailedSolution: [
        {
          phase: "Phase 1: Architecture & Security",
          duration: "4 weeks",
          description:
            "Designed secure, scalable architecture with microservices and implemented bank-level security protocols.",
          deliverables: [
            "Security audit",
            "System architecture",
            "API design",
            "Compliance framework",
          ],
        },
        {
          phase: "Phase 2: Core Development",
          duration: "8 weeks",
          description:
            "Built the mobile application with AI recommendation engine and integrated financial data sources.",
          deliverables: [
            "Mobile app (iOS/Android)",
            "AI recommendation system",
            "Data integration",
            "User dashboard",
          ],
        },
        {
          phase: "Phase 3: Testing & Launch",
          duration: "4 weeks",
          description:
            "Comprehensive testing, performance optimization, and phased rollout to users.",
          deliverables: [
            "QA testing",
            "Performance optimization",
            "App store deployment",
            "User training",
          ],
        },
      ],
      results: [
        {
          metric: "User Engagement",
          value: "+240%",
          description: "increase in daily active users",
          icon: <Users className="w-5 h-5" />,
        },
        {
          metric: "Processing Speed",
          value: "85% faster",
          description: "than previous legacy system",
          icon: <TrendingUp className="w-5 h-5" />,
        },
        {
          metric: "User Satisfaction",
          value: "4.8/5",
          description: "average app store rating",
          icon: <CheckCircle className="w-5 h-5" />,
        },
        {
          metric: "Revenue Growth",
          value: "+180%",
          description: "increase in customer lifetime value",
          icon: <TrendingUp className="w-5 h-5" />,
        },
      ],
      technologies: [
        "React Native",
        "Python",
        "TensorFlow",
        "AWS",
        "PostgreSQL",
        "Redis",
        "Docker",
      ],
      duration: "4 months",
      teamSize: "6 developers",
      budget: "$150,000 - $250,000",
      images: [
        "/images/CaseStudiesDetails/CaseStudies-1.1.jpeg",
        "/images/CaseStudiesDetails/CaseStudies-1.2.jpeg",
        "/images/CaseStudiesDetails/CaseStudies-1.3.jpeg",
      ],
      testimonial: {
        quote:
          "HMR Technologies transformed our vision into reality. The AI-powered app exceeded our expectations and drove unprecedented user engagement.",
        author: "Sarah Chen",
        position: "CTO, FinanceForward",
        avatar: "/images/CaseStudiesDetails/CaseStudies-1 (A).jpeg",
      },
      keyFeatures: [
        "AI-powered investment recommendations",
        "Real-time portfolio tracking",
        "Biometric security authentication",
        "Multi-bank account integration",
        "Personalized financial insights",
        "Goal-based savings planner",
      ],
      challenges: [
        {
          title: "Complex Data Integration",
          description:
            "Integrating with 15+ financial institutions while maintaining data consistency and real-time updates.",
        },
        {
          title: "Security Compliance",
          description:
            "Meeting stringent financial regulations including PCI DSS, SOX, and regional banking compliance requirements.",
        },
        {
          title: "AI Model Accuracy",
          description:
            "Training recommendation algorithms with limited historical data while ensuring personalized and accurate suggestions.",
        },
      ],
    },
    "ecommerce-platform": {
      id: "ecommerce-platform",
      title: "AI-Driven Multi-Vendor E-commerce Platform",
      client: "ShopSphere",
      industry: "E-commerce",
      description:
        "Built a scalable, AI-powered multi-vendor e-commerce platform offering personalized shopping experiences, real-time inventory sync, and seller analytics.",
      challenge:
        "ShopSphere needed a next-gen e-commerce solution to support multiple vendors, personalize customer journeys, and compete with giants like Amazon. Their legacy Magento setup was sluggish, hard to scale, and lacked modern UX and AI capabilities.",
      solution:
        "We developed a full-stack e-commerce platform using Next.js and Node.js with an AI engine for personalized product recommendations, live inventory management, and real-time vendor dashboards. Integrated with multiple payment gateways and logistics APIs.",
      detailedSolution: [
        {
          phase: "Phase 1: Platform Architecture & Design",
          duration: "5 weeks",
          description:
            "Designed modular architecture with support for vendor onboarding, order management, and performance monitoring.",
          deliverables: [
            "Information architecture",
            "Wireframes & UI components",
            "Vendor management system",
            "Tech stack setup",
          ],
        },
        {
          phase: "Phase 2: Development & AI Personalization",
          duration: "10 weeks",
          description:
            "Built core platform functionality, integrated AI product recommender, and enabled real-time inventory syncing with vendor systems.",
          deliverables: [
            "Multi-vendor marketplace",
            "AI recommendation engine",
            "Inventory & order syncing",
            "User profiles & personalization",
          ],
        },
        {
          phase: "Phase 3: Testing, Security & Launch",
          duration: "4 weeks",
          description:
            "Conducted stress testing, security audit (PCI-DSS aligned), and launched with live vendor onboarding.",
          deliverables: [
            "Penetration testing",
            "Security hardening",
            "Launch support",
            "Vendor documentation",
          ],
        },
      ],
      results: [
        {
          metric: "Conversion Rate",
          value: "+190%",
          description: "boost in sales from AI personalization",
          icon: <TrendingUp className="w-5 h-5" />,
        },
        {
          metric: "Page Load Speed",
          value: "1.2s avg",
          description: "due to performance-first architecture",
          icon: <Zap className="w-5 h-5" />,
        },
        {
          metric: "Vendor Onboarding",
          value: "+75%",
          description: "increase in vendor sign-ups post-launch",
          icon: <Users className="w-5 h-5" />,
        },
        {
          metric: "Customer Satisfaction",
          value: "4.7/5",
          description: "average rating across customer surveys",
          icon: <Smile className="w-5 h-5" />,
        },
      ],
      technologies: [
        "Next.js",
        "Node.js",
        "TypeScript",
        "MongoDB",
        "Redis",
        "Stripe API",
        "AWS",
        "TensorFlow.js",
      ],
      duration: "5 months",
      teamSize: "8 developers",
      budget: "$200,000 - $300,000",
      images: [
        "/images/CaseStudiesDetails/CaseStudies-2.1.jpeg",
        "/images/CaseStudiesDetails/CaseStudies-2.2.jpeg",
        "/images/CaseStudiesDetails/CaseStudies-2.3.jpeg",
      ],
      testimonial: {
        quote:
          "The new platform not only exceeded our performance benchmarks, but also gave our vendors the tools to thrive. It’s a true marketplace transformation.",
        author: "Luis Mendez",
        position: "COO, ShopSphere",
        avatar: "/images/CaseStudiesDetails/CaseStudies-2 (A).jpeg",
      },
      keyFeatures: [
        "Multi-vendor marketplace support",
        "AI-powered product recommendations",
        "Real-time inventory syncing",
        "Integrated payment & shipping APIs",
        "Vendor analytics dashboard",
        "Personalized customer experiences",
      ],
      challenges: [
        {
          title: "Scalability for Multiple Vendors",
          description:
            "Ensuring platform could handle hundreds of simultaneous vendors and thousands of concurrent users.",
        },
        {
          title: "Real-Time Inventory Management",
          description:
            "Synchronizing inventory updates across vendor systems without latency or conflicts.",
        },
        {
          title: "AI Personalization Accuracy",
          description:
            "Training the recommendation engine to provide accurate, diverse suggestions for new users with minimal data.",
        },
      ],
    },
    "healthcare-platform": {
      id: "healthcare-platform",
      title: "Comprehensive AI-Enabled Healthcare Platform",
      client: "HealthCore Solutions",
      industry: "Healthcare",
      description:
        "Developed an integrated healthcare platform to streamline patient management, telemedicine, and AI-driven diagnostics for clinics and hospitals.",
      challenge:
        "HealthCore needed a unified platform that could handle patient records securely, enable virtual consultations, and provide AI-powered diagnostic support   all compliant with HIPAA and other healthcare regulations.",
      solution:
        "Built a full-stack web and mobile solution using React and Node.js with HIPAA-compliant security features, real-time telemedicine video, EHR integration, and AI diagnostics to assist healthcare professionals.",
      detailedSolution: [
        {
          phase: "Phase 1: Architecture & Compliance",
          duration: "4 weeks",
          description:
            "Designed secure, HIPAA-compliant architecture with encrypted data storage and access controls.",
          deliverables: [
            "Security & compliance plan",
            "System architecture",
            "EHR integration blueprint",
            "Role-based access design",
          ],
        },
        {
          phase: "Phase 2: Core Development",
          duration: "10 weeks",
          description:
            "Developed patient management system, telemedicine features, and integrated AI diagnostic models.",
          deliverables: [
            "Web & mobile app",
            "Telemedicine module",
            "AI diagnostics engine",
            "Patient portal",
          ],
        },
        {
          phase: "Phase 3: Testing & Deployment",
          duration: "4 weeks",
          description:
            "Comprehensive testing including security audits, performance tuning, and phased deployment.",
          deliverables: [
            "QA & penetration testing",
            "Performance optimization",
            "User training & documentation",
            "Deployment support",
          ],
        },
      ],
      results: [
        {
          metric: "User Adoption",
          value: "+300%",
          description:
            "increase in healthcare provider usage within first 6 months",
          icon: <Users className="w-5 h-5" />,
        },
        {
          metric: "Telemedicine Sessions",
          value: "+400%",
          description: "growth in virtual consultations after launch",
          icon: <Film className="w-5 h-5" />,
        },
        {
          metric: "Diagnostic Accuracy",
          value: "92%",
          description: "accuracy of AI diagnostic support system",
          icon: <CheckCircle className="w-5 h-5" />,
        },
        {
          metric: "Compliance",
          value: "100%",
          description: "HIPAA and GDPR compliance maintained",
          icon: <ShieldCheck className="w-5 h-5" />,
        },
      ],
      technologies: [
        "React",
        "Node.js",
        "Python",
        "TensorFlow",
        "PostgreSQL",
        "AWS",
        "Twilio",
        "Docker",
      ],
      duration: "5.5 months",
      teamSize: "7 developers",
      budget: "$250,000 - $350,000",
      images: [
        "/images/CaseStudiesDetails/CaseStudies-3.1.jpeg",
        "/images/CaseStudiesDetails/CaseStudies-3.2.jpeg",
      ],
      testimonial: {
        quote:
          "HealthCore’s new platform transformed how we deliver care remotely   the AI diagnostics have been a game-changer for our practice.",
        author: "Dr. Emily Roberts",
        position: "Chief Medical Officer, CityCare Clinic",
        avatar: "/images/CaseStudiesDetails/CaseStudies-3 (A).jpeg",
      },
      keyFeatures: [
        "Secure patient records management",
        "Real-time telemedicine video consultations",
        "AI-powered diagnostic assistance",
        "EHR system integration",
        "Role-based access and compliance controls",
        "Patient engagement and appointment scheduling",
      ],
      challenges: [
        {
          title: "Data Security & Compliance",
          description:
            "Ensuring strict adherence to HIPAA and GDPR with encrypted data and access controls.",
        },
        {
          title: "Telemedicine Scalability",
          description:
            "Building a stable, low-latency video consultation system for simultaneous users.",
        },
        {
          title: "AI Diagnostic Accuracy",
          description:
            "Training AI models to provide reliable diagnostic support across varied medical conditions.",
        },
      ],
    },
    "worktok-iraq-platform": {
      id: "worktok-iraq-platform",
      title: "AI-Powered Workforce Platform for Iraq",
      client: "WorkTok Iraq",
      industry: "Employment / Workforce Solutions",
      description:
        "Developed a comprehensive workforce platform tailored for the Iraqi job market to connect job seekers and employers with AI-driven job matching and labor market analytics.",
      challenge:
        "Addressing high unemployment and skills mismatch in Iraq by providing real-time labor market insights, multilingual support, and AI-powered job matching compliant with regional data privacy laws.",
      solution:
        "Built a scalable web and mobile platform using React and Node.js, featuring AI job recommendation engines, real-time labor market analytics, secure user profiles, and communication tools to connect employers and candidates efficiently.",
      detailedSolution: [
        {
          phase: "Phase 1: Research & Architecture",
          duration: "3 weeks",
          description:
            "Conducted market research and designed a scalable, secure platform architecture compliant with regional data protection regulations.",
          deliverables: [
            "Market analysis report",
            "System architecture design",
            "Data privacy compliance plan",
            "User roles and permissions blueprint",
          ],
        },
        {
          phase: "Phase 2: Core Development",
          duration: "12 weeks",
          description:
            "Developed job matching algorithms, user management, employer dashboards, and multilingual UI support.",
          deliverables: [
            "Web & mobile applications",
            "AI job recommendation engine",
            "Employer and candidate dashboards",
            "Multilingual interface",
          ],
        },
        {
          phase: "Phase 3: Testing & Launch",
          duration: "5 weeks",
          description:
            "Executed end-to-end testing, performance tuning, user onboarding, and phased platform launch.",
          deliverables: [
            "Comprehensive QA and security testing",
            "Performance optimization",
            "User training materials",
            "Deployment and launch support",
          ],
        },
      ],
      results: [
        {
          metric: "Job Match Success Rate",
          value: "75%",
          description:
            "effective matches between employers and job seekers within 3 months",
          icon: <HandshakeIcon className="w-5 h-5" />,
        },
        {
          metric: "User Engagement",
          value: "50% increase",
          description: "growth in monthly active users after launch",
          icon: <UsersIcon className="w-5 h-5" />,
        },
        {
          metric: "Hiring Time Reduction",
          value: "40%",
          description: "decrease in average time-to-hire for employers",
          icon: <ClockIcon className="w-5 h-5" />,
        },
        {
          metric: "Data Privacy Compliance",
          value: "100%",
          description:
            "adherence to regional data protection and privacy regulations",
          icon: <ShieldCheckIcon className="w-5 h-5" />,
        },
      ],
      technologies: [
        "React",
        "Node.js",
        "Python",
        "TensorFlow",
        "ElasticSearch",
        "PostgreSQL",
        "AWS",
        "Docker",
      ],
      duration: "5.5 months",
      teamSize: "6 developers",
      budget: "$200,000 - $300,000",
      images: [
        "/images/CaseStudiesDetails/CaseStudies-4.1.jpeg",
        "/images/CaseStudiesDetails/CaseStudies-4.2.jpeg",
        "/images/CaseStudiesDetails/CaseStudies-4.3.jpeg",
      ],
      testimonial: {
        quote:
          "WorkTok Iraq has revolutionized the job market here   the AI recommendations and localized insights truly make hiring and job searching more efficient.",
        author: "Ahmed Al-Saleh",
        position: "CEO, WorkTok Iraq",
        avatar: "/images/CaseStudiesDetails/CaseStudies-4 (A).jpeg",
      },
      keyFeatures: [
        "AI-powered job matching",
        "Real-time labor market analytics",
        "Multilingual user interface (Arabic, Kurdish, English)",
        "Secure user profiles and data privacy",
        "Employer and candidate dashboards",
        "Seamless communication tools",
      ],
      challenges: [
        {
          title: "Regional Data Privacy",
          description:
            "Ensuring compliance with Iraqi and regional data protection laws while maintaining platform security.",
        },
        {
          title: "Multilingual Support",
          description:
            "Building an intuitive user experience catering to Arabic, Kurdish, and English speakers.",
        },
        {
          title: "AI Model Training",
          description:
            "Training job matching algorithms to handle diverse skill sets and job market conditions in Iraq.",
        },
      ],
    },
  };

  return caseStudies[id] || null;
};

export default function CaseStudyDetail() {
  const params = useParams();
  const caseStudy = getCaseStudyData(params.id || "");

  usePageTitle(
    caseStudy ? `${caseStudy.title} - Case Study` : "Case Study Not Found",
    caseStudy
      ? `Learn how we helped ${caseStudy.client} achieve ${caseStudy.results[0]?.value} improvement with AI-powered development solutions.`
      : "",
  );

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Case Study Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The case study you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/case-studies">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-5 ml-3">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Case Studies", href: "/case-studies" },
                { label: caseStudy.title },
              ]}
            />
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="flex items-center gap-4 mb-6">
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

              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                {caseStudy.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {caseStudy.description}
              </p>

              <div className="flex flex-row sm:gap-4 gap-2">
                <Button asChild>
                  <Link to="/contact">Start Similar Project</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/case-studies">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    All Case Studies
                  </Link>
                </Button>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <img
                src={caseStudy.images[0]}
                alt={caseStudy.title}
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center sm:mb-12 mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Project Results
            </h2>
            <p className="text-xl text-gray-600">
              Measurable impact delivered for {caseStudy.client}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudy.results.map((result: any, index: number) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                    {result.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {result.value}
                  </div>
                  <div className="text-lg font-medium text-gray-900 mb-2">
                    {result.metric}
                  </div>
                  <div className="text-sm text-gray-600">
                    {result.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 sm:gap-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Challenge
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {caseStudy.challenge}
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Key Challenges:
                </h3>
                {caseStudy.challenges.map((challenge: any, index: number) => (
                  <Card key={index}>
                    <CardContent className="sm:p-6 p-3">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {challenge.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {challenge.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Solution
              </h2>
              <p className="text-lg text-gray-600 mb-8">{caseStudy.solution}</p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Key Features:
                </h3>
                <div className="grid gap-3">
                  {caseStudy.keyFeatures.map(
                    (feature: string, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center sm:mb-12 mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Development Process
            </h2>
            <p className="text-xl text-gray-600">
              How we delivered this project from concept to launch
            </p>
          </div>

          <div className="sm:space-y-8 space-y-4">
            {caseStudy.detailedSolution.map((phase: any, index: number) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="sm:p-8 p-4">
                  <div className="grid md:grid-cols-3 lg:gap-8 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-primary mb-2">
                        {phase.phase}
                      </div>
                      <div className="text-sm text-gray-500 mb-4">
                        Duration: {phase.duration}
                      </div>
                    </div>

                    <div>
                      <p className="text-gray-600 mb-4">{phase.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Deliverables:
                      </h4>
                      <div className="space-y-1">
                        {phase.deliverables.map(
                          (deliverable: string, idx: number) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm text-gray-600">
                                {deliverable}
                              </span>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center sm:mb-12 mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Technologies Used
            </h2>
            <p className="text-xl text-gray-600">
              Cutting-edge tools and frameworks that powered this solution
            </p>
          </div>

          <div className="flex flex-wrap justify-center sm:gap-4 gap-2">
            {caseStudy.technologies.map((tech: string) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-base px-4 py-2"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-2">
                Budget Range
              </div>
              <div className="text-lg text-gray-600">{caseStudy.budget}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-2">
                Timeline
              </div>
              <div className="text-lg text-gray-600">{caseStudy.duration}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-2">
                Team Size
              </div>
              <div className="text-lg text-gray-600">{caseStudy.teamSize}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 sm:mb-12 mb-6">
            Client Testimonial
          </h2>

          <Card className="p-8 md:p-12">
            <CardContent className="p-0">
              <blockquote className="text-2xl text-gray-600 mb-8 italic">
                "{caseStudy.testimonial.quote}"
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <img
                  src={caseStudy.testimonial.avatar}
                  alt={caseStudy.testimonial.author}
                  className="w-16 h-16 rounded-full"
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">
                    {caseStudy.testimonial.author}
                  </div>
                  <div className="text-gray-600">
                    {caseStudy.testimonial.position}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help you achieve similar results with
            AI-powered solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white bg-tranparent border-white hover:bg-white hover:text-blue-600 fw-bold"
            >
              <Link to="/case-studies">View More Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
