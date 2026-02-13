import { Link } from 'react-router-dom'
import { FaNetworkWired } from 'react-icons/fa'

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-navy-800 via-navy-900 to-slate-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <FaNetworkWired className="w-6 h-6 text-blue-400" />
            <span className="text-blue-400 font-medium text-sm tracking-wider uppercase">
              Network Engineering &amp; IT Administration
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Hi, I'm
            <span className="text-blue-400"> Jeremy Skinner</span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl text-slate-300">
              I Build Secure, Reliable Networks
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">
            Network Engineer and IT professional with expertise in enterprise infrastructure,
            security operations, and cross-functional team leadership. I bring a unique blend
            of deep technical skill and business acumen to every environment I work in.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/projects" className="btn-primary text-center">
              View My Work
            </Link>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-navy-800 text-center">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
