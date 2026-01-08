import { Award } from "lucide-react";
import { motion } from "framer-motion";
import { certifications } from "../data/my_data";

export default function Certifications() {
  return (
    <section className="py-16">
      <h2 className="mb-8 text-3xl font-bold text-black-900 dark:text-black-100">
        Certifications
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="rounded-xl border border-gray-200 dark:border-gray-700 
                       bg-white dark:bg-gray-900 p-6 text-center"
          >
            <Award className="mx-auto mb-3 text-indigo-600" size={26} />
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">
              {cert.title}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{cert.issuer}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
