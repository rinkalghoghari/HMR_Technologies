import { Link } from "react-router-dom";
import { usePageTitle } from "@/hooks/usePageTitle";
import { ArrowRight, Building2, ShoppingCart, Heart, GraduationCap, Banknote, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const useCases = [
  {
    icon: <Building2 className="w-12 h-12" />,
    category: "Enterprise",
    title: "Digital Transformation",
    description: "Modernize legacy systems and accelerate digital initiatives with AI-powered automation and cloud-native solutions.",
    metrics: [
      { label: "Faster Deployment", value: "75%" },
      { label: "Cost Reduction", value: "40%" },
      { label: "Efficiency Gain", value: "3x" }
    ],
    technologies: ["AI/ML", "Cloud", "APIs", "Microservices"],
    gradient: "from-blue-600 to-indigo-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: <ShoppingCart className="w-12 h-12" />,
    category: "E-commerce",
    title: "Smart Commerce Platform",
    description: "Build intelligent e-commerce experiences with personalized recommendations, automated inventory, and predictive analytics.",
    metrics: [
      { label: "Revenue Increase", value: "60%" },
      { label: "Conversion Rate", value: "45%" },
      { label: "Customer Retention", value: "80%" }
    ],
    technologies: ["Personalization", "Analytics", "Mobile", "Payment"],
    gradient: "from-emerald-600 to-teal-600",
    bgColor: "bg-emerald-50"
  },
  {
    icon: <Heart className="w-12 h-12" />,
    category: "Healthcare",
    title: "Telehealth Solutions",
    description: "Deliver secure, scalable healthcare services with HIPAA-compliant platforms and AI-driven diagnostics.",
    metrics: [
      { label: "Patient Satisfaction", value: "95%" },
      { label: "Response Time", value: "50%" },
      { label: "Cost Savings", value: "30%" }
    ],
    technologies: ["HIPAA", "AI Diagnostics", "Telemedicine", "Security"],
    gradient: "from-rose-600 to-pink-600",
    bgColor: "bg-rose-50"
  },
  {
    icon: <GraduationCap className="w-12 h-12" />,
    category: "Education",
    title: "Learning Management",
    description: "Create engaging educational experiences with adaptive learning, progress tracking, and collaborative tools.",
    metrics: [
      { label: "Learning Outcomes", value: "70%" },
      { label: "Engagement Rate", value: "85%" },
      { label: "Completion Rate", value: "90%" }
    ],
    technologies: ["LMS", "Analytics", "Mobile", "Collaboration"],
    gradient: "from-purple-600 to-violet-600",
    bgColor: "bg-purple-50"
  },
  {
    icon: <Banknote className="w-12 h-12" />,
    category: "FinTech",
    title: "Financial Services",
    description: "Build secure financial applications with real-time transactions, compliance automation, and fraud detection.",
    metrics: [
      { label: "Transaction Speed", value: "10x" },
      { label: "Fraud Reduction", value: "95%" },
      { label: "Compliance Score", value: "100%" }
    ],
    technologies: ["Blockchain", "Security", "Compliance", "Real-time"],
    gradient: "from-amber-600 to-orange-600",
    bgColor: "bg-amber-50"
  },
  {
    icon: <Cpu className="w-12 h-12" />,
    category: "Manufacturing",
    title: "Smart Manufacturing",
    description: "Optimize production with IoT sensors, predictive maintenance, and automated quality control systems.",
    metrics: [
      { label: "Downtime Reduction", value: "65%" },
      { label: "Quality Improvement", value: "40%" },
      { label: "Energy Savings", value: "25%" }
    ],
    technologies: ["IoT", "Predictive AI", "Automation", "Analytics"],
    gradient: "from-slate-600 to-gray-600",
    bgColor: "bg-slate-50"
  }
];

export default function UseCases() {
    usePageTitle(
      "Use Cases | See Real-World IT, Web & Mobile Solutions Now",
      "Experience real-world IT, web, and mobile solutions. Explore HMR Technologies’ proven services and grow your business successfully.",
    );
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium bg-purple-100 text-purple-700 border-purple-200">
            Use Cases
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Real-World Applications
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Across Industries
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover how leading organizations across various industries leverage our technology to solve complex challenges 
            and drive measurable business outcomes.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            Explore All Industries
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 ${useCase.bgColor} hover:scale-[1.02]`}>
                <CardHeader className="pb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${useCase.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                      {useCase.icon}
                    </div>
                    <Badge variant="outline" className="text-xs font-medium">
                      {useCase.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                    {useCase.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-base">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {useCase.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className={`text-2xl font-bold bg-gradient-to-r ${useCase.gradient} bg-clip-text text-transparent`}>
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-600 font-medium">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-900">Key Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {useCase.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs px-3 py-1 bg-white/70 text-gray-700 border border-gray-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="ghost" className="w-full mt-6 group-hover:bg-white/70 transition-colors duration-300">
                    View Case Study
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              We understand that every industry has unique challenges. Our solutions are tailored to meet 
              the specific needs of your sector.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="group text-center">
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                  <div className="text-white mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-white font-semibold text-sm">
                    {useCase.category}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
              <Link to="/contact" >Contact Our Industry Experts</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}