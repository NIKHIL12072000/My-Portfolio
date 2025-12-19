import { motion } from "framer-motion";
export default function Timeline({ experiences }) {
  return (
    <div className="relative border-l border-gray-300 dark:border-gray-700">
      {experiences.map((role, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          className="mb-14 ml-8"
        >
          {/* Timeline Dot */}
          <span
            className="absolute -left-[7px] mt-2 h-4 w-4 rounded-full 
                             bg-indigo-600 ring-4 ring-indigo-200 
                             dark:ring-indigo-900"
          />

          {/* Experience Card */}
          <div
            className="rounded-xl border border-gray-200 dark:border-gray-700 
                            bg-white dark:bg-gray-900 p-6 shadow-sm"
          >
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {role.title}
              </h3>
              <span className="text-sm text-gray-500">{role.year}</span>
            </div>

            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {role.company} • {role.location}
            </p>

            {/* Projects */}
            <div className="mt-6 space-y-4">
              {role.projects.map((project, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-gray-200 dark:border-gray-700 
                               bg-gray-50 dark:bg-gray-800 p-4"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                    {project.name}
                  </h4>

                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>

                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700 dark:text-gray-300">
                    {project.impact.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-gray-300 dark:border-gray-600 
                                     px-3 py-1 text-xs text-gray-800 dark:text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
