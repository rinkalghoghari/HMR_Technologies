import React from 'react'

const TeamCollaboration = () => {
  return (
    <div>
       <div className="bg-white text-gray-800">
      {/* Banner Section */}
      <section className="bg-gradient-to-r from-blue-100 via-blue-50 to-white py-20 px-4 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Team Collaboration
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
               Streamline team workflows with integrated collaboration tools and real-time synchronization.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow">
              Get Started
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
<section className="py-20 px-4 md:px-16 bg-gray-50">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-900 mb-10">Key Features</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-left">
      {[
        {
          title: 'Real-time Collaboration',
          description: 'Work together seamlessly with instant updates across all devices.',
          icon: '🤝',
        },
        {
          title: 'Project Management',
          description: 'Plan, track, and deliver projects efficiently with built-in tools.',
          icon: '📋',
        },
        {
          title: 'Team Analytics',
          description: 'Monitor team performance and productivity with actionable insights.',
          icon: '📊',
        },
        {
          title: 'Integration Hub',
          description: 'Connect with your favorite tools and platforms in one place.',
          icon: '🔗',
        },
      ].map((feature) => (
        <div
          key={feature.title}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="text-3xl text-orange-500 mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {feature.title}
          </h3>
          <p className="text-gray-600 text-base">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
    </div>
  )
}

export default TeamCollaboration
