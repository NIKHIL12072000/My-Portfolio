import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function CodingProfileCard({ profile }) {
  return (
    <motion.a
      href={profile.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="group rounded-xl border border-gray-200 dark:border-gray-700 
                 bg-white dark:bg-gray-900 p-6 hover:shadow-lg 
                 transition-all"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {profile.platform}
        </h3>
        <ExternalLink
          size={18}
          className="text-gray-400 group-hover:text-indigo-600 transition"
        />
      </div>

      <p className="mt-2 text-sm text-gray-500">@{profile.username}</p>

      <p className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-300">
        {profile.stats}
      </p>

      {/* Accent line */}
      <div className={`mt-4 h-1 w-12 rounded bg-${profile.accent}-500`} />
    </motion.a>
  );
}
