import { Award } from "lucide-react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Full Stack Web Development",
    issuer: "Acciojob / Coding Shuttle / Bosscoder",
  },
  {
    title: "System Design, Microservices",
    issuer: "Bosscoder / Udemy / Namaste Dev",
  },
  {
    title: "Devops with Multi-Cloud - AWS, Azure, AI Ops & ML Ops",
    issuer: "Tech Aspirants",
  },
  {
    title: "AI & GenAI Foundations",
    issuer: "NVIDIA / Udemy / Coursera / GFG / Pantech",
  },
  {
    title: "Competitive Programming",
    issuer: "GFG",
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "Acciojob / Bosscoder",
  },
  {
    title: "Database Programming with SQL",
    issuer: "Oracle",
  },
  {
    title: "Java Programming",
    issuer: "HackerRank / Udemy",
  },
  {
    title: "Software Engineering",
    issuer: "Udemy",
  },
];

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
