import React from 'react'

const EcommercePlateform = () => {
  return (
    <div>
<div className="bg-white text-gray-900 font-sans">
      {/* Banner Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
            E-commerce Personalization Engine
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Deliver smarter, AI-driven shopping experiences that increase conversion rates, revenue, and customer loyalty.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow">
              Discuss Your Project
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Why Choose Our AI Engine?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              'Increase conversion rates by 25–35%',
              'Boost average order value by 15–20%',
              'Improve customer retention and loyalty',
              'Reduce cart abandonment rates',
            ].map((point) => (
              <div key={point} className="flex items-start gap-4">
                <span className="text-green-500 text-xl mt-1">✅</span>
                <p className="text-lg">{point}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center">
            <div className="bg-gray-100 rounded-lg p-6 w-60">
              <h3 className="text-3xl font-bold text-green-600 mb-2">30%</h3>
              <p className="text-gray-600">Conversion Increase</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 w-60">
              <h3 className="text-3xl font-bold text-green-600 mb-2">25%</h3>
              <p className="text-gray-600">Revenue Growth</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 w-60">
              <h3 className="text-3xl font-bold text-green-600 mb-2">4.7/5</h3>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Applications */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Real-World Applications
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Product Recommendation Systems',
                desc: 'Show relevant products based on browsing history and customer preferences.',
              },
              {
                title: 'Dynamic Pricing Optimization',
                desc: 'Adjust prices in real-time based on demand, competition, and segments.',
              },
              {
                title: 'Personalized Email Campaigns',
                desc: 'Send targeted promotional emails based on individual interests.',
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="bg-white border border-blue-500 rounded-lg p-6 shadow-sm"
              >
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Node.js', 'TensorFlow', 'Redis', 'Analytics APIs'].map(
              (tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 text-sm px-4 py-2 rounded-full border"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default EcommercePlateform
