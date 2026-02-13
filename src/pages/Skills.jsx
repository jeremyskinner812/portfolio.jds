import SkillCard from '../components/SkillCard'
import {
  FaNetworkWired,
  FaServer,
  FaShieldAlt,
  FaWindows,
  FaLinux,
  FaPython,
  FaCloud,
  FaApple,
} from 'react-icons/fa'
import {
  SiCisco,
  SiWireshark,
  SiVmware,
  SiSplunk,
} from 'react-icons/si'
import { HiTerminal } from 'react-icons/hi'

const skillCategories = [
  {
    title: 'Networking',
    skills: [
      { icon: FaNetworkWired, name: 'TCP/IP, DNS & DHCP', level: 'Advanced' },
      { icon: FaNetworkWired, name: 'VLANs & Subnetting/VLSM', level: 'Advanced' },
      { icon: SiCisco, name: 'OSPF & EIGRP Routing', level: 'Intermediate' },
      { icon: FaShieldAlt, name: 'NAT & ACLs', level: 'Advanced' },
    ],
  },
  {
    title: 'Systems & Platforms',
    skills: [
      { icon: FaWindows, name: 'Windows 10/11 & Server', level: 'Advanced' },
      { icon: FaWindows, name: 'Active Directory', level: 'Advanced' },
      { icon: FaLinux, name: 'Linux Administration', level: 'Intermediate' },
      { icon: FaApple, name: 'macOS Support', level: 'Advanced' },
    ],
  },
  {
    title: 'Security & SIEM',
    skills: [
      { icon: SiSplunk, name: 'Splunk', level: 'Intermediate' },
      { icon: FaShieldAlt, name: 'Chronicle SIEM', level: 'Intermediate' },
      { icon: FaShieldAlt, name: 'Incident Response', level: 'Intermediate' },
      { icon: FaShieldAlt, name: 'Log Analysis & Email Header Analysis', level: 'Intermediate' },
    ],
  },
  {
    title: 'Tools & Cloud',
    skills: [
      { icon: SiWireshark, name: 'Wireshark', level: 'Intermediate' },
      { icon: SiCisco, name: 'Cisco Packet Tracer', level: 'Intermediate' },
      { icon: SiVmware, name: 'VMware', level: 'Intermediate' },
      { icon: FaCloud, name: 'AWS', level: 'Intermediate' },
    ],
  },
  {
    title: 'Scripting & Development',
    skills: [
      { icon: FaPython, name: 'Python', level: 'Intermediate' },
      { icon: HiTerminal, name: 'Git & Version Control', level: 'Intermediate' },
      { icon: HiTerminal, name: 'Full Stack Web Development', level: 'Intermediate' },
      { icon: FaServer, name: 'Remote Support Tools', level: 'Advanced' },
    ],
  },
]

const certifications = [
  {
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    description: 'Security fundamentals, threat analysis, and risk management',
    color: 'bg-green-50 border-green-200',
    accent: 'text-green-600',
  },
  {
    name: 'CompTIA Network+',
    issuer: 'CompTIA',
    description: 'Network infrastructure, operations, and troubleshooting',
    color: 'bg-orange-50 border-orange-200',
    accent: 'text-orange-600',
  },
  {
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    description: 'Cloud concepts, AWS services, security, and architecture',
    color: 'bg-yellow-50 border-yellow-200',
    accent: 'text-yellow-600',
  },
]

const education = [
  {
    degree: 'B.S. Information Technology (Networking)',
    school: 'Arizona State University',
    status: 'Expected May 2026',
  },
  {
    degree: 'Full Stack Web Development Bootcamp',
    school: 'University of California, Irvine',
    status: 'Completed 2023',
  },
]

function Skills() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h1 className="section-title">Skills & Certifications</h1>
        <p className="section-subtitle">
          A comprehensive technical toolkit built through hands-on experience,
          formal education, and industry certifications.
        </p>

        {/* Skills by Category */}
        <div className="space-y-12 mb-20">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h2 className="text-xl font-bold text-navy-800 mb-6 flex items-center gap-3">
                <div className="w-1.5 h-6 bg-blue-500 rounded-full" />
                {category.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Industry-recognized credentials that validate my expertise.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className={`rounded-xl border-2 p-6 ${cert.color} transition-transform duration-200 hover:-translate-y-1`}
              >
                <div className={`text-lg font-bold ${cert.accent} mb-1`}>
                  {cert.name}
                </div>
                <div className="text-sm text-slate-600 font-medium mb-3">
                  {cert.issuer}
                </div>
                <div className="text-xs text-slate-500 leading-relaxed">{cert.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Building a strong academic foundation in networking and technology.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {education.map((edu) => (
              <div key={edu.degree} className="card p-6">
                <div className="text-lg font-bold text-navy-800 mb-1">
                  {edu.degree}
                </div>
                <div className="text-sm text-slate-600 font-medium mb-2">
                  {edu.school}
                </div>
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">
                  {edu.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
