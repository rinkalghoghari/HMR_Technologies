import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function WhyChooseUs() {
  return (
    <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center sm:mb-12 mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600">
            Discover what makes us the right partner for your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Accordions */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Why should I choose AI-powered development?",
                  answer:
                    "AI-powered development accelerates delivery by 40% while maintaining high quality standards. Our developers use advanced tools like GitHub Copilot and Cursor to write better code faster, allowing us to focus on innovation and problem-solving rather than repetitive tasks.",
                },
                {
                  question:
                    "How do you ensure code quality with AI assistance?",
                  answer:
                    "Every line of AI-generated code undergoes thorough human review by our experienced developers. We combine automated testing, peer reviews, and industry best practices to ensure the highest quality standards are maintained throughout the development process.",
                },
                {
                  question:
                    "What makes your team different from other development agencies?",
                  answer:
                    "Our team specializes in both AI-assisted development and traditional approaches. We know when to leverage AI tools for efficiency and when to apply manual expertise for precision, giving you the best of both worlds.",
                },
                {
                  question: "How quickly can you deliver a project?",
                  answer:
                    "Thanks to our AI-powered approach, we typically deliver projects 40-60% faster than traditional development timelines. A typical web application that might take 3 months can often be completed in 6-8 weeks without compromising quality.",
                },
                {
                  question:
                    "Do you provide ongoing support after project completion?",
                  answer:
                    "Yes, we offer comprehensive post-launch support including bug fixes, performance optimization, feature updates, and technical consultation to ensure your project continues to perform at its best.",
                },
                {
                  question: "Can you work with our existing tech stack?",
                  answer:
                    "Absolutely! Our team is experienced with a wide range of technologies and frameworks. We can seamlessly integrate with your existing systems or recommend the best stack for your specific requirements.",
                },
                {
                  question:
                    "How do you handle project communication and updates?",
                  answer:
                    "We believe in transparent communication with regular updates, progress reports, and demo sessions. You'll have direct access to our project managers and developers through your preferred communication channels.",
                },
                {
                  question: "What industries do you specialize in?",
                  answer:
                    "We work across various industries including SaaS, e-commerce, healthcare, education, fintech, and manufacturing. Our AI-powered approach adapts to meet the unique requirements of each industry.",
                },
                {
                  question:
                    "How do you protect our intellectual property and data?",
                  answer:
                    "We maintain strict confidentiality through NDAs, secure development environments, and industry-standard security practices. Your intellectual property and sensitive data are protected at every stage of development.",
                },
                {
                  question: "Can you help scale our existing application?",
                  answer:
                    "Yes, we specialize in application modernization and scaling. Whether you need performance optimization, feature additions, or complete system overhauls, our team can help your application grow with your business.",
                },
              ].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="relative z-10 overflow-hidden rounded-2xl">
              <img
                src="/images/WhyChooseUs.jpeg"
                alt="Why Choose Us"
                className="w-full h-auto shadow-2xl"
              />

              {/* Floating Stats Cards - positioned within image boundaries */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-2xl p-2 sm:p-4 shadow-xl animate-float">
                <div className="text-xl sm:text-2xl font-bold text-primary">40%</div>
                <div className="text-sm text-gray-600">Faster Development</div>
              </div>

              <div
                className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-2 sm:p-4 shadow-xl animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="text-xl sm:text-2xl font-bold text-green-600">85%</div>
                <div className="text-sm text-gray-600">Client Retantion</div>
              </div>

              <div
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/95 backdrop-blur-sm rounded-2xl p-2 sm:p-4 shadow-xl animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-xl sm:text-2xl font-bold text-purple-600">55+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-2xl transform rotate-6 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
