import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-navy-800 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center">
                <span className="text-navy-800 font-bold text-sm">JS</span>
              </div>
              <span className="font-bold text-lg">Jeremy Skinner</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Network Engineer &amp; IT Professional based in Austin, TX.
              Building secure, scalable infrastructure with a decade of
              leadership experience behind every solution.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-slate-200">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-slate-300 hover:text-white text-sm transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4 text-slate-200">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/jeremydskinner"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-navy-700 rounded-lg flex items-center justify-center text-slate-300 hover:bg-blue-500 hover:text-white transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/jeremyskinner812"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-navy-700 rounded-lg flex items-center justify-center text-slate-300 hover:bg-slate-600 hover:text-white transition-all duration-200"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="mailto:Jdskinne@gmail.com"
                className="w-10 h-10 bg-navy-700 rounded-lg flex items-center justify-center text-slate-300 hover:bg-blue-500 hover:text-white transition-all duration-200"
                aria-label="Email"
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-10 pt-6 text-center">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Jeremy Skinner. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
