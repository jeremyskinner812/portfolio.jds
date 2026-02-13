function SkillCard({ icon: Icon, name, level }) {
  const levelWidth = {
    Beginner: '25%',
    Intermediate: '50%',
    Advanced: '75%',
    Expert: '100%',
  }

  return (
    <div className="card p-5 flex items-center gap-4">
      <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center flex-shrink-0">
        {Icon && <Icon className="w-6 h-6 text-navy-800" />}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1.5">
          <span className="font-semibold text-navy-800 text-sm">{name}</span>
          <span className="text-xs text-slate-400 font-medium">{level}</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-500"
            style={{ width: levelWidth[level] || '50%' }}
          />
        </div>
      </div>
    </div>
  )
}

export default SkillCard
