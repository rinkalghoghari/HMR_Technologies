import React from 'react'

const HealthCareSystem = () => {
  return (
    <div>
    <div className="bg-white text-gray-900 font-sans">
      {/* Banner Section */}
      <section className="bg-gradient-to-br from-rose-50 to-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-rose-700 mb-6">
            Healthcare Data Analytics Platform
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Transform patient care and operational efficiency with AI-powered analytics that provide actionable insights from medical data.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow">
            Discuss Your Project
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              'Improve patient outcomes through predictive analytics',
              'Reduce operational costs by 20–30%',
              'Enhance staff productivity and workflow efficiency',
              'Ensure compliance with healthcare regulations',
            ].map((point) => (
              <div key={point} className="flex items-start gap-4">
                <span className="text-green-500 text-xl mt-1">✅</span>
                <p className="text-lg">{point}</p>
              </div>
            ))}
          </div>

          {/* Performance Stats */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center">
            <div className="bg-gray-100 rounded-lg p-6 w-60">
              <h3 className="text-3xl font-bold text-red-600 mb-2">+40%</h3>
              <p className="text-gray-600">Patient Outcomes</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 w-60">
              <h3 className="text-3xl font-bold text-red-600 mb-2">25%</h3>
              <p className="text-gray-600">Cost Reduction</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 w-60">
              <h3 className="text-3xl font-bold text-red-600 mb-2">60%</h3>
              <p className="text-gray-600">Efficiency Gain</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Applications */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Real-World Applications</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Patient Risk Assessment',
                desc: 'Predict patient deterioration and readmission risks using historical data and vital signs.',
              },
              {
                title: 'Resource Optimization',
                desc: 'Optimize staff scheduling, bed allocation, and equipment utilization.',
              },
              {
                title: 'Treatment Effectiveness Analysis',
                desc: 'Analyze treatment outcomes to identify best practices and improve protocols.',
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
            {[
              'Python',
              'Apache Kafka',
              'Machine Learning',
              'HIPAA Compliance',
              'Real-time Analytics',
            ].map((tech) => (
              <span
                key={tech}
                className="bg-gray-100 text-sm px-4 py-2 rounded-full border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default HealthCareSystem

