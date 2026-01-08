import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sun,
  Moon,
  Mail,
  Github,
  Linkedin,
  FileText,
  Code,
  Instagram,
  MessageCircle,
} from "lucide-react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import SkillCard from "./SkillCard.jsx";
import Timeline from "./Timeline.jsx";
import {
  projects,
  professionalExperiences,
  personalExperiences,
} from "../data/my_data.js";
import Achievements from "./Achievements.jsx";
import Certifications from "./Certifications.jsx";
import Hobbies from "./Hobbies.jsx";
import CodingProfileCard from "./CodingProfileCard.jsx";
import { codingProfiles } from "../data/my_data.js";
import { skills } from "../data/my_data.js";
import { useNavigate } from "react-router-dom";

export default function Portfolio() {
  const navigate = useNavigate();
  const [dark, setDark] = useState(false);

  return (
    <div
      className={
        "min-h-screen transition-colors " +
        (dark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900")
      }
    >
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="font-bold text-xl">Nikhil Dachepally</div>
          <div className="text-sm text-muted-foreground">
            SDE2 • Full Stack Web Developer
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Toaster position="bottom-center" />
          <a
            target="_blank"
            href="/blogs"
            className="rounded-lg bg-indigo-600 px-5 py-2 text-white 
             hover:bg-indigo-700 transition"
          >
            Read My Blogs →
          </a>
          <button
            aria-label="Toggle theme"
            onClick={() => setDark(!dark)}
            className="p-2 rounded-md hover:bg-gray-200/50 dark:hover:bg-white/5"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            aria-label="Resume"
            target="_blank"
            href="/resume/Nikhil_Dachepally_SDE2_Resume.pdf"
            className="inline-flex items-center gap-2 px-3 py-2 border rounded-md hover:shadow"
          >
            {" "}
            <FileText size={16} /> Resume{" "}
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        <section className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Hi, I'm <span className="text-indigo-500">Nikhil</span>. I build
              Scalable Web Applications.
            </h1>
            <p className="mt-4 text-lg max-w-xl">
              Dedicated and Driven developer with a strong background in full
              stack development, leveraging React and Spring Boot. Demonstrated
              expertise in data integration and microservices, coupled with a
              talent for system optimization. Eager to contribute to projects
              that require innovative solutions, while enhancing productivity
              and ensuring efficient system performance. Passionate about
              exploring and integrating cutting-edge technologies to drive
              project success and achieve superior outcomes.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:brightness-105"
              >
                See projects
              </a>
              <a href="#contact" className="px-4 py-2 rounded-md border">
                Get in touch
              </a>
              <a
                href="https://github.com/NIKHIL12072000"
                target="_blank"
                className="px-4 py-2 rounded-md inline-flex items-center gap-2 border"
                aria-label="Github"
              >
                {" "}
                <Github size={14} /> GitHub{" "}
              </a>
              <a
                href="https://www.linkedin.com/in/nikhildachepally/"
                target="_blank"
                className="px-4 py-2 rounded-md inline-flex items-center gap-2 border"
                aria-label="Linkedin"
              >
                {" "}
                <Linkedin size={14} /> LinkedIn{" "}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="p-6 bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-lg dark:from-transparent dark:to-gray-800"
          >
            <div className="h-64 rounded-lg bg-gradient-to-tr from-indigo-200/40 to-transparent flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm text-muted-foreground">
                  Featured project
                </div>
                <div className="text-2xl font-bold mt-2">Code Genie</div>
                <p className="mt-2 text-sm max-w-xs mx-auto">
                  Full‑stack platform that generates Code on just user input.
                </p>
                <div className="mt-4 flex justify-center gap-3">
                  <a
                    href="#"
                    className="px-3 py-2 border rounded inline-flex items-center gap-2"
                  >
                    <Code size={14} /> Demo
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 border rounded inline-flex items-center gap-2"
                  >
                    <Github size={14} /> Repo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="py-16">
          <h2 className="mb-8 text-3xl font-bold text-black-900 dark:text-black-100">
            Coding Profiles
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {codingProfiles.map((profile) => (
              <CodingProfileCard key={profile.platform} profile={profile} />
            ))}
          </div>
        </section>

        <section id="projects" className="py-16">
          <h2 className="mb-8 text-3xl font-bold text-black-900 dark:text-black-100">
            Personal Projects
          </h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.08 }}
                className="p-6 border rounded-lg hover:shadow"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg">{p.title}</h3>
                    <p className="text-sm mt-2 text-muted-foreground">
                      {p.desc}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-1 border rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <a
                      href={p.url}
                      className="px-3 py-2 border rounded inline-flex items-center gap-2"
                    >
                      Live
                    </a>
                    <a
                      href={p.repo}
                      className="px-3 py-2 border rounded inline-flex items-center gap-2"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
        <section id="skills" className="py-16">
          <h2 className="mb-8 text-3xl font-bold text-black-900 dark:text-black-100">
            Skills & Tech
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <SkillCard
              title="Full Stack & Distributed Systems"
              skills={skills[0]}
            />
            <SkillCard title="AI & GenAI" skills={skills[1]} />
            <SkillCard title="DevOps & Observability" skills={skills[2]} />
          </div>
        </section>
        <section id="professional experience" className="py-16">
          <h2 className="mb-8 text-3xl font-bold text-black-900 dark:text-black-100">
            Professional Experience (3 years)
          </h2>
          <Timeline experiences={professionalExperiences} />
        </section>
        <section id="personal experience" className="py-16">
          <h2 className="mb-8 text-3xl font-bold text-black-900 dark:text-black-100">
            Personal Experiences
          </h2>
          <Timeline experiences={personalExperiences} />
        </section>
        <Achievements />
        <Certifications />
        <Hobbies />
        <section id="contact" className="py-16 grid md:grid-cols-2 gap-8">
          <div className="p-6 border rounded">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Open to SDE2 roles, mentorship, and collaboration.
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-3">
                <Mail size={16} /> <span>dachepallinikhil@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin size={16} />{" "}
                <a
                  href="https://www.linkedin.com/in/nikhildachepally/"
                  target="_blank"
                >
                  linkedin.com/in/nikhildachepally
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Github size={16} />{" "}
                <a href="https://github.com/NIKHIL12072000" target="_blank">
                  github.com/NIKHIL12072000
                </a>
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-6 border rounded"
          >
            <form
              action="https://formspree.io/f/mbdrlgdn"
              method="POST"
              className="grid gap-3"
            >
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="px-3 py-2 border rounded"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                className="px-3 py-2 border rounded"
              />

              <textarea
                name="message"
                required
                placeholder="Your message"
                className="px-3 py-2 border rounded h-28"
              />

              <button
                type="submit"
                className="px-4 py-2 rounded bg-indigo-600 text-white 
               hover:bg-indigo-700 transition"
              >
                Send message
              </button>
            </form>
          </motion.form>
        </section>
        <footer className="mt-8 py-6 text-center text-sm text-muted-foreground">
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://www.instagram.com/nikhil__dachepally/?__pwa=1"
              target="_blank"
              aria-label="Instagram"
              className="inline-flex items-center gap-2"
            >
              <Instagram size={16} /> Instagram
            </a>
            <a
              href="https://wa.me/919133557596"
              target="_blank"
              aria-label="WhatsApp"
              className="inline-flex items-center gap-2"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
          <div className="mt-4">
            © {new Date().getFullYear()} Nikhil Dachepally
          </div>
        </footer>
      </main>
    </div>
  );
}
