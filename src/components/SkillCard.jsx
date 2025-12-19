import { motion } from "framer-motion";

export default function SkillCard({
  title,
  subtitle,
  skills,
  accent = "indigo",
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="group relative rounded-2xl border border-gray-200 dark:border-gray-700 
                 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-lg 
                 transition-all duration-300"
    >
      {/* Accent bar */}
      <div
        className={`absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-${accent}-500`}
      />

      {/* Header */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {subtitle}
          </p>
        )}
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-gray-300 dark:border-gray-600
                       px-3 py-1 text-sm text-gray-800 dark:text-gray-200
                       hover:border-indigo-500 hover:text-indigo-600
                       dark:hover:text-indigo-400 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
