import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Link } from "react-router-dom";

interface FAQItem {
  question: string;
  answer: string;
}

declare global {
  interface Window {
    Tawk_API?: {
      maximize: () => void;
      minimize: () => void;
      isChatMaximized?: () => boolean;
    };
  }
}

const faqData: FAQItem[] = [
  {
    question:
      "How do AI tools accelerate development without compromising quality?",
    answer:
      "Our developers use AI tools as intelligent assistants, not replacements. We combine AI-generated code suggestions with human oversight, code reviews, and testing to ensure quality while dramatically increasing development speed. The AI handles repetitive tasks, allowing our experts to focus on architecture, business logic, and creative solutions.",
  },
  {
    question:
      "What types of projects are best suited for AI-powered development?",
    answer:
      "AI-powered development works exceptionally well for web applications, mobile apps, APIs, and SaaS platforms. It's particularly effective for projects with standard patterns, CRUD operations, and UI-heavy applications. We also excel at modernizing legacy systems and building MVPs quickly for startups.",
  },
  {
    question: "How do you ensure code security and maintainability?",
    answer:
      "We implement rigorous code review processes, automated testing, and security scanning. All AI-generated code is thoroughly reviewed by senior developers, follows established coding standards, and includes comprehensive documentation. We also provide ongoing maintenance and support to ensure long-term code health.",
  },
  {
    question:
      "What's the typical timeline for an AI-powered development project?",
    answer:
      "Projects typically complete 60-80% faster than traditional development. A standard web application that might take 3-4 months traditionally can often be completed in 4-6 weeks. Complex enterprise applications see similar acceleration. We provide detailed timeline estimates during our initial consultation.",
  },
  {
    question:
      "Do you provide training for teams wanting to adopt AI development tools?",
    answer:
      "Yes! We offer comprehensive training programs to help your internal teams adopt AI development tools effectively. This includes workshops on tool selection, best practices, workflow integration, and ongoing mentorship to ensure successful adoption and maximum productivity gains.",
  },
  {
    question: "What AI tools do you use in your development process?",
    answer:
      "We use a comprehensive suite of AI tools including Cursor, GitHub Copilot, Replit Agent, Vercel v0, Figma AI, and many others. Our team stays current with the latest tools and continuously evaluates new ones to ensure we're using the most effective solutions for each project.",
  },
  {
    question:
      "How do you handle projects that require custom or complex logic?",
    answer:
      "Our team has deep expertise in traditional development approaches alongside AI tools. When projects require highly custom logic, complex algorithms, or specialized implementations, we seamlessly blend AI assistance with traditional development practices to deliver optimal results.",
  },
  {
    question: "What's included in your post-launch support?",
    answer:
      "We provide comprehensive post-launch support including bug fixes, performance monitoring, security updates, and feature enhancements. Our support packages are tailored to your needs and can include ongoing development, technical consultation, and emergency response services.",
  },
  {
    question: "How do you price AI-powered development projects?",
    answer:
      "Our pricing reflects the accelerated development timeline while maintaining competitive rates. Since we can deliver projects 60-80% faster, you often save significantly on total project costs despite our premium expertise. We offer both fixed-price and time-and-materials options depending on project scope.",
  },
  {
    question: "Can you work with our existing development team?",
    answer:
      "Absolutely! We often collaborate with client development teams, providing AI expertise, training, and augmented development capacity. We can integrate seamlessly into your existing workflows and help your team adopt AI development practices effectively.",
  },
];

export default function FAQ() {
  usePageTitle(
    "FAQ | Get Answers About HMR Technologies Services",
    "Explore HMR Technologies FAQ to learn about our web, mobile, IT, and QA services. Get expert answers and make informed decisions today.",
  );

  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const handleChatClick = () => {
    const Tawk = window.Tawk_API;
    if (!Tawk) return;
    if (typeof Tawk.isChatMaximized === "function") {
      if (Tawk.isChatMaximized()) {
        Tawk.minimize();
      } else {
        Tawk.maximize();
      }
    } else {
      Tawk.maximize();
    }
  };

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="sm:py-20 py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Everything you need to know about our AI-powered development
            services
          </p>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <button
                  className="w-full sm:px-6 px-3 sm:py-4 py-2 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => toggleItem(index)}
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {item.question}
                  </span>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openItems.includes(index) && (
                  <CardContent className="sm:px-6 px-3 sm:py-4 py-2 pt-0">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <div className="flex flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
            >
              Contact Us
            </Link>
            <a
              href="mailto:info@hmrtechnologies.com"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-primary hover:text-primary transition-colors font-medium text-center"
            >
              Email Support
            </a>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center sm:mb-12 mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need More Help?
            </h2>
            <p className="text-lg text-gray-600">
              Explore our resources and support options
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="sm:p-5 p-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-15 h-15 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Live Chat
                </h3>
                <p className="text-gray-600 mb-6">
                  Get instant help from our support team during business hours.
                </p>
                <div
                  className="text-primary hover:text-blue-700 font-medium cursor-pointer"
                  onClick={handleChatClick}
                >
                  Start Chat →
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="sm:p-5 p-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-15 h-15 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Schedule Call
                </h3>
                <p className="text-gray-600 mb-6">
                  Book a consultation to discuss your specific needs and
                  requirements.
                </p>
                <Link
                  to="/calendar"
                  className="text-primary hover:text-blue-700 font-medium"
                >
                  Book Call →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
