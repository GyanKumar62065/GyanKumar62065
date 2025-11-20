import { ExternalLink } from "lucide-react";

const ProjectCard = ({ title, desc, tags, icon, link, color }) => {
  const hoverColors = {
    cyan: 'group-hover:text-cyan-600 dark:group-hover:text-cyan-400',
    purple: 'group-hover:text-purple-600 dark:group-hover:text-purple-400',
  };

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="group relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-cyan-600 dark:hover:border-cyan-500 transition-all shadow-sm hover:shadow-lg block">
      <div className="relative p-8 h-full flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <div className={`p-3 rounded-lg ${color === 'cyan' ? 'bg-cyan-50 text-cyan-600 dark:bg-cyan-900/20 dark:text-cyan-400' : 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400'}`}>
            {icon}
          </div>
          <ExternalLink className="text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" size={20} />
        </div>
        
        <h3 className={`text-2xl font-bold text-slate-900 dark:text-white mb-3 ${hoverColors[color]} transition-colors`}>{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
          {desc}
        </p>
        
        <div className="mt-auto flex flex-wrap gap-3 text-xs font-mono text-slate-500 dark:text-slate-300">
          {tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;