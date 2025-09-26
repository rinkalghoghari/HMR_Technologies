import { ArrowRight, Star, TrendingUp, Users, DollarSign, Clock, Quote, ShoppingCart, Zap, Shield, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

export default function ECommerceSuccessStory() {
  const metrics = [
    { icon: <TrendingUp className="w-6 h-6" />, label: "Revenue Growth", value: "185%", color: "text-emerald-600" },
    { icon: <Users className="w-6 h-6" />, label: "Active Users", value: "2.5M+", color: "text-blue-600" },
    { icon: <DollarSign className="w-6 h-6" />, label: "Average Order Value", value: "+120%", color: "text-purple-600" },
    { icon: <Clock className="w-6 h-6" />, label: "Page Load Time", value: "65% faster", color: "text-orange-600" }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI-Powered Recommendations",
      description: "Personalized product suggestions that increased conversion rates by 45%"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advanced Security",
      description: "Multi-layer security implementation protecting millions in transactions"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-time Analytics",
      description: "Comprehensive dashboard providing actionable insights for business growth"
    }
  ];

  const challenges = [
    "Legacy system couldn't handle traffic spikes during sales events.",
    "Poor mobile experience leading to high cart abandonment rates.",
    "Lack of personalization resulting in low customer engagement.",
    "Complex checkout process causing conversion drops."
  ];

  const solutions = [
    "Migrated to scalable cloud infrastructure with auto-scaling capabilities.",
    "Developed responsive mobile-first design with optimized checkout flow.",
    "Implemented AI-driven recommendation engine for personalized shopping.",
    "Streamlined checkout process with one-click purchasing and guest options."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                <ShoppingCart className="w-4 h-4 mr-2" />
                E-commerce Success Story
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                ShopMax
                <span className="block text-emerald-200">E-commerce Revolution</span>
              </h1>
              <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                How we transformed a struggling online marketplace into a $50M+ revenue powerhouse with AI-driven personalization and scalable architecture.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  View Full Case Study
                </Button>
                <Button size="lg" variant="outline" className="bg-white !text-emerald-700 hover:bg-emerald-50">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Get Similar Results
                </Button>
              </div>
            </div>
            <div className="relative">
              <div>
                <img
                  src="https://cdn.prod.website-files.com/66c5b29662fc6ac27b54a965/673431cc1741fd329d4fb80c_e-comm-banner-p-800.webp"
                  alt="ShopMax E-commerce Platform"
                  className="w-full shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Remarkable Results</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The transformation delivered exceptional business outcomes across all key performance indicators.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 ">
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardContent className="pt-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 mb-4 ${metric.color}`}>
                    {metric.icon}
                  </div>
                  <div className={`text-3xl font-bold mb-2 ${metric.color}`}>
                    {metric.value}
                  </div>
                  <p className="text-gray-600 font-medium">{metric.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      {/* <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-red-600 font-bold">!</span>
                </div>
                The Challenges
              </h3>
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                </div>
                Our Solutions
              </h3>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-6 mb-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Challenges</h2>
          <div className="w-10 h-1 bg-black mb-10 mx-auto"></div>
          <div className="space-y-6">
            {challenges.map((text, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-300">
                  0{index + 1}
                </div>
                <p className="text-gray-700 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>


        <div className="max-w-5xl mx-auto px-6 mt-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Solutions</h2>
          <div className="w-10 h-1 bg-black mb-10 mx-auto"></div>
          <div className="space-y-6">
            {solutions.map((text, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-300">
                  0{index + 1}
                </div>
                <p className="text-gray-700 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        {/* Challenges Section */}
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Challenges</h2>
          <div className="w-10 h-1 bg-blue-600 mb-10 mx-auto"></div>
          <div className="space-y-4 w-fit mx-auto">
            {challenges.map((text, index) => (
              <div
                key={index}
                className="flex  items-center gap-4"
              >
                <div className="text-xl font-bold text-blue-500 min-w-[2rem] text-right">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className="text-base text-gray-800">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions Section */}
        <div className="max-w-4xl mx-auto px-6 mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Solutions</h2>
          <div className="w-10 h-1 bg-blue-600 mb-10 mx-auto"></div>
          <div className="space-y-4 w-fit mx-auto">
            {solutions.map((text, index) => (
              <div
                key={index}
                className="flex  items-center gap-4"
              >
                <div className="text-xl font-bold text-blue-500 min-w-[2rem] text-right">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className="text-base text-gray-800">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features Delivered</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Advanced functionality that drives real business value and customer satisfaction.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="text-emerald-600 mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <Quote className="w-12 h-12 text-emerald-600 mx-auto mb-8" />
            <blockquote className="text-2xl text-gray-900 font-medium mb-8 leading-relaxed">
              "HMR Technologies didn't just build us a website – they transformed our entire business. The AI recommendations alone increased our revenue by 85%, and the new platform handles traffic spikes effortlessly."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="/api/placeholder/64/64" alt="Sarah Martinez" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <div className="font-bold text-gray-900">Sarah Martinez</div>
                <div className="text-emerald-600">CEO, ShopMax</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your E-commerce Business?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
            Join ShopMax and hundreds of other successful companies that chose HMR Technologies for their digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Start Your Project
            </Button>
            <Button size="lg" className="bg-white !text-emerald-700 hover:bg-emerald-50" asChild>
              <Link to="/success-stories">
                <ArrowRight className="w-5 h-5 mr-2" />
                View More Success Stories
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}