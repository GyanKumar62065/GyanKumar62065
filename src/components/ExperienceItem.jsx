const ExperienceItem = ({ role, company, date, description, current }) => (
  <div className="relative pl-8 md:pl-12 group">
    <div className={`absolute -left-[5px] top-2 w-3 h-3 rounded-full border ${current ? 'bg-cyan-500 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.6)]' : 'bg-slate-400 dark:bg-slate-600 border-slate-300 dark:border-slate-900'}`}></div>
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{role}</h3>
      <span className="font-mono text-sm text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20 px-2 py-1 rounded">{date}</span>
    </div>
    <div className="text-lg text-slate-600 dark:text-slate-400 mb-4 font-medium">{company}</div>
    <ul className="list-disc list-outside ml-4 text-slate-600 dark:text-slate-400 space-y-2 text-sm leading-relaxed">
      {description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default ExperienceItem;