import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function OurCulture() {
  return (
    <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center sm:mb-12 mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Culture
          </h2>
          <p className="text-xl text-gray-600">
            Building a collaborative environment where innovation thrives
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Column 1 - Innovation */}
          <div className="text-center">
            <div className="relative h-80 mb-6 rounded-2xl overflow-hidden shadow-lg">
              <div className="flex h-full transition-transform duration-700 ease-in-out animate-slide-in-left">
                {["/images/OurCulture/Culture-1.jpeg"].map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt={`Innovation ${idx + 1}`}
                    className="w-full h-full object-cover flex-shrink-0"
                  />
                ))}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 animate-fade-in">
              Innovation First
            </h3>
            <p className="text-gray-600">
              We embrace cutting-edge technologies and foster creative thinking
              in everything we do.
            </p>
          </div>

          {/* Column 2 - Collaboration */}
          <div className="text-center">
            <div className="relative h-80 mb-6 rounded-2xl overflow-hidden shadow-lg">
              <div
                className="flex h-full transition-transform duration-700 ease-in-out animate-slide-in-left"
                style={{ animationDelay: "0.5s" }}
              >
                {["/images/OurCulture/Culture-2.jpeg"].map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt={`Collaboration ${idx + 1}`}
                    className="w-full h-full object-cover flex-shrink-0"
                  />
                ))}
              </div>
            </div>
            <h3
              className="text-2xl font-bold text-gray-900 mb-4 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              Team Collaboration
            </h3>
            <p className="text-gray-600">
              Our diverse teams work together to create exceptional solutions
              for our clients.
            </p>
          </div>

          {/* Column 3 - Growth */}
          <div className="text-center">
            <div className="relative h-80 mb-6 rounded-2xl overflow-hidden shadow-lg">
              <div
                className="flex h-full transition-transform duration-700 ease-in-out animate-slide-in-left"
                style={{ animationDelay: "1s" }}
              >
                {["/images/OurCulture/Culture-3.jpeg"].map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt={`Growth ${idx + 1}`}
                    className="w-full h-full object-cover flex-shrink-0"
                  />
                ))}
              </div>
            </div>
            <h3
              className="text-2xl font-bold text-gray-900 mb-4 animate-fade-in"
              style={{ animationDelay: "1s" }}
            >
              Continuous Growth
            </h3>
            <p className="text-gray-600">
              We invest in our team's development and encourage lifelong
              learning.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" className="animate-bounce-subtle">
            <Link to="/about">Learn More About Us</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="animate-bounce-subtle"
            style={{ animationDelay: "0.2s" }}
          >
            <Link to="/careers">Join Our Team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
