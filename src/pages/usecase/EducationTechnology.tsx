import React from 'react'

const EducationTechnology = () => {
  return (
    <div>
  <div className="bg-white text-gray-900 font-sans">
      {/* Banner Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-6">
            EducationTech Innovation Platform
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Empower learning with intelligent technology that personalizes education, tracks progress, and engages students like never before.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow">
            Let's Talk About Your Idea
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              'Personalized learning pathways for every student',
              'Data-driven insights for teachers and admins',
              'Interactive content delivery via web & mobile',
              'Boost engagement and retention with gamification',
            ].map((point) => (
              <div key={point} className="flex items-start gap-4">
                <span className="text-green-500 text-xl mt-1">🎯</span>
                <p className="text-lg">{point}</p>
              </div>
            ))}
          </div>

          {/* Performance Stats */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center">
            <div className="bg-gray-100 rounded-lg p-6 w-60">
              <h3 className="text-3xl font-bold text-indigo-600 mb-2">+50%</h3>
              <p className="text-gray-600">Student Engagement</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 w-60">
              <h3 className="text-3xl font-bold text-indigo-600 mb-2">30%</h3>
              <p className="text-gray-600">Admin Workload Drop</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 w-60">
              <h3 className="text-3xl font-bold text-indigo-600 mb-2">+25%</h3>
              <p className="text-gray-600">Learning Outcomes</p>
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
                title: 'Adaptive Learning Engines',
                desc: 'Deliver content tailored to each student’s pace and performance using AI algorithms.',
              },
              {
                title: 'LMS Integrations',
                desc: 'Easily integrate with leading Learning Management Systems for seamless experience.',
              },
              {
                title: 'Performance Tracking Dashboards',
                desc: 'Monitor student progress, completion rates, and assessments in real time.',
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="bg-white border border-indigo-500 rounded-lg p-6 shadow-sm"
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
              'React',
              'Node.js',
              'Firebase',
              'AI/ML',
              'SCORM',
              'WebRTC',
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

export default EducationTechnology
