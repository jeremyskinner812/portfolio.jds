import { useState } from 'react'
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'

const contactInfo = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'Jdskinne@gmail.com',
    href: 'mailto:Jdskinne@gmail.com',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/jeremydskinner',
    href: 'https://www.linkedin.com/in/jeremydskinner',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/jeremyskinner812',
    href: 'https://github.com/jeremyskinner812',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'Austin, TX',
    href: null,
  },
]

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Placeholder - integrate with Formspree, Netlify Forms, etc.
    alert('Form submission placeholder. Connect to a backend service to enable.')
  }

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h1 className="section-title">Get in Touch</h1>
        <p className="section-subtitle">
          Looking for a driven IT professional who brings both technical depth
          and leadership experience? Let's connect.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-navy-800 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-navy-800 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-navy-800 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-sm resize-none"
                  placeholder="Tell me about the opportunity..."
                />
              </div>

              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2">
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-navy-800 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                      <item.icon className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-navy-800">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-slate-500 hover:text-blue-500 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm text-slate-500">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-500 leading-relaxed">
                  I'm actively seeking Network Engineer and IT Administration roles
                  in the Austin, TX area or remote. Open to full-time opportunities
                  where I can contribute from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
