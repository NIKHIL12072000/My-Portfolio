import { Heart, BookOpen, Dumbbell, Home } from "lucide-react";
import { motion } from "framer-motion";
import { hobbies } from "../data/my_data";

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
              {hobby.title == "Reading" ? <BookOpen size={22} /> : ""}
              {hobby.title == "Fitness & Sports" ? <Dumbbell size={22} /> : ""}
              {hobby.title == "Learning New Technologies" ? (
                <Heart size={22} />
              ) : (
                ""
              )}
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
