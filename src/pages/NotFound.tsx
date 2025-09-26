import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Search, Mail } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function NotFound() {
  usePageTitle(
    "Page Not Found",
    "The page you're looking for doesn't exist. Explore our services or contact us for assistance.",
  );

  const popularPages = [
    {
      title: "Web Development",
      href: "/services/web-development",
      description: "Custom website solutions",
    },
    {
      title: "Mobile Apps",
      href: "/services/mobile-app",
      description: "iOS & Android development",
    },
    { title: "About Us", href: "/about", description: "Learn about our team" },
    { title: "Contact", href: "/contact", description: "Get in touch with us" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-200 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist. It might have been
            moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="grid gap-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Link to="/">
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                <Search className="w-5 h-5 mr-2" />
                Browse Services
              </Link>
            </Button>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Popular Pages
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {popularPages.map((page, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <Link to={page.href} className="block">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {page.title}
                    </h4>
                    <p className="text-sm text-gray-600">{page.description}</p>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Still can't find what you're looking for?
          </p>
          <Button asChild variant="outline">
            <Link to="/contact">
              <Mail className="w-4 h-4 mr-2" />
              Contact Support
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
