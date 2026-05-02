"use client";

import { motion } from "framer-motion";

const learningItems = [
  {
    title: "Advanced Authentication",
    desc: "Implementing secure auth systems with JWT, sessions and role-based access control."
  },
  {
    title: "System Design",
    desc: "Designing scalable architectures and distributed systems for real-world applications."
  },
  {
    title: "Clean Architecture",
    desc: "Structuring applications for maintainability, scalability and separation of concerns."
  },
  {
    title: "API Security",
    desc: "Applying best practices for securing REST APIs and handling sensitive data."
  }
];

export default function LearningSection() {
  return (
    <section className="relative z-10 max-w-5xl mx-auto mb-40 px-6">

      {/* TITULO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
          Currently Learning
        </h2>

        <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
          Constantly improving my skills and exploring advanced concepts
          to build high-performance and secure applications.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-8">

        {learningItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-purple-500/40 via-fuchsia-500/20 to-transparent"
          >
            <div className="h-full w-full rounded-2xl bg-zinc-900/80 backdrop-blur-xl p-6 border border-white/10 group-hover:border-purple-400/40 transition">

              <h3 className="text-lg font-semibold text-purple-300 group-hover:text-purple-200 transition">
                {item.title}
              </h3>

              <p className="text-sm text-zinc-400 mt-3 leading-relaxed">
                {item.desc}
              </p>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl bg-purple-500/10" />

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}