import { Heart, BookOpen, Dumbbell } from "lucide-react";
import { motion } from "framer-motion";

const hobbies = [
  {
    icon: <BookOpen size={22} />,
    title: "Reading",
    desc: "Philosophy, Self-improvement, Knowledge Gaining and Other Fiction Books. Would love to Blog about learnings.",
  },
  {
    icon: <Dumbbell size={22} />,
    title: "Fitness & Sports",
    desc: "Regular workouts and staying physically active. Would love playing Tennis",
  },
  {
    icon: <Heart size={22} />,
    title: "Learning New Technologies",
    desc: "Exploring AI, System design, and Emerging tech like Quantum Computing. Would love to build projects on Real life problems and simplify lives.",
  },
];

export default function Hobbies() {
  return (
    <section className="py-16">
      <h2 className="mb-8 text-3xl font-bold text-black-900 dark:text-black-100">
        Hobbies
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="rounded-xl border border-gray-200 dark:border-gray-700 
                       bg-white dark:bg-gray-900 p-6 text-center"
          >
            <div className="mb-3 flex justify-center text-indigo-600">
              {hobby.icon}
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">
              {hobby.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {hobby.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
