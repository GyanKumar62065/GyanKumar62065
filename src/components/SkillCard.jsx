const SkillCard = ({ icon, title, skills, color }) => {
  const colors = {
    cyan: 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20',
    purple: 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20',
    green: 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20',
  };

  return (
    <div className="bg-white dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700 p-8 rounded-2xl hover:translate-y-[-5px] transition-transform duration-300 shadow-sm hover:shadow-md">
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${colors[color]}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-slate-100">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span key={skill} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-xs font-mono rounded">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;