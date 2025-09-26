import { ArrowRight, Star, TrendingUp, Users, DollarSign, Clock, Quote, Utensils, MapPin, Smartphone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

export default function FoodDeliverySuccessStory() {
  const metrics = [
    { icon: <TrendingUp className="w-6 h-6" />, label: "Order Volume", value: "300%", color: "text-orange-600" },
    { icon: <Clock className="w-6 h-6" />, label: "Delivery Time", value: "40% faster", color: "text-blue-600" },
    { icon: <Users className="w-6 h-6" />, label: "Active Users", value: "1.2M+", color: "text-purple-600" },
    { icon: <DollarSign className="w-6 h-6" />, label: "Revenue Growth", value: "250%", color: "text-emerald-600" }
  ];

  const features = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Real-time GPS Tracking",
      description: "Advanced routing algorithms that optimize delivery paths and provide accurate ETAs"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First Platform",
      description: "Seamless mobile experience for customers, drivers, and restaurant partners"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI-Powered Matching",
      description: "Smart order assignment system that reduces delivery times and increases efficiency"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-700 to-red-700 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-orange-100 text-orange-800 hover:bg-orange-200">
                <Utensils className="w-4 h-4 mr-2" />
                Food Delivery Success Story
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                QuickBite
                <span className="block text-orange-200">Delivery Revolution</span>
              </h1>
              <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                How we built a food delivery platform that processes 100K+ orders daily with 15-minute average delivery times and 98% customer satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-orange-700 hover:bg-orange-50">
                  <MapPin className="w-5 h-5 mr-2" />
                  View Platform Demo
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-orange-700 hover:bg-orange-50">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Start Your Platform
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <img 
                  src="/images/SuccessStories/FoodDelivery.png" 
                  alt="QuickBite Food Delivery App"
                  className="w-full rounded-xl shadow-2xl"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Outstanding Performance</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              QuickBite achieved remarkable growth and efficiency improvements within the first year of launch.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
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

      {/* Key Features */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Platform Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cutting-edge technology that powers seamless food delivery experiences.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="text-orange-600 mb-6">
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
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <Quote className="w-12 h-12 text-orange-600 mx-auto mb-8" />
            <blockquote className="text-2xl text-gray-900 font-medium mb-8 leading-relaxed">
              "The platform HMR Technologies built for us revolutionized our food delivery service. We went from struggling with order management to processing thousands of orders seamlessly every day."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="/api/placeholder/64/64" alt="David Chen" />
                <AvatarFallback>DC</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <div className="font-bold text-gray-900">David Chen</div>
                <div className="text-orange-600">Founder, QuickBite</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Launch Your Food Delivery Platform
          </h2>
          <p className="text-xl text-orange-100 mb-8 leading-relaxed">
            Join QuickBite and other successful food delivery businesses powered by our technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-700 hover:bg-orange-50">
              <Utensils className="w-5 h-5 mr-2" />
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-orange-700 hover:bg-orange-50" asChild>
              <Link to="/success-stories">
                <ArrowRight className="w-5 h-5 mr-2" />
                More Success Stories
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}