import { Link } from "react-router-dom";
import 'react-phone-input-2/lib/style.css';
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import ContactForm from "../components/common/ContactForm";

declare global {
  interface Window {
    grecaptcha: any;
    calendar?: {
      schedulingButton: {
        load: (options: {
          url: string;
          color?: string;
          label?: string;
          target: any;
        }) => void;
      };
    };
  }
}

export default function Contact() {
  usePageTitle(
    "Contact Us | Speak to Our IT, Web & QA Experts Today",
    "Get in touch with HMR Technologies to discuss your IT, web, and QA projects. Speak with our experts and start building reliable solutions today.",
  );

  return (
    <div className="page-transition">

      <ContactForm showButton={false} showBreadcrumb={true}/>
      {/* Why Choose Us */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center sm:mb-12 mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose HMR Technologies?
            </h2>
            <p className="text-xl text-gray-600">
              We deliver exceptional results with AI-powered development
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 sm:gap-8 gap-4">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">40%</div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Faster Development
                </h4>
                <p className="text-gray-600 text-sm">
                  Accelerated delivery without compromising quality
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">24h</div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Response Time
                </h4>
                <p className="text-gray-600 text-sm">
                  Quick responses to your inquiries and needs
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Code Quality
                </h4>
                <p className="text-gray-600 text-sm">
                  Rigorous testing and review processes
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">∞</div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Ongoing Support
                </h4>
                <p className="text-gray-600 text-sm">
                  Continuous maintenance and feature updates
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* FAQ Preview */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Got questions? We've got answers. Check out our comprehensive FAQ
            section.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  How fast can you deliver my project?
                </h4>
                <p className="text-gray-600 text-sm">
                  Most projects are completed 60-80% faster than traditional
                  development, with typical web apps finishing in 4-6 weeks.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Do you ensure code quality?
                </h4>
                <p className="text-gray-600 text-sm">
                  Yes, all AI-generated code goes through rigorous human review,
                  testing, and follows established coding standards.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/faq">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
