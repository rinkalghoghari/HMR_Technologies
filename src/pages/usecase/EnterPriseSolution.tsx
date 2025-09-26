import React from 'react'

const EnterPriseSolution = () => {
  return (
    <div>
    <div className="bg-white text-gray-900 font-sans">
      {/* Banner Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-6">
              Enterprise Process Automation
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              Streamline complex business workflows with AI-powered automation solutions that reduce manual work and increase efficiency.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow">
              Discuss Your Project
            </button>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              'Reduce operational costs by 40–60%',
              'Eliminate human errors in routine tasks',
              'Scale operations without proportional staff increases',
              'Improve employee satisfaction by removing repetitive work',
            ].map((point) => (
              <div key={point} className="flex items-start gap-4">
                <span className="text-green-500 text-xl mt-1">✅</span>
                <p className="text-lg">{point}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center">
            <div className="bg-gray-100 rounded-lg p-6 w-60">
              <h3 className="text-3xl font-bold text-indigo-600 mb-2">75%</h3>
              <p className="text-gray-600">Time Saved</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 w-60">
              <h3 className="text-3xl font-bold text-indigo-600 mb-2">90%</h3>
              <p className="text-gray-600">Error Reduction</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 w-60">
              <h3 className="text-3xl font-bold text-indigo-600 mb-2">6 months</h3>
              <p className="text-gray-600">ROI Timeline</p>
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
                title: 'Invoice Processing Automation',
                desc: 'Automatically extract data from invoices, validate information, and update accounting systems.',
              },
              {
                title: 'Customer Onboarding Workflows',
                desc: 'Streamline new customer registration, verification, and account setup processes.',
              },
              {
                title: 'Inventory Management Systems',
                desc: 'Automate stock monitoring, reordering, and supplier communications.',
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
              'RPA Tools',
              'Machine Learning',
              'API Integration',
              'Cloud Computing',
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

export default EnterPriseSolution
