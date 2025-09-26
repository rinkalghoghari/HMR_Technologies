import React from 'react'
import 'react-phone-input-2/lib/style.css';
import { CheckCircle } from 'lucide-react'
import ClientReviews from '@/components/common/ClientReviews'
import ContactForm from '../../../components/common/ContactForm'

const Feedback = () => {
  return (
    <React.Fragment>
      <ClientReviews />
    </React.Fragment>
  )
}

const ContactUs = () => {
  return (
    <React.Fragment>
      {/* Hero Section with Form */}
      <ContactForm showBreadcrumb={false} showButton={true}/>
    </React.Fragment>
  )
}

const AboutUs = () => {

  const stats = [
    { number: "40%", label: "Faster Development" },
    { number: "90+", label: "Projects Delivered" },
    { number: "55+", label: "Happy Clients" },
    { number: "85%", label: "Client Retantion" },
  ];

  return (
    <React.Fragment>
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Development Philosophy
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6">
                At HMR Technologies, we don't just use AI tools we master them
                to deliver exceptional results. Our expertise lies in combining
                the speed and efficiency of cutting-edge tools with human
                creativity, critical thinking, and precision.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8">
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
    </React.Fragment>
  )
}

const BottomSolution = () => {
  return (
    <React.Fragment>
      <Feedback />
      <AboutUs />
      <ContactUs />
    </React.Fragment>
  )
}

export default BottomSolution