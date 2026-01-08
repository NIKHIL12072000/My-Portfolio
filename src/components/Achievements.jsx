import { Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { achievements } from "../data/my_data";

export default function Achievements() {
  return (
    <section className="py-16">
      <h2 className="mb-8 text-3xl font-bold text-black-900 dark:text-black-100">
        Achievements
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-4 rounded-xl border 
                       border-gray-200 dark:border-gray-700 
                       bg-white dark:bg-gray-900 p-5"
          >
            <Trophy className="mt-1 text-indigo-600" size={20} />
            <p className="text-sm text-gray-700 dark:text-gray-300">{item}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
