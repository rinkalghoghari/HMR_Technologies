import { CheckCircle, Users, Target, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import { usePageTitle } from "@/hooks/usePageTitle";
import OurCulture from "@/components/common/OurCulture";

export default function About() {
  usePageTitle(
    "About For HMR Technologies | Expert IT & Software Solutions",
    "Learn about HMR Technologies, a trusted IT & software solutions provider. Discover our expertise in web, mobile, QA, and IT services today!",
  );

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description:
        "We stay at the forefront of AI development tools and methodologies to deliver cutting-edge solutions.",
    },
    {
      icon: Users,
      title: "Human-Centered",
      description:
        "AI enhances human creativity and expertise rather than replacing it. Our developers are the heart of every project.",
    },
    {
      icon: Award,
      title: "Quality Without Compromise",
      description:
        "Speed doesn't mean cutting corners. We maintain the highest standards of code quality and testing.",
    },
  ];

  const stats = [
    { number: "40%", label: "Faster Development" },
    { number: "90+", label: "Projects Delivered" },
    { number: "55+", label: "Happy Clients" },
    { number: "85%", label: "Client Retantion" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        variant="about"
        subtitle="About Us"
        title="Pioneering AI-Powered Development"
        description="We're pioneering the future of software development by combining cutting-edge AI tools with human expertise to deliver exceptional results at unprecedented speed."
        rightContent="stats"
        breadItems={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      >
     <div className="flex flex-wrap gap-4">
         <Button asChild size="lg">
          <Link to="/contact">Work With Us</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link to="/careers">Join Our Team</Link>
        </Button>
     </div>
      </PageHero>

      {/* Philosophy Section */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 sm:gap-12 gap-6 items-center">
            <div>
              <img
                src="/images/AboutUs/AboutUs-1.jpeg"
                alt="Technology team collaboration"
                className="rounded-xl shadow-lg w-full h-auto"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Development Philosophy
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At HMR Technologies, we don't just use AI tools we master them
                to deliver exceptional results. Our expertise lies in combining
                the speed and efficiency of cutting-edge tools with human
                creativity, critical thinking, and precision.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe tools are only as powerful as the hands that use
                them. That's why our developers work alongside these tools, not
                beneath them creating products that feel real, function
                flawlessly, and go to market faster.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      AI + Human Expertise
                    </h4>
                    <p className="text-gray-600">
                      Perfect balance of automation and creativity
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      40% Faster Delivery
                    </h4>
                    <p className="text-gray-600">
                      Accelerated development without compromise
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Quality Assurance
                    </h4>
                    <p className="text-gray-600">
                      Rigorous testing and code review processes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center sm:mb-12 mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 sm:gap-8 gap-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="sm:p-8 p-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that speak to our success
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Building the Future Together
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team of expert developers, designers, and AI specialists work
            together to push the boundaries of what's possible in software
            development. We're always looking for talented individuals who share
            our passion for innovation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/careers">Join Ours Team</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Work With Us</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Expertise Section */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Balanced Expertise: AI + Traditional Development
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our experts are highly skilled in both AI-powered development
                tools and traditional development approaches. This ensures we
                can tackle any challenge, whether it requires the speed of AI
                assistance or the precision of custom-crafted solutions.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                When AI tools may fall short or produce suboptimal results, our
                traditional development expertise ensures we deliver the best
                possible solution for your specific needs.
              </p>
              <Button asChild>
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
            <div>
              <img
                src="/images/AboutUs/AboutUs-2.jpeg"
                alt="AI development concepts"
                className="rounded-xl shadow-lg w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Culture Section */}
      <OurCulture />
    </div>
  );
}