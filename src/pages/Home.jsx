import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import { FaCertificate, FaServer, FaUsers } from 'react-icons/fa'

const highlights = [
  {
    icon: FaServer,
    stat: '10+',
    label: 'Years Professional Experience',
    description: 'From leadership roles to hands-on IT and network engineering',
  },
  {
    icon: FaCertificate,
    stat: '3',
    label: 'Industry Certifications',
    description: 'CompTIA Security+, CompTIA Network+, AWS Cloud Practitioner',
  },
  {
    icon: FaUsers,
    stat: '120+',
    label: 'Team Members Managed',
    description: 'Proven leadership across technical and operational teams',
  },
]

function Home() {
  return (
    <>
      <HeroSection />

      {/* Highlights Strip */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <div key={item.label} className="card p-8 text-center">
                <div className="w-14 h-14 bg-navy-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-navy-800" />
                </div>
                <div className="text-3xl font-extrabold text-navy-800 mb-1">
                  {item.stat}
                </div>
                <div className="font-semibold text-slate-700 mb-2">{item.label}</div>
                <p className="text-slate-500 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brief Intro */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="section-title">Why I Stand Out</h2>
          <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
            I'm not your typical IT candidate. With over a decade of experience leading
            high-performing teams and driving multimillion-dollar results, I bring a
            strategic mindset to every technical challenge. Now channeling that same
            intensity into network engineering &mdash; combining hands-on skills in
            VLANs, routing protocols, SIEM operations, and infrastructure design with
            the communication and leadership skills that set great engineers apart.
          </p>
          <Link to="/about" className="btn-primary">
            Learn More About Me
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home
