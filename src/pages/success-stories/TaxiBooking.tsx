import { ArrowRight, Star, TrendingUp, Users, DollarSign, Clock, Quote, Car, MapPin, Smartphone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

export default function TaxiBookingSuccessStory() {
  const metrics = [
    { icon: <Car className="w-6 h-6" />, label: "Daily Rides", value: "25K+", color: "text-yellow-600" },
    { icon: <Clock className="w-6 h-6" />, label: "Average Wait", value: "2 minutes", color: "text-blue-600" },
    { icon: <Users className="w-6 h-6" />, label: "Active Drivers", value: "15K+", color: "text-emerald-600" },
    { icon: <TrendingUp className="w-6 h-6" />, label: "Revenue Growth", value: "350%", color: "text-purple-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-600 via-orange-700 to-red-700 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                <Car className="w-4 h-4 mr-2" />
                Taxi Booking Success Story
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                RideEasy
                <span className="block text-yellow-200">Transportation Revolution</span>
              </h1>
              <p className="text-xl text-yellow-100 mb-8 leading-relaxed">
                How we built a comprehensive taxi booking platform that processes 25K+ daily rides with 2-minute average wait times and real-time tracking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-yellow-700 hover:bg-yellow-50">
                  <Car className="w-5 h-5 mr-2" />
                  View Platform
                </Button>
                <Button size="lg" variant="outline" className="border-yellow-200 text-white hover:bg-yellow-600">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Launch Your Service
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="RideEasy Taxi Booking App"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Transportation Excellence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              RideEasy has transformed urban transportation with industry-leading performance metrics.
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
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <Quote className="w-12 h-12 text-yellow-600 mx-auto mb-8" />
            <blockquote className="text-2xl text-gray-900 font-medium mb-8 leading-relaxed">
              "HMR Technologies delivered a taxi booking system that works flawlessly. Our customers love the quick pickups, and our drivers appreciate the efficient dispatch system."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="/api/placeholder/64/64" alt="James Wilson" />
                <AvatarFallback>JW</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <div className="font-bold text-gray-900">James Wilson</div>
                <div className="text-yellow-600">CEO, RideEasy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Launch Your Transportation Platform
          </h2>
          <p className="text-xl text-yellow-100 mb-8 leading-relaxed">
            Join RideEasy and revolutionize transportation in your city with our proven technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-yellow-700 hover:bg-yellow-50">
              <Car className="w-5 h-5 mr-2" />
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-yellow-200 text-white hover:bg-yellow-600" asChild>
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