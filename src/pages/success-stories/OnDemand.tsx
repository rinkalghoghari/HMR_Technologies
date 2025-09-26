import { ArrowRight, Star, TrendingUp, Users, DollarSign, Clock, Quote, Smartphone, MapPin, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

export default function OnDemandSuccessStory() {
  const metrics = [
    { icon: <TrendingUp className="w-6 h-6" />, label: "Service Requests", value: "500%", color: "text-purple-600" },
    { icon: <Clock className="w-6 h-6" />, label: "Response Time", value: "3 minutes", color: "text-blue-600" },
    { icon: <Users className="w-6 h-6" />, label: "Active Providers", value: "50K+", color: "text-emerald-600" },
    { icon: <DollarSign className="w-6 h-6" />, label: "Revenue Growth", value: "400%", color: "text-orange-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-purple-100 text-purple-800 hover:bg-purple-200">
                <Smartphone className="w-4 h-4 mr-2" />
                On-Demand Success Story
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                ServiceNow
                <span className="block text-purple-200">On-Demand Platform</span>
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                How we created an on-demand service platform connecting customers with skilled professionals in under 3 minutes, processing 10K+ daily requests.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50">
                  <Smartphone className="w-5 h-5 mr-2" />
                  View Platform
                </Button>
                <Button size="lg" variant="outline" className="border-purple-200 text-white hover:bg-purple-600">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Launch Your Platform
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <img 
                  src="/images/SuccessStories/OnDemand.png" 
                  alt="ServiceNow On-Demand Platform"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Platform Performance</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ServiceNow achieved exceptional growth and user engagement across all metrics.
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

      {/* Testimonial */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <Quote className="w-12 h-12 text-purple-600 mx-auto mb-8" />
            <blockquote className="text-2xl text-gray-900 font-medium mb-8 leading-relaxed">
              "HMR Technologies built us a platform that truly works. Our service providers love how easy it is to get jobs, and customers appreciate the quick response times."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="/api/placeholder/64/64" alt="Lisa Johnson" />
                <AvatarFallback>LJ</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <div className="font-bold text-gray-900">Lisa Johnson</div>
                <div className="text-purple-600">CEO, ServiceNow</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Build Your On-Demand Platform
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Join ServiceNow and other successful on-demand businesses that trust our technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50">
              <Smartphone className="w-5 h-5 mr-2" />
              Start Building
            </Button>
            <Button size="lg" variant="outline" className="border-purple-200 text-white hover:bg-purple-600" asChild>
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