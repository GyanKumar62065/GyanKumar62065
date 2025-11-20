const StatCard = ({ number, label, color }) => {
  const colors = {
    cyan: 'hover:border-cyan-500',
    purple: 'hover:border-purple-500',
    green: 'hover:border-green-500',
    yellow: 'hover:border-yellow-500',
  };
  
  return (
    <div className={`bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-6 rounded-xl text-center ${colors[color]} transition-colors shadow-sm`}>
      <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{number}</div>
      <div className="text-sm text-slate-500 dark:text-slate-400 font-mono">{label}</div>
    </div>
  );
};

export default StatCard;