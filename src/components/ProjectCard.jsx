import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

function ProjectCard({ title, description, tags, image, liveUrl, repoUrl }) {
  return (
    <div className="card overflow-hidden group">
      {/* Thumbnail */}
      <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="text-slate-400 text-sm font-medium">Project Screenshot</div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-navy-800 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-500 hover:text-blue-600 text-sm font-medium transition-colors"
            >
              <FaExternalLinkAlt className="w-3.5 h-3.5" />
              Live Demo
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-500 hover:text-slate-700 text-sm font-medium transition-colors"
            >
              <FaGithub className="w-4 h-4" />
              Source
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
