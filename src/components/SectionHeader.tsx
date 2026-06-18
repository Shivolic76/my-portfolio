const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) => (
  <div className="text-center mb-10 sm:mb-14 lg:mb-16 px-2">
    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700/40 rounded-full mb-4 sm:mb-5">
      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0" />
      <span className="text-xs font-bold tracking-widest uppercase text-indigo-600 dark:text-indigo-400">
        {eyebrow}
      </span>
    </div>
    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-3 sm:mb-4">
      {title}
    </h2>
    <p className="text-sm sm:text-base lg:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
      {subtitle}
    </p>
  </div>
);

export default SectionHeader;
