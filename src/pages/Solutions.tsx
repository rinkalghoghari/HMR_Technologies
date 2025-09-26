import { ArrowRight, MessageSquare, Heart, ShoppingCart, Plane, Calendar, BarChart3, Layers, Trophy, Building2, Sparkles, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageTitle } from "@/hooks/usePageTitle";

const platformSolutions = [
  {
    icon: <MessageSquare className="w-12 h-12" />,
    title: "Digital Community Platform",
    description: "Build thriving online communities with engagement tools, content management, and social features.",
    benefits: ["10x User Engagement", "Real-time Interactions", "Content Moderation"],
    stats: { users: "2M+", engagement: "85%", growth: "300%" },
    color: "blue",
    gradient: "from-blue-600 to-cyan-500",
    bgPattern: "bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100",
    navigate: '/solutions/digital-community'
  },
  {
    icon: <Heart className="w-12 h-12" />,
    title: "Dating Apps",
    description: "Create meaningful connections with AI-powered matching, video chat, and safety features.",
    benefits: ["Smart Matching Algorithm", "Video Dating Features", "Advanced Safety Tools"],
    stats: { matches: "15M+", satisfaction: "92%", retention: "78%" },
    color: "pink",
    gradient: "from-pink-600 to-rose-500",
    bgPattern: "bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100",
    navigate: '/solutions/dating-apps'
  },
  {
    icon: <ShoppingCart className="w-12 h-12" />,
    title: "E-commerce Marketplaces",
    description: "Launch scalable marketplaces with multi-vendor support, payment processing, and inventory management.",
    benefits: ["Multi-vendor Support", "Payment Integration", "Inventory Analytics"],
    stats: { revenue: "185%", vendors: "10K+", conversion: "24%" },
    color: "emerald",
    gradient: "from-emerald-600 to-teal-500",
    bgPattern: "bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100",
    navigate: '/solutions/ecommerce-marketplaces'
  },
  {
    icon: <Plane className="w-12 h-12" />,
    title: "Travel & Hospitality",
    description: "Streamline bookings with integrated payment systems, real-time availability, and customer management.",
    benefits: ["Real-time Booking", "Dynamic Pricing", "Guest Management"],
    stats: { bookings: "500K+", satisfaction: "94%", efficiency: "60%" },
    color: "indigo",
    gradient: "from-indigo-600 to-purple-500",
    bgPattern: "bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-100",
    navigate: '/solutions/travel-hospitality'
  },
  {
    icon: <Calendar className="w-12 h-12" />,
    title: "Booking Platforms",
    description: "Efficient appointment scheduling with calendar integration, automated reminders, and payment processing.",
    benefits: ["Automated Scheduling", "Payment Integration", "Smart Reminders"],
    stats: { bookings: "1M+", noshow: "15%", efficiency: "80%" },
    color: "orange",
    gradient: "from-orange-600 to-red-500",
    bgPattern: "bg-gradient-to-br from-orange-50 via-red-50 to-orange-100",
    navigate: '/solutions/booking-platforms'
  },
  {
    icon: <BarChart3 className="w-12 h-12" />,
    title: "SaaS Platforms",
    description: "Build robust SaaS solutions with subscription management, analytics, and scalable architecture.",
    benefits: ["Subscription Management", "Usage Analytics", "API Integration"],
    stats: { users: "100K+", uptime: "99.9%", growth: "250%" },
    color: "violet",
    gradient: "from-violet-600 to-purple-500",
    bgPattern: "bg-gradient-to-br from-violet-50 via-purple-50 to-violet-100",
    navigate: '/solutions/saas-platforms'
  },
  {
    icon: <Layers className="w-12 h-12" />,
    title: "Marketplace Platforms",
    description: "Create multi-sided marketplaces with vendor management, commission tracking, and dispute resolution.",
    benefits: ["Vendor Management", "Commission Tracking", "Dispute Resolution"],
    stats: { vendors: "5K+", transactions: "2M+", satisfaction: "96%" },
    color: "teal",
    gradient: "from-teal-600 to-cyan-500",
    bgPattern: "bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-100",
    navigate: '/solutions/marketplace-platforms'
  }
];

export default function Solutions() {
  usePageTitle("Our Solutions | HMR Technologies");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,black)]" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Our Key Solutions
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Say Hi to your brand's true potential with{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              our customized solutions
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Built to solve complex challenges, spark growth, and redefine success in ways you never imagined.
          </p>
          
          <div className="flex justify-center">
            <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg">
              Hire Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Platform Solutions Grid */}
      <section className="pt-0 pb-20 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {platformSolutions.map((solution, index) => (
              <Link key={index} to={solution.navigate} className="group block">
                <div className={`relative overflow-hidden rounded-3xl ${solution.bgPattern} p-8 h-full border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}>
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className={`w-full h-full bg-gradient-to-br ${solution.gradient} rounded-full blur-3xl`} />
                  </div>
                  
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${solution.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {solution.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    {/* Benefits */}
                    <div className="space-y-3 mb-6">
                      {solution.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                          <span className="text-sm font-medium text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                      {Object.entries(solution.stats).map(([key, value], idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-lg font-bold text-gray-900">{value}</div>
                          <div className="text-xs text-gray-500 uppercase tracking-wide">{key}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Arrow */}
                    <div className="absolute -bottom-4 -right-4">
                      <div className="size-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-md">
                        <ArrowRight className="w-5 h-5 text-gray-700 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">Our Development Process</h2>
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-8 lg:space-y-0">
            {[
              { icon: Building2, title: "Requirement Analysis", description: "Deep dive into your business needs" },
              { icon: Sparkles, title: "Designing", description: "Create intuitive user experiences" },
              { icon: TrendingUp, title: "Development", description: "Build with cutting-edge technology" },
              { icon: Shield, title: "Quality Assurance", description: "Rigorous testing and optimization" },
              { icon: Trophy, title: "Release to Market", description: "Launch and ongoing support" }
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center max-w-[186px] w-full relative">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4 text-white shadow-lg`}>
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-center max-w-32">{step.description}</p>
                {index < 4 && (
                  <div className="hidden lg:block absolute top-8 min-[1024px]:w-16 left-[160px] xl:w-24 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using our solutions to drive innovation and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-black hover:bg-gray-200">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/contact">Contact Sales</Link> 
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}