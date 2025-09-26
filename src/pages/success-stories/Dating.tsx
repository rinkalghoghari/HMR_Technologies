import { ArrowRight, Star, TrendingUp, Users, DollarSign, Clock, Quote, Heart, Shield, MessageCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

export default function DatingSuccessStory() {
  const metrics = [
    { icon: <Users className="w-6 h-6" />, label: "Active Users", value: "2M+", color: "text-pink-600" },
    { icon: <Heart className="w-6 h-6" />, label: "Matches Made", value: "15M+", color: "text-red-600" },
    { icon: <MessageCircle className="w-6 h-6" />, label: "Messages Daily", value: "500K+", color: "text-purple-600" },
    { icon: <TrendingUp className="w-6 h-6" />, label: "Success Rate", value: "87%", color: "text-emerald-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-600 via-rose-700 to-red-700 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-pink-100 text-pink-800 hover:bg-pink-200">
                <Heart className="w-4 h-4 mr-2" />
                Dating App Success Story
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                LoveConnect
                <span className="block text-pink-200">Dating Revolution</span>
              </h1>
              <p className="text-xl text-pink-100 mb-8 leading-relaxed">
                How we built a dating platform that created over 15 million meaningful matches with advanced AI compatibility algorithms and secure messaging.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-pink-700 hover:bg-pink-50">
                  <Heart className="w-5 h-5 mr-2" />
                  View App Demo
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-pink-700 hover:bg-pink-50">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Build Your App
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="">
                <img 
                  src="/images/SuccessStories/Gradientimage.png" 
                  alt="LoveConnect Dating App"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Love in Numbers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              LoveConnect has become the most trusted dating platform with incredible user engagement and success rates.
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
      <section className="py-16 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <Quote className="w-12 h-12 text-pink-600 mx-auto mb-8" />
            <blockquote className="text-2xl text-gray-900 font-medium mb-8 leading-relaxed">
              "The platform HMR Technologies created exceeded all our expectations. The AI matching algorithm is incredibly accurate, and our users are finding meaningful connections every day."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="/api/placeholder/64/64" alt="Rachel Kim" />
                <AvatarFallback>RK</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <div className="font-bold text-gray-900">Rachel Kim</div>
                <div className="text-pink-600">Founder, LoveConnect</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-pink-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Create Your Dating Platform
          </h2>
          <p className="text-xl text-pink-100 mb-8 leading-relaxed">
            Join LoveConnect and help millions find meaningful connections with our proven technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-pink-700 hover:bg-pink-50">
              <Heart className="w-5 h-5 mr-2" />
              Start Your App
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-pink-700 hover:bg-pink-50" asChild>
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