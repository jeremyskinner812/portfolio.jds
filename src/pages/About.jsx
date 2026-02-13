import { FaMapMarkerAlt, FaBriefcase, FaGraduationCap } from 'react-icons/fa'

function About() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h1 className="section-title">About Me</h1>
        <p className="section-subtitle">
          A results-driven professional where leadership meets technical expertise.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Headshot */}
          <div className="lg:col-span-2">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/headshot.jpg"
                alt="Jeremy Skinner"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-navy-800 mb-4">
                Jeremy Skinner
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                I spent over seven years at Lowe's climbing from Customer Service
                Representative to Assistant Store Manager &mdash; leading teams of 120+,
                managing a $37M store, and consistently exceeding revenue targets.
                That experience taught me how to lead under pressure, communicate
                across every level of an organization, and drive measurable outcomes.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                When I pivoted into technology, I brought all of that with me. As an
                IT Support Technician at SheMoney Inc., I owned the full support lifecycle
                in a fast-growing startup &mdash; from provisioning user accounts and
                managing devices to documenting processes that reduced repeat tickets and
                standardized workflows. At Best Buy's Geek Squad, I managed 20&ndash;30+
                tickets per shift while maintaining 95%+ customer satisfaction.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Now I'm finishing my B.S. in Information Technology (Networking) at
                Arizona State University and hold CompTIA Security+, CompTIA Network+,
                and AWS Cloud Practitioner certifications. I'm actively building
                enterprise-grade lab environments and SIEM threat investigation platforms
                to sharpen the skills that will make me an asset on day one as a
                Network Engineer.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="card p-5">
                <FaMapMarkerAlt className="w-5 h-5 text-blue-500 mb-2" />
                <div className="text-sm font-semibold text-navy-800">Location</div>
                <div className="text-sm text-slate-500">Austin, TX</div>
              </div>
              <div className="card p-5">
                <FaBriefcase className="w-5 h-5 text-blue-500 mb-2" />
                <div className="text-sm font-semibold text-navy-800">Experience</div>
                <div className="text-sm text-slate-500">10+ Years Professional</div>
              </div>
              <div className="card p-5">
                <FaGraduationCap className="w-5 h-5 text-blue-500 mb-2" />
                <div className="text-sm font-semibold text-navy-800">Education</div>
                <div className="text-sm text-slate-500">B.S. IT (Networking) &mdash; ASU</div>
              </div>
            </div>

            {/* Interests */}
            <div className="pt-2">
              <h3 className="text-lg font-bold text-navy-800 mb-3">
                What Drives Me
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Enterprise Networking',
                  'SIEM & Threat Detection',
                  'Network Automation',
                  'Cloud Infrastructure',
                  'Cybersecurity',
                  'Lab Environments',
                  'Team Leadership',
                  'Process Optimization',
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 bg-navy-50 text-navy-800 text-sm font-medium rounded-full"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
