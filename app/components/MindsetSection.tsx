"use client";

import { motion } from "framer-motion";

const mindset = [
  {
    title: "Problem Analysis",
    desc: "I break down complex problems into smaller components, identifying core requirements and possible edge cases before writing code.",
  },
  {
    title: "System Design",
    desc: "I design scalable architectures using modular patterns, ensuring maintainability and separation of concerns.",
  },
  {
    title: "Security First",
    desc: "I prioritize secure implementations using authentication, validation, and best practices to protect data and systems.",
  },
  {
    title: "Performance Optimization",
    desc: "I optimize queries, APIs, and frontend rendering to ensure fast and efficient applications.",
  },
  {
    title: "Clean Code",
    desc: "I follow clean architecture principles, writing readable, reusable, and maintainable code.",
  },
  {
    title: "Continuous Learning",
    desc: "I constantly improve my skills by exploring new technologies and refining best practices.",
  },
];

export default function MindsetSection() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto mb-40 px-6">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
          Engineering Mindset
        </h2>

        <p className="text-zinc-400 mt-3 max-w-2xl mx-auto">
          My approach to building systems is focused on scalability, security,
          and real-world problem solving.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8">
        {mindset.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-cyan-400/20 via-fuchsia-500/20 to-transparent"
          >
            <div className="bg-zinc-900/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 group-hover:border-cyan-400/40 transition">

              {/* ICON / NUMBER */}
              <div className="text-2xl font-bold text-cyan-400 mb-3">
                0{index + 1}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                {item.desc}
              </p>

              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl bg-cyan-500/10"></div>

            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}