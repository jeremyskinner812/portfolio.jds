import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: 'Home Network Lab',
    description:
      'Built a multi-VLAN home lab with managed switches, pfSense firewall, and Proxmox virtualization. Configured inter-VLAN routing, DHCP, and DNS.',
    tags: ['Networking', 'pfSense', 'VLANs', 'Proxmox'],
    liveUrl: null,
    repoUrl: '#',
  },
  {
    title: 'IT Ticketing Dashboard',
    description:
      'Developed an internal dashboard to track and visualize helpdesk metrics. Displays response times, ticket volume trends, and SLA compliance.',
    tags: ['Python', 'Dashboard', 'Data Viz', 'REST API'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Network Monitoring Setup',
    description:
      'Deployed and configured Zabbix/Nagios for monitoring network devices, servers, and services. Set up alerting and custom dashboards.',
    tags: ['Monitoring', 'Zabbix', 'SNMP', 'Linux'],
    liveUrl: null,
    repoUrl: '#',
  },
  {
    title: 'Active Directory Automation',
    description:
      'Created PowerShell scripts to automate user provisioning, group management, and bulk operations in Active Directory environments.',
    tags: ['PowerShell', 'Active Directory', 'Automation'],
    liveUrl: null,
    repoUrl: '#',
  },
  {
    title: 'Wireless Site Survey Tool',
    description:
      'Built a tool to document and analyze wireless coverage in office environments. Generates heatmaps and suggests AP placement improvements.',
    tags: ['WiFi', 'Python', 'Analysis', 'Networking'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Backup & Recovery System',
    description:
      'Designed and implemented an automated backup solution using Veeam and custom scripts for critical server infrastructure.',
    tags: ['Backup', 'Veeam', 'Scripting', 'Disaster Recovery'],
    liveUrl: null,
    repoUrl: '#',
  },
]

function Projects() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h1 className="section-title">Projects</h1>
        <p className="section-subtitle">
          A selection of projects showcasing my skills in networking, IT support,
          and systems administration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
