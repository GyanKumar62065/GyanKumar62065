const SectionTitle = ({ number, title }) => (
  <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 text-slate-900 dark:text-slate-100">
    <span className="text-cyan-600 dark:text-cyan-400 font-mono text-xl">{number}.</span> {title}
  </h2>
);

export default SectionTitle;